import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AddFavorite, RemoveFavorite } from 'src/app/state/favorite/favorite.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FavoritesState } from 'src/app/state/favorite/favorite.state';
import { Store, Select } from '@ngxs/store';
import { type Coin } from 'src/app/types/coin';

@Component({
  selector: 'app-fav-btn',
  templateUrl: './fav-btn.component.html',
  styleUrls: ['./fav-btn.component.scss']
})
export class FavBtnComponent implements OnInit {
  favoriteCoin = false
  isFavorite = false

  @Input() coin!: Coin
  @Select(FavoritesState.favorites) favorites$?: Observable<Coin[]>;
  
  constructor(
    private snackbarService: SnackbarService,
    private store: Store
  ) {}

  toggleFav(){
    this.isFavorite = !this.isFavorite
    this.snackbarService.showSnackbar(`Coin ${this.isFavorite ? 'added' : 'removed'} your favorites`)
    this.store.dispatch(this.isFavorite ? new AddFavorite(this.coin) : new RemoveFavorite(this.coin.uuid))
  }

  ngOnInit(): void {
    this.favorites$?.pipe(
      map((favorites) => favorites.find(f => f.uuid === this.coin.uuid))
    ).subscribe(targetCoin => {
      if(targetCoin){
        this.favoriteCoin = true
      } else {
        this.favoriteCoin = false
      }
    })
    this.isFavorite = this.favoriteCoin
  }
}