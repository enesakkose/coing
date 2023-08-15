export class GetCoins {
  public static readonly type = '[Coins] Get coins';
}

export class GetCoin {
  public static readonly type = '[Coin] Get coin';
  constructor(public id: string) {}
}
