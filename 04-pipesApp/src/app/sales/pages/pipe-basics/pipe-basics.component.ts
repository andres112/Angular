import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-basics',
  templateUrl: './pipe-basics.component.html',
  styleUrls: ['./pipe-basics.component.scss'],
})
export class PipeBasicsComponent {
  public date: Date = new Date();
}
