import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from '../../../../src/app/services/etudiant.service';
import { Etudiant } from '../../../../src/app/models/etudiant.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  etudiants: Etudiant[] = [];


  nouvelEtudiant: Etudiant = {
    nom: '',
    prenom: '',
    adresse: ''
  };

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.chargerEtudiants();
  }

  chargerEtudiants(): void {
    this.etudiantService.getAll().subscribe({
      next: (data) => this.etudiants = data,
      error: (err) => console.error(err),
    });
  }

  ajouterEtudiant(): void {
    this.etudiantService.create(this.nouvelEtudiant).subscribe({
      next: () => {
        this.chargerEtudiants();
        this.nouvelEtudiant = { nom: '', prenom: '', adresse: '' };
      },
      error: (err) => console.error(err),
    });
  }

  supprimerEtudiant(id?: number): void {
    if (!id) return;
    this.etudiantService.delete(id).subscribe({
      next: () => this.chargerEtudiants(),
      error: (err) => console.error(err),
    });
  }
}
