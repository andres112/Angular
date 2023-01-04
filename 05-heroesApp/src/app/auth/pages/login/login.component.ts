import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  public login() {
    this.authService
      .login()
      .pipe(
        catchError((err) => {
          console.log('Handling error locally and rethrowing it...', err);
          this.router.navigate(['/heroes']);
          return throwError(() => new Error(err));
        })
      )
      .subscribe((resp) => {
        console.log(resp);
        this.router.navigate(['/heroes']);
      });
  }
}
