!(function () {
  function t(t, r) {
    if (!(t instanceof r))
      throw new TypeError('Cannot call a class as a function');
  }
  function r(t, r) {
    for (var n = 0; n < r.length; n++) {
      var e = r[n];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        'value' in e && (e.writable = !0),
        Object.defineProperty(t, e.key, e);
    }
  }
  function n(t, n, e) {
    return n && r(t.prototype, n), e && r(t, e), t;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [7],
    {
      '44p1': function (t, r, n) {
        'use strict';
        var e,
          i =
            (this && this.__extends) ||
            ((e = function (t, r) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
                })(t, r);
            }),
            function (t, r) {
              function n() {
                this.constructor = t;
              }
              e(t, r),
                (t.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            }),
          o = n('FWf1'),
          c = n('zB/H');
        r.finalize = function (t) {
          return function (r) {
            return r.lift(new s(t));
          };
        };
        var s = (function () {
            function t(t) {
              this.callback = t;
            }
            return (
              (t.prototype.call = function (t, r) {
                return r.subscribe(new u(t, this.callback));
              }),
              t
            );
          })(),
          u = (function (t) {
            function r(r, n) {
              var e = t.call(this, r) || this;
              return e.add(new c.Subscription(n)), e;
            }
            return i(r, t), r;
          })(o.Subscriber);
      },
      FWf1: function (t, r, n) {
        'use strict';
        var e,
          i =
            (this && this.__extends) ||
            ((e = function (t, r) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (t, r) {
                    t.__proto__ = r;
                  }) ||
                function (t, r) {
                  for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
                })(t, r);
            }),
            function (t, r) {
              function n() {
                this.constructor = t;
              }
              e(t, r),
                (t.prototype =
                  null === r
                    ? Object.create(r)
                    : ((n.prototype = r.prototype), new n()));
            }),
          o = n('pshJ'),
          c = n('GiSu'),
          s = n('zB/H'),
          u = n('p//D'),
          b = n('n3uD'),
          a = n('MkmW'),
          p = (function (t) {
            function r(n, e, i) {
              var o = t.call(this) || this;
              switch (
                ((o.syncErrorValue = null),
                (o.syncErrorThrown = !1),
                (o.syncErrorThrowable = !1),
                (o.isStopped = !1),
                arguments.length)
              ) {
                case 0:
                  o.destination = c.empty;
                  break;
                case 1:
                  if (!n) {
                    o.destination = c.empty;
                    break;
                  }
                  if ('object' == typeof n) {
                    n instanceof r
                      ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                        (o.destination = n),
                        n.add(o))
                      : ((o.syncErrorThrowable = !0),
                        (o.destination = new h(o, n)));
                    break;
                  }
                default:
                  (o.syncErrorThrowable = !0),
                    (o.destination = new h(o, n, e, i));
              }
              return o;
            }
            return (
              i(r, t),
              (r.prototype[u.rxSubscriber] = function () {
                return this;
              }),
              (r.create = function (t, n, e) {
                var i = new r(t, n, e);
                return (i.syncErrorThrowable = !1), i;
              }),
              (r.prototype.next = function (t) {
                this.isStopped || this._next(t);
              }),
              (r.prototype.error = function (t) {
                this.isStopped || ((this.isStopped = !0), this._error(t));
              }),
              (r.prototype.complete = function () {
                this.isStopped || ((this.isStopped = !0), this._complete());
              }),
              (r.prototype.unsubscribe = function () {
                this.closed ||
                  ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
              }),
              (r.prototype._next = function (t) {
                this.destination.next(t);
              }),
              (r.prototype._error = function (t) {
                this.destination.error(t), this.unsubscribe();
              }),
              (r.prototype._complete = function () {
                this.destination.complete(), this.unsubscribe();
              }),
              (r.prototype._unsubscribeAndRecycle = function () {
                var t = this._parentOrParents;
                return (
                  (this._parentOrParents = null),
                  this.unsubscribe(),
                  (this.closed = !1),
                  (this.isStopped = !1),
                  (this._parentOrParents = t),
                  this
                );
              }),
              r
            );
          })(s.Subscription);
        r.Subscriber = p;
        var h = (function (t) {
          function r(r, n, e, i) {
            var s,
              u = t.call(this) || this;
            u._parentSubscriber = r;
            var b = u;
            return (
              o.isFunction(n)
                ? (s = n)
                : n &&
                  ((s = n.next),
                  (e = n.error),
                  (i = n.complete),
                  n !== c.empty &&
                    ((b = Object.create(n)),
                    o.isFunction(b.unsubscribe) && u.add(b.unsubscribe.bind(b)),
                    (b.unsubscribe = u.unsubscribe.bind(u)))),
              (u._context = b),
              (u._next = s),
              (u._error = e),
              (u._complete = i),
              u
            );
          }
          return (
            i(r, t),
            (r.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var r = this._parentSubscriber;
                b.config.useDeprecatedSynchronousErrorHandling &&
                r.syncErrorThrowable
                  ? this.__tryOrSetError(r, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (r.prototype.error = function (t) {
              if (!this.isStopped) {
                var r = this._parentSubscriber,
                  n = b.config.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && r.syncErrorThrowable
                    ? (this.__tryOrSetError(r, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (r.syncErrorThrowable)
                  n
                    ? ((r.syncErrorValue = t), (r.syncErrorThrown = !0))
                    : a.hostReportError(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  a.hostReportError(t);
                }
              }
            }),
            (r.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var r = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  b.config.useDeprecatedSynchronousErrorHandling &&
                  r.syncErrorThrowable
                    ? (this.__tryOrSetError(r, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (r.prototype.__tryOrUnsub = function (t, r) {
              try {
                t.call(this._context, r);
              } catch (n) {
                if (
                  (this.unsubscribe(),
                  b.config.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                a.hostReportError(n);
              }
            }),
            (r.prototype.__tryOrSetError = function (t, r, n) {
              if (!b.config.useDeprecatedSynchronousErrorHandling)
                throw new Error('bad call');
              try {
                r.call(this._context, n);
              } catch (e) {
                return b.config.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0)
                  : (a.hostReportError(e), !0);
              }
              return !1;
            }),
            (r.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            r
          );
        })(p);
        r.SafeSubscriber = h;
      },
      GMZp: function (t, r, n) {
        'use strict';
        r.isObject = function (t) {
          return null !== t && 'object' == typeof t;
        };
      },
      GiSu: function (t, r, n) {
        'use strict';
        var e = n('n3uD'),
          i = n('MkmW');
        r.empty = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (e.config.useDeprecatedSynchronousErrorHandling) throw t;
            i.hostReportError(t);
          },
          complete: function () {},
        };
      },
      LBXl: function (t, r, n) {
        'use strict';
        r.UnsubscriptionError = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  ' errors occurred during unsubscription:\n' +
                  t
                    .map(function (t, r) {
                      return r + 1 + ') ' + t.toString();
                    })
                    .join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })();
      },
      MkmW: function (t, r, n) {
        'use strict';
        r.hostReportError = function (t) {
          setTimeout(function () {
            throw t;
          }, 0);
        };
      },
      lM0Z: function (r, e, i) {
        'use strict';
        i.r(e),
          i.d(e, 'DetailModule', function () {
            return g;
          });
        var o,
          c,
          s,
          u,
          b = i('ofXK'),
          a = i('sYmb'),
          p = i('tyNb'),
          h = i('4u49'),
          l = i('AytR'),
          f = i('44p1'),
          d = i('LRne'),
          x = i('lJxs'),
          y = i('JIr8'),
          _ = i('fXoL'),
          O = i('tk/3'),
          v =
            (((o = (function () {
              function r(n) {
                t(this, r), (this.httpClient = n);
              }
              return (
                n(r, [
                  {
                    key: 'getDetailId',
                    value: function (t) {
                      return this.httpClient
                        .get(
                          (function (t) {
                            return (
                              'https://backends-petrus.herokuapp.com/api/produk/' +
                              t
                            );
                          })(t)
                        )
                        .pipe(
                          Object(x.a)(function (t) {
                            return t;
                          }),
                          Object(y.a)(function (t) {
                            return Object(d.a)(t);
                          })
                        );
                    },
                  },
                ]),
                r
              );
            })()).??fac = function (t) {
              return new (t || o)(_.Xb(O.b));
            }),
            (o.??prov = _.Gb({ token: o, factory: o.??fac, providedIn: 'root' })),
            o),
          P = [
            {
              path: '',
              component:
                ((c = (function () {
                  function r(n, e) {
                    t(this, r),
                      (this.route = n),
                      (this.detailservice = e),
                      (this.version = l.a.version),
                      (this.id = '');
                  }
                  return (
                    n(r, [
                      {
                        key: 'ngOnInit',
                        value: function () {
                          var t = this;
                          this.route.queryParams.subscribe(function (r) {
                            t.id = r.idDetail;
                          }),
                            this.getDetail();
                        },
                      },
                      {
                        key: 'getDetail',
                        value: function () {
                          var t = this;
                          console.log('id', this.id),
                            this.detailservice
                              .getDetailId(this.id)
                              .pipe(
                                Object(f.finalize)(function () {
                                  console.log('done');
                                })
                              )
                              .subscribe(function (r) {
                                t.detailProduk = r;
                              });
                        },
                      },
                    ]),
                    r
                  );
                })()),
                (c.??fac = function (t) {
                  return new (t || c)(_.Kb(p.a), _.Kb(v));
                }),
                (c.??cmp = _.Eb({
                  type: c,
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
                  template: function (t, r) {
                    1 & t &&
                      (_.Pb(0, 'div', 0),
                      _.xc(1, '\n  '),
                      _.Pb(2, 'div', 1),
                      _.xc(3, '\n    '),
                      _.Pb(4, 'div', 2),
                      _.xc(5, '\n      '),
                      _.Lb(6, 'img', 3),
                      _.xc(7, '\n    '),
                      _.Ob(),
                      _.xc(8, '\n    '),
                      _.Pb(9, 'div', 4),
                      _.xc(10, '\n      '),
                      _.Pb(11, 'div', 1),
                      _.xc(12, '\n        '),
                      _.Pb(13, 'div', 5),
                      _.xc(14, '\n          '),
                      _.Pb(15, 'h3', 6),
                      _.xc(16),
                      _.Ob(),
                      _.xc(17, '\n        '),
                      _.Ob(),
                      _.xc(18, '\n        '),
                      _.Pb(19, 'div', 7),
                      _.xc(20, '\n          '),
                      _.Pb(21, 'p', 8),
                      _.xc(22, '\n            '),
                      _.Pb(23, 'span', 9),
                      _.xc(24, '4.8'),
                      _.Ob(),
                      _.xc(25, '\n            '),
                      _.Pb(26, 'span', 10),
                      _.xc(27, '\n              '),
                      _.Lb(28, 'i', 11),
                      _.xc(29, '\n              '),
                      _.Lb(30, 'i', 11),
                      _.xc(31, '\n              '),
                      _.Lb(32, 'i', 11),
                      _.xc(33, '\n              '),
                      _.Lb(34, 'i', 11),
                      _.xc(35, '\n              '),
                      _.Lb(36, 'i', 11),
                      _.xc(37, '\n            '),
                      _.Ob(),
                      _.xc(38, '\n            '),
                      _.Pb(39, 'span', 12),
                      _.xc(40, '(13)'),
                      _.Ob(),
                      _.xc(41, '\n            '),
                      _.Pb(42, 'span', 13),
                      _.xc(43, '.'),
                      _.Ob(),
                      _.xc(
                        44,
                        '\n            Terjual 226 Produk\n            '
                      ),
                      _.Pb(45, 'span', 14),
                      _.xc(46, '(96%)'),
                      _.Ob(),
                      _.xc(47, '\n            . 2329x\n            '),
                      _.Pb(48, 'span', 14),
                      _.xc(49, 'Dilihat'),
                      _.Ob(),
                      _.xc(50, '\n          '),
                      _.Ob(),
                      _.xc(51, '\n        '),
                      _.Ob(),
                      _.xc(52, '\n      '),
                      _.Ob(),
                      _.xc(53, '\n      '),
                      _.Pb(54, 'div', 15),
                      _.xc(55, '\n        '),
                      _.Lb(56, 'hr', 16),
                      _.xc(57, '\n      '),
                      _.Ob(),
                      _.xc(58, '\n      '),
                      _.Pb(59, 'div', 15),
                      _.xc(60, '\n        '),
                      _.Pb(61, 'div', 17),
                      _.xc(62, '\n          '),
                      _.Pb(63, 'div'),
                      _.xc(64, '\n            '),
                      _.Pb(65, 'h6', 18),
                      _.xc(66, 'HARGA'),
                      _.Ob(),
                      _.xc(67, '\n          '),
                      _.Ob(),
                      _.xc(68, '\n        '),
                      _.Ob(),
                      _.xc(69, '\n        '),
                      _.Pb(70, 'div', 19),
                      _.xc(71, '\n          '),
                      _.Pb(72, 'div'),
                      _.xc(73, '\n            '),
                      _.Pb(74, 'h4', 20),
                      _.xc(75),
                      _.Ob(),
                      _.xc(76, '\n          '),
                      _.Ob(),
                      _.xc(77, '\n        '),
                      _.Ob(),
                      _.xc(78, '\n      '),
                      _.Ob(),
                      _.xc(79, '\n      '),
                      _.Pb(80, 'div', 21),
                      _.xc(81, '\n        '),
                      _.Lb(82, 'hr', 16),
                      _.xc(83, '\n      '),
                      _.Ob(),
                      _.xc(84, '\n      '),
                      _.Pb(85, 'div', 15),
                      _.xc(86, '\n        '),
                      _.Pb(87, 'div', 17),
                      _.xc(88, '\n          '),
                      _.Pb(89, 'div'),
                      _.xc(90, '\n            '),
                      _.Pb(91, 'h6', 18),
                      _.xc(92, 'INFO PRODUK'),
                      _.Ob(),
                      _.xc(93, '\n          '),
                      _.Ob(),
                      _.xc(94, '\n        '),
                      _.Ob(),
                      _.xc(95, '\n        '),
                      _.Pb(96, 'div', 22),
                      _.xc(97, '\n          '),
                      _.Pb(98, 'div', 23),
                      _.xc(99, '\n            '),
                      _.Pb(100, 'p'),
                      _.xc(101),
                      _.Ob(),
                      _.xc(102, '\n          '),
                      _.Ob(),
                      _.xc(103, '\n        '),
                      _.Ob(),
                      _.xc(104, '\n      '),
                      _.Ob(),
                      _.xc(105, '\n      '),
                      _.Pb(106, 'div', 24),
                      _.xc(107, '\n        '),
                      _.Lb(108, 'hr', 16),
                      _.xc(109, '\n      '),
                      _.Ob(),
                      _.xc(110, '\n      '),
                      _.Pb(111, 'div', 25),
                      _.xc(112, '\n        '),
                      _.Pb(113, 'div', 26),
                      _.xc(114, '\n          '),
                      _.Pb(115, 'div'),
                      _.xc(116, '\n            '),
                      _.Pb(117, 'h6', 18),
                      _.xc(118, 'ONGKOS KIRIM'),
                      _.Ob(),
                      _.xc(119, '\n          '),
                      _.Ob(),
                      _.xc(120, '\n        '),
                      _.Ob(),
                      _.xc(121, '\n        '),
                      _.Pb(122, 'div', 27),
                      _.xc(123, '\n          '),
                      _.Pb(124, 'P'),
                      _.xc(125, '\n            '),
                      _.Pb(126, 'dt', 28),
                      _.xc(127, '\n              '),
                      _.Pb(128, 'small'),
                      _.xc(129, 'Ke '),
                      _.Pb(130, 'span', 29),
                      _.xc(131, 'Jakarta Barat, Cengkareng '),
                      _.Ob(),
                      _.Ob(),
                      _.xc(132, '\n            '),
                      _.Ob(),
                      _.xc(133, '\n            '),
                      _.Pb(134, 'dd'),
                      _.xc(135, '\n              '),
                      _.Pb(136, 'small'),
                      _.xc(137, 'Dari Kab. Bandung'),
                      _.Ob(),
                      _.xc(138, '\n            '),
                      _.Ob(),
                      _.xc(139, '\n            '),
                      _.Pb(140, 'small'),
                      _.Pb(141, 'span', 30),
                      _.xc(142, ' Mulai dari Rp.11.000'),
                      _.Ob(),
                      _.Ob(),
                      _.xc(143, '\n          '),
                      _.Ob(),
                      _.xc(144, '\n          '),
                      _.Lb(145, 'div'),
                      _.xc(146, '\n        '),
                      _.Ob(),
                      _.xc(147, '\n      '),
                      _.Ob(),
                      _.xc(148, '\n    '),
                      _.Ob(),
                      _.xc(149, '\n  '),
                      _.Ob(),
                      _.xc(150, '\n'),
                      _.Ob(),
                      _.xc(151, '\n')),
                      2 & t &&
                        (_.xb(6),
                        _.ic('src', r.detailProduk.tumbnail, _.qc),
                        _.xb(10),
                        _.yc(r.detailProduk.Nama_barang),
                        _.xb(59),
                        _.zc('Rp.', r.detailProduk.harga, ''),
                        _.xb(26),
                        _.zc(
                          '\n              ',
                          r.detailProduk.deskripsi,
                          '\n            '
                        ));
                  },
                  styles: [''],
                })),
                c),
              data: { title: Object(h.a)('Register') },
            },
          ],
          w =
            (((u = function r() {
              t(this, r);
            }).??mod = _.Ib({ type: u })),
            (u.??inj = _.Hb({
              factory: function (t) {
                return new (t || u)();
              },
              providers: [],
              imports: [[p.h.forChild(P)], p.h],
            })),
            u),
          g =
            (((s = function r() {
              t(this, r);
            }).??mod = _.Ib({ type: s })),
            (s.??inj = _.Hb({
              factory: function (t) {
                return new (t || s)();
              },
              imports: [[b.b, a.b, w]],
            })),
            s);
      },
      mbIT: function (t, r, n) {
        'use strict';
        r.isArray =
          Array.isArray ||
          function (t) {
            return t && 'number' == typeof t.length;
          };
      },
      n3uD: function (t, r, n) {
        'use strict';
        var e = !1;
        r.config = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              var r = new Error();
              console.warn(
                'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' +
                  r.stack
              );
            } else
              e &&
                console.log(
                  'RxJS: Back to a better error behavior. Thank you. <3'
                );
            e = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return e;
          },
        };
      },
      'p//D': function (t, r, n) {
        'use strict';
        (r.rxSubscriber =
          'function' == typeof Symbol
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random()),
          (r.$$rxSubscriber = r.rxSubscriber);
      },
      pshJ: function (t, r, n) {
        'use strict';
        r.isFunction = function (t) {
          return 'function' == typeof t;
        };
      },
      'zB/H': function (t, r, n) {
        'use strict';
        var e = n('mbIT'),
          i = n('GMZp'),
          o = n('pshJ'),
          c = n('LBXl');
        function s(t) {
          return t.reduce(function (t, r) {
            return t.concat(r instanceof c.UnsubscriptionError ? r.errors : r);
          }, []);
        }
        r.Subscription = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          var r;
          return (
            (t.prototype.unsubscribe = function () {
              var r;
              if (!this.closed) {
                var n = this._parentOrParents,
                  u = this._ctorUnsubscribe,
                  b = this._unsubscribe,
                  a = this._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  n instanceof t)
                )
                  n.remove(this);
                else if (null !== n)
                  for (var p = 0; p < n.length; ++p) n[p].remove(this);
                if (o.isFunction(b)) {
                  u && (this._unsubscribe = void 0);
                  try {
                    b.call(this);
                  } catch (f) {
                    r = f instanceof c.UnsubscriptionError ? s(f.errors) : [f];
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
                        (r = r || []),
                          f instanceof c.UnsubscriptionError
                            ? (r = r.concat(s(f.errors)))
                            : r.push(f);
                      }
                  }
                }
                if (r) throw new c.UnsubscriptionError(r);
              }
            }),
            (t.prototype.add = function (r) {
              var n = r;
              if (!r) return t.EMPTY;
              switch (typeof r) {
                case 'function':
                  n = new t(r);
                case 'object':
                  if (
                    n === this ||
                    n.closed ||
                    'function' != typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var e = n;
                    (n = new t())._subscriptions = [e];
                  }
                  break;
                default:
                  throw new Error(
                    'unrecognized teardown ' + r + ' added to Subscription.'
                  );
              }
              var i = n._parentOrParents;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this];
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [n]) : o.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var r = this._subscriptions;
              if (r) {
                var n = r.indexOf(t);
                -1 !== n && r.splice(n, 1);
              }
            }),
            (t.EMPTY = (((r = new t()).closed = !0), r)),
            t
          );
        })();
      },
    },
  ]);
})();
