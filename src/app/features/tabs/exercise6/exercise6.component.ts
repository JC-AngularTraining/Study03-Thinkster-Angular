import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-exercise6',
  templateUrl: './exercise6.component.html',
  styleUrls: ['./exercise6.component.css'],
})
export class Exercise6Component implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 6');
  }

  ngOnInit(): void {}
}
