import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';
import { Etudiant } from '../models/etudiant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = `${environment.apiUrl}/etudiants`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }

  getById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/${id}`);
  }

  create(etudiant: any): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  update(etudiant: any): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/${etudiant.id}`, etudiant);
  }

  getEtudiantsSansGroupe(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/sans-groupe`);
  }

  ajouterNoteAEtudiant(etudiantId: number, note: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${etudiantId}/notes`, note);
  }

}
