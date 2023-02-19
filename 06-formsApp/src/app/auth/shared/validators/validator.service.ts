import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public namePattern: RegExp = /^\b\w{2,}\b(?:\s+\b\w{2,}\b){1,5}$/;
  public emailPattern: RegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  constructor() {}

  public validateUsername(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim();
    console.log(value);

    // check if the username follow this pattern AnDrEs or aNdReS
    if (/^(?:([A-Z][a-z])|([a-z][A-Z]))+$/.test(value)) {
      return null;
    }
    return { errorPattern: true };
  }

  public validateEquals(term1: string, term2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const value1 = formGroup.get(term1)?.value;
      const value2 = formGroup.get(term2)?.value;

      console.log(value1, value2);
      

      if (value1 !== value2) {
        formGroup.get(term2)?.setErrors({ noEquals: true });
        return { noEquals: true };
      }
      formGroup.get(term2)?.setErrors(null);
      return null;
    }
  }
}
