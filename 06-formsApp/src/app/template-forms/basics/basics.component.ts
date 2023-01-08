import { Component, ViewChild } from '@angular/core';
import { NgForm, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent {
  @ViewChild('templateBasicForm') myForm!: NgForm;

  public validProduct(): boolean {
    return (
      this.myForm?.controls['product']?.invalid &&
      this.myForm?.controls['product']?.touched
    );
  }

  public validPrice(): boolean {
    return (
      this.myForm?.value.price < 0 ||
      (this.myForm?.controls['price']?.invalid &&
        this.myForm?.controls['price']?.touched)
    );
  }

  public validStock(): ValidationErrors | null {
    if (
      this.myForm?.controls['stock']?.invalid &&
      this.myForm?.controls['stock']?.touched
    ) {
      return this.myForm?.controls['stock']?.errors;
    }
    return null;
  }

  public save(): void {
    if (this.myForm.invalid) {
      this.myForm.control.markAllAsTouched();
      return;
    }
    console.log(this.myForm);
    this.resetForm();
  }

  public resetForm(): void {
    this.myForm.resetForm({
      product: '',
      price: 0,
      stock: 0,
    });
  }
}
