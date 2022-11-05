import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { Hero } from '../interfaces/heroes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl + 'heroes');
  }

  public getHeroById(id: string): Observable<Hero> {
    // with simulated delay of 1 second
    return this.http.get<Hero>(this.baseUrl + `heroes/${id}`).pipe(delay(1000));
  }

  public getSuggestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.baseUrl + `heroes?q=${term}&_limit=6`);
  }

  public addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.baseUrl + 'heroes', hero);
  }

  public updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.baseUrl + `heroes/${hero.id}`, hero);
  }
}
