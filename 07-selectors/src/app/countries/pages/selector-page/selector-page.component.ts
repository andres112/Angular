import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, of, ReplaySubject, map, from, BehaviorSubject } from 'rxjs';
import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';
import {
  switchMap,
  tap,
  filter,
  combineLatestWith,
  mergeMap,
  scan,
} from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss'],
})
export class SelectorPageComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: [''],
  });

  // fill selects with data from service
  public regions$ = this.countryService.regions$;
  public countries$ = new ReplaySubject<Country[]>(1);
  public borders$ = new BehaviorSubject<Country[]>([]);
  public countriesByRegion: Map<string, Country[]> = new Map();

  constructor(
    private fb: FormBuilder,
    private countryService: CountriesService
  ) {}

  public ngOnInit(): void {
    this.countries$.next([]);
    this.borders$.next([]);
    this.myForm
      .get('region')
      ?.valueChanges.pipe(
        switchMap((region) =>
          this.controlCountriesByRegion(region).pipe(
            tap((countries) => {
              if (region) {
                this.countriesByRegion.set(region, countries);
              }
              this.countries$.next(countries);
            })
          )
        )
      )
      .subscribe();

    this.myForm
      .get('country')
      ?.valueChanges.pipe(
        combineLatestWith(this.countries$),
        map(([countryCode, countries]) => {
          this.myForm.get('border')?.setValue('');
          this.borders$.next([]);
          const selected = countries.filter(
            (c: Country) => c.cca3 === countryCode
          )[0];
          return selected?.borders || [];
        }),
        switchMap((borders) =>
          from(borders).pipe(
            mergeMap((b) => this.countryService.getCountryByCca3(b))
          )
        ),
        tap((country) => {
          const borders = this.borders$.value;
          this.borders$.next(borders.concat(country));
        })
      )
      .subscribe();
  }

  public save(): void {
    console.log(this.myForm.value);
  }

  private controlCountriesByRegion(region: string): Observable<Country[]> {
    this.myForm.get('country')?.setValue('');
    if (!region) {
      return of([]);
    }
    if (this.countriesByRegion.has(region)) {
      //@ts-ignore
      return of(this.countriesByRegion.get(region));
    }
    return this.countryService.getCountriesByRegion(region);
  }
}
