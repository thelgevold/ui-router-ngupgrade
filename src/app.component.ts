import {NgModule, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
             <div ui-view></div>`
})
export class AppComponent {
  ngOnInit() {
    
  }
}