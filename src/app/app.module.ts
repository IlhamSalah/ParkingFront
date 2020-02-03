import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VoitureComponent } from './voiture/voiture.component';
import { PersonneComponent } from './personne/personne.component';

import{FormsModule} from '@angular/forms';
import { ListVoituresComponent } from './list-voitures/list-voitures.component';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailVoitureComponent } from './detail-voiture/detail-voiture.component';
import { DetailPersonneComponent } from './detail-personne/detail-personne.component';
import { HeaderComponent } from './header/header.component';
import { ModifierPersonneComponent } from './modifier-personne/modifier-personne.component';
import { ModifierVoitureComponent } from './modifier-voiture/modifier-voiture.component';
import { AffecterComponent } from './affecter/affecter.component';
import { ImageComponent } from './image/image.component';
import { AfficherVoituresPersonneComponent } from './afficher-voitures-personne/afficher-voitures-personne.component';
import { ParkingComponent } from './parking/parking.component';
import { FactureComponent } from './facture/facture.component';
import { ChoixParkingComponent } from './choix-parking/choix-parking.component';
import { AffecterParkingVoitureComponent } from './affecter-parking-voiture/affecter-parking-voiture.component';
import { GenererFactureComponent } from './generer-facture/generer-facture.component';


// bibliotheque de module de message 
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
//importer la biblio icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    PersonneComponent,
    ListVoituresComponent,
    ListPersonnesComponent,
    DetailVoitureComponent,
    DetailPersonneComponent,
    HeaderComponent,
    ModifierPersonneComponent,
    ModifierVoitureComponent,
    AffecterComponent,
    ImageComponent,
    AfficherVoituresPersonneComponent,
    ParkingComponent,
    FactureComponent,
    ChoixParkingComponent,
    AffecterParkingVoitureComponent,
    GenererFactureComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
