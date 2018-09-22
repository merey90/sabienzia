import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: DashboardHomeComponent }
];

export const routedComponents = [DashboardHomeComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
