import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from '../../../../src/app/services/etudiant.service';
import { Etudiant } from '../../../../src/app/models/etudiant.model';
import {Router} from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants: any[] = [];
  nouvelEtudiant: any = {};

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit(): void {
    this.chargerEtudiants();
    this.getEtudiants();

  }

  getEtudiants(): void {
    this.etudiantService.getAll().subscribe(data => this.etudiants = data);
  }

  chargerEtudiants(): void {
    this.etudiantService.getAll().subscribe({
      next: (data) => this.etudiants = data,
      error: (err) => console.error(err),
    });
  }

  ajouterOuModifierEtudiant(): void {
    if (this.nouvelEtudiant.id) {
      this.etudiantService.update(this.nouvelEtudiant).subscribe({
        next: () => {
          this.chargerEtudiants();
          this.nouvelEtudiant = { nom: '', prenom: '', adresse: '' };
        },
        error: (err) => console.error(err),
      });
    } else {
      this.etudiantService.create(this.nouvelEtudiant).subscribe({
        next: () => {
          this.chargerEtudiants();
          this.nouvelEtudiant = { nom: '', prenom: '', adresse: '' };
        },
        error: (err) => console.error(err),
      });
    }
  }

  modifierEtudiant(etu: Etudiant): void {
    this.nouvelEtudiant = { ...etu };
  }

  supprimerEtudiant(id?: number): void {
    if (!id) return;
    this.etudiantService.delete(id).subscribe({
      next: () => this.chargerEtudiants(),
      error: (err) => console.error(err),
    });
  }

  ajouterNote(etudiant: any): void {
    this.router.navigate(['/etudiants', etudiant.id, 'ajouter-note']);
  }
}
