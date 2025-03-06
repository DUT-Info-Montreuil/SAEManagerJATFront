import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../../services/etudiant.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ajouter-note',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-note.component.html',
  styleUrls: ['./ajouter-note.component.css']
})
export class AjouterNoteComponent {
  etudiantId!: number;
  note = { valeur: '', matiere: '', attribuePar: '', commentaire: '' };

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit() {
    this.etudiantId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ajouterNote() {
    this.etudiantService.ajouterNoteAEtudiant(this.etudiantId, this.note).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
