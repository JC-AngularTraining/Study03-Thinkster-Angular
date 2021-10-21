import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'my-s4-watch-list-items',
  templateUrl: './s4-watch-list-items.component.html',
  styleUrls: ['./s4-watch-list-items.component.css'],
})
export class S4WatchListItemsComponent {
  @Input() item: any;
  @Input() first: any;
  @Input() last: any;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  moveUp() {
    this.up.emit();
  }

  moveDown() {
    this.down.emit();
  }
}
