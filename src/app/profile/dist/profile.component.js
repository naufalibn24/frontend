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
exports.ProfileComponent = void 0;
var core_1 = require('@angular/core');
var ProfileComponent = /** @class */ (function () {
  function ProfileComponent(profileservice) {
    this.profileservice = profileservice;
    this.data = {};
  }
  // getData(){
  //   this.profileservice
  //   .getData()
  //   .pipe(
  //     finalize(()=>{
  //       console.log('done')
  //     })
  //   )
  //   .subscribe((response: any )=>{
  //     console.log('res', response)
  //     this.data = response
  //   })
  // }
  // getDataId(){
  //   this.profileservice
  //   .getDataId()
  //   .pipe(
  //     finalize(()=>{
  //       console.log('done')
  //     })
  //   )
  //   .subscribe((response: any )=>{
  //     console.log('xxx', response)
  //     this.id = response
  //   })
  // }
  ProfileComponent.prototype.getId = function () {
    var _this = this;
    var userId = localStorage.getItem('userId');
    this.profileservice.getDataId(userId).subscribe(function (response) {
      _this.data = response;
    });
  };
  ProfileComponent.prototype.ngOnInit = function () {
    // this.getData();
    // this.getDataId()
    this.getId();
  };
  ProfileComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss'],
      }),
    ],
    ProfileComponent
  );
  return ProfileComponent;
})();
exports.ProfileComponent = ProfileComponent;
