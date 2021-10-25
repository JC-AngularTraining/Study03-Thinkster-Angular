import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-s4-rental-list',
  templateUrl: './s4-rental-list.component.html',
  styleUrls: ['./s4-rental-list.component.css'],
})
export class S4RentalListComponent {
  @Input() rentalList: any;
  @Output() clearRentalList = new EventEmitter();

  onClearClick() {
    this.clearRentalList.emit();
  }
}
