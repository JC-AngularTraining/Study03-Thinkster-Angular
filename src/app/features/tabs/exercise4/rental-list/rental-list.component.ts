import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-e4-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListE4Component {
  @Input() rentalList: any;
  @Output() delete = new EventEmitter();

  onDelete(flopId: number) {
    this.delete.emit(flopId);
  }
}
