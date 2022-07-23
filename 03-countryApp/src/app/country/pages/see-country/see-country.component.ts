import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'con-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.scss'],
})
export class SeeCountryComponent implements OnInit {
  public countries: Country[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}
  ngOnInit(): void {
    this.activeRoute.params
      .pipe(switchMap(({ id }) => this.countryService.searchCountryByCode(id)))
      .subscribe({
        next: (countries: Country) => {
          this.countries = [countries];
          console.log('Individual country', this.countries);
        },
      });
    // this.activeRoute.params.subscribe(({ id }) => {
    //   this.countryService.searchCountryByCode(id).subscribe({
    //     next: (countries: Country) => {
    //       this.countries = [countries];
    //       console.log('Individual country', this.countries);
    //     },
    //   });
    // });
  }
}
