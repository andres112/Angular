import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const MAX_ITEMS = 10;
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiGiphy:string = environment.giphy;
  private _history: string[] = [];
  constructor() {}

  get history(): string[] {
    return [...this._history];
  }

  addHistoryItem(item: string) {
    item = item.toLowerCase();
    if (this._history.includes(item)) {
      this._history.splice(this.history.indexOf(item), 1);
    }
    if (this._history.length >= MAX_ITEMS) {
      this._history.pop();
    }
    this._history.unshift(item);
  }
}
