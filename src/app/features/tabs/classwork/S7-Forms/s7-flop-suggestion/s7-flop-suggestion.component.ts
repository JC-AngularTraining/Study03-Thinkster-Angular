import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-s7-flop-suggestion',
  templateUrl: './s7-flop-suggestion.component.html',
  styleUrls: ['./s7-flop-suggestion.component.css'],
})
export class S7FlopSuggestionComponent implements OnInit {
  suggestions: any[] = [];
  name: any;

  constructor() {}

  ngOnInit(): void {}

  addSuggestion(suggestion: any) {
    this.suggestions.push(suggestion);
  }
}
