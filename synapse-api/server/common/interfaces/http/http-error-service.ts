import { HTTP_ERRORS } from '../../config'
import { IHttpError } from './http-error'
export type HttpErrorKey = keyof typeof HTTP_ERRORS
export interface IHttpErrorService{
  findOne(httpErrorKey: HttpErrorKey):IHttpError;
}