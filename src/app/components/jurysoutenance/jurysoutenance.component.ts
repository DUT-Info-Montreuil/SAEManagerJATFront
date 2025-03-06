import {Component, OnInit} from '@angular/core';
import {JurySoutenanceService} from '../../services/jurysoutenance.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {SoutenanceService} from '../../services/soutenance.service';
import {AuthService} from '../../services/auth-service.service';
import {PersonneService} from '../../services/personne.service';
import {NavbarSoutenanceComponent} from '../navbar-soutenance/navbar-soutenance.component';

@Component({
  selector: 'app-jurysoutenance',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NavbarSoutenanceComponent
  ],
  templateUrl: './jurysoutenance.component.html',
  styleUrl: './jurysoutenance.component.css'
})


export class JurysoutenanceComponent implements OnInit {
  jurys: any[] = [];
  soutenances: any[] = [];
  profs: any[] = [];

  newJury = {
    soutenance: { idSoutenance: null },
    personne: { idPersonne: null }
  };

  constructor(
    private juryService: JurySoutenanceService,
    private soutenanceService: SoutenanceService,
    private personneService: PersonneService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadJurys();
    this.loadSoutenances();
    this.loadProfessors();
  }

  loadJurys(): void {
    this.juryService.getAllJury().subscribe(data => {
      this.jurys = data;
    });
  }

  loadSoutenances(): void {
    this.soutenanceService.getAllSoutenances().subscribe(data => {
      this.soutenances = data;
    });
  }

  loadProfessors(): void {
    this.personneService.getProfs().subscribe(data => {
      this.profs = data;
    });
  }


  addJury(): void {
    this.juryService.addJury(this.newJury).subscribe(() => {
      this.loadJurys();
      this.newJury = { soutenance: { idSoutenance: null }, personne: { idPersonne: null } };
    });
  }

  removeJury(id: number): void {
    this.juryService.deleteJury(id).subscribe(() => {
      this.loadJurys();
    });
  }

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
  }
}
