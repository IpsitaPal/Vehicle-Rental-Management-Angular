import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
//import { VehicleViewComponent } from './vehicle/vehicle-view/vehicle-view.component';

const routes: Routes = [
  {path: 'vehicle-list', component: VehicleListComponent},
 {path: 'vehicle-add', component: VehicleAddComponent},
 {path: 'vehicle-edit', component: VehicleUpdateComponent}
 
 //{path: 'vehicle-viewAll', component:VehicleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
