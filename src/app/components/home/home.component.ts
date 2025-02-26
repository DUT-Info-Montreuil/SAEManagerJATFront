import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  redirectTo(route: string): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate([route]);
    } else {
      this.router.navigate(['/connexion']);
    }
  }
}
