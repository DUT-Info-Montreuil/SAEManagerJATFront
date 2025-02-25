import { Component, OnInit } from '@angular/core';
import { RessourceService, Ressource } from '../services/ressources.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-ressources',
  standalone: true, 
  imports: [CommonModule, FormsModule,  RouterModule], 
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})


export class RessourceComponent implements OnInit {
  ressources: Ressource[] = [];
  searchText: string = '';

  constructor(private ressourceService: RessourceService) {}

  ngOnInit(): void {
    this.loadRessources();
  }

  loadRessources(): void {
    this.ressourceService.getAllRessources().subscribe(data => {
      this.ressources = data;
    });
  }

  // Filtrage en fonction du texte de recherche
  get filteredRessources(): Ressource[] {
    return this.ressources.filter(res => 
      res.nom.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
