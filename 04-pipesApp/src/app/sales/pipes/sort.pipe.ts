import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: Hero[], orderBy: string = 'name'): Hero[] {
    if (!orderBy) return value;
    if (orderBy === 'name') {
      return value.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (orderBy === 'flight') {
      return value.sort((a, b) => (a.flight > b.flight ? -1 : 1));
    }
    if (orderBy === 'color') {
      return value.sort((a, b) => (a.color > b.color ? 1 : -1));
    }
    return [];
  }
}
