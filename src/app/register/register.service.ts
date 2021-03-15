import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  register: () => `http://localhost:3000/api/user/register`,
};

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  postRegister(data: any): Observable<string> {
    console.log(data);
    return this.httpClient.post(routes.register(), data).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load joke :-('))
    );
  }
}
