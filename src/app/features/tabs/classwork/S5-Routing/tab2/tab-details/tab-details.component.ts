import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.css'],
})
export class TabDetailsComponent implements OnInit {
  imageID: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // console.log(params);
      this.imageID = +params.get('id');
    });
  }
}
