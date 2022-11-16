import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

import { ParkingMeter, ParkingMetersService } from 'src/app/services/parking-meters.service';

@Component({
  selector: 'app-parking-meters-single',
  templateUrl: './parking-meters-single.component.html',
  styleUrls: ['./parking-meters-single.component.scss']
})
export class ParkingMetersSingleComponent implements OnInit {
  data: ParkingMeter[] = [];
  parkingMeter: any = {};
  currentId!: number
  showAlert = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ParkingMetersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => this.currentId = param['id']);

    this.service.getData().subscribe(item => {
      this.data = item;
      this.parkingMeter = this.data.find((item: ParkingMeter) => item.id === this.currentId);
    });

    //TODO: in case we have a real server
    // this.parkingMeter$ = this.activatedRoute.params.pipe(
    //   switchMap((params: Params) => {
    //       return this.service.getById(+params['id']);
    //   })
    // )
  }

  updateStatus() {
    this.parkingMeter.status = this.parkingMeter.status === 'enabled' ? 'disabled' : 'enabled';
  }

  //TODO: in case we have a real server
  // updateStatus() {
  //   this.service.update({ some data to update})
  //    .subscribe(() => {
  //     some logic to do...
  //     this.alertService.success('Пост был обновлен');
  //   })
  // }


}
