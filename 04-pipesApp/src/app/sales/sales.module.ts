import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeNumbersComponent } from './pages/pipe-numbers/pipe-numbers.component';
import { PipeUncommonComponent } from './pages/pipe-uncommon/pipe-uncommon.component';
import { PipeBasicsComponent } from './pages/pipe-basics/pipe-basics.component';
import { PipeSortComponent } from './pages/pipe-sort/pipe-sort.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { FlightPipe } from './pipes/flight.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    PipeNumbersComponent,
    PipeUncommonComponent,
    PipeBasicsComponent,
    PipeSortComponent,
    UppercasePipe,
    FlightPipe,
    SortPipe
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
