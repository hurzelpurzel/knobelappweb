import {Injectable} from "@angular/core";
import { Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Termin } from "../model/termin.model";


@Injectable()
export class TermineService{
    
    private _baseUri ="/knobelapp/rest";
   
    
    constructor(private _http: Http){
     
        
    }
    
    persist(termine: Array<Termin>){
        
    }
    
    getTermine(): Observable<Termin[]>{
        return Observable.create();
    //    return this._http.get(this._baseUri+'/termine');
    }
    
}
