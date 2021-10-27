import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.css'],
})
export class TabSelectorComponent implements OnInit {
  loggedIn = true;

  constructor() {}

  ngOnInit(): void {}

  checkout() {
    if (this.loggedIn) {
      // go to checkout
    } else {
      // go to login route
    }
  }
}
