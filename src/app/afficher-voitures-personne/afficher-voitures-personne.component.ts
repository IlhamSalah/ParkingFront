import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-afficher-voitures-personne',
  templateUrl: './afficher-voitures-personne.component.html',
  styleUrls: ['./afficher-voitures-personne.component.css']
})
export class AfficherVoituresPersonneComponent implements OnInit {

  proprietaire : number;
  listVoiture : Voiture[] = [];


  constructor(private voitureService : VoitureService, private route : ActivatedRoute) {
    this.proprietaire = parseInt(this.route.snapshot.paramMap.get('id')); 
   }

  ngOnInit() {

    this.voitureService.afficher(this.proprietaire).subscribe(
      data => {
     this.listVoiture=data; 
      }
    )
  }

  }

