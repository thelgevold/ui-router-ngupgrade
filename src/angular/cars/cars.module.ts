import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {CarsComponent} from './cars.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CarsComponent}
    ])
  ],
  declarations: [CarsComponent]
})
export class CarsModule {}