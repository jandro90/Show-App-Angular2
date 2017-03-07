import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DescripcionComponent} from "./components/descripcion/descripcion.component";



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'descripcion/:id', component: DescripcionComponent },

  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }
