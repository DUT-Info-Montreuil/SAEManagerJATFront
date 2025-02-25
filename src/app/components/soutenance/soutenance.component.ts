import {Component, OnInit} from '@angular/core';
import {SoutenanceService} from '../../services/soutenance.service';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-soutenance',
  imports: [
    FormsModule,
    DatePipe,
    NgForOf
  ],
  templateUrl: './soutenance.component.html',
  styleUrl: './soutenance.component.css'
})

export class SoutenanceComponent implements OnInit {
  soutenances: any[] = [];
  newSoutenance = { titre: '', salle: '', date: '', sae: { idSAE: 1 } };
  selectedSoutenance: any = null;

  constructor(private soutenanceService: SoutenanceService) { }

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

