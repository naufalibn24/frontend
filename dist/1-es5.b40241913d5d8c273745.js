!(function () {
  function n(n, t) {
    if (!(n instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function t(n, t) {
    for (var e = 0; e < t.length; e++) {
      var o = t[e];
      (o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(n, o.key, o);
    }
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
      FQ1g: function (e, o, c) {
        'use strict';
        c.r(o),
          c.d(o, 'AboutModule', function () {
            return h;
          });
        var i,
          r,
          a,
          b = c('ofXK'),
          u = c('sYmb'),
          s = c('tyNb'),
          f = c('4u49'),
          p = c('AytR'),
          l = c('fXoL'),
          d =
            (((i = (function () {
              function e() {
                n(this, e), (this.version = p.a.version);
              }
              var o, c, i;
              return (
                (o = e),
                (c = [{ key: 'ngOnInit', value: function () {} }]) &&
                  t(o.prototype, c),
                i && t(o, i),
                e
              );
            })()).ɵfac = function (n) {
              return new (n || i)();
            }),
            (i.ɵcmp = l.Eb({
              type: i,
              selectors: [['app-about']],
              decls: 19,
              vars: 1,
              consts: [
                [1, 'container-fluid'],
                [1, 'jumbotron', 'text-center'],
                ['translate', ''],
                [1, 'far', 'fa-bookmark'],
              ],
              template: function (n, t) {
                1 & n &&
                  (l.Pb(0, 'div', 0),
                  l.xc(1, '\n  '),
                  l.Pb(2, 'div', 1),
                  l.xc(3, '\n    '),
                  l.Pb(4, 'h1'),
                  l.xc(5, '\n      '),
                  l.Pb(6, 'span', 2),
                  l.xc(7, 'APP_NAME'),
                  l.Ob(),
                  l.xc(8, '\n    '),
                  l.Ob(),
                  l.xc(9, '\n    '),
                  l.Pb(10, 'p'),
                  l.Lb(11, 'i', 3),
                  l.xc(12, ' '),
                  l.Pb(13, 'span', 2),
                  l.xc(14, 'Version'),
                  l.Ob(),
                  l.xc(15),
                  l.Ob(),
                  l.xc(16, '\n  '),
                  l.Ob(),
                  l.xc(17, '\n'),
                  l.Ob(),
                  l.xc(18, '\n')),
                  2 & n && (l.xb(15), l.zc(' ', t.version, ''));
              },
              directives: [u.a],
              styles: [''],
            })),
            i),
          v = [
            { path: '', component: d, data: { title: Object(f.a)('About') } },
            {
              path: 'test',
              component: d,
              data: { title: Object(f.a)('About') },
            },
          ],
          x =
            (((a = function t() {
              n(this, t);
            }).ɵmod = l.Ib({ type: a })),
            (a.ɵinj = l.Hb({
              factory: function (n) {
                return new (n || a)();
              },
              providers: [],
              imports: [[s.h.forChild(v)], s.h],
            })),
            a),
          h =
            (((r = function t() {
              n(this, t);
            }).ɵmod = l.Ib({ type: r })),
            (r.ɵinj = l.Hb({
              factory: function (n) {
                return new (n || r)();
              },
              imports: [[b.b, u.b, x]],
            })),
            r);
      },
    },
  ]);
})();
