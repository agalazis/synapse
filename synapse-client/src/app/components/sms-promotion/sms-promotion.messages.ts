import { Action } from '@ngrx/store';
import { ISmsPromotion } from './sms-promotion.model';

export const  M_CREATE_SUCCESS = '[SmsPromotion] M_CREATE_SUCCESS';
export const  M_CREATE_FAILURE = '[SmsPromotion] M_CREATE_FAILURE';
export const  M_CREATE_PENDING = '[SmsPromotion] M_CREATE_PENDING';
export const  M_CREATE_RESET   = '[SmsPromotion] M_CREATE_RESET';
/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class CreateFailureMessage implements Action {
  readonly type = M_CREATE_FAILURE;

  constructor(public payload: string) { }
}

export class CreateSuccessMessage implements Action {
  readonly type = M_CREATE_SUCCESS;

  constructor(public payload: any) { }
}
export class CreatePendingMessage implements Action {
  readonly type = M_CREATE_PENDING;

  constructor(public payload: any) { }
}
export class CreateResetMessage implements Action {
  readonly type = M_CREATE_RESET;

  constructor() { }
}
/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
  = CreateSuccessMessage | CreateFailureMessage | CreatePendingMessage;