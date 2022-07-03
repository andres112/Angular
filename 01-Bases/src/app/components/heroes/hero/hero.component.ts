import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
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
