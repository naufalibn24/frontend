import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  url: (id: any) => `http://localhost:3000/api/produks/` + id,
  urlId: (id: any) => `http://localhost:3000/api/produk/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class ProdukService {
  constructor(private httpClient: HttpClient) {}

  getProduk(id: any): Observable<any> {
    return this.httpClient.get(routes.url(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
