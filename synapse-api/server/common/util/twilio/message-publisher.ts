import * as pino from 'pino';
import * as twilio from 'twilio';
import { TYPES } from '../../constants';
import { inject, injectable } from 'inversify';
import { IEnvironmentService, ITwilioEnvironment , IMessagePublisher, IMessage, IPublisherResponse } from '../../interfaces';
import {  ITwilioResponse } from './interfaces';

@injectable()
export class MessagePublisher implements  IMessagePublisher<IPublisherResponse> {
    private twilio: twilio.RestClient;
    private messageDefaults={};
    private get messages(){
        return this.twilio.messages;
    }
    private composeMessage(message: IMessage){
      return Object.assign({}, this.messageDefaults, message);
    }
    constructor ( @inject(TYPES.TwilioEnvironmentService) private twilioEnvironmentService: IEnvironmentService<ITwilioEnvironment> ) {
      const { accountSid, authToken, twilioPhoneNumber } = twilioEnvironmentService.getProperties();
      if(twilioPhoneNumber){
        this.messageDefaults={from:twilioPhoneNumber}
      }
      this.twilio = twilio(accountSid, authToken); 
    }
    async create(msg:IMessage):Promise<IPublisherResponse> {
      const message = this.composeMessage(msg);
      return this.messages.create(message).then(
        (result:ITwilioResponse)=>{
          const {
            sid,
            accountSid,
            dateCreated,
            dateUpdated,
            dateSent,
            to,
            from,
            body,
            status
          } =result
          return {
            sid,
            accountSid,
            dateCreated,
            dateUpdated,
            dateSent,
            to,
            from,
            body,
            status
          }
        }
      )
    }
}