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
exports.ProdukComponent = void 0;
var core_1 = require('@angular/core');
var sweetalert2_1 = require('sweetalert2');
var ProdukComponent = /** @class */ (function () {
  function ProdukComponent(route, produkservice, quoteService, router) {
    this.route = route;
    this.produkservice = produkservice;
    this.quoteService = quoteService;
    this.router = router;
    this.detail = 'Detail';
    this.search = '';
    this.userId = '';
    this.tokens = '';
    this.goToDetail = function (data) {
      this.router.navigate(['home/detail'], { queryParams: { idDetail: data } });
    };
  }
  ProdukComponent.prototype.ngOnInit = function () {
    var _this = this;
    this.route.params.subscribe(function (params) {
      _this.id = params.id;
      _this.produkservice.getProduk(_this.id).subscribe(function (response) {
        _this.produkKategori = response;
      });
    });
    var user = localStorage.getItem('userId');
    var token = localStorage.getItem('token');
    this.tokens = token;
    this.userId = user;
  };
  ProdukComponent.prototype.onSearch = function () {
    var _this = this;
    if (this.search != '') {
      var produks = this.produkKategori.filter(function (e) {
        return e.Nama_barang.toLocaleLowerCase().match(_this.search.toLocaleLowerCase());
      });
      this.produkKategori = produks;
    } else {
      this.ngOnInit();
    }
  };
  ProdukComponent.prototype.buyPost = function (data) {
    var datas = {
      Nama_Produk: data.Nama_barang,
      Harga: data.harga,
      Gambar: data.gambar,
    };
    if (!this.tokens) {
      this.router.navigate(['login']);
    } else {
      this.quoteService.postSell(this.userId, datas).subscribe(function (result) {
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
  ProdukComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-produk',
        templateUrl: './produk.component.html',
        styleUrls: ['./produk.component.scss'],
      }),
    ],
    ProdukComponent
  );
  return ProdukComponent;
})();
exports.ProdukComponent = ProdukComponent;
