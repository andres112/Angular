import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeBasicsComponent } from './pipe-basics.component';

describe('PipeBasicsComponent', () => {
  let component: PipeBasicsComponent;
  let fixture: ComponentFixture<PipeBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeBasicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
