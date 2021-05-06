import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Joke } from './interfaces/joke.interface';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  key: string = "ea12c42fd5msh9a68e41aa5dbcbcp148b83jsn0b24045d0dff";
  host: string = "matchilling-chuck-norris-jokes-v1.p.rapidapi.com";
  url: string = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";

  constructor( public http: HttpClient ) { }

  getJoke(){
    let headers = {
      headers: new HttpHeaders({
        "x-rapidapi-host" : this.host,
        "x-rapidapi-key" : this.key,
        "accept" : "application/json"
      })
    }
    return this.http.get<Joke>(this.url, headers);
  }
}
