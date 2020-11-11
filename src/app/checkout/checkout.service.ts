import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  get: (id: any) => `https://backends-petrus.herokuapp.com/api/detail/` + id,
  post: () => `https://backends-petrus.herokuapp.com/api/alamats`,
  getAlamat: (id: any) =>
    `https://backends-petrus.herokuapp.com/api/alamat/` + id,
  put: (id: any) => `https://backends-petrus.herokuapp.com/api/details/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private httpClient: HttpClient) {}

  getCheckoutId(id: any): Observable<any> {
    return this.httpClient.get(routes.get(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }

  postAlamat(data: any): Observable<any> {
    return this.httpClient.post(routes.post(), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  getAlamat(id: any): Observable<any> {
    return this.httpClient.get(routes.getAlamat(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
  putCheckoutId(id: any, data: any): Observable<any> {
    console.log('xxx', data);
    return this.httpClient.put(routes.put(id), data).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
