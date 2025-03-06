import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SaeService } from '../../services/sae.service';
import { Sae } from '../../models/sae.model';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AuthService} from '../../services/auth-service.service';
import { FichierDepot } from '../../models/fichierdepot.model';


@Component({
  selector: 'app-detail-sae',
  templateUrl: './detail-sae.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    RouterModule,
    CommonModule
  ],
  styleUrls: ['./detail-sae.component.css'],
})
export class DetailSaeComponent implements OnInit {
  sae: Sae | null = null;
  fichiersDeposes: FichierDepot[] = [];
  selectedFile: File | null = null;
  uploading = false;

  constructor(
    private route: ActivatedRoute,
    private saeService: SaeService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadSaeDetails();
  }

  loadSaeDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.saeService.getSaeById(id).subscribe(data => {
        this.sae = data;
        this.loadFichiersDeposes(id);
      });
    }
  }

  estProf(): boolean {
    return this.authService.getRole() === 'PROF';
  }

  loadFichiersDeposes(saeId: number): void {
    this.saeService.getFichiersDeposesBySAE(saeId).subscribe(files => {
      this.fichiersDeposes = files;
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addFichierDepotToSae(): void {
    if (this.selectedFile && this.sae) {
      const reader = new FileReader();
      reader.readAsArrayBuffer(this.selectedFile);
      reader.onload = () => {
        const personneId = localStorage.getItem('id_user');
        const groupeId = localStorage.getItem('id_groupe'); // Ajout du groupeId

        console.log("personneId existe :", personneId ? true : false, "Valeur :", personneId);
        console.log("groupeId existe :", groupeId ? true : false, "Valeur :", groupeId);
        
        const fichierDepot: any = {
          nomFichier: this.selectedFile!.name,
          fichierData: new Uint8Array(reader.result as ArrayBuffer),
          dateDepot: new Date().toISOString(),
          personne: personneId ? { id: personneId } : null,
          groupe: groupeId ? { id: groupeId } : null  // Ajout de la gestion du groupe
        };
  
        this.uploading = true;
        if (this.sae?.idSAE)
          this.saeService.addFichierDepotToSAE(this.sae.idSAE!, fichierDepot).subscribe(() => {
            this.loadFichiersDeposes(this.sae!.idSAE!);
            this.uploading = false;
            this.selectedFile = null;
          });
      };
    }
  }
  
}
