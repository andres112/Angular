import { Directive, Input } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  // The name to be used in the template
  // Associated to ngModel to bind the value
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minValue: number = 0;

  public validate(control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    // when error exist the selector is true
    return inputValue < this.minValue ? { customMin: true } : null;
  }
}
