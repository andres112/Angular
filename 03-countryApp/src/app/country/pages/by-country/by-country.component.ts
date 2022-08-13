import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

import SwiperCore, { SwiperOptions, Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Navigation, Pagination]);

@Component({
  selector: 'con-by-country',
  templateUrl: './by-country.component.html',
  styleUrls: ['./by-country.component.scss'],
})
export class ByCountryComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    loop:true,
    autoplay: {delay:2000}
  }

  public isError: boolean = false;
  public countries: Country[] = [];
  public suggestedCountries: Country[] = [];
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  search = (term: any) => {
    this.isError = false;
    this.countryService.searchCountry(term).subscribe({
      next: (countries: Country[]) => {
        this.countries = countries;
        this.suggestedCountries = [];
      },
      error: (err) => ((this.isError = true), (this.countries = [])),
    });
  };

  suggest = (term: any) => {
    this.suggestedCountries = [];
    this.countryService.searchCountry(term).subscribe({
      next: (countries: Country[]) => {
        this.suggestedCountries = countries.splice(0, 5);
      },
    });
  };
}
