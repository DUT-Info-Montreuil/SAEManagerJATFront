import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private baseUrl = '/api/notes';

  constructor(private http: HttpClient) {}

  createNote(note: any, etudiantId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/etudiant/${etudiantId}`, note);
  }
}
