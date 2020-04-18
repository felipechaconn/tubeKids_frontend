import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserValidationComponent }    from './user-validation/user-validation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { VideoListComponent } from '../videos/video-list/video-list.component';
import { VideoFormComponent } from '../videos/video-form/video-form.component';

const userRoutes: Routes = [
  {
    path:'user',
    redirectTo: '/verification'
  },

  { path: 'verification',  component: UserValidationComponent, canActivate:[AuthguardGuard] },
  { path: 'dashboard',  component: VideoListComponent,canActivate:[AuthguardGuard] },
  {
    path: 'dashboard/add/video',
    component: VideoFormComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'dashboard/edit/video/:id',
    component: VideoFormComponent,canActivate:[AuthguardGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }