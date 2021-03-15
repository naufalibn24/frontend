import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  kategori: () => `http://localhost:3000/api/kategori/`,
};

@Injectable({
  providedIn: 'root',
})
export class KategoriService {
  constructor(private httpClient: HttpClient) {}

  getKategori(): Observable<any> {
    return this.httpClient.get(routes.kategori()).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
