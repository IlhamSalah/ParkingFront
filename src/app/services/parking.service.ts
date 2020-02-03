import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parking} from '../models/parking';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Parking[]>("http://localhost:3000/parkings").pipe()
  }
  getOne(id: number){
    return this.http.get<Parking>("http://localhost:3000/parkings"+id).pipe()
  }
  delete(id:number){
    return this.http.delete("http://localhost:3000/parkings"+id).pipe()
  }
  addNew(parking : Parking){
    return this.http.post("http://localhost:3000/parkings", parking).pipe()
  }
  update(id: number, parking : Parking){
    return this.http.put("http://localhost:3000/parkings/"+id, parking).pipe()
  }
}
