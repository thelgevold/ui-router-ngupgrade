import {Component} from '@angular/core';

@Component({
  template: `
  <h1>Cars</h1>
  <div *ngFor="let car of cars">{{car}}</div>
  `
})
export class CarsComponent {
  cars = ['BMW', 'Ferrari', 'Lamborghini', 'Porsche'];
}