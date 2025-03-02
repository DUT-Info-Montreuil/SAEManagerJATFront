import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) { }

  connexion(email: string, password: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.baseUrl}/connexion`, { email, password }).subscribe(
        (response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            const decodedToken = this.decodeToken(response.token);
            localStorage.setItem('role', decodedToken.role);
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

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  private decodeToken(token: string): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  inscription(nom: string, prenom: string, email: string, password: string, estProf: boolean, estAdmin: number | null): Observable<any> {
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
