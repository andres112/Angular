import { Component, OnInit } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';

class Fighter implements FighterInterface {
  constructor(public name: string, public power: number) {}
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public fighters: Fighter[] = [];
  newFighter: FighterInterface = { name: '', power: 0 };
  ngOnInit(): void {
    this.fighters.push(new Fighter('Goku', 18000));
    this.fighters.push(new Fighter('Vegeta', 12000));
  }

  addFighter = () => {
    const { name, power } = this.newFighter;
    if (name.trim().length === 0 || power < 0) {
      return;
    }
    this.fighters.push(new Fighter(name, power));
  };
}
