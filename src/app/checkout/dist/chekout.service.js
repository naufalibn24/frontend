'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.CheckoutService = void 0;
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var routes = {
  url: function (id) {
    return 'http://localhost:3000/api/produks/' + id;
  },
  urlId: function (id) {
    return 'http://localhost:3000/api/produk/' + id;
  },
};
var CheckoutService = /** @class */ (function () {
  function CheckoutService(httpClient) {
    this.httpClient = httpClient;
  }
  CheckoutService.prototype.getProduk = function (id) {
    return this.httpClient.get(routes.url(id)).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  CheckoutService = __decorate(
    [
      core_1.Injectable({
        providedIn: 'root',
      }),
    ],
    CheckoutService
  );
  return CheckoutService;
})();
exports.CheckoutService = CheckoutService;
