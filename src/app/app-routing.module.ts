import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParkingMetersListComponent } from './components/parking-meters-list/parking-meters-list.component';
import { ParkingMetersSingleComponent } from './components/parking-meters-single/parking-meters-single.component';

const routes: Routes = [
  { path: '', component: ParkingMetersListComponent },
  { path: ':id', component: ParkingMetersSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
