import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Exercise4Service } from 'src/app/_services/exercise4.service';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css'],
})
export class Exercise4Component implements OnInit {
  flops$: any;
  rentalList: any = [];

  constructor(
    private htmlTemplateHeadTitle: Title,
    private exercise4Service: Exercise4Service
  ) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 4');
  }

  ngOnInit() {
    this.flops$ = this.exercise4Service.getMovies();

    this.getRentalList();
  }

  getRentalList() {
    this.exercise4Service.getRentalList().subscribe((data) => {
      this.rentalList = data;
    });
  }

  addToRentalList(flop: any) {
    this.exercise4Service.addToRentalList(flop).subscribe(() => {
      this.getRentalList();
    });
  }

  onDeleteItemFromList(flopid: number) {
    // console.log(flopid);
    this.exercise4Service.deleteItem(flopid).subscribe(() => {
      // console.log('deleted');
      this.getRentalList();
    });
  }
}
