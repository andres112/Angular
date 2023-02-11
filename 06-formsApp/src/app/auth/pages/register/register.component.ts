import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  public registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: [''],
    password: [''],
    repeatPassword: [''],
  });

  constructor(private fb: FormBuilder) {}
}
