import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public hero = {} as Hero;
  constructor() {}

  ngOnInit(): void {}

  public onSave(): void {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
  }
}
