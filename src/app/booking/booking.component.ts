import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  seatData: any;
  isSeatSelected: boolean = false;
  constructor(
    private bookingService: BookingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getSeatDetails();
  }

  getSeatDetails() {
    let count = 0;
    this.bookingService.getSeatDetails().subscribe((data => {
      this.seatData = data;
    }))
    this.seatData.map((data: any) => {
      data.selected = false;
    });

    this.seatData.forEach((element: any) => {
      if (element.isSelected === true) {
        count = count+1;
      }
    });
    this.isSeatSelected = count > 0 ? true : false;
  }

  addSeat(seat: any) {
    let count = 0;
    for (let i = 0; i < this.seatData.length; i++) {
      if (this.seatData[i].seatNumber === seat.seatNumber) {
        this.seatData[i].isSelected = !this.seatData[i].isSelected;
      }
    }
    this.seatData.forEach((element: any) => {
      if (element.isSelected === true) {
        count = count+1;
      }
    });
    this.isSeatSelected = count > 0 ? true : false;
  }

  addTickets() {
    this.router.navigate(['/payment']);
  }

}
