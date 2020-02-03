import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';
import { VoitureService } from '../services/voiture.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifier-voiture',
  templateUrl: './modifier-voiture.component.html',
  styleUrls: ['./modifier-voiture.component.css']
})
export class ModifierVoitureComponent implements OnInit {

  idVoiture: number;
  voiture: Voiture = new Voiture();


  constructor(private voitureService: VoitureService, private route: ActivatedRoute) {
    this.idVoiture = parseInt(this.route.snapshot.paramMap.get('id'));

  }

  ngOnInit() {
    this.voitureService.getOne(this.idVoiture).subscribe(
      data => {
        this.voiture = data;
      })
  }

  updateVoiture() {
    console.log(this.voiture)
    this.voitureService.update(this.idVoiture, this.voiture).subscribe(
      data => {

      }
    )


  }
}
