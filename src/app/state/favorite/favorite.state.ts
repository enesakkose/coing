import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { AddFavorite, RemoveFavorite } from "./favorite.actions";
import { type Coin } from "src/app/types/coin";

export interface FavoritesStateModal{
  favorites: Coin[]
}

@State<FavoritesStateModal>({
  name: 'favorites',
  defaults: {
    favorites: JSON.parse(localStorage.getItem('favorites')!) || []
  }
})
@Injectable()
export class FavoritesState{
  @Action(AddFavorite)
  addFavorite({getState, patchState}: StateContext<FavoritesStateModal>, action: AddFavorite) {

    patchState({ favorites: [...getState().favorites, action.coin]})
  }

  @Action(RemoveFavorite)
  removeFavorite(ctx: StateContext<FavoritesStateModal>, action: RemoveFavorite) {
    const state = ctx.getState()

    ctx.patchState({
      ...state,
      favorites: state.favorites.filter(favCoin => favCoin.uuid !== action.id)
    })
  }

  @Selector()
  public static favorites({favorites}: FavoritesStateModal) {
    return favorites
  }
}
