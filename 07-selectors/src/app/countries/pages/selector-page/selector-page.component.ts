import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss'],
})
export class SelectorPageComponent {
  public myForm: FormGroup = this.fb.group({
    region: '',
  });

  // TODO: Change for response from restAPI
  public regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  constructor(private fb: FormBuilder) {}

  public save(): void {
    console.log(this.myForm.value);
  }
}
