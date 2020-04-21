import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserValidationComponent }    from './user-validation/user-validation.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { VideoListComponent } from '../videos/video-list/video-list.component';
import { VideoFormComponent } from '../videos/video-form/video-form.component';
import { KidFormComponent } from '../kid/kid-form/kid-form.component';
import { KidListComponent } from '../kid/kid-list/kid-list.component';

const userRoutes: Routes = [
  {
    path:'user',
    redirectTo: '/verification'
  },

  { path: 'verification',  component: UserValidationComponent, canActivate:[AuthguardGuard] },
  { path: 'dashboard/videos',  component: VideoListComponent,canActivate:[AuthguardGuard] },
  {
    path: 'dashboard/videos/add',
    component: VideoFormComponent,canActivate:[AuthguardGuard]
  },
  {
    path: 'dashboard/videos/edit/video/:id',
    component: VideoFormComponent,canActivate:[AuthguardGuard]
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