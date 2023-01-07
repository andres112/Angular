import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';

import { CustomMinDirective } from './directives/custom-min-directive';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicsComponent,
    DynamicsComponent,

    CustomMinDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateFormsRoutingModule
  ]
})
export class TemplateFormsModule { }
