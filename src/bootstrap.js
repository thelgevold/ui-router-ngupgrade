import { platformBrowser } from '@angular/platform-browser';
import { setUpLocationSync } from '@angular/router/upgrade';
import { AppModuleNgFactory } from './upgrade-aot/src/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).then(function (ref) {
    var upgrade = ref.instance.upgrade;
    upgrade.bootstrap(document.body, ['awesome']);
    setUpLocationSync(upgrade);
});
