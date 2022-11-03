import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../../interfaces/heroes.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  public heroInfo$?: Observable<Hero>;
  constructor(
    private activeRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {}

  ngOnInit(): void {
    this.heroInfo$ = this.activeRoute.params.pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    );
  }
}
