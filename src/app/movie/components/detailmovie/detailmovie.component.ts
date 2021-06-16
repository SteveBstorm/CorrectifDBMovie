import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detailmovie',
  templateUrl: './detailmovie.component.html',
  styleUrls: ['./detailmovie.component.scss']
})
export class DetailmovieComponent implements OnInit {

  currentMovie : Movie = {}

  constructor(
    private _movie : MovieService,
    private _ar : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this._ar.snapshot.params['id']
    this._movie.getOne(id).subscribe((m : Movie) => this.currentMovie = m)
  }

}
