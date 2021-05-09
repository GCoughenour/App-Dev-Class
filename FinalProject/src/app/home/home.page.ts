import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController : AlertController, ) {}

  lift = {
    name: [],
    sets: [],
    reps: [],
    weight: []
  }

  public lifts = [];


  async ngOnInit() {
    const  ret  = await Storage.get({key: 'lift'});
    const parsedLift = JSON.parse(ret.value);
    this.lifts = parsedLift.lifts;
    this.lift.name = parsedLift.name;
    this.lift.sets = parsedLift.sets;
    this.lift.reps = parsedLift.reps;
    this.lift.weight = parsedLift.weight;
    

  }

  async newLift() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Lift',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Lift Name: Bench Press, Squat, etc'
        },
        {
          name: 'sets',
          type: 'number',
          placeholder: '# of Sets: 1, 3, 6, etc...'
        },
        
        {
          name: 'reps',
          type: 'number',
          placeholder: '# of Reps: 5, 8, 12, etc...'
        },
        {
          name: 'weight',
          type: 'number',
          placeholder: '115lbs, etc...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: async data => {
            console.log('Confirm Ok');
            let newLifts = this.lifts ? this.lifts : [];
            console.log(newLifts);
            newLifts.push({
              name: data.name,
              sets: data.sets,
              reps: data.reps,
              weight: data.weight
              
            }); 
            console.log(newLifts);
            await Storage.set({
              key: 'lift',
              value: JSON.stringify({
                lifts: newLifts
            })
            
          })
          console.log(this.lifts);
          }

        }
      ]
    });

    await alert.present();
  }
  
  async changeWeight() {
    
    this.lift.weight = null;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Change Weight.',
      inputs: [
        {
          name: 'weight',
          type: 'number',
          placeholder: 'Ex: 115'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: async data => {
            this.lift.weight = data.weight;
            await Storage.set({
              key: 'lift',
              value: JSON.stringify({
                weight: data.weight
              })
            });

          }
        }
      ]
    });

    await alert.present();
  }


}
