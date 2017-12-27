export interface IAppEnvironment {
  env: 'production' | 'develpment' | 'testing';
  port: number;
  sessionSecret: string;
  id: string;
  swaggerSpecPath: string;
  requestSizeLimit: string;
  logLevel: string;
}