import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-s2-child-rent',
  templateUrl: './child-rent.component.html',
  styleUrls: ['./child-rent.component.css'],
})
export class ChildRentS2Component implements OnInit {
  @Input()
  movie: any;

  @Output()
  rentMovie = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRentalClick(movie: any) {
    // semd signal or event to parent
    this.rentMovie.emit(movie);
  }

  btnClasses() {
    if (this.movie.stars < 4) {
      return 'btn btn-primary m-3 task';
    } else {
      return 'btn btn-primary m-3';
    }
  }
}
