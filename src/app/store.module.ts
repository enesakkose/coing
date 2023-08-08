import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SnackbarState } from './state/snackbar/snackbar.state';
import { FavoritesState } from './state/favorite/favorite.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      SnackbarState,
      FavoritesState
    ]),
    NgxsStoragePluginModule.forRoot(),
  ]
})
export class StoreModule { }