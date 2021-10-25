import { Component, OnInit } from '@angular/core';
import { ACTORS2 } from '../../../../../../assets/data/FLOP_DATA';

@Component({
  selector: 'my-s3-pipes-e3',
  templateUrl: './pipes-e3.component.html',
  styleUrls: ['./pipes-e3.component.css'],
})
export class PipesS3E3Component implements OnInit {
  actors: any;

  constructor() {
    this.actors = ACTORS2;
  }

  ngOnInit(): void {}
}
