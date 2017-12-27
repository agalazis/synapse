import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { reducers } from './app.reducer';
import { routes } from './app.routes';
import { LayoutModule } from './components/layout/layout.module';
import { PromotionModule } from './components/promotion';
import { SmsPromotionModule } from './components/sms-promotion'
import { SharedModule } from './shared/shared.module';
import { CustomRouterStateSerializer } from './shared/utils';
import { HttpModule } from '@angular/http/src/http_module';

export const COMPONENTS = [
  AppComponent,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PromotionModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    LayoutModule.forRoot(),
    SmsPromotionModule.forRoot(),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
