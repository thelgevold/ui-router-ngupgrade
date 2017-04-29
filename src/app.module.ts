import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {NgUpgradeService} from './angular/ng-upgrade/ng-upgrade.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, 
            AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [
    NgUpgradeService
  ],
})
export class AppModule {}

