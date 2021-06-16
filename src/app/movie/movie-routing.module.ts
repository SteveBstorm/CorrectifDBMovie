import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonResolver } from '../services/personresolver.service';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { DetailmovieComponent } from './components/detailmovie/detailmovie.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path : '', redirectTo : 'list', pathMatch : 'full'},
  {path : 'list', component : ListComponent},
  {path : 'new', resolve : {personList : PersonResolver}, component : AddmovieComponent},
  {path : 'detail/:id', component : DetailmovieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
