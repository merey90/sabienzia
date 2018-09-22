import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SettingsRoutingModule
  ],
  declarations: [routedComponents]
})
export class SettingsModule { }
