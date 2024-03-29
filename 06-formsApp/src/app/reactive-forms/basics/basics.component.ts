import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent {
  //FormControl approach
  // public myForm: FormGroup = new FormGroup({
  //   product: new FormControl('RTX3070'),
  //   price: new FormControl(10),
  //   stock: new FormControl(5),
  // });

  // FormBuilder approach
  public myForm: FormGroup = this.fb.group({
    product: [, [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    stock: [, [Validators.required, Validators.min(0)]],
  });

  constructor(private fb: FormBuilder) {}

  public validateField(field: string) {
    return (
      this.myForm.controls[field].errors &&
      this.myForm.controls[field].touched
    );
  }

  public save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
