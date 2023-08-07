import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from './store.module';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoinsComponent } from './pages/coins/coins.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ListComponent } from './pages/list/list.component';
import { CoinsHeadComponent } from './components/coins-head/coins-head.component';
import { CoinRowComponent } from './components/coin-row/coin-row.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { FavBtnComponent } from './components/fav-btn/fav-btn.component';
import { CoinComponent } from './pages/coin/coin.component';

//Services
import { CoinService } from './services/coin.service';
import { SnackbarService } from './services/snackbar.service';

//Pipes
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

//States
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinsComponent,
    FavoritesComponent,
    FormsComponent,
    ListComponent,
    CoinRowComponent,
    CurrencyFormatPipe,
    CoinsHeadComponent,
    FavBtnComponent,
    SnackBarComponent,
    CoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule
  ],
  providers: [
    CoinService,
    SnackbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
