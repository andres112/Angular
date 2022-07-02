import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  name: string = 'Alf';
  age: number = 30;

  get getName(): string {
    return `${this.name} - ${this.age}`;
  }
  set setAge(age: number) {
    this.age = age;
  }
  set setName(name: string) {
    this.name = name;
  }
}
