import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})


export class InscriptionComponent {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  role: string = 'eleve'; // Par défaut, c'est un élève
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  inscription(): void {
    let estProf = 0;
    let estAdmin = null;

    if (this.role === 'prof') {
      estProf = 1;
    } else if (this.role === 'admin') {
      estAdmin = 1;
    }

    this.authService.inscription(this.nom, this.prenom, this.email, this.password, estProf, estAdmin).subscribe(
      response => {
        console.log("Inscription réussie !", response);
        this.router.navigate(['/connexion']); // Rediriger vers la connexion
      },
      error => {
        console.error("Erreur d'inscription", error);
        this.errorMessage = "Une erreur s'est produite. Vérifiez vos informations.";
      }
    );
  }
}
