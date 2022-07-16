import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'con-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss'],
})
export class ByCountryComponent implements OnInit {
  public term: string = '';
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search = () =>
    this.countryService.searchCountry(this.term).subscribe((resp) => {
      console.log(resp);
    });
}
