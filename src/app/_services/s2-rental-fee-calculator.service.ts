import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class S2RentalFeeCalculatorService {
  constructor() {}

  calculate() {
    return 2.99;
  }
}
