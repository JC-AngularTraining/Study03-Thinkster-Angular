import { Component, OnInit } from '@angular/core';
import { ActorListService } from '../../../../_services/exercise5.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-e5-actorlist',
  templateUrl: './e5-actorlist.component.html',
  styleUrls: ['./e5-actorlist.component.css'],
})
export class E5ActorlistComponent implements OnInit {
  actors: any;
  showDetails: any;

  constructor(
    private actorListService: ActorListService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.queryParamMap.subscribe((params) => {
      if (params.has('showDetails')) {
        this.showDetails = true;
      } else {
        this.showDetails = false;
      }
    });

    this.actorListService.getActorList().subscribe((actors) => {
      // console.log(actors);
      this.actors = actors;
    });
  }
}
