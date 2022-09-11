import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flight',
})
export class FlightPipe implements PipeTransform {
  transform(value: boolean, combine?: boolean): string {
    return value ? '👍': '⛔';
  }
}
