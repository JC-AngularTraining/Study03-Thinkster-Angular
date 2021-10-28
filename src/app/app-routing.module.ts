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
import { Exercise5Component } from './features/tabs/exercise5/exercise5.component';
import { Tab1Component } from './features/tabs/classwork/S5-Routing/tab1/tab1.component';
import { Tab2Component } from './features/tabs/classwork/S5-Routing/tab2/tab2.component';
import { TabDetailsComponent } from './features/tabs/classwork/S5-Routing/tab2/tab-details/tab-details.component';
import { S5FlopListComponent } from './features/tabs/classwork/S5-Routing/s5-flop-list/s5-flop-list.component';
import { S5FlopDetailsComponent } from './features/tabs/classwork/S5-Routing/s5-flop-details/s5-flop-details.component';
import { S5TooManyRentalsComponent } from './features/tabs/classwork/S5-Routing/s5-too-many-rentals/s5-too-many-rentals.component';
import { E5ActorlistComponent } from './features/tabs/exercise5/e5-actorlist/e5-actorlist.component';
import { E5ActorEditComponent } from './features/tabs/exercise5/e5-actors-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'classwork', redirectTo: 'classwork/tab1', pathMatch: 'full' },
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
      {
        path: 'flops',
        component: S5FlopListComponent,
      },
      {
        path: 'flops/:id',
        component: S5FlopDetailsComponent,
      },
      {
        path: 'toomany',
        component: S5TooManyRentalsComponent,
      },
    ],
  },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component },
  { path: 'exercise4', component: Exercise4Component },
  {
    path: 'exercise5',
    component: Exercise5Component,
    children: [
      {
        path: 'actors',
        component: E5ActorlistComponent,
      },
      {
        path: 'actors/:id/edit',
        component: E5ActorEditComponent,
      },
    ],
  },
  {
    path: 'exercise6',
    loadChildren: () =>
      import('./features/tabs/exercise6/exercise6.module').then(
        (m) => m.Exercise6Module
      ),
  },
  { path: 'exercise7', component: Exercise7Component },
  { path: 'exercise8', component: Exercise8Component },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
