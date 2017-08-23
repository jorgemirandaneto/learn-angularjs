import { Component, OnInit } from '@angular/core';

import { CursoService } from './../curso/curso.service';

@Component({
  selector: 'criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[];



  constructor(private _cursoService:CursoService) { 
  
  }
    

  ngOnInit() {

  this.cursos = this._cursoService.getCurso();

  }

}
