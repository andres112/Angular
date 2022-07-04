import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { FightersComponent } from './fighters/fighters.component';
import { FighterFormComponent } from './fighter-form/fighter-form.component';

import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [MainPageComponent, FightersComponent, FighterFormComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers: [DbzService],
})
export class DbzModule {}
