import { Component, OnInit } from '@angular/core';
import { Parking } from '../models/parking';
import {ParkingService} from '../services/parking.service';
import {Voiture} from '../models/voiture';
import {PersonneService} from '../services/personne.service';
import { PersonneVoiture } from '../models/personneVoiture';
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture';

@Component({
  selector: 'app-choix-parking',
  templateUrl: './choix-parking.component.html',
  styleUrls: ['./choix-parking.component.css']
})
export class ChoixParkingComponent implements OnInit {
  listParking : Parking[] = [];
  listPersonne : PersonneVoiture[] = [];
  parking : Parking = new Parking(); 
  
  voiture : Voiture = new Voiture();



  constructor(private parkingService : ParkingService, private personneService : PersonneService) { }

  ngOnInit() {
    this.parkingService.getAll().subscribe(
      data => 
      {
        this.listParking=data; 
      }
    )

  }

 

ListParkingPersonne(){

      this.personneService.choix(this.parking.idparking).subscribe(
        data => {
    this.listPersonne =data;
    console.log (data)
    }
  )
  
    }


  

}



