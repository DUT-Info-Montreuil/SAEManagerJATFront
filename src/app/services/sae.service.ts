import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { Ressource } from '../models/ressource.model';
import { FichierDepot } from '../models/fichierdepot.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SaeService {
  private baseUrl = `${environment.apiUrl}/saes`;

  constructor(private http: HttpClient) { }

  getAllSaes(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getSaeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addSae(sae: any): Observable<any> {
    return this.http.post(this.baseUrl, sae);
  }

  updateSae(id: number, sae: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, sae);
  }

  deleteSae(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl }/${id}`);
  }

  addRessourceToSAE(id: number, ressource: Ressource): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/ressources`, ressource);
}

createRessource(ressource: Ressource): Observable<Ressource> {
  return this.http.post<Ressource>(`${this.baseUrl}`, ressource);
}

addFichierDepotToSAE(id: number, fichierDepot: FichierDepot): Observable<FichierDepot> {
  return this.http.post<FichierDepot>(`${this.baseUrl}/${id}/fichiers-depot`, fichierDepot);
}



getFichiersDeposesBySAE(id: number): Observable<FichierDepot[]> {
  return this.http.get<FichierDepot[]>(`${this.baseUrl}/${id}/fichiers-depot`);
}
uploadFichier(personneId: string, groupeId: string, formData: FormData): Observable<any> {
  return this.http.post(`${environment.apiUrl}/fichiers/${personneId}/${groupeId}/deposer`, formData);
}



 

}
