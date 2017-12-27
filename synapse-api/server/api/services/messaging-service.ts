import { inject, injectable } from 'inversify';
import { TYPES as COMMON_TYPES, interfaces as commonInterfaces  } from '../../common'
import * as moment from 'moment'
@injectable()
export class MessagingService {
  constructor(
    @inject(COMMON_TYPES.MessagePublisher) 
    private message: commonInterfaces.IMessagePublisher<commonInterfaces.IPublisherResponse>,
  ) {
  }
  public async create(msg: string, telephoneNumber: string) {
    return this.message.create({
      body: msg,
      to: telephoneNumber,  // Text this number
    });
  }
}
