import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FavoritesState } from 'src/app/state/favorite/favorite.state';
import { type Coin } from 'src/app/types/coin';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  @Select(FavoritesState.favorites) favorites$?: Observable<Coin[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.favorites$?.subscribe(e => console.log(e))
  }
}