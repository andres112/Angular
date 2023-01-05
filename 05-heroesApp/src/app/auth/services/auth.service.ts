import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.model';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

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

  public checkAuth(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<User>(this.baseURL + 'usuarios/2').pipe(
      map((user) => {
        this._auth = user;
        return true;
      })
    )
  }

  public login() {
    return this.http.get<User>(this.baseURL + 'usuarios/2').pipe(
      tap((resp) => (this._auth = resp)),
      tap((resp) => localStorage.setItem('token', resp.id.toString()))
    );
  }

  public logout() {
    this._auth = undefined;
    localStorage.clear();
  }
}
