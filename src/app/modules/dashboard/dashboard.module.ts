import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxChartsModule,
    FormsModule
  ],
  declarations: [routedComponents]
})
export class DashboardModule { }
