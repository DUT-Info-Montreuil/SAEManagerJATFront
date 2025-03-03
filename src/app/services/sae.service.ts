import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

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
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAllSAEs(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}
