import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrosArray'
})
export class FiltrosArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {

   if(value.length === 0 || args === undefined) {
    return value;
   }

    let filter = args.toLocaleLowerCase();
    return value.filter(
    v => v.toLocaleLowerCase().indexOf(filter) != -1
  );
  }
}
