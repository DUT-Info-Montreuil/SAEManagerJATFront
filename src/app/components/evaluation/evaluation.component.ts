import { Component, OnInit } from '@angular/core';
import { EvaluationService } from '../../services/evaluation.service';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import {PersonneService} from '../../services/personne.service';

@Component({
  selector: 'app-evaluation',
  imports: [
    FormsModule,
    NgForOf,
  ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.css'
})


export class EvaluationComponent implements OnInit {
  evaluations: any[] = [];
  profs: any[] = [];
  newEvaluation = {
    nom: '',
    coef: null,
    intervenantEvaluateur: { idPersonne: null }
  };

  constructor(private evaluationService: EvaluationService, private personneService:PersonneService) {}

  ngOnInit(): void {
    this.loadEvaluations();
  }

  loadEvaluations(): void {
    this.evaluationService.getAllEvaluations().subscribe(data => {
      this.evaluations = data;
    });
  }

  loadProfessors(): void {
    this.personneService.getProfs().subscribe(data => {
      this.profs = data;
    });
  }

  addEvaluation(): void {
    this.evaluationService.addEvaluation(this.newEvaluation).subscribe(() => {
      this.loadEvaluations();
      this.newEvaluation = { nom: '', coef: null, intervenantEvaluateur: { idPersonne: null } };
    });
  }



  deleteEvaluation(id: number): void {
    this.evaluationService.deleteEvaluation(id).subscribe(() => {
      this.loadEvaluations();
    });
  }
}
