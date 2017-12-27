import { Action } from '@ngrx/store';
import { ISmsPromotion } from './sms-promotion.model';

export const  S_CREATE_SUBMIT = '[SmsPromotion] S_CREATE_SUBMIT';
export const  S_CREATE_RESET = '[SmsPromotion] S_CREATE_RESET';

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class CreateSubmitSignal implements Action {
  readonly type = S_CREATE_SUBMIT;

  constructor(public payload: ISmsPromotion) { }
}
export class CreateResetSignal implements Action {
  readonly type = S_CREATE_RESET;

  constructor() { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Signals = CreateSubmitSignal | CreateResetSignal;