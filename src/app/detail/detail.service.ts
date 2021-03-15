import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  detail: (id: any) => `http://localhost:3000/api/produk/` + id,
};

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  constructor(private httpClient: HttpClient) {}

  getDetailId(id: any): Observable<any> {
    return this.httpClient.get(routes.detail(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
