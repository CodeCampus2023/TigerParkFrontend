import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports:[
    MenuComponent
  ]
})
export class MainPageModule { }
