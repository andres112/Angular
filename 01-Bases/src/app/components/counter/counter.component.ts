import { Component } from '@angular/core'; // Import the Component decorator from the @angular/core library.
import { BehaviorSubject, Subscription, interval } from 'rxjs';

// @Component is a decorator function that takes a metadata object as its only argument.
@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
})
// Export the class AppComponent.
export class CounterComponent {
  public autoStatus = false;
  public title: string = 'Counter app';
  accumulatorNumber: number = 0;

  private interval = interval(500);
  private intervalSubs!: Subscription;

  public modifyCounter(value: number): void {
    this.accumulatorNumber += value;
  }

  public autoToggler(): void {
    this.autoStatus = !this.autoStatus;
    if (this.autoStatus) {
      this.intervalSubs = this.interval.subscribe(() => {
        this.modifyCounter(1);
      });
    } else {
      this.intervalSubs.unsubscribe();
    }
  }
}
