'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.QuoteService = void 0;
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var routes = {
  quote: function () {
    return 'http://localhost:3000/api/produk';
  },
  sell: function (id) {
    return 'http://localhost:3000/api/pesanan/' + id;
  },
  carousell: function () {
    return 'http://localhost:3000/api/carousell';
  },
};
var httpOptions = {
  headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' }),
};
var QuoteService = /** @class */ (function () {
  function QuoteService(httpClient) {
    this.httpClient = httpClient;
  }
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
  QuoteService.prototype.getProduk = function () {
    return this.httpClient.get(routes.quote()).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  QuoteService.prototype.postSell = function (id, data) {
    return this.httpClient.post(routes.sell(id), data, httpOptions).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  QuoteService.prototype.getCarousell = function () {
    return this.httpClient.get(routes.carousell()).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  QuoteService = __decorate(
    [
      core_1.Injectable({
        providedIn: 'root',
      }),
    ],
    QuoteService
  );
  return QuoteService;
})();
exports.QuoteService = QuoteService;
