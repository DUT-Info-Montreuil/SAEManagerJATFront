import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { environment } from '../../../src/environments/environment';
import { Groupe } from '../models/groupe.model';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private apiUrl = `${environment.apiUrl}/groupes`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Groupe[]> {
    return this.http.get<Groupe[]>(this.apiUrl).pipe(
      map(groupes =>
        groupes.map(groupe => ({
          ...groupe,
          etudiants: groupe.etudiants || []
        }))
      )
    );
  }

  create(groupe: Groupe): Observable<Groupe> {
    return this.http.post<Groupe>(this.apiUrl, groupe);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addEtudiantToGroupe(groupeId: number, etudiantId: number): Observable<Groupe> {
    return this.http.post<Groupe>(`${this.apiUrl}/${groupeId}/ajouter-etudiant/${etudiantId}`, {});
  }

  removeEtudiantFromGroupe(groupeId: number, etudiantId: number): Observable<Groupe> {
    return this.http.delete<Groupe>(`${this.apiUrl}/${groupeId}/supprimer-etudiant/${etudiantId}`);
  }

  deleteGroupe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getGroupes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createGroupe(groupe: any, saeId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?saeId=${saeId}`, groupe);
  }

}
