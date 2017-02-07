/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Runde{
    public knobler: string;
    public zaehler: number;
    public strafen:number;
    public outs: number;
    public dreiharte: number;
    public haelften: number;
    public runden: number;
    
    constructor(private _knobler: string, private _zaehler: number){
        this.knobler = _knobler;
        this.zaehler = _zaehler;
        this.reset();
    }
    
    reset(){
        this.strafen=0;
        this.outs=0;
        this.dreiharte=0;
        this.haelften=0;
        this.runden=0;
    }
    
    add( _other: Runde){
        this.strafen = this.strafen + _other.strafen;
        this.outs = this.outs + _other.outs;
        this.dreiharte = this.dreiharte + _other.dreiharte;
        this.haelften = this.haelften + _other.haelften;
        this.runden = this.runden + _other.runden;
    }
}

