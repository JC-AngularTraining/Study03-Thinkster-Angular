import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UtilsModule } from './local_Apps/__utils/__utils.module';
import { NavBarComponent } from './local_Apps/_nav-bar/nav-bar.component';
import { HomeComponent } from './local_Apps/route_Pages/home/home.component';
import { PageNotFoundComponent } from './local_Apps/_page-not-found/page-not-found.component';
import { Exercise1Component } from './local_Apps/route_Pages/exercise1/exercise1.component';
import { Exercise2Component } from './local_Apps/route_Pages/exercise2/exercise2.component';
import { Exercise3Component } from './local_Apps/route_Pages/exercise3/exercise3.component';
import { Exercise4Component } from './local_Apps/route_Pages/exercise4/exercise4.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassworkComponent } from './local_Apps/route_Pages/classwork/classwork.component';
import { MovieDisplayComponent } from './local_Apps/route_Pages/classwork/movie-display/movie-display.component';
import { FlopVoteComponent } from './local_Apps/route_Pages/classwork/flop-vote/flop-vote.component';
import { RentalCartComponent } from './local_Apps/route_Pages/classwork/rental-cart/rental-cart.component';
import { ParentComponent } from './local_Apps/route_Pages/classwork/parent/parent.component';
import { ChildRentComponent } from './local_Apps/route_Pages/classwork/parent/child-rent/child-rent.component';
import { ChildRentlistComponent } from './local_Apps/route_Pages/classwork/parent/child-rentlist/child-rentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercise1Component,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    ClassworkComponent,
    MovieDisplayComponent,
    FlopVoteComponent,
    RentalCartComponent,
    ParentComponent,
    ChildRentComponent,
    ChildRentlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
