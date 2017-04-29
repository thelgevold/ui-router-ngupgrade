import {Component} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {setUpLocationSync} from '@angular/router/upgrade';

@Component({
  template: ''
})
export class NgUpgradeComponent {
  
  constructor(public upgrade: UpgradeModule){
    upgrade.bootstrap(document.body, ['awesome']);
    setUpLocationSync(upgrade);
  }  
}
