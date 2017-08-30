import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  EscreveLog(escreva: string){
    console.log(escreva)
  }
}
