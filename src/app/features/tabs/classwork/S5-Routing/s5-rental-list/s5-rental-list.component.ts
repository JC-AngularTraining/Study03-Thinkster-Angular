import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-s5-rental-list',
  templateUrl: './s5-rental-list.component.html',
  styleUrls: ['./s5-rental-list.component.css'],
})
export class S5RentalListComponent implements OnInit {
  @Input() rentalList: any;
  @Output() clearRentalList = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
