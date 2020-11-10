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
exports.HomeComponent = void 0;
var core_1 = require('@angular/core');
var sweetalert2_1 = require('sweetalert2');
var HomeComponent = /** @class */ (function () {
  function HomeComponent(quoteService, router) {
    this.quoteService = quoteService;
    this.router = router;
    this.isLoading = false;
    this.detail = 'Detail';
    this.data = {};
    this.userId = '';
    this.tokens = '';
    this.goToDetail = function (data) {
      this.router.navigate(['home/detail'], { queryParams: { idDetail: data } });
    };
  }
  HomeComponent.prototype.ngOnInit = function () {
    var _this = this;
    var user = localStorage.getItem('userId');
    var token = localStorage.getItem('token');
    this.tokens = token;
    this.userId = user;
    this.quoteService.getProduk().subscribe(function (produks) {
      _this.produks = produks;
    });
    this.getCarousell();
  };
  HomeComponent.prototype.buyPost = function (data) {
    var datas = {
      Nama_Produk: data.Nama_barang,
      Harga: data.harga,
      Gambar: data.gambar,
    };
    console.log('post', datas);
    if (!this.tokens) {
      this.router.navigate(['login']);
    } else {
      this.quoteService.postSell(this.userId, datas).subscribe(function (result) {
        console.log('xxx', result);
        if (result.succes) {
          sweetalert2_1['default'].fire({
            icon: 'success',
            title: 'Sukses Menyimpan',
            text: 'Berhasil Menambahakn Ke Cart!',
          });
        } else {
          sweetalert2_1['default'].fire({
            icon: 'error',
            title: 'Gagal Menyimpan',
            text: 'Gagal Menambahakn Ke Cart!',
          });
        }
      });
    }
  };
  HomeComponent.prototype.getCarousell = function () {
    var _this = this;
    this.quoteService.getCarousell().subscribe(function (result) {
      _this.carousells = result.data;
      console.log('crs', result.data);
    });
  };
  HomeComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss'],
      }),
    ],
    HomeComponent
  );
  return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
