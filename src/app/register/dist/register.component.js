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
exports.RegisterComponent = void 0;
var core_1 = require('@angular/core');
var sweetalert2_1 = require('sweetalert2');
var RegisterComponent = /** @class */ (function () {
  function RegisterComponent(route, registerservice) {
    this.route = route;
    this.registerservice = registerservice;
    this.registerData = {};
  }
  RegisterComponent.prototype.ngOnInit = function () {};
  RegisterComponent.prototype.registerPost = function () {
    var _this = this;
    this.registerservice.postRegister(this.registerData).subscribe(function (response) {
      console.log('xxx', response);
      if (response.success) {
        sweetalert2_1['default'].fire({
          icon: 'success',
          title: 'Berhasil Register',
          text: 'Selamat Berbelanja' + ' ' + response.data.username,
        });
        _this.route.navigate(['login']);
      }
    });
  };
  RegisterComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss'],
      }),
    ],
    RegisterComponent
  );
  return RegisterComponent;
})();
exports.RegisterComponent = RegisterComponent;
