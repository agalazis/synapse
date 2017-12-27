import * as middleware from 'swagger-express-middleware';
import { Application, Request, Response, NextFunction} from 'express';
import * as path from 'path';
import { inject } from 'inversify/dts/annotation/inject';
import * as createError from 'http-errors';
import httpErrors from 'http-errors-express';
import { ISwaggerMiddlewareConfig } from '../interfaces'

export class Swagger {
  public static async swaggerify(app: Application, middlewareConfig: ISwaggerMiddlewareConfig) {
    return new Promise((resolve, reject) => {
      middleware(path.join(__dirname, 'Api.yaml'), app, function(err, middleware) {

        // Enable Express' case-sensitive and strict options
        // (so "/entities", "/Entities", and "/Entities/" are all different)
        app.enable('case sensitive routing');
        app.enable('strict routing');

        app.use(middleware.metadata());
        app.use(middleware.files(app, {
          apiPath: middlewareConfig.swaggerSpecPath,
        }));

        app.use(middleware.parseRequest({
          // Configure the cookie parser to use secure cookies
          cookie: {
            secret: middlewareConfig.sessionSecret
          },
          // Don't allow JSON content over 100kb (default is 1mb)
          json: {
            limit: middlewareConfig.requestSizeLimit
          }
        }));

        // These two middleware don't have any options (yet)
        app.use(
          middleware.CORS(),
          middleware.validateRequest());
        resolve(app)
      });
    });
  }
  public static registerErrorHandlers(app: Application) {
      // converts any error to valid http error
      app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
        if (err.statusCode &&  err.message) {
          return next(err);
        }
        if (err.status && err.message) {
          return next(createError(err.status, err.message))
        }
        return next(createError(500, 'Internal Server Error'));
      });
      app.use(httpErrors())
  }
  private constructor(){}
}
