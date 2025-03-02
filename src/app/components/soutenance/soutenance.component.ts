import {Component, OnInit} from '@angular/core';
import {SoutenanceService} from '../../services/soutenance.service';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-soutenance',
  imports: [
    FormsModule,
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './soutenance.component.html',
  styleUrl: './soutenance.component.css'
})

export class SoutenanceComponent implements OnInit {
  soutenances: any[] = [];
  newSoutenance = { titre: '', salle: '', date: '', sae: { idSAE: 1 } };
  selectedSoutenance: any = null;


  constructor(private soutenanceService: SoutenanceService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadSoutenances();
  }

  loadSoutenances(): void {
    this.soutenanceService.getAllSoutenances().subscribe(data => {
      this.soutenances = data;
    });
  }

  addSoutenance(): void {
    this.soutenanceService.addSoutenance(this.newSoutenance).subscribe(() => {
      this.loadSoutenances();
      this.newSoutenance = { titre: '', salle: '', date: '', sae: { idSAE: 1 } };
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

