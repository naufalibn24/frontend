!(function () {
  function e(e, n) {
    if (!(e instanceof n))
      throw new TypeError('Cannot call a class as a function');
  }
  function n(e, n) {
    for (var t = 0; t < n.length; t++) {
      var r = n[t];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function t(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
      x5bZ: function (n, r, a) {
        'use strict';
        a.r(r),
          a.d(r, 'RegisterModule', function () {
            return w;
          });
        var c,
          o,
          i,
          b,
          s = a('ofXK'),
          l = a('sYmb'),
          u = a('tyNb'),
          g = a('4u49'),
          x = a('LRne'),
          d = a('lJxs'),
          f = a('JIr8'),
          p = a('fXoL'),
          m = a('tk/3'),
          h =
            (((c = (function () {
              function n(t) {
                e(this, n), (this.httpClient = t);
              }
              return (
                t(n, [
                  {
                    key: 'postRegister',
                    value: function (e) {
                      return this.httpClient
                        .post(
                          'https://backends-petrus.herokuapp.com/api/user/register',
                          e
                        )
                        .pipe(
                          Object(d.a)(function (e) {
                            return e;
                          }),
                          Object(f.a)(function () {
                            return Object(x.a)(
                              'Error, could not load joke :-('
                            );
                          })
                        );
                    },
                  },
                ]),
                n
              );
            })()).ɵfac = function (e) {
              return new (e || c)(p.Xb(m.b));
            }),
            (c.ɵprov = p.Gb({ token: c, factory: c.ɵfac, providedIn: 'root' })),
            c),
          O = a('PSD3'),
          P = a.n(O),
          v = a('3Pt+'),
          y = [
            {
              path: '',
              component:
                ((o = (function () {
                  function n(t, r) {
                    e(this, n),
                      (this.route = t),
                      (this.registerservice = r),
                      (this.registerData = {});
                  }
                  return (
                    t(n, [
                      { key: 'ngOnInit', value: function () {} },
                      {
                        key: 'registerPost',
                        value: function () {
                          var e = this;
                          this.registerservice
                            .postRegister(this.registerData)
                            .subscribe(function (n) {
                              console.log('xxx', n),
                                n.success &&
                                  (P.a.fire({
                                    icon: 'success',
                                    title: 'Berhasil Register',
                                    text:
                                      'Selamat Berbelanja ' + n.data.username,
                                  }),
                                  e.route.navigate(['login']));
                            });
                        },
                      },
                    ]),
                    n
                  );
                })()),
                (o.ɵfac = function (e) {
                  return new (e || o)(p.Kb(u.e), p.Kb(h));
                }),
                (o.ɵcmp = p.Eb({
                  type: o,
                  selectors: [['app-register']],
                  decls: 85,
                  vars: 6,
                  consts: [
                    ['id', 'register'],
                    [1, 'container', 'mt-4'],
                    [1, 'row'],
                    [1, 'col-md-6', 'mx-auto'],
                    [1, 'card'],
                    [1, 'card-header'],
                    [1, 'd-flex', 'justify-content-center'],
                    ['alt', '', 1, 'fas', 'fa-user-circle', 'fa-5x'],
                    [1, 'card-body'],
                    ['action', 'index.html'],
                    [1, 'form-group'],
                    ['for', 'email'],
                    [
                      'name',
                      'email',
                      'type',
                      'text',
                      1,
                      'form-control',
                      3,
                      'ngModel',
                      'ngModelChange',
                    ],
                    [
                      'name',
                      'username',
                      'type',
                      'text',
                      1,
                      'form-control',
                      3,
                      'ngModel',
                      'ngModelChange',
                    ],
                    ['for', 'password'],
                    [
                      'name',
                      'password',
                      'type',
                      'password',
                      1,
                      'form-control',
                      3,
                      'ngModel',
                      'ngModelChange',
                    ],
                    [
                      'name',
                      'Nama_Depan',
                      'type',
                      'text',
                      1,
                      'form-control',
                      3,
                      'ngModel',
                      'ngModelChange',
                    ],
                    [
                      'name',
                      'Nama_Belakang',
                      'type',
                      'text',
                      1,
                      'form-control',
                      3,
                      'ngModel',
                      'ngModelChange',
                    ],
                    [
                      'name',
                      'Umur',
                      'type',
                      'text',
                      1,
                      'form-control',
                      3,
                      'ngModel',
                      'ngModelChange',
                    ],
                    [
                      'type',
                      'submit',
                      'value',
                      'Register',
                      1,
                      'btn',
                      'btn-primary',
                      'btn-block',
                      3,
                      'click',
                    ],
                  ],
                  template: function (e, n) {
                    1 & e &&
                      (p.Pb(0, 'section', 0),
                      p.xc(1, '\n  '),
                      p.Pb(2, 'div', 1),
                      p.xc(3, '\n    '),
                      p.Pb(4, 'div', 2),
                      p.xc(5, '\n      '),
                      p.Pb(6, 'div', 3),
                      p.xc(7, '\n        '),
                      p.Pb(8, 'div', 4),
                      p.xc(9, '\n          '),
                      p.Pb(10, 'div', 5),
                      p.xc(11, '\n            '),
                      p.Pb(12, 'div', 6),
                      p.xc(13, '\n              '),
                      p.Lb(14, 'i', 7),
                      p.xc(15, '\n            '),
                      p.Ob(),
                      p.xc(16, '\n            '),
                      p.Pb(17, 'div', 6),
                      p.xc(18, '\n              '),
                      p.Pb(19, 'h1'),
                      p.xc(20, 'Register'),
                      p.Ob(),
                      p.xc(21, '\n            '),
                      p.Ob(),
                      p.xc(22, '\n          '),
                      p.Ob(),
                      p.xc(23, '\n          '),
                      p.Pb(24, 'div', 8),
                      p.xc(25, '\n            '),
                      p.Pb(26, 'form', 9),
                      p.xc(27, '\n              '),
                      p.Pb(28, 'div', 10),
                      p.xc(29, '\n                '),
                      p.Pb(30, 'label', 11),
                      p.xc(31, 'Email'),
                      p.Ob(),
                      p.xc(32, '\n                '),
                      p.Pb(33, 'input', 12),
                      p.ac('ngModelChange', function (e) {
                        return (n.registerData.email = e);
                      }),
                      p.Ob(),
                      p.xc(34, '\n              '),
                      p.Ob(),
                      p.xc(35, '\n              '),
                      p.Pb(36, 'div', 10),
                      p.xc(37, '\n                '),
                      p.Pb(38, 'label', 11),
                      p.xc(39, 'Username'),
                      p.Ob(),
                      p.xc(40, '\n                '),
                      p.Pb(41, 'input', 13),
                      p.ac('ngModelChange', function (e) {
                        return (n.registerData.username = e);
                      }),
                      p.Ob(),
                      p.xc(42, '\n              '),
                      p.Ob(),
                      p.xc(43, '\n              '),
                      p.Pb(44, 'div', 10),
                      p.xc(45, '\n                '),
                      p.Pb(46, 'label', 14),
                      p.xc(47, 'Password'),
                      p.Ob(),
                      p.xc(48, '\n                '),
                      p.Pb(49, 'input', 15),
                      p.ac('ngModelChange', function (e) {
                        return (n.registerData.password = e);
                      }),
                      p.Ob(),
                      p.xc(50, '\n              '),
                      p.Ob(),
                      p.xc(51, '\n              '),
                      p.Pb(52, 'div', 10),
                      p.xc(53, '\n                '),
                      p.Pb(54, 'label', 11),
                      p.xc(55, ' Nama Depan'),
                      p.Ob(),
                      p.xc(56, '\n                '),
                      p.Pb(57, 'input', 16),
                      p.ac('ngModelChange', function (e) {
                        return (n.registerData.Nama_Depan = e);
                      }),
                      p.Ob(),
                      p.xc(58, '\n              '),
                      p.Ob(),
                      p.xc(59, '\n              '),
                      p.Pb(60, 'div', 10),
                      p.xc(61, '\n                '),
                      p.Pb(62, 'label', 11),
                      p.xc(63, 'Nama Belakang'),
                      p.Ob(),
                      p.xc(64, '\n                '),
                      p.Pb(65, 'input', 17),
                      p.ac('ngModelChange', function (e) {
                        return (n.registerData.Nama_Belakang = e);
                      }),
                      p.Ob(),
                      p.xc(66, '\n              '),
                      p.Ob(),
                      p.xc(67, '\n              '),
                      p.Pb(68, 'div', 10),
                      p.xc(69, '\n                '),
                      p.Pb(70, 'label', 11),
                      p.xc(71, 'Umur'),
                      p.Ob(),
                      p.xc(72, '\n                '),
                      p.Pb(73, 'input', 18),
                      p.ac('ngModelChange', function (e) {
                        return (n.registerData.Umur = e);
                      }),
                      p.Ob(),
                      p.xc(74, '\n              '),
                      p.Ob(),
                      p.xc(75, '\n              '),
                      p.Pb(76, 'input', 19),
                      p.ac('click', function () {
                        return n.registerPost();
                      }),
                      p.Ob(),
                      p.xc(77, '\n            '),
                      p.Ob(),
                      p.xc(78, '\n          '),
                      p.Ob(),
                      p.xc(79, '\n        '),
                      p.Ob(),
                      p.xc(80, '\n      '),
                      p.Ob(),
                      p.xc(81, '\n    '),
                      p.Ob(),
                      p.xc(82, '\n  '),
                      p.Ob(),
                      p.xc(83, '\n'),
                      p.Ob(),
                      p.xc(84, '\n')),
                      2 & e &&
                        (p.xb(33),
                        p.hc('ngModel', n.registerData.email),
                        p.xb(8),
                        p.hc('ngModel', n.registerData.username),
                        p.xb(8),
                        p.hc('ngModel', n.registerData.password),
                        p.xb(8),
                        p.hc('ngModel', n.registerData.Nama_Depan),
                        p.xb(8),
                        p.hc('ngModel', n.registerData.Nama_Belakang),
                        p.xb(8),
                        p.hc('ngModel', n.registerData.Umur));
                  },
                  directives: [v.l, v.f, v.g, v.a, v.e, v.h],
                  styles: [''],
                })),
                o),
              data: { title: Object(g.a)('Register') },
            },
          ],
          M =
            (((b = function n() {
              e(this, n);
            }).ɵmod = p.Ib({ type: b })),
            (b.ɵinj = p.Hb({
              factory: function (e) {
                return new (e || b)();
              },
              providers: [],
              imports: [[u.h.forChild(y)], u.h],
            })),
            b),
          w =
            (((i = function n() {
              e(this, n);
            }).ɵmod = p.Ib({ type: i })),
            (i.ɵinj = p.Hb({
              factory: function (e) {
                return new (e || i)();
              },
              imports: [[s.b, l.b, M, v.b]],
            })),
            i);
      },
    },
  ]);
})();
