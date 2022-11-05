import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Hero } from '../../interfaces/heroes.model';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public hero = {} as Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public get title(): string{
    if(!!this.hero.id){
      return 'Edit ' + this.hero.superhero
    }
    return 'Add New Hero'
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  public onSave(): void {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    // Update
    if (!!this.hero.id) {
      this.heroesService.updateHero(this.hero).pipe(take(1)).subscribe();
      return;
    }
    // Add
    this.heroesService
      .addHero(this.hero)
      .pipe(take(1))
      .subscribe((hero) => this.router.navigate(['/heroes/edit', hero.id]));
  }
}
