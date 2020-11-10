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
exports.LoginComponent = void 0;
var core_1 = require('@angular/core');
var environment_1 = require('@env/environment');
var sweetalert2_1 = require('sweetalert2');
var LoginComponent = /** @class */ (function () {
  function LoginComponent(loginservice, route) {
    this.loginservice = loginservice;
    this.route = route;
    this.version = environment_1.environment.version;
    this.loginData = {};
  }
  LoginComponent.prototype.ngOnInit = function () {};
  LoginComponent.prototype.loginsPost = function () {
    var _this = this;
    this.loginservice.postLogin(this.loginData).subscribe(function (response) {
      if (response.success) {
        localStorage.setItem('token', response.tokens);
        localStorage.setItem('userId', response.data._id);
        sweetalert2_1['default'].fire({
          icon: 'success',
          title: 'Berhasil Login',
          text: 'Selamat Datang' + ' ' + response.data.username,
        });
        _this.route.navigate(['home']);
      } else {
        sweetalert2_1['default'].fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email Dan Password Tidak Cocok',
          footer: '<a href>Why do I have this issue?</a>',
        });
      }
    });
  };
  LoginComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss'],
      }),
    ],
    LoginComponent
  );
  return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
