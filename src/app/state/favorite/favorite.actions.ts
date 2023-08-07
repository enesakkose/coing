import { type Coin } from 'src/app/types/coin';

export class AddFavorite {
  static readonly type = '[Favorite] add favorite';
  constructor(public coin: Coin) {}
}

export class RemoveFavorite {
  static readonly type = '[Favorite] remove favorite';
  constructor(public id: string) {}
}
