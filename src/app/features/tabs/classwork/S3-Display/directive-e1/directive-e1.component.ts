import { Component, OnInit } from '@angular/core';
import { FLOP_DATA, ACTORS } from '../../../../../../assets/data/FLOP_DATA';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-directive-e1',
  templateUrl: './directive-e1.component.html',
  styleUrls: ['./directive-e1.component.css'],
})
export class DirectiveComponent implements OnInit {
  flopData: any;
  actors: any;
  favoriteActors: any[] = [];

  constructor(private titleService: Title) {
    this.flopData = FLOP_DATA;
    this.actors = ACTORS;
    titleService.setTitle('Flopbox');
  }

  ngOnInit(): void {}

  actorSelected(actor: any) {
    // console.log(actor.name);
    this.favoriteActors.push(actor);
  }
}
