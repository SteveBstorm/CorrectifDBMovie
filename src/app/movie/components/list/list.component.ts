import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movieList : Movie[] = []

  constructor(
    private _movie : MovieService
  ) { }

  ngOnInit(): void {
    this._movie.getAll().subscribe((data : Movie[]) => this.movieList = data)
  }

}
