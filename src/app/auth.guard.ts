import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const userType = sessionStorage.getItem('userType');

    // Check if the path is 'employee' and userType is 'employee'
    if (route.routeConfig?.path === 'employee' && userType === 'employee') {
      return true;
    }

    // Check if the path is 'manager' and userType is 'manager'
    if (route.routeConfig?.path === 'manager' && userType === 'manager') {
      return true;
    }

    // Check if the path is 'hr' and userType is 'admin'
    if(route.routeConfig?.path === 'hr' && userType === 'admin'){
      return true;
    }

    // If the userType is not valid, redirect to login or home
    this.router.navigate(['/']);
    return false;
  }
}
