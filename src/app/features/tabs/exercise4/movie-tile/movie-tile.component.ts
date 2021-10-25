import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../../../_models/exercise4-movie.model';

@Component({
  selector: 'my-e4-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css'],
})
export class MovieTileE4Component {
  @Input() movie!: Movie;
  @Output() rent = new EventEmitter();
  selected = false;

  ngOnInit() {}

  onRentClicked() {
    this.rent.emit();
  }
}
