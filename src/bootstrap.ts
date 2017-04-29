import {platformBrowser} from '@angular/platform-browser';

import {AppModuleNgFactory} from './upgrade-aot/src/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);