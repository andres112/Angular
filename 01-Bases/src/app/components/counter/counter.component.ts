import { Component } from '@angular/core'; // Import the Component decorator from the @angular/core library.

// @Component is a decorator function that takes a metadata object as its only argument.
@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
// Export the class AppComponent.
export class CounterComponent {
  public title: string = 'Counter app';
  accumulatorNumber: number = 0;

  public modifyCounter(value: number): void {
    this.accumulatorNumber += value;
  }
}
