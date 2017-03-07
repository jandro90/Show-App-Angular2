import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

   private busqueda:string;

  constructor(private _servicio:ShowService, private _router:Router) { }

  ngOnInit() {
  }


  verBusqueda(){
    this._servicio.getShows(this.busqueda).subscribe();
  }

  cambiarUrl(id:any){
    this._router.navigate(['/descripcion/',id]);
  }

}
