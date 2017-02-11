import { Component, Input} from "angular2/core";
import { Runde } from "../../model/runde.model";
import { IncButtonComponent } from "../blocks/incbutton.component"
@Component({
    selector: "runde-component",
    directives: [IncButtonComponent],
    template: `  
        <div class="row">
            <div class="col-md-2">{{runde.knobler}}</div>
            <div class="col-md-2"><incbutton-component [counter]="getValue('runden')" (changed)="onChanged('runden',$event)" ></incbutton-component></div>
            <div class="col-md-2"><incbutton-component [counter]="getValue('haelften')" (changed)="onChanged('haelften',$event)" ></incbutton-component></div>
            <div class="col-md-2"><incbutton-component [counter]="getValue('outs')" (changed)="onChanged('outs',$event)" ></incbutton-component></div>
            <div class="col-md-2"><incbutton-component [counter]="getValue('dreiharte')" (changed)="onChanged('dreiharte',$event)" ></incbutton-component></div>
            <div class="col-md-2"><incbutton-component [counter]="getValue('strafen')" (changed)="onChanged('strafen',$event)" ></incbutton-component></div>
        </div >
      
     `})
   
export class RundeComponent{
    @Input()
    runde: Runde;

   
    
    constructor(){
       
    }
    
    getValue(name:string){
        return this.runde[name];
    }
    
    onChanged(name:string, value:number){
        this.runde[name] = value;
    }
}
