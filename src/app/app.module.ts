import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentListComponent } from './payment/payment-list/payment-list.component';
import { PaymentShowComponent } from './payment/payment-list/payment-show/payment-show.component';
import { PaymentAddComponent } from './payment/payment-add/payment-add.component';
import { TitleComponent } from './title/title.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { BookingAddComponent } from './booking/booking-add/booking-add.component';
import { BookingEditComponent } from './booking/booking-edit/booking-edit.component';
import { BookingShowComponent } from './booking/booking-list/booking-show/booking-show.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { VehicleViewComponent } from './vehicle/vehicle-view/vehicle-view.component';
import { VehicleShowComponent } from './vehicle/vehicle-list/vehicle-show/vehicle-show.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerShowComponent } from './customer/customer-list/customer-show/customer-show.component';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './user/home/home.component';
import { AdminComponent } from './user/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentListComponent,
    PaymentShowComponent,
    PaymentAddComponent,
    TitleComponent,
    BookingListComponent,
    BookingShowComponent,
    BookingAddComponent,
    BookingEditComponent,
    VehicleListComponent,
    VehicleShowComponent,
    VehicleAddComponent,
    VehicleUpdateComponent,
    VehicleViewComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerShowComponent,
    UserComponent,
    UserAddComponent,
    UserListComponent,
    LoginComponent,
    UserListComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
