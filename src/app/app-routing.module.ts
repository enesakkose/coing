import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FormsComponent } from './pages/forms/forms.component';
import { CoinComponent } from './pages/coin/coin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './services/auth.guard';
import { CoinResolver } from './resolvers/coin-resolver.resolver';
import { CoinInfoResolver } from './resolvers/coin-info.resolver';

const routes: Routes = [
  { path: '', component: CoinsComponent , resolve: { coin: CoinResolver }},
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard] },
  { path: 'list', component: ListComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'coin/:id', component: CoinComponent, resolve: { c: CoinInfoResolver } },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
