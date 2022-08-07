import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeBasicsComponent } from './sales/pages/pipe-basics/pipe-basics.component';
import { PipeNumbersComponent } from './sales/pages/pipe-numbers/pipe-numbers.component';
import { PipeUncommonComponent } from './sales/pages/pipe-uncommon/pipe-uncommon.component';
import { PipeSortComponent } from './sales/pages/pipe-sort/pipe-sort.component';

const routes: Routes = [
  { path: '', component: PipeBasicsComponent, pathMatch: 'full' },
  { path: 'numbers', component: PipeNumbersComponent },
  { path: 'rare', component: PipeUncommonComponent },
  { path: 'sort', component: PipeSortComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
