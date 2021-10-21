import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.css'],
})
export class MovieSelectorComponent implements OnInit {
  @Input()
  movie: any;

  @Output()
  select = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.select.emit();
  }
}
