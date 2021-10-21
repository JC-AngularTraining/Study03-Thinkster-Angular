import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UtilsModule } from './_utils/_utils.module';
import { NavBarComponent } from './features/_nav-bar/nav-bar.component';
import { HomeComponent } from './features/tabs/home/home.component';
import { PageNotFoundComponent } from './features/_page-not-found/page-not-found.component';
import { Exercise1Component } from './features/tabs/exercise1/exercise1.component';
import { Exercise2Component } from './features/tabs/exercise2/exercise2.component';
import { Exercise3Component } from './features/tabs/exercise3/exercise3.component';
import { Exercise4Component } from './features/tabs/exercise4/exercise4.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassworkComponent } from './features/tabs/classwork/classwork.component';
import { MovieDisplayComponent } from './features/tabs/classwork/S1-Start/movie-display/movie-display.component';
import { FlopVoteComponent } from './features/tabs/classwork/S1-Start/flop-vote/flop-vote.component';
import { RentalCartComponent } from './features/tabs/classwork/S1-Start/rental-cart/rental-cart.component';
import { ParentComponent } from './features/tabs/classwork/S2-Organising/parent/parent.component';
import { ChildRentlistComponent } from './features/tabs/classwork/S2-Organising/parent/child-rentlist/child-rentlist.component';
import { ChildRentComponent } from './features/tabs/classwork/S2-Organising/parent/child-rent/child-rent.component';
import { MovieSelectorComponent } from './features/tabs/exercise2/movie-selector/movie-selector.component';
import { DirectiveComponent } from './features/tabs/classwork/S3-Display/directive-e1/directive-e1.component';
import { ActorDisplayComponent } from './features/tabs/classwork/S3-Display/directive-e1/actor-display/actor-display.component';
import { DirectiveE2Component } from './features/tabs/classwork/S3-Display/directive-e2/directive-e2.component';
import { RentalListComponent } from './features/tabs/classwork/S3-Display/directive-e2/rental-list/rental-list.component';
import { MovieTileComponent } from './features/tabs/classwork/S3-Display/directive-e2/movie-tile/movie-tile.component';
import { PipesE3Component } from './features/tabs/classwork/S3-Display/pipes-e3/pipes-e3.component';
import { WatchListItemComponent } from './features/tabs/exercise3/watch-list-item/watch-list-item.component';

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
    ChildRentlistComponent,
    ChildRentComponent,
    MovieSelectorComponent,
    DirectiveComponent,
    ActorDisplayComponent,
    DirectiveE2Component,
    RentalListComponent,
    MovieTileComponent,
    PipesE3Component,
    WatchListItemComponent,
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
