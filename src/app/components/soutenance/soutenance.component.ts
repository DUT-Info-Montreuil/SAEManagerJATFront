import { Component, OnInit } from '@angular/core';
import { SoutenanceService } from '../../services/soutenance.service';
import { AuthService } from '../../services/auth-service.service';
import { SaeService } from '../../services/sae.service';
import { EvaluationService } from '../../services/evaluation.service';
import { FormsModule } from '@angular/forms';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import {NavbarSoutenanceComponent} from '../navbar-soutenance/navbar-soutenance.component';

@Component({
  selector: 'app-soutenance',
  imports: [
    FormsModule,
    DatePipe,
    NgForOf,
    NgIf,
    NavbarSoutenanceComponent
  ],
  templateUrl: './soutenance.component.html',
  styleUrl: './soutenance.component.css'
})
export class SoutenanceComponent implements OnInit {
  soutenances: any[] = [];
  saes: any[] = [];
  evaluations: any[] = [];

  newSoutenance = {
    titre: '',
    salle: '',
    date: '',
    sae: { idSAE: null },
    evaluation: { idEvaluation: null }
  };
  selectedSoutenance: any = null;

  constructor(
    private soutenanceService: SoutenanceService,
    private authService: AuthService,
    private saeService: SaeService,
    private evaluationService: EvaluationService
  ) { }

  ngOnInit(): void {
    this.loadSoutenances();
    this.loadSaes();
    this.loadEvaluations();
  }

  loadSoutenances(): void {
    this.soutenanceService.getAllSoutenances().subscribe(data => {
      this.soutenances = data;
    });
  }

  loadSaes(): void {
    this.saeService.getAllSaes().subscribe(data => {
      this.saes = data;
    });
  }

  loadEvaluations(): void {
    this.evaluationService.getAllEvaluations().subscribe(data => {
      this.evaluations = data;
    });
  }

  addSoutenance(): void {
    this.soutenanceService.addSoutenance(this.newSoutenance).subscribe(() => {
      this.loadSoutenances();
      this.newSoutenance = { titre: '', salle: '', date: '', sae: { idSAE: null }, evaluation: { idEvaluation: null } };
    });
  }

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
  }

  editSoutenance(soutenance: any): void {
    this.selectedSoutenance = { ...soutenance };
  }

  updateSoutenance(): void {
    if (this.selectedSoutenance) {
      this.soutenanceService.updateSoutenance(this.selectedSoutenance.idSoutenance, this.selectedSoutenance).subscribe(() => {
        this.loadSoutenances();
        this.selectedSoutenance = null;
      });
    }
  }

  deleteSoutenance(id: number): void {
    this.soutenanceService.deleteSoutenance(id).subscribe(() => {
      this.loadSoutenances();
    });
  }
}
