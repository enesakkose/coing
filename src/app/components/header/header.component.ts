import { Component } from '@angular/core';
import { AuthState } from 'src/app/state/auth/auth.state';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Logout } from 'src/app/state/auth/auth.actions';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpenAvatarMenu = false
  isLogout = false

  @Select(AuthState.auth) user$: Observable<boolean>;
  @Select(AuthState.username) username$: Observable<boolean>;

  links = [
    { label: 'Coins', path: '/' },
    { label: 'Favorites', path: '/favorites' },
    { label: 'List', path: '/list' },
    { label: 'Forms', path: '/forms'}
  ];

  constructor(private store: Store, private router: Router){}


  openAvatarMenu(){
    this.isOpenAvatarMenu = !this.isOpenAvatarMenu
  }

  logout(){
    this.isLogout = true
    new Promise(() => {
      setTimeout(() => {
        this.isLogout = false;
        this.store.dispatch(new Logout())
        this.router.navigate(['/'])
      }, 5000);
    });
  }
}
