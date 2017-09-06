import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo:'A tendência dos vestidos de noiva curtos. Veja como e quando usar.',
    rating:4.5658,
    numeroPagina:356,
    preco:54.56,
    dataLancamento: new Date(2016,5,23),
    url: 'http:///a.com'
  }

  constructor() { }

  ngOnInit() {
  }

}
