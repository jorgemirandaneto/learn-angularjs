import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-personalizada',
  templateUrl: './diretiva-personalizada.component.html',
  styleUrls: ['./diretiva-personalizada.component.css']
})
export class DiretivaPersonalizadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarCursos: boolean = false;
  
    Mostrar(){
      this.mostrarCursos = !this.mostrarCursos;
    }
}
