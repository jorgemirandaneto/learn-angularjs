import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    //Indetifica os espaços que entra no valor(Palavra) e atribui a variavel values.
    let values = value.split(' ');
    
    //Inicia a variavel result.
    let result = '';
    
    //"For of" passa o por todos os valores e invoca o método capitalize passando o valor para a result.s
    for(let v of values){
      result += this.capitalize(v) + ' ';
    }

    return result;
  }
  //Pega a palavra que entra no valor e transforma a primeira 
  //letra da palavra em maiuscula e o resto em minuscula.
  capitalize(value: string){
    return value.substr(0,1).toUpperCase() + value.substr(1).toLowerCase();
  }
}
