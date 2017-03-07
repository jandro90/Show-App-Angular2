import { Component, OnInit } from '@angular/core';
import {ShowService} from "../../app.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

   private busqueda:string;

  constructor(private _servicio:ShowService) { }

  ngOnInit() {
  }


  verBusqueda(){
    this._servicio.getShows(this.busqueda).subscribe();
  }

}
