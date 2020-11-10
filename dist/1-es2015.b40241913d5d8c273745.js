(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    FQ1g: function (t, n, e) {
      'use strict';
      e.r(n),
        e.d(n, 'AboutModule', function () {
          return d;
        });
      var o = e('ofXK'),
        c = e('sYmb'),
        r = e('tyNb'),
        s = e('4u49'),
        b = e('AytR'),
        a = e('fXoL');
      let i = (() => {
        class t {
          constructor() {
            this.version = b.a.version;
          }
          ngOnInit() {}
        }
        return (
          (t.ɵfac = function (n) {
            return new (n || t)();
          }),
          (t.ɵcmp = a.Eb({
            type: t,
            selectors: [['app-about']],
            decls: 19,
            vars: 1,
            consts: [
              [1, 'container-fluid'],
              [1, 'jumbotron', 'text-center'],
              ['translate', ''],
              [1, 'far', 'fa-bookmark'],
            ],
            template: function (t, n) {
              1 & t &&
                (a.Pb(0, 'div', 0),
                a.xc(1, '\n  '),
                a.Pb(2, 'div', 1),
                a.xc(3, '\n    '),
                a.Pb(4, 'h1'),
                a.xc(5, '\n      '),
                a.Pb(6, 'span', 2),
                a.xc(7, 'APP_NAME'),
                a.Ob(),
                a.xc(8, '\n    '),
                a.Ob(),
                a.xc(9, '\n    '),
                a.Pb(10, 'p'),
                a.Lb(11, 'i', 3),
                a.xc(12, ' '),
                a.Pb(13, 'span', 2),
                a.xc(14, 'Version'),
                a.Ob(),
                a.xc(15),
                a.Ob(),
                a.xc(16, '\n  '),
                a.Ob(),
                a.xc(17, '\n'),
                a.Ob(),
                a.xc(18, '\n')),
                2 & t && (a.xb(15), a.zc(' ', n.version, ''));
            },
            directives: [c.a],
            styles: [''],
          })),
          t
        );
      })();
      const u = [
        { path: '', component: i, data: { title: Object(s.a)('About') } },
        { path: 'test', component: i, data: { title: Object(s.a)('About') } },
      ];
      let p = (() => {
          class t {}
          return (
            (t.ɵmod = a.Ib({ type: t })),
            (t.ɵinj = a.Hb({
              factory: function (n) {
                return new (n || t)();
              },
              providers: [],
              imports: [[r.h.forChild(u)], r.h],
            })),
            t
          );
        })(),
        d = (() => {
          class t {}
          return (
            (t.ɵmod = a.Ib({ type: t })),
            (t.ɵinj = a.Hb({
              factory: function (n) {
                return new (n || t)();
              },
              imports: [[o.b, c.b, p]],
            })),
            t
          );
        })();
    },
  },
]);
