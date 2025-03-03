import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupeService } from '../../services/groupe.service';
import { EtudiantService } from '../../services/etudiant.service';
import { Groupe } from '../../models/groupe.model';
import { Etudiant } from '../../models/etudiant.model';
import {AuthService} from '../../services/auth-service.service';
import {SaeService} from '../../services/sae.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  groupes: any[] = [];
  saes: any[] = [];
  nouvelGroupe: any = {};
  selectedSaeId: number | null = null;
  etudiantsSansGroupe: any[] = [];
  selectedEtudiant: number | null = null;

  constructor(private groupeService: GroupeService, private etudiantService: EtudiantService, private authService: AuthService,  private saeService: SaeService) {}

  ngOnInit(): void {
    this.chargerGroupes();
    this.chargerEtudiantsSansGroupe();
    this.getGroupes();
    this.getSAEs();
  }

  getGroupes(): void {
    this.groupeService.getGroupes().subscribe(data => {
      this.groupes = data;
    });
  }

  getSAEs(): void {
    this.saeService.getAllSAEs().subscribe(data => {
      this.saes = data;
    });
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
    if (this.nouvelGroupe.nom && this.selectedSaeId) {
      this.groupeService.createGroupe(this.nouvelGroupe, this.selectedSaeId).subscribe(groupe => {
        this.groupes.push(groupe);
        this.nouvelGroupe = {};
        this.selectedSaeId = null;
      });
    }
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
