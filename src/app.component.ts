import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <a [routerLink]="['/']">Home</a>
            <a [routerLink]="['/friends']">Friends</a>
            <a [routerLink]="['/spreadsheet']">Spreadsheet</a>
            <a [routerLink]="['/treeview']">Treeview</a>
            <router-outlet></router-outlet>
            <div ui-view></div>`
})
export class AppComponent {
  ngOnInit() {

  }
}