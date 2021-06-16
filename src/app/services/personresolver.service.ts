import { Injectable } from "@angular/core";
import { Person } from "../models/movie.model";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { PersonService } from "./person.service";

@Injectable({
    providedIn : 'root'
}) 
export class PersonResolver implements Resolve<Person[]> {
    
    constructor(private _person : PersonService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Person[] | Observable<Person[]> | Promise<Person[]> {
        return this._person.getAll()
    }
}