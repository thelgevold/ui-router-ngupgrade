import {Routes, RouterModule}   from '@angular/router';

import {CarsComponent} from './angular/cars/cars.component';
import {NgUpgradeComponent} from './angular/ng-upgrade/ng-upgrade.component';
const routes: Routes = [
  {
    path: '',
    component: NgUpgradeComponent
   // loadChildren: './angular/ng-upgrade/ng-upgrade.module#NgUpgradeModule'
  },
  {
    path: 'cars',
    component: CarsComponent
  }
]

export const AppRoutingModule = RouterModule.forRoot(routes);