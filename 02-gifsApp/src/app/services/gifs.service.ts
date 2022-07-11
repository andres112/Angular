import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
const MAX_ITEMS = 10;
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiGiphy: string = environment.giphy;
  private _history: string[] = [];

  public gifs: any[] = [];

  constructor(private http: HttpClient) {}

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
    this.searchGifs(item);
    this._history.unshift(item);
  }

  searchGifs = (term: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${this.apiGiphy}&q=${term}&limit=20`;
    this.http.get(url).subscribe((res: any) => (this.gifs = res.data));
  };
}
