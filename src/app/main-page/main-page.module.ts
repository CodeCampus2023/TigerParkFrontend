import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterOutlet} from "@angular/router";
import { PayoutRequestComponent } from './payout-request/payout-request.component';
import {MainPageComponent} from "./main-page.component";



@NgModule({
  declarations: [
    MenuComponent,
    PayoutRequestComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
    MenuComponent,
    PayoutRequestComponent,
    MainPageComponent
  ]
})
export class MainPageModule { }
