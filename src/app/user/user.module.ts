import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [UserValidationComponent, UserDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
})
export class UserModule { }
