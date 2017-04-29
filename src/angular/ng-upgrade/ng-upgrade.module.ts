import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UpgradeModule} from '@angular/upgrade/static';
import {NgUpgradeComponent} from './ng-upgrade.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '**', component: NgUpgradeComponent}
  ]),
  UpgradeModule
  ],
  declarations: [NgUpgradeComponent]
})
export class NgUpgradeModule {
  
}