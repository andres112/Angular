import { Component, OnInit } from '@angular/core';

class Fighter {
  constructor(public name: string, public power: number) {
    this.name = name;
    this.power = power;
  }
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public fighters: Fighter[] = [];
  ngOnInit(): void {
    this.fighters.push(new Fighter('Goku', 1800));
    this.fighters.push(new Fighter('Vegeta', 1200));
    this.fighters.push(new Fighter('Krilin', 300));
  }
  addFighter = () => {
    console.log();
  };
}
