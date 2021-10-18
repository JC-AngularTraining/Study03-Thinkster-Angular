import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ServExercise1Service } from 'src/app/_services/serv-exercise1.service';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
})
export class Exercise1Component implements OnInit {
  pageTitle: string = 'Exercise 1 - Flopvoter';
  selectedIndex: number = -1;

  constructor(private api: ServExercise1Service) {}

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      console.log(data);
    });
  }

  onVoteClick(index: number) {
    if (this.isSelected(index)) {
      this.selectedIndex = -1;
    } else {
      this.selectedIndex = index;
    }
  }

  isSelected(index: number) {
    return this.selectedIndex === index;
  }

  getButtonText(index: number) {
    if (this.isSelected(index)) {
      return 'Unvote';
    } else {
      return 'Vote';
    }
  }

  anySelected() {
    return this.selectedIndex !== -1;
  }
}
