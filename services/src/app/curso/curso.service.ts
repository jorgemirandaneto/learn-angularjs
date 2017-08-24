import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CursoService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();


  curso: string[] = ['Angular', 'Java', 'C#'];


  getCurso(){
    return this.curso;
  }

  addCurso(curso : string){
    this.curso.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
  constructor() {
    console.log("Console");
   }


}
