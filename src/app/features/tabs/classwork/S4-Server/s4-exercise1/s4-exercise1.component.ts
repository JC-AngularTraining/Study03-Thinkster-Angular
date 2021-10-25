import { Component, OnInit } from '@angular/core';
import { oActor, oName, oFlops } from './s4-exercise1.observables';
import { pipe } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'my-s4-exercise1',
  templateUrl: './s4-exercise1.component.html',
  styleUrls: ['./s4-exercise1.component.css'],
})
export class Exercise1S4Component implements OnInit {
  name: string = 'Justin';
  flops: any;
  constructor() {}

  ngOnInit(): void {
    oActor.pipe(pluck('name')).subscribe((actorName) => {
      console.log(actorName);
    });

    oName.subscribe((nameData) => {
      this.name = nameData;
    });

    oFlops.subscribe((flopsData) => {
      this.flops = flopsData;
    });
  }
}
