import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nature  } from "../models/nature";

import { map,tap } from "rxjs/operators"; 





@Injectable({
  providedIn: 'root'
})
export class NatureService {

  
URL_BACKEND = environment.baseUrl;


subNature = new Subject<Nature>();

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(private http: HttpClient) { }

  listeNatures():Observable<Nature[]>{

    //récupérer la liste des natures coté serveur
    return this.http.get<Nature[]>(`${environment.baseUrl}natures/`)
  }

  ajouterNature(nature: Nature): void {
    // envoie de la requête
    this.http.post(`${this.URL_BACKEND}natures`,
      JSON.stringify(nature),
      this.httpOptions
    ).subscribe((data: any) => {
      alert('Félicitation ! Vous avez créé une nouvelle nature.');
    }, (error: HttpErrorResponse) => {
      console.log('error', error);
      if (error.status === 409) {
        alert('Cette nature existe déjà, veuillez modifier la nature dans le tableau !');
      }
      else if (error.status === 400) {
        alert('Veuillez remplir tous les champs !');
      }

    });
  }
   
    
  }

