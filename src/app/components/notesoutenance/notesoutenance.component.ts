import { Component, OnInit } from '@angular/core';
import { NoteSoutenanceService } from '../../services/notesoutenance.service';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth-service.service';
import { SoutenanceService } from '../../services/soutenance.service';
import { GroupeService } from '../../services/groupe.service';
import {NavbarSoutenanceComponent} from '../navbar-soutenance/navbar-soutenance.component';

@Component({
  selector: 'app-notesoutenance',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NavbarSoutenanceComponent
  ],
  templateUrl: './notesoutenance.component.html',
  styleUrl: './notesoutenance.component.css'
})
export class NotesoutenanceComponent implements OnInit {
  notes: any[] = [];
  soutenances: any[] = [];
  groupes: any[] = [];

  newNote = {
    soutenance: { idSoutenance: null },
    groupe: { idGroupe: null },
    note: null
  };

  constructor(
    private notesService: NoteSoutenanceService,
    private soutenanceService: SoutenanceService,
    private groupeService: GroupeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadNotes();
    this.loadSoutenances();
    this.loadGroupes();
  }

  loadNotes(): void {
    this.notesService.getAllNotes().subscribe(data => {
      this.notes = data;
    });
  }

  loadSoutenances(): void {
    this.soutenanceService.getAllSoutenances().subscribe(data => {
      this.soutenances = data;
    });
  }

  loadGroupes(): void {
    this.groupeService.getAll().subscribe(data => {
      this.groupes = data;
    });
  }

  addNote(): void {
    this.notesService.addNote(this.newNote).subscribe(() => {
      this.loadNotes();
      this.newNote = { soutenance: { idSoutenance: null }, groupe: { idGroupe: null }, note: null };
    });
  }

  removeNote(id: number): void {
    this.notesService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
  }
}
