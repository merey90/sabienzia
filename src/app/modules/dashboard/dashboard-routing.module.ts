import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { TeamChartComponent } from './team-chart/team-chart.component';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent }
];

export const routedComponents = [
  DashboardHomeComponent,
  WidgetComponent,
  TeamChartComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
