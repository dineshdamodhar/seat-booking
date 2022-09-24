import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  name: string = '';
  phoneNumber: string = '';
  seatData: any;

  constructor(
    private bookingService: BookingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bookingService.getSeatDetails().subscribe((data: any)=> {
      this.seatData = data;
    })
  }

  isDetailsAdded() {
    if(this.name !== '' && this.phoneNumber ! === undefined) {
      return true;
    }
    return false;
  }

  bookTickets() {
    let count = 0;
    this.seatData.map((data: any)=> {
      if(data.isSelected) {
        count = count + 1;
        data.isAvailable = false;
        data.isSelected = false;
        data.bookedBy = this.name;
      }
    });
    this.bookingService.setSeatData(this.seatData);
    alert(`${this.name} booked ${count} tickets`);
    this.name = '';
    this.phoneNumber = '';
    this.router.navigate(['/book']);
  }

}
