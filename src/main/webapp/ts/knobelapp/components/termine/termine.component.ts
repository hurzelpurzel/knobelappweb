import { Component } from "angular2/core";
import { Termin } from "../../model/termin.model";
import {TermineService} from "../../services/termine.service";
import {TerminComponent} from "./termin.component"

@Component({
    selector: "termine-component",
   
    directives: [TerminComponent],
    template: `<h1>Termine</h1>
    <div class="container">
       <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">Termin</div>
          <div class="col-md-3">Ort</div>
          <div class="col-md-3">Anlass</div>
        <div>
        <div class="row" *ngFor="#item of termine" >  
        <termin-component [item]="item" (delete)=onDelete($event) ><termin.component>
        </div>
        <div class="row">  
        <termin-component [item]="edit" []editable="true" (reset)=reset() ><termin.component>
        </div>
    </div>
    
    
    `})
    
export class TermineComponent{
    public termine : Array<Termin>;
    public edit :Termin;
    
    constructor(private _service: TermineService){
        this.termine= new Array<Termin>();
        this.reset();
        
    }
    
    ngOnInit() {
        this.load();
    }
    
    onSubmit(){
        this.termine.push(this.edit);
        this.reset();
    }
    
    reset(){
        this.edit = new Termin();
    }
    
    load(){
        this.termine= new Array<Termin>();
        
        //this._service.getTermine().do(termine => { this.termine = termine});
    }
    onDelete(event){
        
    }
}

