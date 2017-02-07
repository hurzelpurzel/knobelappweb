import {Injectable} from "angular2/core";
import { Http} from 'angular2/http';
import { Termin } from "../model/termin.model";
@Injectable()
class TermineService{
    
    private _baseUri ="";
    
    constructor(private _http: Http){
        
    }
    
    persist(termine: Array<Termin>){
        
    }
    
}
