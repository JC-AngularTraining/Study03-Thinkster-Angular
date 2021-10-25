import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-s3-actor-display',
  templateUrl: './actor-display.component.html',
  styleUrls: ['./actor-display.component.css'],
})
export class ActorDisplayS3Component implements OnInit {
  @Input() actor: any;
  constructor() {}

  ngOnInit(): void {}
}
