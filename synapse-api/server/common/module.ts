import { ContainerModule, interfaces as inversifyInterfaces } from 'inversify';
import { interfaces } from './';
import { TYPES } from './constants';
import * as Es from './environment-services';
import { InversifyExpressSwaggerServer } from './server';
import { HttpErrorService } from './services';
import { Swagger } from './swagger';
import { Logger, Twilio } from './util';

// const getLogger = ({container}:inversifyInterfaces.Context)=>{
//   const appEnvironmentService = container.get(TYPES.AppEnvironmentService) as IEnvironmentService<IAppEnvironment>
//   return Logger.getOrCreate(appEnvironmentService);
// }

export const commonModule = new ContainerModule(
	(
		bind: inversifyInterfaces.Bind,
		unbind: inversifyInterfaces.Unbind,
		isBound: inversifyInterfaces.IsBound,
		rebind: inversifyInterfaces.Rebind,
	) => {
		bind<interfaces.IEnvironmentService<interfaces.ITwilioEnvironment>>(
			TYPES.TwilioEnvironmentService,
		).toConstantValue(Es.twilioEnvironmentService);
		bind<interfaces.IEnvironmentService<interfaces.IAppEnvironment>>(
			TYPES.AppEnvironmentService,
		).toConstantValue(Es.appEnvironmentService);
		bind<InversifyExpressSwaggerServer>(TYPES.InversifyExpressSwaggerServer)
			.to(InversifyExpressSwaggerServer)
			.inSingletonScope();
		bind<interfaces.IMessagePublisher<interfaces.IPublisherResponse>>(
			TYPES.MessagePublisher,
		)
			.to(Twilio.MessagePublisher)
			.inSingletonScope();
		bind<interfaces.ILogger>(TYPES.Logger)
			.to(Logger.AppLogger)
			.inSingletonScope();
		bind<interfaces.IHttpErrorService>(TYPES.HttpErrorService)
			.to(HttpErrorService)
			.inSingletonScope();
		bind<typeof Swagger>(TYPES.Swagger).toConstantValue(Swagger);
	},
);
