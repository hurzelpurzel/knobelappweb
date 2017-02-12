import {Injectable} from "@angular/core";
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Termin } from "../model/termin.model";


@Injectable()
export class TermineService{
    
    private _baseUri ="/knobelapp/rest/termine";
   
    
    constructor(private _http: Http){
     
        
    }
    
    persist(termine: Array<Termin>){
        
    }
    
    getTermine(): Observable<Termin[]>{
       
        return this._http.get(this._baseUri).map(response => response.json());
    }
    
}
