import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RentalListService {
  constructor(private http: HttpClient) {}

  getRentalList() {
    return this.http.get('/rentalList');
  }

  addToRentalList(flop: any) {
    flop.id = undefined;
    return this.http.post('/rentalList', flop);
  }

  deleteItem(flopId: any) {
    return this.http.delete('/rentalList/' + flopId);
  }
}
