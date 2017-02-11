import { Runde } from "./runde.model";
import { Termin } from "./termin.model";
import { KNOBLER } from "./knobler.model";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Spiel{
    
    public termin: Termin;
    public tabelle :Map<String, Array<Runde>> ;
    public summe :Map<String, Runde> ;
    public aktuelleRunde :Map<String, Runde> ;
    public zaehler: number;
    
    constructor(private _termin: Termin){
        this.termin = _termin;
        this.zaehler=0;
        this.init();
        
    }
    
    init (){
        this.tabelle = new Map<String, Array<Runde>>();
        this.summe = new Map<String, Runde>();
        this.aktuelleRunde = new Map<String, Runde>();
        this.zaehler =1;
        KNOBLER.forEach(knobler => {
            this.tabelle.set(knobler,new Array<Runde>());
            let next = new Runde(knobler, this.zaehler);
            this.aktuelleRunde.set(knobler,next);
            this.tabelle.get(knobler).push(next); 
            this.summe.set(knobler,new Runde(knobler,0));
        });
    }
    
    neueRunde(){
        this.aktuelleRunde = new Map<String, Runde>();
        this.zaehler = this.zaehler+1;
         KNOBLER.forEach(knobler => {
            let next = new Runde(knobler, this.zaehler);
            this.aktuelleRunde.set(knobler,next);
            this.tabelle.get(knobler).push(next); 
            
         });
    }
    
    calcSum(){
         KNOBLER.forEach(knobler => {
            var sumRunde = this.summe.get(knobler); 
            sumRunde.reset();
            this.tabelle.get(knobler).forEach(runde =>{
                sumRunde.add(runde);
            });
         });
    }
}
