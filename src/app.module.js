import { NgModule, Component } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';
export var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        return url.toString().indexOf("/cars") >= 0;
    };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) { return url; };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (url, whole) { return url; };
    return Ng1Ng2UrlHandlingStrategy;
}());
import { CarsModule } from './cars/cars.module';
export var OutletComponent = (function () {
    function OutletComponent() {
    }
    OutletComponent.decorators = [
        { type: Component, args: [{
                    selector: 'outlet',
                    template: "<router-outlet></router-outlet>\n             <div ui-view></div>"
                },] },
    ];
    OutletComponent.ctorParameters = function () { return []; };
    return OutletComponent;
}());
export var AppModule = (function () {
    function AppModule(upgrade) {
        this.upgrade = upgrade;
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    AppModule.ctorParameters = function () { return [
        { type: UpgradeModule, },
    ]; };
    return AppModule;
}());
