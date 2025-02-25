import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PassageSoutenanceService {
  private baseUrl = `${environment.apiUrl}/passages-soutenance`;

  constructor(private http: HttpClient) { }

  getAllPassages(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getPassageById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addPassage(passage: any): Observable<any> {
    return this.http.post(this.baseUrl, passage);
  }

  updatePassage(id: number, passage: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, passage);
  }

  deletePassage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
