import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-rent',
  templateUrl: './child-rent.component.html',
  styleUrls: ['./child-rent.component.css'],
})
export class ChildRentComponent implements OnInit {
  @Input()
  movieTitle: any;

  constructor() {}

  ngOnInit(): void {}
}
