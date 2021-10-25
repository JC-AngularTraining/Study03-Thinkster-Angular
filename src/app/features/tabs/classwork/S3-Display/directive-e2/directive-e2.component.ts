import { Component, OnInit } from '@angular/core';
import { FLOP_DATA2 } from '../../../../../../assets/data/FLOP_DATA';

@Component({
  selector: 'my-s3-directive-e2',
  templateUrl: './directive-e2.component.html',
  styleUrls: ['./directive-e2.component.css'],
})
export class DirectiveS3E2Component implements OnInit {
  rentalList: any[] = [];
  flopData;

  constructor() {
    this.flopData = FLOP_DATA2;
  }

  ngOnInit(): void {}

  onRentMovie(movie: any) {
    console.log('movie rented' + movie.title);
    this.rentalList.push(movie);
  }

  onClearRentalList() {
    this.rentalList = [];
  }
}
