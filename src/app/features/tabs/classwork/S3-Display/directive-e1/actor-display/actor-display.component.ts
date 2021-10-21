import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: ['./actor-display.component.css'],
})
export class ActorDisplayComponent implements OnInit {
  @Input() actor: any;
  constructor() {}

  ngOnInit(): void {}
}
