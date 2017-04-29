import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [
  {
    path: 'cars',
    loadChildren: './angular/cars/cars.module#CarsModule'
  },
  {
    path: '',
    loadChildren: './angular/ng-upgrade/ng-upgrade.module#NgUpgradeModule'
  }
]

export const AppRoutingModule = RouterModule.forRoot(routes);