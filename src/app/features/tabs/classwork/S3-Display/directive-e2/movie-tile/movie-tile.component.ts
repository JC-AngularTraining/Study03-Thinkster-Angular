import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-s3-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css'],
})
export class MovieTileS3Component implements OnInit {
  @Input() movie: any;
  @Output() rentClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.rentClick.emit(this.movie);
  }
}
