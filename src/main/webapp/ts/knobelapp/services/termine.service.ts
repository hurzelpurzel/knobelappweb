import {Injectable} from "@angular/core";
import { Http} from '@angular/http';
import { Termin } from "../model/termin.model";
import 'rxjs/add/operator/map';
import { Observable} from "rxjs/Observable";

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
