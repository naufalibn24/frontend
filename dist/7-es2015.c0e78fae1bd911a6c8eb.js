(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '44p1': function (r, t, n) {
      'use strict';
      var e =
          (this && this.__extends) ||
          (function () {
            var r = function (t, n) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (r, t) {
                    r.__proto__ = t;
                  }) ||
                function (r, t) {
                  for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function e() {
                this.constructor = t;
              }
              r(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((e.prototype = n.prototype), new e()));
            };
          })(),
        i = n('FWf1'),
        o = n('zB/H');
      t.finalize = function (r) {
        return function (t) {
          return t.lift(new s(r));
        };
      };
      var s = (function () {
          function r(r) {
            this.callback = r;
          }
          return (
            (r.prototype.call = function (r, t) {
              return t.subscribe(new c(r, this.callback));
            }),
            r
          );
        })(),
        c = (function (r) {
          function t(t, n) {
            var e = r.call(this, t) || this;
            return e.add(new o.Subscription(n)), e;
          }
          return e(t, r), t;
        })(i.Subscriber);
    },
    FWf1: function (r, t, n) {
      'use strict';
      var e =
          (this && this.__extends) ||
          (function () {
            var r = function (t, n) {
              return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (r, t) {
                    r.__proto__ = t;
                  }) ||
                function (r, t) {
                  for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
                })(t, n);
            };
            return function (t, n) {
              function e() {
                this.constructor = t;
              }
              r(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((e.prototype = n.prototype), new e()));
            };
          })(),
        i = n('pshJ'),
        o = n('GiSu'),
        s = n('zB/H'),
        c = n('p//D'),
        u = n('n3uD'),
        b = n('MkmW'),
        a = (function (r) {
          function t(n, e, i) {
            var s = r.call(this) || this;
            switch (
              ((s.syncErrorValue = null),
              (s.syncErrorThrown = !1),
              (s.syncErrorThrowable = !1),
              (s.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                s.destination = o.empty;
                break;
              case 1:
                if (!n) {
                  s.destination = o.empty;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof t
                    ? ((s.syncErrorThrowable = n.syncErrorThrowable),
                      (s.destination = n),
                      n.add(s))
                    : ((s.syncErrorThrowable = !0),
                      (s.destination = new p(s, n)));
                  break;
                }
              default:
                (s.syncErrorThrowable = !0),
                  (s.destination = new p(s, n, e, i));
            }
            return s;
          }
          return (
            e(t, r),
            (t.prototype[c.rxSubscriber] = function () {
              return this;
            }),
            (t.create = function (r, n, e) {
              var i = new t(r, n, e);
              return (i.syncErrorThrowable = !1), i;
            }),
            (t.prototype.next = function (r) {
              this.isStopped || this._next(r);
            }),
            (t.prototype.error = function (r) {
              this.isStopped || ((this.isStopped = !0), this._error(r));
            }),
            (t.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), r.prototype.unsubscribe.call(this));
            }),
            (t.prototype._next = function (r) {
              this.destination.next(r);
            }),
            (t.prototype._error = function (r) {
              this.destination.error(r), this.unsubscribe();
            }),
            (t.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (t.prototype._unsubscribeAndRecycle = function () {
              var r = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = r),
                this
              );
            }),
            t
          );
        })(s.Subscription);
      t.Subscriber = a;
      var p = (function (r) {
        function t(t, n, e, s) {
          var c,
            u = r.call(this) || this;
          u._parentSubscriber = t;
          var b = u;
          return (
            i.isFunction(n)
              ? (c = n)
              : n &&
                ((c = n.next),
                (e = n.error),
                (s = n.complete),
                n !== o.empty &&
                  ((b = Object.create(n)),
                  i.isFunction(b.unsubscribe) && u.add(b.unsubscribe.bind(b)),
                  (b.unsubscribe = u.unsubscribe.bind(u)))),
            (u._context = b),
            (u._next = c),
            (u._error = e),
            (u._complete = s),
            u
          );
        }
        return (
          e(t, r),
          (t.prototype.next = function (r) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              u.config.useDeprecatedSynchronousErrorHandling &&
              t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, r) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, r);
            }
          }),
          (t.prototype.error = function (r) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                n = u.config.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, r),
                    this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, r), this.unsubscribe());
              else if (t.syncErrorThrowable)
                n
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0))
                  : b.hostReportError(r),
                  this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw r;
                b.hostReportError(r);
              }
            }
          }),
          (t.prototype.complete = function () {
            var r = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var n = function () {
                  return r._complete.call(r._context);
                };
                u.config.useDeprecatedSynchronousErrorHandling &&
                t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function (r, t) {
            try {
              r.call(this._context, t);
            } catch (n) {
              if (
                (this.unsubscribe(),
                u.config.useDeprecatedSynchronousErrorHandling)
              )
                throw n;
              b.hostReportError(n);
            }
          }),
          (t.prototype.__tryOrSetError = function (r, t, n) {
            if (!u.config.useDeprecatedSynchronousErrorHandling)
              throw new Error('bad call');
            try {
              t.call(this._context, n);
            } catch (e) {
              return u.config.useDeprecatedSynchronousErrorHandling
                ? ((r.syncErrorValue = e), (r.syncErrorThrown = !0), !0)
                : (b.hostReportError(e), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function () {
            var r = this._parentSubscriber;
            (this._context = null),
              (this._parentSubscriber = null),
              r.unsubscribe();
          }),
          t
        );
      })(a);
      t.SafeSubscriber = p;
    },
    GMZp: function (r, t, n) {
      'use strict';
      t.isObject = function (r) {
        return null !== r && 'object' == typeof r;
      };
    },
    GiSu: function (r, t, n) {
      'use strict';
      var e = n('n3uD'),
        i = n('MkmW');
      t.empty = {
        closed: !0,
        next: function (r) {},
        error: function (r) {
          if (e.config.useDeprecatedSynchronousErrorHandling) throw r;
          i.hostReportError(r);
        },
        complete: function () {},
      };
    },
    LBXl: function (r, t, n) {
      'use strict';
      t.UnsubscriptionError = (function () {
        function r(r) {
          return (
            Error.call(this),
            (this.message = r
              ? r.length +
                ' errors occurred during unsubscription:\n' +
                r
                  .map(function (r, t) {
                    return t + 1 + ') ' + r.toString();
                  })
                  .join('\n  ')
              : ''),
            (this.name = 'UnsubscriptionError'),
            (this.errors = r),
            this
          );
        }
        return (r.prototype = Object.create(Error.prototype)), r;
      })();
    },
    MkmW: function (r, t, n) {
      'use strict';
      t.hostReportError = function (r) {
        setTimeout(function () {
          throw r;
        }, 0);
      };
    },
    lM0Z: function (r, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'DetailModule', function () {
          return y;
        });
      var e = n('ofXK'),
        i = n('sYmb'),
        o = n('tyNb'),
        s = n('4u49'),
        c = n('AytR'),
        u = n('44p1'),
        b = n('LRne'),
        a = n('lJxs'),
        p = n('JIr8'),
        h = n('fXoL'),
        l = n('tk/3');
      let f = (() => {
        class r {
          constructor(r) {
            this.httpClient = r;
          }
          getDetailId(r) {
            return this.httpClient
              .get(((r) => 'http://localhost:3000/api/produk/' + r)(r))
              .pipe(
                Object(a.a)((r) => r),
                Object(p.a)((r) => Object(b.a)(r))
              );
          }
        }
        return (
          (r.ɵfac = function (t) {
            return new (t || r)(h.Xb(l.b));
          }),
          (r.ɵprov = h.Gb({ token: r, factory: r.ɵfac, providedIn: 'root' })),
          r
        );
      })();
      const d = [
        {
          path: '',
          component: (() => {
            class r {
              constructor(r, t) {
                (this.route = r),
                  (this.detailservice = t),
                  (this.version = c.a.version),
                  (this.id = '');
              }
              ngOnInit() {
                this.route.queryParams.subscribe((r) => {
                  this.id = r.idDetail;
                }),
                  this.getDetail();
              }
              getDetail() {
                console.log('id', this.id),
                  this.detailservice
                    .getDetailId(this.id)
                    .pipe(
                      Object(u.finalize)(() => {
                        console.log('done');
                      })
                    )
                    .subscribe((r) => {
                      this.detailProduk = r;
                    });
              }
            }
            return (
              (r.ɵfac = function (t) {
                return new (t || r)(h.Kb(o.a), h.Kb(f));
              }),
              (r.ɵcmp = h.Eb({
                type: r,
                selectors: [['app-detail']],
                decls: 152,
                vars: 4,
                consts: [
                  [1, 'container'],
                  [1, 'row'],
                  [1, 'col-4', 'pt-2', 'pl-1'],
                  [
                    'width',
                    '370px',
                    'height',
                    '400px',
                    'alt',
                    '',
                    'srcset',
                    '',
                    1,
                    'rounded',
                    3,
                    'src',
                  ],
                  [1, 'col-sm'],
                  [1, 'col-12'],
                  [1, 'pl-0', 'pt-1'],
                  [1, 'col-12', 2, 'margin-top', '-1px'],
                  [2, 'font-size', '10px', 'color', 'gray'],
                  [2, 'font-size', '10px', 'color', 'thistle'],
                  [2, 'font-size', '10px', 'color', 'yellow'],
                  [1, 'fas', 'fa-star'],
                  [2, 'color', 'thistle', 'font-size', '10px'],
                  [2, 'color', 'thistle', 'font-size', '12px'],
                  [2, 'color', 'thistle'],
                  [1, 'row', 2, 'margin-top', '-20px'],
                  [
                    'width',
                    '700px',
                    2,
                    'margin-left',
                    '15px',
                    'border',
                    '1px solid #e5e7e9',
                  ],
                  [1, 'col-2', 'pt-3'],
                  [2, 'font-weight', 'bold', 'color', 'grey'],
                  [1, 'col-3', 'pt-3'],
                  [1, 'font-weight-bold', 2, 'color', 'orange'],
                  [1, 'row', 2, 'margin-top', '-10px'],
                  [1, 'col-7', 2, 'margin-top', '15px'],
                  [1, 'column'],
                  [1, 'row', 2, 'margin-top', '0px'],
                  [1, 'row', 'pt-3', 2, 'margin-top', '-20px'],
                  [1, 'col-2'],
                  [1, 'col-5'],
                  [1, 'text-black-50;'],
                  [2, 'color', 'black', 'font-weight', 'bold'],
                  [1, 'text-muted'],
                ],
                template: function (r, t) {
                  1 & r &&
                    (h.Pb(0, 'div', 0),
                    h.xc(1, '\n  '),
                    h.Pb(2, 'div', 1),
                    h.xc(3, '\n    '),
                    h.Pb(4, 'div', 2),
                    h.xc(5, '\n      '),
                    h.Lb(6, 'img', 3),
                    h.xc(7, '\n    '),
                    h.Ob(),
                    h.xc(8, '\n    '),
                    h.Pb(9, 'div', 4),
                    h.xc(10, '\n      '),
                    h.Pb(11, 'div', 1),
                    h.xc(12, '\n        '),
                    h.Pb(13, 'div', 5),
                    h.xc(14, '\n          '),
                    h.Pb(15, 'h3', 6),
                    h.xc(16),
                    h.Ob(),
                    h.xc(17, '\n        '),
                    h.Ob(),
                    h.xc(18, '\n        '),
                    h.Pb(19, 'div', 7),
                    h.xc(20, '\n          '),
                    h.Pb(21, 'p', 8),
                    h.xc(22, '\n            '),
                    h.Pb(23, 'span', 9),
                    h.xc(24, '4.8'),
                    h.Ob(),
                    h.xc(25, '\n            '),
                    h.Pb(26, 'span', 10),
                    h.xc(27, '\n              '),
                    h.Lb(28, 'i', 11),
                    h.xc(29, '\n              '),
                    h.Lb(30, 'i', 11),
                    h.xc(31, '\n              '),
                    h.Lb(32, 'i', 11),
                    h.xc(33, '\n              '),
                    h.Lb(34, 'i', 11),
                    h.xc(35, '\n              '),
                    h.Lb(36, 'i', 11),
                    h.xc(37, '\n            '),
                    h.Ob(),
                    h.xc(38, '\n            '),
                    h.Pb(39, 'span', 12),
                    h.xc(40, '(13)'),
                    h.Ob(),
                    h.xc(41, '\n            '),
                    h.Pb(42, 'span', 13),
                    h.xc(43, '.'),
                    h.Ob(),
                    h.xc(44, '\n            Terjual 226 Produk\n            '),
                    h.Pb(45, 'span', 14),
                    h.xc(46, '(96%)'),
                    h.Ob(),
                    h.xc(47, '\n            . 2329x\n            '),
                    h.Pb(48, 'span', 14),
                    h.xc(49, 'Dilihat'),
                    h.Ob(),
                    h.xc(50, '\n          '),
                    h.Ob(),
                    h.xc(51, '\n        '),
                    h.Ob(),
                    h.xc(52, '\n      '),
                    h.Ob(),
                    h.xc(53, '\n      '),
                    h.Pb(54, 'div', 15),
                    h.xc(55, '\n        '),
                    h.Lb(56, 'hr', 16),
                    h.xc(57, '\n      '),
                    h.Ob(),
                    h.xc(58, '\n      '),
                    h.Pb(59, 'div', 15),
                    h.xc(60, '\n        '),
                    h.Pb(61, 'div', 17),
                    h.xc(62, '\n          '),
                    h.Pb(63, 'div'),
                    h.xc(64, '\n            '),
                    h.Pb(65, 'h6', 18),
                    h.xc(66, 'HARGA'),
                    h.Ob(),
                    h.xc(67, '\n          '),
                    h.Ob(),
                    h.xc(68, '\n        '),
                    h.Ob(),
                    h.xc(69, '\n        '),
                    h.Pb(70, 'div', 19),
                    h.xc(71, '\n          '),
                    h.Pb(72, 'div'),
                    h.xc(73, '\n            '),
                    h.Pb(74, 'h4', 20),
                    h.xc(75),
                    h.Ob(),
                    h.xc(76, '\n          '),
                    h.Ob(),
                    h.xc(77, '\n        '),
                    h.Ob(),
                    h.xc(78, '\n      '),
                    h.Ob(),
                    h.xc(79, '\n      '),
                    h.Pb(80, 'div', 21),
                    h.xc(81, '\n        '),
                    h.Lb(82, 'hr', 16),
                    h.xc(83, '\n      '),
                    h.Ob(),
                    h.xc(84, '\n      '),
                    h.Pb(85, 'div', 15),
                    h.xc(86, '\n        '),
                    h.Pb(87, 'div', 17),
                    h.xc(88, '\n          '),
                    h.Pb(89, 'div'),
                    h.xc(90, '\n            '),
                    h.Pb(91, 'h6', 18),
                    h.xc(92, 'INFO PRODUK'),
                    h.Ob(),
                    h.xc(93, '\n          '),
                    h.Ob(),
                    h.xc(94, '\n        '),
                    h.Ob(),
                    h.xc(95, '\n        '),
                    h.Pb(96, 'div', 22),
                    h.xc(97, '\n          '),
                    h.Pb(98, 'div', 23),
                    h.xc(99, '\n            '),
                    h.Pb(100, 'p'),
                    h.xc(101),
                    h.Ob(),
                    h.xc(102, '\n          '),
                    h.Ob(),
                    h.xc(103, '\n        '),
                    h.Ob(),
                    h.xc(104, '\n      '),
                    h.Ob(),
                    h.xc(105, '\n      '),
                    h.Pb(106, 'div', 24),
                    h.xc(107, '\n        '),
                    h.Lb(108, 'hr', 16),
                    h.xc(109, '\n      '),
                    h.Ob(),
                    h.xc(110, '\n      '),
                    h.Pb(111, 'div', 25),
                    h.xc(112, '\n        '),
                    h.Pb(113, 'div', 26),
                    h.xc(114, '\n          '),
                    h.Pb(115, 'div'),
                    h.xc(116, '\n            '),
                    h.Pb(117, 'h6', 18),
                    h.xc(118, 'ONGKOS KIRIM'),
                    h.Ob(),
                    h.xc(119, '\n          '),
                    h.Ob(),
                    h.xc(120, '\n        '),
                    h.Ob(),
                    h.xc(121, '\n        '),
                    h.Pb(122, 'div', 27),
                    h.xc(123, '\n          '),
                    h.Pb(124, 'P'),
                    h.xc(125, '\n            '),
                    h.Pb(126, 'dt', 28),
                    h.xc(127, '\n              '),
                    h.Pb(128, 'small'),
                    h.xc(129, 'Ke '),
                    h.Pb(130, 'span', 29),
                    h.xc(131, 'Jakarta Barat, Cengkareng '),
                    h.Ob(),
                    h.Ob(),
                    h.xc(132, '\n            '),
                    h.Ob(),
                    h.xc(133, '\n            '),
                    h.Pb(134, 'dd'),
                    h.xc(135, '\n              '),
                    h.Pb(136, 'small'),
                    h.xc(137, 'Dari Kab. Bandung'),
                    h.Ob(),
                    h.xc(138, '\n            '),
                    h.Ob(),
                    h.xc(139, '\n            '),
                    h.Pb(140, 'small'),
                    h.Pb(141, 'span', 30),
                    h.xc(142, ' Mulai dari Rp.11.000'),
                    h.Ob(),
                    h.Ob(),
                    h.xc(143, '\n          '),
                    h.Ob(),
                    h.xc(144, '\n          '),
                    h.Lb(145, 'div'),
                    h.xc(146, '\n        '),
                    h.Ob(),
                    h.xc(147, '\n      '),
                    h.Ob(),
                    h.xc(148, '\n    '),
                    h.Ob(),
                    h.xc(149, '\n  '),
                    h.Ob(),
                    h.xc(150, '\n'),
                    h.Ob(),
                    h.xc(151, '\n')),
                    2 & r &&
                      (h.xb(6),
                      h.ic('src', t.detailProduk.tumbnail, h.qc),
                      h.xb(10),
                      h.yc(t.detailProduk.Nama_barang),
                      h.xb(59),
                      h.zc('Rp.', t.detailProduk.harga, ''),
                      h.xb(26),
                      h.zc(
                        '\n              ',
                        t.detailProduk.deskripsi,
                        '\n            '
                      ));
                },
                styles: [''],
              })),
              r
            );
          })(),
          data: { title: Object(s.a)('Register') },
        },
      ];
      let x = (() => {
          class r {}
          return (
            (r.ɵmod = h.Ib({ type: r })),
            (r.ɵinj = h.Hb({
              factory: function (t) {
                return new (t || r)();
              },
              providers: [],
              imports: [[o.h.forChild(d)], o.h],
            })),
            r
          );
        })(),
        y = (() => {
          class r {}
          return (
            (r.ɵmod = h.Ib({ type: r })),
            (r.ɵinj = h.Hb({
              factory: function (t) {
                return new (t || r)();
              },
              imports: [[e.b, i.b, x]],
            })),
            r
          );
        })();
    },
    mbIT: function (r, t, n) {
      'use strict';
      t.isArray = (function () {
        return (
          Array.isArray ||
          function (r) {
            return r && 'number' == typeof r.length;
          }
        );
      })();
    },
    n3uD: function (r, t, n) {
      'use strict';
      var e = !1;
      t.config = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(r) {
          if (r) {
            var t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                t.stack
            );
          } else
            e &&
              console.log(
                'RxJS: Back to a better error behavior. Thank you. <3'
              );
          e = r;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return e;
        },
      };
    },
    'p//D': function (r, t, n) {
      'use strict';
      (t.rxSubscriber = (function () {
        return 'function' == typeof Symbol
          ? Symbol('rxSubscriber')
          : '@@rxSubscriber_' + Math.random();
      })()),
        (t.$$rxSubscriber = t.rxSubscriber);
    },
    pshJ: function (r, t, n) {
      'use strict';
      t.isFunction = function (r) {
        return 'function' == typeof r;
      };
    },
    'zB/H': function (r, t, n) {
      'use strict';
      var e = n('mbIT'),
        i = n('GMZp'),
        o = n('pshJ'),
        s = n('LBXl');
      function c(r) {
        return r.reduce(function (r, t) {
          return r.concat(t instanceof s.UnsubscriptionError ? t.errors : t);
        }, []);
      }
      t.Subscription = (function () {
        function r(r) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            r && ((this._ctorUnsubscribe = !0), (this._unsubscribe = r));
        }
        var t;
        return (
          (r.prototype.unsubscribe = function () {
            var t;
            if (!this.closed) {
              var n = this._parentOrParents,
                u = this._ctorUnsubscribe,
                b = this._unsubscribe,
                a = this._subscriptions;
              if (
                ((this.closed = !0),
                (this._parentOrParents = null),
                (this._subscriptions = null),
                n instanceof r)
              )
                n.remove(this);
              else if (null !== n)
                for (var p = 0; p < n.length; ++p) n[p].remove(this);
              if (o.isFunction(b)) {
                u && (this._unsubscribe = void 0);
                try {
                  b.call(this);
                } catch (f) {
                  t = f instanceof s.UnsubscriptionError ? c(f.errors) : [f];
                }
              }
              if (e.isArray(a)) {
                p = -1;
                for (var h = a.length; ++p < h; ) {
                  var l = a[p];
                  if (i.isObject(l))
                    try {
                      l.unsubscribe();
                    } catch (f) {
                      (t = t || []),
                        f instanceof s.UnsubscriptionError
                          ? (t = t.concat(c(f.errors)))
                          : t.push(f);
                    }
                }
              }
              if (t) throw new s.UnsubscriptionError(t);
            }
          }),
          (r.prototype.add = function (t) {
            var n = t;
            if (!t) return r.EMPTY;
            switch (typeof t) {
              case 'function':
                n = new r(t);
              case 'object':
                if (
                  n === this ||
                  n.closed ||
                  'function' != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof r)) {
                  var e = n;
                  (n = new r())._subscriptions = [e];
                }
                break;
              default:
                throw new Error(
                  'unrecognized teardown ' + t + ' added to Subscription.'
                );
            }
            var i = n._parentOrParents;
            if (null === i) n._parentOrParents = this;
            else if (i instanceof r) {
              if (i === this) return n;
              n._parentOrParents = [i, this];
            } else {
              if (-1 !== i.indexOf(this)) return n;
              i.push(this);
            }
            var o = this._subscriptions;
            return null === o ? (this._subscriptions = [n]) : o.push(n), n;
          }),
          (r.prototype.remove = function (r) {
            var t = this._subscriptions;
            if (t) {
              var n = t.indexOf(r);
              -1 !== n && t.splice(n, 1);
            }
          }),
          (r.EMPTY = (((t = new r()).closed = !0), t)),
          r
        );
      })();
    },
  },
]);
