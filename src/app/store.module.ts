import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SnackbarState } from './state/snackbar/snackbar.state';
import { FavoritesState } from './state/favorite/favorite.state';
import { ModalState } from './state/modal/modal.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      SnackbarState,
      FavoritesState,
      ModalState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: 'favorites'
    }),
  ]
})
export class StoreModule { }