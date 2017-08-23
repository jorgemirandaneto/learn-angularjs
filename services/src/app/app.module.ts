import { CursoService } from './curso/curso.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
