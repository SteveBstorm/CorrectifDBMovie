import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { MovieToApi, Person } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { PersonService } from 'src/app/services/person.service';
import { AddpersonComponent } from '../addperson/addperson.component';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {

  personList : Person[] = []

  constructor(
    private _builder : FormBuilder,
    private _movie : MovieService,
    private _person : PersonService,
    private _ar : ActivatedRoute,
    private _dialog : NbDialogService
  ) { }

  fg : FormGroup = this._builder.group([])

  ngOnInit(): void {
    this.personList = this._ar.snapshot.data['personList']
    this.initForm()
  }

  initForm() {
    this.fg = this._builder.group({
      title : [null, Validators.required],
      desc : [null, Validators.required],
      releaseYear : [null, Validators.required],
      realisator : [null, Validators.required],
      scenarist : [null, Validators.required],
      actors : this._builder.array([])
    })
  }

  submitForm() {
    let movieToApi : MovieToApi = {
      title : this.fg.value['title'],
      description : this.fg.value['desc'],
      releaseYear : this.fg.value['releaseYear'],
      realisatorId : this.fg.value['realisator'],
      scenaristId : this.fg.value['scenarist'],
      actors : []
      
    }    

    let ActorFromFG = this.getActors().value

    for(let i = 0; i < this.getActors().length; i++){
      movieToApi.actors?.push({movieId : 0, personId : ActorFromFG[i]['id'], role :ActorFromFG[i]['role']})
    }


    this._movie.create(movieToApi)
  }

  getActors() : FormArray {
    return this.fg.get('actors') as FormArray
  }

  addActor() {
    this.getActors().push(this._builder.group({
      id : [null, Validators.required],
      role : [null, Validators.required]
    }))
  }

  newPerson() {
    let box = this._dialog.open(AddpersonComponent)

    box.onClose.subscribe(() => {
      this._person.getAll().subscribe((x : Person[]) => this.personList = x)
    })
  }

}
