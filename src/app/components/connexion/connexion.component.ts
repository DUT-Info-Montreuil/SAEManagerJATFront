import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-connexion',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})

export class ConnexionComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  connexion(): void {
    this.authService.connexion(this.email, this.password).subscribe(
      response => {
        console.log("Connexion réussie !", response);
        localStorage.setItem('token', response.token); // Stocker le token
        this.router.navigate(['/acceuil']);
      },
      error => {
        console.error("Erreur de connexion", error);
        this.errorMessage = "Identifiants incorrects. Veuillez réessayer.";
      }
    );
  }
}

