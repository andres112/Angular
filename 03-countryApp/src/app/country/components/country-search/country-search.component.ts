import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'con-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss'],
})
export class CountrySearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  debouncer: Subject<string> = new Subject(); // create an observable type Subject

  public term: string = '';
  constructor() {}

  // observable is initialized with subscription
  ngOnInit(): void {
    //debounceTime allows to get data after time without a key press
    this.debouncer
      .pipe(debounceTime(300)) // pipe to manipulate observable
      .subscribe((value) => this.onDebounce.emit(value)); //subscribe to observable
  }
  setTerm = () => {
    this.debouncer.next(this.term); // get next term of observable
  };

  setSearchTerm = () => this.onSearch.emit(this.term);
}
