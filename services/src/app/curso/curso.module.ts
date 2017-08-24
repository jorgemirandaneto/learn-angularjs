
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CursoComponent } from './curso.component';
import { CursoService } from './curso.service';

@NgModule({
  declarations: [
    CursoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CursoComponent],
  providers: [CursoService]
})
export class CursosModule { }