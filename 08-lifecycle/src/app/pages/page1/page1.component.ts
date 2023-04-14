import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public clockWatch = 0;
  public interval = 1000;
  private _subs!: Subscription;

  constructor() {
    console.log('Page1Component constructor');
  }

  public ngOnInit(): void {
    console.log('Page1Component ngOnInit');
    this._subs = interval(this.interval).subscribe(() => this.clockWatch++);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('Page1Component ngOnChanges');
  }

  public ngDoCheck(): void {
    console.log('Page1Component ngDoCheck');
  }

  public ngAfterContentInit(): void {
    console.log('Page1Component ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('Page1Component ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('Page1Component ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('Page1Component ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    console.log('Page1Component ngOnDestroy');
    this._subs.unsubscribe();
  }

  public changeClockSpeed(accelerate: boolean): void {
    this.interval = accelerate ? this.interval / 2 : this.interval * 2;
    this._subs.unsubscribe();
    this._subs = interval(this.interval).subscribe(() => this.clockWatch++);
  }
}
