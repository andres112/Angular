import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'con-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
})
export class CountryTableComponent implements OnInit {
  @Input() countries: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
