import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [UserValidationComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
})
export class UserModule { }
