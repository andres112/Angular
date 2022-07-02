import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  public title: string = 'Counter app';
  counterNumber: number = 0;

  public modifyCounter(value: number): void {
    this.counterNumber += value;
  }
}
