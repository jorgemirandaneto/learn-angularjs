import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: string[];

  cursoService: CursoService;

  constructor(private _cursoService: CursoService) {

    this.cursoService = _cursoService;
    //this.cursoService = new CursoService();
    //this.cursos = this.cursoService.getCurso();

  }
  ngOnInit() {
    this.cursos = this.cursoService.getCurso();
  }

  onAddCurso(curso: string) {
      this._cursoService.addCurso(curso);
      console.log(curso);
      alert(curso + " VIADO com sucesso.");
  }
}
