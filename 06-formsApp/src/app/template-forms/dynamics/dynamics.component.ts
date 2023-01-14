import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}
interface Favorite {
  id: string;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.scss'],
})
export class DynamicsComponent implements OnInit {
  @ViewChild('templateDynamicForm') myForm!: NgForm;
  public person: Person = {} as Person;

  public ngOnInit(): void {
    this.person.favorites=[];
  }

  public validName(): boolean {
    return (
      this.myForm?.controls['name']?.invalid &&
      this.myForm?.controls['name']?.touched
    );
  }

  public addFavorite(): void {
    this.person.favorites.push({
      id: Math.random().toString(36).slice(2, 12),
      name: this.myForm?.value.favorite,
      selected: false,
    });
    // reset the input only
    this.myForm?.controls['favorite']?.reset();
  }

  public removeFavorite(index: number): void {
    this.person.favorites.splice(index, 1);
  }

  public save(): void {
    console.log('Save');
  }
}
