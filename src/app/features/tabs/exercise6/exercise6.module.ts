import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Exercise6RoutingModule } from './exercise6-routing.module';
import { Exercise6Component } from './exercise6.component';

@NgModule({
  declarations: [Exercise6Component],
  imports: [CommonModule, Exercise6RoutingModule],
})
export class Exercise6Module {}
