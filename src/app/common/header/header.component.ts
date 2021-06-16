import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser : User = {}

  constructor(
    private _auth : AuthService,
    private _dialog : NbDialogService
  ) { }

  ngOnInit(): void {
    this._auth.currentUserSubject.subscribe((u : User) => { this.currentUser = u})
    this._auth.emitUser();
  }

  connect() {
    let ref = this._dialog.open(LoginComponent,  {
      closeOnBackdropClick : false
    })

    ref.onClose.subscribe((x : any) =>{
      if(x != undefined) {
        this._auth.login(x.email, x.password)
      }
    })
  }

  disconnect() {
    this._auth.logout()
  }

}
