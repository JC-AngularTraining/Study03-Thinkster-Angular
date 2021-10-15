import { Component, OnInit } from '@angular/core';
import { ServExercise1Service } from 'src/app/_services/serv-exercise1.service';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
})
export class Exercise1Component implements OnInit {
  pageTitle?: string;
  constructor(private api: ServExercise1Service) {}

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      console.log(data);
      this.pageTitle = 'Exercise 1';
    });
  }
}
