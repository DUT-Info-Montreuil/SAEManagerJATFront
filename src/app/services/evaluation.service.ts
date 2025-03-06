import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  private apiURL = `${environment.apiUrl}/evaluations`;

  constructor(private http: HttpClient) { }

  getAllEvaluations():Observable<any>{
    return this.http.get(`${this.apiURL}`)
  }

  addEvaluation(evaluation: any): Observable<any> {
    return this.http.post(`${this.apiURL}`, evaluation);
  }

  deleteEvaluation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
