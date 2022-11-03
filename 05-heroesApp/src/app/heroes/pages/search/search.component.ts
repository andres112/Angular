import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroes.model';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public term = '';
  public heroes$?: Observable<Hero[]>;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  public searching():void{
    this.heroes$ = this.heroesService.getHeroes()
  }
}
