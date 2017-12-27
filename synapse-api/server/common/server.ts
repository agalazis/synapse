import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { Application } from 'express';
import { Container } from 'inversify';
import { inject, injectable } from 'inversify';
import {
	InversifyExpressServer,
} from 'inversify-express-utils';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import * as os from 'os';
import * as path from 'path';
import { TYPES } from './constants/types';
import { IAppEnvironment, IEnvironmentService, ILogger } from './interfaces';
import { Swagger } from './swagger';

@injectable()
export class InversifyExpressSwaggerServer {
	private _server: InversifyExpressServer;
	constructor(
		@inject(TYPES.AppEnvironmentService)
		private appEnvironmentService: IEnvironmentService<IAppEnvironment>,
		@inject(TYPES.Swagger) private swagger: typeof Swagger,
		@inject(TYPES.Logger) private logger: ILogger,
	) {}
	public init(container: Container) {
		const env = this.appEnvironmentService.get('env');
		if (env === 'development') {
			const logger = makeLoggerMiddleware();
			container.applyMiddleware(logger);
		}
		this.server = new InversifyExpressServer(container, null, {
			rootPath: '/api',
		});
		return this;
	}
	public registerMiddleware(): InversifyExpressSwaggerServer {
		this.server.setConfig((app: Application) => {
			const root = path.normalize(__dirname + '/../..');
			app.set('appPath', root + 'client');
			app.use(bodyParser.json());
			app.use(bodyParser.urlencoded({ extended: true }));
			app.use(cookieParser(process.env.SESSION_SECRET));
			app.use(express.static(`${root}/public`));
			this.swaggerify(app);
		});
		this.server.setErrorConfig((app: Application) => {
			this.registerErrorHandlers(app);
		});
	
		return this;
	}
	
	public listen(): InversifyExpressSwaggerServer {
		const port = this.appEnvironmentService.get('port');
		const welcome = (port: number) => () =>
			this.logger.info(
				`up and running in ${process.env.NODE_ENV ||
					'development'} @: ${os.hostname()} on port: ${port}}`,
			);
		this.server.build().listen(port, welcome(port));
		return this;
	}
	private swaggerify(app: Application) {
		const {
			sessionSecret,
			swaggerSpecPath,
			requestSizeLimit,
		} = this.appEnvironmentService.getProperties();
		return this.swagger.swaggerify(app, {
			sessionSecret,
			swaggerSpecPath,
			requestSizeLimit,
		});
	}
	private registerErrorHandlers(app: Application) {
		return this.swagger.registerErrorHandlers(app);
	}
	private get server() {
		if (!this._server) {
			throw new Error('Server not initialized!');
		}
		return this._server;
	}
	private set server(server: InversifyExpressServer) {
		if (this._server) {
			throw new Error('Server already initialized!');
		}
		this._server = server;
	}
}
