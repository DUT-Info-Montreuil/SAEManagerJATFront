import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import {JurysoutenanceComponent} from './components/jurysoutenance/jurysoutenance.component';
import {NotesoutenanceComponent} from './components/notesoutenance/notesoutenance.component';
import {PassagesoutenanceComponent} from './components/passagesoutenance/passagesoutenance.component';
import {SaeComponent} from './components/sae/sae.component';
import {SoutenanceComponent} from './components/soutenance/soutenance.component';
import { GroupeComponent } from './components/groupe/groupe.component';
import {ConnexionComponent} from './components/connexion/connexion.component';
import {InscriptionComponent} from './components/inscription/inscription.component';




export const routes: Routes = [
  { path: 'acceuil', component: HomeComponent},
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'etudiants', component: EtudiantComponent },
  { path: 'soutenances', component: SoutenanceComponent },
  { path: 'passages-soutenance', component: PassagesoutenanceComponent },
  { path: 'notes-soutenance', component: NotesoutenanceComponent },
  { path: 'jury-soutenance', component: JurysoutenanceComponent },
  { path: 'saes', component: SaeComponent },
  { path: 'groupes', component: GroupeComponent },
  { path: 'connexion', component: ConnexionComponent },
  {path: 'inscription', component: InscriptionComponent}
];
