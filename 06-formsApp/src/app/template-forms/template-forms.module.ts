import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormsRoutingModule } from './template-forms-routing.module';
import { SwitchesComponent } from './switches/switches.component';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';


@NgModule({
  declarations: [
    SwitchesComponent,
    BasicsComponent,
    DynamicsComponent
  ],
  imports: [
    CommonModule,
    TemplateFormsRoutingModule
  ]
})
export class TemplateFormsModule { }
