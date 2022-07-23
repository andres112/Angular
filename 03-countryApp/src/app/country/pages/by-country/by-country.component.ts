import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'con-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss'],
})
export class ByCountryComponent implements OnInit {
  public isError: boolean = false;
  public countries: Country[] = [];
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search = (term: any) => {
    this.isError = false;
    this.countryService.searchCountry(term).subscribe({
      next: (countries: Country[]) => {
        this.countries = countries;
      },
      error: (err) => ((this.isError = true), (this.countries = [])),
    });
  };

  suggest = (term: any) => console.log(term);
}
