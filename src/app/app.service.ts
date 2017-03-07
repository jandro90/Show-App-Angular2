import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class ShowService {

  private shows:any[] = [];
  private descripcion:any[] = [];
  private descripcion_img:any[] = [];
  private descripcion_days:any[] = [];
  private descripcion_time;

    constructor(private _http:Http) {

    }


    getShows(show:string){

      let url:string =  `http://api.tvmaze.com/search/shows?q=${show}`;

      return this._http.get(url).map(res => {
        this.shows = res.json();
      });

    }

    getDescripcion(id:any){

      let url:string = `http://api.tvmaze.com/shows/${id}`;

      return this._http.get(url).map(res => {
        this.descripcion = res.json();
        this.descripcion_img = res.json().image;
        this.descripcion_days = res.json().schedule.days;
        this.descripcion_time = res.json().schedule.time;
        console.log(this.descripcion);
        console.log(this.descripcion_img);
        console.log(this.descripcion_days);
      })
    }

}
