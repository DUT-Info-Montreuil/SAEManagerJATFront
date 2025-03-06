import {Component, OnInit} from '@angular/core';
import {PassageSoutenanceService} from '../../services/passagesoutenance.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SoutenanceService} from '../../services/soutenance.service';
import {AuthService} from '../../services/auth-service.service';
import {GroupeService} from '../../services/groupe.service';
import {PersonneService} from '../../services/personne.service';
import {NavbarSoutenanceComponent} from '../navbar-soutenance/navbar-soutenance.component';

@Component({
  selector: 'app-passagesoutenance',
  imports: [
    DatePipe,
    FormsModule,
    NgForOf,
    NgIf,
    NavbarSoutenanceComponent
  ],
  templateUrl: './passagesoutenance.component.html',
  styleUrl: './passagesoutenance.component.css'
})


export class PassagesoutenanceComponent implements OnInit {
  passages: any[] = [];
  soutenances: any[] = [];
  etudiants: any[] = [];
  groupes: any[] = [];

  newPassage = {
    soutenance: { idSoutenance: null },
    eleve: { idPersonne: null },
    groupe: { idGroupe: null },
    date : null
  };

  constructor(
    private passageService: PassageSoutenanceService,
    private soutenanceService: SoutenanceService,
    private personneService: PersonneService,
    private groupeService: GroupeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPassages();
    this.loadSoutenances();
    this.loadGroupes();
    this.loadStudents();
  }

  loadPassages(): void {
    this.passageService.getAllPassages().subscribe(data => {
      this.passages = data;
    });
  }

  loadSoutenances(): void {
    this.soutenanceService.getAllSoutenances().subscribe(data => {
      this.soutenances = data;
    });
  }



  loadGroupes(): void {
    this.groupeService.getAll().subscribe(data => {
      this.groupes = data;
    });
  }

  addPassage(): void {
    this.passageService.addPassage(this.newPassage).subscribe(() => {
      this.loadPassages();
      this.newPassage = { soutenance: { idSoutenance: null }, eleve: { idPersonne: null }, groupe: { idGroupe: null }, date: null };
    });
  }

  loadStudents(): void {
    this.personneService.getEtuds().subscribe(data => {
      this.etudiants = data;
    });
  }

  removePassage(id: number): void {
    this.passageService.deletePassage(id).subscribe(() => {
      this.loadPassages();
    });
  }

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
  }
}
