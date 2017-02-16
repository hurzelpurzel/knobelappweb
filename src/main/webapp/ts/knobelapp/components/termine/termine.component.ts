import { Component } from "@angular/core";
import { Termin } from "../../model/termin.model";
import {TermineService} from "../../services/termine.service";
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { SimpleLogger } from "../../utils/SimpleLogger";

@Component({
    selector: "termine-component",
    
    providers: [TermineService],
   
    template: `<h1>Termine</h1>
    <div class="container">
       <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-3">Termin</div>
          <div class="col-md-3">Ort</div>
          <div class="col-md-3">Anlass</div>
        <div>
        <div class="row" *ngFor="let item of termine  | async" >  
        <termin-component [item]="item" (delete)=onDelete($event) ></termin-component>
        </div>
     </div>
    
    
    `})
/**
 *    <div class="row">  
      
        <terminform-component [item]="edit" [editable]="true" (reset)=reset() ></terminform-component>
     
        </div>
 */    
export class TermineComponent{
    public termine : Observable<Array<Termin>>;
    public edit :Termin;
    
    constructor(private _service: TermineService){
        
        this.reset();
        
    }
    
    ngOnInit() {
        this.load();
    }
    
    onSubmit(){
        
        this.reset();
    }
    
    reset(){
        this.edit = new Termin();
    }
    
    load(){
             
       this.termine= this._service.getTermine();
    }
    
    onDelete(termin : Termin){
        let res :Termin;
        this._service.delete(termin.id).subscribe(
            data => res = data,
            error=>SimpleLogger.log(error),
            ()=> this.load());
    }
}

