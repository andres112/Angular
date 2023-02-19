import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { Observable, map, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  public validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    const email = control.value;
    return this.http.get<any[]>(`http://localhost:3000/users?q=${email}`).pipe(
      delay(1000), // Simulate a delay in the server
      map((resp) => {
        return resp.length === 0 ? null : { emailTaken: true };
      })
    );
  }
}
