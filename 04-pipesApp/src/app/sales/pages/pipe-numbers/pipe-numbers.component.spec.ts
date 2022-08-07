import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeNumbersComponent } from './pipe-numbers.component';

describe('PipeNumbersComponent', () => {
  let component: PipeNumbersComponent;
  let fixture: ComponentFixture<PipeNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
