import { Component } from "@angular/core";


@Component({
    selector: "app-component",
    
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


export class AppComponent {

}

