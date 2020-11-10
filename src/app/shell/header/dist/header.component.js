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
exports.HeaderComponent = void 0;
var core_1 = require('@angular/core');
var HeaderComponent = /** @class */ (function () {
  function HeaderComponent(kategoriservice, router) {
    this.kategoriservice = kategoriservice;
    this.router = router;
    this.menuHidden = true;
  }
  HeaderComponent.prototype.ngOnInit = function () {
    this.getKategori();
  };
  HeaderComponent.prototype.toggleMenu = function () {
    this.menuHidden = !this.menuHidden;
  };
  HeaderComponent.prototype.getKategori = function () {
    var _this = this;
    this.kategoriservice.getKategori().subscribe(function (response) {
      _this.kategories = response;
    });
  };
  HeaderComponent.prototype.logOut = function () {
    var keysToRemove = ['userId', 'token'];
    for (var _i = 0, keysToRemove_1 = keysToRemove; _i < keysToRemove_1.length; _i++) {
      var key = keysToRemove_1[_i];
      localStorage.removeItem(key);
    }
    this.router.navigate(['/home']);
  };
  HeaderComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
      }),
    ],
    HeaderComponent
  );
  return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
