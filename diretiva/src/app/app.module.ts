import { HighlightDirective } from './shared/highlight.directive';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva-ngclass/diretiva-ngclass.component';
import { DireitivaNgstyleComponent } from './direitiva-ngstyle/direitiva-ngstyle.component';
import { OperadorElvesComponent } from './operador-elves/operador-elves.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';
import { DiretivaPersonalizadaComponent } from './diretiva-personalizada/diretiva-personalizada.component';



@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    DireitivaNgstyleComponent,
    OperadorElvesComponent,
    ExemploNgContentComponent,
    DiretivaPersonalizadaComponent,
    FundoAmareloDirective,
    HighlightMouseDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
