import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1/';
  private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  // getter that returns a copy of the array as observable
  get regions$(): Observable<string[]> {
    return of(this._regions);
  }

  constructor(private http: HttpClient) {}

  public getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}region/${region}?fields=name,cca3`
    );
  }
}
