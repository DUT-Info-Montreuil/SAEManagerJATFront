import {Component, OnInit} from '@angular/core';
import {NoteSoutenanceService} from '../../services/notesoutenance.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-notesoutenance',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './notesoutenance.component.html',
  styleUrl: './notesoutenance.component.css'
})

export class NotesoutenanceComponent implements OnInit {
  notes: any[] = [];
  newNote = { soutenance: { idSoutenance: 1 }, etudiant: { idPersonne: 3 }, note: 0 };
  selectedNote: any = null;

  constructor(private noteService: NoteSoutenanceService) { }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.noteService.getAllNotes().subscribe(data => {
      this.notes = data;
    });
  }

  addNote(): void {
    this.noteService.addNote(this.newNote).subscribe(() => {
      this.loadNotes();
    });
  }

  editNote(note: any): void {
    this.selectedNote = { ...note };
  }

  updateNote(): void {
    if (this.selectedNote) {
      this.noteService.updateNote(this.selectedNote.idNote, this.selectedNote).subscribe(() => {
        this.loadNotes();
        this.selectedNote = null;
      });
    }
  }

  deleteNote(id: number): void {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }
}

