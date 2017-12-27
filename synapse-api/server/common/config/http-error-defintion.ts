import { IHttpErrorConfig } from '../interfaces';
// no need to export this 
// it should be updated along with configuration
interface IHttpErrorDefinition {
  CANNOT_PROCESS_PHONE_NUMBER: IHttpErrorConfig,
  AGE_RESTRICTION_NOT_SATISFIED: IHttpErrorConfig,
  TERMS_OF_USE_NOT_ACCEPTED: IHttpErrorConfig
  //[key: string]: IHttpErrorConfig
}
export const HTTP_ERRORS: IHttpErrorDefinition = {
  CANNOT_PROCESS_PHONE_NUMBER: {
    code: 422,
    message: 'Cannot process the provided phone number. Please make  sure it\'s an international mobile phone numbers.'
  },
  AGE_RESTRICTION_NOT_SATISFIED: {
    code: 451,
    message: 'Age restriction not staisfied.'
  },
  TERMS_OF_USE_NOT_ACCEPTED: {
    code: 451,
    message: 'Terms of use not accepted.'
  }
} 