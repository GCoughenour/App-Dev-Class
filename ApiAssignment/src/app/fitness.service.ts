import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fitness } from './interface/fitness.interface';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  key: string = "f67cc80ddemshfdf8280b4446ce5p171352jsnc05d5d432f22";
  host: string = "fitness-calculator.p.rapidapi.com";
  url: string = "https://fitness-calculator.p.rapidapi.com/macros";

  constructor( public http: HttpClient) { }

  getMets(){
    let headers = {
      headers: new HttpHeaders({
        'x-rapidapi-host' : this.host,
        'x-rapidapi-key' : this.key
        
      })
    }
    return this.http.get<Fitness>(this.url, headers);
  }


}
