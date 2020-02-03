import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-list-voitures',
  templateUrl: './list-voitures.component.html',
  styleUrls: ['./list-voitures.component.css']
})
export class ListVoituresComponent implements OnInit {

  listVoitures: Voiture[] = [] // initialisation du tableau 

  constructor(private voitureService: VoitureService) { }

  ngOnInit() {
    this.voitureService.getAll().subscribe( // subscribe car on a utilise pipe
      data =>  // data represente le retour de substribe ici c'est data mais peu importe le nom c'est un alias qu'on met devant =>
      {
        this.listVoitures = data;
      })
  }
//on fait une methode à part avec des paramètres car on ne veux pas le delete de fasse directement que qd on acionne le bouton 
  delete(id: number) {
    this.voitureService.delete(id).subscribe(data =>{
      this.ngOnInit();
    })
  }
   
  // ngOnInit s'intialise à chaque fois qu'on le lance, qd on charge la page 
}
