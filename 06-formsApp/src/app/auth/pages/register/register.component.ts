import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(this.validators.namePattern)],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.validators.emailPattern)],
        [this.emailValidator],
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
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [
        this.validators.validateEquals('password', 'repeatPassword'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  public isValidField(field: string): boolean {
    return !!(
      this.registerForm.get(field)?.touched &&
      this.registerForm.get(field)?.invalid
    );
  }

  public getErrorMessage(field: string): string | undefined {
    let message = '';
    if(!this.registerForm.get(field)?.touched) {
      return;
    }
    if (this.registerForm.get(field)?.errors?.['required']) {
      message = 'You must enter a value';
    } else if (this.registerForm.get(field)?.hasError('pattern')) {
      message = 'Not a valid pattern';
    } else if (this.registerForm.get(field)?.hasError('emailTaken')) {
      message = 'Email already taken';
    }
    return message;
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
