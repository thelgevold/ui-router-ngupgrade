import {platformBrowser} from '@angular/platform-browser';
import {setUpLocationSync} from '@angular/router/upgrade';

import {AppModuleNgFactory} from './upgrade-aot/src/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(ref => {
  const upgrade = (<any>ref.instance).upgrade;
  upgrade.bootstrap(document.body, ['awesome']);
  setUpLocationSync(upgrade);
});