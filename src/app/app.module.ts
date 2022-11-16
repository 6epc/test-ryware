import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingMetersListComponent } from './components/parking-meters-list/parking-meters-list.component';
import { ParkingMetersSingleComponent } from './components/parking-meters-single/parking-meters-single.component';
import { ParkingMetersFormComponent } from './components/parking-meters-form/parking-meters-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingMetersListComponent,
    ParkingMetersSingleComponent,
    ParkingMetersFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
