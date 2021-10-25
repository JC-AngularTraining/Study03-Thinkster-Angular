import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-e2-movie-selector',
  templateUrl: './movie-selector.component.html',
  styleUrls: ['./movie-selector.component.css'],
})
export class MovieSelectorE2Component implements OnInit {
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
