import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/s8-movie.service';
import { RentalListService } from 'src/app/_services/s8-rental-list.service';
import { ThirdPartyService } from 'src/app/_services/s8-third-party.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'my-s8-configuration',
  templateUrl: './s8-configuration.component.html',
  styleUrls: ['./s8-configuration.component.css'],
})
export class S8ConfigurationComponent implements OnInit {
  flops$: any;
  rentalList: any = [];

  constructor(
    private movieService: MovieService,
    private rentalListService: RentalListService,
    private thirdPartyService: ThirdPartyService
  ) {}

  ngOnInit() {
    this.flops$ = this.movieService.getMovies();
    this.getRentalList();
    this.thirdPartyService.login(environment.username, environment.password);
  }

  getRentalList() {
    this.rentalListService.getRentalList().subscribe((data) => {
      this.rentalList = data;
    });
  }

  addToRentalList(flop: any) {
    this.rentalListService.addToRentalList(flop).subscribe(() => {
      this.getRentalList();
    });
  }

  onDeleteItemFromList(flopId: any) {
    this.rentalListService.deleteItem(flopId).subscribe(() => {
      this.getRentalList();
    });
  }
}
