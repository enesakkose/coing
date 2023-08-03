import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  links = [
    { label: 'Coins', path: '/' },
    { label: 'Favorites', path: '/favorites' },
    { label: 'List', path: '/list' },
    { label: 'Forms', path: '/forms'}
  ];
}
