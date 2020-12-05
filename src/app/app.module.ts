import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { VehicleViewComponent } from './vehicle/vehicle-view/vehicle-view.component';
import { VehicleShowComponent } from './vehicle/vehicle-list/vehicle-show/vehicle-show.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    VehicleShowComponent,
    VehicleAddComponent,
    VehicleUpdateComponent,
    VehicleViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
