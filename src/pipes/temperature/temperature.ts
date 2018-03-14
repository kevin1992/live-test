import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TemperaturePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, typeToConvert:string ) {
    if(typeToConvert == 'C'){
      return Math.round(value - 273.15);
    }

    return Math.round(value * 1.8- 459.67);

  }
}
