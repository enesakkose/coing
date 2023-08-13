import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SnackbarState } from './state/snackbar/snackbar.state';
import { FavoritesState } from './state/favorite/favorite.state';
import { ModalState } from './state/modal/modal.state';
import { AuthState } from './state/auth/auth.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  imports: [
    NgxsModule.forRoot([
      SnackbarState,
      FavoritesState,
      ModalState,
      AuthState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: ['favorites', 'auth']
    }),
  ]
})
export class StoreModule { }