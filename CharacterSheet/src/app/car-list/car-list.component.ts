import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  cars = [{
    make: 'Ford',
    model: 'GTX',
    color: 'green'
  }, {
    make: 'Ferarri',
    model: 'Enzo',
    color: 'red'
  }, {
    make: 'VW',
    model: 'Amarok',
    color: 'white'
  }];

  selectedCar = "";

  selectedCarObj = {};

  onChange = () => {
    this.selectedCarObj = this.cars.find((c)=> c  .make==this.selectedCar);
    console.log(this.selectedCarObj)
  }

}