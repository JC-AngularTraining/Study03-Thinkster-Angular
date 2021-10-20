import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-rentlist',
  templateUrl: './child-rentlist.component.html',
  styleUrls: ['./child-rentlist.component.css'],
})
export class ChildRentlistComponent implements OnInit {
  @Input()
  rentalList: any;

  @Output()
  clearRentalList = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClearClick() {
    this.clearRentalList.emit();
  }
}
