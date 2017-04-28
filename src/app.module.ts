import {NgModule} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowser, BrowserModule} from '@angular/platform-browser';
import {RouterUpgradeInitializer} from '@angular/router/upgrade';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { 
    return url.toString().startsWith("/cars"); 
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

import {AppComponent} from './app.component';

import {CarsModule} from './angular/cars/cars.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],  
  imports: [BrowserModule, 
            UpgradeModule,
            CarsModule,
            RouterModule.forRoot([])],
  bootstrap: [AppComponent],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
})
export class AppModule {
  constructor(public upgrade: UpgradeModule){}
}

