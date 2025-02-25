import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {
  private baseUrl = `${environment.apiUrl}/soutenances`;

  constructor(private http: HttpClient) { }

  getAllSoutenances(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getSoutenanceById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addSoutenance(soutenance: any): Observable<any> {
    return this.http.post(this.baseUrl, soutenance);
  }

  updateSoutenance(id: number, soutenance: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, soutenance);
  }

  deleteSoutenance(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
