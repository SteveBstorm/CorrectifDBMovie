import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import jwt_decode from 'jwt-decode';
import { NbGlobalLogicalPosition, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url : string = environment.apiUrl

  currentUser : User = {}

  currentUserSubject : Subject<User> = new Subject<User>();

  emitUser() {

    if(this.currentUser.id == null && localStorage.getItem('token')) {
      this.getUser(this.decodeToken(localStorage.getItem('token') ?? '')).subscribe(
        (data : User) => {
          this.currentUser = data;
          this.currentUserSubject.next(this.currentUser)
        } 
      )
    }
    else {
      this.currentUserSubject.next(this.currentUser)
    }
  }

  decodeToken(token : string) : number {
    let decodedToken : any = jwt_decode(token)
    return Number.parseInt(decodedToken['unique_name'])
  }

  constructor(
    private _client : HttpClient,
    private _toast : NbToastrService,
    private _router : Router
  ) { }

  getUser(id : number) : Observable<User> {
    return this._client.get<User>(this.url+'/user/'+id)
  }

  login(email : string, password : string) {
    let loginInfo : any = {email : email, password : password}
    this._client.post<User>(this.url+'/Auth/auth', loginInfo).subscribe(
      (data : User) =>  {
        this.currentUser = data
        localStorage.setItem('token', data.token ?? '')
        this.emitUser()
        this._toast.success('Vous êtes bien connecté', '', {position : NbGlobalLogicalPosition.BOTTOM_END})
        this._router.navigate(['/home'])
      }
    )
  }

  logout() {
    this.currentUser = {}
    localStorage.clear()
    this.emitUser()
    this._router.navigate(['/home'])
  }
}
