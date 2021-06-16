import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbListModule, NbSelectModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbLayoutModule,
    NbEvaIconsModule,
    
  ],
  exports : [
    FormsModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbListModule,
    NbSelectModule,
    NbLayoutModule,
    NbEvaIconsModule
  ]
})
export class SharedModule { }
