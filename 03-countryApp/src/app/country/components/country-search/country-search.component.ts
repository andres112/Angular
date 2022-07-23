import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'con-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss'],
})
export class CountrySearchComponent implements OnInit {
  @Output() onError: EventEmitter<boolean> = new EventEmitter();
  @Output() onSearch: EventEmitter<Country[]> = new EventEmitter();
  public term: string = '';
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}
  search = () => {
    this.onError.emit(false);
    this.countryService.searchCountry(this.term).subscribe({
      next: (countries: Country[]) => {
        this.onSearch.emit(countries);
      },
      error: (err) => (this.onError.emit(true), this.onSearch.emit([])),
    });
  };
}
