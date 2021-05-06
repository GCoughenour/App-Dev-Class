import { Component } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  temp: number;
  description: string;
  icon: string;
  city: string;
  state: string;


  constructor(public weather: WeatherService) {
    this.weather.getWeather().subscribe( data => {
      console.log(data);
      this.temp = data.current.temperature;
      this.description = data.current.weather_descriptions[0];
      this.icon = data.current.weather_icons[0];
      this.city = data.location.name;
      this.state = data.location.region;
    });
  }

}
