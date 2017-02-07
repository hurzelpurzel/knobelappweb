import { Component } from "angular2/core";
import { Termin } from "../../model/termin.model";

@Component({
    selector: "termine-component",
    template: `Hier stehen bald termine
    <div class="container">
       <div class="row">
          <div class="col-md-4">Termin</div><div class="col-md-4">Ort</div><div class="col-md-4">Anlass</div>
        <div>
        <div class="row" *ngFor="#item of termine" >  
            <div class="col-md-4">{{item.termin}}</div><div class="col-md-4">{{item.ort}}</div><div class="col-md-4">{{item.anlass}}</div>
        </div>
        <div class="row">  
        <form class="form-container form-horizontal" (submit)="onSubmit()">
            <div class="form-group">
            <label class="control-label col-sm-1">Termin</label><div class="col-sm-11"><input type="date" [(ngModel)]="edit.termin"/>
            </div></div>
             <div class="form-group">
            <label class="control-label col-sm-1">Ort</label><div class="col-sm-11"><input type="text" [(ngModel)]="edit.ort"/>
            </div></div>
             <div class="form-group">
            <label class="control-label col-sm-1">Anlass</label><div class="col-sm-11"><input type="text" [(ngModel)]="edit.anlass"/>
            </div></div>
            <div class="form-group">
            <button class="btn btn-primary" type="submit">Anlegen</button>
            <button class="btn btn-danger" type="button" (click)="reset()">Neu</button>
            </div>
        </form>
        </div>
    </div>
    
    
    `})
    
export class TermineComponent{
    public termine : Array<Termin>;
    public edit :Termin;
    
    constructor(){
        this.termine= new Array<Termin>();
        this.reset();
    }
    
    onSubmit(){
        this.termine.push(this.edit);
        this.reset();
    }
    
    reset(){
        this.edit = new Termin();
    }
    
}

