import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-exercise8',
  templateUrl: './exercise8.component.html',
  styleUrls: ['./exercise8.component.css'],
})
export class Exercise8Component implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 5');
  }

  ngOnInit(): void {}
}
