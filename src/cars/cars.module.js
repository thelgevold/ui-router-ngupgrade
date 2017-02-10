import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';
export var CarsModule = (function () {
    function CarsModule() {
    }
    CarsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        RouterModule.forChild([
                            { path: 'cars', component: CarsComponent }
                        ])
                    ],
                    declarations: [CarsComponent]
                },] },
    ];
    CarsModule.ctorParameters = function () { return []; };
    return CarsModule;
}());
