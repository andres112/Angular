import { Component, OnInit } from '@angular/core';

interface Fighter {
  name: string;
  power: number;
}
class Fighter implements Fighter {
  constructor(public name: string, public power: number) {}
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public fighters: Fighter[] = [];
  newFighter: Fighter = { name: '', power: 0 };
  ngOnInit(): void {
    this.fighters.push(new Fighter('Goku', 18000));
    this.fighters.push(new Fighter('Vegeta', 12000));
  }
  addFighter = () => {
    const { name, power } = this.newFighter;
    debugger;
    if (name.trim().length === 0 || power < 0) {
      return;
    }
    this.fighters.push(new Fighter(name, power));
    this.newFighter = { name: '', power: 0 };
  };
}
