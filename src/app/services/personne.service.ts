import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private baseUrl = 'http://localhost:3001/api/personnes';

  constructor(private http: HttpClient) { }

  getProfs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/professeurs`);
  }

  getEtuds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/etudiants`);
  }
}
