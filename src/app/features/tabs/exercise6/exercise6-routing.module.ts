import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exercise6Component } from './exercise6.component';

const routes: Routes = [{ path: '', component: Exercise6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Exercise6RoutingModule {}
