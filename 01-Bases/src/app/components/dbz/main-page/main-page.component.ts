import { Component, OnInit } from '@angular/core';
import { FighterInterface } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

class Fighter implements FighterInterface {
  constructor(public name: string, public power: number) {}
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  newFighter: FighterInterface = { name: '', power: 0 };

  ngOnInit(): void {}

  // addFighter = () => {
  //   const { name, power } = this.newFighter;
  //   if (name.trim().length === 0 || power < 0) {
  //     return;
  //   }
  //   this.fighters.push(new Fighter(name, power));
  // };
}
