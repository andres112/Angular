import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSortComponent } from './pipe-sort.component';

describe('PipeSortComponent', () => {
  let component: PipeSortComponent;
  let fixture: ComponentFixture<PipeSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
