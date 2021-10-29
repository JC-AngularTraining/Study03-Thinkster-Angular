import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../../../_models/s8-movie.model';

@Component({
  selector: 'my-s8-movie-tile',
  templateUrl: './s8-movie-tile.component.html',
  styleUrls: ['./s8-movie-tile.component.css'],
})
export class MovieTileS8Component {
  @Input() movie: Movie;
  @Output() rent = new EventEmitter();
  selected = false;

  ngOnInit() {}

  onRentClicked() {
    this.rent.emit();
  }
}
