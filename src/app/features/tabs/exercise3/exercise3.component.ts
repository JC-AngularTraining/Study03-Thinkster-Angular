import { Component, OnInit } from '@angular/core';
import { WATCH_LIST } from '../../../../assets/data/FLOP_DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css'],
})
export class Exercise3Component implements OnInit {
  watchList = WATCH_LIST;
  maxItemsShown = 4;

  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle(
      `Exercise 3 + Number Movies ${this.watchList.length}`
    );
  }

  ngOnInit(): void {}

  moveItemUp(i: number) {
    let cur = this.watchList[i];
    let swap = this.watchList[i - 1];
    this.watchList[i] = swap;
    this.watchList[i - 1] = cur;
  }

  moveItemDown(i: number) {
    let cur = this.watchList[i];
    let swap = this.watchList[i + 1];
    this.watchList[i] = swap;
    this.watchList[i + 1] = cur;
  }

  showAll() {
    this.maxItemsShown = this.watchList.length;
  }
}
