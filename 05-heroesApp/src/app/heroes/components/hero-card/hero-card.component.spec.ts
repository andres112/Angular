import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Hero } from '../../interfaces/heroes.model';

import { HeroCardComponent } from './hero-card.component';
import { ImagePipe } from '../../pipes/image.pipe';

describe('HeroCardComponent', () => {
  let component: HeroCardComponent;
  let fixture: ComponentFixture<HeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCardComponent, ImagePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the hero name if the hero input is provided', () => {
    // Define the mock hero
    const mockHero: Hero = {
      superhero: 'Superman',
    } as Hero;
    // Set the hero input
    component.hero = mockHero;

    // Trigger a change detection cycle
    fixture.detectChanges();

    // Get the hero name element
    const heroName = fixture.debugElement.query(By.css('.hero-name'));

    // Verify that the hero name is displayed
    expect(heroName.nativeElement.innerHTML).toBe('Superman');
  });
});
