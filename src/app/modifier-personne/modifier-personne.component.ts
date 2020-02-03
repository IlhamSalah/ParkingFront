import { Component, OnInit } from '@angular/core';
import {Personne} from '../models/personne'
import { PersonneService } from '../services/personne.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-modifier-personne',
  templateUrl: './modifier-personne.component.html',
  styleUrls: ['./modifier-personne.component.css']
})
export class ModifierPersonneComponent implements OnInit {
  idPersonne : number;
  personne : Personne = new Personne();


  constructor(private personneService : PersonneService, private route : ActivatedRoute) { 
    this.idPersonne = parseInt(this.route.snapshot.paramMap.get('id')); 
  }

 
    ngOnInit() {
      this.personneService.getOne(this.idPersonne).subscribe(
        data => {
          this.personne = data;
        })
      }
updatePersonne(){
  console.log(this.personne)
  this.personneService.update(this.idPersonne, this.personne).subscribe(
    data=> {

    }
  )
}

}
