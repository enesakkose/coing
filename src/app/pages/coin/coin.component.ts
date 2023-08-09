import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';
import { type Coin } from 'src/app/types/coin';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  coin!: Coin

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  getAssetInfo(id: string){
    this.coinService.getAsssetInfo(id).subscribe(data => {
      this.coin = data.data.coin
    })
  }

  ngOnInit(){
    const paramId = this.route.snapshot.paramMap.get('id')
    this.getAssetInfo(paramId!)
    console.log(this.coin)
  }
}