import { Component } from '@angular/core';
import { FitnessService} from '../fitness.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Beverages: string;
  Fruits: string;
  Proteins: string;
  Snacks: string;
  Vegetables: string;

  constructor( public fitness: FitnessService) {
    this.newMets();
  }

  newMets(){
    this.fitness.getMets().subscribe(data =>{
      console.log(data);
      this.Beverages = data.Beverages;
      this.Fruits = data.Fruits;
      this.Proteins = data.Proteins;
      this.Snacks = data.Snacks;
      this.Vegetables = data.Vegetables;
    })
  }

}
