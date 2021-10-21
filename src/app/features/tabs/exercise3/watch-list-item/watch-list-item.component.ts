import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.css'],
})
export class WatchListItemComponent implements OnInit {
  @Input() item: any;
  @Input() first: any;
  @Input() last: any;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  moveUp() {
    this.up.emit();
  }

  moveDown() {
    this.down.emit();
  }
}
