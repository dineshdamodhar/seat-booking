import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [{ path: 'book', component: BookingComponent },
{ path: 'payment', component: PaymentComponent },
{ path: '', redirectTo: 'book', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
