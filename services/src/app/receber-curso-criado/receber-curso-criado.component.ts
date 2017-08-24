import { CursoService } from './../curso/curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber-curso-criado',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string;

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.emitirCursoCriado.subscribe(
      cursoCriado =>  this.curso = cursoCriado
    )
  }

}
