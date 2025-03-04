import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  note: any = {};
  etudiantId!: number;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.etudiantId = +this.route.snapshot.paramMap.get('id')!;
  }

  ajouterNote(): void {
    this.noteService.createNote(this.note, this.etudiantId).subscribe(() => {
      this.router.navigate(['/etudiants']);
    });
  }
}
