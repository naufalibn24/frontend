'use strict';
exports.__esModule = true;
var testing_1 = require('@angular/core/testing');
var checkout_component_1 = require('./checkout.component');
describe('CheckoutComponent', function () {
  var component;
  var fixture;
  beforeEach(
    testing_1.waitForAsync(function () {
      testing_1.TestBed.configureTestingModule({
        declarations: [checkout_component_1.CheckoutComponent],
      }).compileComponents();
    })
  );
  beforeEach(function () {
    fixture = testing_1.TestBed.createComponent(checkout_component_1.CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', function () {
    expect(component).toBeTruthy();
  });
});
