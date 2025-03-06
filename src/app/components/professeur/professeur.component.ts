import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {PersonneService} from '../../services/personne.service';

@Component({
  selector: 'app-professeur',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './professeur.component.html',
  styleUrl: './professeur.component.css'
})
export class ProfesseurComponent implements OnInit {
  professeurs: any[] = [];
  newProfessor = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    estProf: true,
    estAdmin: 0
  };

  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.loadProfessors();
  }

  loadProfessors(): void {
    this.personneService.getProfs().subscribe(data => {
      this.professeurs = data;
    });
  }

  addProfessor(): void {
    this.personneService.addProfessor(this.newProfessor).subscribe(() => {
      this.loadProfessors();
      this.newProfessor = { nom: '', prenom: '', email: '', password: '', estProf: true, estAdmin: 0 };
    });
  }

  deleteProfessor(id: number): void {
    this.personneService.deleteProfessor(id).subscribe(() => {
      this.loadProfessors();
    });
  }
}

