import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss'],
})
export class DynamicsComponent {
  public myDynamicForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array(
      ['hogwarts', 'anno 1800'],
      [Validators.required, Validators.minLength(1)]
    ),
  });
  public favorite: FormControl = this.formBuilder.control('', [
    Validators.required,
    Validators.minLength(1),
  ]);

  public get favoritesArr(): FormArray {
    return this.myDynamicForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  public validateField(field: string | FormControl) {
    if (typeof field === 'string') {
      return (
        this.myDynamicForm.controls[field].errors &&
        this.myDynamicForm.controls[field].touched
      );
    }
    return field.invalid && field.touched;
  }

  public addFavorite(): void {
    if (this.favorite.invalid) {
      this.favorite.markAsTouched();
      return;
    }
    // It's possible to use the getter to access the array
    this.favoritesArr.push(
      this.formBuilder.control(this.favorite.value, Validators.required)
    );
    this.favorite.reset();
  }

  public removeFavorite(index: number): void {
    this.favoritesArr.removeAt(index);
  }

  public save() {
    if (this.myDynamicForm.invalid) {
      this.myDynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.myDynamicForm.value);
    this.favoritesArr.clear();
    this.myDynamicForm.reset();
  }
}
