import { Injectable } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';

class Fighter implements FighterInterface {
  constructor(public name: string, public power: number) {}
}

@Injectable()
export class DbzService {
  private _fighters: Fighter[] = [];

  get fighters(): Fighter[] {
    // Break the reference to the original variable for security reasons
    return [...this._fighters];
  }
  constructor() {
    this._fighters.push(new Fighter('Goku', 18000));
    this._fighters.push(new Fighter('Vegeta', 12000));
  }

  addFighter = (fighter: FighterInterface): void => {
    const { name, power } = fighter;
    if (name.trim().length === 0 || power < 0) {
      return;
    }
    this._fighters.push(new Fighter(name, power));
  };
}
