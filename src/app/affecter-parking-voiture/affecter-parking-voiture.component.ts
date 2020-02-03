import { Component, OnInit } from '@angular/core';
import { Parking } from '../models/Parking';
import {ParkingService} from '../services/Parking.service';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-affecter-parking-voiture',
  templateUrl: './affecter-parking-voiture.component.html',
  styleUrls: ['./affecter-parking-voiture.component.css']
})
export class AffecterParkingVoitureComponent implements OnInit {

  // on créer des listes afin de pouvoir stocker les valeurs des champs et de les afficher sur les pages internet 
  listParking : Parking[] = [];
  parking : Parking = new Parking();

  listVoiture : Voiture[] = [];
  voiture : Voiture = new Voiture(); 
  
  

  constructor(private ParkingService :  ParkingService, private voitureService : VoitureService) { }

  // on fait des gettAll ici afin de pouvoir récupérer les données de la base de données 
  ngOnInit() {
    this.ParkingService.getAll().subscribe( // subscribe car on a utilise pipe
      data =>  // data represente le retour de substribe ici c'est data mais peu importe le nom c'est un alias qu'on met devant =>
      {
        this.listParking = data;
      })
      this.voitureService.getAll().subscribe( // subscribe car on a utilise pipe
        data =>  // data represente le retour de substribe ici c'est data mais peu importe le nom c'est un alias qu'on met devant =>
        {
          this.listVoiture = data;
        })
  }

  affecterVoitureParking(){
    
    this.voitureService.getOne(this.voiture.idvoiture).subscribe(
      data => {
        this.voiture = data; 
        this.voiture.stationnement = this.parking.idparking;

console.log(this.voiture);
        this.voitureService.affecter3(this.voiture.idvoiture, this.voiture).subscribe(
          data=> {
      
          }
        )
      }
    )
  }

}
