import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'con-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.scss'],
})
export class CountrySearchComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() suggestions: Country[] = [];
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

  setSearchTerm = (name?: any) => {
    this.onSearch.emit(name ?? this.term);
    this.term = '';
  };
}
