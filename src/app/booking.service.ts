import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { initialData } from './data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  seatData = initialData;
  constructor() { }

  getSeatDetails(): Observable<any> {
    return of(this.seatData);
  }

  setSeatData(seatData: any) {
    this.seatData = seatData;
  }
}
