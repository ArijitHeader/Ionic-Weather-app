import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class WeatherProvider {
  apiKey='c761808358fb4d5d';
  url;
  constructor(public http: Http) {
    this.url='http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }
  getWeather(city,state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map(res=>res.json());
  }

}
