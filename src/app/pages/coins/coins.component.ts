import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { type Coin } from 'src/app/types/coin';
@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  assets: Coin[] = []
  
  constructor (private coinService: CoinService) {}

  getAssets(){
    this.coinService.getAssets().subscribe(data => {
      this.assets = data.data.coins
    })
  }

  ngOnInit(): void {
    this.getAssets()
  }
}
