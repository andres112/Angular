import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  public myForm: FormGroup = this.fb.group({
    gender: ['m', Validators.required],
    notifications: [, Validators.required],
    terms: [, Validators.requiredTrue],
  });
  

  public person = {
    gender: 'a',
    notifications: true,
  };

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
    });

    // monitor the form changes to update the person object
    this.myForm.valueChanges.subscribe((form) => {
      delete form.terms;
      this.person = form;
    });
  }

  public save(): void {
    const formValue = { ...this.myForm.value };
    delete formValue.terms;
    this.person = formValue;
    this.myForm.reset();
  }
}
