import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  async addLift(){
    await Storage.set({
      key: 'lift',
      value: JSON.stringify({
        id: 1,
        name: 'Bench Press'
      })
    });

    this.getLift();
  }

  async getLift(){
    const { value } = await Storage.get({key: 'lift'});
    console.log('Got item: ', value);
  }

}
