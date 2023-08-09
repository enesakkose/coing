import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ModalState } from 'src/app/state/modal/modal.state';
import { CloseModal } from 'src/app/state/modal/modal.actions';
import { MODALS } from '../modals';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  currentModalName: string = null;
  modals = MODALS;

  @Select(ModalState.isOpen) isOpen$: Observable<boolean>;
  @Select(ModalState.modalName) modalName$: Observable<string>;

  ngOnInit(): void {
    this.modalName$.subscribe((name) => (this.currentModalName = name));
  }

  constructor(private store: Store) {}

  closeModal() {
    this.store.dispatch(new CloseModal());
  }
}
