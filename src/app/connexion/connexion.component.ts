import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  imports: [FormsModule]
})
export class ConnexionComponent {
  login: string = '';
  password: string = '';

  constructor(private router: Router) {}

  seConnecter() {
    // Pour l'instant, peu importe si les champs sont remplis ou non, on redirige vers '/home'
    this.router.navigate(['/home']);
  }
}
