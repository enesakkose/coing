import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { OpenModal, CloseModal } from "./modal.actions";

export interface ModalStateModel{
  isOpen: boolean
  modal: string
}

@State<ModalStateModel>({
  name: 'modal',
  defaults: {
    isOpen: false,
    modal: ''
  }
})
@Injectable()
export class ModalState{
  @Action(OpenModal)
  showModal({patchState}: StateContext<ModalStateModel>, {modal}: OpenModal){
    patchState({
      isOpen: true,
      modal: modal
    })
  }
  @Action(CloseModal)
  closeModal({patchState}: StateContext<ModalStateModel>){
    patchState({
      isOpen: false,
      modal: ''
    })
  }

  @Selector()
  public static isOpen({isOpen}: ModalStateModel){
    return isOpen
  }
  @Selector()
  public static modalName({modal}: ModalStateModel){
    return modal
  }
}