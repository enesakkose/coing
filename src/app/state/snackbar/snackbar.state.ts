import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ShowSnackbar } from './snackbar.actions';

export interface SnackbarStateModel{
  isOpen: boolean
  message: string
}

@State<SnackbarStateModel>({
  name: 'snackbar',
  defaults: {
    isOpen: false,
    message: ''
  }
})
@Injectable()
export class SnackbarState{
  @Action(ShowSnackbar)
  showSnackbar({ patchState }: StateContext<SnackbarStateModel>, {message}: ShowSnackbar){
    patchState({
      isOpen: true,
      message
    }),

    setTimeout(() => {
      patchState({
        isOpen: false,
      });
    }, 2000);
  }

  @Selector()
  public static isOpen({isOpen}: SnackbarStateModel) {
    return isOpen
  }
}
