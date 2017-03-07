import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShowService} from "../../app.service";

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styles: []
})
export class DescripcionComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute, private _servicio:ShowService) {
    this._activatedRoute.params.subscribe(params =>{
      this._servicio.getDescripcion(params['id']).subscribe();
    })
  }

  ngOnInit() {
  }

}
