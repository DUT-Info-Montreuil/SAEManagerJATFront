import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupeService } from '../../services/groupe.service';
import { PersonneService } from '../../services/personne.service';
import { Groupe } from '../../models/groupe.model';
import { Personne } from '../../models/personne.model';
import { AuthService } from '../../services/auth-service.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  groupes: Groupe[] = [];
  personnesSansGroupe: Personne[] = [];
  nouvelGroupe: Groupe = { nom: '', personnes: [] };
  selectedPersonne?: number;

  constructor(
    private groupeService: GroupeService,
    private personneService: PersonneService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerGroupes();
    this.chargerPersonnesSansGroupe();
  }

  chargerGroupes(): void {
    this.groupeService.getAll().subscribe({
      next: (data) => {
        this.groupes = data.map(groupe => ({
          ...groupe,
          personnes: groupe.personnes || []
        }));
      },
      error: (err) => console.error(err),
    });
  }

  chargerPersonnesSansGroupe(): void {
    this.personneService.getPersonnesSansGroupe().subscribe({
      next: (data) => this.personnesSansGroupe = data,
      error: (err) => console.error(err),
    });
  }

  ajouterGroupe(): void {
    this.groupeService.create(this.nouvelGroupe).subscribe({
      next: () => {
        this.chargerGroupes();
        this.nouvelGroupe = { nom: '', personnes: [] };
      },
      error: (err) => console.error(err),
    });
  }

  supprimerGroupe(id?: number): void {
    if (!id) return;
    this.groupeService.deleteGroupe(id).subscribe({
      next: () => {
        this.chargerGroupes();
        this.chargerPersonnesSansGroupe();
      },
      error: (err) => console.error(err),
    });
  }

  ajouterPersonneAuGroupe(groupeId: number, personneId: number): void {
    this.groupeService.addPersonneToGroupe(groupeId, personneId).subscribe({
      next: () => {
        this.chargerGroupes();
        this.chargerPersonnesSansGroupe();
      },
      error: (err) => console.error(err),
    });
  }

  retirerPersonneDuGroupe(groupeId: number, personneId: number): void {
    this.groupeService.removePersonneFromGroupe(groupeId, personneId).subscribe({
      next: () => {
        this.chargerGroupes();
        this.chargerPersonnesSansGroupe();
      },
      error: (err) => console.error(err),
    });
  }

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
  }

  protected readonly Number = Number;
}
