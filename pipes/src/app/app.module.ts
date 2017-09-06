import { SettingsServiceService } from './settings-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // {
    //   //Forma simples de usar uma internacionalização(Locale).
    //   provide: LOCALE_ID,
    //   useValue: 'pt-BR'  
    // }


    //Acessando um serviço de configuração para trazer qual a localidade da internacionalização.
    SettingsServiceService,
    {
      provide: LOCALE_ID,
        deps:[SettingsServiceService],
        useFactory:(settingsServiceService) => settingsServiceService.getLocale()
    }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
