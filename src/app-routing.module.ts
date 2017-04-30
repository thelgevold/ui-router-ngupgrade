import {Routes, RouterModule}   from '@angular/router';

const routes: Routes = [
  {
    path: 'treeview',
    loadChildren: './angular/lazy-loaded-tree-view/tree-view.module#TreeviewModule'
  },
  {
    path: 'spreadsheet',
    loadChildren: './angular/spreadsheet/spreadsheet.module#SpreadsheetModule'
  },
  {
    path: '',
    loadChildren: './angular/ng-upgrade/ng-upgrade.module#NgUpgradeModule'
  }
]
export const AppRoutingModule = RouterModule.forRoot(routes);