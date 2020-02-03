import { Component, OnInit } from '@angular/core';
import { NombreVoiture } from '../models/nombreVoiture';
import {VoitureService} from '../services/voiture.service';
import {ActivatedRoute} from '@angular/router'; 
import { FactureService } from '../services/facture.service';
import { Facture } from '../models/facture';

@Component({
  selector: 'app-generer-facture',
  templateUrl: './generer-facture.component.html',
  styleUrls: ['./generer-facture.component.css']
})
export class GenererFactureComponent implements OnInit {
  NombreVoiture : NombreVoiture = new NombreVoiture();
  idparking : number; 
  idpersonne : number;
  facture : Facture = new Facture();

  
  constructor(private voitureService : VoitureService, private route: ActivatedRoute, private factureService : FactureService) {
this.idparking = parseInt(this.route.snapshot.paramMap.get('id'));
this.idpersonne = parseInt(this.route.snapshot.paramMap.get('idpersonne'));

  }
ngOnInit() {
    this.voitureService.count(this.idparking, this.idpersonne).subscribe(
      data=> {
        this.NombreVoiture=data; 
        console.log(data)
      }
    )
  }
  addFacture(){
    this.facture.client= this.idpersonne; 
    this.facture.parking = this.idparking;
    this.facture.montant= this.NombreVoiture.tarif*this.NombreVoiture.nb_personne_parking_voiture;
    console.log(this.facture);
        this.factureService.addNew(this.facture).subscribe(
      data => {
        
  
      }
    )
  }
}
