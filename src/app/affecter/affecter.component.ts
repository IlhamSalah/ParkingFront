import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne';
import {PersonneService} from '../services/personne.service';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';



@Component({
  selector: 'app-affecter',
  templateUrl: './affecter.component.html',
  styleUrls: ['./affecter.component.css']
})
export class AffecterComponent implements OnInit {

  // on créer des listes afin de pouvoir stocker les valeurs des champs et de les afficher sur les pages internet 
  listPersonne : Personne[] = [];
  personne : Personne = new Personne();

  listVoiture : Voiture[] = [];
  voiture : Voiture = new Voiture(); 
  
  

  constructor(private personneService :  PersonneService, private voitureService : VoitureService) { }

  // on fait des gettAll ici afin de pouvoir récupérer les données de la base de données 
  ngOnInit() {
    this.personneService.getAll().subscribe( // subscribe car on a utilise pipe
      data =>  // data represente le retour de substribe ici c'est data mais peu importe le nom c'est un alias qu'on met devant =>
      {
        this.listPersonne = data;
      })
      this.voitureService.getAll().subscribe( // subscribe car on a utilise pipe
        data =>  // data represente le retour de substribe ici c'est data mais peu importe le nom c'est un alias qu'on met devant =>
        {
          this.listVoiture = data;
        })
  }

  affecterVoiturePersonne(){
    
    this.voitureService.getOne(this.voiture.idvoiture).subscribe(
      data => {
        this.voiture = data; 
        this.voiture.proprietaire = this.personne.idpersonne;

console.log(this.voiture);
        this.voitureService.affecter(this.voiture.idvoiture, this.voiture).subscribe(
          data=> {
      
          }
        )
      }
    )
  }

}
