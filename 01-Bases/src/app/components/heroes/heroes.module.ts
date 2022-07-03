import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent], // components
  exports: [HeroComponent, ListComponent],
  imports: [
    CommonModule, // ngIf, ngFor, etc.
  ], // modules imported
})
export class HeroesModule {}
