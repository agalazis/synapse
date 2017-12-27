import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroupState } from 'ngrx-forms';
import { Observable } from 'rxjs/Rx';
import { CreateState } from './constants';
import { FormValue, State, getFormState, getCreateState, getCreateStatusText } from './sms-promotion.reducer';
import { CreateSubmitSignal, CreateResetSignal } from './sms-promotion.signals';
import { ISmsPromotion } from 'app/components/sms-promotion/sms-promotion.model';
import { getCreateIsPending, getCreateIsSuccessful } from './sms-promotion.reducer';
@Component({
  selector: 'sms-promotion',
  templateUrl: './sms-promotion.component.html',
  styleUrls: ['./sms-promotion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
  private formState$: Observable<FormGroupState<FormValue>>;
  private createState$: Observable<CreateState>;
  private createIsPending$: Observable<boolean>;
  private createIsSuccessful$: Observable<boolean>;
  private createStatusText$: Observable<string>;

  constructor(private store: Store<State>) {
    this.formState$ = store.select(getFormState);
    this.createState$ = store.select(getCreateState);
    this.createIsPending$ = store.select(getCreateIsPending);
    this.createIsSuccessful$ = store.select(getCreateIsSuccessful);
    this.createStatusText$ = store.select(getCreateStatusText);
    
  }
  reset(event: any){
    this.store.dispatch(new CreateResetSignal())
  }
  create(event: ISmsPromotion){
    this.store.dispatch(new CreateSubmitSignal(event))
  }
}
