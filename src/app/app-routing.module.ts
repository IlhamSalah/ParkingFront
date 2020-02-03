import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VoitureComponent} from './voiture/voiture.component';
import {PersonneComponent} from './personne/personne.component';

import {ParkingComponent} from './parking/parking.component';
import {FactureComponent} from './facture/facture.component';


import{ListVoituresComponent} from './list-voitures/list-voitures.component';
import{ListPersonnesComponent} from './list-personnes/list-personnes.component';

import {DetailVoitureComponent} from './detail-voiture/detail-voiture.component';
import {DetailPersonneComponent} from './detail-personne/detail-personne.component';

import {ModifierPersonneComponent} from './modifier-personne/modifier-personne.component';
import {ModifierVoitureComponent} from './modifier-voiture/modifier-voiture.component';

import {AffecterComponent} from './affecter/affecter.component';
import { AffecterParkingVoitureComponent} from './affecter-parking-voiture/affecter-parking-voiture.component';


import {ImageComponent} from './image/image.component';
import {AfficherVoituresPersonneComponent} from './afficher-voitures-personne/afficher-voitures-personne.component';


import {ChoixParkingComponent} from './choix-parking/choix-parking.component';

import {GenererFactureComponent} from './generer-facture/generer-facture.component';

const routes: Routes = [
{
  path:"voiture", 
  component: VoitureComponent 
},
{
  path: "personne",
  component: PersonneComponent
}, 
{
  path:"list_voitures",
  component : ListVoituresComponent
},
{
  path : "list_personnes",
  component : ListPersonnesComponent
},

{
  path : "detail_voiture/:id",
  component : DetailVoitureComponent
},
{
  path : "detail_personne/:id",
  component : DetailPersonneComponent
},

{
  path : "modifier_personne/:id",
  component : ModifierPersonneComponent
},

{
  path : "modifier_voiture/:id",
  component : ModifierVoitureComponent
},

{
  path :"affecter",
  component : AffecterComponent
},

{
  path :"affecterParkingVoiture",
  component : AffecterParkingVoitureComponent
},

{
  path : "image",
  component : ImageComponent
},

{
  path : "afficher_voiture_personne/:id",
  component : AfficherVoituresPersonneComponent
}, 

{
  path : "parking",
  component : ParkingComponent
},

{
  path : "facture",
  component : FactureComponent
},

{
  path : "choixParking",
  component : ChoixParkingComponent
},

{
  path : "genererfacture/:id/:idpersonne",
  component : GenererFactureComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
