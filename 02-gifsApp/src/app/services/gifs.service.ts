import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Gif, GifResponse } from '../components/gifs/models/gif.model';
const MAX_ITEMS = 10;
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private BASE_URL = 'https://api.giphy.com/v1/gifs';
  public gifs: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('gifs')!) ?? [];
  }

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

    localStorage.setItem('gifs', JSON.stringify(this._history));
  }

  searchGifs = (term: string) => {
    const params = new HttpParams()
      .set('api_key', environment.giphy)
      .set('q', term)
      .set('limit', '30');
    const url = `${this.BASE_URL}/search`;
    this.http
      .get<GifResponse>(url, { params: params })
      .subscribe((res) => (this.gifs = res.data));
  };
}
