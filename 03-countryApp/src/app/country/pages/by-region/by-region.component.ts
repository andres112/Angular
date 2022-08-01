import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'con-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.scss'],
})
export class ByRegionComponent implements OnInit {
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  public selectedRegion = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {}

  public setRegion = (region: string): void => {
    this.selectedRegion = region;
    this.search();
  };

  activeClass(region: string): string {
    return this.selectedRegion === region
      ? 'btn-primary'
      : 'btn-outline-primary';
  }

  search = () => {
    this.countryService.searchRegion(this.selectedRegion).subscribe({
      next: (countries: Country[]) => {
        this.countries = countries;
      },
      error: (err) => (this.countries = []),
    });
  };
}
