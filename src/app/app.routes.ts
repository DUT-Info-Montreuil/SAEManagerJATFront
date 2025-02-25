import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import {JurysoutenanceComponent} from './components/jurysoutenance/jurysoutenance.component';
import {NotesoutenanceComponent} from './components/notesoutenance/notesoutenance.component';
import {PassagesoutenanceComponent} from './components/passagesoutenance/passagesoutenance.component';
import {SaeComponent} from './components/sae/sae.component';
import {SoutenanceComponent} from './components/soutenance/soutenance.component';



export const routes: Routes = [
  { path: 'acceuil', component: HomeComponent}, // Page d'accueil

 /* {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'etudiants', component: EtudiantComponent }, // Liste des étudiants
      //{ path: 'add', component: EtudiantFormComponent }, // Formulaire d'ajout
      //{ path: 'edit/:id', component: EtudiantFormComponent } // Modification
    ],pathMatch: 'full'
  },*/

  { path: 'soutenances', component: SoutenanceComponent },
  { path: 'passages-soutenance', component: PassagesoutenanceComponent },
  { path: 'notes-soutenance', component: NotesoutenanceComponent },
  { path: 'jury-soutenance', component: JurysoutenanceComponent },
  { path: 'saes', component: SaeComponent },
];
