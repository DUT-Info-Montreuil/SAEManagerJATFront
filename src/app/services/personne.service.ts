import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private apiUrl = `${environment.apiUrl}/personnes`;

  constructor(private http: HttpClient) { }

  getProfs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/professeurs`);
  }

  getEtuds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/etudiants`);
  }


  addProfessor(professor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, professor);
  }

  deleteProfessor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
