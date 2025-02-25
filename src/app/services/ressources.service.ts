import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ressource {
  id: number;
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  private apiUrl = 'http://localhost:3001/api/ressources'; // URL de ton API Spring Boot

  constructor(private http: HttpClient) {}

  // Obtenir toutes les ressources
  getAllRessources(): Observable<any> {
    return this.http.get<Ressource[]>(this.apiUrl);
  }

  // Obtenir une ressource par ID
  getRessourceById(id: number): Observable<Ressource> {
    return this.http.get<Ressource>(`${this.apiUrl}/${id}`);
  }
}
