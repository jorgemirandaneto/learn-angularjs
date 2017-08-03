import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elves',
  templateUrl: './operador-elves.component.html',
  styleUrls: ['./operador-elves.component.css']
})
export class OperadorElvesComponent implements OnInit {

  pessoa: any = {
    desc: 'Descricao da tarefa',
    responsavel:{
      usuario: null
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
