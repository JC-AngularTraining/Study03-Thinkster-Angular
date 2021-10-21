import { Component, OnInit } from '@angular/core';
import { Exercise2Service } from 'src/app/_services/exercise2.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css'],
})
export class Exercise2Component implements OnInit {
  flops: any;
  isCorrect: any = false;
  hasChosen: boolean = false;

  constructor(
    private exercise2: Exercise2Service,
    private htmlTemplateHeadTitle: Title
  ) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 2');
  }

  ngOnInit(): void {
    this.selectNewFlops();
  }

  selectNewFlops() {
    this.flops = this.exercise2.getTwoRandomMovies();
  }

  onFirstSelected() {
    if (!this.hasChosen) {
      this.isCorrect = this.exercise2.isChoiceCorrect(
        this.flops.first,
        this.flops.second
      );
      this.hasChosen = true;
      // console.log(this.isCorrect);
    }
  }

  onSecondSelected() {
    if (!this.hasChosen) {
      this.isCorrect = this.exercise2.isChoiceCorrect(
        this.flops.second,
        this.flops.first
      );
      this.hasChosen = true;
      // console.log(this.isCorrect);
    }
  }

  onPlayAgainClick() {
    this.hasChosen = false;
    this.selectNewFlops();
  }
}
