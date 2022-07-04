import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  heroes: string[];
  deletedHero: string = '';
  constructor() {
    this.heroes = ['Alf', 'Bert', 'Cora', 'Dora'];
  }

  ngOnInit(): void {}

  // methods
  deleteLastHero = (): void => {
    if (this.heroes.length > 0) {
      this.deletedHero = this.heroes.pop() ?? '';
      return;
    }
    this.deletedHero = '';
  };
}
