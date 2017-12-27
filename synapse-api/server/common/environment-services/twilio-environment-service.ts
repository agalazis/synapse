
import * as convict from 'convict';
import { IEnvironmentService } from '../interfaces';
import { ITwilioEnvironment } from '../interfaces';
import { twilioEnvironmentSchema } from './schemas';

export const twilioEnvironmentService = convict(
  twilioEnvironmentSchema,
) as IEnvironmentService<ITwilioEnvironment>;
