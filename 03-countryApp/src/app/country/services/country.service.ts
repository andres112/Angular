import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private API_URL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  // This function return an observable
  searchCountry = (country: string): Observable<Country[]> => {
    return this.http.get<Country[]>(`${this.API_URL}/name/${country}`);
  };
}
