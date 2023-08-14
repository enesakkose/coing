import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from '../state/auth/auth.state';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.store.selectSnapshot(AuthState.auth) === true) {
      return true;
    }else{
      this.router.navigate(['/auth']);
      return false;
    }
  }
}