'use strict';
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [803],
  {
    3023: (t, n, e) => {
      e.d(n, { R: () => a, x: () => r });
      var s = e(3696);
      const o = {},
        i = s.createContext(o);
      function a(t) {
        const n = s.useContext(i);
        return s.useMemo(
          function () {
            return 'function' == typeof t ? t(n) : { ...n, ...t };
          },
          [n, t]
        );
      }
      function r(t) {
        let n;
        return (
          (n = t.disableParentContext
            ? 'function' == typeof t.components
              ? t.components(o)
              : t.components || o
            : a(t.components)),
          s.createElement(i.Provider, { value: n }, t.children)
        );
      }
    },
    9369: (t, n, e) => {
      e.r(n),
        e.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => l,
        });
      const s = JSON.parse(
        '{"id":"installation","title":"Installation","description":"WIP","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/codora/docs/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar"}'
      );
      var o = e(2540),
        i = e(3023);
      const a = { sidebar_position: 1 },
        r = 'Installation',
        c = {},
        l = [];
      function d(t) {
        const n = { h1: 'h1', header: 'header', p: 'p', ...(0, i.R)(), ...t.components };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(n.header, { children: (0, o.jsx)(n.h1, { id: 'installation', children: 'Installation' }) }),
            '\n',
            (0, o.jsx)(n.p, { children: 'WIP' }),
          ],
        });
      }
      function u(t = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...t.components };
        return n ? (0, o.jsx)(n, { ...t, children: (0, o.jsx)(d, { ...t }) }) : d(t);
      }
    },
  },
]);
