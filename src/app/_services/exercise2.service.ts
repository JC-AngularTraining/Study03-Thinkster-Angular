import { Injectable } from '@angular/core';
import { FLOP_DATA } from 'src/assets/data/FLOP_DATA';

@Injectable({
  providedIn: 'root',
})
export class Exercise2Service {
  flopData;

  constructor() {
    this.flopData = FLOP_DATA;
  }

  getRandomMovie() {
    return Math.floor(Math.random() * Math.floor(this.flopData.length));
  }

  getTwoRandomMovies() {
    let firstIndex = this.getRandomMovie();
    let secondIndex = firstIndex === 13 ? 0 : firstIndex + 1;

    return {
      first: this.flopData[firstIndex],
      second: this.flopData[secondIndex],
    };
  }

  isChoiceCorrect(choice: any, other: any) {
    return choice.stars <= other.stars;
  }
}
