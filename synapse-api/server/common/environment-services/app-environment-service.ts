import * as convict from 'convict';
import { IEnvironmentService } from '../interfaces';
import { IAppEnvironment } from '../interfaces';
import { appEnvironmentSchema } from './schemas/app-environment-schema';

export const appEnvironmentService = convict(
  appEnvironmentSchema,
) as IEnvironmentService<IAppEnvironment>;
