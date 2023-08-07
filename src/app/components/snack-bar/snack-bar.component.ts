import { Component, Input, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SnackbarState } from 'src/app/state/snackbar/snackbar.state';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit{
  @Select(SnackbarState.isOpen) isOpen$?: Observable<boolean>
  @Select(SnackbarState.message) message$?: Observable<string>

  ngOnInit(): void {
  }
}
