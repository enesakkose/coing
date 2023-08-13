import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { type Coins, BaseCoin } from '../types/coin';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  private readonly API_URL = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=3h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0'
  private readonly headers = new HttpHeaders({
    'X-RapidAPI-Key': 'a1080941e0msh61eed144007ab0cp10d97ajsn4ed9d98415c8',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  })
  
  constructor(private http: HttpClient) { }
  
  getAssets(): Observable<Coins> {
    return this.http.get<Coins>(this.API_URL, {headers: this.headers})
  }  
  
  getAsssetInfo(assetId: string): Observable<BaseCoin>{
    const ASSET_INFO_URL = `https://coinranking1.p.rapidapi.com/coin/${assetId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h`

    return this.http.get<BaseCoin>(ASSET_INFO_URL, {headers: this.headers})
  } 
}
