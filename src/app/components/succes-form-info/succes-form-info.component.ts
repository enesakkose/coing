import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-succes-form-info',
  templateUrl: './succes-form-info.component.html',
  styleUrls: ['./succes-form-info.component.scss']
})
export class SuccesFormInfoComponent {
  @Input() infoText: string
}
