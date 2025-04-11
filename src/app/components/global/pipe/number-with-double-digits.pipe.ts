import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberWithDoubleDigits',
    standalone: false
})
export class NumberWithDoubleDigitsPipe implements PipeTransform {
  transform(number: number): string {
    if (number < 10) {
      return `0${number}`;
    }
    return number.toString();
  }
}
