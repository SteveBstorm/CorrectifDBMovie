import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url : string = environment.apiUrl

  constructor(
    private _client : HttpClient
  ) { }

  getAll() : Observable<Person[]> {
    return this._client.get<Person[]>(this.url+'/person/')
  }

  create(person : Person)  {
    return this._client.post(this.url+'/person', person, {responseType : 'text'})
  }
}
