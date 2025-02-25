import {Component, OnInit} from '@angular/core';
import {PassageSoutenanceService} from '../../services/passagesoutenance.service';
import {DatePipe, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-passagesoutenance',
  imports: [
    DatePipe,
    FormsModule,
    NgForOf
  ],
  templateUrl: './passagesoutenance.component.html',
  styleUrl: './passagesoutenance.component.css'
})


export class PassagesoutenanceComponent implements OnInit {
  passages: any[] = [];
  newPassage = { soutenance: { idSoutenance: 1 }, etudiant: { idPersonne: 3 }, groupe: { idGroupe: 5 }, date: '' };

  constructor(private passageService: PassageSoutenanceService) { }

  ngOnInit(): void {
    this.loadPassages();
  }

  loadPassages(): void {
    this.passageService.getAllPassages().subscribe(data => {
      this.passages = data;
    });
  }

  addPassage(): void {
    this.passageService.addPassage(this.newPassage).subscribe(() => {
      this.loadPassages();
    });
  }

  deletePassage(id: number): void {
    this.passageService.deletePassage(id).subscribe(() => {
      this.loadPassages();
    });
  }
}

