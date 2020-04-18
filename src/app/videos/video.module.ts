import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { VideoService } from './service/video.service';
import { SafePipe } from '../_helpers/safe.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VideoListComponent,VideoFormComponent,SafePipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    VideoService
  ]
})
export class VideoModule { }
