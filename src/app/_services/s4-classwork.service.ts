import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { WATCH_LIST } from '../../assets/data/FLOP_DATA';
import { Movie } from '../_models/s4-movie.model';

@Injectable({
  providedIn: 'root',
})
export class S4ClassworkService {
  constructor(private http: HttpClient) {}
  getWatchList() {
    return of(WATCH_LIST);
  }

  getMovies() {
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  getActors() {
    return this.http.get<Movie[]>('http://localhost:3000/actors');
  }

  getRentalList() {
    return this.http.get('http://localhost:3000/rentalList');
  }
}
