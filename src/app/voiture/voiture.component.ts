import { Component, OnInit } from '@angular/core';
import {VoitureService} from '../services/voiture.service'
import { Voiture } from '../models/voiture';
import {Router} from '@angular/router'

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {

  newVoiture : Voiture = new Voiture();

  
  constructor(private voitureService : VoitureService,  private route : Router ) { }

  ngOnInit() {
  }

  addVoiture(){
    this.voitureService.addNew(this.newVoiture).subscribe(
      data => {

      }
    )

  }

}
