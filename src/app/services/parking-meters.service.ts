import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';

export interface ParkingMeter {
  id?: number;
  address: string
  status: string
  usages: number
}

@Injectable({
  providedIn: 'root'
})
export class ParkingMetersService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ParkingMeter[]> {
    return this.http.get<ParkingMeter[]>('/assets/data.json')
  }

  //TODO: in case we have a real server
  // getById(id: number): Observable<ParkingMeter> {
  //   return this.http.get<ParkingMeter>(`$/assets/data/${post.id}.json`)
  //     .pipe(
  //       map((parkingMeter: ParkingMeter) => {
  //         return { ...parkingMeter, id }
  //       })
  //     );
  // }
  //TODO: in case we have a real server
  // update(parkingMeter: ParkingMeter): Observable<ParkingMeter> {
  //   return this.http.patch<ParkingMeter>(`$/assets/data/${parkingMeter.id}.json`, parkingMeter);
  // }
}
