import {NgModule, Component} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {platformBrowser, BrowserModule} from '@angular/platform-browser';
import {RouterUpgradeInitializer} from '@angular/router/upgrade';
import {RouterModule, UrlHandlingStrategy} from '@angular/router';

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { 
    return url.toString().indexOf("/cars") >= 0; 
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

import {CarsModule} from './cars/cars.module';

@Component({
  selector: 'outlet',
  template: `<router-outlet></router-outlet>
             <div ui-view></div>`
})
export class OutletComponent {}

@NgModule({
  declarations: [OutletComponent],
  entryComponents: [],  
  imports: [BrowserModule, 
            UpgradeModule,
            CarsModule,
            RouterModule.forRoot([])],
  bootstrap: [OutletComponent],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
})
export class AppModule {
  constructor(public upgrade: UpgradeModule){}
}

