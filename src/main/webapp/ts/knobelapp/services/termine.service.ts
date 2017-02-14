import {Injectable} from "@angular/core";
import { Http} from '@angular/http';
import { Termin } from "../model/termin.model";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable} from "rxjs/Observable";
import { SimpleLogger } from "../utils/SimpleLogger";

@Injectable()
export class TermineService{
    
    private _baseUri ="http://localhost:8090/knobelapp/rest/termine/";
    
    
    constructor(private _http: Http){
     
        
    }
    
    persist(termine: Array<Termin>){
        
    }
    
    getTermine(): Observable<Termin[]>{
       
        return this._http.get(this._baseUri).map(response => response.json());
    }
    
    delete(id :number): Observable<Termin[]>{
        let uri :string =this._baseUri+id;
        SimpleLogger.log(uri);
        this._http.delete(uri).map(res =>this.handleResult(res.json())).catch(this.handleError);
        return this.getTermine();   
    }
    
    private handleResult(res : boolean){
        alert(res ?"success":"failed");
    }
    
    private handleError(error: any) {
        SimpleLogger.log(error);
    
    return Observable.throw(error);
    }
}
