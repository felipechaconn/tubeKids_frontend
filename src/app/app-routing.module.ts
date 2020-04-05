import { NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component'; 
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  //Set rutas en angular
{path:'',
  pathMatch:'full',
  redirectTo : '/explore'
},
//crear ruta:
{
  path:'explore',
  //renderizo el componente
  component:IndexComponent,
},
{ path: '**', component: PageNotFoundComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
