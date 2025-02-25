import { Component, OnInit } from '@angular/core';
import { SaeService } from '../../services/sae.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-saes',
  templateUrl: './sae.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./sae.component.css']
})
export class SaeComponent implements OnInit {
  saes: any[] = [];
  newSae = { nom: '', anneeUniversitaire: 2024, semestreUniversitaire: 1, sujet: '' };
  selectedSae: any = null;

  constructor(private saeService: SaeService) { }

  ngOnInit(): void {
    this.loadSaes();
  }

  loadSaes(): void {
    this.saeService.getAllSaes().subscribe(data => {
      this.saes = data;
    });
  }

  addSae(): void {
    this.saeService.addSae(this.newSae).subscribe(() => {
      console.log("ADD SAE")
      this.loadSaes();
      this.newSae = { nom: '', anneeUniversitaire: 2024, semestreUniversitaire: 1, sujet: '' };
    });
  }

  editSae(sae: any): void {
    this.selectedSae = { ...sae };
  }

  updateSae(): void {
    if (this.selectedSae) {
      this.saeService.updateSae(this.selectedSae.idSAE, this.selectedSae).subscribe(() => {
        this.loadSaes();
        this.selectedSae = null;
      });
    }
  }

  deleteSae(id: number): void {
    this.saeService.deleteSae(id).subscribe(() => {
      this.loadSaes();
    });
  }
}
