import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Personne} from '../models/personne';
import {PersonneVoiture} from '../models/personneVoiture';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Personne[]>("http://localhost:3000/personnes").pipe()
  }
  getOne(id: number){
    return this.http.get<Personne>("http://localhost:3000/personnes/"+id).pipe() // ici le composant variable est l'id il faut donc l'ajouter en plus de la chaine de caractère qui est l'url

}

delete(id: number) {
  return this.http.delete("http://localhost:3000/personnes/" + id).pipe()
}

addNew(personne : Personne){
  return this.http.post("http://localhost:3000/personnes",personne).pipe()
// ici ,voiture car c'est un paramètre ds le body et pas ds l'url comme ds la méthode delete 
}

update( id:number, personne :Personne){
  return this.http.put("http://localhost:3000/personnes/" +id,personne).pipe()
}

choix(id:number){
  return this.http.get<PersonneVoiture[]>("http://localhost:3000/personnesParking/"+id).pipe()
}



}
