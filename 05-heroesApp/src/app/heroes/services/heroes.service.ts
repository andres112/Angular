import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay } from 'rxjs';
import { Hero } from '../interfaces/heroes.model';

const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  constructor(private http: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(BASE_URL + 'heroes');
  }

  public getHeroById(id: string): Observable<Hero> {
    // with simulated delay of 1 second
    return this.http.get<Hero>(BASE_URL + `heroes/${id}`).pipe(delay(1000));
  }
}
