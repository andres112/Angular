import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'con-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss'],
})
export class ByCountryComponent implements OnInit {
  public term: string = '';
  public isError: boolean = false;
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search = () => {
    this.isError = false;
    this.countryService.searchCountry(this.term).subscribe({
      next: (countries: Country[]) => {
        console.log(countries);
      },
      error: (err) => (this.isError = true),
    });
  };
}
