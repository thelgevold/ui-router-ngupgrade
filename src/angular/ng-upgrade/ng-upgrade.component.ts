import {Component} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {setUpLocationSync} from '@angular/router/upgrade';

import {NgUpgradeService} from './ng-upgrade.service';

@Component({
  template: ''
})
export class NgUpgradeComponent {
  
  constructor(upgrade: UpgradeModule, upgradeService: NgUpgradeService) {
    
    if(upgradeService.bootstrapped === false) {
      console.log('Bootstrapping');
      upgrade.bootstrap(document.body, ['awesome']);
      setUpLocationSync(upgrade);
      upgradeService.bootstrapped = true;
    }
  }  
}
