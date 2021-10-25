import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-s2-child-rentlist',
  templateUrl: './child-rentlist.component.html',
  styleUrls: ['./child-rentlist.component.css'],
})
export class ChildRentlistS2Component implements OnInit {
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
