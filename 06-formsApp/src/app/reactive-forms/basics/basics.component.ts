import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    product: ['RTX3070'],
    price: [10],
    stock: [5],
  });

  constructor(private fb: FormBuilder) {}
}
