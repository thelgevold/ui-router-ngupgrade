import {NgModule} from '@angular/core';
import {platformBrowser, BrowserModule} from '@angular/platform-browser';
import {RouterUpgradeInitializer} from '@angular/router/upgrade';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';

import {NgUpgradeService} from './angular/ng-upgrade/ng-upgrade.service';

// export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
//   shouldProcessUrl(url) { 
//     return url.toString().startsWith("/cars"); 
//   }
//   extract(url) { return url; }
//   merge(url, whole) { return url; }
// }

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CarsModule} from './angular/cars/cars.module';
import {NgUpgradeModule} from './angular/ng-upgrade/ng-upgrade.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],  
  imports: [BrowserModule, 
            CarsModule,
            NgUpgradeModule,
            AppRoutingModule],

  bootstrap: [AppComponent],
  providers: [
    NgUpgradeService
  //  { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
})
export class AppModule {}

