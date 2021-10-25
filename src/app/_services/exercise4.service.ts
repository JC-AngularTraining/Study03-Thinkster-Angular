import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../_models/exercise4-movie.model';

@Injectable({
  providedIn: 'root',
})
export class Exercise4Service {
  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  getActors() {
    return this.http.get<Movie[]>('http://localhost:3000/actors');
  }

  getRentalList() {
    return this.http.get('http://localhost:3000/rentalList');
  }

  addToRentalList(flop: any) {
    flop.id = undefined;
    return this.http.post('http://localhost:3000/rentalList', flop);
  }

  deleteItem(flopid: number) {
    return this.http.delete('http://localhost:3000/rentalList/' + flopid);
  }
}
