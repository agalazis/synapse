import * as express from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../constants/types';
import { TYPES as COMMON_TYPES } from '../../common';
import { MessagingService, PromotionService } from '../services';
import { interfaces, controller, httpGet, httpPost, httpDelete, request, queryParam, response, next, requestParam, requestBody } from "inversify-express-utils";
import PhoneNumber from 'awesome-phonenumber';
import { interfaces as commonInterfaces } from '../../common'
import { IPromotionResponse } from '../../common/interfaces';

interface HttpHandler{
    createHttpError: (errorCode: string, message: string)=> any;
  }
@controller('/sms-promotion')
export class SMSPromotionController {
  
    constructor( 
        @inject(TYPES.MessagingService) private messagingService: MessagingService,
        @inject(TYPES.PromotionService) private promotionService: PromotionService,
        @inject(COMMON_TYPES.HttpErrorService)  private httpErrorService: commonInterfaces.IHttpErrorService,
    ) { 
    }
    @httpPost('/')
    async create(//422
        @requestBody('phoneNumber') phoneNumber: string,
        @requestBody('satisfyAgeRestriction') satisfyAgeRestriction: boolean,
        @requestBody('acceptTermsOfUse') acceptTermsOfUse: boolean,
        @next() next: express.NextFunction,

    ):Promise<IPromotionResponse|void>{
        console.log('here')
        const pn= new PhoneNumber(phoneNumber);
        if (!pn.isMobile()){
            // find one accepts only valid strings, no need for constants 
            // thanks to its signature. <3TS
            return next(this.httpErrorService.findOne('CANNOT_PROCESS_PHONE_NUMBER'));
        }
        if (!satisfyAgeRestriction){
            return next(this.httpErrorService.findOne('AGE_RESTRICTION_NOT_SATISFIED'));
        }
        if (!acceptTermsOfUse){
            return next(this.httpErrorService.findOne('TERMS_OF_USE_NOT_ACCEPTED'));
        }       
        return this.promotionService.findCurrent().then(
            (promo: string)=>this.messagingService
                .create(promo,phoneNumber)
                // return only what's in the response interface
                .then(
                    ({sid, dateCreated,dateUpdated, dateSent, to, status}) => ({ sid, dateCreated,dateUpdated, dateSent, to, status })
                )
        ).catch(e=>next(e))
    }
}