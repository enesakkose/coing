import { ActivatedRouteSnapshot, Resolve, Route } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetCoin } from '../state/coins/coins.actions';
import { map } from 'rxjs/operators';
import { CoinsState } from '../state/coins/coins.state';

@Injectable({
  providedIn: 'root',
})
export class CoinInfoResolver implements Resolve<Observable<any>> {
  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const coinId = route.paramMap.get('id')
    
    return this.store.dispatch(new GetCoin(coinId)).pipe(
      map(() => this.store.selectSnapshot(CoinsState))
    )
  }
}
