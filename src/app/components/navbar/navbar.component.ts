import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/connexion']); // Redirection vers la page de connexion
  }

  estProf():boolean{
    return this.authService.getRole() === 'PROF';
  }

  estAdmin():boolean{
    return this.authService.getRole() === 'ADMIN';
  }
}
