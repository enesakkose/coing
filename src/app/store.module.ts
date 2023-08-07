import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SnackbarState } from './state/snackbar/snackbar.state';
import { FavoritesState } from './state/favorite/favorite.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      SnackbarState,
      FavoritesState
    ])
  ]
})
export class StoreModule { }