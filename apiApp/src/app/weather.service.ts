import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './interfaces/weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key: string = "d16154edd8c76b641ac4d47f41aaeead";
  url: string = "http://api.weatherstack.com/current?access_key=" + this.key + "&query=83501&units=f";



  constructor(public http: HttpClient) { }


  getWeather(){
    return this.http.get<Weather>(this.url);
  }



}





