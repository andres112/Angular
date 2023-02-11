import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  public namePattern: RegExp = /^\b\w{2,}\b(?:\s+\b\w{2,}\b){1,5}$/;
  public emailPattern: RegExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  constructor() {}

  public validateUsername(control: FormControl): ValidationErrors {
    const value = control.value?.trim();
    console.log(value);

    // check if the username follow this pattern AnDrEs or aNdReS
    if (/^(?:([A-Z][a-z])|([a-z][A-Z]))+$/.test(value)) {
      return {};
    }
    return { errorPattern: true };
  }
}
