import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  register: () => `https://backends-petrus.herokuapp.com/api/user/register`,
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  postRegister(data: any): Observable<string> {
    return this.httpClient.post(routes.register(), data).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
