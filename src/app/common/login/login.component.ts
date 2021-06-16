import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(
    private _ref : NbDialogRef<LoginComponent>,
    private _builder : FormBuilder
  ) { }

  fg : FormGroup = this._builder.group([])
  
  ngOnInit(): void {
    this.fg = this._builder.group({
      email : [null,[ Validators.required, Validators.email]],
      password : [null, Validators.required]
    })
  }

  onSubmit() {
    let loginInfo = {email: this.fg.value['email'], password : this.fg.value['password']}
    this._ref.close(loginInfo)
  }

  close() {
    this._ref.close()
  }

}
