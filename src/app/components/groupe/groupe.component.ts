import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupeService } from '../../services/groupe.service';
import { EtudiantService } from '../../services/etudiant.service';
import { Groupe } from '../../models/groupe.model';
import { Etudiant } from '../../models/etudiant.model';
import {AuthService} from '../../services/auth-service.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  groupes: Groupe[] = [];
  etudiantsSansGroupe: Etudiant[] = [];
  nouvelGroupe: Groupe = { nom: '', etudiants: [] };
  selectedEtudiant?: number;


  constructor(private groupeService: GroupeService, private etudiantService: EtudiantService, private authService: AuthService) {}

  ngOnInit(): void {
    this.chargerGroupes();
    this.chargerEtudiantsSansGroupe();
  }

  chargerGroupes(): void {
    this.groupeService.getAll().subscribe({
      next: (data) => {
        this.groupes = data.map(groupe => ({
          ...groupe,
          etudiants: groupe.etudiants || []
        }));
      },
      error: (err) => console.error(err),
    });
  }

  chargerEtudiantsSansGroupe(): void {
    this.etudiantService.getEtudiantsSansGroupe().subscribe({
      next: (data) => this.etudiantsSansGroupe = data,
      error: (err) => console.error(err),
    });
  }

  ajouterGroupe(): void {
    this.groupeService.create(this.nouvelGroupe).subscribe({
      next: () => {
        this.chargerGroupes();
        this.nouvelGroupe = { nom: '', etudiants: [] };
      },
      error: (err) => console.error(err),
    });
  }

  supprimerGroupe(id?: number): void {
    if (!id) return;
    this.groupeService.deleteGroupe(id).subscribe({
      next: () => {
        this.chargerGroupes();
        this.chargerEtudiantsSansGroupe();
      },
      error: (err) => console.error(err),
    });
  }


  ajouterEtudiantAuGroupe(groupeId: number, etudiantId: number): void {
    this.groupeService.addEtudiantToGroupe(groupeId, etudiantId).subscribe({
      next: () => {
        this.chargerGroupes();
        this.chargerEtudiantsSansGroupe();
      },
      error: (err) => console.error(err),
    });
  }

  estProf(): boolean{
      return this.authService.getRole() === 'PROF';
}


  retirerEtudiantDuGroupe(groupeId: number, etudiantId: number): void {
    this.groupeService.removeEtudiantFromGroupe(groupeId, etudiantId).subscribe({
      next: () => {
        this.chargerGroupes();
        this.chargerEtudiantsSansGroupe();
      },
      error: (err) => console.error(err),
    });
  }

  protected readonly Number = Number;
}
