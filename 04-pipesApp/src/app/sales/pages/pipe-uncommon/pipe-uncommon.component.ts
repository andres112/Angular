import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-uncommon',
  templateUrl: './pipe-uncommon.component.html',
  styleUrls: ['./pipe-uncommon.component.scss'],
})
export class PipeUncommonComponent {
  public people: { name: string; gender: string }[] = [
    {
      name: 'Andres',
      gender: 'male',
    },
    {
      name: 'Tatjana',
      gender: 'female',
    },
  ];
  public mapping = {
    male: 'him',
    female: 'her',
  };
}
