import { Component, OnInit } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  imports: [
    CommonModule,
    FormsModule,
    NgForOf
  ],
  styleUrls: ['./admin.component.css']
})



export class AdminComponent implements OnInit {
  personnes: any[] = [];
  newPerson = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: 'ETUDIANT'
  };

  constructor(private adminService: AdminService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadPersonnes();
  }

  loadPersonnes(): void {
    this.adminService.getAllPersonnes().subscribe(data => {
      this.personnes = data;
    });
  }

  addPerson(): void {
    this.adminService.addPerson(this.newPerson).subscribe(() => {
      this.loadPersonnes();
      this.newPerson = { nom: '', prenom: '', email: '', password: '', role: 'ETUDIANT' };
    });
  }

  deletePerson(id: number): void {
    this.adminService.deletePerson(id).subscribe(() => {
      this.loadPersonnes();
    });
  }

  updateRole(id: number, newRole: string): void {
    this.adminService.updateRole(id, newRole).subscribe(() => {
      this.loadPersonnes();
    });
  }

  estAdmin(): boolean {
    return this.authService.getRole() === 'ADMIN';
  }
}
