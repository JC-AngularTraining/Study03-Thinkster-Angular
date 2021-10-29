import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../../../../../_models/s7-suggestions.model';

@Component({
  selector: 'my-s7-flop-suggestion2',
  templateUrl: './s7-flop-suggestion2.component.html',
  styleUrls: ['./s7-flop-suggestion2.component.css'],
})
export class S7FlopSuggestion2Component implements OnInit {
  model: any = {};

  suggestions: Suggestion[] = [
    {
      id: 0,
      title: "Ender's Game",
      year: 2013,
      stars: 6.6,
      studio: 'Other',
      rating: 'PG-13',
      hasSoundtrack: true,
    },
    {
      id: 1,
      title: 'The Mummy',
      year: 2017,
      stars: 5.4,
      studio: 'Universal',
      rating: 'PG-13',
      hasSoundtrack: false,
    },
    {
      id: 2,
      title: 'A Wrinkle in Time',
      year: 2018,
      stars: 4.2,
      studio: 'Disney',
      rating: 'PG',
      hasSoundtrack: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  editSuggestion(suggestion: any, form: any) {
    // the spread operator '...' creates a copy of the object and disconnects the 2-way binding
    this.model = { ...suggestion };
    this.resetForm(form);
  }

  resetForm(form: any) {
    form.markAsPristine();
    form.markAsUntouched();
  }

  updateSuggestion(suggestionForm: any) {
    if (suggestionForm.valid) {
      let suggestionToUpdate = this.suggestions.find(
        (s) => s.id === this.model.id
      );

      suggestionToUpdate.title = this.model.title;
      // The + makes the data 'stay' a number
      suggestionToUpdate.year = +this.model.year;
      suggestionToUpdate.stars = +this.model.stars;
      suggestionToUpdate.rating = this.model.rating;
      suggestionToUpdate.studio = this.model.studio;
      suggestionToUpdate.hasSoundtrack = this.model.hasSoundtrack;
      this.model = {};
      this.resetForm(suggestionForm.form);
    }
  }

  cancel(form: any) {
    this.model = {};
    this.resetForm(form);
  }
}
