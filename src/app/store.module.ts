import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { SnackbarState } from './state/snackbar/snackbar.state';


@NgModule({
  imports: [
    NgxsModule.forRoot([
      SnackbarState
    ])
  ]
})
export class StoreModule { }

//This module use for state store , you can create an state and then add related state to here for use on the application
//actions should create and then related action have to create with states snackbar için