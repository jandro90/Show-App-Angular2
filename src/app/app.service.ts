import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class ShowService {

  private shows:any[] = [];

    constructor(private _http:Http) {

    }


    getShows(show:string){

      let url:string =  `http://api.tvmaze.com/search/shows?q=${show}`;

      return this._http.get(url).map(res => {
        this.shows = res.json();
        console.log(this.shows);
      });

    }

}
