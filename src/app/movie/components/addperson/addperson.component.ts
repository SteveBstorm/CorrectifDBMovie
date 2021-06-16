import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Person } from 'src/app/models/movie.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-addperson',
  templateUrl: './addperson.component.html',
  styleUrls: ['./addperson.component.scss']
})
export class AddpersonComponent implements OnInit {

  constructor(
    private _ref : NbDialogRef<AddpersonComponent>,
    private _builder : FormBuilder,
    private _person : PersonService
  ) { }

  fg : FormGroup = this._builder.group({})

  ngOnInit(): void {
    this.fg = this._builder.group({
      fn : [null, Validators.required],
      ln : [null, Validators.required]
    })
  }

  onSubmit() {
    let person : Person = {lastName : this.fg.value['ln'], firstName : this.fg.value['fn']}
    this._person.create(person).subscribe(()=> this._ref.close())
  }
}
