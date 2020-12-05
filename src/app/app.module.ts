import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './vehicle/vehicle-add/vehicle-add.component';
import { VehicleUpdateComponent } from './vehicle/vehicle-update/vehicle-update.component';
import { VehicleViewComponent } from './vehicle/vehicle-view/vehicle-view.component';
import { VehicleShowComponent } from './vehicle/vehicle-list/vehicle-show/vehicle-show.component';
import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
