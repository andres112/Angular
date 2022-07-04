import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { FightersComponent } from './fighters/fighters.component';
import { FighterFormComponent } from './fighter-form/fighter-form.component';

@NgModule({
  declarations: [MainPageComponent, FightersComponent, FighterFormComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
