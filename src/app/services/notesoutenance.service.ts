import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteSoutenanceService {
  private baseUrl = `${environment.apiUrl}/notes-soutenance`;

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getNoteById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addNote(note: any): Observable<any> {
    return this.http.post(this.baseUrl, note);
  }

  updateNote(id: number, note: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, note);
  }

  deleteNote(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
