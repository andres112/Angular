import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-uncommon',
  templateUrl: './pipe-uncommon.component.html',
  styleUrls: ['./pipe-uncommon.component.scss'],
})
export class PipeUncommonComponent {
  // i18nSelect pipe data
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
  // i18nPlural pipe data
  public clients = [
    { people: [] },
    { people: ['Maria'] },
    { people: ['Pedro', 'Jesus','Maria'] },
  ];
  public pluralMap = {
    '=0': 'Any client is waiting',
    '=1': 'There is # client waiting',
    other: 'There are # clients waiting',
  };
}
