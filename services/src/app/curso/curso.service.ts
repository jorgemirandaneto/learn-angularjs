import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {
  curso: string[] = ['Angular', 'Java', 'C#'];


  getCurso(){
    return this.curso;
  }

  addCurso(curso : string){
    this.curso.push(curso);
  }
  constructor() {
    console.log("Console");
   }


}
