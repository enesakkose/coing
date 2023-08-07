import { Component, Input } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.scss']
})
export class FavBtnComponent {
  @Input() isFavorite = false
  
  constructor(private snackbarService: SnackbarService) {}

  toggleFav(){
    this.isFavorite = !this.isFavorite
    this.snackbarService.showSnackbar(`Coin ${this.isFavorite ? 'removed' : 'added'} your favorites`)
  }
}
//After Favorites added implemantation you should edit snackbar component by whether or not in the favorites global state 