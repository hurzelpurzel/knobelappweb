import { Component } from "@angular/core";
import { Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-component",
    
    template: `
   
    <header>
    <nav  class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">KnobelApp</a>
    </div>
    <ul class="nav navbar-nav" routerLinkActive="active">
     <li><a routerLink="/termine" >Termine</a></li>
     <li><a routerLink="/spiel" >Spiel</a></li>
    </ul>
  </div>
     
    </nav>
    </header>
     <div class="container">
   
        <router-outlet></router-outlet>
 </div>
    `

})


export class AppComponent {

    constructor(private _route: ActivatedRoute, private _router: Router){
        
    }
}

