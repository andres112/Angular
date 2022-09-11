import { Component, OnInit } from '@angular/core';
import { Hero, Color } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-pipe-sort',
  templateUrl: './pipe-sort.component.html',
  styleUrls: ['./pipe-sort.component.scss'],
})
export class PipeSortComponent implements OnInit {
  public heroes: Hero[] = [];
  public filterBy: string =''
  constructor() {}

  ngOnInit(): void {
    this.heroes = [
      { name: 'Superman', flight: true, color: Color.blue },
      { name: 'Batman', flight: false, color: Color.black },
      { name: 'Aquaman', flight: false, color: Color.blue },
      { name: 'Flash', flight: false, color: Color.red },
      { name: 'Green lantern', flight: true, color: Color.green },
      { name: 'Robin', flight: false, color: Color.yellow}
    ];
  }

  public changeFilter = (filter: string) => {
    this.filterBy = filter;
  }
}
