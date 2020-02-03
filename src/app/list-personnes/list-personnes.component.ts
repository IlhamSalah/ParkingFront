import { Component, OnInit } from '@angular/core';
import {Personne} from '../models/personne';
import {PersonneService} from '../services/personne.service';

@Component({
  selector: 'app-list-personnes',
  templateUrl: './list-personnes.component.html',
  styleUrls: ['./list-personnes.component.css']
})
export class ListPersonnesComponent implements OnInit {

  listPersonnes : Personne[] = [] // initialisation du tableau
  constructor(private personneService :  PersonneService){ }

  ngOnInit() {
    this.personneService.getAll().subscribe( // subscribe car on a utilise pipe
    data =>  // data represente le retour de substribe ici c'est data mais peu importe le nom c'est un alias qu'on met devant =>
    {
      this.listPersonnes =data;
    })
  }
// ngOnInit s'intialise à chaque fois qu'on le lance, qd on charge la page 

delete(id: number) {
  this.personneService.delete(id).subscribe(data =>{
    this.ngOnInit();
  })
}
}
