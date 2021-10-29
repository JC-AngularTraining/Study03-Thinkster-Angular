import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Suggestion } from 'src/app/_models/s7-suggestions.model';

@Component({
  selector: 'app-exercise7',
  templateUrl: './exercise7.component.html',
  styleUrls: ['./exercise7.component.css'],
})
export class Exercise7Component implements OnInit {
  constructor(private htmlTemplateHeadTitle: Title) {
    this.htmlTemplateHeadTitle.setTitle('Exercise 7');
  }

  model: any = {};
  // keep track of if we're creating or editing a review
  reviewBeingEdited: any; // keep track of what review is being edited
  editing: boolean = false;
  creating: boolean = false;
  showErrors: boolean = false;

  numbers = [1, 2, 3, 4, 5]; // being clever about displaying stars on the review

  reviews: any[] = [
    {
      flop: 'Cats',
      stars: 3,
      review: 'Fantastic flop! Loved the graphics and the singing!!!',
    },
    {
      flop: 'Spider-Man 3',
      stars: 5,
      review: 'Loved the dancing. Some of the best',
    },
    {
      flop: 'Twilight',
      stars: 2,
      review: 'Those Vampires were just too scary.',
    },
  ];

  flopList = [
    { title: 'Battlefield Earth' },
    { title: 'Santa Clause Conquers the Martians' },
    { title: 'The Room' },
    { title: 'Howard the Duck' },
    { title: 'Jack and Jill' },
    { title: 'Cats' },
    { title: 'Dudley Do-Right' },
    { title: 'Batman and Robin' },
    { title: 'Catwoman' },
    { title: 'The Last Airbender' },
    { title: 'Spider-Man 3' },
    { title: 'Transformers: Revenge of the Fallen' },
    { title: 'Twilight' },
    { title: 'Wing Commander' },
  ];

  ngOnInit() {}

  editReview(review: any) {
    // set the model for editing the review.
    // might need more parameters than just the review...
    this.reviewBeingEdited = review;
    this.editing = true;
    this.model = { ...review };
  }

  resetForm(form: any) {
    // reset the form
    this.model = {};
    this.editing = false;
    this.creating = false;
    this.showErrors = false;
  }

  submitForm(form: any) {
    // update the edited review, or create a new one
    if (this.editing) {
      this.updateReview(form);
    } else {
      this.createReview(form);
    }
  }

  createReview(form: any) {
    if (form.valid) {
      this.reviews.push(this.model);
      this.resetForm(form);
    } else {
      this.showErrors = true;
    }
  }

  updateReview(form: any) {
    if (form.valid) {
      this.reviewBeingEdited.flop = this.model.flop;
      this.reviewBeingEdited.stars = +this.model.stars;
      this.reviewBeingEdited.review = this.model.review;
      this.resetForm(form);
    } else {
      this.showErrors = true;
    }
  }

  cancel(form: any) {
    // cancel the edit/create and hide the form
    this.resetForm(form);
  }
}
