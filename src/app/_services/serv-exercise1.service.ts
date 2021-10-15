import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServExercise1Service {
  constructor(private http: HttpClient) {}

  apiCall() {
    return this.http.get('https://imdb-api.com/en/API/Top250Movies/k_hhpvic13');
  }
}
