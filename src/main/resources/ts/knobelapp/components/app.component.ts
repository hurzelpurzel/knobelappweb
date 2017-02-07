import { Component } from "angular2/core";
import { TermineComponent } from "./termine/termine.component";
import { SpielComponent } from "./spiel/spiel.component";
import { ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router'
@Component({
    selector: "app-component",
    directives: [ROUTER_DIRECTIVES],
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

})

@RouteConfig([
    { path: "/termine", name: "Termine", component: TermineComponent, useAsDefault: true },
     { path: "/spiel", name: "Spiel", component: SpielComponent } 
])

export class AppComponent {

}

