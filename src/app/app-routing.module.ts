import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { PaymentAddComponent } from './payment/payment-add/payment-add.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { BookingAddComponent } from './booking/booking-add/booking-add.component';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';

const routes: Routes = [
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'vehicle-add', component: VehicleAddComponent},
  {path: 'vehicle-edit', component: VehicleUpdateComponent},
  {path: 'payment', component: PaymentListComponent},
  {path: 'payment/add', component: PaymentAddComponent},
  {path: 'booking', component:BookingListComponent},
  {path: 'booking-add', component:BookingAddComponent},
  {path: 'booking-edit', component:BookingEditComponent},
  {path: 'customer/add', component: CustomerAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
