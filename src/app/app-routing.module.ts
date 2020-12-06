import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { PaymentAddComponent } from './payment/payment-add/payment-add.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'vehicle', component: VehicleListComponent},
  {path: 'vehicle-add', component: VehicleAddComponent},
  {path: 'vehicle-edit', component: VehicleUpdateComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'payment/add', component: PaymentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
