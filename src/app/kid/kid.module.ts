import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KidFormComponent } from './kid-form/kid-form.component';
import { KidService } from './service/kid.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { KidListComponent } from './kid-list/kid-list.component';
import { SafePipe } from '../_helpers/safe.pipe';



@NgModule({
  declarations: [KidFormComponent,KidListComponent,SafePipe],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  providers : [
    KidService
  ]
})
export class KidModule { }
