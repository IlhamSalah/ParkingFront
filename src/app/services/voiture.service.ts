import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Voiture } from '../models/voiture';
import { NombreVoiture } from '../models/nombreVoiture';


@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<Voiture[]>("http://localhost:3000/voitures").pipe()
  }

  // permet de récupérer une voiture à partir de son id 
  getOne(id: number) {
    return this.http.get<Voiture>("http://localhost:3000/voitures/" + id).pipe() // ici le composant variable est l'id il faut donc l'ajouter en plus de la chaine de caractère qui est l'url
  }

  delete(id: number) {
    return this.http.delete("http://localhost:3000/voitures/" + id).pipe()

  }
  addNew(voiture : Voiture){
    return this.http.post("http://localhost:3000/voitures",voiture).pipe()
// ici ,voiture car c'est un paramètre ds le body et pas ds l'url comme ds la méthode delete 
  }
  update( id:number, voiture :Voiture){
    return this.http.put("http://localhost:3000/voitures/" +id,voiture).pipe()
  }

  affecter(id:number, voiture:Voiture){
    return this.http.put("http://localhost:3000/voiturestest/" +id, voiture).pipe()
  }

  affecter2(idPersonne:number,idVoiture:number){
    return this.http.put("http://localhost:3000/voiturestest2/"+idVoiture+"/"+idPersonne,"").pipe()
  }
  // les paramètres idPersonne et idVoiture doivent être ds le même ordre que ds voiture.js du node 
  // à la fin de la méthode return on doit ajouter "" car on doit faire appel au body m^me si il est vide 

  affecter3(id:number, voiture:Voiture){
    return this.http.put("http://localhost:3000/voitureparking1/" +id, voiture).pipe()
  }
  afficher(id: number){
    return this.http.get<Voiture[]>("http://localhost:3000/voiturestest/" +id).pipe()
  }

  count(id:number, idpersonne: number){
    return this.http.get<NombreVoiture>("http://localhost:3000/countVoitureClientParking/"+id+ "/" +idpersonne).pipe()
  }
}
