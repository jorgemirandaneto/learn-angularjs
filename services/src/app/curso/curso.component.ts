import { CursoService } from './curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
  providers: [CursoService]
})
export class CursoComponent implements OnInit {

  cursos: string[];

  

  constructor(private _cursoService: CursoService) {

    
    //this.cursoService = new CursoService();
    //this.cursos = this.cursoService.getCurso();

  }
  ngOnInit() {
    this.cursos = this._cursoService.getCurso();

    CursoService.criouNovoCurso.subscribe(
      curso => console.log(curso)
    )
  } 

  onAddCurso(curso: string) {
      this._cursoService.addCurso(curso);
      console.log(curso);
  }
}
