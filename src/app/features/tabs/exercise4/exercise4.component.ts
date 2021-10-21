import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exercise4',
  templateUrl: './exercise4.component.html',
  styleUrls: ['./exercise4.component.css'],
})
export class Exercise4Component implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 4');
  }

  ngOnInit(): void {}
}
