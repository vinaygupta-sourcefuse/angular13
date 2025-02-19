import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

console.log("checks, is it loading in root page without calling/ requesting for this component")

@NgModule({
  declarations: [
    SinginComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
