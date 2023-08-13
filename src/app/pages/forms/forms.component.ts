import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { type Coin } from 'src/app/types/coin';
import { type ReqCoinForm } from 'src/app/types/coinForm';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  coins: Coin[] = []
  isSending = false;
  isSuccess = false;
  coinForm: any = {
    name: '',
    surname: '',
    coin: '',
    phone: '',
    email: '',
    request: '',
    selectedCoin: ''
  };

  constructor(private coinService: CoinService) {}
  
  ngOnInit(): void {
    this.getAssets()
  }
  
  getAssets(){
    this.coinService.getAssets().subscribe(data => {
      this.coins = data.data.coins
    })
  }

  onSubmit(form) {
    this.isSending = true;
    new Promise(() => {
      setTimeout(() => {
        this.isSending = false;
        form.reset();
        this.isSuccess = true;
      }, 5000);
    });
    console.log(form.value, form.valid);
  }

  getNewForm() {
    this.isSuccess = false;
  }
}
