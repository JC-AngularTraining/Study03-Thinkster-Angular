import { Component, OnInit } from '@angular/core';
import { S4ClassworkService } from '../../../../../_services/s4-classwork.service';

@Component({
  selector: 'my-s4-exercise2',
  templateUrl: './s4-exercise2.component.html',
  styleUrls: ['./s4-exercise2.component.css'],
})
export class Exercise2S4Component implements OnInit {
  watchList: any[] = [];
  maxItemsShown = 4;

  constructor(private watchListService: S4ClassworkService) {}

  ngOnInit() {
    // this function returns an observable that contains the watchlist
    this.watchListService.getWatchList().subscribe((watchListData) => {
      this.watchList = watchListData;
    });
  }

  moveItemUp(idx: any) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx - 1];
    this.watchList[idx] = swap;
    this.watchList[idx - 1] = cur;
  }

  moveItemDown(idx: any) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx + 1];
    this.watchList[idx] = swap;
    this.watchList[idx + 1] = cur;
  }

  showAll() {
    this.maxItemsShown = this.watchList.length;
  }
}
