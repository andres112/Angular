import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.model';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(hero: Hero): string {
    if(hero.alt_img){
      return hero.alt_img
    }
    if(!hero.id && !hero.alt_img){
      return 'assets/no-image.png'
    }
    return `assets/heroes/${hero.id}.jpg`
  }
}
