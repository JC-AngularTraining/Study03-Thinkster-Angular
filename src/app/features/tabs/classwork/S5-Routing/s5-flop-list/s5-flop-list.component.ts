import { Component, OnInit } from '@angular/core';
import { S5ClassworkService } from 'src/app/_services/s5-classwork.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'my-s5-flop-list',
  templateUrl: './s5-flop-list.component.html',
  styleUrls: ['./s5-flop-list.component.css'],
})
export class S5FlopListComponent implements OnInit {
  flops: any;
  rentalList: { count: number; titles: string };

  constructor(
    private flopService: S5ClassworkService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((qps) => {
      if (qps.has('starsMax')) {
        this.flopService
          .getFlopsMaxStars(+qps.get('starsMax'))
          .subscribe((flops) => {
            this.flops = flops;
          });
      } else {
        this.flopService.getFlops().subscribe((flops) => {
          this.flops = flops;
        });
      }
    });

    this.getRentalList();
  }

  getRentalList() {
    this.flopService.getRentalList().subscribe((rentalList) => {
      this.rentalList = rentalList;

      if (this.rentalList.count) {
      }
    });
  }

  onRentClick(event: any, flop: any) {
    console.log(event);
    event.stopPropagation();
    event.preventDefault();

    if (this.rentalList.count >= 5) {
      this.router.navigate(['/classwork/toomany']);
    } else {
      this.flopService.addRental(flop.title);
      this.getRentalList();
    }
  }
}
