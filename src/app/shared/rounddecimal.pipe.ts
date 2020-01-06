import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounddecimal'
})

export class RoundDecimalPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value*100)/100;
  }

}
