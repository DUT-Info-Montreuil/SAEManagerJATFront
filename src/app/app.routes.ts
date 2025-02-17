import { Routes } from '@angular/router';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', redirectTo: 'etudiants', pathMatch: 'full' },
      { path: 'etudiants', component: EtudiantComponent },
      { path: 'etudiants/add', component: EtudiantComponent },
    ]
  }
];
