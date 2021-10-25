import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../../_models/s4-movie.model';
import { S4ClassworkService } from '../../../../../_services/s4-classwork.service';
import { S4AuthService } from 'src/app/_services/s4-auth.service';

@Component({
  selector: 'my-s4-exercise3',
  templateUrl: './s4-exercise3.component.html',
  styleUrls: ['./s4-exercise3.component.css'],
})
export class Exercise3S4Component implements OnInit {
  flops!: Movie[];
  actors: any;
  actors$: any;
  loggedIn: boolean = false;

  constructor(
    private s4Service: S4ClassworkService,
    private authService: S4AuthService
  ) {}

  ngOnInit() {
    this.s4Service.getMovies().subscribe((flopsData) => {
      this.flops = flopsData;
    });

    // this.s4Service.getActors().subscribe((actorsData) => {
    //   this.actors = actorsData;
    // });

    // This is exercise 5 'Changing from Subscribe to ASYNC Pipe'
    this.actors$ = this.s4Service.getActors();
  }

  onLogin() {
    this.authService.login().subscribe(() => {
      this.loggedIn = true;
    });
  }
}
