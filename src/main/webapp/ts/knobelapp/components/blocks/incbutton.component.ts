import { Component, Input, Output, EventEmitter} from "angular2/core";
@Component({
    selector: "incbutton-component",
    template: `<span><button class="btn" (click)="inc()">+</button>
    <span class="counter">{{counter}}</span>
    <button class="btn" (click)="dec()">-</button> </span>`,
    styles: ['.counter { font-weight: bold;  margin: 1em;}']})
    
export class IncButtonComponent{
   
    @Input()
    counter : number;
    @Output()
    changed :EventEmitter<number> = new EventEmitter<number>();
    
    
    constructor(){
        this.counter=0;
    }
    inc(){
        this.counter++;
        this.changed.emit(this.counter);
    }
    dec(){
        if(this.counter >0){
            this.counter--;
            this.changed.emit(this.counter);
        }
        
    }
}


