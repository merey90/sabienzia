import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './modules/dashboard/dashboard.module#DashboardModule'},
  { path: 'users', loadChildren: './modules/user/user.module#UserModule'},
  { path: 'settings', loadChildren: './modules/settings/settings.module#SettingsModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
