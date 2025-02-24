import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardData } from './dashboard-data.model';
import { Observable } from 'rxjs';
import { UserDTO } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) { }

  getDashboardData(userId: number): Observable<DashboardData> {
      return this.http.get<DashboardData>(`${this.baseUrl}/${userId}`);
  }

  deleteNotification(notificationId: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/notifications/${notificationId}`);
  }

  uploadProfileImage(userId: number, file: File): Observable<UserDTO> {
      const formData = new FormData();
      formData.append('file', file);
      return this.http.post<UserDTO>(`${this.baseUrl}/users/${userId}/profile-image`, formData);
  }
}
