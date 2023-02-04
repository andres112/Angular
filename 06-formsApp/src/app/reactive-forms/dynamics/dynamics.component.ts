import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormGroupName,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss'],
})
export class DynamicsComponent {
  public myDynamicForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorite: [''],
    favorites: this.formBuilder.array(
      ['hogwarts', 'anno 1800'],
      [Validators.required, Validators.minLength(1)]
    ),
  });

  get favoritesArr() {
    return this.myDynamicForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  public validateField(field: string) {
    return (
      this.myDynamicForm.controls[field].errors &&
      this.myDynamicForm.controls[field].touched
    );
  }

  public addFavorite(): void {
    (this.myDynamicForm.get('favorites') as FormArray).value.push(
      this.myDynamicForm.controls['favorite'].value
    );
    // reset the input only
    this.myDynamicForm.controls['favorite']?.reset();
  }

  public removeFavorite(index: number): void {
    (this.myDynamicForm.get('favorites') as FormArray).value.splice(index, 1);
  }

  public save() {
    if (this.myDynamicForm.invalid) {
      this.myDynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.myDynamicForm.value);
    this.myDynamicForm.reset();
  }
}
