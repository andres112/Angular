import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayuscula',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string, combine?: boolean): string {
    if (combine) {
      return value
        .toLowerCase()
        .replaceAll('a', '4')
        .replaceAll('e', '3')
        .replaceAll('i', '1')
        .replaceAll('o', '0').toUpperCase();
    }
    return value.toUpperCase();
  }
}
