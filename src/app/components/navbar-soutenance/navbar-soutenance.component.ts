import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar-soutenance',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar-soutenance.component.html',
  styleUrl: './navbar-soutenance.component.css'
})
export class NavbarSoutenanceComponent {

  constructor(private authService: AuthService, private router: Router) {}


  estProf():boolean{
    return this.authService.getRole() === 'PROF';
  }
}
