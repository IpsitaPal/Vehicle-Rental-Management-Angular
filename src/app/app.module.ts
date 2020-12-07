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
import { PaymentEditComponent } from './payment/payment-edit/payment-edit.component';
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

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    PaymentListComponent,
    PaymentShowComponent,
    PaymentAddComponent,
    PaymentEditComponent,
    TitleComponent,
    BookingListComponent,
    BookingShowComponent,
    BookingAddComponent,
    BookingEditComponent,
    VehicleListComponent,
    VehicleShowComponent,
    VehicleAddComponent,
    VehicleUpdateComponent,
    VehicleViewComponent
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
