import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { Login, Logout } from "./auth.actions";

export interface AuthStateModel{
  user: boolean
  username: string
}

@State<AuthStateModel>({
  name: 'auth',
  defaults:{
    user: false,
    username: null
  }
})
@Injectable()
export class AuthState{
  @Action(Login)
  login({patchState}: StateContext<AuthStateModel>, action: Login){
    patchState({ user: true, username: action.username})
  }

  @Action(Logout)
  logout({patchState}: StateContext<AuthStateModel>){
    patchState({ user: false, username: ''})
  }

  @Selector()
  public static auth({user}: AuthStateModel){
    return user
  }

}