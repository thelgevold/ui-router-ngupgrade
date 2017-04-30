import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {Survey} from './survey';
import {SurveyDemo} from './survey-demo';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: SurveyDemo}
  ]),
  CommonModule,
  ReactiveFormsModule
  ],
  declarations: [SurveyDemo, Survey]
})
export class SurveyModule {

}