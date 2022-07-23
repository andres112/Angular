import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'con-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss'],
})
export class ByCountryComponent implements OnInit {
  public isError: boolean = false;
  public countries: Country[] = [];
  constructor() {}

  ngOnInit(): void {}

  setCountries = (countries: Country[]) => (this.countries = countries);
  setError = (value: any): void => (this.isError = value);
}
