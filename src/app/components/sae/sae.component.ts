import { Component, OnInit } from '@angular/core';
import { SaeService } from '../../services/sae.service';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {AuthService} from '../../services/auth-service.service';
import { FichierDepot } from '../../models/fichierdepot.model';
import { Sae } from '../../models/sae.model';


@Component({
  selector: 'app-saes',
  templateUrl: './sae.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterModule 
  ],
  styleUrls: ['./sae.component.css']
})
export class SaeComponent implements OnInit {
  saes: any[] = [];
  fichiersDeposes: { [saeId: number]: FichierDepot[] } = {}; 
  newSae = { nom: '', anneeUniversitaire: 2024, semestreUniversitaire: 1, sujet: '' };
  selectedSae: any = null;
  selectedFile: File | null = null;
  uploadingSaeId: number | null = null;

  constructor(private saeService: SaeService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadSaes();
  }

  loadSaes(): void {
    this.saeService.getAllSaes().subscribe(data => {
      this.saes = data;
      this.saes.forEach(sae => this.loadFichiersDeposes(sae.idSAE!));
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

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
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

   loadFichiersDeposes(saeId: number): void {
    this.saeService.getFichiersDeposesBySAE(saeId).subscribe(files => {
      this.fichiersDeposes[saeId] = files;
    });
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
}
