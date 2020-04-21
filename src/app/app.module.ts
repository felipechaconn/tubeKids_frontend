import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthInterceptor } from './user/shared/authconfig.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoFormComponent } from './videos/video-form/video-form.component';
import { SafePipe } from './_helpers/safe.pipe';
import { KidListComponent } from './kid/kid-list/kid-list.component';
import { KidFormComponent } from './kid/kid-form/kid-form.component';

@NgModule({
  declarations: [

    AppComponent,
    NavigationComponent,
    IndexComponent,
    FooterComponent,
    PageNotFoundComponent,
    VideoListComponent,
    VideoFormComponent,
    SafePipe,
    KidListComponent,
    KidFormComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //despues de importarlo arriba tengo que usarlo aqui
    UserModule,
    AppRoutingModule,

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
