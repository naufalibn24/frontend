import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  users: (id: any) => `https://backends-petrus.herokuapp.com/api/user/` + id,
};

export interface RandomQuoteContext {
  // The quote's category: 'dev', 'explicit'...
  category: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetProfileService {
  constructor(private httpClient: HttpClient) {}

  // getData(): Observable<string> {
  //   return this.httpClient.get(routes.quote()).pipe(
  //     map((body: any) => body),
  //     catchError((err) => of(err))
  //   );
  // }

  getDataId(id: any): Observable<any> {
    return this.httpClient.get(routes.users(id)).pipe(
      map((body: any) => body),
      catchError((err) => of(err))
    );
  }
}
