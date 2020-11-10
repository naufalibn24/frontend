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
exports.CheckoutModule = void 0;
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var core_2 = require('@ngx-translate/core');
var checkout_routing_module_1 = require('./checkout-routing.module');
var checkout_component_1 = require('./checkout.component');
var _shared_1 = require('@shared');
var forms_1 = require('@angular/forms');
var CheckoutModule = /** @class */ (function () {
  function CheckoutModule() {}
  CheckoutModule = __decorate(
    [
      core_1.NgModule({
        imports: [
          common_1.CommonModule,
          core_2.TranslateModule,
          _shared_1.SharedModule,
          checkout_routing_module_1.CheckoutRoutingModule,
          forms_1.FormsModule,
        ],
        declarations: [checkout_component_1.CheckoutComponent],
      }),
    ],
    CheckoutModule
  );
  return CheckoutModule;
})();
exports.CheckoutModule = CheckoutModule;
