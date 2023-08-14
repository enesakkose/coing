import { Injectable } from '@angular/core';
import { Login, Logout } from '../state/auth/auth.actions';
import { Observable, of } from 'rxjs';
import { Store } from '@ngxs/store';
import { tap, delay } from 'rxjs/operators';
import { Select } from '@ngxs/store';
import { AuthState } from '../state/auth/auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  @Select(AuthState.auth) user$: Observable<boolean>  
  redirectUrl: string | null = null;

  constructor(private store: Store){}

  login() {
    this.user$.subscribe(userIsAuthenticated => {
      return userIsAuthenticated
    });
  }

  logout(){
    this.user$
  }
}