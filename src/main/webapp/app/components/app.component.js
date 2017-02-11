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
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: "app-component",
                    directives: [router_1.ROUTER_DIRECTIVES],
                    template: `
   
    <header>
    <nav  class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">KnobelApp</a>
    </div>
    <ul class="nav navbar-nav">
     <li><a [routerLink]="['Termine']" >Termine</a></li>
     <li><a [routerLink]="['Spiel']" >Spiel</a></li>
    </ul>
  </div>
     
    </nav>
    </header>
     <div class="container">
   
        <router-outlet></router-outlet>
 </div>
    `
                }),
                router_1.RouteConfig([
                    { path: "/termine", name: "Termine", component: termine_component_1.TermineComponent, useAsDefault: true },
                    { path: "/spiel", name: "Spiel", component: spiel_component_1.SpielComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map