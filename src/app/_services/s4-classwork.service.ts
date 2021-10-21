import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { WATCH_LIST } from '../../assets/data/FLOP_DATA';

@Injectable({
  providedIn: 'root',
})
export class S4ClassworkService {
  getWatchList() {
    return of(WATCH_LIST);
  }
}
