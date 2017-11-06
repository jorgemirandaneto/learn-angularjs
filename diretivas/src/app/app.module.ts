import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MaterializeModule } from "angular2-materialize";



@NgModule({
  declarations: [
    AppComponent,
    MaterializeModule,
    DiretivaNgifComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
