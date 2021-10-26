import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/_page-not-found/page-not-found.component';
import { HomeComponent } from './features/tabs/home/home.component';
import { ClassworkComponent } from './features/tabs/classwork/classwork.component';
import { Exercise1Component } from './features/tabs/exercise1/exercise1.component';
import { Exercise2Component } from './features/tabs/exercise2/exercise2.component';
import { Exercise3Component } from './features/tabs/exercise3/exercise3.component';
import { Exercise4Component } from './features/tabs/exercise4/exercise4.component';
import { Exercise8Component } from './features/tabs/exercise8/exercise8.component';
import { Exercise7Component } from './features/tabs/exercise7/exercise7.component';
import { Exercise6Component } from './features/tabs/exercise6/exercise6.component';
import { Exercise5Component } from './features/tabs/exercise5/exercise5.component';
import { Tab1Component } from './features/tabs/classwork/S5-Routing/tab1/tab1.component';
import { Tab2Component } from './features/tabs/classwork/S5-Routing/tab2/tab2.component';
import { TabDetailsComponent } from './features/tabs/classwork/S5-Routing/tab2/tab-details/tab-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'classwork', redirectTo: 'classwork/tab1', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'classwork',
    component: ClassworkComponent,
    children: [
      {
        path: 'tab1',
        component: Tab1Component,
      },
      {
        path: 'tab2',
        component: Tab2Component,
      },
      {
        path: 'tab2/:id',
        component: TabDetailsComponent,
      },
    ],
  },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component },
  { path: 'exercise4', component: Exercise4Component },
  { path: 'exercise5', component: Exercise5Component },
  { path: 'exercise6', component: Exercise6Component },
  { path: 'exercise7', component: Exercise7Component },
  { path: 'exercise8', component: Exercise8Component },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
