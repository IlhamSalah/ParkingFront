import { Component, OnInit } from '@angular/core';
import {PersonneService} from '../services/personne.service';
import {Personne} from '../models/personne';
import {ActivatedRoute} from '@angular/router'; 

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  idPersonne : number; 
  personne : Personne = new Personne(); 

  constructor(private personneService : PersonneService, private route : ActivatedRoute) {
    this.idPersonne = parseInt(this.route.snapshot.paramMap.get('id'));   // pour récupérer l'id de la route , il va chercher ds la route le paramètre qui s'apelle id 
  // ds le idVoiture on va avoir ce qu'il y a après le / ds le chemin 
  }
// ici on va récupérer le paramètre idVoiture que l'on va utiliser le webservice 
  ngOnInit() {
    this.personneService.getOne(this.idPersonne).subscribe(
      data => {
        this.personne = data; 
      }
    )
  }

}