/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Termin{
    id :number;
    termin : Date;
    ort: string;
    anlass: string;
    
    constructor(){
        this.id = -1;
        this.termin = new Date();
        this.ort="";
        this.anlass="";
    }
}

