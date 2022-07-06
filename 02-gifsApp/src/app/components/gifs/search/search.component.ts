import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>; //! -> non-null assertion operator
  
  constructor() {}
  ngOnInit(): void {}

  onSearch() {
    this.searchInput.nativeElement.value = '';
  }
}
