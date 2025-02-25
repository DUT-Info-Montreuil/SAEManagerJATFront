import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { DashboardData } from './dashboard-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  dashboardData!: DashboardData;
  userId: number = 1; // Par exemple, récupérer l'ID utilisateur depuis le service d'authentification

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
     this.loadDashboard();
  }

  loadDashboard(): void {
     this.dashboardService.getDashboardData(this.userId).subscribe(data => {
         this.dashboardData = data;
     });
  }

  deleteNotification(notificationId: number): void {
      this.dashboardService.deleteNotification(notificationId).subscribe(() => {
         this.dashboardData.notifications = this.dashboardData.notifications.filter(n => n.id !== notificationId);
      });
  }

  onProfileImageChange(event: any): void {
      const file: File = event.target.files[0];
      if (file) {
         this.dashboardService.uploadProfileImage(this.userId, file).subscribe(updatedUser => {
             this.dashboardData.user.photoUrl = updatedUser.photoUrl;
         });
      }
  }
}
