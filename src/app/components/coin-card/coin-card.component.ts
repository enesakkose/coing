import { Component, Input, OnInit } from '@angular/core';
import { type Coin } from 'src/app/types/coin';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent implements OnInit{
  coinChangeRate = false;
  
  @Input() coin!: Coin

  ngOnInit(): void {
    this.coinChangeRate = this.coin?.change?.includes('-') ? true : false;
  }
}
