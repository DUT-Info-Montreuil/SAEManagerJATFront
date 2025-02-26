import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3001/api/auth';

  constructor(private http: HttpClient) { }

  connexion(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.baseUrl}/connexion`, { email, password }).subscribe(
        (response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
          observer.next(response);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  inscription(nom: string, prenom: string, email: string, password: string, estProf: number, estAdmin: number | null): Observable<any> {
    return this.http.post(`${this.baseUrl}/inscription`, {
      nom,
      prenom,
      email,
      password,
      estProf,
      estAdmin
    });
  }
}
