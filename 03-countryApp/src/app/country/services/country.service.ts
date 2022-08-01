import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private API_URL: string = 'https://restcountries.com/v2';
  private httpParams = new HttpParams().set(
    'fields',
    'name,capital,flag,population,alpha2Code'
  );

  constructor(private http: HttpClient) {}

  // This function return an observable
  searchCountry = (country: string): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.API_URL}/name/${country}`, {
      params: this.httpParams,
    });
  };

  searchCapital = (capital: string): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.API_URL}/capital/${capital}`, {
      params: this.httpParams,
    });
  };

  searchCountryByCode = (code: string): Observable<Country> => {
    return this.http.get<Country>(`${this.API_URL}/alpha/${code}`);
  };

  searchRegion = (region: string): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.API_URL}/region/${region}`, {
      params: this.httpParams,
    });
  };
}
