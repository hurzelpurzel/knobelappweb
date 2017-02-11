import {Injectable} from "angular2/core";
import { Http} from 'angular2/http';
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
        return this._http.get(this._baseUri+'/termine').map(response => response.json());
    }
    
}
