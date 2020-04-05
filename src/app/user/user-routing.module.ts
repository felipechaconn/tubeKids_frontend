import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserValidationComponent }    from './user-validation/user-validation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


const userRoutes: Routes = [
  {
    path:'user',
    redirectTo: '/verification'
  },

  { path: 'verification',  component: UserValidationComponent },
  { path: 'dashboard',  component: UserDashboardComponent },

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