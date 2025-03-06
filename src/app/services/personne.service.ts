import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Personne } from '../models/personne.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonneService {
  private apiUrl = `${environment.apiUrl}/personnes`;

  constructor(private http: HttpClient) {}

  // Récupérer toutes les personnes
  getAll(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl);
  }

  // Récupérer une personne par son ID
  getById(id: number): Observable<Personne> {
    return this.http.get<Personne>(`${this.apiUrl}/${id}`);
  }

  // Créer une nouvelle personne
  create(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.apiUrl, personne);
  }

  // Supprimer une personne par ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour une personne
  update(personne: Personne): Observable<Personne> {
    return this.http.put<Personne>(`${this.apiUrl}/${personne.id}`, personne);
  }

  // Récupérer les personnes sans groupe
  getPersonnesSansGroupe(): Observable<Personne[]> {
    return this.http.get<Personne[]>(`${this.apiUrl}/sans-groupe`);
  }
}
