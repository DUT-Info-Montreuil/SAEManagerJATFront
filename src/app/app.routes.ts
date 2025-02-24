import { Routes } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { RessourceComponent } from './ressources/ressources.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'etudiants', component: EtudiantComponent },
      { path: 'etudiants/add', component: EtudiantComponent },
      { path: 'ressources', component: RessourceComponent},
      { path: 'connexion', component: ConnexionComponent},
    ]
  }
];
