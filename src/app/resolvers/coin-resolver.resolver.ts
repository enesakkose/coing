import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { type Coin } from '../types/coin';
import { CoinService } from '../services/coin.service';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoinResolver implements Resolve<Observable<Coin>> {
  constructor(private coinService: CoinService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const coinId = route.paramMap.get('id');

    return this.coinService.getAsssetInfo(coinId);
  }
}
