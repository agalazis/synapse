import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/promotion', pathMatch: 'full' },
  {
    path: 'promotion',
    loadChildren: './components/sms-promotion/sms-promotion.module#SmsPromotionModule',
  },
];
