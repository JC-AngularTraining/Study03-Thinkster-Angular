import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  rentalList = {
    count: 2,
    titles: 'Cats and Batman',
  };

  constructor() {}

  ngOnInit(): void {}

  wingCommander = {
    objectName: 'wingCommander',
    title: 'Wing Commander',
    yearReleased: 1999,
    stars: 4.2,
    rating: 'PG-13',
    imdbLink: 'https://www.imdb.com/title/tt0131646/',
    image: '/assets/images/wingcommander.jpg',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMTc1MDI1MDMyN15BMl5BanBnXkFtZTcwMzgzMTIyMQ@@._V1_UY268_CR1,0,182,268_AL_.jpg',
    soundtrack: {
      spotifyLink:
        'https://open.spotify.com/album/6kYCucnWN8EzKDCro12m5x?si=rR_Sb8NbQ62AYQHjN6tlXw',
    },
  };

  catwoman = {
    title: 'Catwoman',
    year: 2004,
    stars: 3.4,
    rating: 'PG-13',
    director: 'Pitof',
    cast: ['Halle Berry', 'Sharon Stone', 'Benjamin Bratt'],
    imdblink: 'https://www.imdb.com/title/tt0327554/',
    image: '/assets/images/catwoman.jpg',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMjA4MzM0NDAzOF5BMl5BanBnXkFtZTcwMDY3MDYyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  };

  onRentMovie(e: any) {
    // console.log(e);
    this.rentalList.count++;
    this.rentalList.titles += ', ' + e.title;
  }

  onClearList() {
    this.rentalList.count = 0;
    this.rentalList.titles = '';
  }
}
