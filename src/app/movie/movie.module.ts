import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from '../shared/shared.module';
import { AddmovieComponent } from './components/addmovie/addmovie.component';
import { DetailmovieComponent } from './components/detailmovie/detailmovie.component';
import { AddpersonComponent } from './components/addperson/addperson.component';


@NgModule({
  declarations: [
    ListComponent,
    AddmovieComponent,
    DetailmovieComponent,
    AddpersonComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  bootstrap : [ListComponent]
})
export class MovieModule { }
