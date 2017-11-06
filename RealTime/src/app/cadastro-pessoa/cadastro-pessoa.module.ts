import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPessoaFormComponent } from './cadastro-pessoa-form/cadastro-pessoa-form.component';
import { CadastroPessoaListComponent } from './cadastro-pessoa-list/cadastro-pessoa-list.component';
import { CadastroPessoaComponent } from './cadastro-pessoa.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [CadastroPessoaFormComponent, CadastroPessoaListComponent,CadastroPessoaComponent],
  declarations: [CadastroPessoaFormComponent, CadastroPessoaListComponent,CadastroPessoaComponent]
  })
export class CadastroPessoaModule { }
