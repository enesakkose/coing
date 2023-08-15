import { Injectable } from "@angular/core";
import { State, Action, StateContext, Selector } from "@ngxs/store";
import { CoinService } from "src/app/services/coin.service";
import { type Coin, BaseCoin, Coins } from "src/app/types/coin";
import { GetCoins, GetCoin } from "./coins.actions";
import { tap } from "rxjs/operators";

export interface CoinsStateModel{
  coins: Coins | undefined[]
  coin: BaseCoin | undefined
}

@State<CoinsStateModel>({
  name: 'coins',
  defaults: {
    coins: [],
    coin: null
  }
})
@Injectable()
export class CoinsState{
  constructor(private coinService: CoinService){}

  @Action(GetCoins)
  public getCoins({ setState }: StateContext<Pick<CoinsStateModel, 'coins'>>){
    return this.coinService.getAssets().pipe(tap(coins => {
      setState({ coins: coins })
    }))
  }
  
  @Action(GetCoin)
  public getCoin({setState}: StateContext<Pick<CoinsStateModel, 'coin'>>, action: GetCoin){
    return this.coinService.getAsssetInfo(action.id).pipe(tap(
      coin => { setState({ coin: coin })}
    ))
  }
}