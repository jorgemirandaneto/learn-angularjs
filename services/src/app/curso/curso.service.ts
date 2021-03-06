import { LogService } from './../shared/log.service';
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
    this.logService.EscreveLog("Adicionando um curso");
    this.curso.push(curso);
    this.emitirCursoCriado.emit(curso);
  }
  constructor(private logService: LogService) {
    console.log("Console");
   }
}
