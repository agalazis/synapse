import './common/env';
import * as convict from 'convict';
import 'reflect-metadata';
import { Container } from 'inversify';
import { apiModule } from './api';
import { TYPES, InversifyExpressSwaggerServer, commonModule } from './common'; 
const container = new Container();
container.load(apiModule, commonModule)
export default (container.get(TYPES.InversifyExpressSwaggerServer) as InversifyExpressSwaggerServer)
  .init(container)
  .registerMiddleware()
  .listen();
