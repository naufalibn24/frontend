import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  get: (id: any) => `http://localhost:3000/api/pesanans/` + id,
  delete: (id: any) => `http://localhost:3000/api/pesanan/` + id,
  put: (id: any) => `http://localhost:3000/api/pesanan/` + id,
  post: (id: any) => `http://localhost:3000/api/detail/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  getCartId(id: any): Observable<any> {
    return this.httpClient.get(routes.get(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  deleteCartId(id: any): Observable<any> {
    return this.httpClient.delete(routes.delete(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  UpdateCartId(id: any, data: any): Observable<any> {
    return this.httpClient.put(routes.put(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }

  PostCheckoutId(id: any, data: any): Observable<any> {
    console.log('data', data);
    return this.httpClient.post(routes.post(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
