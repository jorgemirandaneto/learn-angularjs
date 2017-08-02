import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  mudarEstrela: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.mudarEstrela = !this.mudarEstrela;
  }
}
