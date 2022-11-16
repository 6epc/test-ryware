import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParkingMeter, ParkingMetersService } from 'src/app/services/parking-meters.service';

// import { ParkingMeter, ParkingMetersService } from 'src/app/services/parking-meters.service';

@Component({
  selector: 'app-parking-meters-list',
  templateUrl: './parking-meters-list.component.html',
  styleUrls: ['./parking-meters-list.component.scss']
})
export class ParkingMetersListComponent implements OnInit, OnDestroy {
  public data: ParkingMeter[] = [];
  sub!: Subscription;

  constructor(
    private service: ParkingMetersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.service.getData().subscribe((data: any) => {
        this.data = data.sort((a: any, b: any) => a.address.localeCompare(b.address));
      })
  }

  updateData(e: ParkingMeter) {
    // new id for every new parking meter, since we dont have a id form server
    e.id = this.data.length + 1;
    this.data.push(e);
    this.data.sort((a: any, b: any) => a.address.localeCompare(b.address));
  }

  navigate(item: ParkingMeter) {
    this.router.navigate(['/', item.id]);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
