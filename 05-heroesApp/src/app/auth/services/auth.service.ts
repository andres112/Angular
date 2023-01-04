import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL: string = environment.baseUrl;
  private _auth: User | undefined;

  get auth(): User {
    return { ...this._auth } as User;
  }
  constructor(private http: HttpClient) {}

  public login() {
    return this.http
      .get<User>(this.baseURL + 'usuarios/2')
      .pipe(tap((resp) => (this._auth = resp)));
  }

  public logout() {
    this._auth = undefined;
  }
}
