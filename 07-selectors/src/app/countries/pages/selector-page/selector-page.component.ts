import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { Country } from '../../models/country.model';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss'],
})
export class SelectorPageComponent {
  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
  });

  // fill selects with data from service
  public regions$ = this.countryService.regions$;
  public countries$ = new ReplaySubject<Country[]>(1);

  constructor(
    private fb: FormBuilder,
    private countryService: CountriesService
  ) {}

  public save(): void {
    console.log(this.myForm.value);
  }
}
