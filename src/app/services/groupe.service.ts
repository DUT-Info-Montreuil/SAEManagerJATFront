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
          personnes: groupe.personnes || []
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

  addPersonneToGroupe(groupeId: number, etudiantId: number): Observable<Groupe> {
    return this.http.post<Groupe>(`${this.apiUrl}/${groupeId}/ajouter-etudiant/${etudiantId}`, {});
  }

  removePersonneFromGroupe(groupeId: number, personneId: number): Observable<Groupe> {
    return this.http.delete<Groupe>(`${this.apiUrl}/${groupeId}/supprimer-personne/${personneId}`);
  }

  deleteGroupe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getGroupeById(id: number): Observable<Groupe> {
    return this.http.get<Groupe>(`${this.apiUrl}/${id}/user`);
}


  getGroupeId(id: number): Observable<number | undefined> {
    return this.getGroupeById(id).pipe(
        map((groupe: Groupe | null) => {
            if (!groupe) {
                console.warn("⚠️ Aucun groupe trouvé pour cet utilisateur.");
                return undefined;
            }
            return groupe.id;
        })
    );
}


}
