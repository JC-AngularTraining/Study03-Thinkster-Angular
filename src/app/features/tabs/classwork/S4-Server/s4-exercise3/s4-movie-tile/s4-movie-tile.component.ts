import { Component, Input } from '@angular/core';
import { Movie } from '../../../../../../_models/s4-movie.model';

@Component({
  selector: 'my-s4-movie-tile',
  templateUrl: './s4-movie-tile.component.html',
  styleUrls: ['./s4-movie-tile.component.css'],
})
export class S4MovieTileComponent {
  @Input() movie!: Movie;
  selected = false;

  ngOnInit() {}

  getClasses() {
    if (this.selected) {
      return 'btn btn-success btn-sm text-dark';
    } else if (this.movie.onSale) {
      return 'btn btn-success btn-sm text-danger';
    } else {
      return 'btn btn-success btn-sm';
    }
  }

  onClick() {
    this.selected = true;
  }
}
