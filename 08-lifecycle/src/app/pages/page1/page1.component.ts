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
  constructor() {
    console.log('Page1Component constructor');
  }

  public ngOnInit(): void {
    console.log('Page1Component ngOnInit');
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
  }
}
