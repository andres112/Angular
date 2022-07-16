import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private API_URL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  // This function return an observable
  searchCountry = (country: string):Observable<any> => {
    return this.http.get(`${this.API_URL}/name/${country}`);
  };
}
