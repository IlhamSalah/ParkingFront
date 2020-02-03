import { Component, OnInit } from '@angular/core';
import {Parking} from '../models/parking';
import {ParkingService} from '../services/parking.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  newParking : Parking = new Parking();

  constructor( private parkingService : ParkingService, private router: Router) { }

  ngOnInit() {
  }

  addParking(){
    this.parkingService.addNew(this.newParking).subscribe(
      data => {
        
      }
    )
  }

}
