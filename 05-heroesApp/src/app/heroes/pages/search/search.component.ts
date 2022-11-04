import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  public selectedHero$?: Observable<Hero>;
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  public searching(): void {
    this.heroes$ = this.heroesService.getSuggestions(this.term.trim());
  }

  public optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event);
    
    const hero: Hero = event.option.value;
    this.term = hero.superhero;
    if(!!this.term){
      this.selectedHero$ = this.heroesService.getHeroById(hero.id!)
    }
  }
}
