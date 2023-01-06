import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template-forms',
    loadChildren: () =>
      import('./template-forms/template-forms.module').then(
        (m) => m.TemplateFormsModule
      ),
  },
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./reactive-forms/reactive-forms.module').then(
        (m) => m.ReactiveFormsModule
      ),
  },
  {
    path:'**',
    redirectTo:'template-forms'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
