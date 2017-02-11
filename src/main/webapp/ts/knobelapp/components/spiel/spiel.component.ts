/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 
 */
import { Component } from "angular2/core";
import { RundeComponent } from "./runde.component";
import { RundeKopfComponent } from "./rundekopf.component";

import { Spiel } from "../../model/spiel.model";
import { Termin } from "../../model/termin.model";
import { KNOBLER } from "../../model/knobler.model";
@Component({
    selector: "spiel-component",
    directives: [RundeComponent, RundeKopfComponent],
    template: `
        <rundekopf-component [rundenzaehler]="spiel.zaehler"></rundekopf-component>
        <div *ngFor="#cur of knobeler">
            <runde-component [runde]="spiel.aktuelleRunde.get(cur)" ></runde-component>
        </div>
         
    `})
    
export class SpielComponent{
    termin: Termin;
    spiel: Spiel;
    knobeler = KNOBLER; 
     constructor(){
        this.termin = new Termin();
        this.spiel = new Spiel(this.termin);
        this.init();
        
    }
     
    init(){
        this.spiel.init();
       
    }
    
    neueRunde(){
         
         this.spiel.neueRunde();
         
        
    }
    
  
    
    
}

