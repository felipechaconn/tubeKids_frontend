import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserValidationComponent } from './user-validation/user-validation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UserTwoFactorAuthComponent } from './user-two-factor-auth/user-two-factor-auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthService } from './auth/user-auth.service';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [UserValidationComponent, UserDashboardComponent, UserTwoFactorAuthComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
  providers: [
    UserAuthService,
    UserService
  ]
})
export class UserModule { }
