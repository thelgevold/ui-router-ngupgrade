import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NgUpgradeComponent} from './ng-upgrade.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '**', component: NgUpgradeComponent}
  ])],
  declarations: [NgUpgradeComponent]
})
export class NgUpgradeModule {
  
}