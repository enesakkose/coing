import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  id: string | null = ''

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  getAssetInfo(){
    this.coinService.getAsssetInfo(this.id!).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.getAssetInfo()
  }
}


//Edit by assetInfo and favorite with global state