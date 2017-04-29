import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {LazyTreeView} from './tree-view';
import {CountryDemo} from './country-demo';
import {TreeNodeService} from './tree-node-service';
import {Store} from './redux/store';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '**', component: CountryDemo}
  ]),
  CommonModule,
  HttpModule
  ],
  declarations: [LazyTreeView, CountryDemo],
  providers: [TreeNodeService, Store]
})
export class TreeviewModule {}