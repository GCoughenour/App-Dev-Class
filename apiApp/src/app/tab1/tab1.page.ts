import { Component } from '@angular/core';
import { ChuckNorrisService } from '../chuck-norris.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  icon_url : string;
  joke: string;
  loading: any;


  constructor( public chucknorris: ChuckNorrisService, public loadingCtrl : LoadingController ) {
    this.newJoke();
  }

  newJoke(){
    this.presentLoading();
    this.chucknorris.getJoke().subscribe( data => {
      console.log(data);
      this.icon_url = data.icon_url;
      this.joke = data.value;
      this.loading.dismiss();
    })
  }

  //http://api.weatherstack.com/current?access_key=d16154edd8c76b641ac4d47f41aaeead&query=83501
  


  async presentLoading(){
    this.loading = await this.loadingCtrl.create({
      message: "Researching Chuck Norris"
    });
    await this.loading.present();
  }

}
