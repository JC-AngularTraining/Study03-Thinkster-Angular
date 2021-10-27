import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { S5ClassworkService } from 'src/app/_services/s5-classwork.service';

@Component({
  selector: 'my-s5-flop-details',
  templateUrl: './s5-flop-details.component.html',
  styleUrls: ['./s5-flop-details.component.css'],
})
export class S5FlopDetailsComponent implements OnInit {
  flop: any;

  constructor(
    private flopService: S5ClassworkService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.flopService.getFlop(+params.get('id')).subscribe((flop) => {
        this.flop = flop;
      });
    });
  }
}
