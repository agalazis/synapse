import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PromotionModule } from '../promotion';
import { LayoutComponent } from './layout/layout.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const COMPONENTS = [
  LayoutComponent,
  NavItemComponent,
  SidenavComponent,
];

@NgModule({
  imports: [
    CommonModule,
    PromotionModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class LayoutModule {
  static forRoot() {
    return {
      ngModule: LayoutModule,
    };
  }
}
