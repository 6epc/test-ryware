import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ParkingMeter } from 'src/app/services/parking-meters.service';

@Component({
  selector: 'app-parking-meters-form',
  templateUrl: './parking-meters-form.component.html',
  styleUrls: ['./parking-meters-form.component.scss']
})
export class ParkingMetersFormComponent implements OnInit {
  @Output() onAdd: EventEmitter<ParkingMeter> = new EventEmitter<ParkingMeter>();

  form!: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      status: new FormControl('', [Validators.required, Validators.minLength(6)]),
      usages: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)])
    })
  }

  get address() { return this.form.get('address') }
  get status() { return this.form.get('status') }
  get usages() { return this.form.get('usages') }

  submit() {
    const data = {
      ...this.form.value
    }
    this.onAdd.emit(data)
    this.form.reset();
  }
}
