import { Component, OnInit } from '@angular/core';
import { type Coin } from 'src/app/types/coin';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {
  assets: Coin[]
  
  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.assets = this.route.snapshot.data.coin[0].coins.data.coins
  }
}
