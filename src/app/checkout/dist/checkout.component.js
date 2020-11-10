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
exports.CheckoutComponent = void 0;
var core_1 = require('@angular/core');
var http_1 = require('@angular/common/http');
var CheckoutComponent = /** @class */ (function () {
  function CheckoutComponent(checkoutservice, route) {
    this.checkoutservice = checkoutservice;
    this.route = route;
    this.alamat = {};
    this.alamats = {};
  }
  CheckoutComponent.prototype.ngOnInit = function () {
    var _this = this;
    var userId = localStorage.getItem('userId');
    this.checkoutservice.getCheckoutId(userId).subscribe(function (result) {
      if (result instanceof http_1.HttpErrorResponse) {
        if (result.status === 401) {
          _this.route.navigate(['/login']);
        }
      } else {
        console.log('result', result.data);
        _this.checkouts = result.data;
        _this.totals = result.jumlah;
      }
    });
  };
  CheckoutComponent.prototype.postAlamat = function () {
    var _this = this;
    var userId = localStorage.getItem('userId');
    this.checkoutservice.postAlamat(this.alamat).subscribe(function (result) {
      if (result.status === true) {
        var id = result.data._id;
        _this.checkoutservice.getAlamat(id).subscribe(function (result) {
          _this.alamats = result.data;
        });
      }
    });
  };
  CheckoutComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.scss'],
      }),
    ],
    CheckoutComponent
  );
  return CheckoutComponent;
})();
exports.CheckoutComponent = CheckoutComponent;
