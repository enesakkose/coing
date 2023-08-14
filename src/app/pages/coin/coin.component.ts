import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';
import { Subscription } from 'rxjs';
import { type Coin } from 'src/app/types/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit, OnDestroy {
  coin!: Coin

  private coinSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  getAssetInfo(){

    this.coinSubscription = this.route.data.subscribe((data) => {
      this.coin = data.coin.data.coin
  });
  }

  ngOnInit(){
    this.getAssetInfo()
  }

  ngOnDestroy() {
    if (this.coinSubscription) {
        this.coinSubscription.unsubscribe();
    }
  }
}