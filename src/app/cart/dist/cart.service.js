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
exports.CartService = void 0;
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var routes = {
  get: function (id) {
    return 'https://localhost:3000/api/pesanans/' + id;
  },
  delete: function (id) {
    return 'https://localhost:3000/api/pesanan/' + id;
  },
  put: function (id) {
    return 'https://localhost:3000/api/pesanan/' + id;
  },
  post: function (id) {
    return 'https://localhost:3000/api/detail/' + id;
  },
};
var CartService = /** @class */ (function () {
  function CartService(httpClient) {
    this.httpClient = httpClient;
  }
  CartService.prototype.getCartId = function (id) {
    return this.httpClient.get(routes.get(id)).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  CartService.prototype.deleteCartId = function (id) {
    return this.httpClient['delete'](routes['delete'](id)).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  CartService.prototype.UpdateCartId = function (id, data) {
    return this.httpClient.put(routes.put(id), data).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  CartService.prototype.PostCheckoutId = function (id, data) {
    console.log('data', data);
    return this.httpClient.post(routes.post(id), data).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  CartService = __decorate(
    [
      core_1.Injectable({
        providedIn: 'root',
      }),
    ],
    CartService
  );
  return CartService;
})();
exports.CartService = CartService;
