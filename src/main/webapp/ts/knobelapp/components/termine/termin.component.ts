import { Component, Input, Output, EventEmitter} from "@angular/core";
import { Termin } from "../../model/termin.model";


@Component({
    selector: "termin-component",
    template: `
        <div class="row" >  
            <div class="col-md-3">
            <button class="btn btn-danger" type="button" (click)="doDelete()">L&ouml;schen</button>
            </div>
            <div class="col-md-3">{{item.termin | date:dateFormat }}</div>
            <div class="col-md-3">{{item.ort}}</div>
            <div class="col-md-3">{{item.anlass}}</div>
        </div>
        
    
    
    
    `})
 
export class TerminComponent{
  
    /* Default values if input is not given*/
    @Input()
    public item :Termin = new Termin();
    
  

    @Output()
    public delete :EventEmitter<Termin> = new EventEmitter<Termin>();
    
    
    constructor(){
       
        
    }
    
   
   doDelete(){
       this.delete.emit(this.item);
   }
}