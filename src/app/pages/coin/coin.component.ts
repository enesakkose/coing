import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { type Coin } from 'src/app/types/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
  coin: Coin;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.coin = this.route.snapshot.data.c.coin.data.coin
  }

}
