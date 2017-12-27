import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { ActionsSubject } from '@ngrx/store';
import { cast, FormGroupState, NgrxValueConverter, NgrxValueConverters, ResetAction, SetValueAction } from 'ngrx-forms';
import PhoneNumber from 'awesome-phonenumber'
import { FormValue, INITIAL_FORM_STATE } from '../sms-promotion.reducer';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'sms-promotion-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent {
  @Input() formState: FormGroupState<FormValue>;
  @Input() statusText: string;
  @Input() isPending: boolean;
  @Input() isSuccessful: boolean;
  @Output()
  create: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  reset: EventEmitter<any> = new EventEmitter<any>();


  telephoneValueConverter: NgrxValueConverter<string | null, string | null> = {
    convertViewToStateValue(v) {
      if(!v){
        return null;
      }
      const phone = new PhoneNumber(v);
      if (!phone.isPossible()) {
        return v;
      }
      return phone.getNumber() || null; 
    },
    convertStateToViewValue: (v)=>{
      if(!v){
        return null
      }
      return (new PhoneNumber(v)).getNumber( 'international' ) || v
    },
  };

  constructor(private actionsSubject: ActionsSubject) { }
  get isInValid(){
    return this.formState.isInvalid;
  }
  get isSubmitted(){
    return this.formState.isSubmitted;
  }
  get isUnsubmitted(){
    return this.formState.isUnsubmitted;
  }
  get isUntouched(){
    return this.formState.isUntouched
  }
  get isPristine(){
    return this.formState.isPristine
  }
  canSubmit(){
    return !(this.isPending 
    || this.isInValid 
    || this.isSubmitted&&this.isSuccessful)
  }
  canReset(){
    return !(this.isPristine
    && this.isUntouched
    && this.isUnsubmitted)
  }
  clear() {
    this.reset.emit();
  }

  submit() {
    this.create.emit(this.formState.value);
  }
}
