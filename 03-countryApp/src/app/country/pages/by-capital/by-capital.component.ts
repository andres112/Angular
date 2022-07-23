import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'con-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.scss'],
})
export class ByCapitalComponent implements OnInit {
  public isError: boolean = false;
  public countries: Country[] = [];
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search = (term: any) => {
    this.isError = false;
    this.countryService.searchCapital(term).subscribe({
      next: (countries: Country[]) => {
        this.countries = countries;
      },
      error: (err) => ((this.isError = true), (this.countries = [])),
    });
  };

  suggest = (term: any) => console.log(term);
}
