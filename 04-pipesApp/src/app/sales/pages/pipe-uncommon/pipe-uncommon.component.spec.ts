import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeUncommonComponent } from './pipe-uncommon.component';

describe('PipeUncommonComponent', () => {
  let component: PipeUncommonComponent;
  let fixture: ComponentFixture<PipeUncommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeUncommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeUncommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
