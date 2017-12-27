import { Action, combineReducers } from '@ngrx/store';
import {
  cast,
  createFormGroupReducerWithUpdate,
  createFormGroupState,
  disable,
  enable,
  FormGroupState,
  updateGroup,
  validate,
} from 'ngrx-forms';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { equalTo, minLength, required, requiredTrue } from 'ngrx-forms/validation';
import PhoneNumber from 'awesome-phonenumber'
import { State as RootState } from '../../app.reducer';
import { M_CREATE_SUCCESS, M_CREATE_FAILURE, M_CREATE_PENDING, M_CREATE_RESET } from './sms-promotion.messages'
import { CREATE_STATUS_LABELS } from './constants';
import { CreateState } from './constants'

export interface FormValue {
  phoneNumber: string;
  acceptTermsOfUse: boolean;
  satisfyAgeRestriction: boolean;
}

export interface State extends RootState {
  smsPromotion: {
    formState: FormGroupState<FormValue>;
    createState: CreateState
  };
}

export const FORM_ID = 'smsPromotion';

export const INITIAL_FORM_STATE = createFormGroupState<FormValue>(FORM_ID, {
  phoneNumber: '',
  acceptTermsOfUse: false,
  satisfyAgeRestriction: false,
});
const phonenumberIsMobile=(v: any)=> (new PhoneNumber(v)).isMobile()? {} : { notValidMobilePhone: v };
const validationFormGroupReducer = createFormGroupReducerWithUpdate<FormValue>({
  phoneNumber: validate([required,phonenumberIsMobile]),
  acceptTermsOfUse: validate<boolean>(requiredTrue),
  satisfyAgeRestriction: validate<boolean>(requiredTrue)
});
const createStateReducer = (
  state = CreateState.Initial,
  action: Action 
): CreateState => {
  switch (action.type) {
    case M_CREATE_SUCCESS: {
      return CreateState.Success;
    }
    case M_CREATE_FAILURE: {
      return CreateState.Failure;
    }
    case M_CREATE_PENDING: {
      return CreateState.Pending
    }
    case M_CREATE_RESET: {
      return CreateState.Initial
    }
    default: {
      return state;
    }
  }
}
export function reducer(_s: any, _a: any) {
  return combineReducers({
    createState:createStateReducer,
    formState(s = INITIAL_FORM_STATE, a: Action) {
      return validationFormGroupReducer(s, a);
    },
  })(_s, _a);
};
// Selectors
export const getCreateState = (state:State) => state.smsPromotion.createState
export const getFormState =  (state:State) => state.smsPromotion.formState
export const getCreateStatusText = (state:State) => CREATE_STATUS_LABELS[getCreateState(state) as keyof typeof CREATE_STATUS_LABELS]
export const getCreateIsPending = (state:State) => getCreateState(state) == CreateState.Pending
export const getCreateIsSuccessful = (state:State) => getCreateState(state) == CreateState.Success