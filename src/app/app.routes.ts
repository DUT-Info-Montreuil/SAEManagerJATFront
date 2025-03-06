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
import {AuthGuard} from './components/connexion/bloquepage.guard';
import {AjouterNoteComponent} from './components/ajouter-note/ajouter-note.component';
import {AdminService} from './services/admin.service';
import {EvaluationComponent} from './components/evaluation/evaluation.component';
import {ProfesseurComponent} from './components/professeur/professeur.component';
import {AdminComponent} from './components/admin/admin.component';




export const routes: Routes = [
  { path: 'acceuil', component: HomeComponent},
  { path: '', component: HomeComponent, pathMatch: "full"},
  { path: 'etudiants', component: EtudiantComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'evaluation', component: EvaluationComponent, canActivate: [AuthGuard] },
  { path: 'professeur', component: ProfesseurComponent, canActivate: [AuthGuard] },
  { path: 'ajouter-note/:id', component: AjouterNoteComponent },
  { path: 'soutenances', component: SoutenanceComponent, canActivate: [AuthGuard] },
  { path: 'passages-soutenance', component: PassagesoutenanceComponent, canActivate: [AuthGuard] },
  { path: 'notes-soutenance', component: NotesoutenanceComponent, canActivate: [AuthGuard] },
  { path: 'jury-soutenance', component: JurysoutenanceComponent, canActivate: [AuthGuard] },
  { path: 'saes', component: SaeComponent, canActivate: [AuthGuard] },
  { path: 'groupes', component: GroupeComponent, canActivate: [AuthGuard] },
  { path: 'connexion', component: ConnexionComponent },
  {path: 'inscription', component: InscriptionComponent}
];
