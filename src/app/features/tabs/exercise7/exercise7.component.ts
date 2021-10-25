import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css'],
})
export class Exercise7Component implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 7');
  }

  ngOnInit(): void {}
}
