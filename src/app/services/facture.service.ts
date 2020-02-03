import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Facture[]>("http://localhost:3000/factures").pipe()
  }

  // permet de récupérer une voiture à partir de son id 
  getOne(id: number) {
    return this.http.get<Facture>("http://localhost:3000/factures/" + id).pipe() // ici le composant variable est l'id il faut donc l'ajouter en plus de la chaine de caractère qui est l'url
  }

  delete(id: number) {
    return this.http.delete("http://localhost:3000/factures/delete/" + id).pipe()

  }
  addNew(facture : Facture){
    return this.http.post("http://localhost:3000/factures/create",facture).pipe()
// ici ,voiture car c'est un paramètre ds le body et pas ds l'url comme ds la méthode delete 
  }
  update( id:number, facture :Facture){
    return this.http.put("http://localhost:3000/factures/" +id,facture).pipe()
  }
}