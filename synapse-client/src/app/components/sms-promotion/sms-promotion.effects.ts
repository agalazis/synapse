import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/from';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { S_CREATE_SUBMIT, S_CREATE_RESET, CreateResetSignal, CreateSubmitSignal } from './sms-promotion.signals';
import { 
  CreateSuccessMessage,  
  CreateFailureMessage,
  CreatePendingMessage,
  CreateResetMessage
} from './sms-promotion.messages';
import { 
  ResetAction as FormResetMessage, 
  SetValueAction as FormSetValueMessage 
} from 'ngrx-forms';
import { SMSPromotionService } from './sms-promotion.service';
import { INITIAL_FORM_STATE } from './sms-promotion.reducer';

type SubmitPromoActions = CreatePendingMessage | CreateSuccessMessage | CreateFailureMessage;
type ResetPromoActions =  CreateResetMessage | FormResetMessage | FormSetValueMessage<any>;

@Injectable()
export class SmsPromotionEffects {
  @Effect() createSumbitSmsPromotion$: Observable< SubmitPromoActions > = (this.actions$.ofType(S_CREATE_SUBMIT) as Observable<CreateSubmitSignal>)
    .switchMap((action: CreateSubmitSignal)  =>{
      return Observable.merge(
        of(new CreatePendingMessage(action.payload)),
        this.smsPromotionService.createPromoCode(action.payload)
          // If successful, dispatch success action with result
          .map(data => new CreateSuccessMessage(data))
          .catch((e) => of(new CreateFailureMessage(e)))
      )
    });
  @Effect() createResetSmsPromotion$: Observable< ResetPromoActions > = (this.actions$.ofType(S_CREATE_RESET) as Observable<CreateResetSignal>)
    .switchMap((action: CreateResetSignal)  =>Observable.from([ 
      new FormResetMessage(INITIAL_FORM_STATE.id),
      new FormSetValueMessage(INITIAL_FORM_STATE.id,INITIAL_FORM_STATE.value),
      new CreateResetMessage()
    ])) as Observable< ResetPromoActions >
  constructor(
    private smsPromotionService: SMSPromotionService,
    private actions$: Actions
  ) {}
}