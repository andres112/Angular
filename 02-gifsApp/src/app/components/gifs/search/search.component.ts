import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  @ViewChild('searchInput')
  searchInput!: ElementRef<HTMLInputElement>; //! -> non-null assertion operator

  constructor(private gifsService: GifsService) {}
  ngOnInit(): void {}

  onSearch() {
    if (this.searchInput.nativeElement.value.trim().length === 0) {
      return;
    }
    // add the search term to the history using the service 
    this.gifsService.addHistoryItem(this.searchInput.nativeElement.value);
    this.searchInput.nativeElement.value = '';
  }
}
