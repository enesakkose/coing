import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from './store.module';
import {NgSelectModule} from '@ng-select/ng-select';

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
import { CoinCardComponent } from './components/coin-card/coin-card.component';
import { NavHeaderComponent } from './components/coin/nav-header/nav-header.component';
import { ModalComponent } from './components/modal/modal.component';
import { CoinInfoModalComponent } from './components/modals/coin-info-modal/coin-info-modal.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SuccesFormInfoComponent } from './components/succes-form-info/succes-form-info.component';
import { AuthComponent } from './pages/auth/auth.component';

//Services
import { CoinService } from './services/coin.service';
import { SnackbarService } from './services/snackbar.service';
import { LoadingService } from './services/loading.service';

//Pipes
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

//Directives
import { ClickOutsideDirective } from './directives/click-outside.directive';

//Interceptors
import { LoadingInterceptor } from './interceptors/loading.interceptor';
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
    CoinCardComponent,
    NavHeaderComponent,
    ModalComponent,
    CoinInfoModalComponent,
    ClickOutsideDirective,
    LoadingComponent,
    SuccesFormInfoComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [
    CoinService,
    SnackbarService,
    LoadingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
