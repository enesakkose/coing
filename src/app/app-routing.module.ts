import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FormsComponent } from './pages/forms/forms.component';
import { CoinComponent } from './pages/coin/coin.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: '', component: CoinsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'list', component: ListComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'coin/:id', component: CoinComponent },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
