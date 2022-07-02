import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  heroes: string[];
  deletedHeroe: string = '';
  constructor() {
    console.log('ListComponent constructor');
    this.heroes = ['Alf', 'Bert', 'Cora', 'Dora'];
  }

  ngOnInit(): void {
    console.log('ListComponent ngOnInit');
  }

  // methods
  deleteLastHeroe = (): void => {
    if (this.heroes.length > 0) {
      this.deletedHeroe = this.heroes.pop() ?? '';
      return;
    }
    alert('No more heroes to delete');
  };
}
