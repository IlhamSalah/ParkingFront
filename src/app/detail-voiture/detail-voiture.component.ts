import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../services/voiture.service';
import {Voiture} from '../models/voiture';
import {ActivatedRoute} from '@angular/router'; // il faut importer ce module car on en besoin pour faire le parseInt

@Component({
  selector: 'app-detail-voiture',
  templateUrl: './detail-voiture.component.html',
  styleUrls: ['./detail-voiture.component.css']
})
export class DetailVoitureComponent implements OnInit {

idVoiture : number; 
voiture : Voiture = new Voiture(); 

  constructor(private voitureService : VoitureService, private route : ActivatedRoute) {
    this.idVoiture = parseInt(this.route.snapshot.paramMap.get('id'));   // pour récupérer l'id de la route , il va chercher ds la route le paramètre qui s'apelle id 
  // ds le idVoiture on va avoir ce qu'il y a après le / ds le chemin 
  }
// ici on va récupérer le paramètre idVoiture que l'on va utiliser le webservice 
  ngOnInit() {
    this.voitureService.getOne(this.idVoiture).subscribe(
      data => {
        this.voiture = data; 
      }
    )
  }

}
