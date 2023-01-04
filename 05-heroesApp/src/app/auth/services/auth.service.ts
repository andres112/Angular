import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private baseURL: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  public login(){
    return this.http.get<User>(this.baseURL+'usuarios/2');
  }

}
