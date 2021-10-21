import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-classwork',
  templateUrl: './classwork.component.html',
  styleUrls: ['./classwork.component.css'],
})
export class ClassworkComponent implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Classwork');
  }

  ngOnInit(): void {}
}
