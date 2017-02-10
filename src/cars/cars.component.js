import { Component } from '@angular/core';
export var CarsComponent = (function () {
    function CarsComponent() {
        this.cars = ['BMW', 'Ferrari', 'Lamborghini', 'Porsche'];
    }
    CarsComponent.decorators = [
        { type: Component, args: [{
                    template: "\n  <h1>Cars</h1>\n  <div *ngFor=\"let car of cars\">{{car}}</div>\n  "
                },] },
    ];
    CarsComponent.ctorParameters = function () { return []; };
    return CarsComponent;
}());
