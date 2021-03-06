import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsListComponent } from './settings-list/settings-list.component';

const routes: Routes = [
  { path: '', component: SettingsListComponent }
];

export const routedComponents = [SettingsListComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SettingsRoutingModule { }
