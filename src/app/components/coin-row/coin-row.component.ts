import { Component, Input, OnInit } from '@angular/core';
import { type Coin } from 'src/app/types/coin';

@Component({
  selector: 'app-coin-row',
  templateUrl: './coin-row.component.html',
  styleUrls: ['./coin-row.component.scss'],
})
export class CoinRowComponent implements OnInit {
  @Input() coin?: Coin;

  coinChangeRate = false;

  constructor() {}

  ngOnInit(): void {
    this.coinChangeRate = this.coin?.change?.includes('-') ? true : false;
  }
}
