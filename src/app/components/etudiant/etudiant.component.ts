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

  etudiants: Etudiant[] = [];
  nouvelEtudiant = { id: null, nom: '', prenom: '', adresse: '' };

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit(): void {
    this.chargerEtudiants();
  }

  chargerEtudiants(): void {
    this.etudiantService.getAll().subscribe({
      next: (data) => this.etudiants = data,
      error: (err) => console.error(err),
    });
  }

  ajouterOuModifierEtudiant() {
    if (this.nouvelEtudiant.id) {
      this.etudiantService.update(this.nouvelEtudiant).subscribe(() => this.chargerEtudiants());
    } else {
      this.etudiantService.create(this.nouvelEtudiant).subscribe(() => this.chargerEtudiants());
    }
    this.nouvelEtudiant = { id: null, nom: '', prenom: '', adresse: '' };
  }

  modifierEtudiant(etu: any) {
    this.nouvelEtudiant = { ...etu };
  }

  supprimerEtudiant(id?: number): void {
    if (!id) return;
    this.etudiantService.delete(id).subscribe({
      next: () => this.chargerEtudiants(),
      error: (err) => console.error(err),
    });
  }

  ajouterNote(etudiantId: number) {
    this.router.navigate(['/ajouter-note', etudiantId]);
  }
}
