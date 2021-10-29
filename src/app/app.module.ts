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
import { Exercise5Component } from './features/tabs/exercise5/exercise5.component';
import { Exercise7Component } from './features/tabs/exercise7/exercise7.component';
import { Exercise8Component } from './features/tabs/exercise8/exercise8.component';
import { HttpClientModule } from '@angular/common/http';
import { ClassworkComponent } from './features/tabs/classwork/classwork.component';
import { MovieDisplayS1Component } from './features/tabs/classwork/S1-Start/movie-display/movie-display.component';
import { FlopVoteS1Component } from './features/tabs/classwork/S1-Start/flop-vote/flop-vote.component';
import { RentalCartS1Component } from './features/tabs/classwork/S1-Start/rental-cart/rental-cart.component';
import { ParentS2Component } from './features/tabs/classwork/S2-Organising/parent/parent.component';
import { ChildRentlistS2Component } from './features/tabs/classwork/S2-Organising/parent/child-rentlist/child-rentlist.component';
import { ChildRentS2Component } from './features/tabs/classwork/S2-Organising/parent/child-rent/child-rent.component';
import { MovieSelectorE2Component } from './features/tabs/exercise2/movie-selector/movie-selector.component';
import { DirectiveS3Component } from './features/tabs/classwork/S3-Display/directive-e1/directive-e1.component';
import { ActorDisplayS3Component } from './features/tabs/classwork/S3-Display/directive-e1/actor-display/actor-display.component';
import { DirectiveS3E2Component } from './features/tabs/classwork/S3-Display/directive-e2/directive-e2.component';
import { RentalListS3Component } from './features/tabs/classwork/S3-Display/directive-e2/rental-list/rental-list.component';
import { MovieTileS3Component } from './features/tabs/classwork/S3-Display/directive-e2/movie-tile/movie-tile.component';
import { PipesS3E3Component } from './features/tabs/classwork/S3-Display/pipes-e3/pipes-e3.component';
import { WatchListItemE3Component } from './features/tabs/exercise3/watch-list-item/watch-list-item.component';
import { Exercise1S4Component } from './features/tabs/classwork/S4-Server/s4-exercise1/s4-exercise1.component';
import { Exercise2S4Component } from './features/tabs/classwork/S4-Server/s4-exercise2/s4-exercise2.component';
import { S4WatchListItemsComponent } from './features/tabs/classwork/S4-Server/s4-exercise2/s4-watch-list-items/s4-watch-list-items.component';
import { Exercise3S4Component } from './features/tabs/classwork/S4-Server/s4-exercise3/s4-exercise3.component';
import { S4MovieTileComponent } from './features/tabs/classwork/S4-Server/s4-exercise3/s4-movie-tile/s4-movie-tile.component';
import { S4RentalListComponent } from './features/tabs/classwork/S4-Server/s4-exercise3/s4-rental-list/s4-rental-list.component';
import { MovieTileE4Component } from './features/tabs/exercise4/movie-tile/movie-tile.component';
import { RentalListE4Component } from './features/tabs/exercise4/rental-list/rental-list.component';
import { TabSelectorComponent } from './features/tabs/classwork/S5-Routing/tab-selector.component';
import { Tab1Component } from './features/tabs/classwork/S5-Routing/tab1/tab1.component';
import { Tab2Component } from './features/tabs/classwork/S5-Routing/tab2/tab2.component';
import { TabDetailsComponent } from './features/tabs/classwork/S5-Routing/tab2/tab-details/tab-details.component';
import { S5FlopDetailsComponent } from './features/tabs/classwork/S5-Routing/s5-flop-details/s5-flop-details.component';
import { S5FlopListComponent } from './features/tabs/classwork/S5-Routing/s5-flop-list/s5-flop-list.component';
import { S5RentalListComponent } from './features/tabs/classwork/S5-Routing/s5-rental-list/s5-rental-list.component';
import { S5TooManyRentalsComponent } from './features/tabs/classwork/S5-Routing/s5-too-many-rentals/s5-too-many-rentals.component';
import { E5ActorlistComponent } from './features/tabs/exercise5/e5-actorlist/e5-actorlist.component';
import { E5ActorEditComponent } from './features/tabs/exercise5/e5-actors-edit.component';
import { SecurityModule } from './features/tabs/classwork/S6-Modules/security/security.module';
import { Exercise6Module } from './features/tabs/exercise6/exercise6.module';
import { S7FormsComponent } from './features/tabs/classwork/S7-Forms/s7-forms.component';
import { S8ConfigurationComponent } from './features/tabs/classwork/S8-Configuration/s8-configuration.component';
import { S7FlopSuggestionComponent } from './features/tabs/classwork/S7-Forms/s7-flop-suggestion/s7-flop-suggestion.component';
import { FormsModule } from '@angular/forms';
import { S7FlopSuggestion2Component } from './features/tabs/classwork/S7-Forms/s7-flop-suggestion2/s7-flop-suggestion2.component';

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
    MovieDisplayS1Component,
    FlopVoteS1Component,
    RentalCartS1Component,
    ParentS2Component,
    ChildRentlistS2Component,
    ChildRentS2Component,
    MovieSelectorE2Component,
    DirectiveS3Component,
    ActorDisplayS3Component,
    DirectiveS3E2Component,
    RentalListS3Component,
    MovieTileS3Component,
    PipesS3E3Component,
    WatchListItemE3Component,
    Exercise1S4Component,
    Exercise2S4Component,
    S4WatchListItemsComponent,
    Exercise3S4Component,
    S4MovieTileComponent,
    S4RentalListComponent,
    Exercise5Component,
    Exercise7Component,
    Exercise8Component,
    MovieTileE4Component,
    RentalListE4Component,
    TabSelectorComponent,
    Tab1Component,
    Tab2Component,
    TabDetailsComponent,
    S5FlopDetailsComponent,
    S5FlopListComponent,
    S5RentalListComponent,
    S5TooManyRentalsComponent,
    E5ActorlistComponent,
    E5ActorEditComponent,
    S7FormsComponent,
    S8ConfigurationComponent,
    S7FlopSuggestionComponent,
    S7FlopSuggestion2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UtilsModule,
    FontAwesomeModule,
    HttpClientModule,
    SecurityModule,
    Exercise6Module,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
