import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeNumbersComponent } from './pages/pipe-numbers/pipe-numbers.component';
import { PipeUncommonComponent } from './pages/pipe-uncommon/pipe-uncommon.component';
import { PipeBasicsComponent } from './pages/pipe-basics/pipe-basics.component';
import { PipeSortComponent } from './pages/pipe-sort/pipe-sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    PipeNumbersComponent,
    PipeUncommonComponent,
    PipeBasicsComponent,
    PipeSortComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    PipeNumbersComponent,
    PipeUncommonComponent,
    PipeBasicsComponent,
    PipeSortComponent,
  ],
})
export class SalesModule {}
