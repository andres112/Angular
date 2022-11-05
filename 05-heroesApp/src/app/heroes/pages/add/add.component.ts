import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Hero } from '../../interfaces/heroes.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public hero = {} as Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  public onSave(): void {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    this.heroesService.addHero(this.hero).pipe(take(1)).subscribe();
  }
}
