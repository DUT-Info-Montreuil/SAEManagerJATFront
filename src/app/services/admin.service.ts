import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = `${environment.apiUrl}/personnes`;

  constructor(private http: HttpClient) {}

  getAllPersonnes(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addPerson(person: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, person);
  }

  deletePerson(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateRole(id: number, role: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/role`, { role });
  }
}

