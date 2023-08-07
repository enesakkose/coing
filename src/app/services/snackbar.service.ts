import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { ShowSnackbar } from '../state/snackbar/snackbar.actions';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private store: Store) { }

  showSnackbar(message: string){
    this.store.dispatch(new ShowSnackbar(message))
  }
}
