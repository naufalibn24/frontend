import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  quote: () => 'http://localhost:3000/api/produk',
  sell: (id: any) => `http://localhost:3000/api/pesanan/` + id,
  carousell: () => 'http://localhost:3000/api/carousell',
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private httpClient: HttpClient) {}

  // getRandomQuote(context: RandomQuoteContext): Observable<string> {
  //   return this.httpClient.get(routes.quote(context)).pipe(
  //     map((body: any) => body.value),
  //     catchError(() => of('Error, could not load joke :-('))
  //   );
  // }

  // getTest(): Observable<string> {
  //   return this.httpClient.get(routes.quote()).pipe(
  //     map((body: any) => body),
  //     catchError(() => of('Error, could not load joke :-('))
  //   );
  // }

  getProduk(): Observable<any> {
    return this.httpClient.get(routes.quote()).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }

  postSell(id: any, data: any): Observable<any> {
    return this.httpClient.post(routes.sell(id), data, httpOptions).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }

  getCarousell(): Observable<any> {
    return this.httpClient.get(routes.carousell()).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
