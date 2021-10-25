import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class S4AuthService {
  constructor(private http: HttpClient) {}

  login() {
    return this.http.post('http://localhost:3000/logins', {
      userId: 3,
      loginDateTime: new Date(),
    });
  }
}
