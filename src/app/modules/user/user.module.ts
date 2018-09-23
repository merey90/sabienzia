import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UserRoutingModule } from './user-routing.module';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  declarations: [routedComponents, UserCreateComponent]
})
export class UserModule { }
