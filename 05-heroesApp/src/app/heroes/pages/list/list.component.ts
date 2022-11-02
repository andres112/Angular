import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public heroes$?: Observable<Hero[]>;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroesService.getHeroes();
  }
}
