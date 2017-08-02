import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direitiva-ngstyle',
  templateUrl: './direitiva-ngstyle.component.html',
  styleUrls: ['./direitiva-ngstyle.component.css']
})
export class DireitivaNgstyleComponent implements OnInit {

  ativo: boolean = false;

  tamanhoDafonte: number = 100;

  constructor() { }

  ngOnInit() {
  }

  onclick(){
      this.ativo = !this.ativo;
  }

}
