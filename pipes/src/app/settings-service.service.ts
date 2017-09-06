import { Injectable } from '@angular/core';

@Injectable()
export class SettingsServiceService {

  constructor() { }

  getLocale(){
    return 'pt-BR';
  }
}
