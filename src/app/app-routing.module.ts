import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';

const routes: Routes = [
  {path: 'vehicle', component: VehicleListComponent},
 {path: 'vehicle-add', component: VehicleAddComponent},
 {path: 'vehicle-edit', component: VehicleUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
