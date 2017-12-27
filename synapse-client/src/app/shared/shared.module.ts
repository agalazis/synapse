import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { PromotionModule } from '../components/promotion';


@NgModule({
  imports: [
    CommonModule,
    PromotionModule,
  ]
})
export class SharedModule { }
