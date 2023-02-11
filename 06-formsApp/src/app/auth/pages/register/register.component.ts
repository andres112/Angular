import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public registerForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\b\w{2,}\b(?:\s+\b\w{2,}\b){1,5}$/),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)],
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        this.validateUsername,
      ],
    ],
    password: [''],
    repeatPassword: [''],
  });

  constructor(private fb: FormBuilder) {}

  private validateUsername(control: FormControl): ValidationErrors{
    const value = control.value?.trim();
    console.log(value);
    
    // check if the username follow this pattern AnDrEs or aNdReS
    if (!/^(?:([A-Z][a-z])|([a-z][A-Z]))+$/.test(value)) {
      return {
        errorPattern: true,
      };
    }
    return {};
  }

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
