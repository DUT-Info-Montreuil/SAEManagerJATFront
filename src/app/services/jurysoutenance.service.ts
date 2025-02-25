import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JurySoutenanceService {
  private baseUrl = `${environment.apiUrl}/jury-soutenance`;

  constructor(private http: HttpClient) { }

  getAllJury(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getJuryById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addJury(jury: any): Observable<any> {
    return this.http.post(this.baseUrl, jury);
  }

  updateJury(id: number, jury: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, jury);
  }

  deleteJury(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
