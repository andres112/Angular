import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { ValidatorService } from '../../shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(this.validators.namePattern)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.validators.emailPattern)],
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        this.validators.validateUsername,
      ],
    ],
    password: [''],
    repeatPassword: [''],
  });

  constructor(private fb: FormBuilder, private validators: ValidatorService) {}

  public isValidField(field: string): boolean {
    return !!(
      this.registerForm.get(field)?.touched &&
      this.registerForm.get(field)?.invalid
    );
  }

  public send(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    alert(JSON.stringify(this.registerForm.value));
    this.registerForm.reset();
  }
}
