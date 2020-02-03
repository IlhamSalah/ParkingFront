import { Component, OnInit } from '@angular/core';
import {Personne} from '../models/personne'
import { PersonneService } from '../services/personne.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  newPersonne : Personne = new Personne(); // la personne va être préremplie par le formulaire 

  constructor(private personneService : PersonneService, private route : Router) { }

  ngOnInit() {
  }
// vu qu ele formulaire est préremplie on a pas besoin de rajouter la personne ds la méthode
  addPersonne(){
    this.personneService.addNew(this.newPersonne).subscribe(
      data => {
      }
    )
  }

}
