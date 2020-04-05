import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserValidationComponent }    from './user-validation/user-validation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthguardGuard } from './shared/authguard.guard';

const userRoutes: Routes = [
  {
    path:'user',
    redirectTo: '/verification'
  },

  { path: 'verification',  component: UserValidationComponent, canActivate:[AuthguardGuard] },
  { path: 'dashboard',  component: UserDashboardComponent,canActivate:[AuthguardGuard] },

];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }