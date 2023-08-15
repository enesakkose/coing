import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Store } from '@ngxs/store';
import { GetCoins } from '../state/coins/coins.actions';
import { map, delay } from 'rxjs/operators';
import { CoinsState } from '../state/coins/coins.state';

@Injectable({
  providedIn: 'root',
})
export class CoinResolver implements Resolve<Observable<any>> {
  constructor(private store: Store) {}

  resolve(): Observable<any> {
    const req1 = this.store.dispatch(new GetCoins()).pipe(
      map(() => this.store.selectSnapshot(CoinsState))
    )
    const req2 = this.store.dispatch(new GetCoins()).pipe(
      delay(3000), // forkJoin denemesi için yapılmıştır.
      map(() => this.store.selectSnapshot(CoinsState))
    )
    return forkJoin([req1, req2])
  }
}
