import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {AuthService} from '../../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/connexion']);
      return false;
    }

    const role = this.authService.getRole();
    if (role === 'ETUDIANT' && (state.url === '/etudiants' || state.url === '/jury-soutenance')) {
      this.router.navigate(['/acceuil']);
      return false;
    }

    return true;
  }
}
