import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/state/auth/auth.actions';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit{
  isSending = false
  user: FormGroup

  constructor(
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit(){
    this.isSending = true
    console.log(this.user.value, this.user.valid)
    new Promise(() => {
      setTimeout(() => {
        this.isSending = false;
        this.store.dispatch(new Login(this.user.value.username))
        this.user.reset();
        this.router.navigate(['/'])
      }, 5000);
    });
  }
}
