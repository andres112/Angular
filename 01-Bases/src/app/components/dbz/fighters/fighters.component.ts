import { Component, Input } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
})
export class FightersComponent {
  @Input('data') fighters: FighterInterface[] = [];
}
