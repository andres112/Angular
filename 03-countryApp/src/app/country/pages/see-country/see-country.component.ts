import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'con-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss'],
})
export class SeeCountryComponent implements OnInit {
  public country!: Country;

  constructor(
    private activeRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}
  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.searchCountryByCode(id)),
        tap()
      )
      .subscribe({
        next: (countries: Country) => {
          this.country = countries;
        },
      });
  }
}
