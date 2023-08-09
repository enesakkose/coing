import { Component, Input } from '@angular/core';
import { OpenModal } from 'src/app/state/modal/modal.actions';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent {
  @Input() title: string
  @Input() imgSrc: string

  constructor(private store: Store){}

}
