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
exports.CartComponent = void 0;
var core_1 = require('@angular/core');
var sweetalert2_1 = require('sweetalert2');
var http_1 = require('@angular/common/http');
var CartComponent = /** @class */ (function () {
  function CartComponent(cartservice, router) {
    this.cartservice = cartservice;
    this.router = router;
    this.Jumlah = 0;
  }
  CartComponent.prototype.ngOnInit = function () {
    var _this = this;
    var userId = localStorage.getItem('userId');
    this.cartservice.getCartId(userId).subscribe(function (result) {
      if (result instanceof http_1.HttpErrorResponse) {
        if (result.status === 401) {
          _this.router.navigate(['/login']);
        }
      } else {
        var cart = result.filter(function (e) {
          return e.Checkout_Status === false;
        });
        _this.carts = cart;
      }
    });
  };
  CartComponent.prototype.deleteCart = function (cart) {
    var _this = this;
    sweetalert2_1['default']
      .fire({
        title: 'Apa Anda Yakin Hapus Produk?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      .then(function (result) {
        if (result.isConfirmed) {
          _this.cartservice.deleteCartId(cart._id).subscribe(function () {
            window.location.reload();
          });
          sweetalert2_1['default'].fire('Deleted!', 'Your file has been deleted.', 'success');
        }
      });
  };
  CartComponent.prototype.postToCheckout = function (cart, jumlah) {
    var _this = this;
    var data = {
      Nama_Produk: cart.Nama_Produk,
      Harga_Produk: cart.Harga * jumlah,
      Id_Pesanan: cart._id,
      Id_User: cart.Id_user,
      Gambar: cart.Gambar,
      Jumlah: jumlah,
    };
    var id = cart.Id_user;
    this.cartservice.PostCheckoutId(id, data).subscribe(function (result) {
      var status = result.success;
      if (status) {
        _this.cartservice.UpdateCartId(cart._id, { Checkout_Status: true }).subscribe(function (result) {
          _this.router.navigate(['/checkout']);
        });
      }
    });
  };
  CartComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.scss'],
      }),
    ],
    CartComponent
  );
  return CartComponent;
})();
exports.CartComponent = CartComponent;
