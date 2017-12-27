import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';

import { PromotionModule } from '../promotion';
import { SharedModule } from '../../shared/shared.module';
import { DynamicFormComponent } from './form/form.component';
import { DynamicPageComponent } from './sms-promotion.component';
import { reducer } from './sms-promotion.reducer';
import { SmsPromotionEffects } from './sms-promotion.effects';
import { EffectsModule } from '@ngrx/effects';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { SMSPromotionService } from './sms-promotion.service';

export const COMPONENTS = [
  DynamicPageComponent,
  DynamicFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PromotionModule,
    NgrxFormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: DynamicPageComponent },
    ]),

    StoreModule.forFeature('smsPromotion', reducer),
    EffectsModule.forFeature([SmsPromotionEffects]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class SmsPromotionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SmsPromotionModule,
      providers: [SMSPromotionService],
    };
  }
}
