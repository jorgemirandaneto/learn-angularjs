import {  FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-cadastro-pessoa-list',
  templateUrl: './cadastro-pessoa-list.component.html',
  styleUrls: ['./cadastro-pessoa-list.component.css']
})
export class CadastroPessoaListComponent implements OnInit {

  pessoas: FirebaseListObservable<any>;
  
    constructor(db: AngularFireDatabase) {
  }

  ngOnInit() {

  }

}
