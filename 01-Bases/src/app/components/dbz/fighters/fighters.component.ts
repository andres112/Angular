import { Component, Input } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-fighters',
  templateUrl: './fighters.component.html',
})
export class FightersComponent {
  // @Input('data') fighters: FighterInterface[] = [];
  get fighters(): FighterInterface[] {
    return this.dbzService.fighters;
  }
  // Dependency Injection
  constructor(private dbzService: DbzService) {}
}
