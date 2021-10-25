import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-s3-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListS3Component implements OnInit {
  @Input() rentalList: any;
  @Output() clearRentalList = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClearClick() {
    this.clearRentalList.emit();
  }
}
