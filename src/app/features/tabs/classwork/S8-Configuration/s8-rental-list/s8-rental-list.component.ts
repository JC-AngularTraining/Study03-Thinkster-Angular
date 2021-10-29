import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-s8-rental-list',
  templateUrl: './s8-rental-list.component.html',
  styles: ['h6 { color: red }', 'i { cursor: pointer }'],
})
export class RentalListS8Component {
  @Input() rentalList: any;
  @Output() delete = new EventEmitter();

  onDelete(flopId: any) {
    this.delete.emit(flopId);
  }
}
