import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserValidationComponent }    from './user-validation/user-validation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { VideoListComponent } from '../videos/video-list/video-list.component';
import { VideoFormComponent } from '../videos/video-form/video-form.component';
import { KidFormComponent } from '../kid/kid-form/kid-form.component';
import { KidListComponent } from '../kid/kid-list/kid-list.component';
import { UserTwoFactorAuthComponent } from './user-two-factor-auth/user-two-factor-auth.component';

const userRoutes: Routes = [
  {
    path:'user',
    redirectTo: '/verification'
  },

  { path: 'verification',  component: UserValidationComponent},
  { path: 'dashboard/videos',  component: VideoListComponent,canActivate:[AuthguardGuard] },
  {
    path: 'dashboard/videos/add',
    component: VideoFormComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'dashboard/videos/edit/video/:id',
    component: VideoFormComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'twoFactor',
    component: UserTwoFactorAuthComponent
  },

  //Kids
  {
    path: 'dashboard/kids',
    component: KidListComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'dashboard/kids/add',
    component: KidFormComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'dashboard/kids/edit/kid/:id',
    component: KidFormComponent,canActivate:[AuthguardGuard]
  },

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