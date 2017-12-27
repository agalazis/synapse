import * as createHttpError from 'http-errors'
interface HttpHandler{
  createHttpError: (errorCode: string, message: string)=> createHttpError.HttpError;
}
type x<T>= T & HttpHandler;
export function throwsHttpError<T extends {new(...args:any[]):{}}>(constructor:T)  {
  Object.defineProperty(constructor.prototype, 'createHtttpError', {
    // tslint:disable-next-line:object-literal-shorthand
    get: function() {
      return createHttpError;
    },
    enumerable: true,
    configurable: true,
  });
  return constructor;
}