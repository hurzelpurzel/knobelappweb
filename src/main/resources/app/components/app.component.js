System.register(["angular2/core", "./termine/termine.component", "./spiel/spiel.component", 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, termine_component_1, spiel_component_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (termine_component_1_1) {
                termine_component_1 = termine_component_1_1;
            },
            function (spiel_component_1_1) {
                spiel_component_1 = spiel_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "app-component",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n   \n    <header>\n    <nav  class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">KnobelApp</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n     <li><a [routerLink]=\"['Termine']\" >Termine</a></li>\n     <li><a [routerLink]=\"['Spiel']\" >Spiel</a></li>\n    </ul>\n  </div>\n     \n    </nav>\n    </header>\n     <div class=\"container\">\n   \n        <router-outlet></router-outlet>\n </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: "/termine", name: "Termine", component: termine_component_1.TermineComponent, useAsDefault: true },
                        { path: "/spiel", name: "Spiel", component: spiel_component_1.SpielComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map