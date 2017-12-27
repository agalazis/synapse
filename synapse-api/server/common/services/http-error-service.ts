import * as createError from 'http-errors';
import { HTTP_ERRORS } from '../config'
import { injectable } from 'inversify';
import { HttpErrorKey, IHttpErrorService } from '../interfaces';

@injectable()
export class HttpErrorService implements IHttpErrorService {
  private httpErrors = new Map<HttpErrorKey, createError.HttpError>();
  constructor( 
  ) { 
    this.init();
  }
  private setError(errorKey:HttpErrorKey, value:createError.HttpError){
    this.httpErrors.set(errorKey, value)
  }
  private getError(errorKey:HttpErrorKey){
    return this.httpErrors.get(errorKey)
  }
  private init(){
    for (let errorKey in HTTP_ERRORS){
      if (HTTP_ERRORS.hasOwnProperty(errorKey)){
        const { code, message } = HTTP_ERRORS[errorKey as HttpErrorKey];
        this.httpErrors.set(errorKey as HttpErrorKey, createError(code,message))
      }
    }
  }
  findOne(errorKey: HttpErrorKey){
    return this.getError(errorKey);
  }
}