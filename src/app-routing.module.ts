import {Routes, RouterModule}   from '@angular/router';

import {CarsComponent} from './angular/cars/cars.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './angular/ng-upgrade/ng-upgrade.module#NgUpgradeModule'
  },
  {
    path: 'cars',
    component: CarsComponent
  }
]

export const AppRoutingModule = RouterModule.forRoot(routes);