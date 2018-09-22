import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [routedComponents]
})
export class UserModule { }
