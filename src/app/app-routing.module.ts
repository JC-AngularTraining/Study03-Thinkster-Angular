import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './local_Apps/_page-not-found/page-not-found.component';
import { HomeComponent } from './local_Apps/route_Pages/home/home.component';
import { ClassworkComponent } from './local_Apps/route_Pages/classwork/classwork.component';
import { Exercise1Component } from './local_Apps/route_Pages/exercise1/exercise1.component';
import { Exercise2Component } from './local_Apps/route_Pages/exercise2/exercise2.component';
import { Exercise3Component } from './local_Apps/route_Pages/exercise3/exercise3.component';
import { Exercise4Component } from './local_Apps/route_Pages/exercise4/exercise4.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'classwork', component: ClassworkComponent },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component },
  { path: 'exercise4', component: Exercise4Component },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
