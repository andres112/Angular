import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss'],
})
export class DynamicsComponent {
  public myDynamicForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public validateField(field: string) {
    return (
      this.myDynamicForm.controls[field].errors &&
      this.myDynamicForm.controls[field].touched
    );
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
