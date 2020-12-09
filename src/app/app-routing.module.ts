import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentAddComponent } from './payment/payment-add/payment-add.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { BookingAddComponent } from './booking/booking-add/booking-add.component';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { AdminComponent } from './user/admin/admin.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { BookingbyListComponent } from './booking/bookingby-list/bookingby-list.component';
import { LogoutComponent } from './user/logout/logout.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ProfileComponent } from './customer/profile/profile.component';

const routes: Routes = [
  
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'vehicle/add', component: VehicleAddComponent},	 
  {path: 'vehicle-edit/:vid', component: VehicleUpdateComponent},	 
  
  {path: 'payment', component: PaymentListComponent},
  {path: 'payment/add/:bookingId', component: PaymentAddComponent},
  
  {path: 'booking', component:BookingListComponent},
  {path: 'booking/add', component:BookingAddComponent},
  {path: 'booking/edit/:bookingId', component:BookingEditComponent},
  {path: 'bookingby', component:BookingbyListComponent},

  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/add', component: CustomerAddComponent},
  {path: 'customer/edit/:customerId', component: CustomerEditComponent },
  {path: 'profile', component: ProfileComponent },
  
  {path: 'user', component: UserListComponent },
  {path: 'user/add', component: UserAddComponent },
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent },
  {path: 'home', component: HomeComponent },
  {path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
