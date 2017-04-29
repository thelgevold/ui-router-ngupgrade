import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {Spreadsheet} from './spreadsheet';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '**', component: Spreadsheet}
  ]),
  CommonModule
  ],
  declarations: [Spreadsheet]
})
export class SpreadsheetModule {
}