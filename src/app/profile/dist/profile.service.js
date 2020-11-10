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
exports.GetProfileService = void 0;
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var routes = {
  users: function (id) {
    return 'http://localhost:3000/api/user/' + id;
  },
};
var GetProfileService = /** @class */ (function () {
  function GetProfileService(httpClient) {
    this.httpClient = httpClient;
  }
  // getData(): Observable<string> {
  //   return this.httpClient.get(routes.quote()).pipe(
  //     map((body: any) => body),
  //     catchError((err) => of(err))
  //   );
  // }
  GetProfileService.prototype.getDataId = function (id) {
    return this.httpClient.get(routes.users(id)).pipe(
      operators_1.map(function (body) {
        return body;
      }),
      operators_1.catchError(function (err) {
        return rxjs_1.of(err);
      })
    );
  };
  GetProfileService = __decorate(
    [
      core_1.Injectable({
        providedIn: 'root',
      }),
    ],
    GetProfileService
  );
  return GetProfileService;
})();
exports.GetProfileService = GetProfileService;
