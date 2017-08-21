import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  getCurso(){
    return ['Angular', 'Java', 'C#'];
  }
  constructor() { }
}
