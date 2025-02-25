import {Component, OnInit} from '@angular/core';
import {JurySoutenanceService} from '../../services/jurysoutenance.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-jurysoutenance',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './jurysoutenance.component.html',
  styleUrl: './jurysoutenance.component.css'
})

export class JurysoutenanceComponent implements OnInit {
  jurys: any[] = [];
  newJury = { soutenance: { idSoutenance: 1 }, personne: { idPersonne: 2 } };

  constructor(private juryService: JurySoutenanceService) { }

  ngOnInit(): void {
    this.loadJury();
  }

  loadJury(): void {
    this.juryService.getAllJury().subscribe(data => {
      this.jurys = data;
    });
  }

  addJury(): void {
    this.juryService.addJury(this.newJury).subscribe(() => {
      this.loadJury();
    });
  }

  deleteJury(id: number): void {
    this.juryService.deleteJury(id).subscribe(() => {
      this.loadJury();
    });
  }
}

