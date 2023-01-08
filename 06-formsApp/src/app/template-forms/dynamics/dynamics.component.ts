import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss']
})
export class DynamicsComponent {
  @ViewChild('templateDynamicForm') myForm!: NgForm;

  public validName(): boolean {
    return (
      this.myForm?.controls['name']?.invalid &&
      this.myForm?.controls['name']?.touched
    );
  }

  public save(): void {
    console.log('Save');
  }

}
