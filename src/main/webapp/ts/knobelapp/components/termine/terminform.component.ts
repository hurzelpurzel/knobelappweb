import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Termin } from "../../model/termin.model";


@Component({
    selector: "terminform-component",
    template: `
        
        <div class="row" >  
        <form class="form-container form-horizontal" (submit)="onSubmit()">
            <div class="form-group">
                <label class="control-label col-sm-1">Termin</label>
                <div class="col-sm-11">
                <input type="date" [(ngModel)]="item.termin"/>
            </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-1">Ort</label>
                <div class="col-sm-11">
                <input type="text" [(ngModel)]="item.ort"/>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-1">Anlass</label>
                <div class="col-sm-11">
                <input type="text" [(ngModel)]="item.anlass"/>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" type="submit">Anlegen</button>
                <button class="btn btn-danger" type="button" (click)="onReset()">Neu</button>
            </div>
        </form>
        </div>
    
    
    
    `})
 
export class TerminComponent{
  
    /* Default values if input is not given*/
    @Input()
    public item :Termin = new Termin();
    
    

    
    @Output()
    public create :EventEmitter<Termin> = new EventEmitter<Termin>();
    @Output()
    public reset :EventEmitter<Termin> = new EventEmitter<Termin>();
    
    
    constructor(){
       
        
    }
    
   onReset(){
       this.reset.emit(this.item);
   }
   
   onSubmit(){
       this.create.emit(this.item);
   }
   
}