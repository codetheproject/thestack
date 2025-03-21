/*! For license information please see main.ba06db66.js.LICENSE.txt */
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [792],
  {
    99: (e, t, n) => {
      'use strict';
      t.rA = t.Ks = void 0;
      const r = n(4629);
      var a = n(4194);
      Object.defineProperty(t, 'Ks', {
        enumerable: !0,
        get: function () {
          return r.__importDefault(a).default;
        },
      });
      var o = n(4365);
      var i = n(3920);
      Object.defineProperty(t, 'rA', {
        enumerable: !0,
        get: function () {
          return i.getErrorCausalChain;
        },
      });
    },
    362: (e, t, n) => {
      'use strict';
      var r = n(6441);
      function a() {}
      function o() {}
      (o.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, o, i) {
            if (i !== r) {
              var l = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((l.name = 'Invariant Violation'), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    904: (e) => {
      'use strict';
      var t = (function () {
        var e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          var n = {},
            r = [];
          function a(r, o) {
            if (!(r in n)) {
              o.push(r);
              var i = o.indexOf(r);
              if (i < o.length - 1) throw new Error('Circular dependency: ' + o.slice(i).join(' -> '));
              var l = {},
                s = e[r];
              if (s) {
                function u(t) {
                  if (!(t in e)) throw new Error(r + ' depends on an unknown component ' + t);
                  if (!(t in l)) for (var i in (a(t, o), (l[t] = !0), n[t])) l[i] = !0;
                }
                t(s.require, u), t(s.optional, u), t(s.modify, u);
              }
              (n[r] = l), o.pop();
            }
          }
          return function (e) {
            var t = n[e];
            return t || (a(e, r), (t = n[e])), t;
          };
        }
        function a(e) {
          for (var t in e) return !0;
          return !1;
        }
        return function (o, i, l) {
          var s = (function (e) {
              var t = {};
              for (var n in e) {
                var r = e[n];
                for (var a in r)
                  if ('meta' != a) {
                    var o = r[a];
                    t[a] = 'string' == typeof o ? { title: o } : o;
                  }
              }
              return t;
            })(o),
            u = (function (e) {
              var n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var a in ((n = {}), e)) {
                    var o = e[a];
                    t(o && o.alias, function (t) {
                      if (t in n) throw new Error(t + ' cannot be alias for both ' + a + ' and ' + n[t]);
                      if (t in e) throw new Error(t + ' cannot be alias of ' + a + ' because it is a component.');
                      n[t] = a;
                    });
                  }
                return n[r] || r;
              };
            })(s);
          (i = i.map(u)), (l = (l || []).map(u));
          var c = n(i),
            d = n(l);
          i.forEach(function e(n) {
            var r = s[n];
            t(r && r.require, function (t) {
              t in d || ((c[t] = !0), e(t));
            });
          });
          for (var f, p = r(s), m = c; a(m); ) {
            for (var h in ((f = {}), m)) {
              var g = s[h];
              t(g && g.modify, function (e) {
                e in d && (f[e] = !0);
              });
            }
            for (var y in d)
              if (!(y in c))
                for (var b in p(y))
                  if (b in c) {
                    f[y] = !0;
                    break;
                  }
            for (var v in (m = f)) c[v] = !0;
          }
          var w = {
            getIds: function () {
              var e = [];
              return (
                w.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, a) {
                var o = a ? a.series : void 0,
                  i = a ? a.parallel : e,
                  l = {},
                  s = {};
                function u(e) {
                  if (e in l) return l[e];
                  s[e] = !0;
                  var a,
                    c = [];
                  for (var d in t(e)) d in n && c.push(d);
                  if (0 === c.length) a = r(e);
                  else {
                    var f = i(
                      c.map(function (e) {
                        var t = u(e);
                        return delete s[e], t;
                      })
                    );
                    o
                      ? (a = o(f, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (l[e] = a);
                }
                for (var c in n) u(c);
                var d = [];
                for (var f in s) d.push(l[f]);
                return i(d);
              })(p, c, t, n);
            },
          };
          return w;
        };
      })();
      e.exports = t;
    },
    1069: (e) => {
      e.exports &&
        (e.exports = {
          core: { meta: { path: 'components/prism-core.js', option: 'mandatory' }, core: 'Core' },
          themes: {
            meta: { path: 'themes/{id}.css', link: 'index.html?theme={id}', exclusive: !0 },
            prism: { title: 'Default', option: 'default' },
            'prism-dark': 'Dark',
            'prism-funky': 'Funky',
            'prism-okaidia': { title: 'Okaidia', owner: 'ocodia' },
            'prism-twilight': { title: 'Twilight', owner: 'remybach' },
            'prism-coy': { title: 'Coy', owner: 'tshedor' },
            'prism-solarizedlight': { title: 'Solarized Light', owner: 'hectormatos2011 ' },
            'prism-tomorrow': { title: 'Tomorrow Night', owner: 'Rosey' },
          },
          languages: {
            meta: { path: 'components/prism-{id}', noCSS: !0, examplesPath: 'examples/prism-{id}', addCheckAll: !0 },
            markup: {
              title: 'Markup',
              alias: ['html', 'xml', 'svg', 'mathml', 'ssml', 'atom', 'rss'],
              aliasTitles: {
                html: 'HTML',
                xml: 'XML',
                svg: 'SVG',
                mathml: 'MathML',
                ssml: 'SSML',
                atom: 'Atom',
                rss: 'RSS',
              },
              option: 'default',
            },
            css: { title: 'CSS', option: 'default', modify: 'markup' },
            clike: { title: 'C-like', option: 'default' },
            javascript: {
              title: 'JavaScript',
              require: 'clike',
              modify: 'markup',
              optional: 'regex',
              alias: 'js',
              option: 'default',
            },
            abap: { title: 'ABAP', owner: 'dellagustin' },
            abnf: { title: 'ABNF', owner: 'RunDevelopment' },
            actionscript: { title: 'ActionScript', require: 'javascript', modify: 'markup', owner: 'Golmote' },
            ada: { title: 'Ada', owner: 'Lucretia' },
            agda: { title: 'Agda', owner: 'xy-ren' },
            al: { title: 'AL', owner: 'RunDevelopment' },
            antlr4: { title: 'ANTLR4', alias: 'g4', owner: 'RunDevelopment' },
            apacheconf: { title: 'Apache Configuration', owner: 'GuiTeK' },
            apex: { title: 'Apex', require: ['clike', 'sql'], owner: 'RunDevelopment' },
            apl: { title: 'APL', owner: 'ngn' },
            applescript: { title: 'AppleScript', owner: 'Golmote' },
            aql: { title: 'AQL', owner: 'RunDevelopment' },
            arduino: { title: 'Arduino', require: 'cpp', alias: 'ino', owner: 'dkern' },
            arff: { title: 'ARFF', owner: 'Golmote' },
            armasm: { title: 'ARM Assembly', alias: 'arm-asm', owner: 'RunDevelopment' },
            arturo: {
              title: 'Arturo',
              alias: 'art',
              optional: ['bash', 'css', 'javascript', 'markup', 'markdown', 'sql'],
              owner: 'drkameleon',
            },
            asciidoc: { alias: 'adoc', title: 'AsciiDoc', owner: 'Golmote' },
            aspnet: { title: 'ASP.NET (C#)', require: ['markup', 'csharp'], owner: 'nauzilus' },
            asm6502: { title: '6502 Assembly', owner: 'kzurawel' },
            asmatmel: { title: 'Atmel AVR Assembly', owner: 'cerkit' },
            autohotkey: { title: 'AutoHotkey', owner: 'aviaryan' },
            autoit: { title: 'AutoIt', owner: 'Golmote' },
            avisynth: { title: 'AviSynth', alias: 'avs', owner: 'Zinfidel' },
            'avro-idl': { title: 'Avro IDL', alias: 'avdl', owner: 'RunDevelopment' },
            awk: { title: 'AWK', alias: 'gawk', aliasTitles: { gawk: 'GAWK' }, owner: 'RunDevelopment' },
            bash: {
              title: 'Bash',
              alias: ['sh', 'shell'],
              aliasTitles: { sh: 'Shell', shell: 'Shell' },
              owner: 'zeitgeist87',
            },
            basic: { title: 'BASIC', owner: 'Golmote' },
            batch: { title: 'Batch', owner: 'Golmote' },
            bbcode: {
              title: 'BBcode',
              alias: 'shortcode',
              aliasTitles: { shortcode: 'Shortcode' },
              owner: 'RunDevelopment',
            },
            bbj: { title: 'BBj', owner: 'hyyan' },
            bicep: { title: 'Bicep', owner: 'johnnyreilly' },
            birb: { title: 'Birb', require: 'clike', owner: 'Calamity210' },
            bison: { title: 'Bison', require: 'c', owner: 'Golmote' },
            bnf: { title: 'BNF', alias: 'rbnf', aliasTitles: { rbnf: 'RBNF' }, owner: 'RunDevelopment' },
            bqn: { title: 'BQN', owner: 'yewscion' },
            brainfuck: { title: 'Brainfuck', owner: 'Golmote' },
            brightscript: { title: 'BrightScript', owner: 'RunDevelopment' },
            bro: { title: 'Bro', owner: 'wayward710' },
            bsl: {
              title: 'BSL (1C:Enterprise)',
              alias: 'oscript',
              aliasTitles: { oscript: 'OneScript' },
              owner: 'Diversus23',
            },
            c: { title: 'C', require: 'clike', owner: 'zeitgeist87' },
            csharp: { title: 'C#', require: 'clike', alias: ['cs', 'dotnet'], owner: 'mvalipour' },
            cpp: { title: 'C++', require: 'c', owner: 'zeitgeist87' },
            cfscript: { title: 'CFScript', require: 'clike', alias: 'cfc', owner: 'mjclemente' },
            chaiscript: { title: 'ChaiScript', require: ['clike', 'cpp'], owner: 'RunDevelopment' },
            cil: { title: 'CIL', owner: 'sbrl' },
            cilkc: { title: 'Cilk/C', require: 'c', alias: 'cilk-c', owner: 'OpenCilk' },
            cilkcpp: { title: 'Cilk/C++', require: 'cpp', alias: ['cilk-cpp', 'cilk'], owner: 'OpenCilk' },
            clojure: { title: 'Clojure', owner: 'troglotit' },
            cmake: { title: 'CMake', owner: 'mjrogozinski' },
            cobol: { title: 'COBOL', owner: 'RunDevelopment' },
            coffeescript: { title: 'CoffeeScript', require: 'javascript', alias: 'coffee', owner: 'R-osey' },
            concurnas: { title: 'Concurnas', alias: 'conc', owner: 'jasontatton' },
            csp: { title: 'Content-Security-Policy', owner: 'ScottHelme' },
            cooklang: { title: 'Cooklang', owner: 'ahue' },
            coq: { title: 'Coq', owner: 'RunDevelopment' },
            crystal: { title: 'Crystal', require: 'ruby', owner: 'MakeNowJust' },
            'css-extras': { title: 'CSS Extras', require: 'css', modify: 'css', owner: 'milesj' },
            csv: { title: 'CSV', owner: 'RunDevelopment' },
            cue: { title: 'CUE', owner: 'RunDevelopment' },
            cypher: { title: 'Cypher', owner: 'RunDevelopment' },
            d: { title: 'D', require: 'clike', owner: 'Golmote' },
            dart: { title: 'Dart', require: 'clike', owner: 'Golmote' },
            dataweave: { title: 'DataWeave', owner: 'machaval' },
            dax: { title: 'DAX', owner: 'peterbud' },
            dhall: { title: 'Dhall', owner: 'RunDevelopment' },
            diff: { title: 'Diff', owner: 'uranusjr' },
            django: { title: 'Django/Jinja2', require: 'markup-templating', alias: 'jinja2', owner: 'romanvm' },
            'dns-zone-file': { title: 'DNS zone file', owner: 'RunDevelopment', alias: 'dns-zone' },
            docker: { title: 'Docker', alias: 'dockerfile', owner: 'JustinBeckwith' },
            dot: { title: 'DOT (Graphviz)', alias: 'gv', optional: 'markup', owner: 'RunDevelopment' },
            ebnf: { title: 'EBNF', owner: 'RunDevelopment' },
            editorconfig: { title: 'EditorConfig', owner: 'osipxd' },
            eiffel: { title: 'Eiffel', owner: 'Conaclos' },
            ejs: {
              title: 'EJS',
              require: ['javascript', 'markup-templating'],
              owner: 'RunDevelopment',
              alias: 'eta',
              aliasTitles: { eta: 'Eta' },
            },
            elixir: { title: 'Elixir', owner: 'Golmote' },
            elm: { title: 'Elm', owner: 'zwilias' },
            etlua: { title: 'Embedded Lua templating', require: ['lua', 'markup-templating'], owner: 'RunDevelopment' },
            erb: { title: 'ERB', require: ['ruby', 'markup-templating'], owner: 'Golmote' },
            erlang: { title: 'Erlang', owner: 'Golmote' },
            'excel-formula': { title: 'Excel Formula', alias: ['xlsx', 'xls'], owner: 'RunDevelopment' },
            fsharp: { title: 'F#', require: 'clike', owner: 'simonreynolds7' },
            factor: { title: 'Factor', owner: 'catb0t' },
            false: { title: 'False', owner: 'edukisto' },
            'firestore-security-rules': {
              title: 'Firestore security rules',
              require: 'clike',
              owner: 'RunDevelopment',
            },
            flow: { title: 'Flow', require: 'javascript', owner: 'Golmote' },
            fortran: { title: 'Fortran', owner: 'Golmote' },
            ftl: { title: 'FreeMarker Template Language', require: 'markup-templating', owner: 'RunDevelopment' },
            gml: { title: 'GameMaker Language', alias: 'gamemakerlanguage', require: 'clike', owner: 'LiarOnce' },
            gap: { title: 'GAP (CAS)', owner: 'RunDevelopment' },
            gcode: { title: 'G-code', owner: 'RunDevelopment' },
            gdscript: { title: 'GDScript', owner: 'RunDevelopment' },
            gedcom: { title: 'GEDCOM', owner: 'Golmote' },
            gettext: { title: 'gettext', alias: 'po', owner: 'RunDevelopment' },
            gherkin: { title: 'Gherkin', owner: 'hason' },
            git: { title: 'Git', owner: 'lgiraudel' },
            glsl: { title: 'GLSL', require: 'c', owner: 'Golmote' },
            gn: { title: 'GN', alias: 'gni', owner: 'RunDevelopment' },
            'linker-script': { title: 'GNU Linker Script', alias: 'ld', owner: 'RunDevelopment' },
            go: { title: 'Go', require: 'clike', owner: 'arnehormann' },
            'go-module': { title: 'Go module', alias: 'go-mod', owner: 'RunDevelopment' },
            gradle: { title: 'Gradle', require: 'clike', owner: 'zeabdelkhalek-badido18' },
            graphql: { title: 'GraphQL', optional: 'markdown', owner: 'Golmote' },
            groovy: { title: 'Groovy', require: 'clike', owner: 'robfletcher' },
            haml: {
              title: 'Haml',
              require: 'ruby',
              optional: [
                'css',
                'css-extras',
                'coffeescript',
                'erb',
                'javascript',
                'less',
                'markdown',
                'scss',
                'textile',
              ],
              owner: 'Golmote',
            },
            handlebars: {
              title: 'Handlebars',
              require: 'markup-templating',
              alias: ['hbs', 'mustache'],
              aliasTitles: { mustache: 'Mustache' },
              owner: 'Golmote',
            },
            haskell: { title: 'Haskell', alias: 'hs', owner: 'bholst' },
            haxe: { title: 'Haxe', require: 'clike', optional: 'regex', owner: 'Golmote' },
            hcl: { title: 'HCL', owner: 'outsideris' },
            hlsl: { title: 'HLSL', require: 'c', owner: 'RunDevelopment' },
            hoon: { title: 'Hoon', owner: 'matildepark' },
            http: {
              title: 'HTTP',
              optional: ['csp', 'css', 'hpkp', 'hsts', 'javascript', 'json', 'markup', 'uri'],
              owner: 'danielgtaylor',
            },
            hpkp: { title: 'HTTP Public-Key-Pins', owner: 'ScottHelme' },
            hsts: { title: 'HTTP Strict-Transport-Security', owner: 'ScottHelme' },
            ichigojam: { title: 'IchigoJam', owner: 'BlueCocoa' },
            icon: { title: 'Icon', owner: 'Golmote' },
            'icu-message-format': { title: 'ICU Message Format', owner: 'RunDevelopment' },
            idris: { title: 'Idris', alias: 'idr', owner: 'KeenS', require: 'haskell' },
            ignore: {
              title: '.ignore',
              owner: 'osipxd',
              alias: ['gitignore', 'hgignore', 'npmignore'],
              aliasTitles: { gitignore: '.gitignore', hgignore: '.hgignore', npmignore: '.npmignore' },
            },
            inform7: { title: 'Inform 7', owner: 'Golmote' },
            ini: { title: 'Ini', owner: 'aviaryan' },
            io: { title: 'Io', owner: 'AlesTsurko' },
            j: { title: 'J', owner: 'Golmote' },
            java: { title: 'Java', require: 'clike', owner: 'sherblot' },
            javadoc: {
              title: 'JavaDoc',
              require: ['markup', 'java', 'javadoclike'],
              modify: 'java',
              optional: 'scala',
              owner: 'RunDevelopment',
            },
            javadoclike: { title: 'JavaDoc-like', modify: ['java', 'javascript', 'php'], owner: 'RunDevelopment' },
            javastacktrace: { title: 'Java stack trace', owner: 'RunDevelopment' },
            jexl: { title: 'Jexl', owner: 'czosel' },
            jolie: { title: 'Jolie', require: 'clike', owner: 'thesave' },
            jq: { title: 'JQ', owner: 'RunDevelopment' },
            jsdoc: {
              title: 'JSDoc',
              require: ['javascript', 'javadoclike', 'typescript'],
              modify: 'javascript',
              optional: ['actionscript', 'coffeescript'],
              owner: 'RunDevelopment',
            },
            'js-extras': {
              title: 'JS Extras',
              require: 'javascript',
              modify: 'javascript',
              optional: ['actionscript', 'coffeescript', 'flow', 'n4js', 'typescript'],
              owner: 'RunDevelopment',
            },
            json: {
              title: 'JSON',
              alias: 'webmanifest',
              aliasTitles: { webmanifest: 'Web App Manifest' },
              owner: 'CupOfTea696',
            },
            json5: { title: 'JSON5', require: 'json', owner: 'RunDevelopment' },
            jsonp: { title: 'JSONP', require: 'json', owner: 'RunDevelopment' },
            jsstacktrace: { title: 'JS stack trace', owner: 'sbrl' },
            'js-templates': {
              title: 'JS Templates',
              require: 'javascript',
              modify: 'javascript',
              optional: ['css', 'css-extras', 'graphql', 'markdown', 'markup', 'sql'],
              owner: 'RunDevelopment',
            },
            julia: { title: 'Julia', owner: 'cdagnino' },
            keepalived: { title: 'Keepalived Configure', owner: 'dev-itsheng' },
            keyman: { title: 'Keyman', owner: 'mcdurdin' },
            kotlin: {
              title: 'Kotlin',
              alias: ['kt', 'kts'],
              aliasTitles: { kts: 'Kotlin Script' },
              require: 'clike',
              owner: 'Golmote',
            },
            kumir: { title: 'KuMir (\u041a\u0443\u041c\u0438\u0440)', alias: 'kum', owner: 'edukisto' },
            kusto: { title: 'Kusto', owner: 'RunDevelopment' },
            latex: {
              title: 'LaTeX',
              alias: ['tex', 'context'],
              aliasTitles: { tex: 'TeX', context: 'ConTeXt' },
              owner: 'japborst',
            },
            latte: { title: 'Latte', require: ['clike', 'markup-templating', 'php'], owner: 'nette' },
            less: { title: 'Less', require: 'css', optional: 'css-extras', owner: 'Golmote' },
            lilypond: { title: 'LilyPond', require: 'scheme', alias: 'ly', owner: 'RunDevelopment' },
            liquid: { title: 'Liquid', require: 'markup-templating', owner: 'cinhtau' },
            lisp: { title: 'Lisp', alias: ['emacs', 'elisp', 'emacs-lisp'], owner: 'JuanCaicedo' },
            livescript: { title: 'LiveScript', owner: 'Golmote' },
            llvm: { title: 'LLVM IR', owner: 'porglezomp' },
            log: { title: 'Log file', optional: 'javastacktrace', owner: 'RunDevelopment' },
            lolcode: { title: 'LOLCODE', owner: 'Golmote' },
            lua: { title: 'Lua', owner: 'Golmote' },
            magma: { title: 'Magma (CAS)', owner: 'RunDevelopment' },
            makefile: { title: 'Makefile', owner: 'Golmote' },
            markdown: { title: 'Markdown', require: 'markup', optional: 'yaml', alias: 'md', owner: 'Golmote' },
            'markup-templating': { title: 'Markup templating', require: 'markup', owner: 'Golmote' },
            mata: { title: 'Mata', owner: 'RunDevelopment' },
            matlab: { title: 'MATLAB', owner: 'Golmote' },
            maxscript: { title: 'MAXScript', owner: 'RunDevelopment' },
            mel: { title: 'MEL', owner: 'Golmote' },
            mermaid: { title: 'Mermaid', owner: 'RunDevelopment' },
            metafont: { title: 'METAFONT', owner: 'LaeriExNihilo' },
            mizar: { title: 'Mizar', owner: 'Golmote' },
            mongodb: { title: 'MongoDB', owner: 'airs0urce', require: 'javascript' },
            monkey: { title: 'Monkey', owner: 'Golmote' },
            moonscript: { title: 'MoonScript', alias: 'moon', owner: 'RunDevelopment' },
            n1ql: { title: 'N1QL', owner: 'TMWilds' },
            n4js: { title: 'N4JS', require: 'javascript', optional: 'jsdoc', alias: 'n4jsd', owner: 'bsmith-n4' },
            'nand2tetris-hdl': { title: 'Nand To Tetris HDL', owner: 'stephanmax' },
            naniscript: { title: 'Naninovel Script', owner: 'Elringus', alias: 'nani' },
            nasm: { title: 'NASM', owner: 'rbmj' },
            neon: { title: 'NEON', owner: 'nette' },
            nevod: { title: 'Nevod', owner: 'nezaboodka' },
            nginx: { title: 'nginx', owner: 'volado' },
            nim: { title: 'Nim', owner: 'Golmote' },
            nix: { title: 'Nix', owner: 'Golmote' },
            nsis: { title: 'NSIS', owner: 'idleberg' },
            objectivec: { title: 'Objective-C', require: 'c', alias: 'objc', owner: 'uranusjr' },
            ocaml: { title: 'OCaml', owner: 'Golmote' },
            odin: { title: 'Odin', owner: 'edukisto' },
            opencl: { title: 'OpenCL', require: 'c', modify: ['c', 'cpp'], owner: 'Milania1' },
            openqasm: { title: 'OpenQasm', alias: 'qasm', owner: 'RunDevelopment' },
            oz: { title: 'Oz', owner: 'Golmote' },
            parigp: { title: 'PARI/GP', owner: 'Golmote' },
            parser: { title: 'Parser', require: 'markup', owner: 'Golmote' },
            pascal: {
              title: 'Pascal',
              alias: 'objectpascal',
              aliasTitles: { objectpascal: 'Object Pascal' },
              owner: 'Golmote',
            },
            pascaligo: { title: 'Pascaligo', owner: 'DefinitelyNotAGoat' },
            psl: { title: 'PATROL Scripting Language', owner: 'bertysentry' },
            pcaxis: { title: 'PC-Axis', alias: 'px', owner: 'RunDevelopment' },
            peoplecode: { title: 'PeopleCode', alias: 'pcode', owner: 'RunDevelopment' },
            perl: { title: 'Perl', owner: 'Golmote' },
            php: { title: 'PHP', require: 'markup-templating', owner: 'milesj' },
            phpdoc: { title: 'PHPDoc', require: ['php', 'javadoclike'], modify: 'php', owner: 'RunDevelopment' },
            'php-extras': { title: 'PHP Extras', require: 'php', modify: 'php', owner: 'milesj' },
            'plant-uml': { title: 'PlantUML', alias: 'plantuml', owner: 'RunDevelopment' },
            plsql: { title: 'PL/SQL', require: 'sql', owner: 'Golmote' },
            powerquery: { title: 'PowerQuery', alias: ['pq', 'mscript'], owner: 'peterbud' },
            powershell: { title: 'PowerShell', owner: 'nauzilus' },
            processing: { title: 'Processing', require: 'clike', owner: 'Golmote' },
            prolog: { title: 'Prolog', owner: 'Golmote' },
            promql: { title: 'PromQL', owner: 'arendjr' },
            properties: { title: '.properties', owner: 'Golmote' },
            protobuf: { title: 'Protocol Buffers', require: 'clike', owner: 'just-boris' },
            pug: {
              title: 'Pug',
              require: ['markup', 'javascript'],
              optional: [
                'coffeescript',
                'ejs',
                'handlebars',
                'less',
                'livescript',
                'markdown',
                'scss',
                'stylus',
                'twig',
              ],
              owner: 'Golmote',
            },
            puppet: { title: 'Puppet', owner: 'Golmote' },
            pure: { title: 'Pure', optional: ['c', 'cpp', 'fortran'], owner: 'Golmote' },
            purebasic: { title: 'PureBasic', require: 'clike', alias: 'pbfasm', owner: 'HeX0R101' },
            purescript: { title: 'PureScript', require: 'haskell', alias: 'purs', owner: 'sriharshachilakapati' },
            python: { title: 'Python', alias: 'py', owner: 'multipetros' },
            qsharp: { title: 'Q#', require: 'clike', alias: 'qs', owner: 'fedonman' },
            q: { title: 'Q (kdb+ database)', owner: 'Golmote' },
            qml: { title: 'QML', require: 'javascript', owner: 'RunDevelopment' },
            qore: { title: 'Qore', require: 'clike', owner: 'temnroegg' },
            r: { title: 'R', owner: 'Golmote' },
            racket: { title: 'Racket', require: 'scheme', alias: 'rkt', owner: 'RunDevelopment' },
            cshtml: {
              title: 'Razor C#',
              alias: 'razor',
              require: ['markup', 'csharp'],
              optional: ['css', 'css-extras', 'javascript', 'js-extras'],
              owner: 'RunDevelopment',
            },
            jsx: {
              title: 'React JSX',
              require: ['markup', 'javascript'],
              optional: ['jsdoc', 'js-extras', 'js-templates'],
              owner: 'vkbansal',
            },
            tsx: { title: 'React TSX', require: ['jsx', 'typescript'] },
            reason: { title: 'Reason', require: 'clike', owner: 'Golmote' },
            regex: { title: 'Regex', owner: 'RunDevelopment' },
            rego: { title: 'Rego', owner: 'JordanSh' },
            renpy: { title: "Ren'py", alias: 'rpy', owner: 'HyuchiaDiego' },
            rescript: { title: 'ReScript', alias: 'res', owner: 'vmarcosp' },
            rest: { title: 'reST (reStructuredText)', owner: 'Golmote' },
            rip: { title: 'Rip', owner: 'ravinggenius' },
            roboconf: { title: 'Roboconf', owner: 'Golmote' },
            robotframework: { title: 'Robot Framework', alias: 'robot', owner: 'RunDevelopment' },
            ruby: { title: 'Ruby', require: 'clike', alias: 'rb', owner: 'samflores' },
            rust: { title: 'Rust', owner: 'Golmote' },
            sas: { title: 'SAS', optional: ['groovy', 'lua', 'sql'], owner: 'Golmote' },
            sass: { title: 'Sass (Sass)', require: 'css', optional: 'css-extras', owner: 'Golmote' },
            scss: { title: 'Sass (SCSS)', require: 'css', optional: 'css-extras', owner: 'MoOx' },
            scala: { title: 'Scala', require: 'java', owner: 'jozic' },
            scheme: { title: 'Scheme', owner: 'bacchus123' },
            'shell-session': {
              title: 'Shell session',
              require: 'bash',
              alias: ['sh-session', 'shellsession'],
              owner: 'RunDevelopment',
            },
            smali: { title: 'Smali', owner: 'RunDevelopment' },
            smalltalk: { title: 'Smalltalk', owner: 'Golmote' },
            smarty: { title: 'Smarty', require: 'markup-templating', optional: 'php', owner: 'Golmote' },
            sml: { title: 'SML', alias: 'smlnj', aliasTitles: { smlnj: 'SML/NJ' }, owner: 'RunDevelopment' },
            solidity: { title: 'Solidity (Ethereum)', alias: 'sol', require: 'clike', owner: 'glachaud' },
            'solution-file': { title: 'Solution file', alias: 'sln', owner: 'RunDevelopment' },
            soy: { title: 'Soy (Closure Template)', require: 'markup-templating', owner: 'Golmote' },
            sparql: { title: 'SPARQL', require: 'turtle', owner: 'Triply-Dev', alias: 'rq' },
            'splunk-spl': { title: 'Splunk SPL', owner: 'RunDevelopment' },
            sqf: { title: 'SQF: Status Quo Function (Arma 3)', require: 'clike', owner: 'RunDevelopment' },
            sql: { title: 'SQL', owner: 'multipetros' },
            squirrel: { title: 'Squirrel', require: 'clike', owner: 'RunDevelopment' },
            stan: { title: 'Stan', owner: 'RunDevelopment' },
            stata: { title: 'Stata Ado', require: ['mata', 'java', 'python'], owner: 'RunDevelopment' },
            iecst: { title: 'Structured Text (IEC 61131-3)', owner: 'serhioromano' },
            stylus: { title: 'Stylus', owner: 'vkbansal' },
            supercollider: { title: 'SuperCollider', alias: 'sclang', owner: 'RunDevelopment' },
            swift: { title: 'Swift', owner: 'chrischares' },
            systemd: { title: 'Systemd configuration file', owner: 'RunDevelopment' },
            't4-templating': { title: 'T4 templating', owner: 'RunDevelopment' },
            't4-cs': {
              title: 'T4 Text Templates (C#)',
              require: ['t4-templating', 'csharp'],
              alias: 't4',
              owner: 'RunDevelopment',
            },
            't4-vb': { title: 'T4 Text Templates (VB)', require: ['t4-templating', 'vbnet'], owner: 'RunDevelopment' },
            tap: { title: 'TAP', owner: 'isaacs', require: 'yaml' },
            tcl: { title: 'Tcl', owner: 'PeterChaplin' },
            tt2: { title: 'Template Toolkit 2', require: ['clike', 'markup-templating'], owner: 'gflohr' },
            textile: { title: 'Textile', require: 'markup', optional: 'css', owner: 'Golmote' },
            toml: { title: 'TOML', owner: 'RunDevelopment' },
            tremor: {
              title: 'Tremor',
              alias: ['trickle', 'troy'],
              owner: 'darach',
              aliasTitles: { trickle: 'trickle', troy: 'troy' },
            },
            turtle: { title: 'Turtle', alias: 'trig', aliasTitles: { trig: 'TriG' }, owner: 'jakubklimek' },
            twig: { title: 'Twig', require: 'markup-templating', owner: 'brandonkelly' },
            typescript: {
              title: 'TypeScript',
              require: 'javascript',
              optional: 'js-templates',
              alias: 'ts',
              owner: 'vkbansal',
            },
            typoscript: {
              title: 'TypoScript',
              alias: 'tsconfig',
              aliasTitles: { tsconfig: 'TSConfig' },
              owner: 'dkern',
            },
            unrealscript: { title: 'UnrealScript', alias: ['uscript', 'uc'], owner: 'RunDevelopment' },
            uorazor: { title: 'UO Razor Script', owner: 'jaseowns' },
            uri: { title: 'URI', alias: 'url', aliasTitles: { url: 'URL' }, owner: 'RunDevelopment' },
            v: { title: 'V', require: 'clike', owner: 'taggon' },
            vala: { title: 'Vala', require: 'clike', optional: 'regex', owner: 'TemplarVolk' },
            vbnet: { title: 'VB.Net', require: 'basic', owner: 'Bigsby' },
            velocity: { title: 'Velocity', require: 'markup', owner: 'Golmote' },
            verilog: { title: 'Verilog', owner: 'a-rey' },
            vhdl: { title: 'VHDL', owner: 'a-rey' },
            vim: { title: 'vim', owner: 'westonganger' },
            'visual-basic': {
              title: 'Visual Basic',
              alias: ['vb', 'vba'],
              aliasTitles: { vba: 'VBA' },
              owner: 'Golmote',
            },
            warpscript: { title: 'WarpScript', owner: 'RunDevelopment' },
            wasm: { title: 'WebAssembly', owner: 'Golmote' },
            'web-idl': { title: 'Web IDL', alias: 'webidl', owner: 'RunDevelopment' },
            wgsl: { title: 'WGSL', owner: 'Dr4gonthree' },
            wiki: { title: 'Wiki markup', require: 'markup', owner: 'Golmote' },
            wolfram: {
              title: 'Wolfram language',
              alias: ['mathematica', 'nb', 'wl'],
              aliasTitles: { mathematica: 'Mathematica', nb: 'Mathematica Notebook' },
              owner: 'msollami',
            },
            wren: { title: 'Wren', owner: 'clsource' },
            xeora: {
              title: 'Xeora',
              require: 'markup',
              alias: 'xeoracube',
              aliasTitles: { xeoracube: 'XeoraCube' },
              owner: 'freakmaxi',
            },
            'xml-doc': {
              title: 'XML doc (.net)',
              require: 'markup',
              modify: ['csharp', 'fsharp', 'vbnet'],
              owner: 'RunDevelopment',
            },
            xojo: { title: 'Xojo (REALbasic)', owner: 'Golmote' },
            xquery: { title: 'XQuery', require: 'markup', owner: 'Golmote' },
            yaml: { title: 'YAML', alias: 'yml', owner: 'hason' },
            yang: { title: 'YANG', owner: 'RunDevelopment' },
            zig: { title: 'Zig', owner: 'RunDevelopment' },
          },
          plugins: {
            meta: { path: 'plugins/{id}/prism-{id}', link: 'plugins/{id}/' },
            'line-highlight': { title: 'Line Highlight', description: 'Highlights specific lines and/or line ranges.' },
            'line-numbers': {
              title: 'Line Numbers',
              description: 'Line number at the beginning of code lines.',
              owner: 'kuba-kubula',
            },
            'show-invisibles': {
              title: 'Show Invisibles',
              description: 'Show hidden characters such as tabs and line breaks.',
              optional: ['autolinker', 'data-uri-highlight'],
            },
            autolinker: {
              title: 'Autolinker',
              description: 'Converts URLs and emails in code to clickable links. Parses Markdown links in comments.',
            },
            wpd: {
              title: 'WebPlatform Docs',
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            'custom-class': {
              title: 'Custom Class',
              description:
                "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
              owner: 'dvkndn',
              noCSS: !0,
            },
            'file-highlight': {
              title: 'File Highlight',
              description: 'Fetch external files and highlight them with Prism. Used on the Prism website itself.',
              noCSS: !0,
            },
            'show-language': {
              title: 'Show Language',
              description: 'Display the highlighted language in code blocks (inline code does not show the label).',
              owner: 'nauzilus',
              noCSS: !0,
              require: 'toolbar',
            },
            'jsonp-highlight': {
              title: 'JSONP Highlight',
              description:
                'Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).',
              noCSS: !0,
              owner: 'nauzilus',
            },
            'highlight-keywords': {
              title: 'Highlight Keywords',
              description: 'Adds special CSS classes for each keyword for fine-grained highlighting.',
              owner: 'vkbansal',
              noCSS: !0,
            },
            'remove-initial-line-feed': {
              title: 'Remove initial line feed',
              description: 'Removes the initial line feed in code blocks.',
              owner: 'Golmote',
              noCSS: !0,
            },
            'inline-color': {
              title: 'Inline color',
              description: 'Adds a small inline preview for colors in style sheets.',
              require: 'css-extras',
              owner: 'RunDevelopment',
            },
            previewers: {
              title: 'Previewers',
              description: 'Previewers for angles, colors, gradients, easing and time.',
              require: 'css-extras',
              owner: 'Golmote',
            },
            autoloader: {
              title: 'Autoloader',
              description: 'Automatically loads the needed languages to highlight the code blocks.',
              owner: 'Golmote',
              noCSS: !0,
            },
            'keep-markup': {
              title: 'Keep Markup',
              description: 'Prevents custom markup from being dropped out during highlighting.',
              owner: 'Golmote',
              optional: 'normalize-whitespace',
              noCSS: !0,
            },
            'command-line': {
              title: 'Command Line',
              description:
                'Display a command line with a prompt and, optionally, the output/response from the commands.',
              owner: 'chriswells0',
            },
            'unescaped-markup': {
              title: 'Unescaped Markup',
              description: 'Write markup without having to escape anything.',
            },
            'normalize-whitespace': {
              title: 'Normalize Whitespace',
              description: 'Supports multiple operations to normalize whitespace in code blocks.',
              owner: 'zeitgeist87',
              optional: 'unescaped-markup',
              noCSS: !0,
            },
            'data-uri-highlight': {
              title: 'Data-URI Highlight',
              description: 'Highlights data-URI contents.',
              owner: 'Golmote',
              noCSS: !0,
            },
            toolbar: {
              title: 'Toolbar',
              description: 'Attach a toolbar for plugins to easily register buttons on the top of a code block.',
              owner: 'mAAdhaTTah',
            },
            'copy-to-clipboard': {
              title: 'Copy to Clipboard Button',
              description: 'Add a button that copies the code block to the clipboard when clicked.',
              owner: 'mAAdhaTTah',
              require: 'toolbar',
              noCSS: !0,
            },
            'download-button': {
              title: 'Download Button',
              description: 'A button in the toolbar of a code block adding a convenient way to download a code file.',
              owner: 'Golmote',
              require: 'toolbar',
              noCSS: !0,
            },
            'match-braces': {
              title: 'Match braces',
              description: 'Highlights matching braces.',
              owner: 'RunDevelopment',
            },
            'diff-highlight': {
              title: 'Diff Highlight',
              description: 'Highlights the code inside diff blocks.',
              owner: 'RunDevelopment',
              require: 'diff',
            },
            'filter-highlight-all': {
              title: 'Filter highlightAll',
              description:
                'Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.',
              owner: 'RunDevelopment',
              noCSS: !0,
            },
            treeview: {
              title: 'Treeview',
              description: 'A language with special styles to highlight file system tree structures.',
              owner: 'Golmote',
            },
          },
        });
    },
    1139: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => o });
      var r = n(7671),
        a = n.n(r);
      a().configure({ showSpinner: !1 });
      const o = {
        onRouteUpdate(e) {
          let { location: t, previousLocation: n } = e;
          if (n && t.pathname !== n.pathname) {
            const e = window.setTimeout(() => {
              a().start();
            }, 200);
            return () => window.clearTimeout(e);
          }
        },
        onRouteDidUpdate() {
          a().done();
        },
      };
    },
    1146: (e, t, n) => {
      'use strict';
      function r(e, t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          r(e, t)
        );
      }
      function a(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), r(e, t);
      }
      n.d(t, { A: () => a });
    },
    1370: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      const r = (e) => 'object' == typeof e && !!e && Object.keys(e).length > 0;
      function a(e) {
        const t = {};
        return (
          (function e(n, a) {
            Object.entries(n).forEach((n) => {
              let [o, i] = n;
              const l = a ? `${a}.${o}` : o;
              r(i) ? e(i, l) : (t[l] = i);
            });
          })(e),
          t
        );
      }
    },
    1434: (e, t, n) => {
      'use strict';
      e.exports = n(4625);
    },
    1441: (e, t, n) => {
      var r = { './': 5558 };
      function a(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 1441);
    },
    1599: (e, t, n) => {
      'use strict';
      n.d(t, { VQ: () => g, g1: () => b });
      var r = n(3696),
        a = n(9294),
        o = n(2524),
        i = n(2427),
        l = n(3540),
        s = n(8225),
        u = n(2540);
      const c = (e) => `docs-preferred-version-${e}`,
        d = {
          save: (e, t, n) => {
            (0, l.Wf)(c(e), { persistence: t }).set(n);
          },
          read: (e, t) => (0, l.Wf)(c(e), { persistence: t }).get(),
          clear: (e, t) => {
            (0, l.Wf)(c(e), { persistence: t }).del();
          },
        },
        f = (e) => Object.fromEntries(e.map((e) => [e, { preferredVersionName: null }]));
      const p = r.createContext(null);
      function m() {
        const e = (0, a.Gy)(),
          t = (0, i.p)().docs.versionPersistence,
          n = (0, r.useMemo)(() => Object.keys(e), [e]),
          [o, l] = (0, r.useState)(() => f(n));
        (0, r.useEffect)(() => {
          l(
            (function (e) {
              let { pluginIds: t, versionPersistence: n, allDocsData: r } = e;
              function a(e) {
                const t = d.read(e, n);
                return r[e].versions.some((e) => e.name === t)
                  ? { preferredVersionName: t }
                  : (d.clear(e, n), { preferredVersionName: null });
              }
              return Object.fromEntries(t.map((e) => [e, a(e)]));
            })({ allDocsData: e, versionPersistence: t, pluginIds: n })
          );
        }, [e, t, n]);
        return [
          o,
          (0, r.useMemo)(
            () => ({
              savePreferredVersion: function (e, n) {
                d.save(e, t, n), l((t) => ({ ...t, [e]: { preferredVersionName: n } }));
              },
            }),
            [t]
          ),
        ];
      }
      function h(e) {
        let { children: t } = e;
        const n = m();
        return (0, u.jsx)(p.Provider, { value: n, children: t });
      }
      function g(e) {
        let { children: t } = e;
        return (0, u.jsx)(h, { children: t });
      }
      function y() {
        const e = (0, r.useContext)(p);
        if (!e) throw new s.dV('DocsPreferredVersionContextProvider');
        return e;
      }
      function b(e) {
        void 0 === e && (e = o.W);
        const t = (0, a.ht)(e),
          [n, i] = y(),
          { preferredVersionName: l } = n[e];
        return {
          preferredVersion: t.versions.find((e) => e.name === l) ?? null,
          savePreferredVersionName: (0, r.useCallback)(
            (t) => {
              i.savePreferredVersion(e, t);
            },
            [i, e]
          ),
        };
      }
    },
    1745: (e, t) => {
      'use strict';
      var n = Symbol.for('react.transitional.element'),
        r = Symbol.for('react.portal'),
        a = Symbol.for('react.fragment'),
        o = Symbol.for('react.strict_mode'),
        i = Symbol.for('react.profiler'),
        l = Symbol.for('react.consumer'),
        s = Symbol.for('react.context'),
        u = Symbol.for('react.forward_ref'),
        c = Symbol.for('react.suspense'),
        d = Symbol.for('react.memo'),
        f = Symbol.for('react.lazy'),
        p = Symbol.iterator;
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        g = {};
      function y(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || m);
      }
      function b() {}
      function v(e, t, n) {
        (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || m);
      }
      (y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (e, t) {
          if ('object' != typeof e && 'function' != typeof e && null != e)
            throw Error(
              'takes an object of state variables to update or a function which returns an object of state variables.'
            );
          this.updater.enqueueSetState(this, e, t, 'setState');
        }),
        (y.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
        }),
        (b.prototype = y.prototype);
      var w = (v.prototype = new b());
      (w.constructor = v), h(w, y.prototype), (w.isPureReactComponent = !0);
      var k = Array.isArray,
        S = { H: null, A: null, T: null, S: null },
        x = Object.prototype.hasOwnProperty;
      function E(e, t, r, a, o, i) {
        return (r = i.ref), { $$typeof: n, type: e, key: t, ref: void 0 !== r ? r : null, props: i };
      }
      function _(e) {
        return 'object' == typeof e && null !== e && e.$$typeof === n;
      }
      var C = /\/+/g;
      function A(e, t) {
        return 'object' == typeof e && null !== e && null != e.key
          ? ((n = '' + e.key),
            (r = { '=': '=0', ':': '=2' }),
            '$' +
              n.replace(/[=:]/g, function (e) {
                return r[e];
              }))
          : t.toString(36);
        var n, r;
      }
      function T() {}
      function j(e, t, a, o, i) {
        var l = typeof e;
        ('undefined' !== l && 'boolean' !== l) || (e = null);
        var s,
          u,
          c = !1;
        if (null === e) c = !0;
        else
          switch (l) {
            case 'bigint':
            case 'string':
            case 'number':
              c = !0;
              break;
            case 'object':
              switch (e.$$typeof) {
                case n:
                case r:
                  c = !0;
                  break;
                case f:
                  return j((c = e._init)(e._payload), t, a, o, i);
              }
          }
        if (c)
          return (
            (i = i(e)),
            (c = '' === o ? '.' + A(e, 0) : o),
            k(i)
              ? ((a = ''),
                null != c && (a = c.replace(C, '$&/') + '/'),
                j(i, t, a, '', function (e) {
                  return e;
                }))
              : null != i &&
                (_(i) &&
                  ((s = i),
                  (u = a + (null == i.key || (e && e.key === i.key) ? '' : ('' + i.key).replace(C, '$&/') + '/') + c),
                  (i = E(s.type, u, void 0, 0, 0, s.props))),
                t.push(i)),
            1
          );
        c = 0;
        var d,
          m = '' === o ? '.' : o + ':';
        if (k(e)) for (var h = 0; h < e.length; h++) c += j((o = e[h]), t, a, (l = m + A(o, h)), i);
        else if (
          'function' ==
          typeof (h =
            null === (d = e) || 'object' != typeof d
              ? null
              : 'function' == typeof (d = (p && d[p]) || d['@@iterator'])
              ? d
              : null)
        )
          for (e = h.call(e), h = 0; !(o = e.next()).done; ) c += j((o = o.value), t, a, (l = m + A(o, h++)), i);
        else if ('object' === l) {
          if ('function' == typeof e.then)
            return j(
              (function (e) {
                switch (e.status) {
                  case 'fulfilled':
                    return e.value;
                  case 'rejected':
                    throw e.reason;
                  default:
                    switch (
                      ('string' == typeof e.status
                        ? e.then(T, T)
                        : ((e.status = 'pending'),
                          e.then(
                            function (t) {
                              'pending' === e.status && ((e.status = 'fulfilled'), (e.value = t));
                            },
                            function (t) {
                              'pending' === e.status && ((e.status = 'rejected'), (e.reason = t));
                            }
                          )),
                      e.status)
                    ) {
                      case 'fulfilled':
                        return e.value;
                      case 'rejected':
                        throw e.reason;
                    }
                }
                throw e;
              })(e),
              t,
              a,
              o,
              i
            );
          throw (
            ((t = String(e)),
            Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === t ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
                '). If you meant to render a collection of children, use an array instead.'
            ))
          );
        }
        return c;
      }
      function P(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          j(e, r, '', '', function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function N(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var O =
        'function' == typeof reportError
          ? reportError
          : function (e) {
              if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    'object' == typeof e && null !== e && 'string' == typeof e.message ? String(e.message) : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if ('object' == typeof process && 'function' == typeof process.emit)
                return void process.emit('uncaughtException', e);
              console.error(e);
            };
      function L() {}
      (t.Children = {
        map: P,
        forEach: function (e, t, n) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!_(e)) throw Error('React.Children.only expected to receive a single React element child.');
          return e;
        },
      }),
        (t.Component = y),
        (t.Fragment = a),
        (t.Profiler = i),
        (t.PureComponent = v),
        (t.StrictMode = o),
        (t.Suspense = c),
        (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
        (t.act = function () {
          throw Error('act(...) is not supported in production builds of React.');
        }),
        (t.cache = function (e) {
          return function () {
            return e.apply(null, arguments);
          };
        }),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error('The argument must be a React element, but you passed ' + e + '.');
          var r = h({}, e.props),
            a = e.key;
          if (null != t)
            for (o in (void 0 !== t.ref && void 0, void 0 !== t.key && (a = '' + t.key), t))
              !x.call(t, o) ||
                'key' === o ||
                '__self' === o ||
                '__source' === o ||
                ('ref' === o && void 0 === t.ref) ||
                (r[o] = t[o]);
          var o = arguments.length - 2;
          if (1 === o) r.children = n;
          else if (1 < o) {
            for (var i = Array(o), l = 0; l < o; l++) i[l] = arguments[l + 2];
            r.children = i;
          }
          return E(e.type, a, void 0, 0, 0, r);
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: s,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = e),
            (e.Consumer = { $$typeof: l, _context: e }),
            e
          );
        }),
        (t.createElement = function (e, t, n) {
          var r,
            a = {},
            o = null;
          if (null != t)
            for (r in (void 0 !== t.key && (o = '' + t.key), t))
              x.call(t, r) && 'key' !== r && '__self' !== r && '__source' !== r && (a[r] = t[r]);
          var i = arguments.length - 2;
          if (1 === i) a.children = n;
          else if (1 < i) {
            for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
            a.children = l;
          }
          if (e && e.defaultProps) for (r in (i = e.defaultProps)) void 0 === a[r] && (a[r] = i[r]);
          return E(e, o, void 0, 0, 0, a);
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = _),
        (t.lazy = function (e) {
          return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: N };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = S.T,
            n = {};
          S.T = n;
          try {
            var r = e(),
              a = S.S;
            null !== a && a(n, r), 'object' == typeof r && null !== r && 'function' == typeof r.then && r.then(L, O);
          } catch (o) {
            O(o);
          } finally {
            S.T = t;
          }
        }),
        (t.unstable_useCacheRefresh = function () {
          return S.H.useCacheRefresh();
        }),
        (t.use = function (e) {
          return S.H.use(e);
        }),
        (t.useActionState = function (e, t, n) {
          return S.H.useActionState(e, t, n);
        }),
        (t.useCallback = function (e, t) {
          return S.H.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return S.H.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e, t) {
          return S.H.useDeferredValue(e, t);
        }),
        (t.useEffect = function (e, t) {
          return S.H.useEffect(e, t);
        }),
        (t.useId = function () {
          return S.H.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return S.H.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return S.H.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return S.H.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return S.H.useMemo(e, t);
        }),
        (t.useOptimistic = function (e, t) {
          return S.H.useOptimistic(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return S.H.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return S.H.useRef(e);
        }),
        (t.useState = function (e) {
          return S.H.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return S.H.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return S.H.useTransition();
        }),
        (t.version = '19.0.0');
    },
    1750: (e, t, n) => {
      'use strict';
      function r(e) {
        var t,
          n,
          a = '';
        if ('string' == typeof e || 'number' == typeof e) a += e;
        else if ('object' == typeof e)
          if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = r(e[t])) && (a && (a += ' '), (a += n));
          } else for (n in e) e[n] && (a && (a += ' '), (a += n));
        return a;
      }
      n.d(t, { A: () => a });
      const a = function () {
        for (var e, t, n = 0, a = '', o = arguments.length; n < o; n++)
          (e = arguments[n]) && (t = r(e)) && (a && (a += ' '), (a += t));
        return a;
      };
    },
    1834: (e, t, n) => {
      'use strict';
      n.r(t);
    },
    2091: (e) => {
      'use strict';
      e.exports = function (e, t, n, r, a, o, i, l) {
        if (!e) {
          var s;
          if (void 0 === t)
            s = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var u = [n, r, a, o, i, l],
              c = 0;
            (s = new Error(
              t.replace(/%s/g, function () {
                return u[c++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    2407: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => h });
      var r = n(3696),
        a = n(9006),
        o = n(7943),
        i = n(99),
        l = n(5202),
        s = n(7441),
        u = n(2540);
      function c(e) {
        let { error: t, tryAgain: n } = e;
        return (0, u.jsxs)('div', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            minHeight: '100vh',
            width: '100%',
            maxWidth: '80ch',
            fontSize: '20px',
            margin: '0 auto',
            padding: '1rem',
          },
          children: [
            (0, u.jsx)('h1', { style: { fontSize: '3rem' }, children: 'This page crashed' }),
            (0, u.jsx)('button', {
              type: 'button',
              onClick: n,
              style: { margin: '1rem 0', fontSize: '2rem', cursor: 'pointer', borderRadius: 20, padding: '1rem' },
              children: 'Try again',
            }),
            (0, u.jsx)(d, { error: t }),
          ],
        });
      }
      function d(e) {
        let { error: t } = e;
        const n = (0, i.rA)(t)
          .map((e) => e.message)
          .join('\n\nCause:\n');
        return (0, u.jsx)('p', { style: { whiteSpace: 'pre-wrap' }, children: n });
      }
      function f(e) {
        let { children: t } = e;
        return (0, u.jsx)(s.W, {
          value: { plugin: { name: 'docusaurus-core-error-boundary', id: 'default' } },
          children: t,
        });
      }
      function p(e) {
        let { error: t, tryAgain: n } = e;
        return (0, u.jsx)(f, {
          children: (0, u.jsxs)(h, {
            fallback: () => (0, u.jsx)(c, { error: t, tryAgain: n }),
            children: [
              (0, u.jsx)(o.A, { children: (0, u.jsx)('title', { children: 'Page Error' }) }),
              (0, u.jsx)(l.A, { children: (0, u.jsx)(c, { error: t, tryAgain: n }) }),
            ],
          }),
        });
      }
      const m = (e) => (0, u.jsx)(p, { ...e });
      class h extends r.Component {
        constructor(e) {
          super(e), (this.state = { error: null });
        }
        componentDidCatch(e) {
          a.A.canUseDOM && this.setState({ error: e });
        }
        render() {
          const { children: e } = this.props,
            { error: t } = this.state;
          if (t) {
            const e = { error: t, tryAgain: () => this.setState({ error: null }) };
            return (this.props.fallback ?? m)(e);
          }
          return e ?? null;
        }
      }
    },
    2424: (e, t, n) => {
      'use strict';
      n.d(t, { o: () => i });
      var r = n(4669),
        a = n(9519),
        o = n(99);
      function i() {
        const {
            siteConfig: { baseUrl: e, url: t, trailingSlash: n },
            i18n: { defaultLocale: i, currentLocale: l },
          } = (0, r.A)(),
          { pathname: s } = (0, a.zy)(),
          u = (0, o.Ks)(s, { trailingSlash: n, baseUrl: e }),
          c = l === i ? e : e.replace(`/${l}/`, '/'),
          d = u.replace(e, '');
        return {
          createUrl: function (e) {
            let { locale: n, fullyQualified: r } = e;
            return `${r ? t : ''}${(function (e) {
              return e === i ? `${c}` : `${c}${e}/`;
            })(n)}${d}`;
          },
        };
      }
    },
    2427: (e, t, n) => {
      'use strict';
      n.d(t, { p: () => a });
      var r = n(4669);
      function a() {
        return (0, r.A)().siteConfig.themeConfig;
      }
    },
    2524: (e, t, n) => {
      'use strict';
      n.d(t, { W: () => r });
      const r = 'default';
    },
    2535: (e, t, n) => {
      'use strict';
      function r(e) {
        return /^(?:\w*:|\/\/)/.test(e);
      }
      function a(e) {
        return void 0 !== e && !r(e);
      }
      n.d(t, { A: () => a, z: () => r });
    },
    2540: (e, t, n) => {
      'use strict';
      e.exports = n(3326);
    },
    2620: (e, t, n) => {
      'use strict';
      function r() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      }
      n.d(t, { O: () => r });
    },
    2654: (e) => {
      'use strict';
      e.exports = {};
    },
    2688: (e, t, n) => {
      e.exports = n(362)();
    },
    2923: (e, t, n) => {
      'use strict';
      n.d(t, { e: () => p, M: () => m });
      var r = n(3696),
        a = n(6009),
        o = n(7978),
        i = n(9519),
        l = n(8225);
      function s(e) {
        !(function (e) {
          const t = (0, i.W6)(),
            n = (0, l._q)(e);
          (0, r.useEffect)(() => t.block((e, t) => n(e, t)), [t, n]);
        })((t, n) => {
          if ('POP' === n) return e(t, n);
        });
      }
      var u = n(2427),
        c = n(2540);
      const d = r.createContext(void 0);
      function f() {
        const e = (function () {
            const e = (0, a.YL)(),
              { items: t } = (0, u.p)().navbar;
            return 0 === t.length && !e.component;
          })(),
          t = (0, o.l)(),
          n = !e && 'mobile' === t,
          [i, l] = (0, r.useState)(!1);
        s(() => {
          if (i) return l(!1), !1;
        });
        const c = (0, r.useCallback)(() => {
          l((e) => !e);
        }, []);
        return (
          (0, r.useEffect)(() => {
            'desktop' === t && l(!1);
          }, [t]),
          (0, r.useMemo)(() => ({ disabled: e, shouldRender: n, toggle: c, shown: i }), [e, n, c, i])
        );
      }
      function p(e) {
        let { children: t } = e;
        const n = f();
        return (0, c.jsx)(d.Provider, { value: n, children: t });
      }
      function m() {
        const e = r.useContext(d);
        if (void 0 === e) throw new l.dV('NavbarMobileSidebarProvider');
        return e;
      }
    },
    3250: (e, t, n) => {
      'use strict';
      n.d(t, { V: () => s, t: () => u });
      var r = n(3696),
        a = n(8225),
        o = n(2540);
      const i = Symbol('EmptyContext'),
        l = r.createContext(i);
      function s(e) {
        let { children: t, name: n, items: a } = e;
        const i = (0, r.useMemo)(() => (n && a ? { name: n, items: a } : null), [n, a]);
        return (0, o.jsx)(l.Provider, { value: i, children: t });
      }
      function u() {
        const e = (0, r.useContext)(l);
        if (e === i) throw new a.dV('DocsSidebarProvider');
        return e;
      }
    },
    3254: (e, t, n) => {
      'use strict';
      n.d(t, { Ay: () => l, hH: () => i });
      var r = n(3696),
        a = n(4669),
        o = n(2535);
      function i() {
        const { siteConfig: e } = (0, a.A)(),
          { baseUrl: t, url: n } = e,
          i = e.future.experimental_router,
          l = (0, r.useCallback)(
            (e, r) =>
              (function (e) {
                let {
                  siteUrl: t,
                  baseUrl: n,
                  url: r,
                  options: { forcePrependBaseUrl: a = !1, absolute: i = !1 } = {},
                  router: l,
                } = e;
                if (!r || r.startsWith('#') || (0, o.z)(r)) return r;
                if ('hash' === l) return r.startsWith('/') ? `.${r}` : `./${r}`;
                if (a) return n + r.replace(/^\//, '');
                if (r === n.replace(/\/$/, '')) return n;
                const s = r.startsWith(n) ? r : n + r.replace(/^\//, '');
                return i ? t + s : s;
              })({ siteUrl: n, baseUrl: t, url: e, options: r, router: i }),
            [n, t, i]
          );
        return { withBaseUrl: l };
      }
      function l(e, t) {
        void 0 === t && (t = {});
        const { withBaseUrl: n } = i();
        return n(e, t);
      }
    },
    3309: (e, t, n) => {
      'use strict';
      var r = n(3696),
        a = n(7470),
        o = n(9005),
        i = n(9941),
        l = n(4784),
        s = n(9006);
      const u = [n(7388), n(7904), n(1139), n(1834)];
      var c = n(4024),
        d = n(9519),
        f = n(3971),
        p = n(2540);
      function m(e) {
        let { children: t } = e;
        return (0, p.jsx)(p.Fragment, { children: t });
      }
      var h = n(7943),
        g = n(4669),
        y = n(3254),
        b = n(2427),
        v = n(5545),
        w = n(2424),
        k = n(3884);
      var S = n(99),
        x = n(8004);
      function E() {
        const {
            i18n: { currentLocale: e, defaultLocale: t, localeConfigs: n },
          } = (0, g.A)(),
          r = (0, w.o)(),
          a = n[e].htmlLang,
          o = (e) => e.replace('-', '_');
        return (0, p.jsxs)(h.A, {
          children: [
            Object.entries(n).map((e) => {
              let [t, { htmlLang: n }] = e;
              return (0, p.jsx)(
                'link',
                { rel: 'alternate', href: r.createUrl({ locale: t, fullyQualified: !0 }), hrefLang: n },
                t
              );
            }),
            (0, p.jsx)('link', {
              rel: 'alternate',
              href: r.createUrl({ locale: t, fullyQualified: !0 }),
              hrefLang: 'x-default',
            }),
            (0, p.jsx)('meta', { property: 'og:locale', content: o(a) }),
            Object.values(n)
              .filter((e) => a !== e.htmlLang)
              .map((e) =>
                (0, p.jsx)('meta', { property: 'og:locale:alternate', content: o(e.htmlLang) }, `meta-og-${e.htmlLang}`)
              ),
          ],
        });
      }
      function _(e) {
        let { permalink: t } = e;
        const {
            siteConfig: { url: n },
          } = (0, g.A)(),
          r = (function () {
            const {
                siteConfig: { url: e, baseUrl: t, trailingSlash: n },
              } = (0, g.A)(),
              { pathname: r } = (0, d.zy)();
            return e + (0, S.Ks)((0, y.Ay)(r), { trailingSlash: n, baseUrl: t });
          })(),
          a = t ? `${n}${t}` : r;
        return (0, p.jsxs)(h.A, {
          children: [
            (0, p.jsx)('meta', { property: 'og:url', content: a }),
            (0, p.jsx)('link', { rel: 'canonical', href: a }),
          ],
        });
      }
      function C() {
        const {
            i18n: { currentLocale: e },
          } = (0, g.A)(),
          { metadata: t, image: n } = (0, b.p)();
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsxs)(h.A, {
              children: [
                (0, p.jsx)('meta', { name: 'twitter:card', content: 'summary_large_image' }),
                (0, p.jsx)('body', { className: k.w }),
              ],
            }),
            n && (0, p.jsx)(v.be, { image: n }),
            (0, p.jsx)(_, {}),
            (0, p.jsx)(E, {}),
            (0, p.jsx)(x.A, { tag: 'default', locale: e }),
            (0, p.jsx)(h.A, { children: t.map((e, t) => (0, p.jsx)('meta', { ...e }, t)) }),
          ],
        });
      }
      const A = new Map();
      var T = n(8142),
        j = n(6489),
        P = n(3604);
      function N(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        const a = u.map((t) => {
          const r = t.default?.[e] ?? t[e];
          return r?.(...n);
        });
        return () => a.forEach((e) => e?.());
      }
      const O = function (e) {
        let { children: t, location: n, previousLocation: r } = e;
        return (
          (0, P.A)(() => {
            r !== n &&
              (!(function (e) {
                let { location: t, previousLocation: n } = e;
                if (!n) return;
                const r = t.pathname === n.pathname,
                  a = t.hash === n.hash,
                  o = t.search === n.search;
                if (r && a && !o) return;
                const { hash: i } = t;
                if (i) {
                  const e = decodeURIComponent(i.substring(1)),
                    t = document.getElementById(e);
                  t?.scrollIntoView();
                } else window.scrollTo(0, 0);
              })({ location: n, previousLocation: r }),
              N('onRouteDidUpdate', { previousLocation: r, location: n }));
          }, [r, n]),
          t
        );
      };
      function L(e) {
        const t = Array.from(new Set([e, decodeURI(e)]))
          .map((e) => (0, f.u)(c.A, e))
          .flat();
        return Promise.all(t.map((e) => e.route.component.preload?.()));
      }
      class R extends r.Component {
        previousLocation;
        routeUpdateCleanupCb;
        constructor(e) {
          super(e),
            (this.previousLocation = null),
            (this.routeUpdateCleanupCb = s.A.canUseDOM
              ? N('onRouteUpdate', { previousLocation: null, location: this.props.location })
              : () => {}),
            (this.state = { nextRouteHasLoaded: !0 });
        }
        shouldComponentUpdate(e, t) {
          if (e.location === this.props.location) return t.nextRouteHasLoaded;
          const n = e.location;
          return (
            (this.previousLocation = this.props.location),
            this.setState({ nextRouteHasLoaded: !1 }),
            (this.routeUpdateCleanupCb = N('onRouteUpdate', { previousLocation: this.previousLocation, location: n })),
            L(n.pathname)
              .then(() => {
                this.routeUpdateCleanupCb(), this.setState({ nextRouteHasLoaded: !0 });
              })
              .catch((e) => {
                console.warn(e), window.location.reload();
              }),
            !1
          );
        }
        render() {
          const { children: e, location: t } = this.props;
          return (0, p.jsx)(O, {
            previousLocation: this.previousLocation,
            location: t,
            children: (0, p.jsx)(d.qh, { location: t, render: () => e }),
          });
        }
      }
      const D = R,
        F = '__docusaurus-base-url-issue-banner-suggestion-container';
      function I(e) {
        return `\ndocument.addEventListener('DOMContentLoaded', function maybeInsertBanner() {\n  var shouldInsert = typeof window['docusaurus'] === 'undefined';\n  shouldInsert && insertBanner();\n});\n\nfunction insertBanner() {\n  var bannerContainer = document.createElement('div');\n  bannerContainer.id = '__docusaurus-base-url-issue-banner-container';\n  var bannerHtml = ${JSON.stringify(
          (function (e) {
            return `\n<div id="__docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseUrl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${e}</span> ${
              '/' === e ? ' (default value)' : ''
            }</p>\n   <p>We suggest trying baseUrl = <span id="${F}" style="font-weight: bold; color: green;"></span></p>\n</div>\n`;
          })(e)
        ).replace(
          /</g,
          '\\<'
        )};\n  bannerContainer.innerHTML = bannerHtml;\n  document.body.prepend(bannerContainer);\n  var suggestionContainer = document.getElementById('${F}');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n`;
      }
      function M() {
        const {
          siteConfig: { baseUrl: e },
        } = (0, g.A)();
        return (0, p.jsx)(p.Fragment, {
          children: !s.A.canUseDOM && (0, p.jsx)(h.A, { children: (0, p.jsx)('script', { children: I(e) }) }),
        });
      }
      function z() {
        const {
            siteConfig: { baseUrl: e, baseUrlIssueBanner: t },
          } = (0, g.A)(),
          { pathname: n } = (0, d.zy)();
        return t && n === e ? (0, p.jsx)(M, {}) : null;
      }
      function B() {
        const {
            siteConfig: { favicon: e, title: t, noIndex: n },
            i18n: { currentLocale: r, localeConfigs: a },
          } = (0, g.A)(),
          o = (0, y.Ay)(e),
          { htmlLang: i, direction: l } = a[r];
        return (0, p.jsxs)(h.A, {
          children: [
            (0, p.jsx)('html', { lang: i, dir: l }),
            (0, p.jsx)('title', { children: t }),
            (0, p.jsx)('meta', { property: 'og:title', content: t }),
            (0, p.jsx)('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
            n && (0, p.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' }),
            e && (0, p.jsx)('link', { rel: 'icon', href: o }),
          ],
        });
      }
      var $ = n(2407),
        U = n(5200);
      function q() {
        const e = (0, U.A)();
        return (0, p.jsx)(h.A, { children: (0, p.jsx)('html', { 'data-has-hydrated': e }) });
      }
      const H = (0, f.v)(c.A);
      function G() {
        const e = (function (e) {
          if (A.has(e.pathname)) return { ...e, pathname: A.get(e.pathname) };
          if (
            (0, f.u)(c.A, e.pathname).some((e) => {
              let { route: t } = e;
              return !0 === t.exact;
            })
          )
            return A.set(e.pathname, e.pathname), e;
          const t = e.pathname.trim().replace(/(?:\/index)?\.html$/, '') || '/';
          return A.set(e.pathname, t), { ...e, pathname: t };
        })((0, d.zy)());
        return (0, p.jsx)(D, { location: e, children: H });
      }
      function V() {
        return (0, p.jsx)($.A, {
          children: (0, p.jsx)(j.l, {
            children: (0, p.jsxs)(T.x, {
              children: [
                (0, p.jsxs)(m, {
                  children: [(0, p.jsx)(B, {}), (0, p.jsx)(C, {}), (0, p.jsx)(z, {}), (0, p.jsx)(G, {})],
                }),
                (0, p.jsx)(q, {}),
              ],
            }),
          }),
        });
      }
      var W = n(4054);
      const Q = (function (e) {
        try {
          return document.createElement('link').relList.supports(e);
        } catch {
          return !1;
        }
      })('prefetch')
        ? function (e) {
            return new Promise((t, n) => {
              if ('undefined' == typeof document) return void n();
              const r = document.createElement('link');
              r.setAttribute('rel', 'prefetch'),
                r.setAttribute('href', e),
                (r.onload = () => t()),
                (r.onerror = () => n());
              const a = document.getElementsByTagName('head')[0] ?? document.getElementsByName('script')[0]?.parentNode;
              a?.appendChild(r);
            });
          }
        : function (e) {
            return new Promise((t, n) => {
              const r = new XMLHttpRequest();
              r.open('GET', e, !0),
                (r.withCredentials = !0),
                (r.onload = () => {
                  200 === r.status ? t() : n();
                }),
                r.send(null);
            });
          };
      var K = n(1370);
      const Y = new Set(),
        X = new Set(),
        Z = () => navigator.connection?.effectiveType.includes('2g') || navigator.connection?.saveData,
        J = {
          prefetch: (e) => {
            if (!((e) => !Z() && !X.has(e) && !Y.has(e))(e)) return !1;
            Y.add(e);
            const t = (0, f.u)(c.A, e).flatMap((e) => {
              return (
                (t = e.route.path),
                Object.entries(W)
                  .filter((e) => {
                    let [n] = e;
                    return n.replace(/-[^-]+$/, '') === t;
                  })
                  .flatMap((e) => {
                    let [, t] = e;
                    return Object.values((0, K.A)(t));
                  })
              );
              var t;
            });
            return Promise.all(
              t.map((e) => {
                const t = n.gca(e);
                return t && !t.includes('undefined') ? Q(t).catch(() => {}) : Promise.resolve();
              })
            );
          },
          preload: (e) => !!((e) => !Z() && !X.has(e))(e) && (X.add(e), L(e)),
        },
        ee = Object.freeze(J);
      function te(e) {
        let { children: t } = e;
        return 'hash' === l.default.future.experimental_router
          ? (0, p.jsx)(i.I9, { children: t })
          : (0, p.jsx)(i.Kd, { children: t });
      }
      const ne = Boolean(!0);
      if (s.A.canUseDOM) {
        window.docusaurus = ee;
        const e = document.getElementById('__docusaurus'),
          t = (0, p.jsx)(o.vd, { children: (0, p.jsx)(te, { children: (0, p.jsx)(V, {}) }) }),
          n = (e, t) => {
            console.error('Docusaurus React Root onRecoverableError:', e, t);
          },
          i = () => {
            if (window.docusaurusRoot) window.docusaurusRoot.render(t);
            else if (ne) window.docusaurusRoot = a.hydrateRoot(e, t, { onRecoverableError: n });
            else {
              const r = a.createRoot(e, { onRecoverableError: n });
              r.render(t), (window.docusaurusRoot = r);
            }
          };
        L(window.location.pathname).then(() => {
          (0, r.startTransition)(i);
        });
      }
    },
    3326: (e, t) => {
      'use strict';
      var n = Symbol.for('react.transitional.element'),
        r = Symbol.for('react.fragment');
      function a(e, t, r) {
        var a = null;
        if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
          for (var o in ((r = {}), t)) 'key' !== o && (r[o] = t[o]);
        else r = t;
        return (t = r.ref), { $$typeof: n, type: e, key: a, ref: void 0 !== t ? t : null, props: r };
      }
      (t.Fragment = r), (t.jsx = a), (t.jsxs = a);
    },
    3540: (e, t, n) => {
      'use strict';
      n.d(t, { Wf: () => u });
      n(3696);
      const r = JSON.parse('{"N":"localStorage","M":""}'),
        a = r.N;
      function o(e) {
        let { key: t, oldValue: n, newValue: r, storage: a } = e;
        if (n === r) return;
        const o = document.createEvent('StorageEvent');
        o.initStorageEvent('storage', !1, !1, t, n, r, window.location.href, a), window.dispatchEvent(o);
      }
      function i(e) {
        if ((void 0 === e && (e = a), 'undefined' == typeof window))
          throw new Error('Browser storage is not available on Node.js/Docusaurus SSR process.');
        if ('none' === e) return null;
        try {
          return window[e];
        } catch (n) {
          return (
            (t = n),
            l ||
              (console.warn(
                'Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.',
                t
              ),
              (l = !0)),
            null
          );
        }
        var t;
      }
      let l = !1;
      const s = { get: () => null, set: () => {}, del: () => {}, listen: () => () => {} };
      function u(e, t) {
        const n = `${e}${r.M}`;
        if ('undefined' == typeof window)
          return (function (e) {
            function t() {
              throw new Error(
                `Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`
              );
            }
            return { get: t, set: t, del: t, listen: t };
          })(n);
        const a = i(t?.persistence);
        return null === a
          ? s
          : {
              get: () => {
                try {
                  return a.getItem(n);
                } catch (e) {
                  return console.error(`Docusaurus storage error, can't get key=${n}`, e), null;
                }
              },
              set: (e) => {
                try {
                  const t = a.getItem(n);
                  a.setItem(n, e), o({ key: n, oldValue: t, newValue: e, storage: a });
                } catch (t) {
                  console.error(`Docusaurus storage error, can't set ${n}=${e}`, t);
                }
              },
              del: () => {
                try {
                  const e = a.getItem(n);
                  a.removeItem(n), o({ key: n, oldValue: e, newValue: null, storage: a });
                } catch (e) {
                  console.error(`Docusaurus storage error, can't delete key=${n}`, e);
                }
              },
              listen: (e) => {
                try {
                  const t = (t) => {
                    t.storageArea === a && t.key === n && e(t);
                  };
                  return window.addEventListener('storage', t), () => window.removeEventListener('storage', t);
                } catch (t) {
                  return console.error(`Docusaurus storage error, can't listen for changes of key=${n}`, t), () => {};
                }
              },
            };
      }
    },
    3604: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      var r = n(3696);
      const a = n(9006).A.canUseDOM ? r.useLayoutEffect : r.useEffect;
    },
    3696: (e, t, n) => {
      'use strict';
      e.exports = n(1745);
    },
    3707: (e, t, n) => {
      'use strict';
      n.d(t, { Mq: () => f, Tv: () => u, gk: () => p });
      var r = n(3696),
        a = n(9006),
        o = n(5200),
        i = (n(3604), n(8225)),
        l = n(2540);
      const s = r.createContext(void 0);
      function u(e) {
        let { children: t } = e;
        const n = (function () {
          const e = (0, r.useRef)(!0);
          return (0, r.useMemo)(
            () => ({
              scrollEventsEnabledRef: e,
              enableScrollEvents: () => {
                e.current = !0;
              },
              disableScrollEvents: () => {
                e.current = !1;
              },
            }),
            []
          );
        })();
        return (0, l.jsx)(s.Provider, { value: n, children: t });
      }
      function c() {
        const e = (0, r.useContext)(s);
        if (null == e) throw new i.dV('ScrollControllerProvider');
        return e;
      }
      const d = () => (a.A.canUseDOM ? { scrollX: window.pageXOffset, scrollY: window.pageYOffset } : null);
      function f(e, t) {
        void 0 === t && (t = []);
        const { scrollEventsEnabledRef: n } = c(),
          a = (0, r.useRef)(d()),
          o = (0, i._q)(e);
        (0, r.useEffect)(() => {
          const e = () => {
              if (!n.current) return;
              const e = d();
              o(e, a.current), (a.current = e);
            },
            t = { passive: !0 };
          return e(), window.addEventListener('scroll', e, t), () => window.removeEventListener('scroll', e, t);
        }, [o, n, ...t]);
      }
      function p() {
        const e = (0, r.useRef)(null),
          t = (0, o.A)() && 'smooth' === getComputedStyle(document.documentElement).scrollBehavior;
        return {
          startScroll: (n) => {
            e.current = t
              ? (function (e) {
                  return window.scrollTo({ top: e, behavior: 'smooth' }), () => {};
                })(n)
              : (function (e) {
                  let t = null;
                  const n = document.documentElement.scrollTop > e;
                  return (
                    (function r() {
                      const a = document.documentElement.scrollTop;
                      ((n && a > e) || (!n && a < e)) &&
                        ((t = requestAnimationFrame(r)), window.scrollTo(0, Math.floor(0.85 * (a - e)) + e));
                    })(),
                    () => t && cancelAnimationFrame(t)
                  );
                })(n);
          },
          cancelScroll: () => e.current?.(),
        };
      }
    },
    3884: (e, t, n) => {
      'use strict';
      n.d(t, { w: () => a, J: () => o });
      var r = n(3696);
      const a = 'navigation-with-keyboard';
      function o() {
        (0, r.useEffect)(() => {
          function e(e) {
            'keydown' === e.type && 'Tab' === e.key && document.body.classList.add(a),
              'mousedown' === e.type && document.body.classList.remove(a);
          }
          return (
            document.addEventListener('keydown', e),
            document.addEventListener('mousedown', e),
            () => {
              document.body.classList.remove(a),
                document.removeEventListener('keydown', e),
                document.removeEventListener('mousedown', e);
            }
          );
        }, []);
      }
    },
    3920: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getErrorCausalChain = function e(t) {
          if (t.cause) return [t, ...e(t.cause)];
          return [t];
        });
    },
    3971: (e, t, n) => {
      'use strict';
      n.d(t, { u: () => i, v: () => l });
      var r = n(9519),
        a = n(8102),
        o = n(3696);
      function i(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            var a = e.path ? (0, r.B6)(t, e) : n.length ? n[n.length - 1].match : r.Ix.computeRootMatch(t);
            return a && (n.push({ route: e, match: a }), e.routes && i(e.routes, t, n)), a;
          }),
          n
        );
      }
      function l(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? o.createElement(
                r.dO,
                n,
                e.map(function (e, n) {
                  return o.createElement(r.qh, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render((0, a.A)({}, n, {}, t, { route: e }))
                        : o.createElement(e.component, (0, a.A)({}, n, t, { route: e }));
                    },
                  });
                })
              )
            : null
        );
      }
    },
    4024: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => f });
      n(3696);
      var r = n(7303),
        a = n.n(r),
        o = n(4054);
      const i = {
        17896441: [() => Promise.all([n.e(869), n.e(401)]).then(n.bind(n, 8205)), '@theme/DocItem', 8205],
        '1df93b7f': [() => n.e(583).then(n.bind(n, 6519)), '@site/src/pages/index.tsx', 6519],
        '3b8c55ea': [() => n.e(803).then(n.bind(n, 9369)), '@site/docs/installation.md', 9369],
        '5e95c892': [() => n.e(647).then(n.bind(n, 7274)), '@theme/DocsRoot', 7274],
        '5e9f5e1a': [() => Promise.resolve().then(n.bind(n, 4784)), '@generated/docusaurus.config', 4784],
        a7456010: [
          () => n.e(235).then(n.t.bind(n, 8552, 19)),
          '@generated/docusaurus-plugin-content-pages/default/__plugin.json',
          8552,
        ],
        a7bd4aaa: [() => n.e(98).then(n.bind(n, 1035)), '@theme/DocVersionRoot', 1035],
        a8e3f558: [
          () => n.e(384).then(n.t.bind(n, 3570, 19)),
          '@generated/docusaurus-plugin-content-docs/default/p/codora-docs-26e.json',
          3570,
        ],
        a94703ab: [() => Promise.all([n.e(869), n.e(48)]).then(n.bind(n, 5025)), '@theme/DocRoot', 5025],
        aba21aa0: [
          () => n.e(742).then(n.t.bind(n, 7093, 19)),
          '@generated/docusaurus-plugin-content-docs/default/__plugin.json',
          7093,
        ],
      };
      var l = n(2540);
      function s(e) {
        let { error: t, retry: n, pastDelay: r } = e;
        return t
          ? (0, l.jsxs)('div', {
              style: {
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#fa383e',
                borderColor: '#fa383e',
                borderStyle: 'solid',
                borderRadius: '0.25rem',
                borderWidth: '1px',
                boxSizing: 'border-box',
                display: 'block',
                padding: '1rem',
                flex: '0 0 50%',
                marginLeft: '25%',
                marginRight: '25%',
                marginTop: '5rem',
                maxWidth: '50%',
                width: '100%',
              },
              children: [
                (0, l.jsx)('p', { children: String(t) }),
                (0, l.jsx)('div', {
                  children: (0, l.jsx)('button', { type: 'button', onClick: n, children: 'Retry' }),
                }),
              ],
            })
          : r
          ? (0, l.jsx)('div', {
              style: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' },
              children: (0, l.jsx)('svg', {
                id: 'loader',
                style: { width: 128, height: 110, position: 'absolute', top: 'calc(100vh - 64%)' },
                viewBox: '0 0 45 45',
                xmlns: 'http://www.w3.org/2000/svg',
                stroke: '#61dafb',
                children: (0, l.jsxs)('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  transform: 'translate(1 1)',
                  strokeWidth: '2',
                  children: [
                    (0, l.jsxs)('circle', {
                      cx: '22',
                      cy: '22',
                      r: '6',
                      strokeOpacity: '0',
                      children: [
                        (0, l.jsx)('animate', {
                          attributeName: 'r',
                          begin: '1.5s',
                          dur: '3s',
                          values: '6;22',
                          calcMode: 'linear',
                          repeatCount: 'indefinite',
                        }),
                        (0, l.jsx)('animate', {
                          attributeName: 'stroke-opacity',
                          begin: '1.5s',
                          dur: '3s',
                          values: '1;0',
                          calcMode: 'linear',
                          repeatCount: 'indefinite',
                        }),
                        (0, l.jsx)('animate', {
                          attributeName: 'stroke-width',
                          begin: '1.5s',
                          dur: '3s',
                          values: '2;0',
                          calcMode: 'linear',
                          repeatCount: 'indefinite',
                        }),
                      ],
                    }),
                    (0, l.jsxs)('circle', {
                      cx: '22',
                      cy: '22',
                      r: '6',
                      strokeOpacity: '0',
                      children: [
                        (0, l.jsx)('animate', {
                          attributeName: 'r',
                          begin: '3s',
                          dur: '3s',
                          values: '6;22',
                          calcMode: 'linear',
                          repeatCount: 'indefinite',
                        }),
                        (0, l.jsx)('animate', {
                          attributeName: 'stroke-opacity',
                          begin: '3s',
                          dur: '3s',
                          values: '1;0',
                          calcMode: 'linear',
                          repeatCount: 'indefinite',
                        }),
                        (0, l.jsx)('animate', {
                          attributeName: 'stroke-width',
                          begin: '3s',
                          dur: '3s',
                          values: '2;0',
                          calcMode: 'linear',
                          repeatCount: 'indefinite',
                        }),
                      ],
                    }),
                    (0, l.jsx)('circle', {
                      cx: '22',
                      cy: '22',
                      r: '8',
                      children: (0, l.jsx)('animate', {
                        attributeName: 'r',
                        begin: '0s',
                        dur: '1.5s',
                        values: '6;1;2;3;4;5;6',
                        calcMode: 'linear',
                        repeatCount: 'indefinite',
                      }),
                    }),
                  ],
                }),
              }),
            })
          : null;
      }
      var u = n(1370),
        c = n(7441);
      function d(e, t) {
        if ('*' === e)
          return a()({
            loading: s,
            loader: () => n.e(74).then(n.bind(n, 1074)),
            modules: ['@theme/NotFound'],
            webpack: () => [1074],
            render(e, t) {
              const n = e.default;
              return (0, l.jsx)(c.W, {
                value: { plugin: { name: 'native', id: 'default' } },
                children: (0, l.jsx)(n, { ...t }),
              });
            },
          });
        const r = o[`${e}-${t}`],
          d = {},
          f = [],
          p = [],
          m = (0, u.A)(r);
        return (
          Object.entries(m).forEach((e) => {
            let [t, n] = e;
            const r = i[n];
            r && ((d[t] = r[0]), f.push(r[1]), p.push(r[2]));
          }),
          a().Map({
            loading: s,
            loader: d,
            modules: f,
            webpack: () => p,
            render(t, n) {
              const a = JSON.parse(JSON.stringify(r));
              Object.entries(t).forEach((t) => {
                let [n, r] = t;
                const o = r.default;
                if (!o)
                  throw new Error(
                    `The page component at ${e} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`
                  );
                ('object' != typeof o && 'function' != typeof o) ||
                  Object.keys(r)
                    .filter((e) => 'default' !== e)
                    .forEach((e) => {
                      o[e] = r[e];
                    });
                let i = a;
                const l = n.split('.');
                l.slice(0, -1).forEach((e) => {
                  i = i[e];
                }),
                  (i[l[l.length - 1]] = o);
              });
              const o = a.__comp;
              delete a.__comp;
              const i = a.__context;
              delete a.__context;
              const s = a.__props;
              return delete a.__props, (0, l.jsx)(c.W, { value: i, children: (0, l.jsx)(o, { ...a, ...s, ...n }) });
            },
          })
        );
      }
      const f = [
        {
          path: '/codora/docs',
          component: d('/codora/docs', '53b'),
          routes: [
            {
              path: '/codora/docs',
              component: d('/codora/docs', 'fd2'),
              routes: [
                {
                  path: '/codora/docs',
                  component: d('/codora/docs', '6e9'),
                  routes: [
                    {
                      path: '/codora/docs/installation',
                      component: d('/codora/docs/installation', 'd4c'),
                      exact: !0,
                      sidebar: 'tutorialSidebar',
                    },
                  ],
                },
              ],
            },
          ],
        },
        { path: '/codora/', component: d('/codora/', 'ff4'), exact: !0 },
        { path: '*', component: d('*') },
      ];
    },
    4054: (e) => {
      'use strict';
      e.exports = JSON.parse(
        '{"/codora/docs-53b":{"__comp":"5e95c892","__context":{"plugin":"aba21aa0"}},"/codora/docs-fd2":{"__comp":"a7bd4aaa","__props":"a8e3f558"},"/codora/docs-6e9":{"__comp":"a94703ab"},"/codora/docs/installation-d4c":{"__comp":"17896441","content":"3b8c55ea"},"/codora/-ff4":{"__comp":"1df93b7f","__context":{"plugin":"a7456010"},"config":"5e9f5e1a"}}'
      );
    },
    4194: (e, t, n) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.addTrailingSlash = a),
        (t.default = function (e, t) {
          const { trailingSlash: n, baseUrl: r } = t;
          if (e.startsWith('#')) return e;
          if (void 0 === n) return e;
          const [i] = e.split(/[#?]/),
            l = '/' === i || i === r ? i : ((s = i), (u = n), u ? a(s) : o(s));
          var s, u;
          return e.replace(i, l);
        }),
        (t.addLeadingSlash = function (e) {
          return (0, r.addPrefix)(e, '/');
        }),
        (t.removeTrailingSlash = o);
      const r = n(4365);
      function a(e) {
        return e.endsWith('/') ? e : `${e}/`;
      }
      function o(e) {
        return (0, r.removeSuffix)(e, '/');
      }
    },
    4271: (e, t, n) => {
      'use strict';
      e.exports = n(8299);
    },
    4365: (e, t) => {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.addPrefix = function (e, t) {
          return e.startsWith(t) ? e : `${t}${e}`;
        }),
        (t.removeSuffix = function (e, t) {
          if ('' === t) return e;
          return e.endsWith(t) ? e.slice(0, -t.length) : e;
        }),
        (t.addSuffix = function (e, t) {
          return e.endsWith(t) ? e : `${e}${t}`;
        }),
        (t.removePrefix = function (e, t) {
          return e.startsWith(t) ? e.slice(t.length) : e;
        });
    },
    4422: (e, t, n) => {
      'use strict';
      n.d(t, { Dt: () => l, ys: () => i });
      var r = n(3696),
        a = n(4024),
        o = n(4669);
      function i(e, t) {
        const n = (e) => (!e || e.endsWith('/') ? e : `${e}/`)?.toLowerCase();
        return n(e) === n(t);
      }
      function l() {
        const { baseUrl: e } = (0, o.A)().siteConfig;
        return (0, r.useMemo)(
          () =>
            (function (e) {
              let { baseUrl: t, routes: n } = e;
              function r(e) {
                return e.path === t && !0 === e.exact;
              }
              function a(e) {
                return e.path === t && !e.exact;
              }
              return (function e(t) {
                if (0 === t.length) return;
                return t.find(r) || e(t.filter(a).flatMap((e) => e.routes ?? []));
              })(n);
            })({ routes: a.A, baseUrl: e }),
          [e]
        );
      }
    },
    4517: (e, t, n) => {
      'use strict';
      n.d(t, { $: () => i });
      var r = n(3696),
        a = n(9519),
        o = n(8225);
      function i(e) {
        const t = (0, a.zy)(),
          n = (0, o.ZC)(t),
          i = (0, o._q)(e);
        (0, r.useEffect)(() => {
          n && t !== n && i({ location: t, previousLocation: n });
        }, [i, t, n]);
      }
    },
    4625: (e, t) => {
      'use strict';
      function n(e, t) {
        var n = e.length;
        e.push(t);
        e: for (; 0 < n; ) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(0 < o(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function a(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
            var l = 2 * (r + 1) - 1,
              s = e[l],
              u = l + 1,
              c = e[u];
            if (0 > o(s, n))
              u < a && 0 > o(c, s) ? ((e[r] = c), (e[u] = n), (r = u)) : ((e[r] = s), (e[l] = n), (r = l));
            else {
              if (!(u < a && 0 > o(c, n))) break e;
              (e[r] = c), (e[u] = n), (r = u);
            }
          }
        }
        return t;
      }
      function o(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      if (((t.unstable_now = void 0), 'object' == typeof performance && 'function' == typeof performance.now)) {
        var i = performance;
        t.unstable_now = function () {
          return i.now();
        };
      } else {
        var l = Date,
          s = l.now();
        t.unstable_now = function () {
          return l.now() - s;
        };
      }
      var u = [],
        c = [],
        d = 1,
        f = null,
        p = 3,
        m = !1,
        h = !1,
        g = !1,
        y = 'function' == typeof setTimeout ? setTimeout : null,
        b = 'function' == typeof clearTimeout ? clearTimeout : null,
        v = 'undefined' != typeof setImmediate ? setImmediate : null;
      function w(e) {
        for (var t = r(c); null !== t; ) {
          if (null === t.callback) a(c);
          else {
            if (!(t.startTime <= e)) break;
            a(c), (t.sortIndex = t.expirationTime), n(u, t);
          }
          t = r(c);
        }
      }
      function k(e) {
        if (((g = !1), w(e), !h))
          if (null !== r(u)) (h = !0), N();
          else {
            var t = r(c);
            null !== t && O(k, t.startTime - e);
          }
      }
      var S,
        x = !1,
        E = -1,
        _ = 5,
        C = -1;
      function A() {
        return !(t.unstable_now() - C < _);
      }
      function T() {
        if (x) {
          var e = t.unstable_now();
          C = e;
          var n = !0;
          try {
            e: {
              (h = !1), g && ((g = !1), b(E), (E = -1)), (m = !0);
              var o = p;
              try {
                t: {
                  for (w(e), f = r(u); null !== f && !(f.expirationTime > e && A()); ) {
                    var i = f.callback;
                    if ('function' == typeof i) {
                      (f.callback = null), (p = f.priorityLevel);
                      var l = i(f.expirationTime <= e);
                      if (((e = t.unstable_now()), 'function' == typeof l)) {
                        (f.callback = l), w(e), (n = !0);
                        break t;
                      }
                      f === r(u) && a(u), w(e);
                    } else a(u);
                    f = r(u);
                  }
                  if (null !== f) n = !0;
                  else {
                    var s = r(c);
                    null !== s && O(k, s.startTime - e), (n = !1);
                  }
                }
                break e;
              } finally {
                (f = null), (p = o), (m = !1);
              }
              n = void 0;
            }
          } finally {
            n ? S() : (x = !1);
          }
        }
      }
      if ('function' == typeof v)
        S = function () {
          v(T);
        };
      else if ('undefined' != typeof MessageChannel) {
        var j = new MessageChannel(),
          P = j.port2;
        (j.port1.onmessage = T),
          (S = function () {
            P.postMessage(null);
          });
      } else
        S = function () {
          y(T, 0);
        };
      function N() {
        x || ((x = !0), S());
      }
      function O(e, n) {
        E = y(function () {
          e(t.unstable_now());
        }, n);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          h || m || ((h = !0), N());
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
              )
            : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(u);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          var n = p;
          p = t;
          try {
            return e();
          } finally {
            p = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = p;
          p = e;
          try {
            return t();
          } finally {
            p = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, a, o) {
          var i = t.unstable_now();
          switch (
            ('object' == typeof o && null !== o ? (o = 'number' == typeof (o = o.delay) && 0 < o ? i + o : i) : (o = i),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (e = { id: d++, callback: a, priorityLevel: e, startTime: o, expirationTime: (l = o + l), sortIndex: -1 }),
            o > i
              ? ((e.sortIndex = o),
                n(c, e),
                null === r(u) && e === r(c) && (g ? (b(E), (E = -1)) : (g = !0), O(k, o - i)))
              : ((e.sortIndex = l), n(u, e), h || m || ((h = !0), N())),
            e
          );
        }),
        (t.unstable_shouldYield = A),
        (t.unstable_wrapCallback = function (e) {
          var t = p;
          return function () {
            var n = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = n;
            }
          };
        });
    },
    4629: (e, t, n) => {
      'use strict';
      n.r(t),
        n.d(t, {
          __addDisposableResource: () => D,
          __assign: () => o,
          __asyncDelegator: () => _,
          __asyncGenerator: () => E,
          __asyncValues: () => C,
          __await: () => x,
          __awaiter: () => m,
          __classPrivateFieldGet: () => O,
          __classPrivateFieldIn: () => R,
          __classPrivateFieldSet: () => L,
          __createBinding: () => g,
          __decorate: () => l,
          __disposeResources: () => I,
          __esDecorate: () => u,
          __exportStar: () => y,
          __extends: () => a,
          __generator: () => h,
          __importDefault: () => N,
          __importStar: () => P,
          __makeTemplateObject: () => A,
          __metadata: () => p,
          __param: () => s,
          __propKey: () => d,
          __read: () => v,
          __rest: () => i,
          __rewriteRelativeImportExtension: () => M,
          __runInitializers: () => c,
          __setFunctionName: () => f,
          __spread: () => w,
          __spreadArray: () => S,
          __spreadArrays: () => k,
          __values: () => b,
          default: () => z,
        });
      var r = function (e, t) {
        return (
          (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }),
          r(e, t)
        );
      };
      function a(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
        function n() {
          this.constructor = e;
        }
        r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      function l(e, t, n, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (a = e[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
        return o > 3 && i && Object.defineProperty(t, n, i), i;
      }
      function s(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function u(e, t, n, r, a, o) {
        function i(e) {
          if (void 0 !== e && 'function' != typeof e) throw new TypeError('Function expected');
          return e;
        }
        for (
          var l,
            s = r.kind,
            u = 'getter' === s ? 'get' : 'setter' === s ? 'set' : 'value',
            c = !t && e ? (r.static ? e : e.prototype) : null,
            d = t || (c ? Object.getOwnPropertyDescriptor(c, r.name) : {}),
            f = !1,
            p = n.length - 1;
          p >= 0;
          p--
        ) {
          var m = {};
          for (var h in r) m[h] = 'access' === h ? {} : r[h];
          for (var h in r.access) m.access[h] = r.access[h];
          m.addInitializer = function (e) {
            if (f) throw new TypeError('Cannot add initializers after decoration has completed');
            o.push(i(e || null));
          };
          var g = (0, n[p])('accessor' === s ? { get: d.get, set: d.set } : d[u], m);
          if ('accessor' === s) {
            if (void 0 === g) continue;
            if (null === g || 'object' != typeof g) throw new TypeError('Object expected');
            (l = i(g.get)) && (d.get = l), (l = i(g.set)) && (d.set = l), (l = i(g.init)) && a.unshift(l);
          } else (l = i(g)) && ('field' === s ? a.unshift(l) : (d[u] = l));
        }
        c && Object.defineProperty(c, r.name, d), (f = !0);
      }
      function c(e, t, n) {
        for (var r = arguments.length > 2, a = 0; a < t.length; a++) n = r ? t[a].call(e, n) : t[a].call(e);
        return r ? n : void 0;
      }
      function d(e) {
        return 'symbol' == typeof e ? e : ''.concat(e);
      }
      function f(e, t, n) {
        return (
          'symbol' == typeof t && (t = t.description ? '['.concat(t.description, ']') : ''),
          Object.defineProperty(e, 'name', { configurable: !0, value: n ? ''.concat(n, ' ', t) : t })
        );
      }
      function p(e, t) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(e, t);
      }
      function m(e, t, n, r) {
        return new (n || (n = Promise))(function (a, o) {
          function i(e) {
            try {
              s(r.next(e));
            } catch (t) {
              o(t);
            }
          }
          function l(e) {
            try {
              s(r.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(i, l);
          }
          s((r = r.apply(e, t || [])).next());
        });
      }
      function h(e, t) {
        var n,
          r,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          },
          i = Object.create(('function' == typeof Iterator ? Iterator : Object).prototype);
        return (
          (i.next = l(0)),
          (i.throw = l(1)),
          (i.return = l(2)),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function l(l) {
          return function (s) {
            return (function (l) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; i && ((i = 0), l[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) &&
                      !(a = a.call(r, l[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (l = [2 & l[0], a.value]), l[0])) {
                    case 0:
                    case 1:
                      a = l;
                      break;
                    case 4:
                      return o.label++, { value: l[1], done: !1 };
                    case 5:
                      o.label++, (r = l[1]), (l = [0]);
                      continue;
                    case 7:
                      (l = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (!((a = o.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== l[0] && 2 !== l[0]))) {
                        o = 0;
                        continue;
                      }
                      if (3 === l[0] && (!a || (l[1] > a[0] && l[1] < a[3]))) {
                        o.label = l[1];
                        break;
                      }
                      if (6 === l[0] && o.label < a[1]) {
                        (o.label = a[1]), (a = l);
                        break;
                      }
                      if (a && o.label < a[2]) {
                        (o.label = a[2]), o.ops.push(l);
                        break;
                      }
                      a[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  l = t.call(e, o);
                } catch (s) {
                  (l = [6, s]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & l[0]) throw l[1];
              return { value: l[0] ? l[1] : void 0, done: !0 };
            })([l, s]);
          };
        }
      }
      var g = Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var a = Object.getOwnPropertyDescriptor(t, n);
            (a && !('get' in a ? !t.__esModule : a.writable || a.configurable)) ||
              (a = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, a);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          };
      function y(e, t) {
        for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || g(t, e, n);
      }
      function b(e) {
        var t = 'function' == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && 'number' == typeof e.length)
          return {
            next: function () {
              return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
            },
          };
        throw new TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function v(e, t) {
        var n = 'function' == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          a,
          o = n.call(e),
          i = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; ) i.push(r.value);
        } catch (l) {
          a = { error: l };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (a) throw a.error;
          }
        }
        return i;
      }
      function w() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
        return e;
      }
      function k() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++) for (var o = arguments[t], i = 0, l = o.length; i < l; i++, a++) r[a] = o[i];
        return r;
      }
      function S(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, a = 0, o = t.length; a < o; a++)
            (!r && a in t) || (r || (r = Array.prototype.slice.call(t, 0, a)), (r[a] = t[a]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      function x(e) {
        return this instanceof x ? ((this.v = e), this) : new x(e);
      }
      function E(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          a = n.apply(e, t || []),
          o = [];
        return (
          (r = Object.create(('function' == typeof AsyncIterator ? AsyncIterator : Object).prototype)),
          i('next'),
          i('throw'),
          i('return', function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, u);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function i(e, t) {
          a[e] &&
            ((r[e] = function (t) {
              return new Promise(function (n, r) {
                o.push([e, t, n, r]) > 1 || l(e, t);
              });
            }),
            t && (r[e] = t(r[e])));
        }
        function l(e, t) {
          try {
            (n = a[e](t)).value instanceof x ? Promise.resolve(n.value.v).then(s, u) : c(o[0][2], n);
          } catch (r) {
            c(o[0][3], r);
          }
          var n;
        }
        function s(e) {
          l('next', e);
        }
        function u(e) {
          l('throw', e);
        }
        function c(e, t) {
          e(t), o.shift(), o.length && l(o[0][0], o[0][1]);
        }
      }
      function _(e) {
        var t, n;
        return (
          (t = {}),
          r('next'),
          r('throw', function (e) {
            throw e;
          }),
          r('return'),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, a) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n) ? { value: x(e[r](t)), done: !1 } : a ? a(t) : t;
              }
            : a;
        }
      }
      function C(e) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = b(e)),
            (t = {}),
            r('next'),
            r('throw'),
            r('return'),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, a) {
                (function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, a, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function A(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e;
      }
      var T = Object.create
          ? function (e, t) {
              Object.defineProperty(e, 'default', { enumerable: !0, value: t });
            }
          : function (e, t) {
              e.default = t;
            },
        j = function (e) {
          return (
            (j =
              Object.getOwnPropertyNames ||
              function (e) {
                var t = [];
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[t.length] = n);
                return t;
              }),
            j(e)
          );
        };
      function P(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n = j(e), r = 0; r < n.length; r++) 'default' !== n[r] && g(t, e, n[r]);
        return T(t, e), t;
      }
      function N(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function O(e, t, n, r) {
        if ('a' === n && !r) throw new TypeError('Private accessor was defined without a getter');
        if ('function' == typeof t ? e !== t || !r : !t.has(e))
          throw new TypeError('Cannot read private member from an object whose class did not declare it');
        return 'm' === n ? r : 'a' === n ? r.call(e) : r ? r.value : t.get(e);
      }
      function L(e, t, n, r, a) {
        if ('m' === r) throw new TypeError('Private method is not writable');
        if ('a' === r && !a) throw new TypeError('Private accessor was defined without a setter');
        if ('function' == typeof t ? e !== t || !a : !t.has(e))
          throw new TypeError('Cannot write private member to an object whose class did not declare it');
        return 'a' === r ? a.call(e, n) : a ? (a.value = n) : t.set(e, n), n;
      }
      function R(e, t) {
        if (null === t || ('object' != typeof t && 'function' != typeof t))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return 'function' == typeof e ? t === e : e.has(t);
      }
      function D(e, t, n) {
        if (null != t) {
          if ('object' != typeof t && 'function' != typeof t) throw new TypeError('Object expected.');
          var r, a;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError('Symbol.asyncDispose is not defined.');
            r = t[Symbol.asyncDispose];
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError('Symbol.dispose is not defined.');
            (r = t[Symbol.dispose]), n && (a = r);
          }
          if ('function' != typeof r) throw new TypeError('Object not disposable.');
          a &&
            (r = function () {
              try {
                a.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: r, async: n });
        } else n && e.stack.push({ async: !0 });
        return t;
      }
      var F =
        'function' == typeof SuppressedError
          ? SuppressedError
          : function (e, t, n) {
              var r = new Error(n);
              return (r.name = 'SuppressedError'), (r.error = e), (r.suppressed = t), r;
            };
      function I(e) {
        function t(t) {
          (e.error = e.hasError ? new F(t, e.error, 'An error was suppressed during disposal.') : t), (e.hasError = !0);
        }
        var n,
          r = 0;
        return (function a() {
          for (; (n = e.stack.pop()); )
            try {
              if (!n.async && 1 === r) return (r = 0), e.stack.push(n), Promise.resolve().then(a);
              if (n.dispose) {
                var o = n.dispose.call(n.value);
                if (n.async)
                  return (
                    (r |= 2),
                    Promise.resolve(o).then(a, function (e) {
                      return t(e), a();
                    })
                  );
              } else r |= 1;
            } catch (i) {
              t(i);
            }
          if (1 === r) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error;
        })();
      }
      function M(e, t) {
        return 'string' == typeof e && /^\.\.?\//.test(e)
          ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (e, n, r, a, o) {
              return n ? (t ? '.jsx' : '.js') : !r || (a && o) ? r + a + '.' + o.toLowerCase() + 'js' : e;
            })
          : e;
      }
      const z = {
        __extends: a,
        __assign: o,
        __rest: i,
        __decorate: l,
        __param: s,
        __esDecorate: u,
        __runInitializers: c,
        __propKey: d,
        __setFunctionName: f,
        __metadata: p,
        __awaiter: m,
        __generator: h,
        __createBinding: g,
        __exportStar: y,
        __values: b,
        __read: v,
        __spread: w,
        __spreadArrays: k,
        __spreadArray: S,
        __await: x,
        __asyncGenerator: E,
        __asyncDelegator: _,
        __asyncValues: C,
        __makeTemplateObject: A,
        __importStar: P,
        __importDefault: N,
        __classPrivateFieldGet: O,
        __classPrivateFieldSet: L,
        __classPrivateFieldIn: R,
        __addDisposableResource: D,
        __disposeResources: I,
        __rewriteRelativeImportExtension: M,
      };
    },
    4669: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => o });
      var r = n(3696),
        a = n(6489);
      function o() {
        return (0, r.useContext)(a.o);
      }
    },
    4784: (e, t, n) => {
      'use strict';
      n.r(t), n.d(t, { default: () => r });
      const r = {
        title: 'codora',
        tagline: 'WIP please check back later!',
        favicon: 'img/favicon.ico',
        url: 'https://your-docusaurus-site.example.com',
        baseUrl: '/codora/',
        organizationName: 'codetheproject',
        projectName: 'codora',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        deploymentBranch: 'main',
        trailingSlash: !1,
        i18n: { defaultLocale: 'en', locales: ['en'], path: 'i18n', localeConfigs: {} },
        presets: [
          [
            'classic',
            { docs: { sidebarPath: './sidebars.ts' }, blog: !1, theme: { customCss: './src/css/custom.css' } },
          ],
        ],
        themeConfig: {
          image: 'img/docusaurus-social-card.jpg',
          navbar: {
            title: 'codora',
            logo: { alt: 'codora logo', src: 'img/logo.svg' },
            items: [{ href: 'https://github.com/codetheproject/codora', label: 'GitHub', position: 'right' }],
            hideOnScroll: !1,
          },
          footer: { style: 'light', copyright: 'Copyright \xa9 2025', links: [] },
          prism: {
            theme: {
              plain: { color: '#393A34', backgroundColor: '#f6f8fa' },
              styles: [
                { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#999988', fontStyle: 'italic' } },
                { types: ['namespace'], style: { opacity: 0.7 } },
                { types: ['string', 'attr-value'], style: { color: '#e3116c' } },
                { types: ['punctuation', 'operator'], style: { color: '#393A34' } },
                {
                  types: [
                    'entity',
                    'url',
                    'symbol',
                    'number',
                    'boolean',
                    'variable',
                    'constant',
                    'property',
                    'regex',
                    'inserted',
                  ],
                  style: { color: '#36acaa' },
                },
                { types: ['atrule', 'keyword', 'attr-name', 'selector'], style: { color: '#00a4db' } },
                { types: ['function', 'deleted', 'tag'], style: { color: '#d73a49' } },
                { types: ['function-variable'], style: { color: '#6f42c1' } },
                { types: ['tag', 'selector', 'keyword'], style: { color: '#00009f' } },
              ],
            },
            darkTheme: {
              plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
              styles: [
                { types: ['prolog', 'constant', 'builtin'], style: { color: 'rgb(189, 147, 249)' } },
                { types: ['inserted', 'function'], style: { color: 'rgb(80, 250, 123)' } },
                { types: ['deleted'], style: { color: 'rgb(255, 85, 85)' } },
                { types: ['changed'], style: { color: 'rgb(255, 184, 108)' } },
                { types: ['punctuation', 'symbol'], style: { color: 'rgb(248, 248, 242)' } },
                { types: ['string', 'char', 'tag', 'selector'], style: { color: 'rgb(255, 121, 198)' } },
                { types: ['keyword', 'variable'], style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' } },
                { types: ['comment'], style: { color: 'rgb(98, 114, 164)' } },
                { types: ['attr-name'], style: { color: 'rgb(241, 250, 140)' } },
              ],
            },
            additionalLanguages: [],
            magicComments: [
              {
                className: 'theme-code-block-highlighted-line',
                line: 'highlight-next-line',
                block: { start: 'highlight-start', end: 'highlight-end' },
              },
            ],
          },
          colorMode: { defaultMode: 'light', disableSwitch: !1, respectPrefersColorScheme: !1 },
          docs: { versionPersistence: 'localStorage', sidebar: { hideable: !1, autoCollapseCategories: !1 } },
          blog: { sidebar: { groupByYear: !0 } },
          metadata: [],
          tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
        },
        baseUrlIssueBanner: !0,
        future: {
          experimental_faster: {
            swcJsLoader: !1,
            swcJsMinimizer: !1,
            swcHtmlMinimizer: !1,
            lightningCssMinimizer: !1,
            mdxCrossCompilerCache: !1,
            rspackBundler: !1,
          },
          experimental_storage: { type: 'localStorage', namespace: !1 },
          experimental_router: 'browser',
        },
        onBrokenAnchors: 'warn',
        onDuplicateRoutes: 'warn',
        staticDirectories: ['static'],
        customFields: {},
        plugins: [],
        themes: [],
        scripts: [],
        headTags: [],
        stylesheets: [],
        clientModules: [],
        titleDelimiter: '|',
        noIndex: !1,
        markdown: {
          format: 'mdx',
          mermaid: !1,
          mdx1Compat: { comments: !0, admonitions: !0, headingIds: !0 },
          anchors: { maintainCase: !1 },
        },
      };
    },
    4996: (e, t, n) => {
      'use strict';
      n.d(t, { G: () => y, a: () => g });
      var r = n(3696),
        a = n(9006),
        o = n(8225),
        i = n(3540),
        l = n(2427),
        s = n(2540);
      const u = r.createContext(void 0),
        c = 'theme',
        d = (0, i.Wf)(c),
        f = { light: 'light', dark: 'dark' },
        p = (e) => (e === f.dark ? f.dark : f.light),
        m = (e) => (a.A.canUseDOM ? p(document.documentElement.getAttribute('data-theme')) : p(e)),
        h = (e) => {
          d.set(p(e));
        };
      function g(e) {
        let { children: t } = e;
        const n = (function () {
          const {
              colorMode: { defaultMode: e, disableSwitch: t, respectPrefersColorScheme: n },
            } = (0, l.p)(),
            [a, o] = (0, r.useState)(m(e));
          (0, r.useEffect)(() => {
            t && d.del();
          }, [t]);
          const i = (0, r.useCallback)(
            function (t, r) {
              void 0 === r && (r = {});
              const { persist: a = !0 } = r;
              t
                ? (o(t), a && h(t))
                : (o(n ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? f.dark : f.light) : e), d.del());
            },
            [n, e]
          );
          (0, r.useEffect)(() => {
            document.documentElement.setAttribute('data-theme', p(a));
          }, [a]),
            (0, r.useEffect)(() => {
              if (t) return;
              const e = (e) => {
                if (e.key !== c) return;
                const t = d.get();
                null !== t && i(p(t));
              };
              return window.addEventListener('storage', e), () => window.removeEventListener('storage', e);
            }, [t, i]);
          const s = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(() => {
              if (t && !n) return;
              const e = window.matchMedia('(prefers-color-scheme: dark)'),
                r = () => {
                  window.matchMedia('print').matches || s.current
                    ? (s.current = window.matchMedia('print').matches)
                    : i(null);
                };
              return e.addListener(r), () => e.removeListener(r);
            }, [i, t, n]),
            (0, r.useMemo)(
              () => ({
                colorMode: a,
                setColorMode: i,
                get isDarkTheme() {
                  return a === f.dark;
                },
                setLightTheme() {
                  i(f.light);
                },
                setDarkTheme() {
                  i(f.dark);
                },
              }),
              [a, i]
            )
          );
        })();
        return (0, s.jsx)(u.Provider, { value: n, children: t });
      }
      function y() {
        const e = (0, r.useContext)(u);
        if (null == e)
          throw new o.dV(
            'ColorModeProvider',
            'Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode.'
          );
        return e;
      }
    },
    5200: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => o });
      var r = n(3696),
        a = n(8142);
      function o() {
        return (0, r.useContext)(a.o);
      }
    },
    5202: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => pt });
      var r = n(3696),
        a = n(1750),
        o = n(2407),
        i = n(5545),
        l = n(9519),
        s = n(7963),
        u = n(4517),
        c = n(2540);
      const d = '__docusaurus_skipToContent_fallback';
      function f(e) {
        e.setAttribute('tabindex', '-1'), e.focus(), e.removeAttribute('tabindex');
      }
      function p() {
        const e = (0, r.useRef)(null),
          { action: t } = (0, l.W6)(),
          n = (0, r.useCallback)((e) => {
            e.preventDefault();
            const t = document.querySelector('main:first-of-type') ?? document.getElementById(d);
            t && f(t);
          }, []);
        return (
          (0, u.$)((n) => {
            let { location: r } = n;
            e.current && !r.hash && 'PUSH' === t && f(e.current);
          }),
          { containerRef: e, onClick: n }
        );
      }
      const m = (0, s.T)({
        id: 'theme.common.skipToMainContent',
        description:
          'The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation',
        message: 'Skip to main content',
      });
      function h(e) {
        const t = e.children ?? m,
          { containerRef: n, onClick: r } = p();
        return (0, c.jsx)('div', {
          ref: n,
          role: 'region',
          'aria-label': m,
          children: (0, c.jsx)('a', { ...e, href: `#${d}`, onClick: r, children: t }),
        });
      }
      var g = n(7404),
        y = n(3884);
      const b = { skipToContent: 'skipToContent_oPtH' };
      function v() {
        return (0, c.jsx)(h, { className: b.skipToContent });
      }
      var w = n(2427),
        k = n(7268);
      function S(e) {
        let { width: t = 21, height: n = 21, color: r = 'currentColor', strokeWidth: a = 1.2, className: o, ...i } = e;
        return (0, c.jsx)('svg', {
          viewBox: '0 0 15 15',
          width: t,
          height: n,
          ...i,
          children: (0, c.jsx)('g', {
            stroke: r,
            strokeWidth: a,
            children: (0, c.jsx)('path', { d: 'M.75.75l13.5 13.5M14.25.75L.75 14.25' }),
          }),
        });
      }
      const x = { closeButton: 'closeButton_J5rP' };
      function E(e) {
        return (0, c.jsx)('button', {
          type: 'button',
          'aria-label': (0, s.T)({
            id: 'theme.AnnouncementBar.closeButtonAriaLabel',
            message: 'Close',
            description: 'The ARIA label for close button of announcement bar',
          }),
          ...e,
          className: (0, a.A)('clean-btn close', x.closeButton, e.className),
          children: (0, c.jsx)(S, { width: 14, height: 14, strokeWidth: 3.1 }),
        });
      }
      const _ = { content: 'content_bSb_' };
      function C(e) {
        const { announcementBar: t } = (0, w.p)(),
          { content: n } = t;
        return (0, c.jsx)('div', {
          ...e,
          className: (0, a.A)(_.content, e.className),
          dangerouslySetInnerHTML: { __html: n },
        });
      }
      const A = {
        announcementBar: 'announcementBar_zJRd',
        announcementBarPlaceholder: 'announcementBarPlaceholder_NpUd',
        announcementBarClose: 'announcementBarClose_Jjdj',
        announcementBarContent: 'announcementBarContent_t7IR',
      };
      function T() {
        const { announcementBar: e } = (0, w.p)(),
          { isActive: t, close: n } = (0, k.M)();
        if (!t) return null;
        const { backgroundColor: r, textColor: a, isCloseable: o } = e;
        return (0, c.jsxs)('div', {
          className: A.announcementBar,
          style: { backgroundColor: r, color: a },
          role: 'banner',
          children: [
            o && (0, c.jsx)('div', { className: A.announcementBarPlaceholder }),
            (0, c.jsx)(C, { className: A.announcementBarContent }),
            o && (0, c.jsx)(E, { onClick: n, className: A.announcementBarClose }),
          ],
        });
      }
      var j = n(2923),
        P = n(3707);
      var N = n(8225),
        O = n(6009);
      const L = r.createContext(null);
      function R(e) {
        let { children: t } = e;
        const n = (function () {
          const e = (0, j.M)(),
            t = (0, O.YL)(),
            [n, a] = (0, r.useState)(!1),
            o = null !== t.component,
            i = (0, N.ZC)(o);
          return (
            (0, r.useEffect)(() => {
              o && !i && a(!0);
            }, [o, i]),
            (0, r.useEffect)(() => {
              o ? e.shown || a(!0) : a(!1);
            }, [e.shown, o]),
            (0, r.useMemo)(() => [n, a], [n])
          );
        })();
        return (0, c.jsx)(L.Provider, { value: n, children: t });
      }
      function D(e) {
        if (e.component) {
          const t = e.component;
          return (0, c.jsx)(t, { ...e.props });
        }
      }
      function F() {
        const e = (0, r.useContext)(L);
        if (!e) throw new N.dV('NavbarSecondaryMenuDisplayProvider');
        const [t, n] = e,
          a = (0, r.useCallback)(() => n(!1), [n]),
          o = (0, O.YL)();
        return (0, r.useMemo)(() => ({ shown: t, hide: a, content: D(o) }), [a, o, t]);
      }
      function I(e) {
        let { header: t, primaryMenu: n, secondaryMenu: r } = e;
        const { shown: o } = F();
        return (0, c.jsxs)('div', {
          className: 'navbar-sidebar',
          children: [
            t,
            (0, c.jsxs)('div', {
              className: (0, a.A)('navbar-sidebar__items', { 'navbar-sidebar__items--show-secondary': o }),
              children: [
                (0, c.jsx)('div', { className: 'navbar-sidebar__item menu', children: n }),
                (0, c.jsx)('div', { className: 'navbar-sidebar__item menu', children: r }),
              ],
            }),
          ],
        });
      }
      var M = n(4996),
        z = n(5200);
      function B(e) {
        return (0, c.jsx)('svg', {
          viewBox: '0 0 24 24',
          width: 24,
          height: 24,
          ...e,
          children: (0, c.jsx)('path', {
            fill: 'currentColor',
            d: 'M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z',
          }),
        });
      }
      function $(e) {
        return (0, c.jsx)('svg', {
          viewBox: '0 0 24 24',
          width: 24,
          height: 24,
          ...e,
          children: (0, c.jsx)('path', {
            fill: 'currentColor',
            d: 'M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z',
          }),
        });
      }
      const U = {
        toggle: 'toggle_ki11',
        toggleButton: 'toggleButton_MMFG',
        darkToggleIcon: 'darkToggleIcon_U96C',
        lightToggleIcon: 'lightToggleIcon_lgto',
        toggleButtonDisabled: 'toggleButtonDisabled_Uw7m',
      };
      function q(e) {
        let { className: t, buttonClassName: n, value: r, onChange: o } = e;
        const i = (0, z.A)(),
          l = (0, s.T)(
            {
              message: 'Switch between dark and light mode (currently {mode})',
              id: 'theme.colorToggle.ariaLabel',
              description: 'The ARIA label for the navbar color mode toggle',
            },
            {
              mode:
                'dark' === r
                  ? (0, s.T)({
                      message: 'dark mode',
                      id: 'theme.colorToggle.ariaLabel.mode.dark',
                      description: 'The name for the dark color mode',
                    })
                  : (0, s.T)({
                      message: 'light mode',
                      id: 'theme.colorToggle.ariaLabel.mode.light',
                      description: 'The name for the light color mode',
                    }),
            }
          );
        return (0, c.jsx)('div', {
          className: (0, a.A)(U.toggle, t),
          children: (0, c.jsxs)('button', {
            className: (0, a.A)('clean-btn', U.toggleButton, !i && U.toggleButtonDisabled, n),
            type: 'button',
            onClick: () => o('dark' === r ? 'light' : 'dark'),
            disabled: !i,
            title: l,
            'aria-label': l,
            'aria-live': 'polite',
            'aria-pressed': 'dark' === r ? 'true' : 'false',
            children: [
              (0, c.jsx)(B, { className: (0, a.A)(U.toggleIcon, U.lightToggleIcon) }),
              (0, c.jsx)($, { className: (0, a.A)(U.toggleIcon, U.darkToggleIcon) }),
            ],
          }),
        });
      }
      const H = r.memo(q),
        G = { darkNavbarColorModeToggle: 'darkNavbarColorModeToggle_m8pZ' };
      function V(e) {
        let { className: t } = e;
        const n = (0, w.p)().navbar.style,
          r = (0, w.p)().colorMode.disableSwitch,
          { colorMode: a, setColorMode: o } = (0, M.G)();
        return r
          ? null
          : (0, c.jsx)(H, {
              className: t,
              buttonClassName: 'dark' === n ? G.darkNavbarColorModeToggle : void 0,
              value: a,
              onChange: o,
            });
      }
      var W = n(6782);
      function Q() {
        return (0, c.jsx)(W.A, {
          className: 'navbar__brand',
          imageClassName: 'navbar__logo',
          titleClassName: 'navbar__title text--truncate',
        });
      }
      function K() {
        const e = (0, j.M)();
        return (0, c.jsx)('button', {
          type: 'button',
          'aria-label': (0, s.T)({
            id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
            message: 'Close navigation bar',
            description: 'The ARIA label for close button of mobile sidebar',
          }),
          className: 'clean-btn navbar-sidebar__close',
          onClick: () => e.toggle(),
          children: (0, c.jsx)(S, { color: 'var(--ifm-color-emphasis-600)' }),
        });
      }
      function Y() {
        return (0, c.jsxs)('div', {
          className: 'navbar-sidebar__brand',
          children: [(0, c.jsx)(Q, {}), (0, c.jsx)(V, { className: 'margin-right--md' }), (0, c.jsx)(K, {})],
        });
      }
      var X = n(9985),
        Z = n(3254),
        J = n(2535);
      function ee(e, t) {
        return void 0 !== e && void 0 !== t && new RegExp(e, 'gi').test(t);
      }
      var te = n(5443);
      function ne(e) {
        let {
          activeBasePath: t,
          activeBaseRegex: n,
          to: r,
          href: a,
          label: o,
          html: i,
          isDropdownLink: l,
          prependBaseUrlToHref: s,
          ...u
        } = e;
        const d = (0, Z.Ay)(r),
          f = (0, Z.Ay)(t),
          p = (0, Z.Ay)(a, { forcePrependBaseUrl: !0 }),
          m = o && a && !(0, J.A)(a),
          h = i
            ? { dangerouslySetInnerHTML: { __html: i } }
            : {
                children: (0, c.jsxs)(c.Fragment, {
                  children: [o, m && (0, c.jsx)(te.A, { ...(l && { width: 12, height: 12 }) })],
                }),
              };
        return a
          ? (0, c.jsx)(X.A, { href: s ? p : a, ...u, ...h })
          : (0, c.jsx)(X.A, {
              to: d,
              isNavLink: !0,
              ...((t || n) && { isActive: (e, t) => (n ? ee(n, t.pathname) : t.pathname.startsWith(f)) }),
              ...u,
              ...h,
            });
      }
      function re(e) {
        let { className: t, isDropdownItem: n = !1, ...r } = e;
        const o = (0, c.jsx)(ne, {
          className: (0, a.A)(n ? 'dropdown__link' : 'navbar__item navbar__link', t),
          isDropdownLink: n,
          ...r,
        });
        return n ? (0, c.jsx)('li', { children: o }) : o;
      }
      function ae(e) {
        let { className: t, isDropdownItem: n, ...r } = e;
        return (0, c.jsx)('li', {
          className: 'menu__list-item',
          children: (0, c.jsx)(ne, { className: (0, a.A)('menu__link', t), ...r }),
        });
      }
      function oe(e) {
        let { mobile: t = !1, position: n, ...r } = e;
        const a = t ? ae : re;
        return (0, c.jsx)(a, {
          ...r,
          activeClassName: r.activeClassName ?? (t ? 'menu__link--active' : 'navbar__link--active'),
        });
      }
      var ie = n(9695),
        le = n(4422),
        se = n(4669);
      const ue = 'dropdownNavbarItemMobile_MJ1i';
      function ce(e, t) {
        return e.some((e) =>
          (function (e, t) {
            return (
              !!(0, le.ys)(e.to, t) ||
              !!ee(e.activeBaseRegex, t) ||
              !(!e.activeBasePath || !t.startsWith(e.activeBasePath))
            );
          })(e, t)
        );
      }
      function de(e) {
        let { items: t, position: n, className: o, onClick: i, ...l } = e;
        const s = (0, r.useRef)(null),
          [u, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            const e = (e) => {
              s.current && !s.current.contains(e.target) && d(!1);
            };
            return (
              document.addEventListener('mousedown', e),
              document.addEventListener('touchstart', e),
              document.addEventListener('focusin', e),
              () => {
                document.removeEventListener('mousedown', e),
                  document.removeEventListener('touchstart', e),
                  document.removeEventListener('focusin', e);
              }
            );
          }, [s]),
          (0, c.jsxs)('div', {
            ref: s,
            className: (0, a.A)('navbar__item', 'dropdown', 'dropdown--hoverable', {
              'dropdown--right': 'right' === n,
              'dropdown--show': u,
            }),
            children: [
              (0, c.jsx)(ne, {
                'aria-haspopup': 'true',
                'aria-expanded': u,
                role: 'button',
                href: l.to ? void 0 : '#',
                className: (0, a.A)('navbar__link', o),
                ...l,
                onClick: l.to ? void 0 : (e) => e.preventDefault(),
                onKeyDown: (e) => {
                  'Enter' === e.key && (e.preventDefault(), d(!u));
                },
                children: l.children ?? l.label,
              }),
              (0, c.jsx)('ul', {
                className: 'dropdown__menu',
                children: t.map((e, t) =>
                  (0, r.createElement)(_e, {
                    isDropdownItem: !0,
                    activeClassName: 'dropdown__link--active',
                    ...e,
                    key: t,
                  })
                ),
              }),
            ],
          })
        );
      }
      function fe(e) {
        let { items: t, className: n, position: o, onClick: i, ...s } = e;
        const u = (function () {
            const {
                siteConfig: { baseUrl: e },
              } = (0, se.A)(),
              { pathname: t } = (0, l.zy)();
            return t.replace(e, '/');
          })(),
          d = ce(t, u),
          { collapsed: f, toggleCollapsed: p, setCollapsed: m } = (0, ie.u)({ initialState: () => !d });
        return (
          (0, r.useEffect)(() => {
            d && m(!d);
          }, [u, d, m]),
          (0, c.jsxs)('li', {
            className: (0, a.A)('menu__list-item', { 'menu__list-item--collapsed': f }),
            children: [
              (0, c.jsx)(ne, {
                role: 'button',
                className: (0, a.A)(ue, 'menu__link menu__link--sublist menu__link--sublist-caret', n),
                ...s,
                onClick: (e) => {
                  e.preventDefault(), p();
                },
                children: s.children ?? s.label,
              }),
              (0, c.jsx)(ie.N, {
                lazy: !0,
                as: 'ul',
                className: 'menu__list',
                collapsed: f,
                children: t.map((e, t) =>
                  (0, r.createElement)(_e, {
                    mobile: !0,
                    isDropdownItem: !0,
                    onClick: i,
                    activeClassName: 'menu__link--active',
                    ...e,
                    key: t,
                  })
                ),
              }),
            ],
          })
        );
      }
      function pe(e) {
        let { mobile: t = !1, ...n } = e;
        const r = t ? fe : de;
        return (0, c.jsx)(r, { ...n });
      }
      var me = n(2424);
      function he(e) {
        let { width: t = 20, height: n = 20, ...r } = e;
        return (0, c.jsx)('svg', {
          viewBox: '0 0 24 24',
          width: t,
          height: n,
          'aria-hidden': !0,
          ...r,
          children: (0, c.jsx)('path', {
            fill: 'currentColor',
            d: 'M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z',
          }),
        });
      }
      const ge = 'iconLanguage_kvP7';
      var ye = n(9517);
      const be = { navbarSearchContainer: 'navbarSearchContainer_bzqh' };
      function ve(e) {
        let { children: t, className: n } = e;
        return (0, c.jsx)('div', { className: (0, a.A)(n, be.navbarSearchContainer), children: t });
      }
      var we = n(9294),
        ke = n(8678);
      var Se = n(1599);
      function xe(e, t) {
        return (
          t.alternateDocVersions[e.name] ??
          (function (e) {
            return e.docs.find((t) => t.id === e.mainDocId);
          })(e)
        );
      }
      const Ee = {
        default: oe,
        localeDropdown: function (e) {
          let { mobile: t, dropdownItemsBefore: n, dropdownItemsAfter: r, queryString: a = '', ...o } = e;
          const {
              i18n: { currentLocale: i, locales: u, localeConfigs: d },
            } = (0, se.A)(),
            f = (0, me.o)(),
            { search: p, hash: m } = (0, l.zy)(),
            h = [
              ...n,
              ...u.map((e) => {
                const n = `${`pathname://${f.createUrl({ locale: e, fullyQualified: !1 })}`}${p}${m}${a}`;
                return {
                  label: d[e].label,
                  lang: d[e].htmlLang,
                  to: n,
                  target: '_self',
                  autoAddBaseUrl: !1,
                  className: e === i ? (t ? 'menu__link--active' : 'dropdown__link--active') : '',
                };
              }),
              ...r,
            ],
            g = t
              ? (0, s.T)({
                  message: 'Languages',
                  id: 'theme.navbar.mobileLanguageDropdown.label',
                  description: 'The label for the mobile language switcher dropdown',
                })
              : d[i].label;
          return (0, c.jsx)(pe, {
            ...o,
            mobile: t,
            label: (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)(he, { className: ge }), g] }),
            items: h,
          });
        },
        search: function (e) {
          let { mobile: t, className: n } = e;
          return t ? null : (0, c.jsx)(ve, { className: n, children: (0, c.jsx)(ye.A, {}) });
        },
        dropdown: pe,
        html: function (e) {
          let { value: t, className: n, mobile: r = !1, isDropdownItem: o = !1 } = e;
          const i = o ? 'li' : 'div';
          return (0, c.jsx)(i, {
            className: (0, a.A)({ navbar__item: !r && !o, 'menu__list-item': r }, n),
            dangerouslySetInnerHTML: { __html: t },
          });
        },
        doc: function (e) {
          let { docId: t, label: n, docsPluginId: r, ...a } = e;
          const { activeDoc: o } = (0, we.zK)(r),
            i = (0, ke.QB)(t, r),
            l = o?.path === i?.path;
          return null === i || (i.unlisted && !l)
            ? null
            : (0, c.jsx)(oe, {
                exact: !0,
                ...a,
                isActive: () => l || (!!o?.sidebar && o.sidebar === i.sidebar),
                label: n ?? i.id,
                to: i.path,
              });
        },
        docSidebar: function (e) {
          let { sidebarId: t, label: n, docsPluginId: r, ...a } = e;
          const { activeDoc: o } = (0, we.zK)(r),
            i = (0, ke.fW)(t, r).link;
          if (!i)
            throw new Error(`DocSidebarNavbarItem: Sidebar with ID "${t}" doesn't have anything to be linked to.`);
          return (0, c.jsx)(oe, { exact: !0, ...a, isActive: () => o?.sidebar === t, label: n ?? i.label, to: i.path });
        },
        docsVersion: function (e) {
          let { label: t, to: n, docsPluginId: r, ...a } = e;
          const o = (0, ke.Vd)(r)[0],
            i = t ?? o.label,
            l = n ?? ((e) => e.docs.find((t) => t.id === e.mainDocId))(o).path;
          return (0, c.jsx)(oe, { ...a, label: i, to: l });
        },
        docsVersionDropdown: function (e) {
          let {
            mobile: t,
            docsPluginId: n,
            dropdownActiveClassDisabled: r,
            dropdownItemsBefore: a,
            dropdownItemsAfter: o,
            ...i
          } = e;
          const { search: u, hash: d } = (0, l.zy)(),
            f = (0, we.zK)(n),
            p = (0, we.jh)(n),
            { savePreferredVersionName: m } = (0, Se.g1)(n),
            h = [
              ...a,
              ...p.map(function (e) {
                const t = xe(e, f);
                return {
                  label: e.label,
                  to: `${t.path}${u}${d}`,
                  isActive: () => e === f.activeVersion,
                  onClick: () => m(e.name),
                };
              }),
              ...o,
            ],
            g = (0, ke.Vd)(n)[0],
            y =
              t && h.length > 1
                ? (0, s.T)({
                    id: 'theme.navbar.mobileVersionsDropdown.label',
                    message: 'Versions',
                    description: 'The label for the navbar versions dropdown on mobile view',
                  })
                : g.label,
            b = t && h.length > 1 ? void 0 : xe(g, f).path;
          return h.length <= 1
            ? (0, c.jsx)(oe, { ...i, mobile: t, label: y, to: b, isActive: r ? () => !1 : void 0 })
            : (0, c.jsx)(pe, { ...i, mobile: t, label: y, to: b, items: h, isActive: r ? () => !1 : void 0 });
        },
      };
      function _e(e) {
        let { type: t, ...n } = e;
        const r = (function (e, t) {
            return e && 'default' !== e ? e : 'items' in t ? 'dropdown' : 'default';
          })(t, n),
          a = Ee[r];
        if (!a) throw new Error(`No NavbarItem component found for type "${t}".`);
        return (0, c.jsx)(a, { ...n });
      }
      function Ce() {
        const e = (0, j.M)(),
          t = (0, w.p)().navbar.items;
        return (0, c.jsx)('ul', {
          className: 'menu__list',
          children: t.map((t, n) => (0, r.createElement)(_e, { mobile: !0, ...t, onClick: () => e.toggle(), key: n })),
        });
      }
      function Ae(e) {
        return (0, c.jsx)('button', {
          ...e,
          type: 'button',
          className: 'clean-btn navbar-sidebar__back',
          children: (0, c.jsx)(s.A, {
            id: 'theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel',
            description:
              'The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)',
            children: '\u2190 Back to main menu',
          }),
        });
      }
      function Te() {
        const e = 0 === (0, w.p)().navbar.items.length,
          t = F();
        return (0, c.jsxs)(c.Fragment, { children: [!e && (0, c.jsx)(Ae, { onClick: () => t.hide() }), t.content] });
      }
      function je() {
        const e = (0, j.M)();
        var t;
        return (
          void 0 === (t = e.shown) && (t = !0),
          (0, r.useEffect)(
            () => (
              (document.body.style.overflow = t ? 'hidden' : 'visible'),
              () => {
                document.body.style.overflow = 'visible';
              }
            ),
            [t]
          ),
          e.shouldRender
            ? (0, c.jsx)(I, {
                header: (0, c.jsx)(Y, {}),
                primaryMenu: (0, c.jsx)(Ce, {}),
                secondaryMenu: (0, c.jsx)(Te, {}),
              })
            : null
        );
      }
      const Pe = { navbarHideable: 'navbarHideable_hhpl', navbarHidden: 'navbarHidden_nmcs' };
      function Ne(e) {
        return (0, c.jsx)('div', {
          role: 'presentation',
          ...e,
          className: (0, a.A)('navbar-sidebar__backdrop', e.className),
        });
      }
      function Oe(e) {
        let { children: t } = e;
        const {
            navbar: { hideOnScroll: n, style: o },
          } = (0, w.p)(),
          i = (0, j.M)(),
          { navbarRef: l, isNavbarVisible: d } = (function (e) {
            const [t, n] = (0, r.useState)(e),
              a = (0, r.useRef)(!1),
              o = (0, r.useRef)(0),
              i = (0, r.useCallback)((e) => {
                null !== e && (o.current = e.getBoundingClientRect().height);
              }, []);
            return (
              (0, P.Mq)((t, r) => {
                let { scrollY: i } = t;
                if (!e) return;
                if (i < o.current) return void n(!0);
                if (a.current) return void (a.current = !1);
                const l = r?.scrollY,
                  s = document.documentElement.scrollHeight - o.current,
                  u = window.innerHeight;
                l && i >= l ? n(!1) : i + u < s && n(!0);
              }),
              (0, u.$)((t) => {
                if (!e) return;
                const r = t.location.hash;
                if (r ? document.getElementById(r.substring(1)) : void 0) return (a.current = !0), void n(!1);
                n(!0);
              }),
              { navbarRef: i, isNavbarVisible: t }
            );
          })(n);
        return (0, c.jsxs)('nav', {
          ref: l,
          'aria-label': (0, s.T)({
            id: 'theme.NavBar.navAriaLabel',
            message: 'Main',
            description: 'The ARIA label for the main navigation',
          }),
          className: (0, a.A)('navbar', 'navbar--fixed-top', n && [Pe.navbarHideable, !d && Pe.navbarHidden], {
            'navbar--dark': 'dark' === o,
            'navbar--primary': 'primary' === o,
            'navbar-sidebar--show': i.shown,
          }),
          children: [t, (0, c.jsx)(Ne, { onClick: i.toggle }), (0, c.jsx)(je, {})],
        });
      }
      var Le = n(99);
      const Re = { errorBoundaryError: 'errorBoundaryError_WE6Q', errorBoundaryFallback: 'errorBoundaryFallback_bdJX' };
      function De(e) {
        return (0, c.jsx)('button', {
          type: 'button',
          ...e,
          children: (0, c.jsx)(s.A, {
            id: 'theme.ErrorPageContent.tryAgain',
            description:
              'The label of the button to try again rendering when the React error boundary captures an error',
            children: 'Try again',
          }),
        });
      }
      function Fe(e) {
        let { error: t } = e;
        const n = (0, Le.rA)(t)
          .map((e) => e.message)
          .join('\n\nCause:\n');
        return (0, c.jsx)('p', { className: Re.errorBoundaryError, children: n });
      }
      class Ie extends r.Component {
        componentDidCatch(e, t) {
          throw this.props.onError(e, t);
        }
        render() {
          return this.props.children;
        }
      }
      const Me = 'right';
      function ze(e) {
        let { width: t = 30, height: n = 30, className: r, ...a } = e;
        return (0, c.jsx)('svg', {
          className: r,
          width: t,
          height: n,
          viewBox: '0 0 30 30',
          'aria-hidden': 'true',
          ...a,
          children: (0, c.jsx)('path', {
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '2',
            d: 'M4 7h22M4 15h22M4 23h22',
          }),
        });
      }
      function Be() {
        const { toggle: e, shown: t } = (0, j.M)();
        return (0, c.jsx)('button', {
          onClick: e,
          'aria-label': (0, s.T)({
            id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
            message: 'Toggle navigation bar',
            description: 'The ARIA label for hamburger menu button of mobile navigation',
          }),
          'aria-expanded': t,
          className: 'navbar__toggle clean-btn',
          type: 'button',
          children: (0, c.jsx)(ze, {}),
        });
      }
      const $e = { colorModeToggle: 'colorModeToggle_Hewu' };
      function Ue(e) {
        let { items: t } = e;
        return (0, c.jsx)(c.Fragment, {
          children: t.map((e, t) =>
            (0, c.jsx)(
              Ie,
              {
                onError: (t) =>
                  new Error(
                    `A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n${JSON.stringify(
                      e,
                      null,
                      2
                    )}`,
                    { cause: t }
                  ),
                children: (0, c.jsx)(_e, { ...e }),
              },
              t
            )
          ),
        });
      }
      function qe(e) {
        let { left: t, right: n } = e;
        return (0, c.jsxs)('div', {
          className: 'navbar__inner',
          children: [
            (0, c.jsx)('div', { className: 'navbar__items', children: t }),
            (0, c.jsx)('div', { className: 'navbar__items navbar__items--right', children: n }),
          ],
        });
      }
      function He() {
        const e = (0, j.M)(),
          t = (0, w.p)().navbar.items,
          [n, r] = (function (e) {
            function t(e) {
              return 'left' === (e.position ?? Me);
            }
            return [e.filter(t), e.filter((e) => !t(e))];
          })(t),
          a = t.find((e) => 'search' === e.type);
        return (0, c.jsx)(qe, {
          left: (0, c.jsxs)(c.Fragment, {
            children: [!e.disabled && (0, c.jsx)(Be, {}), (0, c.jsx)(Q, {}), (0, c.jsx)(Ue, { items: n })],
          }),
          right: (0, c.jsxs)(c.Fragment, {
            children: [
              (0, c.jsx)(Ue, { items: r }),
              (0, c.jsx)(V, { className: $e.colorModeToggle }),
              !a && (0, c.jsx)(ve, { children: (0, c.jsx)(ye.A, {}) }),
            ],
          }),
        });
      }
      function Ge() {
        return (0, c.jsx)(Oe, { children: (0, c.jsx)(He, {}) });
      }
      function Ve(e) {
        let { item: t } = e;
        const { to: n, href: r, label: o, prependBaseUrlToHref: i, className: l, ...s } = t,
          u = (0, Z.Ay)(n),
          d = (0, Z.Ay)(r, { forcePrependBaseUrl: !0 });
        return (0, c.jsxs)(X.A, {
          className: (0, a.A)('footer__link-item', l),
          ...(r ? { href: i ? d : r } : { to: u }),
          ...s,
          children: [o, r && !(0, J.A)(r) && (0, c.jsx)(te.A, {})],
        });
      }
      function We(e) {
        let { item: t } = e;
        return t.html
          ? (0, c.jsx)('li', {
              className: (0, a.A)('footer__item', t.className),
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : (0, c.jsx)('li', { className: 'footer__item', children: (0, c.jsx)(Ve, { item: t }) }, t.href ?? t.to);
      }
      function Qe(e) {
        let { column: t } = e;
        return (0, c.jsxs)('div', {
          className: (0, a.A)('col footer__col', t.className),
          children: [
            (0, c.jsx)('div', { className: 'footer__title', children: t.title }),
            (0, c.jsx)('ul', {
              className: 'footer__items clean-list',
              children: t.items.map((e, t) => (0, c.jsx)(We, { item: e }, t)),
            }),
          ],
        });
      }
      function Ke(e) {
        let { columns: t } = e;
        return (0, c.jsx)('div', {
          className: 'row footer__links',
          children: t.map((e, t) => (0, c.jsx)(Qe, { column: e }, t)),
        });
      }
      function Ye() {
        return (0, c.jsx)('span', { className: 'footer__link-separator', children: '\xb7' });
      }
      function Xe(e) {
        let { item: t } = e;
        return t.html
          ? (0, c.jsx)('span', {
              className: (0, a.A)('footer__link-item', t.className),
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : (0, c.jsx)(Ve, { item: t });
      }
      function Ze(e) {
        let { links: t } = e;
        return (0, c.jsx)('div', {
          className: 'footer__links text--center',
          children: (0, c.jsx)('div', {
            className: 'footer__links',
            children: t.map((e, n) =>
              (0, c.jsxs)(
                r.Fragment,
                { children: [(0, c.jsx)(Xe, { item: e }), t.length !== n + 1 && (0, c.jsx)(Ye, {})] },
                n
              )
            ),
          }),
        });
      }
      function Je(e) {
        let { links: t } = e;
        return (function (e) {
          return 'title' in e[0];
        })(t)
          ? (0, c.jsx)(Ke, { columns: t })
          : (0, c.jsx)(Ze, { links: t });
      }
      var et = n(8460);
      const tt = 'footerLogoLink_tutC';
      function nt(e) {
        let { logo: t } = e;
        const { withBaseUrl: n } = (0, Z.hH)(),
          r = { light: n(t.src), dark: n(t.srcDark ?? t.src) };
        return (0, c.jsx)(et.A, {
          className: (0, a.A)('footer__logo', t.className),
          alt: t.alt,
          sources: r,
          width: t.width,
          height: t.height,
          style: t.style,
        });
      }
      function rt(e) {
        let { logo: t } = e;
        return t.href
          ? (0, c.jsx)(X.A, { href: t.href, className: tt, target: t.target, children: (0, c.jsx)(nt, { logo: t }) })
          : (0, c.jsx)(nt, { logo: t });
      }
      function at(e) {
        let { copyright: t } = e;
        return (0, c.jsx)('div', { className: 'footer__copyright', dangerouslySetInnerHTML: { __html: t } });
      }
      function ot(e) {
        let { style: t, links: n, logo: r, copyright: o } = e;
        return (0, c.jsx)('footer', {
          className: (0, a.A)('footer', { 'footer--dark': 'dark' === t }),
          children: (0, c.jsxs)('div', {
            className: 'container container-fluid',
            children: [
              n,
              (r || o) &&
                (0, c.jsxs)('div', {
                  className: 'footer__bottom text--center',
                  children: [r && (0, c.jsx)('div', { className: 'margin-bottom--sm', children: r }), o],
                }),
            ],
          }),
        });
      }
      function it() {
        const { footer: e } = (0, w.p)();
        if (!e) return null;
        const { copyright: t, links: n, logo: r, style: a } = e;
        return (0, c.jsx)(ot, {
          style: a,
          links: n && n.length > 0 && (0, c.jsx)(Je, { links: n }),
          logo: r && (0, c.jsx)(rt, { logo: r }),
          copyright: t && (0, c.jsx)(at, { copyright: t }),
        });
      }
      const lt = r.memo(it),
        st = (0, N.fM)([
          M.a,
          k.o,
          P.Tv,
          Se.VQ,
          i.Jx,
          function (e) {
            let { children: t } = e;
            return (0, c.jsx)(O.y_, { children: (0, c.jsx)(j.e, { children: (0, c.jsx)(R, { children: t }) }) });
          },
        ]);
      function ut(e) {
        let { children: t } = e;
        return (0, c.jsx)(st, { children: t });
      }
      var ct = n(7367);
      function dt(e) {
        let { error: t, tryAgain: n } = e;
        return (0, c.jsx)('main', {
          className: 'container margin-vert--xl',
          children: (0, c.jsx)('div', {
            className: 'row',
            children: (0, c.jsxs)('div', {
              className: 'col col--6 col--offset-3',
              children: [
                (0, c.jsx)(ct.A, {
                  as: 'h1',
                  className: 'hero__title',
                  children: (0, c.jsx)(s.A, {
                    id: 'theme.ErrorPageContent.title',
                    description: 'The title of the fallback page when the page crashed',
                    children: 'This page crashed.',
                  }),
                }),
                (0, c.jsx)('div', {
                  className: 'margin-vert--lg',
                  children: (0, c.jsx)(De, { onClick: n, className: 'button button--primary shadow--lw' }),
                }),
                (0, c.jsx)('hr', {}),
                (0, c.jsx)('div', { className: 'margin-vert--md', children: (0, c.jsx)(Fe, { error: t }) }),
              ],
            }),
          }),
        });
      }
      const ft = { mainWrapper: 'mainWrapper_MB5r' };
      function pt(e) {
        const { children: t, noFooter: n, wrapperClassName: r, title: l, description: s } = e;
        return (
          (0, y.J)(),
          (0, c.jsxs)(ut, {
            children: [
              (0, c.jsx)(i.be, { title: l, description: s }),
              (0, c.jsx)(v, {}),
              (0, c.jsx)(T, {}),
              (0, c.jsx)(Ge, {}),
              (0, c.jsx)('div', {
                id: d,
                className: (0, a.A)(g.G.wrapper.main, ft.mainWrapper, r),
                children: (0, c.jsx)(o.A, { fallback: (e) => (0, c.jsx)(dt, { ...e }), children: t }),
              }),
              !n && (0, c.jsx)(lt, {}),
            ],
          })
        );
      }
    },
    5317: (e) => {
      e.exports = function (e, t, n, r) {
        var a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if ('object' != typeof e || !e || 'object' != typeof t || !t) return !1;
        var o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (var l = Object.prototype.hasOwnProperty.bind(t), s = 0; s < o.length; s++) {
          var u = o[s];
          if (!l(u)) return !1;
          var c = e[u],
            d = t[u];
          if (!1 === (a = n ? n.call(r, c, d, u) : void 0) || (void 0 === a && c !== d)) return !1;
        }
        return !0;
      };
    },
    5443: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => o });
      n(3696);
      const r = { iconExternalLink: 'iconExternalLink_nPrP' };
      var a = n(2540);
      function o(e) {
        let { width: t = 13.5, height: n = 13.5 } = e;
        return (0, a.jsx)('svg', {
          width: t,
          height: n,
          'aria-hidden': 'true',
          viewBox: '0 0 24 24',
          className: r.iconExternalLink,
          children: (0, a.jsx)('path', {
            fill: 'currentColor',
            d: 'M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z',
          }),
        });
      }
    },
    5470: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => i });
      var r = n(3696);
      n(2540);
      const a = r.createContext({ collectAnchor: () => {}, collectLink: () => {} }),
        o = () => (0, r.useContext)(a);
      function i() {
        return o();
      }
    },
    5473: (e, t, n) => {
      'use strict';
      var r = n(3696);
      function a(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
          t += '?args[]=' + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
        }
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      function o() {}
      var i = {
          d: {
            f: o,
            r: function () {
              throw Error(a(522));
            },
            D: o,
            C: o,
            L: o,
            m: o,
            X: o,
            S: o,
            M: o,
          },
          p: 0,
          findDOMNode: null,
        },
        l = Symbol.for('react.portal');
      var s = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function u(e, t) {
        return 'font' === e ? '' : 'string' == typeof t ? ('use-credentials' === t ? t : '') : void 0;
      }
      (t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
        (t.createPortal = function (e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!t || (1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType)) throw Error(a(299));
          return (function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return { $$typeof: l, key: null == r ? null : '' + r, children: e, containerInfo: t, implementation: n };
          })(e, t, null, n);
        }),
        (t.flushSync = function (e) {
          var t = s.T,
            n = i.p;
          try {
            if (((s.T = null), (i.p = 2), e)) return e();
          } finally {
            (s.T = t), (i.p = n), i.d.f();
          }
        }),
        (t.preconnect = function (e, t) {
          'string' == typeof e &&
            (t
              ? (t = 'string' == typeof (t = t.crossOrigin) ? ('use-credentials' === t ? t : '') : void 0)
              : (t = null),
            i.d.C(e, t));
        }),
        (t.prefetchDNS = function (e) {
          'string' == typeof e && i.d.D(e);
        }),
        (t.preinit = function (e, t) {
          if ('string' == typeof e && t && 'string' == typeof t.as) {
            var n = t.as,
              r = u(n, t.crossOrigin),
              a = 'string' == typeof t.integrity ? t.integrity : void 0,
              o = 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0;
            'style' === n
              ? i.d.S(e, 'string' == typeof t.precedence ? t.precedence : void 0, {
                  crossOrigin: r,
                  integrity: a,
                  fetchPriority: o,
                })
              : 'script' === n &&
                i.d.X(e, {
                  crossOrigin: r,
                  integrity: a,
                  fetchPriority: o,
                  nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                });
          }
        }),
        (t.preinitModule = function (e, t) {
          if ('string' == typeof e)
            if ('object' == typeof t && null !== t) {
              if (null == t.as || 'script' === t.as) {
                var n = u(t.as, t.crossOrigin);
                i.d.M(e, {
                  crossOrigin: n,
                  integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
                  nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
                });
              }
            } else null == t && i.d.M(e);
        }),
        (t.preload = function (e, t) {
          if ('string' == typeof e && 'object' == typeof t && null !== t && 'string' == typeof t.as) {
            var n = t.as,
              r = u(n, t.crossOrigin);
            i.d.L(e, n, {
              crossOrigin: r,
              integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
              nonce: 'string' == typeof t.nonce ? t.nonce : void 0,
              type: 'string' == typeof t.type ? t.type : void 0,
              fetchPriority: 'string' == typeof t.fetchPriority ? t.fetchPriority : void 0,
              referrerPolicy: 'string' == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
              imageSrcSet: 'string' == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
              imageSizes: 'string' == typeof t.imageSizes ? t.imageSizes : void 0,
              media: 'string' == typeof t.media ? t.media : void 0,
            });
          }
        }),
        (t.preloadModule = function (e, t) {
          if ('string' == typeof e)
            if (t) {
              var n = u(t.as, t.crossOrigin);
              i.d.m(e, {
                as: 'string' == typeof t.as && 'script' !== t.as ? t.as : void 0,
                crossOrigin: n,
                integrity: 'string' == typeof t.integrity ? t.integrity : void 0,
              });
            } else i.d.m(e);
        }),
        (t.requestFormReset = function (e) {
          i.d.r(e);
        }),
        (t.unstable_batchedUpdates = function (e, t) {
          return e(t);
        }),
        (t.useFormState = function (e, t, n) {
          return s.H.useFormState(e, t, n);
        }),
        (t.useFormStatus = function () {
          return s.H.useHostTransitionStatus();
        }),
        (t.version = '19.0.0');
    },
    5545: (e, t, n) => {
      'use strict';
      n.d(t, { e3: () => p, be: () => d, Jx: () => m });
      var r = n(3696),
        a = n(1750),
        o = n(7943),
        i = n(7441);
      function l() {
        const e = r.useContext(i.o);
        if (!e) throw new Error('Unexpected: no Docusaurus route context found');
        return e;
      }
      var s = n(3254),
        u = n(4669);
      var c = n(2540);
      function d(e) {
        let { title: t, description: n, keywords: r, image: a, children: i } = e;
        const l = (function (e) {
            const { siteConfig: t } = (0, u.A)(),
              { title: n, titleDelimiter: r } = t;
            return e?.trim().length ? `${e.trim()} ${r} ${n}` : n;
          })(t),
          { withBaseUrl: d } = (0, s.hH)(),
          f = a ? d(a, { absolute: !0 }) : void 0;
        return (0, c.jsxs)(o.A, {
          children: [
            t && (0, c.jsx)('title', { children: l }),
            t && (0, c.jsx)('meta', { property: 'og:title', content: l }),
            n && (0, c.jsx)('meta', { name: 'description', content: n }),
            n && (0, c.jsx)('meta', { property: 'og:description', content: n }),
            r && (0, c.jsx)('meta', { name: 'keywords', content: Array.isArray(r) ? r.join(',') : r }),
            f && (0, c.jsx)('meta', { property: 'og:image', content: f }),
            f && (0, c.jsx)('meta', { name: 'twitter:image', content: f }),
            i,
          ],
        });
      }
      const f = r.createContext(void 0);
      function p(e) {
        let { className: t, children: n } = e;
        const i = r.useContext(f),
          l = (0, a.A)(i, t);
        return (0, c.jsxs)(f.Provider, {
          value: l,
          children: [(0, c.jsx)(o.A, { children: (0, c.jsx)('html', { className: l }) }), n],
        });
      }
      function m(e) {
        let { children: t } = e;
        const n = l(),
          r = `plugin-${n.plugin.name.replace(/docusaurus-(?:plugin|theme)-(?:content-)?/gi, '')}`;
        const o = `plugin-id-${n.plugin.id}`;
        return (0, c.jsx)(p, { className: (0, a.A)(r, o), children: t });
      }
    },
    5558: (e, t, n) => {
      const r = n(1069),
        a = n(904),
        o = new Set();
      function i(e) {
        void 0 === e ? (e = Object.keys(r.languages).filter((e) => 'meta' != e)) : Array.isArray(e) || (e = [e]);
        const t = [...o, ...Object.keys(Prism.languages)];
        a(r, e, t).load((e) => {
          if (!(e in r.languages)) return void (i.silent || console.warn('Language does not exist: ' + e));
          const t = './prism-' + e;
          delete n.c[n(1441).resolve(t)], delete Prism.languages[e], n(1441)(t), o.add(e);
        });
      }
      (i.silent = !1), (e.exports = i);
    },
    5968: () => {
      !(function (e) {
        function t(e, t) {
          return '___' + e.toUpperCase() + t + '___';
        }
        Object.defineProperties((e.languages['markup-templating'] = {}), {
          buildPlaceholders: {
            value: function (n, r, a, o) {
              if (n.language === r) {
                var i = (n.tokenStack = []);
                (n.code = n.code.replace(a, function (e) {
                  if ('function' == typeof o && !o(e)) return e;
                  for (var a, l = i.length; -1 !== n.code.indexOf((a = t(r, l))); ) ++l;
                  return (i[l] = e), a;
                })),
                  (n.grammar = e.languages.markup);
              }
            },
          },
          tokenizePlaceholders: {
            value: function (n, r) {
              if (n.language === r && n.tokenStack) {
                n.grammar = e.languages[r];
                var a = 0,
                  o = Object.keys(n.tokenStack);
                !(function i(l) {
                  for (var s = 0; s < l.length && !(a >= o.length); s++) {
                    var u = l[s];
                    if ('string' == typeof u || (u.content && 'string' == typeof u.content)) {
                      var c = o[a],
                        d = n.tokenStack[c],
                        f = 'string' == typeof u ? u : u.content,
                        p = t(r, c),
                        m = f.indexOf(p);
                      if (m > -1) {
                        ++a;
                        var h = f.substring(0, m),
                          g = new e.Token(r, e.tokenize(d, n.grammar), 'language-' + r, d),
                          y = f.substring(m + p.length),
                          b = [];
                        h && b.push.apply(b, i([h])),
                          b.push(g),
                          y && b.push.apply(b, i([y])),
                          'string' == typeof u ? l.splice.apply(l, [s, 1].concat(b)) : (u.content = b);
                      }
                    } else u.content && i(u.content);
                  }
                  return l;
                })(n.tokens);
              }
            },
          },
        });
      })(Prism);
    },
    6009: (e, t, n) => {
      'use strict';
      n.d(t, { GX: () => u, YL: () => s, y_: () => l });
      var r = n(3696),
        a = n(8225),
        o = n(2540);
      const i = r.createContext(null);
      function l(e) {
        let { children: t } = e;
        const n = (0, r.useState)({ component: null, props: null });
        return (0, o.jsx)(i.Provider, { value: n, children: t });
      }
      function s() {
        const e = (0, r.useContext)(i);
        if (!e) throw new a.dV('NavbarSecondaryMenuContentProvider');
        return e[0];
      }
      function u(e) {
        let { component: t, props: n } = e;
        const o = (0, r.useContext)(i);
        if (!o) throw new a.dV('NavbarSecondaryMenuContentProvider');
        const [, l] = o,
          s = (0, a.Be)(n);
        return (
          (0, r.useEffect)(() => {
            l({ component: t, props: s });
          }, [l, t, s]),
          (0, r.useEffect)(() => () => l({ component: null, props: null }), [l]),
          null
        );
      }
    },
    6143: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => o });
      var r = !0,
        a = 'Invariant failed';
      function o(e, t) {
        if (!e) {
          if (r) throw new Error(a);
          var n = 'function' == typeof t ? t() : t,
            o = n ? ''.concat(a, ': ').concat(n) : a;
          throw new Error(o);
        }
      }
    },
    6441: (e) => {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    6489: (e, t, n) => {
      'use strict';
      n.d(t, { o: () => d, l: () => f });
      var r = n(3696),
        a = n(4784);
      const o = JSON.parse(
          '{"docusaurus-plugin-content-docs":{"default":{"path":"/codora/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/codora/docs","mainDocId":"installation","docs":[{"id":"installation","path":"/codora/docs/installation","sidebar":"tutorialSidebar"}],"draftIds":[],"sidebars":{"tutorialSidebar":{"link":{"path":"/codora/docs/installation","label":"installation"}}}}],"breadcrumbs":true}}}'
        ),
        i = JSON.parse(
          '{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"}}}'
        );
      var l = n(2654);
      const s = JSON.parse(
        '{"docusaurusVersion":"3.7.0","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"3.7.0"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"3.7.0"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"3.7.0"},"docusaurus-plugin-svgr":{"type":"package","name":"@docusaurus/plugin-svgr","version":"3.7.0"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"3.7.0"}}}'
      );
      var u = n(2540);
      const c = { siteConfig: a.default, siteMetadata: s, globalData: o, i18n: i, codeTranslations: l },
        d = r.createContext(c);
      function f(e) {
        let { children: t } = e;
        return (0, u.jsx)(d.Provider, { value: c, children: t });
      }
    },
    6658: (e, t, n) => {
      'use strict';
      n.d(t, { n: () => l, r: () => s });
      var r = n(3696),
        a = n(8225),
        o = n(2540);
      const i = r.createContext(null);
      function l(e) {
        let { children: t, version: n } = e;
        return (0, o.jsx)(i.Provider, { value: n, children: t });
      }
      function s() {
        const e = (0, r.useContext)(i);
        if (null === e) throw new a.dV('DocsVersionProvider');
        return e;
      }
    },
    6782: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => c });
      n(3696);
      var r = n(9985),
        a = n(3254),
        o = n(4669),
        i = n(2427),
        l = n(8460),
        s = n(2540);
      function u(e) {
        let { logo: t, alt: n, imageClassName: r } = e;
        const o = { light: (0, a.Ay)(t.src), dark: (0, a.Ay)(t.srcDark || t.src) },
          i = (0, s.jsx)(l.A, {
            className: t.className,
            sources: o,
            height: t.height,
            width: t.width,
            alt: n,
            style: t.style,
          });
        return r ? (0, s.jsx)('div', { className: r, children: i }) : i;
      }
      function c(e) {
        const {
            siteConfig: { title: t },
          } = (0, o.A)(),
          {
            navbar: { title: n, logo: l },
          } = (0, i.p)(),
          { imageClassName: c, titleClassName: d, ...f } = e,
          p = (0, a.Ay)(l?.href || '/'),
          m = n ? '' : t,
          h = l?.alt ?? m;
        return (0, s.jsxs)(r.A, {
          to: p,
          ...f,
          ...(l?.target && { target: l.target }),
          children: [
            l && (0, s.jsx)(u, { logo: l, alt: h, imageClassName: c }),
            null != n && (0, s.jsx)('b', { className: d, children: n }),
          ],
        });
      }
    },
    6941: (e, t, n) => {
      'use strict';
      n.d(t, { zR: () => w, TM: () => C, yJ: () => p, sC: () => T, AO: () => f });
      var r = n(8102);
      function a(e) {
        return '/' === e.charAt(0);
      }
      function o(e, t) {
        for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1) e[n] = e[r];
        e.pop();
      }
      const i = function (e, t) {
        void 0 === t && (t = '');
        var n,
          r = (e && e.split('/')) || [],
          i = (t && t.split('/')) || [],
          l = e && a(e),
          s = t && a(t),
          u = l || s;
        if ((e && a(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))), !i.length)) return '/';
        if (i.length) {
          var c = i[i.length - 1];
          n = '.' === c || '..' === c || '' === c;
        } else n = !1;
        for (var d = 0, f = i.length; f >= 0; f--) {
          var p = i[f];
          '.' === p ? o(i, f) : '..' === p ? (o(i, f), d++) : d && (o(i, f), d--);
        }
        if (!u) for (; d--; d) i.unshift('..');
        !u || '' === i[0] || (i[0] && a(i[0])) || i.unshift('');
        var m = i.join('/');
        return n && '/' !== m.substr(-1) && (m += '/'), m;
      };
      var l = n(6143);
      function s(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function u(e) {
        return '/' === e.charAt(0) ? e.substr(1) : e;
      }
      function c(e, t) {
        return (function (e, t) {
          return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== '/?#'.indexOf(e.charAt(t.length));
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function d(e) {
        return '/' === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function f(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || '/';
        return (
          n && '?' !== n && (a += '?' === n.charAt(0) ? n : '?' + n),
          r && '#' !== r && (a += '#' === r.charAt(0) ? r : '#' + r),
          a
        );
      }
      function p(e, t, n, a) {
        var o;
        'string' == typeof e
          ? ((o = (function (e) {
              var t = e || '/',
                n = '',
                r = '',
                a = t.indexOf('#');
              -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
              var o = t.indexOf('?');
              return (
                -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
                { pathname: t, search: '?' === n ? '' : n, hash: '#' === r ? '' : r }
              );
            })(e)),
            (o.state = t))
          : (void 0 === (o = (0, r.A)({}, e)).pathname && (o.pathname = ''),
            o.search ? '?' !== o.search.charAt(0) && (o.search = '?' + o.search) : (o.search = ''),
            o.hash ? '#' !== o.hash.charAt(0) && (o.hash = '#' + o.hash) : (o.hash = ''),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (o.key = n),
          a
            ? o.pathname
              ? '/' !== o.pathname.charAt(0) && (o.pathname = i(o.pathname, a.pathname))
              : (o.pathname = a.pathname)
            : o.pathname || (o.pathname = '/'),
          o
        );
      }
      function m() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (null != e) {
              var o = 'function' == typeof e ? e(t, n) : e;
              'string' == typeof o ? ('function' == typeof r ? r(o, a) : a(!0)) : a(!1 !== o);
            } else a(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var h = !('undefined' == typeof window || !window.document || !window.document.createElement);
      function g(e, t) {
        t(window.confirm(e));
      }
      var y = 'popstate',
        b = 'hashchange';
      function v() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function w(e) {
        void 0 === e && (e = {}), h || (0, l.A)(!1);
        var t,
          n = window.history,
          a =
            ((-1 === (t = window.navigator.userAgent).indexOf('Android 2.') && -1 === t.indexOf('Android 4.0')) ||
              -1 === t.indexOf('Mobile Safari') ||
              -1 !== t.indexOf('Chrome') ||
              -1 !== t.indexOf('Windows Phone')) &&
            window.history &&
            'pushState' in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf('Trident')),
          i = e,
          u = i.forceRefresh,
          w = void 0 !== u && u,
          k = i.getUserConfirmation,
          S = void 0 === k ? g : k,
          x = i.keyLength,
          E = void 0 === x ? 6 : x,
          _ = e.basename ? d(s(e.basename)) : '';
        function C(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            o = a.pathname + a.search + a.hash;
          return _ && (o = c(o, _)), p(o, r, n);
        }
        function A() {
          return Math.random().toString(36).substr(2, E);
        }
        var T = m();
        function j(e) {
          (0, r.A)($, e), ($.length = n.length), T.notifyListeners($.location, $.action);
        }
        function P(e) {
          (function (e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf('CriOS');
          })(e) || L(C(e.state));
        }
        function N() {
          L(C(v()));
        }
        var O = !1;
        function L(e) {
          if (O) (O = !1), j();
          else {
            T.confirmTransitionTo(e, 'POP', S, function (t) {
              t
                ? j({ action: 'POP', location: e })
                : (function (e) {
                    var t = $.location,
                      n = D.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = D.indexOf(e.key);
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((O = !0), I(a));
                  })(e);
            });
          }
        }
        var R = C(v()),
          D = [R.key];
        function F(e) {
          return _ + f(e);
        }
        function I(e) {
          n.go(e);
        }
        var M = 0;
        function z(e) {
          1 === (M += e) && 1 === e
            ? (window.addEventListener(y, P), o && window.addEventListener(b, N))
            : 0 === M && (window.removeEventListener(y, P), o && window.removeEventListener(b, N));
        }
        var B = !1;
        var $ = {
          length: n.length,
          action: 'POP',
          location: R,
          createHref: F,
          push: function (e, t) {
            var r = 'PUSH',
              o = p(e, t, A(), $.location);
            T.confirmTransitionTo(o, r, S, function (e) {
              if (e) {
                var t = F(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.pushState({ key: i, state: l }, null, t), w)) window.location.href = t;
                  else {
                    var s = D.indexOf($.location.key),
                      u = D.slice(0, s + 1);
                    u.push(o.key), (D = u), j({ action: r, location: o });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = 'REPLACE',
              o = p(e, t, A(), $.location);
            T.confirmTransitionTo(o, r, S, function (e) {
              if (e) {
                var t = F(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.replaceState({ key: i, state: l }, null, t), w)) window.location.replace(t);
                  else {
                    var s = D.indexOf($.location.key);
                    -1 !== s && (D[s] = o.key), j({ action: r, location: o });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: I,
          goBack: function () {
            I(-1);
          },
          goForward: function () {
            I(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = T.setPrompt(e);
            return (
              B || (z(1), (B = !0)),
              function () {
                return B && ((B = !1), z(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = T.appendListener(e);
            return (
              z(1),
              function () {
                z(-1), t();
              }
            );
          },
        };
        return $;
      }
      var k = 'hashchange',
        S = {
          hashbang: {
            encodePath: function (e) {
              return '!' === e.charAt(0) ? e : '!/' + u(e);
            },
            decodePath: function (e) {
              return '!' === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: u, decodePath: s },
          slash: { encodePath: s, decodePath: s },
        };
      function x(e) {
        var t = e.indexOf('#');
        return -1 === t ? e : e.slice(0, t);
      }
      function E() {
        var e = window.location.href,
          t = e.indexOf('#');
        return -1 === t ? '' : e.substring(t + 1);
      }
      function _(e) {
        window.location.replace(x(window.location.href) + '#' + e);
      }
      function C(e) {
        void 0 === e && (e = {}), h || (0, l.A)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf('Firefox'), e),
          a = n.getUserConfirmation,
          o = void 0 === a ? g : a,
          i = n.hashType,
          u = void 0 === i ? 'slash' : i,
          y = e.basename ? d(s(e.basename)) : '',
          b = S[u],
          v = b.encodePath,
          w = b.decodePath;
        function C() {
          var e = w(E());
          return y && (e = c(e, y)), p(e);
        }
        var A = m();
        function T(e) {
          (0, r.A)(B, e), (B.length = t.length), A.notifyListeners(B.location, B.action);
        }
        var j = !1,
          P = null;
        function N() {
          var e,
            t,
            n = E(),
            r = v(n);
          if (n !== r) _(r);
          else {
            var a = C(),
              i = B.location;
            if (!j && ((t = a), (e = i).pathname === t.pathname && e.search === t.search && e.hash === t.hash)) return;
            if (P === f(a)) return;
            (P = null),
              (function (e) {
                if (j) (j = !1), T();
                else {
                  var t = 'POP';
                  A.confirmTransitionTo(e, t, o, function (n) {
                    n
                      ? T({ action: t, location: e })
                      : (function (e) {
                          var t = B.location,
                            n = D.lastIndexOf(f(t));
                          -1 === n && (n = 0);
                          var r = D.lastIndexOf(f(e));
                          -1 === r && (r = 0);
                          var a = n - r;
                          a && ((j = !0), F(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        var O = E(),
          L = v(O);
        O !== L && _(L);
        var R = C(),
          D = [f(R)];
        function F(e) {
          t.go(e);
        }
        var I = 0;
        function M(e) {
          1 === (I += e) && 1 === e ? window.addEventListener(k, N) : 0 === I && window.removeEventListener(k, N);
        }
        var z = !1;
        var B = {
          length: t.length,
          action: 'POP',
          location: R,
          createHref: function (e) {
            var t = document.querySelector('base'),
              n = '';
            return t && t.getAttribute('href') && (n = x(window.location.href)), n + '#' + v(y + f(e));
          },
          push: function (e, t) {
            var n = 'PUSH',
              r = p(e, void 0, void 0, B.location);
            A.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = f(r),
                  a = v(y + t);
                if (E() !== a) {
                  (P = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  var o = D.lastIndexOf(f(B.location)),
                    i = D.slice(0, o + 1);
                  i.push(t), (D = i), T({ action: n, location: r });
                } else T();
              }
            });
          },
          replace: function (e, t) {
            var n = 'REPLACE',
              r = p(e, void 0, void 0, B.location);
            A.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = f(r),
                  a = v(y + t);
                E() !== a && ((P = t), _(a));
                var o = D.indexOf(f(B.location));
                -1 !== o && (D[o] = t), T({ action: n, location: r });
              }
            });
          },
          go: F,
          goBack: function () {
            F(-1);
          },
          goForward: function () {
            F(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = A.setPrompt(e);
            return (
              z || (M(1), (z = !0)),
              function () {
                return z && ((z = !1), M(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = A.appendListener(e);
            return (
              M(1),
              function () {
                M(-1), t();
              }
            );
          },
        };
        return B;
      }
      function A(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function T(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          o = void 0 === a ? ['/'] : a,
          i = t.initialIndex,
          l = void 0 === i ? 0 : i,
          s = t.keyLength,
          u = void 0 === s ? 6 : s,
          c = m();
        function d(e) {
          (0, r.A)(w, e), (w.length = w.entries.length), c.notifyListeners(w.location, w.action);
        }
        function h() {
          return Math.random().toString(36).substr(2, u);
        }
        var g = A(l, 0, o.length - 1),
          y = o.map(function (e) {
            return p(e, void 0, 'string' == typeof e ? h() : e.key || h());
          }),
          b = f;
        function v(e) {
          var t = A(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          c.confirmTransitionTo(r, 'POP', n, function (e) {
            e ? d({ action: 'POP', location: r, index: t }) : d();
          });
        }
        var w = {
          length: y.length,
          action: 'POP',
          location: y[g],
          index: g,
          entries: y,
          createHref: b,
          push: function (e, t) {
            var r = 'PUSH',
              a = p(e, t, h(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                var t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  d({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = 'REPLACE',
              a = p(e, t, h(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((w.entries[w.index] = a), d({ action: r, location: a }));
            });
          },
          go: v,
          goBack: function () {
            v(-1);
          },
          goForward: function () {
            v(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return w;
      }
    },
    7268: (e, t, n) => {
      'use strict';
      n.d(t, { M: () => h, o: () => m });
      var r = n(3696),
        a = n(5200),
        o = n(3540),
        i = n(8225),
        l = n(2427),
        s = n(2540);
      const u = (0, o.Wf)('docusaurus.announcement.dismiss'),
        c = (0, o.Wf)('docusaurus.announcement.id'),
        d = () => 'true' === u.get(),
        f = (e) => u.set(String(e)),
        p = r.createContext(null);
      function m(e) {
        let { children: t } = e;
        const n = (function () {
          const { announcementBar: e } = (0, l.p)(),
            t = (0, a.A)(),
            [n, o] = (0, r.useState)(() => !!t && d());
          (0, r.useEffect)(() => {
            o(d());
          }, []);
          const i = (0, r.useCallback)(() => {
            f(!0), o(!0);
          }, []);
          return (
            (0, r.useEffect)(() => {
              if (!e) return;
              const { id: t } = e;
              let n = c.get();
              'annoucement-bar' === n && (n = 'announcement-bar');
              const r = t !== n;
              c.set(t), r && f(!1), (!r && d()) || o(!1);
            }, [e]),
            (0, r.useMemo)(() => ({ isActive: !!e && !n, close: i }), [e, n, i])
          );
        })();
        return (0, s.jsx)(p.Provider, { value: n, children: t });
      }
      function h() {
        const e = (0, r.useContext)(p);
        if (!e) throw new i.dV('AnnouncementBarProvider');
        return e;
      }
    },
    7303: (e, t, n) => {
      'use strict';
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
      }
      function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      var l = n(3696),
        s = [],
        u = [];
      var c = l.createContext(null);
      function d(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function f(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var a = d(e[r]);
            a.loading ? (t.loading = !0) : ((t.loaded[r] = a.loaded), (t.error = a.error)),
              n.push(a.promise),
              a.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function p(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n;
      }
      function m(e, t) {
        var d, f;
        if (!t.loading) throw new Error('react-loadable requires a `loading` component');
        var m = i(
            { loader: null, loading: null, delay: 200, timeout: null, render: p, webpack: null, modules: null },
            t
          ),
          h = null;
        function g() {
          return h || (h = e(m.loader)), h.promise;
        }
        return (
          s.push(g),
          'function' == typeof m.webpack &&
            u.push(function () {
              if (
                (0, m.webpack)().every(function (e) {
                  return void 0 !== e && void 0 !== n.m[e];
                })
              )
                return g();
            }),
          (f = d =
            (function (t) {
              function n(n) {
                var r;
                return (
                  o(a(a((r = t.call(this, n) || this))), 'retry', function () {
                    r.setState({ error: null, loading: !0, timedOut: !1 }), (h = e(m.loader)), r._loadModule();
                  }),
                  g(),
                  (r.state = { error: h.error, pastDelay: !1, timedOut: !1, loading: h.loading, loaded: h.loaded }),
                  r
                );
              }
              r(n, t),
                (n.preload = function () {
                  return g();
                });
              var i = n.prototype;
              return (
                (i.UNSAFE_componentWillMount = function () {
                  this._loadModule();
                }),
                (i.componentDidMount = function () {
                  this._mounted = !0;
                }),
                (i._loadModule = function () {
                  var e = this;
                  if (
                    (this.context &&
                      Array.isArray(m.modules) &&
                      m.modules.forEach(function (t) {
                        e.context.report(t);
                      }),
                    h.loading)
                  ) {
                    var t = function (t) {
                      e._mounted && e.setState(t);
                    };
                    'number' == typeof m.delay &&
                      (0 === m.delay
                        ? this.setState({ pastDelay: !0 })
                        : (this._delay = setTimeout(function () {
                            t({ pastDelay: !0 });
                          }, m.delay))),
                      'number' == typeof m.timeout &&
                        (this._timeout = setTimeout(function () {
                          t({ timedOut: !0 });
                        }, m.timeout));
                    var n = function () {
                      t({ error: h.error, loaded: h.loaded, loading: h.loading }), e._clearTimeouts();
                    };
                    h.promise
                      .then(function () {
                        return n(), null;
                      })
                      .catch(function (e) {
                        return n(), null;
                      });
                  }
                }),
                (i.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (i._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (i.render = function () {
                  return this.state.loading || this.state.error
                    ? l.createElement(m.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                        retry: this.retry,
                      })
                    : this.state.loaded
                    ? m.render(this.state.loaded, this.props)
                    : null;
                }),
                n
              );
            })(l.Component)),
          o(d, 'contextType', c),
          f
        );
      }
      function h(e) {
        return m(d, e);
      }
      h.Map = function (e) {
        if ('function' != typeof e.render) throw new Error('LoadableMap requires a `render(loaded, props)` function');
        return m(f, e);
      };
      var g = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          r(t, e),
          (t.prototype.render = function () {
            return l.createElement(
              c.Provider,
              { value: { report: this.props.report } },
              l.Children.only(this.props.children)
            );
          }),
          t
        );
      })(l.Component);
      function y(e) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return y(e);
        });
      }
      (h.Capture = g),
        (h.preloadAll = function () {
          return new Promise(function (e, t) {
            y(s).then(e, t);
          });
        }),
        (h.preloadReady = function () {
          return new Promise(function (e, t) {
            y(u).then(e, e);
          });
        }),
        (e.exports = h);
    },
    7367: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => c });
      n(3696);
      var r = n(1750),
        a = n(7963),
        o = n(2427),
        i = n(9985),
        l = n(5470);
      const s = {
        anchorWithStickyNavbar: 'anchorWithStickyNavbar_JmGV',
        anchorWithHideOnScrollNavbar: 'anchorWithHideOnScrollNavbar_pMLv',
      };
      var u = n(2540);
      function c(e) {
        let { as: t, id: n, ...c } = e;
        const d = (0, l.A)(),
          {
            navbar: { hideOnScroll: f },
          } = (0, o.p)();
        if ('h1' === t || !n) return (0, u.jsx)(t, { ...c, id: void 0 });
        d.collectAnchor(n);
        const p = (0, a.T)(
          {
            id: 'theme.common.headingLinkTitle',
            message: 'Direct link to {heading}',
            description: 'Title for link to heading',
          },
          { heading: 'string' == typeof c.children ? c.children : n }
        );
        return (0, u.jsxs)(t, {
          ...c,
          className: (0, r.A)('anchor', f ? s.anchorWithHideOnScrollNavbar : s.anchorWithStickyNavbar, c.className),
          id: n,
          children: [
            c.children,
            (0, u.jsx)(i.A, { className: 'hash-link', to: `#${n}`, 'aria-label': p, title: p, children: '\u200b' }),
          ],
        });
      }
    },
    7383: (e) => {
      var t = 'undefined' != typeof Element,
        n = 'function' == typeof Map,
        r = 'function' == typeof Set,
        a = 'function' == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function o(e, i) {
        if (e === i) return !0;
        if (e && i && 'object' == typeof e && 'object' == typeof i) {
          if (e.constructor !== i.constructor) return !1;
          var l, s, u, c;
          if (Array.isArray(e)) {
            if ((l = e.length) != i.length) return !1;
            for (s = l; 0 != s--; ) if (!o(e[s], i[s])) return !1;
            return !0;
          }
          if (n && e instanceof Map && i instanceof Map) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(s = c.next()).done; ) if (!i.has(s.value[0])) return !1;
            for (c = e.entries(); !(s = c.next()).done; ) if (!o(s.value[1], i.get(s.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && i instanceof Set) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(s = c.next()).done; ) if (!i.has(s.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
            if ((l = e.length) != i.length) return !1;
            for (s = l; 0 != s--; ) if (e[s] !== i[s]) return !1;
            return !0;
          }
          if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
          if (
            e.valueOf !== Object.prototype.valueOf &&
            'function' == typeof e.valueOf &&
            'function' == typeof i.valueOf
          )
            return e.valueOf() === i.valueOf();
          if (
            e.toString !== Object.prototype.toString &&
            'function' == typeof e.toString &&
            'function' == typeof i.toString
          )
            return e.toString() === i.toString();
          if ((l = (u = Object.keys(e)).length) !== Object.keys(i).length) return !1;
          for (s = l; 0 != s--; ) if (!Object.prototype.hasOwnProperty.call(i, u[s])) return !1;
          if (t && e instanceof Element) return !1;
          for (s = l; 0 != s--; )
            if ((('_owner' !== u[s] && '__v' !== u[s] && '__o' !== u[s]) || !e.$$typeof) && !o(e[u[s]], i[u[s]]))
              return !1;
          return !0;
        }
        return e != e && i != i;
      }
      e.exports = function (e, t) {
        try {
          return o(e, t);
        } catch (n) {
          if ((n.message || '').match(/stack|recursion/i))
            return console.warn('react-fast-compare cannot handle circular refs'), !1;
          throw n;
        }
      };
    },
    7388: (e, t, n) => {
      'use strict';
      n.r(t);
    },
    7404: (e, t, n) => {
      'use strict';
      n.d(t, { G: () => r });
      const r = {
        page: {
          blogListPage: 'blog-list-page',
          blogPostPage: 'blog-post-page',
          blogTagsListPage: 'blog-tags-list-page',
          blogTagPostListPage: 'blog-tags-post-list-page',
          blogAuthorsListPage: 'blog-authors-list-page',
          blogAuthorsPostsPage: 'blog-authors-posts-page',
          docsDocPage: 'docs-doc-page',
          docsTagsListPage: 'docs-tags-list-page',
          docsTagDocListPage: 'docs-tags-doc-list-page',
          mdxPage: 'mdx-page',
        },
        wrapper: {
          main: 'main-wrapper',
          blogPages: 'blog-wrapper',
          docsPages: 'docs-wrapper',
          mdxPages: 'mdx-wrapper',
        },
        common: {
          editThisPage: 'theme-edit-this-page',
          lastUpdated: 'theme-last-updated',
          backToTopButton: 'theme-back-to-top-button',
          codeBlock: 'theme-code-block',
          admonition: 'theme-admonition',
          unlistedBanner: 'theme-unlisted-banner',
          draftBanner: 'theme-draft-banner',
          admonitionType: (e) => `theme-admonition-${e}`,
        },
        layout: {},
        docs: {
          docVersionBanner: 'theme-doc-version-banner',
          docVersionBadge: 'theme-doc-version-badge',
          docBreadcrumbs: 'theme-doc-breadcrumbs',
          docMarkdown: 'theme-doc-markdown',
          docTocMobile: 'theme-doc-toc-mobile',
          docTocDesktop: 'theme-doc-toc-desktop',
          docFooter: 'theme-doc-footer',
          docFooterTagsRow: 'theme-doc-footer-tags-row',
          docFooterEditMetaRow: 'theme-doc-footer-edit-meta-row',
          docSidebarContainer: 'theme-doc-sidebar-container',
          docSidebarMenu: 'theme-doc-sidebar-menu',
          docSidebarItemCategory: 'theme-doc-sidebar-item-category',
          docSidebarItemLink: 'theme-doc-sidebar-item-link',
          docSidebarItemCategoryLevel: (e) => `theme-doc-sidebar-item-category-level-${e}`,
          docSidebarItemLinkLevel: (e) => `theme-doc-sidebar-item-link-level-${e}`,
        },
        blog: {
          blogFooterTagsRow: 'theme-blog-footer-tags-row',
          blogFooterEditMetaRow: 'theme-blog-footer-edit-meta-row',
        },
        pages: { pageFooterEditMetaRow: 'theme-pages-footer-edit-meta-row' },
      };
    },
    7441: (e, t, n) => {
      'use strict';
      n.d(t, { W: () => i, o: () => o });
      var r = n(3696),
        a = n(2540);
      const o = r.createContext(null);
      function i(e) {
        let { children: t, value: n } = e;
        const i = r.useContext(o),
          l = (0, r.useMemo)(
            () =>
              (function (e) {
                let { parent: t, value: n } = e;
                if (!t) {
                  if (!n) throw new Error('Unexpected: no Docusaurus route context found');
                  if (!('plugin' in n))
                    throw new Error('Unexpected: Docusaurus topmost route context has no `plugin` attribute');
                  return n;
                }
                const r = { ...t.data, ...n?.data };
                return { plugin: t.plugin, data: r };
              })({ parent: i, value: n }),
            [i, n]
          );
        return (0, a.jsx)(o.Provider, { value: l, children: t });
      }
    },
    7470: (e, t, n) => {
      'use strict';
      !(function e() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(8131));
    },
    7663: (e, t, n) => {
      'use strict';
      n.d(t, { My: () => A, f4: () => ne });
      var r,
        a,
        o,
        i,
        l,
        s,
        u,
        c = n(3696),
        d = n(1750),
        f = Object.create,
        p = Object.defineProperty,
        m = Object.defineProperties,
        h = Object.getOwnPropertyDescriptor,
        g = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertyNames,
        b = Object.getOwnPropertySymbols,
        v = Object.getPrototypeOf,
        w = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        S = (e, t, n) => (t in e ? p(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
        x = (e, t) => {
          for (var n in t || (t = {})) w.call(t, n) && S(e, n, t[n]);
          if (b) for (var n of b(t)) k.call(t, n) && S(e, n, t[n]);
          return e;
        },
        E = (e, t) => m(e, g(t)),
        _ = (e, t) => {
          var n = {};
          for (var r in e) w.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
          if (null != e && b) for (var r of b(e)) t.indexOf(r) < 0 && k.call(e, r) && (n[r] = e[r]);
          return n;
        },
        C =
          ((r = {
            '../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js'(
              e,
              t
            ) {
              var n = (function () {
                var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
                  t = 0,
                  n = {},
                  r = {
                    util: {
                      encode: function e(t) {
                        return t instanceof a
                          ? new a(t.type, e(t.content), t.alias)
                          : Array.isArray(t)
                          ? t.map(e)
                          : t
                              .replace(/&/g, '&amp;')
                              .replace(/</g, '&lt;')
                              .replace(/\u00a0/g, ' ');
                      },
                      type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1);
                      },
                      objId: function (e) {
                        return e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id;
                      },
                      clone: function e(t, n) {
                        var a, o;
                        switch (((n = n || {}), r.util.type(t))) {
                          case 'Object':
                            if (((o = r.util.objId(t)), n[o])) return n[o];
                            for (var i in ((a = {}), (n[o] = a), t)) t.hasOwnProperty(i) && (a[i] = e(t[i], n));
                            return a;
                          case 'Array':
                            return (
                              (o = r.util.objId(t)),
                              n[o]
                                ? n[o]
                                : ((a = []),
                                  (n[o] = a),
                                  t.forEach(function (t, r) {
                                    a[r] = e(t, n);
                                  }),
                                  a)
                            );
                          default:
                            return t;
                        }
                      },
                      getLanguage: function (t) {
                        for (; t; ) {
                          var n = e.exec(t.className);
                          if (n) return n[1].toLowerCase();
                          t = t.parentElement;
                        }
                        return 'none';
                      },
                      setLanguage: function (t, n) {
                        (t.className = t.className.replace(RegExp(e, 'gi'), '')), t.classList.add('language-' + n);
                      },
                      isActive: function (e, t, n) {
                        for (var r = 'no-' + t; e; ) {
                          var a = e.classList;
                          if (a.contains(t)) return !0;
                          if (a.contains(r)) return !1;
                          e = e.parentElement;
                        }
                        return !!n;
                      },
                    },
                    languages: {
                      plain: n,
                      plaintext: n,
                      text: n,
                      txt: n,
                      extend: function (e, t) {
                        var n = r.util.clone(r.languages[e]);
                        for (var a in t) n[a] = t[a];
                        return n;
                      },
                      insertBefore: function (e, t, n, a) {
                        var o = (a = a || r.languages)[e],
                          i = {};
                        for (var l in o)
                          if (o.hasOwnProperty(l)) {
                            if (l == t) for (var s in n) n.hasOwnProperty(s) && (i[s] = n[s]);
                            n.hasOwnProperty(l) || (i[l] = o[l]);
                          }
                        var u = a[e];
                        return (
                          (a[e] = i),
                          r.languages.DFS(r.languages, function (t, n) {
                            n === u && t != e && (this[t] = i);
                          }),
                          i
                        );
                      },
                      DFS: function e(t, n, a, o) {
                        o = o || {};
                        var i = r.util.objId;
                        for (var l in t)
                          if (t.hasOwnProperty(l)) {
                            n.call(t, l, t[l], a || l);
                            var s = t[l],
                              u = r.util.type(s);
                            'Object' !== u || o[i(s)]
                              ? 'Array' !== u || o[i(s)] || ((o[i(s)] = !0), e(s, n, l, o))
                              : ((o[i(s)] = !0), e(s, n, null, o));
                          }
                      },
                    },
                    plugins: {},
                    highlight: function (e, t, n) {
                      var o = { code: e, grammar: t, language: n };
                      if ((r.hooks.run('before-tokenize', o), !o.grammar))
                        throw new Error('The language "' + o.language + '" has no grammar.');
                      return (
                        (o.tokens = r.tokenize(o.code, o.grammar)),
                        r.hooks.run('after-tokenize', o),
                        a.stringify(r.util.encode(o.tokens), o.language)
                      );
                    },
                    tokenize: function (e, t) {
                      var n = t.rest;
                      if (n) {
                        for (var r in n) t[r] = n[r];
                        delete t.rest;
                      }
                      var a = new l();
                      return (
                        s(a, a.head, e),
                        i(e, a, t, a.head, 0),
                        (function (e) {
                          for (var t = [], n = e.head.next; n !== e.tail; ) t.push(n.value), (n = n.next);
                          return t;
                        })(a)
                      );
                    },
                    hooks: {
                      all: {},
                      add: function (e, t) {
                        var n = r.hooks.all;
                        (n[e] = n[e] || []), n[e].push(t);
                      },
                      run: function (e, t) {
                        var n = r.hooks.all[e];
                        if (n && n.length) for (var a, o = 0; (a = n[o++]); ) a(t);
                      },
                    },
                    Token: a,
                  };
                function a(e, t, n, r) {
                  (this.type = e), (this.content = t), (this.alias = n), (this.length = 0 | (r || '').length);
                }
                function o(e, t, n, r) {
                  e.lastIndex = t;
                  var a = e.exec(n);
                  if (a && r && a[1]) {
                    var o = a[1].length;
                    (a.index += o), (a[0] = a[0].slice(o));
                  }
                  return a;
                }
                function i(e, t, n, l, c, d) {
                  for (var f in n)
                    if (n.hasOwnProperty(f) && n[f]) {
                      var p = n[f];
                      p = Array.isArray(p) ? p : [p];
                      for (var m = 0; m < p.length; ++m) {
                        if (d && d.cause == f + ',' + m) return;
                        var h = p[m],
                          g = h.inside,
                          y = !!h.lookbehind,
                          b = !!h.greedy,
                          v = h.alias;
                        if (b && !h.pattern.global) {
                          var w = h.pattern.toString().match(/[imsuy]*$/)[0];
                          h.pattern = RegExp(h.pattern.source, w + 'g');
                        }
                        for (
                          var k = h.pattern || h, S = l.next, x = c;
                          S !== t.tail && !(d && x >= d.reach);
                          x += S.value.length, S = S.next
                        ) {
                          var E = S.value;
                          if (t.length > e.length) return;
                          if (!(E instanceof a)) {
                            var _,
                              C = 1;
                            if (b) {
                              if (!(_ = o(k, x, e, y)) || _.index >= e.length) break;
                              var A = _.index,
                                T = _.index + _[0].length,
                                j = x;
                              for (j += S.value.length; A >= j; ) j += (S = S.next).value.length;
                              if (((x = j -= S.value.length), S.value instanceof a)) continue;
                              for (var P = S; P !== t.tail && (j < T || 'string' == typeof P.value); P = P.next)
                                C++, (j += P.value.length);
                              C--, (E = e.slice(x, j)), (_.index -= x);
                            } else if (!(_ = o(k, 0, E, y))) continue;
                            A = _.index;
                            var N = _[0],
                              O = E.slice(0, A),
                              L = E.slice(A + N.length),
                              R = x + E.length;
                            d && R > d.reach && (d.reach = R);
                            var D = S.prev;
                            if (
                              (O && ((D = s(t, D, O)), (x += O.length)),
                              u(t, D, C),
                              (S = s(t, D, new a(f, g ? r.tokenize(N, g) : N, v, N))),
                              L && s(t, S, L),
                              C > 1)
                            ) {
                              var F = { cause: f + ',' + m, reach: R };
                              i(e, t, n, S.prev, x, F), d && F.reach > d.reach && (d.reach = F.reach);
                            }
                          }
                        }
                      }
                    }
                }
                function l() {
                  var e = { value: null, prev: null, next: null },
                    t = { value: null, prev: e, next: null };
                  (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
                }
                function s(e, t, n) {
                  var r = t.next,
                    a = { value: n, prev: t, next: r };
                  return (t.next = a), (r.prev = a), e.length++, a;
                }
                function u(e, t, n) {
                  for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
                  (t.next = r), (r.prev = t), (e.length -= a);
                }
                return (
                  (a.stringify = function e(t, n) {
                    if ('string' == typeof t) return t;
                    if (Array.isArray(t)) {
                      var a = '';
                      return (
                        t.forEach(function (t) {
                          a += e(t, n);
                        }),
                        a
                      );
                    }
                    var o = {
                        type: t.type,
                        content: e(t.content, n),
                        tag: 'span',
                        classes: ['token', t.type],
                        attributes: {},
                        language: n,
                      },
                      i = t.alias;
                    i && (Array.isArray(i) ? Array.prototype.push.apply(o.classes, i) : o.classes.push(i)),
                      r.hooks.run('wrap', o);
                    var l = '';
                    for (var s in o.attributes)
                      l += ' ' + s + '="' + (o.attributes[s] || '').replace(/"/g, '&quot;') + '"';
                    return (
                      '<' + o.tag + ' class="' + o.classes.join(' ') + '"' + l + '>' + o.content + '</' + o.tag + '>'
                    );
                  }),
                  r
                );
              })();
              (t.exports = n), (n.default = n);
            },
          }),
          function () {
            return a || (0, r[y(r)[0]])((a = { exports: {} }).exports, a), a.exports;
          }),
        A = ((e, t, n) => (
          (n = null != e ? f(v(e)) : {}),
          ((e, t, n, r) => {
            if ((t && 'object' == typeof t) || 'function' == typeof t)
              for (let a of y(t))
                w.call(e, a) || a === n || p(e, a, { get: () => t[a], enumerable: !(r = h(t, a)) || r.enumerable });
            return e;
          })(!t && e && e.__esModule ? n : p(n, 'default', { value: e, enumerable: !0 }), e)
        ))(C());
      (A.languages.markup = {
        comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
        prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            'internal-subset': { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/i,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } },
            'special-attr': [],
            'attr-value': {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [
                  { pattern: /^=/, alias: 'attr-equals' },
                  { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                ],
              },
            },
            punctuation: /\/?>/,
            'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
          },
        },
        entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
      }),
        (A.languages.markup.tag.inside['attr-value'].inside.entity = A.languages.markup.entity),
        (A.languages.markup.doctype.inside['internal-subset'].inside = A.languages.markup),
        A.hooks.add('wrap', function (e) {
          'entity' === e.type && (e.attributes.title = e.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(A.languages.markup.tag, 'addInlined', {
          value: function (e, t) {
            var n;
            ((t =
              (((n =
                (((n = {})['language-' + t] = {
                  pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                  lookbehind: !0,
                  inside: A.languages[t],
                }),
                (n.cdata = /^<!\[CDATA\[|\]\]>$/i),
                { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: n } }))['language-' + t] = {
                pattern: /[\s\S]+/,
                inside: A.languages[t],
              }),
              {}))[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                'i'
              ),
              lookbehind: !0,
              greedy: !0,
              inside: n,
            }),
              A.languages.insertBefore('markup', 'cdata', t);
          },
        }),
        Object.defineProperty(A.languages.markup.tag, 'addAttribute', {
          value: function (e, t) {
            A.languages.markup.tag.inside['special-attr'].push({
              pattern: RegExp(
                /(^|["'\s])/.source + '(?:' + e + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i'
              ),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, 'language-' + t],
                      inside: A.languages[t],
                    },
                    punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                  },
                },
              },
            });
          },
        }),
        (A.languages.html = A.languages.markup),
        (A.languages.mathml = A.languages.markup),
        (A.languages.svg = A.languages.markup),
        (A.languages.xml = A.languages.extend('markup', {})),
        (A.languages.ssml = A.languages.xml),
        (A.languages.atom = A.languages.xml),
        (A.languages.rss = A.languages.xml),
        (o = A),
        (i = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: 'escape' }),
        (s =
          '(?:[^\\\\-]|' +
          (l = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/).source +
          ')'),
        (s = RegExp(s + '-' + s)),
        (u = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: 'variable' }),
        (o.languages.regex = {
          'char-class': {
            pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,
            lookbehind: !0,
            inside: {
              'char-class-negation': { pattern: /(^\[)\^/, lookbehind: !0, alias: 'operator' },
              'char-class-punctuation': { pattern: /^\[|\]$/, alias: 'punctuation' },
              range: { pattern: s, inside: { escape: l, 'range-punctuation': { pattern: /-/, alias: 'operator' } } },
              'special-escape': i,
              'char-set': { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
              escape: l,
            },
          },
          'special-escape': i,
          'char-set': { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: 'class-name' },
          backreference: [
            { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: 'keyword' },
            { pattern: /\\k<[^<>']+>/, alias: 'keyword', inside: { 'group-name': u } },
          ],
          anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: 'function' },
          escape: l,
          group: [
            {
              pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,
              alias: 'punctuation',
              inside: { 'group-name': u },
            },
            { pattern: /\)/, alias: 'punctuation' },
          ],
          quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: 'number' },
          alternation: { pattern: /\|/, alias: 'keyword' },
        }),
        (A.languages.clike = {
          comment: [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (A.languages.javascript = A.languages.extend('clike', {
          'class-name': [
            A.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                '(?:' +
                /NaN|Infinity/.source +
                '|' +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                '|' +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                '|' +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                '|' +
                /\d+(?:_\d+)*n/.source +
                '|' +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source +
                ')' +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (A.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        A.languages.insertBefore('javascript', 'keyword', {
          regex: {
            pattern: RegExp(
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
                /\//.source +
                '(?:' +
                /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
                '|' +
                /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                  .source +
                ')' +
                /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: A.languages.regex,
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: A.languages.javascript,
            },
            {
              pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: A.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: A.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: A.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        A.languages.insertBefore('javascript', 'string', {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                  rest: A.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'string-property': {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
          },
        }),
        A.languages.insertBefore('javascript', 'operator', {
          'literal-property': {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: 'property',
          },
        }),
        A.languages.markup &&
          (A.languages.markup.tag.addInlined('script', 'javascript'),
          A.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript'
          )),
        (A.languages.js = A.languages.javascript),
        (A.languages.actionscript = A.languages.extend('javascript', {
          keyword:
            /\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,
          operator: /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/,
        })),
        (A.languages.actionscript['class-name'].alias = 'function'),
        delete A.languages.actionscript.parameter,
        delete A.languages.actionscript['literal-property'],
        A.languages.markup &&
          A.languages.insertBefore('actionscript', 'string', {
            xml: {
              pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
              lookbehind: !0,
              inside: A.languages.markup,
            },
          }),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: 'variable' };
          (e.languages.coffeescript = e.languages.extend('javascript', {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              { pattern: /"(?:\\[\s\S]|[^\\"])*"/, greedy: !0, inside: { interpolation: n } },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            'class-member': { pattern: /@(?!\d)\w+/, alias: 'variable' },
          })),
            e.languages.insertBefore('coffeescript', 'comment', {
              'multiline-comment': { pattern: /###[\s\S]+?###/, alias: 'comment' },
              'block-regex': {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: 'regex',
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore('coffeescript', 'string', {
              'inline-javascript': {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: 'punctuation' },
                  script: { pattern: /[\s\S]+/, alias: 'language-javascript', inside: e.languages.javascript },
                },
              },
              'multiline-string': [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: 'string' },
                { pattern: /"""[\s\S]*?"""/, greedy: !0, alias: 'string', inside: { interpolation: n } },
              ],
            }),
            e.languages.insertBefore('coffeescript', 'keyword', { property: /(?!\d)\w+(?=\s*:(?!:))/ }),
            delete e.languages.coffeescript['template-string'],
            (e.languages.coffee = e.languages.coffeescript);
        })(A),
        (function (e) {
          var t = (e.languages.javadoclike = {
            parameter: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m, lookbehind: !0 },
            keyword: { pattern: /(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m, lookbehind: !0 },
            punctuation: /[{}]/,
          });
          Object.defineProperty(t, 'addSupport', {
            value: function (t, n) {
              (t = 'string' == typeof t ? [t] : t).forEach(function (t) {
                var r = function (e) {
                    e.inside || (e.inside = {}), (e.inside.rest = n);
                  },
                  a = 'doc-comment';
                if ((o = e.languages[t])) {
                  var o,
                    i = o[a];
                  if (
                    ((i =
                      i ||
                      (o = e.languages.insertBefore(t, 'comment', {
                        'doc-comment': {
                          pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
                          lookbehind: !0,
                          alias: 'comment',
                        },
                      }))[a]) instanceof RegExp && (i = o[a] = { pattern: i }),
                    Array.isArray(i))
                  )
                    for (var l = 0, s = i.length; l < s; l++)
                      i[l] instanceof RegExp && (i[l] = { pattern: i[l] }), r(i[l]);
                  else r(i);
                }
              });
            },
          }),
            t.addSupport(['java', 'javascript', 'php'], t);
        })(A),
        (function (e) {
          var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (t =
            ((e.languages.css = {
              comment: /\/\*[\s\S]*?\*\//,
              atrule: {
                pattern: RegExp(
                  '@[\\w-](?:' + /[^;{\s"']|\s+(?!\s)/.source + '|' + t.source + ')*?' + /(?:;|(?=\s*\{))/.source
                ),
                inside: {
                  rule: /^@[\w-]+/,
                  'selector-function-argument': {
                    pattern:
                      /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: 'selector',
                  },
                  keyword: { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
                },
              },
              url: {
                pattern: RegExp('\\burl\\((?:' + t.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
                greedy: !0,
                inside: {
                  function: /^url/i,
                  punctuation: /^\(|\)$/,
                  string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
                },
              },
              selector: {
                pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + t.source + ')*(?=\\s*\\{)'),
                lookbehind: !0,
              },
              string: { pattern: t, greedy: !0 },
              property: {
                pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                lookbehind: !0,
              },
              important: /!important\b/i,
              function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
              punctuation: /[(){};:,]/,
            }),
            (e.languages.css.atrule.inside.rest = e.languages.css),
            e.languages.markup)) && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'));
        })(A),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            n =
              ((t =
                ((e.languages.css.selector = {
                  pattern: e.languages.css.selector.pattern,
                  lookbehind: !0,
                  inside: (t = {
                    'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                    'pseudo-class': /:[-\w]+/,
                    class: /\.[-\w]+/,
                    id: /#[-\w]+/,
                    attribute: {
                      pattern: RegExp('\\[(?:[^[\\]"\']|' + t.source + ')*\\]'),
                      greedy: !0,
                      inside: {
                        punctuation: /^\[|\]$/,
                        'case-sensitivity': { pattern: /(\s)[si]$/i, lookbehind: !0, alias: 'keyword' },
                        namespace: {
                          pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                          lookbehind: !0,
                          inside: { punctuation: /\|$/ },
                        },
                        'attr-name': { pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/, lookbehind: !0 },
                        'attr-value': [t, { pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/, lookbehind: !0 }],
                        operator: /[|~*^$]?=/,
                      },
                    },
                    'n-th': [
                      {
                        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                        lookbehind: !0,
                        inside: { number: /[\dn]+/, operator: /[+-]/ },
                      },
                      { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
                    ],
                    combinator: />|\+|~|\|\|/,
                    punctuation: /[(),]/,
                  }),
                }),
                (e.languages.css.atrule.inside['selector-function-argument'].inside = t),
                e.languages.insertBefore('css', 'property', {
                  variable: {
                    pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                    lookbehind: !0,
                  },
                }),
                { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 })),
              { pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/, lookbehind: !0 });
          e.languages.insertBefore('css', 'function', {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: 'color' },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: { unit: t, number: n, function: /[\w-]+(?=\()/, punctuation: /[(),]/ },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: t,
            number: n,
          });
        })(A),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r = '(?:' + n.source + '(?:[ \t]+' + t.source + ')?|' + t.source + '(?:[ \t]+' + n.source + ')?)',
            a =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
                }
              ),
            o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function i(e, t) {
            t = (t || '').replace(/m/g, '') + 'm';
            var n = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
              .replace(/<<prop>>/g, function () {
                return r;
              })
              .replace(/<<value>>/g, function () {
                return e;
              });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: 'string',
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return '(?:' + a + '|' + o + ')';
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: 'atrule',
            },
            directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: 'important' },
            datetime: {
              pattern: i(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: 'number',
            },
            boolean: { pattern: i(/false|true/.source, 'i'), lookbehind: !0, alias: 'important' },
            null: { pattern: i(/null|~/.source, 'i'), lookbehind: !0, alias: 'important' },
            string: { pattern: i(o), lookbehind: !0, greedy: !0 },
            number: {
              pattern: i(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(A),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + e + ')')
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
              return r;
            }),
            o = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,
            i =
              ((e.languages.markdown = e.languages.extend('markup', {})),
              e.languages.insertBefore('markdown', 'prolog', {
                'front-matter-block': {
                  pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    punctuation: /^---|---$/,
                    'front-matter': {
                      pattern: /\S+(?:\s+\S+)*/,
                      alias: ['yaml', 'language-yaml'],
                      inside: e.languages.yaml,
                    },
                  },
                },
                blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
                table: {
                  pattern: RegExp('^' + a + o + '(?:' + a + ')*', 'm'),
                  inside: {
                    'table-data-rows': {
                      pattern: RegExp('^(' + a + o + ')(?:' + a + ')*$'),
                      lookbehind: !0,
                      inside: { 'table-data': { pattern: RegExp(r), inside: e.languages.markdown }, punctuation: /\|/ },
                    },
                    'table-line': {
                      pattern: RegExp('^(' + a + ')' + o + '$'),
                      lookbehind: !0,
                      inside: { punctuation: /\||:?-{3,}:?/ },
                    },
                    'table-header-row': {
                      pattern: RegExp('^' + a + '$'),
                      inside: {
                        'table-header': { pattern: RegExp(r), alias: 'important', inside: e.languages.markdown },
                        punctuation: /\|/,
                      },
                    },
                  },
                },
                code: [
                  {
                    pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                    lookbehind: !0,
                    alias: 'keyword',
                  },
                  {
                    pattern: /^```[\s\S]*?^```$/m,
                    greedy: !0,
                    inside: {
                      'code-block': { pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m, lookbehind: !0 },
                      'code-language': { pattern: /^(```).+/, lookbehind: !0 },
                      punctuation: /```/,
                    },
                  },
                ],
                title: [
                  {
                    pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                    alias: 'important',
                    inside: { punctuation: /==+$|--+$/ },
                  },
                  { pattern: /(^\s*)#.+/m, lookbehind: !0, alias: 'important', inside: { punctuation: /^#+|#+$/ } },
                ],
                hr: { pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: 'punctuation' },
                list: { pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: 'punctuation' },
                'url-reference': {
                  pattern:
                    /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                  inside: {
                    variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                    string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                    punctuation: /^[\[\]!:]|[<>]/,
                  },
                  alias: 'url',
                },
                bold: {
                  pattern: n(
                    /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                      .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    content: { pattern: /(^..)[\s\S]+(?=..$)/, lookbehind: !0, inside: {} },
                    punctuation: /\*\*|__/,
                  },
                },
                italic: {
                  pattern: n(
                    /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                      .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
                    punctuation: /[*_]/,
                  },
                },
                strike: {
                  pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    content: { pattern: /(^~~?)[\s\S]+(?=\1$)/, lookbehind: !0, inside: {} },
                    punctuation: /~~?/,
                  },
                },
                'code-snippet': {
                  pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                  lookbehind: !0,
                  greedy: !0,
                  alias: ['code', 'keyword'],
                },
                url: {
                  pattern: n(
                    /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                      .source
                  ),
                  lookbehind: !0,
                  greedy: !0,
                  inside: {
                    operator: /^!/,
                    content: { pattern: /(^\[)[^\]]+(?=\])/, lookbehind: !0, inside: {} },
                    variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
                    url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                    string: { pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/, lookbehind: !0 },
                  },
                },
              }),
              ['url', 'bold', 'italic', 'strike'].forEach(function (t) {
                ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (n) {
                  t !== n && (e.languages.markdown[t].inside.content.inside[n] = e.languages.markdown[n]);
                });
              }),
              e.hooks.add('after-tokenize', function (e) {
                ('markdown' !== e.language && 'md' !== e.language) ||
                  (function e(t) {
                    if (t && 'string' != typeof t)
                      for (var n = 0, r = t.length; n < r; n++) {
                        var a,
                          o = t[n];
                        'code' !== o.type
                          ? e(o.content)
                          : ((a = o.content[1]),
                            (o = o.content[3]),
                            a &&
                              o &&
                              'code-language' === a.type &&
                              'code-block' === o.type &&
                              'string' == typeof a.content &&
                              ((a = a.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp')),
                              (a = 'language-' + (a = (/[a-z][\w-]*/i.exec(a) || [''])[0].toLowerCase())),
                              o.alias
                                ? 'string' == typeof o.alias
                                  ? (o.alias = [o.alias, a])
                                  : o.alias.push(a)
                                : (o.alias = [a])));
                      }
                  })(e.tokens);
              }),
              e.hooks.add('wrap', function (t) {
                if ('code-block' === t.type) {
                  for (var n = '', r = 0, a = t.classes.length; r < a; r++) {
                    var o = t.classes[r];
                    if ((o = /language-(.+)/.exec(o))) {
                      n = o[1];
                      break;
                    }
                  }
                  var u,
                    c = e.languages[n];
                  c
                    ? (t.content = e.highlight(
                        t.content.replace(i, '').replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (e, t) {
                          var n;
                          return '#' === (t = t.toLowerCase())[0]
                            ? ((n = 'x' === t[1] ? parseInt(t.slice(2), 16) : Number(t.slice(1))), s(n))
                            : l[t] || e;
                        }),
                        c,
                        n
                      ))
                    : n &&
                      'none' !== n &&
                      e.plugins.autoloader &&
                      ((u = 'md-' + new Date().valueOf() + '-' + Math.floor(1e16 * Math.random())),
                      (t.attributes.id = u),
                      e.plugins.autoloader.loadLanguages(n, function () {
                        var t = document.getElementById(u);
                        t && (t.innerHTML = e.highlight(t.textContent, e.languages[n], n));
                      }));
                }
              }),
              RegExp(e.languages.markup.tag.pattern.source, 'gi')),
            l = { amp: '&', lt: '<', gt: '>', quot: '"' },
            s = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(A),
        (A.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: 'string',
            inside: {
              'language-markdown': {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: A.languages.markdown,
              },
            },
          },
          string: { pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/, greedy: !0 },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
          'attr-name': { pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i, greedy: !0 },
          'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          'class-name': {
            pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: { pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          'definition-mutation': { pattern: /(\bmutation\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          'definition-query': { pattern: /(\bquery\s+)[a-zA-Z_]\w*/, lookbehind: !0, alias: 'function' },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          'property-query': /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        A.hooks.add('after-tokenize', function (e) {
          if ('graphql' === e.language)
            for (
              var t = e.tokens.filter(function (e) {
                  return 'string' != typeof e && 'comment' !== e.type && 'scalar' !== e.type;
                }),
                n = 0;
              n < t.length;

            ) {
              var r = t[n++];
              if ('keyword' === r.type && 'mutation' === r.content) {
                var a = [];
                if (d(['definition-mutation', 'punctuation']) && '(' === c(1).content) {
                  n += 2;
                  var o = f(/^\($/, /^\)$/);
                  if (-1 === o) continue;
                  for (; n < o; n++) {
                    var i = c(0);
                    'variable' === i.type && (p(i, 'variable-input'), a.push(i.content));
                  }
                  n = o + 1;
                }
                if (
                  d(['punctuation', 'property-query']) &&
                  '{' === c(0).content &&
                  (n++, p(c(0), 'property-mutation'), 0 < a.length)
                ) {
                  var l = f(/^\{$/, /^\}$/);
                  if (-1 !== l)
                    for (var s = n; s < l; s++) {
                      var u = t[s];
                      'variable' === u.type && 0 <= a.indexOf(u.content) && p(u, 'variable-input');
                    }
                }
              }
            }
          function c(e) {
            return t[n + e];
          }
          function d(e, t) {
            t = t || 0;
            for (var n = 0; n < e.length; n++) {
              var r = c(n + t);
              if (!r || r.type !== e[n]) return;
            }
            return 1;
          }
          function f(e, r) {
            for (var a = 1, o = n; o < t.length; o++) {
              var i = t[o],
                l = i.content;
              if ('punctuation' === i.type && 'string' == typeof l)
                if (e.test(l)) a++;
                else if (r.test(l) && 0 == --a) return o;
            }
            return -1;
          }
          function p(e, t) {
            var n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []), n.push(t);
          }
        }),
        (A.languages.sql = {
          comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
          variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
          string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = e.languages.javascript['template-string'],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside['interpolation-punctuation'],
            o = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp('((?:' + r + ')\\s*)' + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                  'embedded-code': { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function l(t, n, r) {
            return (
              (t = { code: t, grammar: n, language: r }),
              e.hooks.run('before-tokenize', t),
              (t.tokens = e.tokenize(t.code, t.grammar)),
              e.hooks.run('after-tokenize', t),
              t.tokens
            );
          }
          function s(t, n, i) {
            var s = e.tokenize(t, { interpolation: { pattern: RegExp(o), lookbehind: !0 } }),
              u = 0,
              c = {},
              d =
                ((s = l(
                  s
                    .map(function (e) {
                      if ('string' == typeof e) return e;
                      var n, r;
                      for (
                        e = e.content;
                        -1 !== t.indexOf(((r = u++), (n = '___' + i.toUpperCase() + '_' + r + '___')));

                      );
                      return (c[n] = e), n;
                    })
                    .join(''),
                  n,
                  i
                )),
                Object.keys(c));
            return (
              (u = 0),
              (function t(n) {
                for (var o = 0; o < n.length; o++) {
                  if (u >= d.length) return;
                  var i,
                    s,
                    f,
                    p,
                    m,
                    h,
                    g,
                    y = n[o];
                  'string' == typeof y || 'string' == typeof y.content
                    ? ((i = d[u]),
                      -1 !== (g = (h = 'string' == typeof y ? y : y.content).indexOf(i)) &&
                        (++u,
                        (s = h.substring(0, g)),
                        (m = c[i]),
                        (f = void 0),
                        ((p = {})['interpolation-punctuation'] = a),
                        3 === (p = e.tokenize(m, p)).length &&
                          ((f = [1, 1]).push.apply(f, l(p[1], e.languages.javascript, 'javascript')),
                          p.splice.apply(p, f)),
                        (f = new e.Token('interpolation', p, r.alias, m)),
                        (p = h.substring(g + i.length)),
                        (m = []),
                        s && m.push(s),
                        m.push(f),
                        p && (t((h = [p])), m.push.apply(m, h)),
                        'string' == typeof y
                          ? (n.splice.apply(n, [o, 1].concat(m)), (o += m.length - 1))
                          : (y.content = m)))
                    : ((g = y.content), Array.isArray(g) ? t(g) : t([g]));
                }
              })(s),
              new e.Token(i, s, 'language-' + i, t)
            );
          }
          e.languages.javascript['template-string'] = [
            i(
              'css',
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i('svg', /\bsvg/.source),
            i('markdown', /\b(?:markdown|md)/.source),
            i('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            i('sql', /\bsql/.source),
            t,
          ].filter(Boolean);
          var u = { javascript: !0, js: !0, typescript: !0, ts: !0, jsx: !0, tsx: !0 };
          function c(e) {
            return 'string' == typeof e ? e : Array.isArray(e) ? e.map(c).join('') : c(e.content);
          }
          e.hooks.add('after-tokenize', function (t) {
            t.language in u &&
              (function t(n) {
                for (var r = 0, a = n.length; r < a; r++) {
                  var o,
                    i,
                    l,
                    u = n[r];
                  'string' != typeof u &&
                    ((o = u.content),
                    Array.isArray(o)
                      ? 'template-string' === u.type
                        ? ((u = o[1]),
                          3 === o.length &&
                            'string' != typeof u &&
                            'embedded-code' === u.type &&
                            ((i = c(u)), (u = u.alias), (u = Array.isArray(u) ? u[0] : u), (l = e.languages[u])) &&
                            (o[1] = s(i, l, u)))
                        : t(o)
                      : 'string' != typeof o && t([o]));
                }
              })(t.tokens);
          });
        })(A),
        (function (e) {
          (e.languages.typescript = e.languages.extend('javascript', {
            'class-name': {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript['literal-property'];
          var t = e.languages.extend('typescript', {});
          delete t['class-name'],
            (e.languages.typescript['class-name'].inside = t),
            e.languages.insertBefore('typescript', 'function', {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ },
              },
              'generic-function': {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: t },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(A),
        (function (e) {
          var t = e.languages.javascript,
            n = /\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,
            r = '(@(?:arg|argument|param|property)\\s+(?:' + n + '\\s+)?)';
          (e.languages.jsdoc = e.languages.extend('javadoclike', {
            parameter: {
              pattern: RegExp(r + /(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),
              lookbehind: !0,
              inside: { punctuation: /\./ },
            },
          })),
            e.languages.insertBefore('jsdoc', 'keyword', {
              'optional-parameter': {
                pattern: RegExp(r + /\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),
                lookbehind: !0,
                inside: {
                  parameter: { pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/, lookbehind: !0, inside: { punctuation: /\./ } },
                  code: { pattern: /(=)[\s\S]*(?=\]$)/, lookbehind: !0, inside: t, alias: 'language-javascript' },
                  punctuation: /[=[\]]/,
                },
              },
              'class-name': [
                {
                  pattern: RegExp(
                    /(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(
                      /<TYPE>/g,
                      function () {
                        return n;
                      }
                    )
                  ),
                  lookbehind: !0,
                  inside: { punctuation: /\./ },
                },
                {
                  pattern: RegExp('(@[a-z]+\\s+)' + n),
                  lookbehind: !0,
                  inside: {
                    string: t.string,
                    number: t.number,
                    boolean: t.boolean,
                    keyword: e.languages.typescript.keyword,
                    operator: /=>|\.\.\.|[&|?:*]/,
                    punctuation: /[.,;=<>{}()[\]]/,
                  },
                },
              ],
              example: {
                pattern: /(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
                lookbehind: !0,
                inside: {
                  code: {
                    pattern: /^([\t ]*(?:\*\s*)?)\S.*$/m,
                    lookbehind: !0,
                    inside: t,
                    alias: 'language-javascript',
                  },
                },
              },
            }),
            e.languages.javadoclike.addSupport('javascript', e.languages.jsdoc);
        })(A),
        (function (e) {
          (e.languages.flow = e.languages.extend('javascript', {})),
            e.languages.insertBefore('flow', 'keyword', {
              type: [
                {
                  pattern: /\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,
                  alias: 'class-name',
                },
              ],
            }),
            (e.languages.flow['function-variable'].pattern =
              /(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i),
            delete e.languages.flow.parameter,
            e.languages.insertBefore('flow', 'operator', {
              'flow-punctuation': { pattern: /\{\||\|\}/, alias: 'punctuation' },
            }),
            Array.isArray(e.languages.flow.keyword) || (e.languages.flow.keyword = [e.languages.flow.keyword]),
            e.languages.flow.keyword.unshift(
              { pattern: /(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/, lookbehind: !0 },
              {
                pattern:
                  /(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,
                lookbehind: !0,
              }
            );
        })(A),
        (A.languages.n4js = A.languages.extend('javascript', {
          keyword:
            /\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
        })),
        A.languages.insertBefore('n4js', 'constant', { annotation: { pattern: /@+\w+/, alias: 'operator' } }),
        (A.languages.n4jsd = A.languages.n4js),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
              }),
              t
            );
          }
          e.languages.insertBefore('javascript', 'function-variable', {
            'method-variable': {
              pattern: RegExp('(\\.\\s*)' + e.languages.javascript['function-variable'].pattern.source),
              lookbehind: !0,
              alias: ['function-variable', 'method', 'function', 'property-access'],
            },
          }),
            e.languages.insertBefore('javascript', 'function', {
              method: {
                pattern: RegExp('(\\.\\s*)' + e.languages.javascript.function.source),
                lookbehind: !0,
                alias: ['function', 'property-access'],
              },
            }),
            e.languages.insertBefore('javascript', 'constant', {
              'known-class-name': [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: 'class-name',
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' },
              ],
            }),
            e.languages.insertBefore('javascript', 'keyword', {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: 'control-flow',
              },
              { pattern: /\bnull\b/, alias: ['null', 'nil'] },
              { pattern: /\bundefined\b/, alias: 'nil' }
            ),
            e.languages.insertBefore('javascript', 'operator', {
              spread: { pattern: /\.{3}/, alias: 'operator' },
              arrow: { pattern: /=>/, alias: 'operator' },
            }),
            e.languages.insertBefore('javascript', 'punctuation', {
              'property-access': { pattern: t(/(\.\s*)#?<ID>/.source), lookbehind: !0 },
              'maybe-class-name': { pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/, lookbehind: !0 },
              dom: {
                pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: 'variable',
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' },
            });
          for (
            var n = ['function', 'function-variable', 'method', 'method-variable', 'property-access'], r = 0;
            r < n.length;
            r++
          ) {
            var a = n[r],
              o = e.languages.javascript[a];
            a = (o = 'RegExp' === e.util.type(o) ? (e.languages.javascript[a] = { pattern: o }) : o).inside || {};
            (o.inside = a)['maybe-class-name'] = /^[A-Z][\s\S]*/;
          }
        })(A),
        (function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function o(e, t) {
            return (
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return a;
                })),
              RegExp(e, t)
            );
          }
          function i(t) {
            for (var n = [], r = 0; r < t.length; r++) {
              var a = t[r],
                o = !1;
              'string' != typeof a &&
                ('tag' === a.type && a.content[0] && 'tag' === a.content[0].type
                  ? '</' === a.content[0].content[0].content
                    ? 0 < n.length && n[n.length - 1].tagName === l(a.content[0].content[1]) && n.pop()
                    : '/>' !== a.content[a.content.length - 1].content &&
                      n.push({ tagName: l(a.content[0].content[1]), openedBraces: 0 })
                  : 0 < n.length && 'punctuation' === a.type && '{' === a.content
                  ? n[n.length - 1].openedBraces++
                  : 0 < n.length && 0 < n[n.length - 1].openedBraces && 'punctuation' === a.type && '}' === a.content
                  ? n[n.length - 1].openedBraces--
                  : (o = !0)),
                (o || 'string' == typeof a) &&
                  0 < n.length &&
                  0 === n[n.length - 1].openedBraces &&
                  ((o = l(a)),
                  r < t.length - 1 &&
                    ('string' == typeof t[r + 1] || 'plain-text' === t[r + 1].type) &&
                    ((o += l(t[r + 1])), t.splice(r + 1, 1)),
                  0 < r &&
                    ('string' == typeof t[r - 1] || 'plain-text' === t[r - 1].type) &&
                    ((o = l(t[r - 1]) + o), t.splice(r - 1, 1), r--),
                  (t[r] = new e.Token('plain-text', o, null, o))),
                a.content && 'string' != typeof a.content && i(a.content);
            }
          }
          (a = o(a).source),
            (e.languages.jsx = e.languages.extend('markup', t)),
            (e.languages.jsx.tag.pattern = o(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside['attr-value'].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              'inside',
              'attr-name',
              { spread: { pattern: o(/<SPREAD>/.source), inside: e.languages.jsx } },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              'inside',
              'special-attr',
              {
                script: {
                  pattern: o(/=<BRACES>/.source),
                  alias: 'language-javascript',
                  inside: {
                    'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          var l = function (e) {
            return e
              ? 'string' == typeof e
                ? e
                : 'string' == typeof e.content
                ? e.content
                : e.content.map(l).join('')
              : '';
          };
          e.hooks.add('after-tokenize', function (e) {
            ('jsx' !== e.language && 'tsx' !== e.language) || i(e.tokens);
          });
        })(A),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          ((t =
            ((e.languages.tsx = e.languages.extend('jsx', t)),
            delete e.languages.tsx.parameter,
            delete e.languages.tsx['literal-property'],
            e.languages.tsx.tag)).pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + '(?:' + t.pattern.source + ')',
            t.pattern.flags
          )),
            (t.lookbehind = !0);
        })(A),
        (A.languages.swift = {
          comment: {
            pattern: /(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,
            lookbehind: !0,
            greedy: !0,
          },
          'string-literal': [
            {
              pattern: RegExp(
                /(^|[^"#])/.source +
                  '(?:' +
                  /"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source +
                  '|' +
                  /"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source +
                  ')' +
                  /(?!["#])/.source
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                interpolation: { pattern: /(\\\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null },
                'interpolation-punctuation': { pattern: /^\)|\\\($/, alias: 'punctuation' },
                punctuation: /\\(?=[\r\n])/,
                string: /[\s\S]+/,
              },
            },
            {
              pattern: RegExp(
                /(^|[^"#])(#+)/.source +
                  '(?:' +
                  /"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source +
                  '|' +
                  /"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source +
                  ')\\2'
              ),
              lookbehind: !0,
              greedy: !0,
              inside: {
                interpolation: { pattern: /(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/, lookbehind: !0, inside: null },
                'interpolation-punctuation': { pattern: /^\)|\\#+\($/, alias: 'punctuation' },
                string: /[\s\S]+/,
              },
            },
          ],
          directive: {
            pattern: RegExp(
              /#/.source +
                '(?:' +
                /(?:elseif|if)\b/.source +
                '(?:[ \t]*' +
                /(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/
                  .source +
                ')+|' +
                /(?:else|endif)\b/.source +
                ')'
            ),
            alias: 'property',
            inside: {
              'directive-name': /^#\w+/,
              boolean: /\b(?:false|true)\b/,
              number: /\b\d+(?:\.\d+)*\b/,
              operator: /!|&&|\|\||[<>]=?/,
              punctuation: /[(),]/,
            },
          },
          literal: {
            pattern: /#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,
            alias: 'constant',
          },
          'other-directive': { pattern: /#\w+\b/, alias: 'property' },
          attribute: { pattern: /@\w+/, alias: 'atrule' },
          'function-definition': { pattern: /(\bfunc\s+)\w+/, lookbehind: !0, alias: 'function' },
          label: {
            pattern: /\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,
            lookbehind: !0,
            alias: 'important',
          },
          keyword:
            /\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,
          boolean: /\b(?:false|true)\b/,
          nil: { pattern: /\bnil\b/, alias: 'constant' },
          'short-argument': /\$\d+\b/,
          omit: { pattern: /\b_\b/, alias: 'keyword' },
          number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
          'class-name': /\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          constant: /\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
          operator: /[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,
          punctuation: /[{}[\]();,.:\\]/,
        }),
        A.languages.swift['string-literal'].forEach(function (e) {
          e.inside.interpolation.inside = A.languages.swift;
        }),
        (function (e) {
          (e.languages.kotlin = e.languages.extend('clike', {
            keyword: {
              pattern:
                /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
              lookbehind: !0,
            },
            function: [
              { pattern: /(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/, greedy: !0 },
              { pattern: /(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/, lookbehind: !0, greedy: !0 },
            ],
            number:
              /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
            operator:
              /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/,
          })),
            delete e.languages.kotlin['class-name'];
          var t = {
            'interpolation-punctuation': { pattern: /^\$\{?|\}$/, alias: 'punctuation' },
            expression: { pattern: /[\s\S]+/, inside: e.languages.kotlin },
          };
          e.languages.insertBefore('kotlin', 'string', {
            'string-literal': [
              {
                pattern: /"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,
                alias: 'multiline',
                inside: { interpolation: { pattern: /\$(?:[a-z_]\w*|\{[^{}]*\})/i, inside: t }, string: /[\s\S]+/ },
              },
              {
                pattern: /"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,
                alias: 'singleline',
                inside: {
                  interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,
                    lookbehind: !0,
                    inside: t,
                  },
                  string: /[\s\S]+/,
                },
              },
            ],
            char: { pattern: /'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/, greedy: !0 },
          }),
            delete e.languages.kotlin.string,
            e.languages.insertBefore('kotlin', 'keyword', {
              annotation: { pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/, alias: 'builtin' },
            }),
            e.languages.insertBefore('kotlin', 'function', { label: { pattern: /\b\w+@|@\w+\b/, alias: 'symbol' } }),
            (e.languages.kt = e.languages.kotlin),
            (e.languages.kts = e.languages.kotlin);
        })(A),
        (A.languages.c = A.languages.extend('clike', {
          comment: { pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
          'class-name': {
            pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        A.languages.insertBefore('c', 'string', {
          char: { pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: !0 },
        }),
        A.languages.insertBefore('c', 'string', {
          macro: {
            pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: 'property',
            inside: {
              string: [{ pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 }, A.languages.c.string],
              char: A.languages.c.char,
              comment: A.languages.c.comment,
              'macro-name': [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                { pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: !0, alias: 'function' },
              ],
              directive: { pattern: /^(#\s*)[a-z]+/, lookbehind: !0, alias: 'keyword' },
              'directive-hash': /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: A.languages.c },
            },
          },
        }),
        A.languages.insertBefore('c', 'function', {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete A.languages.c.boolean,
        (A.languages.objectivec = A.languages.extend('c', {
          string: { pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: !0 },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete A.languages.objectivec['class-name'],
        (A.languages.objc = A.languages.objectivec),
        (A.languages.reason = A.languages.extend('clike', {
          string: { pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/, greedy: !0 },
          'class-name': /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        A.languages.insertBefore('reason', 'class-name', {
          char: { pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/, greedy: !0 },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: 'symbol' },
        }),
        delete A.languages.reason.function,
        (function (e) {
          for (var t = /\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source, n = 0; n < 2; n++)
            t = t.replace(/<self>/g, function () {
              return t;
            });
          (t = t.replace(/<self>/g, function () {
            return /[^\s\S]/.source;
          })),
            (e.languages.rust = {
              comment: [
                { pattern: RegExp(/(^|[^\\])/.source + t), lookbehind: !0, greedy: !0 },
                { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
              ],
              string: { pattern: /b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/, greedy: !0 },
              char: { pattern: /b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/, greedy: !0 },
              attribute: {
                pattern: /#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,
                greedy: !0,
                alias: 'attr-name',
                inside: { string: null },
              },
              'closure-params': {
                pattern: /([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,
                lookbehind: !0,
                greedy: !0,
                inside: { 'closure-punctuation': { pattern: /^\||\|$/, alias: 'punctuation' }, rest: null },
              },
              'lifetime-annotation': { pattern: /'\w+/, alias: 'symbol' },
              'fragment-specifier': { pattern: /(\$\w+:)[a-z]+/, lookbehind: !0, alias: 'punctuation' },
              variable: /\$\w+/,
              'function-definition': { pattern: /(\bfn\s+)\w+/, lookbehind: !0, alias: 'function' },
              'type-definition': {
                pattern: /(\b(?:enum|struct|trait|type|union)\s+)\w+/,
                lookbehind: !0,
                alias: 'class-name',
              },
              'module-declaration': [
                { pattern: /(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/, lookbehind: !0, alias: 'namespace' },
                {
                  pattern: /(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,
                  lookbehind: !0,
                  alias: 'namespace',
                  inside: { punctuation: /::/ },
                },
              ],
              keyword: [
                /\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,
                /\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/,
              ],
              function: /\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,
              macro: { pattern: /\b\w+!/, alias: 'property' },
              constant: /\b[A-Z_][A-Z_\d]+\b/,
              'class-name': /\b[A-Z]\w*\b/,
              namespace: {
                pattern: /(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,
                inside: { punctuation: /::/ },
              },
              number:
                /\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,
              boolean: /\b(?:false|true)\b/,
              punctuation: /->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,
              operator: /[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/,
            }),
            (e.languages.rust['closure-params'].inside.rest = e.languages.rust),
            (e.languages.rust.attribute.inside.string = e.languages.rust.string);
        })(A),
        (A.languages.go = A.languages.extend('clike', {
          string: { pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        A.languages.insertBefore('go', 'string', { char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 } }),
        delete A.languages.go['class-name'],
        (function (e) {
          var t =
              /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
              return t.source;
            });
          (e.languages.cpp = e.languages.extend('c', {
            'class-name': [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    }
                  )
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/,
          })),
            e.languages.insertBefore('cpp', 'string', {
              module: {
                pattern: RegExp(
                  /(\b(?:import|module)\s+)/.source +
                    '(?:' +
                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                    '|' +
                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
                      return n;
                    }) +
                    ')'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: { string: /^[<"][\s\S]+/, operator: /:/, punctuation: /\./ },
              },
              'raw-string': { pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/, alias: 'string', greedy: !0 },
            }),
            e.languages.insertBefore('cpp', 'keyword', {
              'generic-function': {
                pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                  function: /^\w+/,
                  generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: e.languages.cpp },
                },
              },
            }),
            e.languages.insertBefore('cpp', 'operator', { 'double-colon': { pattern: /::/, alias: 'punctuation' } }),
            e.languages.insertBefore('cpp', 'class-name', {
              'base-clause': {
                pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend('cpp', {}),
              },
            }),
            e.languages.insertBefore(
              'inside',
              'double-colon',
              { 'class-name': /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp['base-clause']
            );
        })(A),
        (A.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          'string-interpolation': {
            pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 },
                  'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          'triple-quoted-string': { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: 'string' },
          string: { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
          function: { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
          'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ['annotation', 'punctuation'],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (A.languages.python['string-interpolation'].inside.interpolation.inside.rest = A.languages.python),
        (A.languages.py = A.languages.python),
        (A.languages.json = {
          property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
          string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: 'keyword' },
        }),
        (A.languages.webmanifest = A.languages.json);
      ((e, t) => {
        for (var n in t) p(e, n, { get: t[n], enumerable: !0 });
      })(
        {},
        {
          dracula: () => T,
          duotoneDark: () => j,
          duotoneLight: () => P,
          github: () => N,
          gruvboxMaterialDark: () => Q,
          gruvboxMaterialLight: () => K,
          jettwaveDark: () => H,
          jettwaveLight: () => G,
          nightOwl: () => O,
          nightOwlLight: () => L,
          oceanicNext: () => F,
          okaidia: () => I,
          oneDark: () => V,
          oneLight: () => W,
          palenight: () => M,
          shadesOfPurple: () => z,
          synthwave84: () => B,
          ultramin: () => $,
          vsDark: () => U,
          vsLight: () => q,
        }
      );
      var T = {
          plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
          styles: [
            { types: ['prolog', 'constant', 'builtin'], style: { color: 'rgb(189, 147, 249)' } },
            { types: ['inserted', 'function'], style: { color: 'rgb(80, 250, 123)' } },
            { types: ['deleted'], style: { color: 'rgb(255, 85, 85)' } },
            { types: ['changed'], style: { color: 'rgb(255, 184, 108)' } },
            { types: ['punctuation', 'symbol'], style: { color: 'rgb(248, 248, 242)' } },
            { types: ['string', 'char', 'tag', 'selector'], style: { color: 'rgb(255, 121, 198)' } },
            { types: ['keyword', 'variable'], style: { color: 'rgb(189, 147, 249)', fontStyle: 'italic' } },
            { types: ['comment'], style: { color: 'rgb(98, 114, 164)' } },
            { types: ['attr-name'], style: { color: 'rgb(241, 250, 140)' } },
          ],
        },
        j = {
          plain: { backgroundColor: '#2a2734', color: '#9a86fd' },
          styles: [
            { types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'], style: { color: '#6c6783' } },
            { types: ['namespace'], style: { opacity: 0.7 } },
            { types: ['tag', 'operator', 'number'], style: { color: '#e09142' } },
            { types: ['property', 'function'], style: { color: '#9a86fd' } },
            { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#eeebff' } },
            { types: ['attr-name'], style: { color: '#c4b9fe' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'atrule',
                'placeholder',
                'variable',
              ],
              style: { color: '#ffcc99' },
            },
            { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#c4b9fe' } },
          ],
        },
        P = {
          plain: { backgroundColor: '#faf8f5', color: '#728fcb' },
          styles: [
            { types: ['comment', 'prolog', 'doctype', 'cdata', 'punctuation'], style: { color: '#b6ad9a' } },
            { types: ['namespace'], style: { opacity: 0.7 } },
            { types: ['tag', 'operator', 'number'], style: { color: '#063289' } },
            { types: ['property', 'function'], style: { color: '#b29762' } },
            { types: ['tag-id', 'selector', 'atrule-id'], style: { color: '#2d2006' } },
            { types: ['attr-name'], style: { color: '#896724' } },
            {
              types: [
                'boolean',
                'string',
                'entity',
                'url',
                'attr-value',
                'keyword',
                'control',
                'directive',
                'unit',
                'statement',
                'regex',
                'atrule',
              ],
              style: { color: '#728fcb' },
            },
            { types: ['placeholder', 'variable'], style: { color: '#93abdc' } },
            { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: '#896724' } },
          ],
        },
        N = {
          plain: { color: '#393A34', backgroundColor: '#f6f8fa' },
          styles: [
            { types: ['comment', 'prolog', 'doctype', 'cdata'], style: { color: '#999988', fontStyle: 'italic' } },
            { types: ['namespace'], style: { opacity: 0.7 } },
            { types: ['string', 'attr-value'], style: { color: '#e3116c' } },
            { types: ['punctuation', 'operator'], style: { color: '#393A34' } },
            {
              types: [
                'entity',
                'url',
                'symbol',
                'number',
                'boolean',
                'variable',
                'constant',
                'property',
                'regex',
                'inserted',
              ],
              style: { color: '#36acaa' },
            },
            { types: ['atrule', 'keyword', 'attr-name', 'selector'], style: { color: '#00a4db' } },
            { types: ['function', 'deleted', 'tag'], style: { color: '#d73a49' } },
            { types: ['function-variable'], style: { color: '#6f42c1' } },
            { types: ['tag', 'selector', 'keyword'], style: { color: '#00009f' } },
          ],
        },
        O = {
          plain: { color: '#d6deeb', backgroundColor: '#011627' },
          styles: [
            { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
            { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' } },
            { types: ['inserted', 'attr-name'], style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' } },
            { types: ['comment'], style: { color: 'rgb(99, 119, 119)', fontStyle: 'italic' } },
            { types: ['string', 'url'], style: { color: 'rgb(173, 219, 103)' } },
            { types: ['variable'], style: { color: 'rgb(214, 222, 235)' } },
            { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
            { types: ['builtin', 'char', 'constant', 'function'], style: { color: 'rgb(130, 170, 255)' } },
            { types: ['punctuation'], style: { color: 'rgb(199, 146, 234)' } },
            { types: ['selector', 'doctype'], style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' } },
            { types: ['class-name'], style: { color: 'rgb(255, 203, 139)' } },
            { types: ['tag', 'operator', 'keyword'], style: { color: 'rgb(127, 219, 202)' } },
            { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
            { types: ['property'], style: { color: 'rgb(128, 203, 196)' } },
            { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
          ],
        },
        L = {
          plain: { color: '#403f53', backgroundColor: '#FBFBFB' },
          styles: [
            { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
            { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)', fontStyle: 'italic' } },
            { types: ['inserted', 'attr-name'], style: { color: 'rgb(72, 118, 214)', fontStyle: 'italic' } },
            { types: ['comment'], style: { color: 'rgb(152, 159, 177)', fontStyle: 'italic' } },
            { types: ['string', 'builtin', 'char', 'constant', 'url'], style: { color: 'rgb(72, 118, 214)' } },
            { types: ['variable'], style: { color: 'rgb(201, 103, 101)' } },
            { types: ['number'], style: { color: 'rgb(170, 9, 130)' } },
            { types: ['punctuation'], style: { color: 'rgb(153, 76, 195)' } },
            { types: ['function', 'selector', 'doctype'], style: { color: 'rgb(153, 76, 195)', fontStyle: 'italic' } },
            { types: ['class-name'], style: { color: 'rgb(17, 17, 17)' } },
            { types: ['tag'], style: { color: 'rgb(153, 76, 195)' } },
            { types: ['operator', 'property', 'keyword', 'namespace'], style: { color: 'rgb(12, 150, 155)' } },
            { types: ['boolean'], style: { color: 'rgb(188, 84, 84)' } },
          ],
        },
        R = '#c5a5c5',
        D = '#8dc891',
        F = {
          plain: { backgroundColor: '#282c34', color: '#ffffff' },
          styles: [
            { types: ['attr-name'], style: { color: R } },
            { types: ['attr-value'], style: { color: D } },
            {
              types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata', 'shebang'],
              style: { color: '#999999' },
            },
            {
              types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'],
              style: { color: '#5a9bcf' },
            },
            { types: ['boolean'], style: { color: '#ff8b50' } },
            { types: ['tag'], style: { color: '#fc929e' } },
            { types: ['string'], style: { color: D } },
            { types: ['punctuation'], style: { color: D } },
            { types: ['selector', 'char', 'builtin', 'inserted'], style: { color: '#D8DEE9' } },
            { types: ['function'], style: { color: '#79b6f2' } },
            { types: ['operator', 'entity', 'url', 'variable'], style: { color: '#d7deea' } },
            { types: ['keyword'], style: { color: R } },
            { types: ['atrule', 'class-name'], style: { color: '#FAC863' } },
            { types: ['important'], style: { fontWeight: '400' } },
            { types: ['bold'], style: { fontWeight: 'bold' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['namespace'], style: { opacity: 0.7 } },
          ],
        },
        I = {
          plain: { color: '#f8f8f2', backgroundColor: '#272822' },
          styles: [
            { types: ['changed'], style: { color: 'rgb(162, 191, 252)', fontStyle: 'italic' } },
            { types: ['deleted'], style: { color: '#f92672', fontStyle: 'italic' } },
            { types: ['inserted'], style: { color: 'rgb(173, 219, 103)', fontStyle: 'italic' } },
            { types: ['comment'], style: { color: '#8292a2', fontStyle: 'italic' } },
            { types: ['string', 'url'], style: { color: '#a6e22e' } },
            { types: ['variable'], style: { color: '#f8f8f2' } },
            { types: ['number'], style: { color: '#ae81ff' } },
            { types: ['builtin', 'char', 'constant', 'function', 'class-name'], style: { color: '#e6db74' } },
            { types: ['punctuation'], style: { color: '#f8f8f2' } },
            { types: ['selector', 'doctype'], style: { color: '#a6e22e', fontStyle: 'italic' } },
            { types: ['tag', 'operator', 'keyword'], style: { color: '#66d9ef' } },
            { types: ['boolean'], style: { color: '#ae81ff' } },
            { types: ['namespace'], style: { color: 'rgb(178, 204, 214)', opacity: 0.7 } },
            { types: ['tag', 'property'], style: { color: '#f92672' } },
            { types: ['attr-name'], style: { color: '#a6e22e !important' } },
            { types: ['doctype'], style: { color: '#8292a2' } },
            { types: ['rule'], style: { color: '#e6db74' } },
          ],
        },
        M = {
          plain: { color: '#bfc7d5', backgroundColor: '#292d3e' },
          styles: [
            { types: ['comment'], style: { color: 'rgb(105, 112, 152)', fontStyle: 'italic' } },
            { types: ['string', 'inserted'], style: { color: 'rgb(195, 232, 141)' } },
            { types: ['number'], style: { color: 'rgb(247, 140, 108)' } },
            { types: ['builtin', 'char', 'constant', 'function'], style: { color: 'rgb(130, 170, 255)' } },
            { types: ['punctuation', 'selector'], style: { color: 'rgb(199, 146, 234)' } },
            { types: ['variable'], style: { color: 'rgb(191, 199, 213)' } },
            { types: ['class-name', 'attr-name'], style: { color: 'rgb(255, 203, 107)' } },
            { types: ['tag', 'deleted'], style: { color: 'rgb(255, 85, 114)' } },
            { types: ['operator'], style: { color: 'rgb(137, 221, 255)' } },
            { types: ['boolean'], style: { color: 'rgb(255, 88, 116)' } },
            { types: ['keyword'], style: { fontStyle: 'italic' } },
            { types: ['doctype'], style: { color: 'rgb(199, 146, 234)', fontStyle: 'italic' } },
            { types: ['namespace'], style: { color: 'rgb(178, 204, 214)' } },
            { types: ['url'], style: { color: 'rgb(221, 221, 221)' } },
          ],
        },
        z = {
          plain: { color: '#9EFEFF', backgroundColor: '#2D2A55' },
          styles: [
            { types: ['changed'], style: { color: 'rgb(255, 238, 128)' } },
            { types: ['deleted'], style: { color: 'rgba(239, 83, 80, 0.56)' } },
            { types: ['inserted'], style: { color: 'rgb(173, 219, 103)' } },
            { types: ['comment'], style: { color: 'rgb(179, 98, 255)', fontStyle: 'italic' } },
            { types: ['punctuation'], style: { color: 'rgb(255, 255, 255)' } },
            { types: ['constant'], style: { color: 'rgb(255, 98, 140)' } },
            { types: ['string', 'url'], style: { color: 'rgb(165, 255, 144)' } },
            { types: ['variable'], style: { color: 'rgb(255, 238, 128)' } },
            { types: ['number', 'boolean'], style: { color: 'rgb(255, 98, 140)' } },
            { types: ['attr-name'], style: { color: 'rgb(255, 180, 84)' } },
            {
              types: ['keyword', 'operator', 'property', 'namespace', 'tag', 'selector', 'doctype'],
              style: { color: 'rgb(255, 157, 0)' },
            },
            { types: ['builtin', 'char', 'constant', 'function', 'class-name'], style: { color: 'rgb(250, 208, 0)' } },
          ],
        },
        B = {
          plain: {
            backgroundColor: 'linear-gradient(to bottom, #2a2139 75%, #34294f)',
            backgroundImage: '#34294f',
            color: '#f92aad',
            textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3',
          },
          styles: [
            {
              types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata'],
              style: { color: '#495495', fontStyle: 'italic' },
            },
            { types: ['punctuation'], style: { color: '#ccc' } },
            {
              types: ['tag', 'attr-name', 'namespace', 'number', 'unit', 'hexcode', 'deleted'],
              style: { color: '#e2777a' },
            },
            {
              types: ['property', 'selector'],
              style: { color: '#72f1b8', textShadow: '0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475' },
            },
            { types: ['function-name'], style: { color: '#6196cc' } },
            {
              types: ['boolean', 'selector-id', 'function'],
              style: {
                color: '#fdfdfd',
                textShadow: '0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975',
              },
            },
            {
              types: ['class-name', 'maybe-class-name', 'builtin'],
              style: {
                color: '#fff5f6',
                textShadow: '0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75',
              },
            },
            {
              types: ['constant', 'symbol'],
              style: { color: '#f92aad', textShadow: '0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3' },
            },
            {
              types: ['important', 'atrule', 'keyword', 'selector-class'],
              style: { color: '#f4eee4', textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575' },
            },
            { types: ['string', 'char', 'attr-value', 'regex', 'variable'], style: { color: '#f87c32' } },
            { types: ['parameter'], style: { fontStyle: 'italic' } },
            { types: ['entity', 'url'], style: { color: '#67cdcc' } },
            { types: ['operator'], style: { color: 'ffffffee' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['entity'], style: { cursor: 'help' } },
            { types: ['inserted'], style: { color: 'green' } },
          ],
        },
        $ = {
          plain: { color: '#282a2e', backgroundColor: '#ffffff' },
          styles: [
            { types: ['comment'], style: { color: 'rgb(197, 200, 198)' } },
            { types: ['string', 'number', 'builtin', 'variable'], style: { color: 'rgb(150, 152, 150)' } },
            { types: ['class-name', 'function', 'tag', 'attr-name'], style: { color: 'rgb(40, 42, 46)' } },
          ],
        },
        U = {
          plain: { color: '#9CDCFE', backgroundColor: '#1E1E1E' },
          styles: [
            { types: ['prolog'], style: { color: 'rgb(0, 0, 128)' } },
            { types: ['comment'], style: { color: 'rgb(106, 153, 85)' } },
            {
              types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'],
              style: { color: 'rgb(86, 156, 214)' },
            },
            { types: ['number', 'inserted'], style: { color: 'rgb(181, 206, 168)' } },
            { types: ['constant'], style: { color: 'rgb(100, 102, 149)' } },
            { types: ['attr-name', 'variable'], style: { color: 'rgb(156, 220, 254)' } },
            {
              types: ['deleted', 'string', 'attr-value', 'template-punctuation'],
              style: { color: 'rgb(206, 145, 120)' },
            },
            { types: ['selector'], style: { color: 'rgb(215, 186, 125)' } },
            { types: ['tag'], style: { color: 'rgb(78, 201, 176)' } },
            { types: ['tag'], languages: ['markup'], style: { color: 'rgb(86, 156, 214)' } },
            { types: ['punctuation', 'operator'], style: { color: 'rgb(212, 212, 212)' } },
            { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
            { types: ['function'], style: { color: 'rgb(220, 220, 170)' } },
            { types: ['class-name'], style: { color: 'rgb(78, 201, 176)' } },
            { types: ['char'], style: { color: 'rgb(209, 105, 105)' } },
          ],
        },
        q = {
          plain: { color: '#000000', backgroundColor: '#ffffff' },
          styles: [
            { types: ['comment'], style: { color: 'rgb(0, 128, 0)' } },
            { types: ['builtin'], style: { color: 'rgb(0, 112, 193)' } },
            { types: ['number', 'variable', 'inserted'], style: { color: 'rgb(9, 134, 88)' } },
            { types: ['operator'], style: { color: 'rgb(0, 0, 0)' } },
            { types: ['constant', 'char'], style: { color: 'rgb(129, 31, 63)' } },
            { types: ['tag'], style: { color: 'rgb(128, 0, 0)' } },
            { types: ['attr-name'], style: { color: 'rgb(255, 0, 0)' } },
            { types: ['deleted', 'string'], style: { color: 'rgb(163, 21, 21)' } },
            { types: ['changed', 'punctuation'], style: { color: 'rgb(4, 81, 165)' } },
            { types: ['function', 'keyword'], style: { color: 'rgb(0, 0, 255)' } },
            { types: ['class-name'], style: { color: 'rgb(38, 127, 153)' } },
          ],
        },
        H = {
          plain: { color: '#f8fafc', backgroundColor: '#011627' },
          styles: [
            { types: ['prolog'], style: { color: '#000080' } },
            { types: ['comment'], style: { color: '#6A9955' } },
            { types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'], style: { color: '#569CD6' } },
            { types: ['number', 'inserted'], style: { color: '#B5CEA8' } },
            { types: ['constant'], style: { color: '#f8fafc' } },
            { types: ['attr-name', 'variable'], style: { color: '#9CDCFE' } },
            { types: ['deleted', 'string', 'attr-value', 'template-punctuation'], style: { color: '#cbd5e1' } },
            { types: ['selector'], style: { color: '#D7BA7D' } },
            { types: ['tag'], style: { color: '#0ea5e9' } },
            { types: ['tag'], languages: ['markup'], style: { color: '#0ea5e9' } },
            { types: ['punctuation', 'operator'], style: { color: '#D4D4D4' } },
            { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
            { types: ['function'], style: { color: '#7dd3fc' } },
            { types: ['class-name'], style: { color: '#0ea5e9' } },
            { types: ['char'], style: { color: '#D16969' } },
          ],
        },
        G = {
          plain: { color: '#0f172a', backgroundColor: '#f1f5f9' },
          styles: [
            { types: ['prolog'], style: { color: '#000080' } },
            { types: ['comment'], style: { color: '#6A9955' } },
            { types: ['builtin', 'changed', 'keyword', 'interpolation-punctuation'], style: { color: '#0c4a6e' } },
            { types: ['number', 'inserted'], style: { color: '#B5CEA8' } },
            { types: ['constant'], style: { color: '#0f172a' } },
            { types: ['attr-name', 'variable'], style: { color: '#0c4a6e' } },
            { types: ['deleted', 'string', 'attr-value', 'template-punctuation'], style: { color: '#64748b' } },
            { types: ['selector'], style: { color: '#D7BA7D' } },
            { types: ['tag'], style: { color: '#0ea5e9' } },
            { types: ['tag'], languages: ['markup'], style: { color: '#0ea5e9' } },
            { types: ['punctuation', 'operator'], style: { color: '#475569' } },
            { types: ['punctuation'], languages: ['markup'], style: { color: '#808080' } },
            { types: ['function'], style: { color: '#0e7490' } },
            { types: ['class-name'], style: { color: '#0ea5e9' } },
            { types: ['char'], style: { color: '#D16969' } },
          ],
        },
        V = {
          plain: {
            backgroundColor: 'hsl(220, 13%, 18%)',
            color: 'hsl(220, 14%, 71%)',
            textShadow: '0 1px rgba(0, 0, 0, 0.3)',
          },
          styles: [
            { types: ['comment', 'prolog', 'cdata'], style: { color: 'hsl(220, 10%, 40%)' } },
            { types: ['doctype', 'punctuation', 'entity'], style: { color: 'hsl(220, 14%, 71%)' } },
            {
              types: ['attr-name', 'class-name', 'maybe-class-name', 'boolean', 'constant', 'number', 'atrule'],
              style: { color: 'hsl(29, 54%, 61%)' },
            },
            { types: ['keyword'], style: { color: 'hsl(286, 60%, 67%)' } },
            { types: ['property', 'tag', 'symbol', 'deleted', 'important'], style: { color: 'hsl(355, 65%, 65%)' } },
            {
              types: ['selector', 'string', 'char', 'builtin', 'inserted', 'regex', 'attr-value'],
              style: { color: 'hsl(95, 38%, 62%)' },
            },
            { types: ['variable', 'operator', 'function'], style: { color: 'hsl(207, 82%, 66%)' } },
            { types: ['url'], style: { color: 'hsl(187, 47%, 55%)' } },
            { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: 'hsl(220, 14%, 71%)' } },
          ],
        },
        W = {
          plain: { backgroundColor: 'hsl(230, 1%, 98%)', color: 'hsl(230, 8%, 24%)' },
          styles: [
            { types: ['comment', 'prolog', 'cdata'], style: { color: 'hsl(230, 4%, 64%)' } },
            { types: ['doctype', 'punctuation', 'entity'], style: { color: 'hsl(230, 8%, 24%)' } },
            {
              types: ['attr-name', 'class-name', 'boolean', 'constant', 'number', 'atrule'],
              style: { color: 'hsl(35, 99%, 36%)' },
            },
            { types: ['keyword'], style: { color: 'hsl(301, 63%, 40%)' } },
            { types: ['property', 'tag', 'symbol', 'deleted', 'important'], style: { color: 'hsl(5, 74%, 59%)' } },
            {
              types: ['selector', 'string', 'char', 'builtin', 'inserted', 'regex', 'attr-value', 'punctuation'],
              style: { color: 'hsl(119, 34%, 47%)' },
            },
            { types: ['variable', 'operator', 'function'], style: { color: 'hsl(221, 87%, 60%)' } },
            { types: ['url'], style: { color: 'hsl(198, 99%, 37%)' } },
            { types: ['deleted'], style: { textDecorationLine: 'line-through' } },
            { types: ['inserted'], style: { textDecorationLine: 'underline' } },
            { types: ['italic'], style: { fontStyle: 'italic' } },
            { types: ['important', 'bold'], style: { fontWeight: 'bold' } },
            { types: ['important'], style: { color: 'hsl(230, 8%, 24%)' } },
          ],
        },
        Q = {
          plain: { color: '#ebdbb2', backgroundColor: '#292828' },
          styles: [
            {
              types: ['imports', 'class-name', 'maybe-class-name', 'constant', 'doctype', 'builtin', 'function'],
              style: { color: '#d8a657' },
            },
            { types: ['property-access'], style: { color: '#7daea3' } },
            { types: ['tag'], style: { color: '#e78a4e' } },
            { types: ['attr-name', 'char', 'url', 'regex'], style: { color: '#a9b665' } },
            { types: ['attr-value', 'string'], style: { color: '#89b482' } },
            { types: ['comment', 'prolog', 'cdata', 'operator', 'inserted'], style: { color: '#a89984' } },
            {
              types: [
                'delimiter',
                'boolean',
                'keyword',
                'selector',
                'important',
                'atrule',
                'property',
                'variable',
                'deleted',
              ],
              style: { color: '#ea6962' },
            },
            { types: ['entity', 'number', 'symbol'], style: { color: '#d3869b' } },
          ],
        },
        K = {
          plain: { color: '#654735', backgroundColor: '#f9f5d7' },
          styles: [
            {
              types: [
                'delimiter',
                'boolean',
                'keyword',
                'selector',
                'important',
                'atrule',
                'property',
                'variable',
                'deleted',
              ],
              style: { color: '#af2528' },
            },
            {
              types: ['imports', 'class-name', 'maybe-class-name', 'constant', 'doctype', 'builtin'],
              style: { color: '#b4730e' },
            },
            { types: ['string', 'attr-value'], style: { color: '#477a5b' } },
            { types: ['property-access'], style: { color: '#266b79' } },
            { types: ['function', 'attr-name', 'char', 'url'], style: { color: '#72761e' } },
            { types: ['tag'], style: { color: '#b94c07' } },
            { types: ['comment', 'prolog', 'cdata', 'operator', 'inserted'], style: { color: '#a89984' } },
            { types: ['entity', 'number', 'symbol'], style: { color: '#924f79' } },
          ],
        },
        Y = /\r\n|\r|\n/,
        X = (e) => {
          0 === e.length
            ? e.push({ types: ['plain'], content: '\n', empty: !0 })
            : 1 === e.length && '' === e[0].content && ((e[0].content = '\n'), (e[0].empty = !0));
        },
        Z = (e, t) => {
          const n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        J = (e) => {
          const t = [[]],
            n = [e],
            r = [0],
            a = [e.length];
          let o = 0,
            i = 0,
            l = [];
          const s = [l];
          for (; i > -1; ) {
            for (; (o = r[i]++) < a[i]; ) {
              let e,
                u = t[i];
              const c = n[i][o];
              if (
                ('string' == typeof c
                  ? ((u = i > 0 ? u : ['plain']), (e = c))
                  : ((u = Z(u, c.type)), c.alias && (u = Z(u, c.alias)), (e = c.content)),
                'string' != typeof e)
              ) {
                i++, t.push(u), n.push(e), r.push(0), a.push(e.length);
                continue;
              }
              const d = e.split(Y),
                f = d.length;
              l.push({ types: u, content: d[0] });
              for (let t = 1; t < f; t++) X(l), s.push((l = [])), l.push({ types: u, content: d[t] });
            }
            i--, t.pop(), n.pop(), r.pop(), a.pop();
          }
          return X(l), s;
        },
        ee = (e, t) => {
          const { plain: n } = e,
            r = e.styles.reduce((e, n) => {
              const { languages: r, style: a } = n;
              return (
                (r && !r.includes(t)) ||
                  n.types.forEach((t) => {
                    const n = x(x({}, e[t]), a);
                    e[t] = n;
                  }),
                e
              );
            }, {});
          return (r.root = n), (r.plain = E(x({}, n), { backgroundColor: void 0 })), r;
        },
        te = ({ children: e, language: t, code: n, theme: r, prism: a }) => {
          const o = t.toLowerCase(),
            i = ee(r, o),
            l = ((e) =>
              (0, c.useCallback)(
                (t) => {
                  var n = t,
                    { className: r, style: a, line: o } = n,
                    i = _(n, ['className', 'style', 'line']);
                  const l = E(x({}, i), { className: (0, d.A)('token-line', r) });
                  return (
                    'object' == typeof e && 'plain' in e && (l.style = e.plain),
                    'object' == typeof a && (l.style = x(x({}, l.style || {}), a)),
                    l
                  );
                },
                [e]
              ))(i),
            s = ((e) => {
              const t = (0, c.useCallback)(
                ({ types: t, empty: n }) => {
                  if (null != e)
                    return 1 === t.length && 'plain' === t[0]
                      ? null != n
                        ? { display: 'inline-block' }
                        : void 0
                      : 1 === t.length && null != n
                      ? e[t[0]]
                      : Object.assign(null != n ? { display: 'inline-block' } : {}, ...t.map((t) => e[t]));
                },
                [e]
              );
              return (0, c.useCallback)(
                (e) => {
                  var n = e,
                    { token: r, className: a, style: o } = n,
                    i = _(n, ['token', 'className', 'style']);
                  const l = E(x({}, i), {
                    className: (0, d.A)('token', ...r.types, a),
                    children: r.content,
                    style: t(r),
                  });
                  return null != o && (l.style = x(x({}, l.style || {}), o)), l;
                },
                [t]
              );
            })(i),
            u = (({ prism: e, code: t, grammar: n, language: r }) =>
              (0, c.useMemo)(() => {
                if (null == n) return J([t]);
                const a = { code: t, grammar: n, language: r, tokens: [] };
                return (
                  e.hooks.run('before-tokenize', a),
                  (a.tokens = e.tokenize(t, n)),
                  e.hooks.run('after-tokenize', a),
                  J(a.tokens)
                );
              }, [t, n, r, e]))({ prism: a, language: o, code: n, grammar: a.languages[o] });
          return e({
            tokens: u,
            className: `prism-code language-${o}`,
            style: null != i ? i.root : {},
            getLineProps: l,
            getTokenProps: s,
          });
        },
        ne = (e) =>
          (0, c.createElement)(
            te,
            E(x({}, e), { prism: e.prism || A, theme: e.theme || U, code: e.code, language: e.language })
          );
    },
    7671: function (e, t, n) {
      var r, a;
      (r = function () {
        var e,
          t,
          n = { version: '0.2.0' },
          r = (n.settings = {
            minimum: 0.08,
            easing: 'ease',
            positionUsing: '',
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: 'body',
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
        function a(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function o(e) {
          return 100 * (-1 + e);
        }
        function i(e, t, n) {
          var a;
          return (
            ((a =
              'translate3d' === r.positionUsing
                ? { transform: 'translate3d(' + o(e) + '%,0,0)' }
                : 'translate' === r.positionUsing
                ? { transform: 'translate(' + o(e) + '%,0)' }
                : { 'margin-left': o(e) + '%' }).transition = 'all ' + t + 'ms ' + n),
            a
          );
        }
        (n.configure = function (e) {
          var t, n;
          for (t in e) void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
          return this;
        }),
          (n.status = null),
          (n.set = function (e) {
            var t = n.isStarted();
            (e = a(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
            var o = n.render(!t),
              u = o.querySelector(r.barSelector),
              c = r.speed,
              d = r.easing;
            return (
              o.offsetWidth,
              l(function (t) {
                '' === r.positionUsing && (r.positionUsing = n.getPositioningCSS()),
                  s(u, i(e, c, d)),
                  1 === e
                    ? (s(o, { transition: 'none', opacity: 1 }),
                      o.offsetWidth,
                      setTimeout(function () {
                        s(o, { transition: 'all ' + c + 'ms linear', opacity: 0 }),
                          setTimeout(function () {
                            n.remove(), t();
                          }, c);
                      }, c))
                    : setTimeout(t, c);
              }),
              this
            );
          }),
          (n.isStarted = function () {
            return 'number' == typeof n.status;
          }),
          (n.start = function () {
            n.status || n.set(0);
            var e = function () {
              setTimeout(function () {
                n.status && (n.trickle(), e());
              }, r.trickleSpeed);
            };
            return r.trickle && e(), this;
          }),
          (n.done = function (e) {
            return e || n.status ? n.inc(0.3 + 0.5 * Math.random()).set(1) : this;
          }),
          (n.inc = function (e) {
            var t = n.status;
            return t
              ? ('number' != typeof e && (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                (t = a(t + e, 0, 0.994)),
                n.set(t))
              : n.start();
          }),
          (n.trickle = function () {
            return n.inc(Math.random() * r.trickleRate);
          }),
          (e = 0),
          (t = 0),
          (n.promise = function (r) {
            return r && 'resolved' !== r.state()
              ? (0 === t && n.start(),
                e++,
                t++,
                r.always(function () {
                  0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                }),
                this)
              : this;
          }),
          (n.render = function (e) {
            if (n.isRendered()) return document.getElementById('nprogress');
            c(document.documentElement, 'nprogress-busy');
            var t = document.createElement('div');
            (t.id = 'nprogress'), (t.innerHTML = r.template);
            var a,
              i = t.querySelector(r.barSelector),
              l = e ? '-100' : o(n.status || 0),
              u = document.querySelector(r.parent);
            return (
              s(i, { transition: 'all 0 linear', transform: 'translate3d(' + l + '%,0,0)' }),
              r.showSpinner || ((a = t.querySelector(r.spinnerSelector)) && p(a)),
              u != document.body && c(u, 'nprogress-custom-parent'),
              u.appendChild(t),
              t
            );
          }),
          (n.remove = function () {
            d(document.documentElement, 'nprogress-busy'),
              d(document.querySelector(r.parent), 'nprogress-custom-parent');
            var e = document.getElementById('nprogress');
            e && p(e);
          }),
          (n.isRendered = function () {
            return !!document.getElementById('nprogress');
          }),
          (n.getPositioningCSS = function () {
            var e = document.body.style,
              t =
                'WebkitTransform' in e
                  ? 'Webkit'
                  : 'MozTransform' in e
                  ? 'Moz'
                  : 'msTransform' in e
                  ? 'ms'
                  : 'OTransform' in e
                  ? 'O'
                  : '';
            return t + 'Perspective' in e ? 'translate3d' : t + 'Transform' in e ? 'translate' : 'margin';
          });
        var l = (function () {
            var e = [];
            function t() {
              var n = e.shift();
              n && n(t);
            }
            return function (n) {
              e.push(n), 1 == e.length && t();
            };
          })(),
          s = (function () {
            var e = ['Webkit', 'O', 'Moz', 'ms'],
              t = {};
            function n(e) {
              return e.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function (e, t) {
                return t.toUpperCase();
              });
            }
            function r(t) {
              var n = document.body.style;
              if (t in n) return t;
              for (var r, a = e.length, o = t.charAt(0).toUpperCase() + t.slice(1); a--; )
                if ((r = e[a] + o) in n) return r;
              return t;
            }
            function a(e) {
              return (e = n(e)), t[e] || (t[e] = r(e));
            }
            function o(e, t, n) {
              (t = a(t)), (e.style[t] = n);
            }
            return function (e, t) {
              var n,
                r,
                a = arguments;
              if (2 == a.length) for (n in t) void 0 !== (r = t[n]) && t.hasOwnProperty(n) && o(e, n, r);
              else o(e, a[1], a[2]);
            };
          })();
        function u(e, t) {
          return ('string' == typeof e ? e : f(e)).indexOf(' ' + t + ' ') >= 0;
        }
        function c(e, t) {
          var n = f(e),
            r = n + t;
          u(n, t) || (e.className = r.substring(1));
        }
        function d(e, t) {
          var n,
            r = f(e);
          u(e, t) && ((n = r.replace(' ' + t + ' ', ' ')), (e.className = n.substring(1, n.length - 1)));
        }
        function f(e) {
          return (' ' + (e.className || '') + ' ').replace(/\s+/gi, ' ');
        }
        function p(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        return n;
      }),
        void 0 === (a = 'function' == typeof r ? r.call(t, n, t, e) : r) || (e.exports = a);
    },
    7904: (e, t, n) => {
      'use strict';
      var r = n(7663),
        a = n(4784);
      !(function (e) {
        const {
            themeConfig: { prism: t },
          } = a.default,
          { additionalLanguages: r } = t,
          o = globalThis.Prism;
        (globalThis.Prism = e),
          r.forEach((e) => {
            'php' === e && n(5968), n(1441)(`./prism-${e}`);
          }),
          delete globalThis.Prism,
          void 0 !== o && (globalThis.Prism = e);
      })(r.My);
    },
    7943: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => o });
      n(3696);
      var r = n(9005),
        a = n(2540);
      function o(e) {
        return (0, a.jsx)(r.mg, { ...e });
      }
    },
    7963: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => u, T: () => s });
      var r = n(3696),
        a = n(2540);
      function o(e, t) {
        const n = e.split(/(\{\w+\})/).map((e, n) => {
          if (n % 2 == 1) {
            const n = t?.[e.slice(1, -1)];
            if (void 0 !== n) return n;
          }
          return e;
        });
        return n.some((e) => (0, r.isValidElement)(e))
          ? n.map((e, t) => ((0, r.isValidElement)(e) ? r.cloneElement(e, { key: t }) : e)).filter((e) => '' !== e)
          : n.join('');
      }
      var i = n(2654);
      function l(e) {
        let { id: t, message: n } = e;
        if (void 0 === t && void 0 === n)
          throw new Error(
            'Docusaurus translation declarations must have at least a translation id or a default translation message'
          );
        return i[t ?? n] ?? n ?? t;
      }
      function s(e, t) {
        let { message: n, id: r } = e;
        return o(l({ message: n, id: r }), t);
      }
      function u(e) {
        let { children: t, id: n, values: r } = e;
        if (t && 'string' != typeof t)
          throw (
            (console.warn('Illegal <Translate> children', t),
            new Error('The Docusaurus <Translate> component only accept simple string values'))
          );
        const i = l({ message: t, id: n });
        return (0, a.jsx)(a.Fragment, { children: o(i, r) });
      }
    },
    7978: (e, t, n) => {
      'use strict';
      n.d(t, { l: () => l });
      var r = n(3696),
        a = n(9006);
      const o = { desktop: 'desktop', mobile: 'mobile', ssr: 'ssr' },
        i = 996;
      function l(e) {
        let { desktopBreakpoint: t = i } = void 0 === e ? {} : e;
        const [n, l] = (0, r.useState)(() => 'ssr');
        return (
          (0, r.useEffect)(() => {
            function e() {
              l(
                (function (e) {
                  if (!a.A.canUseDOM) throw new Error('getWindowSize() should only be called after React hydration');
                  return window.innerWidth > e ? o.desktop : o.mobile;
                })(t)
              );
            }
            return (
              e(),
              window.addEventListener('resize', e),
              () => {
                window.removeEventListener('resize', e);
              }
            );
          }, [t]),
          n
        );
      }
    },
    8004: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => o });
      n(3696);
      var r = n(7943),
        a = n(2540);
      function o(e) {
        let { locale: t, version: n, tag: o } = e;
        const i = t;
        return (0, a.jsxs)(r.A, {
          children: [
            t && (0, a.jsx)('meta', { name: 'docusaurus_locale', content: t }),
            n && (0, a.jsx)('meta', { name: 'docusaurus_version', content: n }),
            o && (0, a.jsx)('meta', { name: 'docusaurus_tag', content: o }),
            i && (0, a.jsx)('meta', { name: 'docsearch:language', content: i }),
            n && (0, a.jsx)('meta', { name: 'docsearch:version', content: n }),
            o && (0, a.jsx)('meta', { name: 'docsearch:docusaurus_tag', content: o }),
          ],
        });
      }
    },
    8102: (e, t, n) => {
      'use strict';
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(null, arguments)
        );
      }
      n.d(t, { A: () => r });
    },
    8131: (e, t, n) => {
      'use strict';
      var r = n(1434),
        a = n(3696),
        o = n(8325);
      function i(e) {
        var t = 'https://react.dev/errors/' + e;
        if (1 < arguments.length) {
          t += '?args[]=' + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++) t += '&args[]=' + encodeURIComponent(arguments[n]);
        }
        return (
          'Minified React error #' +
          e +
          '; visit ' +
          t +
          ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
        );
      }
      function l(e) {
        return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
      }
      var s = Symbol.for('react.element'),
        u = Symbol.for('react.transitional.element'),
        c = Symbol.for('react.portal'),
        d = Symbol.for('react.fragment'),
        f = Symbol.for('react.strict_mode'),
        p = Symbol.for('react.profiler'),
        m = Symbol.for('react.provider'),
        h = Symbol.for('react.consumer'),
        g = Symbol.for('react.context'),
        y = Symbol.for('react.forward_ref'),
        b = Symbol.for('react.suspense'),
        v = Symbol.for('react.suspense_list'),
        w = Symbol.for('react.memo'),
        k = Symbol.for('react.lazy');
      Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
      var S = Symbol.for('react.offscreen');
      Symbol.for('react.legacy_hidden'), Symbol.for('react.tracing_marker');
      var x = Symbol.for('react.memo_cache_sentinel'),
        E = Symbol.iterator;
      function _(e) {
        return null === e || 'object' != typeof e
          ? null
          : 'function' == typeof (e = (E && e[E]) || e['@@iterator'])
          ? e
          : null;
      }
      var C = Symbol.for('react.client.reference');
      function A(e) {
        if (null == e) return null;
        if ('function' == typeof e) return e.$$typeof === C ? null : e.displayName || e.name || null;
        if ('string' == typeof e) return e;
        switch (e) {
          case d:
            return 'Fragment';
          case c:
            return 'Portal';
          case p:
            return 'Profiler';
          case f:
            return 'StrictMode';
          case b:
            return 'Suspense';
          case v:
            return 'SuspenseList';
        }
        if ('object' == typeof e)
          switch (e.$$typeof) {
            case g:
              return (e.displayName || 'Context') + '.Provider';
            case h:
              return (e._context.displayName || 'Context') + '.Consumer';
            case y:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e = '' !== (e = t.displayName || t.name || '') ? 'ForwardRef(' + e + ')' : 'ForwardRef'),
                e
              );
            case w:
              return null !== (t = e.displayName || null) ? t : A(e.type) || 'Memo';
            case k:
              (t = e._payload), (e = e._init);
              try {
                return A(e(t));
              } catch (n) {}
          }
        return null;
      }
      var T,
        j,
        P = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        N = Object.assign;
      function O(e) {
        if (void 0 === T)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            (T = (t && t[1]) || ''),
              (j =
                -1 < n.stack.indexOf('\n    at') ? ' (<anonymous>)' : -1 < n.stack.indexOf('@') ? '@unknown:0:0' : '');
          }
        return '\n' + T + e + j;
      }
      var L = !1;
      function R(e, t) {
        if (!e || L) return '';
        L = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var r = {
            DetermineComponentFrameRoot: function () {
              try {
                if (t) {
                  var n = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(n.prototype, 'props', {
                      set: function () {
                        throw Error();
                      },
                    }),
                    'object' == typeof Reflect && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(n, []);
                    } catch (a) {
                      var r = a;
                    }
                    Reflect.construct(e, [], n);
                  } else {
                    try {
                      n.call();
                    } catch (o) {
                      r = o;
                    }
                    e.call(n.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (i) {
                    r = i;
                  }
                  (n = e()) && 'function' == typeof n.catch && n.catch(function () {});
                }
              } catch (l) {
                if (l && r && 'string' == typeof l.stack) return [l.stack, r.stack];
              }
              return [null, null];
            },
          };
          r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
          var a = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, 'name');
          a &&
            a.configurable &&
            Object.defineProperty(r.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' });
          var o = r.DetermineComponentFrameRoot(),
            i = o[0],
            l = o[1];
          if (i && l) {
            var s = i.split('\n'),
              u = l.split('\n');
            for (a = r = 0; r < s.length && !s[r].includes('DetermineComponentFrameRoot'); ) r++;
            for (; a < u.length && !u[a].includes('DetermineComponentFrameRoot'); ) a++;
            if (r === s.length || a === u.length)
              for (r = s.length - 1, a = u.length - 1; 1 <= r && 0 <= a && s[r] !== u[a]; ) a--;
            for (; 1 <= r && 0 <= a; r--, a--)
              if (s[r] !== u[a]) {
                if (1 !== r || 1 !== a)
                  do {
                    if ((r--, 0 > --a || s[r] !== u[a])) {
                      var c = '\n' + s[r].replace(' at new ', ' at ');
                      return (
                        e.displayName && c.includes('<anonymous>') && (c = c.replace('<anonymous>', e.displayName)), c
                      );
                    }
                  } while (1 <= r && 0 <= a);
                break;
              }
          }
        } finally {
          (L = !1), (Error.prepareStackTrace = n);
        }
        return (n = e ? e.displayName || e.name : '') ? O(n) : '';
      }
      function D(e) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return O(e.type);
          case 16:
            return O('Lazy');
          case 13:
            return O('Suspense');
          case 19:
            return O('SuspenseList');
          case 0:
          case 15:
            return (e = R(e.type, !1));
          case 11:
            return (e = R(e.type.render, !1));
          case 1:
            return (e = R(e.type, !0));
          default:
            return '';
        }
      }
      function F(e) {
        try {
          var t = '';
          do {
            (t += D(e)), (e = e.return);
          } while (e);
          return t;
        } catch (n) {
          return '\nError generating stack: ' + n.message + '\n' + n.stack;
        }
      }
      function I(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            !!(4098 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function M(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
        }
        return null;
      }
      function z(e) {
        if (I(e) !== e) throw Error(i(188));
      }
      function B(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e;
        for (e = e.child; null !== e; ) {
          if (null !== (t = B(e))) return t;
          e = e.sibling;
        }
        return null;
      }
      var $ = Array.isArray,
        U = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        q = { pending: !1, data: null, method: null, action: null },
        H = [],
        G = -1;
      function V(e) {
        return { current: e };
      }
      function W(e) {
        0 > G || ((e.current = H[G]), (H[G] = null), G--);
      }
      function Q(e, t) {
        G++, (H[G] = e.current), (e.current = t);
      }
      var K = V(null),
        Y = V(null),
        X = V(null),
        Z = V(null);
      function J(e, t) {
        switch ((Q(X, t), Q(Y, e), Q(K, null), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) && (t = t.namespaceURI) ? Yc(t) : 0;
            break;
          default:
            if (((t = (e = 8 === e ? t.parentNode : t).tagName), (e = e.namespaceURI))) t = Xc((e = Yc(e)), t);
            else
              switch (t) {
                case 'svg':
                  t = 1;
                  break;
                case 'math':
                  t = 2;
                  break;
                default:
                  t = 0;
              }
        }
        W(K), Q(K, t);
      }
      function ee() {
        W(K), W(Y), W(X);
      }
      function te(e) {
        null !== e.memoizedState && Q(Z, e);
        var t = K.current,
          n = Xc(t, e.type);
        t !== n && (Q(Y, e), Q(K, n));
      }
      function ne(e) {
        Y.current === e && (W(K), W(Y)), Z.current === e && (W(Z), (Fd._currentValue = q));
      }
      var re = Object.prototype.hasOwnProperty,
        ae = r.unstable_scheduleCallback,
        oe = r.unstable_cancelCallback,
        ie = r.unstable_shouldYield,
        le = r.unstable_requestPaint,
        se = r.unstable_now,
        ue = r.unstable_getCurrentPriorityLevel,
        ce = r.unstable_ImmediatePriority,
        de = r.unstable_UserBlockingPriority,
        fe = r.unstable_NormalPriority,
        pe = r.unstable_LowPriority,
        me = r.unstable_IdlePriority,
        he = r.log,
        ge = r.unstable_setDisableYieldValue,
        ye = null,
        be = null;
      function ve(e) {
        if (('function' == typeof he && ge(e), be && 'function' == typeof be.setStrictMode))
          try {
            be.setStrictMode(ye, e);
          } catch (t) {}
      }
      var we = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === (e >>>= 0) ? 32 : (31 - ((ke(e) / Se) | 0)) | 0;
            },
        ke = Math.log,
        Se = Math.LN2;
      var xe = 128,
        Ee = 4194304;
      function _e(e) {
        var t = 42 & e;
        if (0 !== t) return t;
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194176 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return 62914560 & e;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return e;
        }
      }
      function Ce(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return 0;
        var r = 0,
          a = e.suspendedLanes,
          o = e.pingedLanes,
          i = e.warmLanes;
        e = 0 !== e.finishedLanes;
        var l = 134217727 & n;
        return (
          0 !== l
            ? 0 !== (n = l & ~a)
              ? (r = _e(n))
              : 0 !== (o &= l)
              ? (r = _e(o))
              : e || (0 !== (i = l & ~i) && (r = _e(i)))
            : 0 !== (l = n & ~a)
            ? (r = _e(l))
            : 0 !== o
            ? (r = _e(o))
            : e || (0 !== (i = n & ~i) && (r = _e(i))),
          0 === r
            ? 0
            : 0 !== t && t !== r && !(t & a) && ((a = r & -r) >= (i = t & -t) || (32 === a && 4194176 & i))
            ? t
            : r
        );
      }
      function Ae(e, t) {
        return !(e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t);
      }
      function Te(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
            return t + 250;
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function je() {
        var e = xe;
        return !(4194176 & (xe <<= 1)) && (xe = 128), e;
      }
      function Pe() {
        var e = Ee;
        return !(62914560 & (Ee <<= 1)) && (Ee = 4194304), e;
      }
      function Ne(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Oe(e, t) {
        (e.pendingLanes |= t), 268435456 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
      }
      function Le(e, t, n) {
        (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
        var r = 31 - we(t);
        (e.entangledLanes |= t), (e.entanglements[r] = 1073741824 | e.entanglements[r] | (4194218 & n));
      }
      function Re(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          var r = 31 - we(n),
            a = 1 << r;
          (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
        }
      }
      function De(e) {
        return 2 < (e &= -e) ? (8 < e ? (134217727 & e ? 32 : 268435456) : 8) : 2;
      }
      function Fe() {
        var e = U.p;
        return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Xd(e.type);
      }
      var Ie = Math.random().toString(36).slice(2),
        Me = '__reactFiber$' + Ie,
        ze = '__reactProps$' + Ie,
        Be = '__reactContainer$' + Ie,
        $e = '__reactEvents$' + Ie,
        Ue = '__reactListeners$' + Ie,
        qe = '__reactHandles$' + Ie,
        He = '__reactResources$' + Ie,
        Ge = '__reactMarker$' + Ie;
      function Ve(e) {
        delete e[Me], delete e[ze], delete e[$e], delete e[Ue], delete e[qe];
      }
      function We(e) {
        var t = e[Me];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Be] || n[Me])) {
            if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
              for (e = sd(e); null !== e; ) {
                if ((n = e[Me])) return n;
                e = sd(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function Qe(e) {
        if ((e = e[Me] || e[Be])) {
          var t = e.tag;
          if (5 === t || 6 === t || 13 === t || 26 === t || 27 === t || 3 === t) return e;
        }
        return null;
      }
      function Ke(e) {
        var t = e.tag;
        if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
        throw Error(i(33));
      }
      function Ye(e) {
        var t = e[He];
        return t || (t = e[He] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t;
      }
      function Xe(e) {
        e[Ge] = !0;
      }
      var Ze = new Set(),
        Je = {};
      function et(e, t) {
        tt(e, t), tt(e + 'Capture', t);
      }
      function tt(e, t) {
        for (Je[e] = t, e = 0; e < t.length; e++) Ze.add(t[e]);
      }
      var nt = !(
          'undefined' == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        rt = RegExp(
          '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
        ),
        at = {},
        ot = {};
      function it(e, t, n) {
        if (((a = t), re.call(ot, a) || (!re.call(at, a) && (rt.test(a) ? (ot[a] = !0) : ((at[a] = !0), 0)))))
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case 'undefined':
              case 'function':
              case 'symbol':
                return void e.removeAttribute(t);
              case 'boolean':
                var r = t.toLowerCase().slice(0, 5);
                if ('data-' !== r && 'aria-' !== r) return void e.removeAttribute(t);
            }
            e.setAttribute(t, '' + n);
          }
        var a;
      }
      function lt(e, t, n) {
        if (null === n) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case 'undefined':
            case 'function':
            case 'symbol':
            case 'boolean':
              return void e.removeAttribute(t);
          }
          e.setAttribute(t, '' + n);
        }
      }
      function st(e, t, n, r) {
        if (null === r) e.removeAttribute(n);
        else {
          switch (typeof r) {
            case 'undefined':
            case 'function':
            case 'symbol':
            case 'boolean':
              return void e.removeAttribute(n);
          }
          e.setAttributeNS(t, n, '' + r);
        }
      }
      function ut(e) {
        switch (typeof e) {
          case 'bigint':
          case 'boolean':
          case 'number':
          case 'string':
          case 'undefined':
          case 'object':
            return e;
          default:
            return '';
        }
      }
      function ct(e) {
        var t = e.type;
        return (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t);
      }
      function dt(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = ct(e) ? 'checked' : 'value',
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = '' + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && 'function' == typeof n.get && 'function' == typeof n.set) {
              var a = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = '' + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = '' + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function ft(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = '';
        return e && (r = ct(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r) !== n && (t.setValue(e), !0);
      }
      function pt(e) {
        if (void 0 === (e = e || ('undefined' != typeof document ? document : void 0))) return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      var mt = /[\n"\\]/g;
      function ht(e) {
        return e.replace(mt, function (e) {
          return '\\' + e.charCodeAt(0).toString(16) + ' ';
        });
      }
      function gt(e, t, n, r, a, o, i, l) {
        (e.name = ''),
          null != i && 'function' != typeof i && 'symbol' != typeof i && 'boolean' != typeof i
            ? (e.type = i)
            : e.removeAttribute('type'),
          null != t
            ? 'number' === i
              ? ((0 === t && '' === e.value) || e.value != t) && (e.value = '' + ut(t))
              : e.value !== '' + ut(t) && (e.value = '' + ut(t))
            : ('submit' !== i && 'reset' !== i) || e.removeAttribute('value'),
          null != t ? bt(e, i, ut(t)) : null != n ? bt(e, i, ut(n)) : null != r && e.removeAttribute('value'),
          null == a && null != o && (e.defaultChecked = !!o),
          null != a && (e.checked = a && 'function' != typeof a && 'symbol' != typeof a),
          null != l && 'function' != typeof l && 'symbol' != typeof l && 'boolean' != typeof l
            ? (e.name = '' + ut(l))
            : e.removeAttribute('name');
      }
      function yt(e, t, n, r, a, o, i, l) {
        if (
          (null != o && 'function' != typeof o && 'symbol' != typeof o && 'boolean' != typeof o && (e.type = o),
          null != t || null != n)
        ) {
          if (('submit' === o || 'reset' === o) && null == t) return;
          (n = null != n ? '' + ut(n) : ''),
            (t = null != t ? '' + ut(t) : n),
            l || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        (r = 'function' != typeof (r = null != r ? r : a) && 'symbol' != typeof r && !!r),
          (e.checked = l ? e.checked : !!r),
          (e.defaultChecked = !!r),
          null != i && 'function' != typeof i && 'symbol' != typeof i && 'boolean' != typeof i && (e.name = i);
      }
      function bt(e, t, n) {
        ('number' === t && pt(e.ownerDocument) === e) || e.defaultValue === '' + n || (e.defaultValue = '' + n);
      }
      function vt(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty('$' + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = '' + ut(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n) return (e[a].selected = !0), void (r && (e[a].defaultSelected = !0));
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function wt(e, t, n) {
        null == t || ((t = '' + ut(t)) !== e.value && (e.value = t), null != n)
          ? (e.defaultValue = null != n ? '' + ut(n) : '')
          : e.defaultValue !== t && (e.defaultValue = t);
      }
      function kt(e, t, n, r) {
        if (null == t) {
          if (null != r) {
            if (null != n) throw Error(i(92));
            if ($(r)) {
              if (1 < r.length) throw Error(i(93));
              r = r[0];
            }
            n = r;
          }
          null == n && (n = ''), (t = n);
        }
        (n = ut(t)), (e.defaultValue = n), (r = e.textContent) === n && '' !== r && null !== r && (e.value = r);
      }
      function St(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var xt = new Set(
        'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
          ' '
        )
      );
      function Et(e, t, n) {
        var r = 0 === t.indexOf('--');
        null == n || 'boolean' == typeof n || '' === n
          ? r
            ? e.setProperty(t, '')
            : 'float' === t
            ? (e.cssFloat = '')
            : (e[t] = '')
          : r
          ? e.setProperty(t, n)
          : 'number' != typeof n || 0 === n || xt.has(t)
          ? 'float' === t
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
      }
      function _t(e, t, n) {
        if (null != t && 'object' != typeof t) throw Error(i(62));
        if (((e = e.style), null != n)) {
          for (var r in n)
            !n.hasOwnProperty(r) ||
              (null != t && t.hasOwnProperty(r)) ||
              (0 === r.indexOf('--') ? e.setProperty(r, '') : 'float' === r ? (e.cssFloat = '') : (e[r] = ''));
          for (var a in t) (r = t[a]), t.hasOwnProperty(a) && n[a] !== r && Et(e, a, r);
        } else for (var o in t) t.hasOwnProperty(o) && Et(e, o, t[o]);
      }
      function Ct(e) {
        if (-1 === e.indexOf('-')) return !1;
        switch (e) {
          case 'annotation-xml':
          case 'color-profile':
          case 'font-face':
          case 'font-face-src':
          case 'font-face-uri':
          case 'font-face-format':
          case 'font-face-name':
          case 'missing-glyph':
            return !1;
          default:
            return !0;
        }
      }
      var At = new Map([
          ['acceptCharset', 'accept-charset'],
          ['htmlFor', 'for'],
          ['httpEquiv', 'http-equiv'],
          ['crossOrigin', 'crossorigin'],
          ['accentHeight', 'accent-height'],
          ['alignmentBaseline', 'alignment-baseline'],
          ['arabicForm', 'arabic-form'],
          ['baselineShift', 'baseline-shift'],
          ['capHeight', 'cap-height'],
          ['clipPath', 'clip-path'],
          ['clipRule', 'clip-rule'],
          ['colorInterpolation', 'color-interpolation'],
          ['colorInterpolationFilters', 'color-interpolation-filters'],
          ['colorProfile', 'color-profile'],
          ['colorRendering', 'color-rendering'],
          ['dominantBaseline', 'dominant-baseline'],
          ['enableBackground', 'enable-background'],
          ['fillOpacity', 'fill-opacity'],
          ['fillRule', 'fill-rule'],
          ['floodColor', 'flood-color'],
          ['floodOpacity', 'flood-opacity'],
          ['fontFamily', 'font-family'],
          ['fontSize', 'font-size'],
          ['fontSizeAdjust', 'font-size-adjust'],
          ['fontStretch', 'font-stretch'],
          ['fontStyle', 'font-style'],
          ['fontVariant', 'font-variant'],
          ['fontWeight', 'font-weight'],
          ['glyphName', 'glyph-name'],
          ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
          ['glyphOrientationVertical', 'glyph-orientation-vertical'],
          ['horizAdvX', 'horiz-adv-x'],
          ['horizOriginX', 'horiz-origin-x'],
          ['imageRendering', 'image-rendering'],
          ['letterSpacing', 'letter-spacing'],
          ['lightingColor', 'lighting-color'],
          ['markerEnd', 'marker-end'],
          ['markerMid', 'marker-mid'],
          ['markerStart', 'marker-start'],
          ['overlinePosition', 'overline-position'],
          ['overlineThickness', 'overline-thickness'],
          ['paintOrder', 'paint-order'],
          ['panose-1', 'panose-1'],
          ['pointerEvents', 'pointer-events'],
          ['renderingIntent', 'rendering-intent'],
          ['shapeRendering', 'shape-rendering'],
          ['stopColor', 'stop-color'],
          ['stopOpacity', 'stop-opacity'],
          ['strikethroughPosition', 'strikethrough-position'],
          ['strikethroughThickness', 'strikethrough-thickness'],
          ['strokeDasharray', 'stroke-dasharray'],
          ['strokeDashoffset', 'stroke-dashoffset'],
          ['strokeLinecap', 'stroke-linecap'],
          ['strokeLinejoin', 'stroke-linejoin'],
          ['strokeMiterlimit', 'stroke-miterlimit'],
          ['strokeOpacity', 'stroke-opacity'],
          ['strokeWidth', 'stroke-width'],
          ['textAnchor', 'text-anchor'],
          ['textDecoration', 'text-decoration'],
          ['textRendering', 'text-rendering'],
          ['transformOrigin', 'transform-origin'],
          ['underlinePosition', 'underline-position'],
          ['underlineThickness', 'underline-thickness'],
          ['unicodeBidi', 'unicode-bidi'],
          ['unicodeRange', 'unicode-range'],
          ['unitsPerEm', 'units-per-em'],
          ['vAlphabetic', 'v-alphabetic'],
          ['vHanging', 'v-hanging'],
          ['vIdeographic', 'v-ideographic'],
          ['vMathematical', 'v-mathematical'],
          ['vectorEffect', 'vector-effect'],
          ['vertAdvY', 'vert-adv-y'],
          ['vertOriginX', 'vert-origin-x'],
          ['vertOriginY', 'vert-origin-y'],
          ['wordSpacing', 'word-spacing'],
          ['writingMode', 'writing-mode'],
          ['xmlnsXlink', 'xmlns:xlink'],
          ['xHeight', 'x-height'],
        ]),
        Tt =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
      function jt(e) {
        return Tt.test('' + e)
          ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
          : e;
      }
      var Pt = null;
      function Nt(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ot = null,
        Lt = null;
      function Rt(e) {
        var t = Qe(e);
        if (t && (e = t.stateNode)) {
          var n = e[ze] || null;
          e: switch (((e = t.stateNode), t.type)) {
            case 'input':
              if (
                (gt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name),
                (t = n.name),
                'radio' === n.type && null != t)
              ) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll('input[name="' + ht('' + t) + '"][type="radio"]'), t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = r[ze] || null;
                    if (!a) throw Error(i(90));
                    gt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                  }
                }
                for (t = 0; t < n.length; t++) (r = n[t]).form === e.form && ft(r);
              }
              break e;
            case 'textarea':
              wt(e, n.value, n.defaultValue);
              break e;
            case 'select':
              null != (t = n.value) && vt(e, !!n.multiple, t, !1);
          }
        }
      }
      var Dt = !1;
      function Ft(e, t, n) {
        if (Dt) return e(t, n);
        Dt = !0;
        try {
          return e(t);
        } finally {
          if (
            ((Dt = !1), (null !== Ot || null !== Lt) && (Mu(), Ot && ((t = Ot), (e = Lt), (Lt = Ot = null), Rt(t), e)))
          )
            for (t = 0; t < e.length; t++) Rt(e[t]);
        }
      }
      function It(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = n[ze] || null;
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case 'onClick':
          case 'onClickCapture':
          case 'onDoubleClick':
          case 'onDoubleClickCapture':
          case 'onMouseDown':
          case 'onMouseDownCapture':
          case 'onMouseMove':
          case 'onMouseMoveCapture':
          case 'onMouseUp':
          case 'onMouseUpCapture':
          case 'onMouseEnter':
            (r = !r.disabled) ||
              (r = !('button' === (e = e.type) || 'input' === e || 'select' === e || 'textarea' === e)),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && 'function' != typeof n) throw Error(i(231, t, typeof n));
        return n;
      }
      var Mt = !1;
      if (nt)
        try {
          var zt = {};
          Object.defineProperty(zt, 'passive', {
            get: function () {
              Mt = !0;
            },
          }),
            window.addEventListener('test', zt, zt),
            window.removeEventListener('test', zt, zt);
        } catch (Sf) {
          Mt = !1;
        }
      var Bt = null,
        $t = null,
        Ut = null;
      function qt() {
        if (Ut) return Ut;
        var e,
          t,
          n = $t,
          r = n.length,
          a = 'value' in Bt ? Bt.value : Bt.textContent,
          o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return (Ut = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function Ht(e) {
        var t = e.keyCode;
        return (
          'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function Gt() {
        return !0;
      }
      function Vt() {
        return !1;
      }
      function Wt(e) {
        function t(t, n, r, a, o) {
          for (var i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
          return (
            (this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue)
              ? Gt
              : Vt),
            (this.isPropagationStopped = Vt),
            this
          );
        }
        return (
          N(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault ? e.preventDefault() : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = Gt));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation ? e.stopPropagation() : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = Gt));
            },
            persist: function () {},
            isPersistent: Gt,
          }),
          t
        );
      }
      var Qt,
        Kt,
        Yt,
        Xt = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        Zt = Wt(Xt),
        Jt = N({}, Xt, { view: 0, detail: 0 }),
        en = Wt(Jt),
        tn = N({}, Jt, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: pn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return 'movementX' in e
              ? e.movementX
              : (e !== Yt &&
                  (Yt && 'mousemove' === e.type
                    ? ((Qt = e.screenX - Yt.screenX), (Kt = e.screenY - Yt.screenY))
                    : (Kt = Qt = 0),
                  (Yt = e)),
                Qt);
          },
          movementY: function (e) {
            return 'movementY' in e ? e.movementY : Kt;
          },
        }),
        nn = Wt(tn),
        rn = Wt(N({}, tn, { dataTransfer: 0 })),
        an = Wt(N({}, Jt, { relatedTarget: 0 })),
        on = Wt(N({}, Xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
        ln = Wt(
          N({}, Xt, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          })
        ),
        sn = Wt(N({}, Xt, { data: 0 })),
        un = {
          Esc: 'Escape',
          Spacebar: ' ',
          Left: 'ArrowLeft',
          Up: 'ArrowUp',
          Right: 'ArrowRight',
          Down: 'ArrowDown',
          Del: 'Delete',
          Win: 'OS',
          Menu: 'ContextMenu',
          Apps: 'ContextMenu',
          Scroll: 'ScrollLock',
          MozPrintableKey: 'Unidentified',
        },
        cn = {
          8: 'Backspace',
          9: 'Tab',
          12: 'Clear',
          13: 'Enter',
          16: 'Shift',
          17: 'Control',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Escape',
          32: ' ',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'ArrowLeft',
          38: 'ArrowUp',
          39: 'ArrowRight',
          40: 'ArrowDown',
          45: 'Insert',
          46: 'Delete',
          112: 'F1',
          113: 'F2',
          114: 'F3',
          115: 'F4',
          116: 'F5',
          117: 'F6',
          118: 'F7',
          119: 'F8',
          120: 'F9',
          121: 'F10',
          122: 'F11',
          123: 'F12',
          144: 'NumLock',
          145: 'ScrollLock',
          224: 'Meta',
        },
        dn = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
      function fn(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = dn[e]) && !!t[e];
      }
      function pn() {
        return fn;
      }
      var mn = Wt(
          N({}, Jt, {
            key: function (e) {
              if (e.key) {
                var t = un[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = Ht(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? cn[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: pn,
            charCode: function (e) {
              return 'keypress' === e.type ? Ht(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type ? Ht(e) : 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
          })
        ),
        hn = Wt(
          N({}, tn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        gn = Wt(
          N({}, Jt, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: pn,
          })
        ),
        yn = Wt(N({}, Xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
        bn = Wt(
          N({}, tn, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        vn = Wt(N({}, Xt, { newState: 0, oldState: 0 })),
        wn = [9, 13, 27, 32],
        kn = nt && 'CompositionEvent' in window,
        Sn = null;
      nt && 'documentMode' in document && (Sn = document.documentMode);
      var xn = nt && 'TextEvent' in window && !Sn,
        En = nt && (!kn || (Sn && 8 < Sn && 11 >= Sn)),
        _n = String.fromCharCode(32),
        Cn = !1;
      function An(e, t) {
        switch (e) {
          case 'keyup':
            return -1 !== wn.indexOf(t.keyCode);
          case 'keydown':
            return 229 !== t.keyCode;
          case 'keypress':
          case 'mousedown':
          case 'focusout':
            return !0;
          default:
            return !1;
        }
      }
      function Tn(e) {
        return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null;
      }
      var jn = !1;
      var Pn = {
        color: !0,
        date: !0,
        datetime: !0,
        'datetime-local': !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Nn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return 'input' === t ? !!Pn[e.type] : 'textarea' === t;
      }
      function On(e, t, n, r) {
        Ot ? (Lt ? Lt.push(r) : (Lt = [r])) : (Ot = r),
          0 < (t = Fc(t, 'onChange')).length &&
            ((n = new Zt('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }));
      }
      var Ln = null,
        Rn = null;
      function Dn(e) {
        Tc(e, 0);
      }
      function Fn(e) {
        if (ft(Ke(e))) return e;
      }
      function In(e, t) {
        if ('change' === e) return t;
      }
      var Mn = !1;
      if (nt) {
        var zn;
        if (nt) {
          var Bn = 'oninput' in document;
          if (!Bn) {
            var $n = document.createElement('div');
            $n.setAttribute('oninput', 'return;'), (Bn = 'function' == typeof $n.oninput);
          }
          zn = Bn;
        } else zn = !1;
        Mn = zn && (!document.documentMode || 9 < document.documentMode);
      }
      function Un() {
        Ln && (Ln.detachEvent('onpropertychange', qn), (Rn = Ln = null));
      }
      function qn(e) {
        if ('value' === e.propertyName && Fn(Rn)) {
          var t = [];
          On(t, Rn, e, Nt(e)), Ft(Dn, t);
        }
      }
      function Hn(e, t, n) {
        'focusin' === e ? (Un(), (Rn = n), (Ln = t).attachEvent('onpropertychange', qn)) : 'focusout' === e && Un();
      }
      function Gn(e) {
        if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Fn(Rn);
      }
      function Vn(e, t) {
        if ('click' === e) return Fn(t);
      }
      function Wn(e, t) {
        if ('input' === e || 'change' === e) return Fn(t);
      }
      var Qn =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
            };
      function Kn(e, t) {
        if (Qn(e, t)) return !0;
        if ('object' != typeof e || null === e || 'object' != typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var a = n[r];
          if (!re.call(t, a) || !Qn(e[a], t[a])) return !1;
        }
        return !0;
      }
      function Yn(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function Xn(e, t) {
        var n,
          r = Yn(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = Yn(r);
        }
      }
      function Zn(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? Zn(e, t.parentNode)
                : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function Jn(e) {
        for (
          var t = pt(
            (e =
              null != e && null != e.ownerDocument && null != e.ownerDocument.defaultView
                ? e.ownerDocument.defaultView
                : window).document
          );
          t instanceof e.HTMLIFrameElement;

        ) {
          try {
            var n = 'string' == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = pt((e = t.contentWindow).document);
        }
        return t;
      }
      function er(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (('input' === t &&
            ('text' === e.type ||
              'search' === e.type ||
              'tel' === e.type ||
              'url' === e.type ||
              'password' === e.type)) ||
            'textarea' === t ||
            'true' === e.contentEditable)
        );
      }
      function tr(e, t) {
        var n = Jn(t);
        t = e.focusedElem;
        var r = e.selectionRange;
        if (n !== t && t && t.ownerDocument && Zn(t.ownerDocument.documentElement, t)) {
          if (null !== r && er(t))
            if (((e = r.start), void 0 === (n = r.end) && (n = e), 'selectionStart' in t))
              (t.selectionStart = e), (t.selectionEnd = Math.min(n, t.value.length));
            else if ((n = ((e = t.ownerDocument || document) && e.defaultView) || window).getSelection) {
              n = n.getSelection();
              var a = t.textContent.length,
                o = Math.min(r.start, a);
              (r = void 0 === r.end ? o : Math.min(r.end, a)),
                !n.extend && o > r && ((a = r), (r = o), (o = a)),
                (a = Xn(t, o));
              var i = Xn(t, r);
              a &&
                i &&
                (1 !== n.rangeCount ||
                  n.anchorNode !== a.node ||
                  n.anchorOffset !== a.offset ||
                  n.focusNode !== i.node ||
                  n.focusOffset !== i.offset) &&
                ((e = e.createRange()).setStart(a.node, a.offset),
                n.removeAllRanges(),
                o > r ? (n.addRange(e), n.extend(i.node, i.offset)) : (e.setEnd(i.node, i.offset), n.addRange(e)));
            }
          for (e = [], n = t; (n = n.parentNode); )
            1 === n.nodeType && e.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
          for ('function' == typeof t.focus && t.focus(), t = 0; t < e.length; t++)
            ((n = e[t]).element.scrollLeft = n.left), (n.element.scrollTop = n.top);
        }
      }
      var nr = nt && 'documentMode' in document && 11 >= document.documentMode,
        rr = null,
        ar = null,
        or = null,
        ir = !1;
      function lr(e, t, n) {
        var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        ir ||
          null == rr ||
          rr !== pt(r) ||
          ('selectionStart' in (r = rr) && er(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                  .anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (or && Kn(or, r)) ||
            ((or = r),
            0 < (r = Fc(ar, 'onSelect')).length &&
              ((t = new Zt('onSelect', 'select', null, t, n)), e.push({ event: t, listeners: r }), (t.target = rr))));
      }
      function sr(e, t) {
        var n = {};
        return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
      }
      var ur = {
          animationend: sr('Animation', 'AnimationEnd'),
          animationiteration: sr('Animation', 'AnimationIteration'),
          animationstart: sr('Animation', 'AnimationStart'),
          transitionrun: sr('Transition', 'TransitionRun'),
          transitionstart: sr('Transition', 'TransitionStart'),
          transitioncancel: sr('Transition', 'TransitionCancel'),
          transitionend: sr('Transition', 'TransitionEnd'),
        },
        cr = {},
        dr = {};
      function fr(e) {
        if (cr[e]) return cr[e];
        if (!ur[e]) return e;
        var t,
          n = ur[e];
        for (t in n) if (n.hasOwnProperty(t) && t in dr) return (cr[e] = n[t]);
        return e;
      }
      nt &&
        ((dr = document.createElement('div').style),
        'AnimationEvent' in window ||
          (delete ur.animationend.animation,
          delete ur.animationiteration.animation,
          delete ur.animationstart.animation),
        'TransitionEvent' in window || delete ur.transitionend.transition);
      var pr = fr('animationend'),
        mr = fr('animationiteration'),
        hr = fr('animationstart'),
        gr = fr('transitionrun'),
        yr = fr('transitionstart'),
        br = fr('transitioncancel'),
        vr = fr('transitionend'),
        wr = new Map(),
        kr =
          'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(
            ' '
          );
      function Sr(e, t) {
        wr.set(e, t), et(t, [e]);
      }
      var xr = [],
        Er = 0,
        _r = 0;
      function Cr() {
        for (var e = Er, t = (_r = Er = 0); t < e; ) {
          var n = xr[t];
          xr[t++] = null;
          var r = xr[t];
          xr[t++] = null;
          var a = xr[t];
          xr[t++] = null;
          var o = xr[t];
          if (((xr[t++] = null), null !== r && null !== a)) {
            var i = r.pending;
            null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)), (r.pending = a);
          }
          0 !== o && Pr(n, a, o);
        }
      }
      function Ar(e, t, n, r) {
        (xr[Er++] = e),
          (xr[Er++] = t),
          (xr[Er++] = n),
          (xr[Er++] = r),
          (_r |= r),
          (e.lanes |= r),
          null !== (e = e.alternate) && (e.lanes |= r);
      }
      function Tr(e, t, n, r) {
        return Ar(e, t, n, r), Nr(e);
      }
      function jr(e, t) {
        return Ar(e, null, null, t), Nr(e);
      }
      function Pr(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        null !== r && (r.lanes |= n);
        for (var a = !1, o = e.return; null !== o; )
          (o.childLanes |= n),
            null !== (r = o.alternate) && (r.childLanes |= n),
            22 === o.tag && (null === (e = o.stateNode) || 1 & e._visibility || (a = !0)),
            (e = o),
            (o = o.return);
        a &&
          null !== t &&
          3 === e.tag &&
          ((o = e.stateNode),
          (a = 31 - we(n)),
          null === (e = (o = o.hiddenUpdates)[a]) ? (o[a] = [t]) : e.push(t),
          (t.lane = 536870912 | n));
      }
      function Nr(e) {
        if (50 < Tu) throw ((Tu = 0), (ju = null), Error(i(185)));
        for (var t = e.return; null !== t; ) t = (e = t).return;
        return 3 === e.tag ? e.stateNode : null;
      }
      var Or = {},
        Lr = new WeakMap();
      function Rr(e, t) {
        if ('object' == typeof e && null !== e) {
          var n = Lr.get(e);
          return void 0 !== n ? n : ((t = { value: e, source: t, stack: F(t) }), Lr.set(e, t), t);
        }
        return { value: e, source: t, stack: F(t) };
      }
      var Dr = [],
        Fr = 0,
        Ir = null,
        Mr = 0,
        zr = [],
        Br = 0,
        $r = null,
        Ur = 1,
        qr = '';
      function Hr(e, t) {
        (Dr[Fr++] = Mr), (Dr[Fr++] = Ir), (Ir = e), (Mr = t);
      }
      function Gr(e, t, n) {
        (zr[Br++] = Ur), (zr[Br++] = qr), (zr[Br++] = $r), ($r = e);
        var r = Ur;
        e = qr;
        var a = 32 - we(r) - 1;
        (r &= ~(1 << a)), (n += 1);
        var o = 32 - we(t) + a;
        if (30 < o) {
          var i = a - (a % 5);
          (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (a -= i),
            (Ur = (1 << (32 - we(t) + a)) | (n << a) | r),
            (qr = o + e);
        } else (Ur = (1 << o) | (n << a) | r), (qr = e);
      }
      function Vr(e) {
        null !== e.return && (Hr(e, 1), Gr(e, 1, 0));
      }
      function Wr(e) {
        for (; e === Ir; ) (Ir = Dr[--Fr]), (Dr[Fr] = null), (Mr = Dr[--Fr]), (Dr[Fr] = null);
        for (; e === $r; )
          ($r = zr[--Br]), (zr[Br] = null), (qr = zr[--Br]), (zr[Br] = null), (Ur = zr[--Br]), (zr[Br] = null);
      }
      var Qr = null,
        Kr = null,
        Yr = !1,
        Xr = null,
        Zr = !1,
        Jr = Error(i(519));
      function ea(e) {
        throw (oa(Rr(Error(i(418, '')), e)), Jr);
      }
      function ta(e) {
        var t = e.stateNode,
          n = e.type,
          r = e.memoizedProps;
        switch (((t[Me] = e), (t[ze] = r), n)) {
          case 'dialog':
            jc('cancel', t), jc('close', t);
            break;
          case 'iframe':
          case 'object':
          case 'embed':
            jc('load', t);
            break;
          case 'video':
          case 'audio':
            for (n = 0; n < Cc.length; n++) jc(Cc[n], t);
            break;
          case 'source':
            jc('error', t);
            break;
          case 'img':
          case 'image':
          case 'link':
            jc('error', t), jc('load', t);
            break;
          case 'details':
            jc('toggle', t);
            break;
          case 'input':
            jc('invalid', t), yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0), dt(t);
            break;
          case 'select':
            jc('invalid', t);
            break;
          case 'textarea':
            jc('invalid', t), kt(t, r.value, r.defaultValue, r.children), dt(t);
        }
        ('string' != typeof (n = r.children) && 'number' != typeof n && 'bigint' != typeof n) ||
        t.textContent === '' + n ||
        !0 === r.suppressHydrationWarning ||
        Uc(t.textContent, n)
          ? (null != r.popover && (jc('beforetoggle', t), jc('toggle', t)),
            null != r.onScroll && jc('scroll', t),
            null != r.onScrollEnd && jc('scrollend', t),
            null != r.onClick && (t.onclick = qc),
            (t = !0))
          : (t = !1),
          t || ea(e);
      }
      function na(e) {
        for (Qr = e.return; Qr; )
          switch (Qr.tag) {
            case 3:
            case 27:
              return void (Zr = !0);
            case 5:
            case 13:
              return void (Zr = !1);
            default:
              Qr = Qr.return;
          }
      }
      function ra(e) {
        if (e !== Qr) return !1;
        if (!Yr) return na(e), (Yr = !0), !1;
        var t,
          n = !1;
        if (
          ((t = 3 !== e.tag && 27 !== e.tag) &&
            ((t = 5 === e.tag) && (t = !('form' !== (t = e.type) && 'button' !== t) || Zc(e.type, e.memoizedProps)),
            (t = !t)),
          t && (n = !0),
          n && Kr && ea(e),
          na(e),
          13 === e.tag)
        ) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
          e: {
            for (e = e.nextSibling, n = 0; e; ) {
              if (8 === e.nodeType)
                if ('/$' === (t = e.data)) {
                  if (0 === n) {
                    Kr = ld(e.nextSibling);
                    break e;
                  }
                  n--;
                } else ('$' !== t && '$!' !== t && '$?' !== t) || n++;
              e = e.nextSibling;
            }
            Kr = null;
          }
        } else Kr = Qr ? ld(e.stateNode.nextSibling) : null;
        return !0;
      }
      function aa() {
        (Kr = Qr = null), (Yr = !1);
      }
      function oa(e) {
        null === Xr ? (Xr = [e]) : Xr.push(e);
      }
      var ia = Error(i(460)),
        la = Error(i(474)),
        sa = { then: function () {} };
      function ua(e) {
        return 'fulfilled' === (e = e.status) || 'rejected' === e;
      }
      function ca() {}
      function da(e, t, n) {
        switch ((void 0 === (n = e[n]) ? e.push(t) : n !== t && (t.then(ca, ca), (t = n)), t.status)) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            if ((e = t.reason) === ia) throw Error(i(483));
            throw e;
          default:
            if ('string' == typeof t.status) t.then(ca, ca);
            else {
              if (null !== (e = tu) && 100 < e.shellSuspendCounter) throw Error(i(482));
              ((e = t).status = 'pending'),
                e.then(
                  function (e) {
                    if ('pending' === t.status) {
                      var n = t;
                      (n.status = 'fulfilled'), (n.value = e);
                    }
                  },
                  function (e) {
                    if ('pending' === t.status) {
                      var n = t;
                      (n.status = 'rejected'), (n.reason = e);
                    }
                  }
                );
            }
            switch (t.status) {
              case 'fulfilled':
                return t.value;
              case 'rejected':
                if ((e = t.reason) === ia) throw Error(i(483));
                throw e;
            }
            throw ((fa = t), ia);
        }
      }
      var fa = null;
      function pa() {
        if (null === fa) throw Error(i(459));
        var e = fa;
        return (fa = null), e;
      }
      var ma = null,
        ha = 0;
      function ga(e) {
        var t = ha;
        return (ha += 1), null === ma && (ma = []), da(ma, e, t);
      }
      function ya(e, t) {
        (t = t.props.ref), (e.ref = void 0 !== t ? t : null);
      }
      function ba(e, t) {
        if (t.$$typeof === s) throw Error(i(525));
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(i(31, '[object Object]' === e ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
        );
      }
      function va(e) {
        return (0, e._init)(e._payload);
      }
      function wa(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e) {
          for (var t = new Map(); null !== e; ) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), (e = e.sibling);
          return t;
        }
        function a(e, t) {
          return ((e = Is(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 33554434), n)
                  : r
                : ((t.flags |= 33554434), n)
              : ((t.flags |= 1048576), n)
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags |= 33554434), t;
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag ? (((t = Us(n, e.mode, r)).return = e), t) : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n, r) {
          var o = n.type;
          return o === d
            ? m(e, t, n.props.children, r, n.key)
            : null !== t &&
              (t.elementType === o || ('object' == typeof o && null !== o && o.$$typeof === k && va(o) === t.type))
            ? (ya((t = a(t, n.props)), n), (t.return = e), t)
            : (ya((t = zs(n.type, n.key, n.props, null, e.mode, r)), n), (t.return = e), t);
        }
        function p(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = qs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function m(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Bs(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function h(e, t, n) {
          if (('string' == typeof t && '' !== t) || 'number' == typeof t || 'bigint' == typeof t)
            return ((t = Us('' + t, e.mode, n)).return = e), t;
          if ('object' == typeof t && null !== t) {
            switch (t.$$typeof) {
              case u:
                return ya((n = zs(t.type, t.key, t.props, null, e.mode, n)), t), (n.return = e), n;
              case c:
                return ((t = qs(t, e.mode, n)).return = e), t;
              case k:
                return h(e, (t = (0, t._init)(t._payload)), n);
            }
            if ($(t) || _(t)) return ((t = Bs(t, e.mode, n, null)).return = e), t;
            if ('function' == typeof t.then) return h(e, ga(t), n);
            if (t.$$typeof === g) return h(e, Cl(e, t), n);
            ba(e, t);
          }
          return null;
        }
        function y(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if (('string' == typeof n && '' !== n) || 'number' == typeof n || 'bigint' == typeof n)
            return null !== a ? null : s(e, t, '' + n, r);
          if ('object' == typeof n && null !== n) {
            switch (n.$$typeof) {
              case u:
                return n.key === a ? f(e, t, n, r) : null;
              case c:
                return n.key === a ? p(e, t, n, r) : null;
              case k:
                return y(e, t, (n = (a = n._init)(n._payload)), r);
            }
            if ($(n) || _(n)) return null !== a ? null : m(e, t, n, r, null);
            if ('function' == typeof n.then) return y(e, t, ga(n), r);
            if (n.$$typeof === g) return y(e, t, Cl(e, n), r);
            ba(e, n);
          }
          return null;
        }
        function b(e, t, n, r, a) {
          if (('string' == typeof r && '' !== r) || 'number' == typeof r || 'bigint' == typeof r)
            return s(t, (e = e.get(n) || null), '' + r, a);
          if ('object' == typeof r && null !== r) {
            switch (r.$$typeof) {
              case u:
                return f(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
              case c:
                return p(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
              case k:
                return b(e, t, n, (r = (0, r._init)(r._payload)), a);
            }
            if ($(r) || _(r)) return m(t, (e = e.get(n) || null), r, a, null);
            if ('function' == typeof r.then) return b(e, t, n, ga(r), a);
            if (r.$$typeof === g) return b(e, t, n, Cl(t, r), a);
            ba(t, r);
          }
          return null;
        }
        function v(s, f, p, m) {
          if (
            ('object' == typeof p && null !== p && p.type === d && null === p.key && (p = p.props.children),
            'object' == typeof p && null !== p)
          ) {
            switch (p.$$typeof) {
              case u:
                e: {
                  for (var w = p.key; null !== f; ) {
                    if (f.key === w) {
                      if ((w = p.type) === d) {
                        if (7 === f.tag) {
                          n(s, f.sibling), ((m = a(f, p.props.children)).return = s), (s = m);
                          break e;
                        }
                      } else if (
                        f.elementType === w ||
                        ('object' == typeof w && null !== w && w.$$typeof === k && va(w) === f.type)
                      ) {
                        n(s, f.sibling), ya((m = a(f, p.props)), p), (m.return = s), (s = m);
                        break e;
                      }
                      n(s, f);
                      break;
                    }
                    t(s, f), (f = f.sibling);
                  }
                  p.type === d
                    ? (((m = Bs(p.props.children, s.mode, m, p.key)).return = s), (s = m))
                    : (ya((m = zs(p.type, p.key, p.props, null, s.mode, m)), p), (m.return = s), (s = m));
                }
                return l(s);
              case c:
                e: {
                  for (w = p.key; null !== f; ) {
                    if (f.key === w) {
                      if (
                        4 === f.tag &&
                        f.stateNode.containerInfo === p.containerInfo &&
                        f.stateNode.implementation === p.implementation
                      ) {
                        n(s, f.sibling), ((m = a(f, p.children || [])).return = s), (s = m);
                        break e;
                      }
                      n(s, f);
                      break;
                    }
                    t(s, f), (f = f.sibling);
                  }
                  ((m = qs(p, s.mode, m)).return = s), (s = m);
                }
                return l(s);
              case k:
                return v(s, f, (p = (w = p._init)(p._payload)), m);
            }
            if ($(p))
              return (function (a, i, l, s) {
                for (var u = null, c = null, d = i, f = (i = 0), p = null; null !== d && f < l.length; f++) {
                  d.index > f ? ((p = d), (d = null)) : (p = d.sibling);
                  var m = y(a, d, l[f], s);
                  if (null === m) {
                    null === d && (d = p);
                    break;
                  }
                  e && d && null === m.alternate && t(a, d),
                    (i = o(m, i, f)),
                    null === c ? (u = m) : (c.sibling = m),
                    (c = m),
                    (d = p);
                }
                if (f === l.length) return n(a, d), Yr && Hr(a, f), u;
                if (null === d) {
                  for (; f < l.length; f++)
                    null !== (d = h(a, l[f], s)) && ((i = o(d, i, f)), null === c ? (u = d) : (c.sibling = d), (c = d));
                  return Yr && Hr(a, f), u;
                }
                for (d = r(d); f < l.length; f++)
                  null !== (p = b(d, a, f, l[f], s)) &&
                    (e && null !== p.alternate && d.delete(null === p.key ? f : p.key),
                    (i = o(p, i, f)),
                    null === c ? (u = p) : (c.sibling = p),
                    (c = p));
                return (
                  e &&
                    d.forEach(function (e) {
                      return t(a, e);
                    }),
                  Yr && Hr(a, f),
                  u
                );
              })(s, f, p, m);
            if (_(p)) {
              if ('function' != typeof (w = _(p))) throw Error(i(150));
              return (function (a, l, s, u) {
                if (null == s) throw Error(i(151));
                for (
                  var c = null, d = null, f = l, p = (l = 0), m = null, g = s.next();
                  null !== f && !g.done;
                  p++, g = s.next()
                ) {
                  f.index > p ? ((m = f), (f = null)) : (m = f.sibling);
                  var v = y(a, f, g.value, u);
                  if (null === v) {
                    null === f && (f = m);
                    break;
                  }
                  e && f && null === v.alternate && t(a, f),
                    (l = o(v, l, p)),
                    null === d ? (c = v) : (d.sibling = v),
                    (d = v),
                    (f = m);
                }
                if (g.done) return n(a, f), Yr && Hr(a, p), c;
                if (null === f) {
                  for (; !g.done; p++, g = s.next())
                    null !== (g = h(a, g.value, u)) &&
                      ((l = o(g, l, p)), null === d ? (c = g) : (d.sibling = g), (d = g));
                  return Yr && Hr(a, p), c;
                }
                for (f = r(f); !g.done; p++, g = s.next())
                  null !== (g = b(f, a, p, g.value, u)) &&
                    (e && null !== g.alternate && f.delete(null === g.key ? p : g.key),
                    (l = o(g, l, p)),
                    null === d ? (c = g) : (d.sibling = g),
                    (d = g));
                return (
                  e &&
                    f.forEach(function (e) {
                      return t(a, e);
                    }),
                  Yr && Hr(a, p),
                  c
                );
              })(s, f, (p = w.call(p)), m);
            }
            if ('function' == typeof p.then) return v(s, f, ga(p), m);
            if (p.$$typeof === g) return v(s, f, Cl(s, p), m);
            ba(s, p);
          }
          return ('string' == typeof p && '' !== p) || 'number' == typeof p || 'bigint' == typeof p
            ? ((p = '' + p),
              null !== f && 6 === f.tag
                ? (n(s, f.sibling), ((m = a(f, p)).return = s), (s = m))
                : (n(s, f), ((m = Us(p, s.mode, m)).return = s), (s = m)),
              l(s))
            : n(s, f);
        }
        return function (e, t, n, r) {
          try {
            ha = 0;
            var a = v(e, t, n, r);
            return (ma = null), a;
          } catch (i) {
            if (i === ia) throw i;
            var o = Ds(29, i, null, e.mode);
            return (o.lanes = r), (o.return = e), o;
          }
        };
      }
      var ka = wa(!0),
        Sa = wa(!1),
        xa = V(null),
        Ea = V(0);
      function _a(e, t) {
        Q(Ea, (e = uu)), Q(xa, t), (uu = e | t.baseLanes);
      }
      function Ca() {
        Q(Ea, uu), Q(xa, xa.current);
      }
      function Aa() {
        (uu = Ea.current), W(xa), W(Ea);
      }
      var Ta = V(null),
        ja = null;
      function Pa(e) {
        var t = e.alternate;
        Q(Ra, 1 & Ra.current),
          Q(Ta, e),
          null === ja && (null === t || null !== xa.current || null !== t.memoizedState) && (ja = e);
      }
      function Na(e) {
        if (22 === e.tag) {
          if ((Q(Ra, Ra.current), Q(Ta, e), null === ja)) {
            var t = e.alternate;
            null !== t && null !== t.memoizedState && (ja = e);
          }
        } else Oa();
      }
      function Oa() {
        Q(Ra, Ra.current), Q(Ta, Ta.current);
      }
      function La(e) {
        W(Ta), ja === e && (ja = null), W(Ra);
      }
      var Ra = V(0);
      function Da(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (null !== n && (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)) return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (128 & t.flags) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Fa =
          'undefined' != typeof AbortController
            ? AbortController
            : function () {
                var e = [],
                  t = (this.signal = {
                    aborted: !1,
                    addEventListener: function (t, n) {
                      e.push(n);
                    },
                  });
                this.abort = function () {
                  (t.aborted = !0),
                    e.forEach(function (e) {
                      return e();
                    });
                };
              },
        Ia = r.unstable_scheduleCallback,
        Ma = r.unstable_NormalPriority,
        za = {
          $$typeof: g,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0,
        };
      function Ba() {
        return { controller: new Fa(), data: new Map(), refCount: 0 };
      }
      function $a(e) {
        e.refCount--,
          0 === e.refCount &&
            Ia(Ma, function () {
              e.controller.abort();
            });
      }
      var Ua = null,
        qa = 0,
        Ha = 0,
        Ga = null;
      function Va() {
        if (0 == --qa && null !== Ua) {
          null !== Ga && (Ga.status = 'fulfilled');
          var e = Ua;
          (Ua = null), (Ha = 0), (Ga = null);
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      var Wa = P.S;
      P.S = function (e, t) {
        'object' == typeof t &&
          null !== t &&
          'function' == typeof t.then &&
          (function (e, t) {
            if (null === Ua) {
              var n = (Ua = []);
              (qa = 0),
                (Ha = kc()),
                (Ga = {
                  status: 'pending',
                  value: void 0,
                  then: function (e) {
                    n.push(e);
                  },
                });
            }
            qa++, t.then(Va, Va);
          })(0, t),
          null !== Wa && Wa(e, t);
      };
      var Qa = V(null);
      function Ka() {
        var e = Qa.current;
        return null !== e ? e : tu.pooledCache;
      }
      function Ya(e, t) {
        Q(Qa, null === t ? Qa.current : t.pool);
      }
      function Xa() {
        var e = Ka();
        return null === e ? null : { parent: za._currentValue, pool: e };
      }
      var Za = 0,
        Ja = null,
        eo = null,
        to = null,
        no = !1,
        ro = !1,
        ao = !1,
        oo = 0,
        io = 0,
        lo = null,
        so = 0;
      function uo() {
        throw Error(i(321));
      }
      function co(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++) if (!Qn(e[n], t[n])) return !1;
        return !0;
      }
      function fo(e, t, n, r, a, o) {
        return (
          (Za = o),
          (Ja = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (P.H = null === e || null === e.memoizedState ? Ci : Ai),
          (ao = !1),
          (o = n(r, a)),
          (ao = !1),
          ro && (o = mo(t, n, r, a)),
          po(e),
          o
        );
      }
      function po(e) {
        P.H = _i;
        var t = null !== eo && null !== eo.next;
        if (((Za = 0), (to = eo = Ja = null), (no = !1), (io = 0), (lo = null), t)) throw Error(i(300));
        null === e || Hi || (null !== (e = e.dependencies) && xl(e) && (Hi = !0));
      }
      function mo(e, t, n, r) {
        Ja = e;
        var a = 0;
        do {
          if ((ro && (lo = null), (io = 0), (ro = !1), 25 <= a)) throw Error(i(301));
          if (((a += 1), (to = eo = null), null != e.updateQueue)) {
            var o = e.updateQueue;
            (o.lastEffect = null), (o.events = null), (o.stores = null), null != o.memoCache && (o.memoCache.index = 0);
          }
          (P.H = Ti), (o = t(n, r));
        } while (ro);
        return o;
      }
      function ho() {
        var e = P.H,
          t = e.useState()[0];
        return (
          (t = 'function' == typeof t.then ? ko(t) : t),
          (e = e.useState()[0]),
          (null !== eo ? eo.memoizedState : null) !== e && (Ja.flags |= 1024),
          t
        );
      }
      function go() {
        var e = 0 !== oo;
        return (oo = 0), e;
      }
      function yo(e, t, n) {
        (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
      }
      function bo(e) {
        if (no) {
          for (e = e.memoizedState; null !== e; ) {
            var t = e.queue;
            null !== t && (t.pending = null), (e = e.next);
          }
          no = !1;
        }
        (Za = 0), (to = eo = Ja = null), (ro = !1), (io = oo = 0), (lo = null);
      }
      function vo() {
        var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        return null === to ? (Ja.memoizedState = to = e) : (to = to.next = e), to;
      }
      function wo() {
        if (null === eo) {
          var e = Ja.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = eo.next;
        var t = null === to ? Ja.memoizedState : to.next;
        if (null !== t) (to = t), (eo = e);
        else {
          if (null === e) {
            if (null === Ja.alternate) throw Error(i(467));
            throw Error(i(310));
          }
          (e = {
            memoizedState: (eo = e).memoizedState,
            baseState: eo.baseState,
            baseQueue: eo.baseQueue,
            queue: eo.queue,
            next: null,
          }),
            null === to ? (Ja.memoizedState = to = e) : (to = to.next = e);
        }
        return to;
      }
      function ko(e) {
        var t = io;
        return (
          (io += 1),
          null === lo && (lo = []),
          (e = da(lo, e, t)),
          (t = Ja),
          null === (null === to ? t.memoizedState : to.next) &&
            ((t = t.alternate), (P.H = null === t || null === t.memoizedState ? Ci : Ai)),
          e
        );
      }
      function So(e) {
        if (null !== e && 'object' == typeof e) {
          if ('function' == typeof e.then) return ko(e);
          if (e.$$typeof === g) return _l(e);
        }
        throw Error(i(438, String(e)));
      }
      function xo(e) {
        var t = null,
          n = Ja.updateQueue;
        if ((null !== n && (t = n.memoCache), null == t)) {
          var r = Ja.alternate;
          null !== r &&
            null !== (r = r.updateQueue) &&
            null != (r = r.memoCache) &&
            (t = {
              data: r.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            });
        }
        if (
          (null == t && (t = { data: [], index: 0 }),
          null === n && ((n = { lastEffect: null, events: null, stores: null, memoCache: null }), (Ja.updateQueue = n)),
          (n.memoCache = t),
          void 0 === (n = t.data[t.index]))
        )
          for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = x;
        return t.index++, n;
      }
      function Eo(e, t) {
        return 'function' == typeof t ? t(e) : t;
      }
      function _o(e) {
        return Co(wo(), eo, e);
      }
      function Co(e, t, n) {
        var r = e.queue;
        if (null === r) throw Error(i(311));
        r.lastRenderedReducer = n;
        var a = e.baseQueue,
          o = r.pending;
        if (null !== o) {
          if (null !== a) {
            var l = a.next;
            (a.next = o.next), (o.next = l);
          }
          (t.baseQueue = a = o), (r.pending = null);
        }
        if (((o = e.baseState), null === a)) e.memoizedState = o;
        else {
          var s = (l = null),
            u = null,
            c = (t = a.next),
            d = !1;
          do {
            var f = -536870913 & c.lane;
            if (f !== c.lane ? (ru & f) === f : (Za & f) === f) {
              var p = c.revertLane;
              if (0 === p)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      revertLane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  f === Ha && (d = !0);
              else {
                if ((Za & p) === p) {
                  (c = c.next), p === Ha && (d = !0);
                  continue;
                }
                (f = {
                  lane: 0,
                  revertLane: c.revertLane,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }),
                  null === u ? ((s = u = f), (l = o)) : (u = u.next = f),
                  (Ja.lanes |= p),
                  (du |= p);
              }
              (f = c.action), ao && n(o, f), (o = c.hasEagerState ? c.eagerState : n(o, f));
            } else
              (p = {
                lane: f,
                revertLane: c.revertLane,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
                null === u ? ((s = u = p), (l = o)) : (u = u.next = p),
                (Ja.lanes |= f),
                (du |= f);
            c = c.next;
          } while (null !== c && c !== t);
          if ((null === u ? (l = o) : (u.next = s), !Qn(o, e.memoizedState) && ((Hi = !0), d && null !== (n = Ga))))
            throw n;
          (e.memoizedState = o), (e.baseState = l), (e.baseQueue = u), (r.lastRenderedState = o);
        }
        return null === a && (r.lanes = 0), [e.memoizedState, r.dispatch];
      }
      function Ao(e) {
        var t = wo(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          o = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (o = e(o, l.action)), (l = l.next);
          } while (l !== a);
          Qn(o, t.memoizedState) || (Hi = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o);
        }
        return [o, r];
      }
      function To(e, t, n) {
        var r = Ja,
          a = wo(),
          o = Yr;
        if (o) {
          if (void 0 === n) throw Error(i(407));
          n = n();
        } else n = t();
        var l = !Qn((eo || a).memoizedState, n);
        if (
          (l && ((a.memoizedState = n), (Hi = !0)),
          (a = a.queue),
          Jo(No.bind(null, r, a, e), [e]),
          a.getSnapshot !== t || l || (null !== to && 1 & to.memoizedState.tag))
        ) {
          if (((r.flags |= 2048), Qo(9, Po.bind(null, r, a, n, t), { destroy: void 0 }, null), null === tu))
            throw Error(i(349));
          o || 60 & Za || jo(r, t, n);
        }
        return n;
      }
      function jo(e, t, n) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          null === (t = Ja.updateQueue)
            ? ((t = { lastEffect: null, events: null, stores: null, memoCache: null }),
              (Ja.updateQueue = t),
              (t.stores = [e]))
            : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e);
      }
      function Po(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), Oo(t) && Lo(e);
      }
      function No(e, t, n) {
        return n(function () {
          Oo(t) && Lo(e);
        });
      }
      function Oo(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !Qn(e, n);
        } catch (r) {
          return !0;
        }
      }
      function Lo(e) {
        var t = jr(e, 2);
        null !== t && Ou(t, e, 2);
      }
      function Ro(e) {
        var t = vo();
        if ('function' == typeof e) {
          var n = e;
          if (((e = n()), ao)) {
            ve(!0);
            try {
              n();
            } finally {
              ve(!1);
            }
          }
        }
        return (
          (t.memoizedState = t.baseState = e),
          (t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: e }),
          t
        );
      }
      function Do(e, t, n, r) {
        return (e.baseState = n), Co(e, eo, 'function' == typeof r ? r : Eo);
      }
      function Fo(e, t, n, r, a) {
        if (Si(e)) throw Error(i(485));
        if (null !== (e = t.action)) {
          var o = {
            payload: a,
            action: e,
            next: null,
            isTransition: !0,
            status: 'pending',
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
              o.listeners.push(e);
            },
          };
          null !== P.T ? n(!0) : (o.isTransition = !1),
            r(o),
            null === (n = t.pending)
              ? ((o.next = t.pending = o), Io(t, o))
              : ((o.next = n.next), (t.pending = n.next = o));
        }
      }
      function Io(e, t) {
        var n = t.action,
          r = t.payload,
          a = e.state;
        if (t.isTransition) {
          var o = P.T,
            i = {};
          P.T = i;
          try {
            var l = n(a, r),
              s = P.S;
            null !== s && s(i, l), Mo(e, t, l);
          } catch (u) {
            Bo(e, t, u);
          } finally {
            P.T = o;
          }
        } else
          try {
            Mo(e, t, (o = n(a, r)));
          } catch (c) {
            Bo(e, t, c);
          }
      }
      function Mo(e, t, n) {
        null !== n && 'object' == typeof n && 'function' == typeof n.then
          ? n.then(
              function (n) {
                zo(e, t, n);
              },
              function (n) {
                return Bo(e, t, n);
              }
            )
          : zo(e, t, n);
      }
      function zo(e, t, n) {
        (t.status = 'fulfilled'),
          (t.value = n),
          $o(t),
          (e.state = n),
          null !== (t = e.pending) &&
            ((n = t.next) === t ? (e.pending = null) : ((n = n.next), (t.next = n), Io(e, n)));
      }
      function Bo(e, t, n) {
        var r = e.pending;
        if (((e.pending = null), null !== r)) {
          r = r.next;
          do {
            (t.status = 'rejected'), (t.reason = n), $o(t), (t = t.next);
          } while (t !== r);
        }
        e.action = null;
      }
      function $o(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function Uo(e, t) {
        return t;
      }
      function qo(e, t) {
        if (Yr) {
          var n = tu.formState;
          if (null !== n) {
            e: {
              var r = Ja;
              if (Yr) {
                if (Kr) {
                  t: {
                    for (var a = Kr, o = Zr; 8 !== a.nodeType; ) {
                      if (!o) {
                        a = null;
                        break t;
                      }
                      if (null === (a = ld(a.nextSibling))) {
                        a = null;
                        break t;
                      }
                    }
                    a = 'F!' === (o = a.data) || 'F' === o ? a : null;
                  }
                  if (a) {
                    (Kr = ld(a.nextSibling)), (r = 'F!' === a.data);
                    break e;
                  }
                }
                ea(r);
              }
              r = !1;
            }
            r && (t = n[0]);
          }
        }
        return (
          ((n = vo()).memoizedState = n.baseState = t),
          (r = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Uo, lastRenderedState: t }),
          (n.queue = r),
          (n = vi.bind(null, Ja, r)),
          (r.dispatch = n),
          (r = Ro(!1)),
          (o = ki.bind(null, Ja, !1, r.queue)),
          (a = { state: t, dispatch: null, action: e, pending: null }),
          ((r = vo()).queue = a),
          (n = Fo.bind(null, Ja, a, o, n)),
          (a.dispatch = n),
          (r.memoizedState = e),
          [t, n, !1]
        );
      }
      function Ho(e) {
        return Go(wo(), eo, e);
      }
      function Go(e, t, n) {
        (t = Co(e, t, Uo)[0]),
          (e = _o(Eo)[0]),
          (t = 'object' == typeof t && null !== t && 'function' == typeof t.then ? ko(t) : t);
        var r = wo(),
          a = r.queue,
          o = a.dispatch;
        return (
          n !== r.memoizedState && ((Ja.flags |= 2048), Qo(9, Vo.bind(null, a, n), { destroy: void 0 }, null)),
          [t, o, e]
        );
      }
      function Vo(e, t) {
        e.action = t;
      }
      function Wo(e) {
        var t = wo(),
          n = eo;
        if (null !== n) return Go(t, n, e);
        wo(), (t = t.memoizedState);
        var r = (n = wo()).queue.dispatch;
        return (n.memoizedState = e), [t, r, !1];
      }
      function Qo(e, t, n, r) {
        return (
          (e = { tag: e, create: t, inst: n, deps: r, next: null }),
          null === (t = Ja.updateQueue) &&
            ((t = { lastEffect: null, events: null, stores: null, memoCache: null }), (Ja.updateQueue = t)),
          null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function Ko() {
        return wo().memoizedState;
      }
      function Yo(e, t, n, r) {
        var a = vo();
        (Ja.flags |= e), (a.memoizedState = Qo(1 | t, n, { destroy: void 0 }, void 0 === r ? null : r));
      }
      function Xo(e, t, n, r) {
        var a = wo();
        r = void 0 === r ? null : r;
        var o = a.memoizedState.inst;
        null !== eo && null !== r && co(r, eo.memoizedState.deps)
          ? (a.memoizedState = Qo(t, n, o, r))
          : ((Ja.flags |= e), (a.memoizedState = Qo(1 | t, n, o, r)));
      }
      function Zo(e, t) {
        Yo(8390656, 8, e, t);
      }
      function Jo(e, t) {
        Xo(2048, 8, e, t);
      }
      function ei(e, t) {
        return Xo(4, 2, e, t);
      }
      function ti(e, t) {
        return Xo(4, 4, e, t);
      }
      function ni(e, t) {
        if ('function' == typeof t) {
          e = e();
          var n = t(e);
          return function () {
            'function' == typeof n ? n() : t(null);
          };
        }
        if (null != t)
          return (
            (e = e()),
            (t.current = e),
            function () {
              t.current = null;
            }
          );
      }
      function ri(e, t, n) {
        (n = null != n ? n.concat([e]) : null), Xo(4, 4, ni.bind(null, t, e), n);
      }
      function ai() {}
      function oi(e, t) {
        var n = wo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== t && co(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
      }
      function ii(e, t) {
        var n = wo();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        if (null !== t && co(t, r[1])) return r[0];
        if (((r = e()), ao)) {
          ve(!0);
          try {
            e();
          } finally {
            ve(!1);
          }
        }
        return (n.memoizedState = [r, t]), r;
      }
      function li(e, t, n) {
        return void 0 === n || 1073741824 & Za
          ? (e.memoizedState = t)
          : ((e.memoizedState = n), (e = Nu()), (Ja.lanes |= e), (du |= e), n);
      }
      function si(e, t, n, r) {
        return Qn(n, t)
          ? n
          : null !== xa.current
          ? ((e = li(e, n, r)), Qn(e, t) || (Hi = !0), e)
          : 42 & Za
          ? ((e = Nu()), (Ja.lanes |= e), (du |= e), t)
          : ((Hi = !0), (e.memoizedState = n));
      }
      function ui(e, t, n, r, a) {
        var o = U.p;
        U.p = 0 !== o && 8 > o ? o : 8;
        var i,
          l,
          s,
          u = P.T,
          c = {};
        (P.T = c), ki(e, !1, t, n);
        try {
          var d = a(),
            f = P.S;
          if ((null !== f && f(c, d), null !== d && 'object' == typeof d && 'function' == typeof d.then))
            wi(
              e,
              t,
              ((i = r),
              (l = []),
              (s = {
                status: 'pending',
                value: null,
                reason: null,
                then: function (e) {
                  l.push(e);
                },
              }),
              d.then(
                function () {
                  (s.status = 'fulfilled'), (s.value = i);
                  for (var e = 0; e < l.length; e++) (0, l[e])(i);
                },
                function (e) {
                  for (s.status = 'rejected', s.reason = e, e = 0; e < l.length; e++) (0, l[e])(void 0);
                }
              ),
              s),
              Pu()
            );
          else wi(e, t, r, Pu());
        } catch (p) {
          wi(e, t, { then: function () {}, status: 'rejected', reason: p }, Pu());
        } finally {
          (U.p = o), (P.T = u);
        }
      }
      function ci() {}
      function di(e, t, n, r) {
        if (5 !== e.tag) throw Error(i(476));
        var a = fi(e).queue;
        ui(
          e,
          a,
          t,
          q,
          null === n
            ? ci
            : function () {
                return pi(e), n(r);
              }
        );
      }
      function fi(e) {
        var t = e.memoizedState;
        if (null !== t) return t;
        var n = {};
        return (
          ((t = {
            memoizedState: q,
            baseState: q,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: q },
            next: null,
          }).next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Eo, lastRenderedState: n },
            next: null,
          }),
          (e.memoizedState = t),
          null !== (e = e.alternate) && (e.memoizedState = t),
          t
        );
      }
      function pi(e) {
        wi(e, fi(e).next.queue, {}, Pu());
      }
      function mi() {
        return _l(Fd);
      }
      function hi() {
        return wo().memoizedState;
      }
      function gi() {
        return wo().memoizedState;
      }
      function yi(e) {
        for (var t = e.return; null !== t; ) {
          switch (t.tag) {
            case 24:
            case 3:
              var n = Pu(),
                r = Ol(t, (e = Nl(n)), n);
              return null !== r && (Ou(r, t, n), Ll(r, t, n)), (t = { cache: Ba() }), void (e.payload = t);
          }
          t = t.return;
        }
      }
      function bi(e, t, n) {
        var r = Pu();
        (n = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null }),
          Si(e) ? xi(t, n) : null !== (n = Tr(e, t, n, r)) && (Ou(n, e, r), Ei(n, t, r));
      }
      function vi(e, t, n) {
        wi(e, t, n, Pu());
      }
      function wi(e, t, n, r) {
        var a = { lane: r, revertLane: 0, action: n, hasEagerState: !1, eagerState: null, next: null };
        if (Si(e)) xi(t, a);
        else {
          var o = e.alternate;
          if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
            try {
              var i = t.lastRenderedState,
                l = o(i, n);
              if (((a.hasEagerState = !0), (a.eagerState = l), Qn(l, i)))
                return Ar(e, t, a, 0), null === tu && Cr(), !1;
            } catch (s) {}
          if (null !== (n = Tr(e, t, a, r))) return Ou(n, e, r), Ei(n, t, r), !0;
        }
        return !1;
      }
      function ki(e, t, n, r) {
        if (((r = { lane: 2, revertLane: kc(), action: r, hasEagerState: !1, eagerState: null, next: null }), Si(e))) {
          if (t) throw Error(i(479));
        } else null !== (t = Tr(e, n, r, 2)) && Ou(t, e, 2);
      }
      function Si(e) {
        var t = e.alternate;
        return e === Ja || (null !== t && t === Ja);
      }
      function xi(e, t) {
        ro = no = !0;
        var n = e.pending;
        null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
      }
      function Ei(e, t, n) {
        if (4194176 & n) {
          var r = t.lanes;
          (n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n);
        }
      }
      var _i = {
        readContext: _l,
        use: So,
        useCallback: uo,
        useContext: uo,
        useEffect: uo,
        useImperativeHandle: uo,
        useLayoutEffect: uo,
        useInsertionEffect: uo,
        useMemo: uo,
        useReducer: uo,
        useRef: uo,
        useState: uo,
        useDebugValue: uo,
        useDeferredValue: uo,
        useTransition: uo,
        useSyncExternalStore: uo,
        useId: uo,
      };
      (_i.useCacheRefresh = uo),
        (_i.useMemoCache = uo),
        (_i.useHostTransitionStatus = uo),
        (_i.useFormState = uo),
        (_i.useActionState = uo),
        (_i.useOptimistic = uo);
      var Ci = {
        readContext: _l,
        use: So,
        useCallback: function (e, t) {
          return (vo().memoizedState = [e, void 0 === t ? null : t]), e;
        },
        useContext: _l,
        useEffect: Zo,
        useImperativeHandle: function (e, t, n) {
          (n = null != n ? n.concat([e]) : null), Yo(4194308, 4, ni.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return Yo(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Yo(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = vo();
          t = void 0 === t ? null : t;
          var r = e();
          if (ao) {
            ve(!0);
            try {
              e();
            } finally {
              ve(!1);
            }
          }
          return (n.memoizedState = [r, t]), r;
        },
        useReducer: function (e, t, n) {
          var r = vo();
          if (void 0 !== n) {
            var a = n(t);
            if (ao) {
              ve(!0);
              try {
                n(t);
              } finally {
                ve(!1);
              }
            }
          } else a = t;
          return (
            (r.memoizedState = r.baseState = a),
            (e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }),
            (r.queue = e),
            (e = e.dispatch = bi.bind(null, Ja, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (vo().memoizedState = e);
        },
        useState: function (e) {
          var t = (e = Ro(e)).queue,
            n = vi.bind(null, Ja, t);
          return (t.dispatch = n), [e.memoizedState, n];
        },
        useDebugValue: ai,
        useDeferredValue: function (e, t) {
          return li(vo(), e, t);
        },
        useTransition: function () {
          var e = Ro(!1);
          return (e = ui.bind(null, Ja, e.queue, !0, !1)), (vo().memoizedState = e), [!1, e];
        },
        useSyncExternalStore: function (e, t, n) {
          var r = Ja,
            a = vo();
          if (Yr) {
            if (void 0 === n) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), null === tu)) throw Error(i(349));
            60 & ru || jo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            Zo(No.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            Qo(9, Po.bind(null, r, o, n, t), { destroy: void 0 }, null),
            n
          );
        },
        useId: function () {
          var e = vo(),
            t = tu.identifierPrefix;
          if (Yr) {
            var n = qr;
            (t = ':' + t + 'R' + (n = (Ur & ~(1 << (32 - we(Ur) - 1))).toString(32) + n)),
              0 < (n = oo++) && (t += 'H' + n.toString(32)),
              (t += ':');
          } else t = ':' + t + 'r' + (n = so++).toString(32) + ':';
          return (e.memoizedState = t);
        },
        useCacheRefresh: function () {
          return (vo().memoizedState = yi.bind(null, Ja));
        },
      };
      (Ci.useMemoCache = xo),
        (Ci.useHostTransitionStatus = mi),
        (Ci.useFormState = qo),
        (Ci.useActionState = qo),
        (Ci.useOptimistic = function (e) {
          var t = vo();
          t.memoizedState = t.baseState = e;
          var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
          return (t.queue = n), (t = ki.bind(null, Ja, !0, n)), (n.dispatch = t), [e, t];
        });
      var Ai = {
        readContext: _l,
        use: So,
        useCallback: oi,
        useContext: _l,
        useEffect: Jo,
        useImperativeHandle: ri,
        useInsertionEffect: ei,
        useLayoutEffect: ti,
        useMemo: ii,
        useReducer: _o,
        useRef: Ko,
        useState: function () {
          return _o(Eo);
        },
        useDebugValue: ai,
        useDeferredValue: function (e, t) {
          return si(wo(), eo.memoizedState, e, t);
        },
        useTransition: function () {
          var e = _o(Eo)[0],
            t = wo().memoizedState;
          return ['boolean' == typeof e ? e : ko(e), t];
        },
        useSyncExternalStore: To,
        useId: hi,
      };
      (Ai.useCacheRefresh = gi),
        (Ai.useMemoCache = xo),
        (Ai.useHostTransitionStatus = mi),
        (Ai.useFormState = Ho),
        (Ai.useActionState = Ho),
        (Ai.useOptimistic = function (e, t) {
          return Do(wo(), 0, e, t);
        });
      var Ti = {
        readContext: _l,
        use: So,
        useCallback: oi,
        useContext: _l,
        useEffect: Jo,
        useImperativeHandle: ri,
        useInsertionEffect: ei,
        useLayoutEffect: ti,
        useMemo: ii,
        useReducer: Ao,
        useRef: Ko,
        useState: function () {
          return Ao(Eo);
        },
        useDebugValue: ai,
        useDeferredValue: function (e, t) {
          var n = wo();
          return null === eo ? li(n, e, t) : si(n, eo.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Ao(Eo)[0],
            t = wo().memoizedState;
          return ['boolean' == typeof e ? e : ko(e), t];
        },
        useSyncExternalStore: To,
        useId: hi,
      };
      function ji(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : N({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      (Ti.useCacheRefresh = gi),
        (Ti.useMemoCache = xo),
        (Ti.useHostTransitionStatus = mi),
        (Ti.useFormState = Wo),
        (Ti.useActionState = Wo),
        (Ti.useOptimistic = function (e, t) {
          var n = wo();
          return null !== eo ? Do(n, 0, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
        });
      var Pi = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && I(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = Pu(),
            a = Nl(r);
          (a.payload = t), null != n && (a.callback = n), null !== (t = Ol(e, a, r)) && (Ou(t, e, r), Ll(t, e, r));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = Pu(),
            a = Nl(r);
          (a.tag = 1),
            (a.payload = t),
            null != n && (a.callback = n),
            null !== (t = Ol(e, a, r)) && (Ou(t, e, r), Ll(t, e, r));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = Pu(),
            r = Nl(n);
          (r.tag = 2), null != t && (r.callback = t), null !== (t = Ol(e, r, n)) && (Ou(t, e, n), Ll(t, e, n));
        },
      };
      function Ni(e, t, n, r, a, o, i) {
        return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, i)
          : !t.prototype || !t.prototype.isPureReactComponent || !Kn(n, r) || !Kn(a, o);
      }
      function Oi(e, t, n, r) {
        (e = t.state),
          'function' == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
          'function' == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && Pi.enqueueReplaceState(t, t.state, null);
      }
      function Li(e, t) {
        var n = t;
        if ('ref' in t) for (var r in ((n = {}), t)) 'ref' !== r && (n[r] = t[r]);
        if ((e = e.defaultProps)) for (var a in (n === t && (n = N({}, n)), e)) void 0 === n[a] && (n[a] = e[a]);
        return n;
      }
      var Ri =
        'function' == typeof reportError
          ? reportError
          : function (e) {
              if ('object' == typeof window && 'function' == typeof window.ErrorEvent) {
                var t = new window.ErrorEvent('error', {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    'object' == typeof e && null !== e && 'string' == typeof e.message ? String(e.message) : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if ('object' == typeof process && 'function' == typeof process.emit)
                return void process.emit('uncaughtException', e);
              console.error(e);
            };
      function Di(e) {
        Ri(e);
      }
      function Fi(e) {
        console.error(e);
      }
      function Ii(e) {
        Ri(e);
      }
      function Mi(e, t) {
        try {
          (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      function zi(e, t, n) {
        try {
          (0, e.onCaughtError)(n.value, { componentStack: n.stack, errorBoundary: 1 === t.tag ? t.stateNode : null });
        } catch (r) {
          setTimeout(function () {
            throw r;
          });
        }
      }
      function Bi(e, t, n) {
        return (
          ((n = Nl(n)).tag = 3),
          (n.payload = { element: null }),
          (n.callback = function () {
            Mi(e, t);
          }),
          n
        );
      }
      function $i(e) {
        return ((e = Nl(e)).tag = 3), e;
      }
      function Ui(e, t, n, r) {
        var a = n.type.getDerivedStateFromError;
        if ('function' == typeof a) {
          var o = r.value;
          (e.payload = function () {
            return a(o);
          }),
            (e.callback = function () {
              zi(t, n, r);
            });
        }
        var i = n.stateNode;
        null !== i &&
          'function' == typeof i.componentDidCatch &&
          (e.callback = function () {
            zi(t, n, r), 'function' != typeof a && (null === Su ? (Su = new Set([this])) : Su.add(this));
            var e = r.stack;
            this.componentDidCatch(r.value, { componentStack: null !== e ? e : '' });
          });
      }
      var qi = Error(i(461)),
        Hi = !1;
      function Gi(e, t, n, r) {
        t.child = null === e ? Sa(t, null, n, r) : ka(t, e.child, n, r);
      }
      function Vi(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        if ('ref' in r) {
          var i = {};
          for (var l in r) 'ref' !== l && (i[l] = r[l]);
        } else i = r;
        return (
          El(t),
          (r = fo(e, t, n, i, o, a)),
          (l = go()),
          null === e || Hi ? (Yr && l && Vr(t), (t.flags |= 1), Gi(e, t, r, a), t.child) : (yo(e, t, a), fl(e, t, a))
        );
      }
      function Wi(e, t, n, r, a) {
        if (null === e) {
          var o = n.type;
          return 'function' != typeof o || Fs(o) || void 0 !== o.defaultProps || null !== n.compare
            ? (((e = zs(n.type, null, r, t, t.mode, a)).ref = t.ref), (e.return = t), (t.child = e))
            : ((t.tag = 15), (t.type = o), Qi(e, t, o, r, a));
        }
        if (((o = e.child), !pl(e, a))) {
          var i = o.memoizedProps;
          if ((n = null !== (n = n.compare) ? n : Kn)(i, r) && e.ref === t.ref) return fl(e, t, a);
        }
        return (t.flags |= 1), ((e = Is(o, r)).ref = t.ref), (e.return = t), (t.child = e);
      }
      function Qi(e, t, n, r, a) {
        if (null !== e) {
          var o = e.memoizedProps;
          if (Kn(o, r) && e.ref === t.ref) {
            if (((Hi = !1), (t.pendingProps = r = o), !pl(e, a))) return (t.lanes = e.lanes), fl(e, t, a);
            131072 & e.flags && (Hi = !0);
          }
        }
        return Zi(e, t, n, r, a);
      }
      function Ki(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          o = !!(2 & t.stateNode._pendingVisibility),
          i = null !== e ? e.memoizedState : null;
        if ((Xi(e, t), 'hidden' === r.mode || o)) {
          if (128 & t.flags) {
            if (((r = null !== i ? i.baseLanes | n : n), null !== e)) {
              for (a = t.child = e.child, o = 0; null !== a; ) (o = o | a.lanes | a.childLanes), (a = a.sibling);
              t.childLanes = o & ~r;
            } else (t.childLanes = 0), (t.child = null);
            return Yi(e, t, r, n);
          }
          if (!(536870912 & n))
            return (t.lanes = t.childLanes = 536870912), Yi(e, t, null !== i ? i.baseLanes | n : n, n);
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            null !== e && Ya(0, null !== i ? i.cachePool : null),
            null !== i ? _a(t, i) : Ca(),
            Na(t);
        } else
          null !== i
            ? (Ya(0, i.cachePool), _a(t, i), Oa(), (t.memoizedState = null))
            : (null !== e && Ya(0, null), Ca(), Oa());
        return Gi(e, t, a, n), t.child;
      }
      function Yi(e, t, n, r) {
        var a = Ka();
        return (
          (a = null === a ? null : { parent: za._currentValue, pool: a }),
          (t.memoizedState = { baseLanes: n, cachePool: a }),
          null !== e && Ya(0, null),
          Ca(),
          Na(t),
          null !== e && Sl(e, t, r, !0),
          null
        );
      }
      function Xi(e, t) {
        var n = t.ref;
        if (null === n) null !== e && null !== e.ref && (t.flags |= 2097664);
        else {
          if ('function' != typeof n && 'object' != typeof n) throw Error(i(284));
          (null !== e && e.ref === n) || (t.flags |= 2097664);
        }
      }
      function Zi(e, t, n, r, a) {
        return (
          El(t),
          (n = fo(e, t, n, r, void 0, a)),
          (r = go()),
          null === e || Hi ? (Yr && r && Vr(t), (t.flags |= 1), Gi(e, t, n, a), t.child) : (yo(e, t, a), fl(e, t, a))
        );
      }
      function Ji(e, t, n, r, a, o) {
        return (
          El(t),
          (t.updateQueue = null),
          (n = mo(t, r, n, a)),
          po(e),
          (r = go()),
          null === e || Hi ? (Yr && r && Vr(t), (t.flags |= 1), Gi(e, t, n, o), t.child) : (yo(e, t, o), fl(e, t, o))
        );
      }
      function el(e, t, n, r, a) {
        if ((El(t), null === t.stateNode)) {
          var o = Or,
            i = n.contextType;
          'object' == typeof i && null !== i && (o = _l(i)),
            (o = new n(r, o)),
            (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
            (o.updater = Pi),
            (t.stateNode = o),
            (o._reactInternals = t),
            ((o = t.stateNode).props = r),
            (o.state = t.memoizedState),
            (o.refs = {}),
            jl(t),
            (i = n.contextType),
            (o.context = 'object' == typeof i && null !== i ? _l(i) : Or),
            (o.state = t.memoizedState),
            'function' == typeof (i = n.getDerivedStateFromProps) && (ji(t, n, i, r), (o.state = t.memoizedState)),
            'function' == typeof n.getDerivedStateFromProps ||
              'function' == typeof o.getSnapshotBeforeUpdate ||
              ('function' != typeof o.UNSAFE_componentWillMount && 'function' != typeof o.componentWillMount) ||
              ((i = o.state),
              'function' == typeof o.componentWillMount && o.componentWillMount(),
              'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              i !== o.state && Pi.enqueueReplaceState(o, o.state, null),
              Il(t, r, o, a),
              Fl(),
              (o.state = t.memoizedState)),
            'function' == typeof o.componentDidMount && (t.flags |= 4194308),
            (r = !0);
        } else if (null === e) {
          o = t.stateNode;
          var l = t.memoizedProps,
            s = Li(n, l);
          o.props = s;
          var u = o.context,
            c = n.contextType;
          (i = Or), 'object' == typeof c && null !== c && (i = _l(c));
          var d = n.getDerivedStateFromProps;
          (c = 'function' == typeof d || 'function' == typeof o.getSnapshotBeforeUpdate),
            (l = t.pendingProps !== l),
            c ||
              ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
              ((l || u !== i) && Oi(t, o, r, i)),
            (Tl = !1);
          var f = t.memoizedState;
          (o.state = f),
            Il(t, r, o, a),
            Fl(),
            (u = t.memoizedState),
            l || f !== u || Tl
              ? ('function' == typeof d && (ji(t, n, d, r), (u = t.memoizedState)),
                (s = Tl || Ni(t, n, s, r, f, u, i))
                  ? (c ||
                      ('function' != typeof o.UNSAFE_componentWillMount && 'function' != typeof o.componentWillMount) ||
                      ('function' == typeof o.componentWillMount && o.componentWillMount(),
                      'function' == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                    'function' == typeof o.componentDidMount && (t.flags |= 4194308))
                  : ('function' == typeof o.componentDidMount && (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (o.props = r),
                (o.state = u),
                (o.context = i),
                (r = s))
              : ('function' == typeof o.componentDidMount && (t.flags |= 4194308), (r = !1));
        } else {
          (o = t.stateNode),
            Pl(e, t),
            (c = Li(n, (i = t.memoizedProps))),
            (o.props = c),
            (d = t.pendingProps),
            (f = o.context),
            (u = n.contextType),
            (s = Or),
            'object' == typeof u && null !== u && (s = _l(u)),
            (u =
              'function' == typeof (l = n.getDerivedStateFromProps) ||
              'function' == typeof o.getSnapshotBeforeUpdate) ||
              ('function' != typeof o.UNSAFE_componentWillReceiveProps &&
                'function' != typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== s) && Oi(t, o, r, s)),
            (Tl = !1),
            (f = t.memoizedState),
            (o.state = f),
            Il(t, r, o, a),
            Fl();
          var p = t.memoizedState;
          i !== d || f !== p || Tl || (null !== e && null !== e.dependencies && xl(e.dependencies))
            ? ('function' == typeof l && (ji(t, n, l, r), (p = t.memoizedState)),
              (c = Tl || Ni(t, n, c, r, f, p, s) || (null !== e && null !== e.dependencies && xl(e.dependencies)))
                ? (u ||
                    ('function' != typeof o.UNSAFE_componentWillUpdate && 'function' != typeof o.componentWillUpdate) ||
                    ('function' == typeof o.componentWillUpdate && o.componentWillUpdate(r, p, s),
                    'function' == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(r, p, s)),
                  'function' == typeof o.componentDidUpdate && (t.flags |= 4),
                  'function' == typeof o.getSnapshotBeforeUpdate && (t.flags |= 1024))
                : ('function' != typeof o.componentDidUpdate ||
                    (i === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  'function' != typeof o.getSnapshotBeforeUpdate ||
                    (i === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (o.props = r),
              (o.state = p),
              (o.context = s),
              (r = c))
            : ('function' != typeof o.componentDidUpdate ||
                (i === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              'function' != typeof o.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1));
        }
        return (
          (o = r),
          Xi(e, t),
          (r = !!(128 & t.flags)),
          o || r
            ? ((o = t.stateNode),
              (n = r && 'function' != typeof n.getDerivedStateFromError ? null : o.render()),
              (t.flags |= 1),
              null !== e && r ? ((t.child = ka(t, e.child, null, a)), (t.child = ka(t, null, n, a))) : Gi(e, t, n, a),
              (t.memoizedState = o.state),
              (e = t.child))
            : (e = fl(e, t, a)),
          e
        );
      }
      function tl(e, t, n, r) {
        return aa(), (t.flags |= 256), Gi(e, t, n, r), t.child;
      }
      var nl = { dehydrated: null, treeContext: null, retryLane: 0 };
      function rl(e) {
        return { baseLanes: e, cachePool: Xa() };
      }
      function al(e, t, n) {
        return (e = null !== e ? e.childLanes & ~n : 0), t && (e |= mu), e;
      }
      function ol(e, t, n) {
        var r,
          a = t.pendingProps,
          o = !1,
          l = !!(128 & t.flags);
        if (
          ((r = l) || (r = (null === e || null !== e.memoizedState) && !!(2 & Ra.current)),
          r && ((o = !0), (t.flags &= -129)),
          (r = !!(32 & t.flags)),
          (t.flags &= -33),
          null === e)
        ) {
          if (Yr) {
            if ((o ? Pa(t) : Oa(), Yr)) {
              var s,
                u = Kr;
              if ((s = u)) {
                e: {
                  for (s = u, u = Zr; 8 !== s.nodeType; ) {
                    if (!u) {
                      u = null;
                      break e;
                    }
                    if (null === (s = ld(s.nextSibling))) {
                      u = null;
                      break e;
                    }
                  }
                  u = s;
                }
                null !== u
                  ? ((t.memoizedState = {
                      dehydrated: u,
                      treeContext: null !== $r ? { id: Ur, overflow: qr } : null,
                      retryLane: 536870912,
                    }),
                    ((s = Ds(18, null, null, 0)).stateNode = u),
                    (s.return = t),
                    (t.child = s),
                    (Qr = t),
                    (Kr = null),
                    (s = !0))
                  : (s = !1);
              }
              s || ea(t);
            }
            if (null !== (u = t.memoizedState) && null !== (u = u.dehydrated))
              return '$!' === u.data ? (t.lanes = 16) : (t.lanes = 536870912), null;
            La(t);
          }
          return (
            (u = a.children),
            (a = a.fallback),
            o
              ? (Oa(),
                (u = ll({ mode: 'hidden', children: u }, (o = t.mode))),
                (a = Bs(a, o, n, null)),
                (u.return = t),
                (a.return = t),
                (u.sibling = a),
                (t.child = u),
                ((o = t.child).memoizedState = rl(n)),
                (o.childLanes = al(e, r, n)),
                (t.memoizedState = nl),
                a)
              : (Pa(t), il(t, u))
          );
        }
        if (null !== (s = e.memoizedState) && null !== (u = s.dehydrated)) {
          if (l)
            256 & t.flags
              ? (Pa(t), (t.flags &= -257), (t = sl(e, t, n)))
              : null !== t.memoizedState
              ? (Oa(), (t.child = e.child), (t.flags |= 128), (t = null))
              : (Oa(),
                (o = a.fallback),
                (u = t.mode),
                (a = ll({ mode: 'visible', children: a.children }, u)),
                ((o = Bs(o, u, n, null)).flags |= 2),
                (a.return = t),
                (o.return = t),
                (a.sibling = o),
                (t.child = a),
                ka(t, e.child, null, n),
                ((a = t.child).memoizedState = rl(n)),
                (a.childLanes = al(e, r, n)),
                (t.memoizedState = nl),
                (t = o));
          else if ((Pa(t), '$!' === u.data)) {
            if ((r = u.nextSibling && u.nextSibling.dataset)) var c = r.dgst;
            (r = c),
              ((a = Error(i(419))).stack = ''),
              (a.digest = r),
              oa({ value: a, source: null, stack: null }),
              (t = sl(e, t, n));
          } else if ((Hi || Sl(e, t, n, !1), (r = !!(n & e.childLanes)), Hi || r)) {
            if (null !== (r = tu)) {
              if (42 & (a = n & -n)) a = 1;
              else
                switch (a) {
                  case 2:
                    a = 1;
                    break;
                  case 8:
                    a = 4;
                    break;
                  case 32:
                    a = 16;
                    break;
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                    a = 64;
                    break;
                  case 268435456:
                    a = 134217728;
                    break;
                  default:
                    a = 0;
                }
              if (0 !== (a = a & (r.suspendedLanes | n) ? 0 : a) && a !== s.retryLane)
                throw ((s.retryLane = a), jr(e, a), Ou(r, e, a), qi);
            }
            '$?' === u.data || Hu(), (t = sl(e, t, n));
          } else
            '$?' === u.data
              ? ((t.flags |= 128), (t.child = e.child), (t = lc.bind(null, e)), (u._reactRetry = t), (t = null))
              : ((e = s.treeContext),
                (Kr = ld(u.nextSibling)),
                (Qr = t),
                (Yr = !0),
                (Xr = null),
                (Zr = !1),
                null !== e &&
                  ((zr[Br++] = Ur), (zr[Br++] = qr), (zr[Br++] = $r), (Ur = e.id), (qr = e.overflow), ($r = t)),
                ((t = il(t, a.children)).flags |= 4096));
          return t;
        }
        return o
          ? (Oa(),
            (o = a.fallback),
            (u = t.mode),
            (c = (s = e.child).sibling),
            ((a = Is(s, { mode: 'hidden', children: a.children })).subtreeFlags = 31457280 & s.subtreeFlags),
            null !== c ? (o = Is(c, o)) : ((o = Bs(o, u, n, null)).flags |= 2),
            (o.return = t),
            (a.return = t),
            (a.sibling = o),
            (t.child = a),
            (a = o),
            (o = t.child),
            null === (u = e.child.memoizedState)
              ? (u = rl(n))
              : (null !== (s = u.cachePool)
                  ? ((c = za._currentValue), (s = s.parent !== c ? { parent: c, pool: c } : s))
                  : (s = Xa()),
                (u = { baseLanes: u.baseLanes | n, cachePool: s })),
            (o.memoizedState = u),
            (o.childLanes = al(e, r, n)),
            (t.memoizedState = nl),
            a)
          : (Pa(t),
            (e = (n = e.child).sibling),
            ((n = Is(n, { mode: 'visible', children: a.children })).return = t),
            (n.sibling = null),
            null !== e && (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
            (t.child = n),
            (t.memoizedState = null),
            n);
      }
      function il(e, t) {
        return ((t = ll({ mode: 'visible', children: t }, e.mode)).return = e), (e.child = t);
      }
      function ll(e, t) {
        return $s(e, t, 0, null);
      }
      function sl(e, t, n) {
        return ka(t, e.child, null, n), ((e = il(t, t.pendingProps.children)).flags |= 2), (t.memoizedState = null), e;
      }
      function ul(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        null !== r && (r.lanes |= t), wl(e.return, t, n);
      }
      function cl(e, t, n, r, a) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a));
      }
      function dl(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail;
        if ((Gi(e, t, r.children, n), 2 & (r = Ra.current))) (r = (1 & r) | 2), (t.flags |= 128);
        else {
          if (null !== e && 128 & e.flags)
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && ul(e, n, t);
              else if (19 === e.tag) ul(e, n, t);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        switch ((Q(Ra, r), a)) {
          case 'forwards':
            for (n = t.child, a = null; null !== n; )
              null !== (e = n.alternate) && null === Da(e) && (a = n), (n = n.sibling);
            null === (n = a) ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
              cl(t, !1, a, n, o);
            break;
          case 'backwards':
            for (n = null, a = t.child, t.child = null; null !== a; ) {
              if (null !== (e = a.alternate) && null === Da(e)) {
                t.child = a;
                break;
              }
              (e = a.sibling), (a.sibling = n), (n = a), (a = e);
            }
            cl(t, !0, n, null, o);
            break;
          case 'together':
            cl(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
        return t.child;
      }
      function fl(e, t, n) {
        if ((null !== e && (t.dependencies = e.dependencies), (du |= t.lanes), !(n & t.childLanes))) {
          if (null === e) return null;
          if ((Sl(e, t, n, !1), !(n & t.childLanes))) return null;
        }
        if (null !== e && t.child !== e.child) throw Error(i(153));
        if (null !== t.child) {
          for (n = Is((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
            (e = e.sibling), ((n = n.sibling = Is(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function pl(e, t) {
        return !!(e.lanes & t) || !(null === (e = e.dependencies) || !xl(e));
      }
      function ml(e, t, n) {
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps) Hi = !0;
          else {
            if (!(pl(e, n) || 128 & t.flags))
              return (
                (Hi = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      J(t, t.stateNode.containerInfo), bl(t, za, e.memoizedState.cache), aa();
                      break;
                    case 27:
                    case 5:
                      te(t);
                      break;
                    case 4:
                      J(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      bl(t, t.type, t.memoizedProps.value);
                      break;
                    case 13:
                      var r = t.memoizedState;
                      if (null !== r)
                        return null !== r.dehydrated
                          ? (Pa(t), (t.flags |= 128), null)
                          : n & t.child.childLanes
                          ? ol(e, t, n)
                          : (Pa(t), null !== (e = fl(e, t, n)) ? e.sibling : null);
                      Pa(t);
                      break;
                    case 19:
                      var a = !!(128 & e.flags);
                      if (((r = !!(n & t.childLanes)) || (Sl(e, t, n, !1), (r = !!(n & t.childLanes))), a)) {
                        if (r) return dl(e, t, n);
                        t.flags |= 128;
                      }
                      if (
                        (null !== (a = t.memoizedState) &&
                          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
                        Q(Ra, Ra.current),
                        r)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return (t.lanes = 0), Ki(e, t, n);
                    case 24:
                      bl(t, za, e.memoizedState.cache);
                  }
                  return fl(e, t, n);
                })(e, t, n)
              );
            Hi = !!(131072 & e.flags);
          }
        else (Hi = !1), Yr && 1048576 & t.flags && Gr(t, Mr, t.index);
        switch (((t.lanes = 0), t.tag)) {
          case 16:
            e: {
              e = t.pendingProps;
              var r = t.elementType,
                a = r._init;
              if (((r = a(r._payload)), (t.type = r), 'function' != typeof r)) {
                if (null != r) {
                  if ((a = r.$$typeof) === y) {
                    (t.tag = 11), (t = Vi(null, t, r, e, n));
                    break e;
                  }
                  if (a === w) {
                    (t.tag = 14), (t = Wi(null, t, r, e, n));
                    break e;
                  }
                }
                throw ((t = A(r) || r), Error(i(306, t, '')));
              }
              Fs(r)
                ? ((e = Li(r, e)), (t.tag = 1), (t = el(null, t, r, e, n)))
                : ((t.tag = 0), (t = Zi(null, t, r, e, n)));
            }
            return t;
          case 0:
            return Zi(e, t, t.type, t.pendingProps, n);
          case 1:
            return el(e, t, (r = t.type), (a = Li(r, t.pendingProps)), n);
          case 3:
            e: {
              if ((J(t, t.stateNode.containerInfo), null === e)) throw Error(i(387));
              var o = t.pendingProps;
              (r = (a = t.memoizedState).element), Pl(e, t), Il(t, o, null, n);
              var l = t.memoizedState;
              if (
                ((o = l.cache),
                bl(t, za, o),
                o !== a.cache && kl(t, [za], n, !0),
                Fl(),
                (o = l.element),
                a.isDehydrated)
              ) {
                if (
                  ((a = { element: o, isDehydrated: !1, cache: l.cache }),
                  (t.updateQueue.baseState = a),
                  (t.memoizedState = a),
                  256 & t.flags)
                ) {
                  t = tl(e, t, o, n);
                  break e;
                }
                if (o !== r) {
                  oa((r = Rr(Error(i(424)), t))), (t = tl(e, t, o, n));
                  break e;
                }
                for (
                  Kr = ld(t.stateNode.containerInfo.firstChild),
                    Qr = t,
                    Yr = !0,
                    Xr = null,
                    Zr = !0,
                    n = Sa(t, null, o, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
              } else {
                if ((aa(), o === r)) {
                  t = fl(e, t, n);
                  break e;
                }
                Gi(e, t, o, n);
              }
              t = t.child;
            }
            return t;
          case 26:
            return (
              Xi(e, t),
              null === e
                ? (n = gd(t.type, null, t.pendingProps, null))
                  ? (t.memoizedState = n)
                  : Yr ||
                    ((n = t.type),
                    (e = t.pendingProps),
                    ((r = Kc(X.current).createElement(n))[Me] = t),
                    (r[ze] = e),
                    Vc(r, n, e),
                    Xe(r),
                    (t.stateNode = r))
                : (t.memoizedState = gd(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
              null
            );
          case 27:
            return (
              te(t),
              null === e &&
                Yr &&
                ((r = t.stateNode = ud(t.type, t.pendingProps, X.current)),
                (Qr = t),
                (Zr = !0),
                (Kr = ld(r.firstChild))),
              (r = t.pendingProps.children),
              null !== e || Yr ? Gi(e, t, r, n) : (t.child = ka(t, null, r, n)),
              Xi(e, t),
              t.child
            );
          case 5:
            return (
              null === e &&
                Yr &&
                ((a = r = Kr) &&
                  (null !==
                  (r = (function (e, t, n, r) {
                    for (; 1 === e.nodeType; ) {
                      var a = n;
                      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                        if (!r && ('INPUT' !== e.nodeName || 'hidden' !== e.type)) break;
                      } else if (r) {
                        if (!e[Ge])
                          switch (t) {
                            case 'meta':
                              if (!e.hasAttribute('itemprop')) break;
                              return e;
                            case 'link':
                              if ('stylesheet' === (o = e.getAttribute('rel')) && e.hasAttribute('data-precedence'))
                                break;
                              if (
                                o !== a.rel ||
                                e.getAttribute('href') !== (null == a.href ? null : a.href) ||
                                e.getAttribute('crossorigin') !== (null == a.crossOrigin ? null : a.crossOrigin) ||
                                e.getAttribute('title') !== (null == a.title ? null : a.title)
                              )
                                break;
                              return e;
                            case 'style':
                              if (e.hasAttribute('data-precedence')) break;
                              return e;
                            case 'script':
                              if (
                                ((o = e.getAttribute('src')) !== (null == a.src ? null : a.src) ||
                                  e.getAttribute('type') !== (null == a.type ? null : a.type) ||
                                  e.getAttribute('crossorigin') !== (null == a.crossOrigin ? null : a.crossOrigin)) &&
                                o &&
                                e.hasAttribute('async') &&
                                !e.hasAttribute('itemprop')
                              )
                                break;
                              return e;
                            default:
                              return e;
                          }
                      } else {
                        if ('input' !== t || 'hidden' !== e.type) return e;
                        var o = null == a.name ? null : '' + a.name;
                        if ('hidden' === a.type && e.getAttribute('name') === o) return e;
                      }
                      if (null === (e = ld(e.nextSibling))) break;
                    }
                    return null;
                  })(r, t.type, t.pendingProps, Zr))
                    ? ((t.stateNode = r), (Qr = t), (Kr = ld(r.firstChild)), (Zr = !1), (a = !0))
                    : (a = !1)),
                a || ea(t)),
              te(t),
              (a = t.type),
              (o = t.pendingProps),
              (l = null !== e ? e.memoizedProps : null),
              (r = o.children),
              Zc(a, o) ? (r = null) : null !== l && Zc(a, l) && (t.flags |= 32),
              null !== t.memoizedState && ((a = fo(e, t, ho, null, null, n)), (Fd._currentValue = a)),
              Xi(e, t),
              Gi(e, t, r, n),
              t.child
            );
          case 6:
            return (
              null === e &&
                Yr &&
                ((e = n = Kr) &&
                  (null !==
                  (n = (function (e, t, n) {
                    if ('' === t) return null;
                    for (; 3 !== e.nodeType; ) {
                      if ((1 !== e.nodeType || 'INPUT' !== e.nodeName || 'hidden' !== e.type) && !n) return null;
                      if (null === (e = ld(e.nextSibling))) return null;
                    }
                    return e;
                  })(n, t.pendingProps, Zr))
                    ? ((t.stateNode = n), (Qr = t), (Kr = null), (e = !0))
                    : (e = !1)),
                e || ea(t)),
              null
            );
          case 13:
            return ol(e, t, n);
          case 4:
            return (
              J(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = ka(t, null, r, n)) : Gi(e, t, r, n),
              t.child
            );
          case 11:
            return Vi(e, t, t.type, t.pendingProps, n);
          case 7:
            return Gi(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Gi(e, t, t.pendingProps.children, n), t.child;
          case 10:
            return (r = t.pendingProps), bl(t, t.type, r.value), Gi(e, t, r.children, n), t.child;
          case 9:
            return (
              (a = t.type._context),
              (r = t.pendingProps.children),
              El(t),
              (r = r((a = _l(a)))),
              (t.flags |= 1),
              Gi(e, t, r, n),
              t.child
            );
          case 14:
            return Wi(e, t, t.type, t.pendingProps, n);
          case 15:
            return Qi(e, t, t.type, t.pendingProps, n);
          case 19:
            return dl(e, t, n);
          case 22:
            return Ki(e, t, n);
          case 24:
            return (
              El(t),
              (r = _l(za)),
              null === e
                ? (null === (a = Ka()) &&
                    ((a = tu),
                    (o = Ba()),
                    (a.pooledCache = o),
                    o.refCount++,
                    null !== o && (a.pooledCacheLanes |= n),
                    (a = o)),
                  (t.memoizedState = { parent: r, cache: a }),
                  jl(t),
                  bl(t, za, a))
                : (!!(e.lanes & n) && (Pl(e, t), Il(t, null, null, n), Fl()),
                  (a = e.memoizedState),
                  (o = t.memoizedState),
                  a.parent !== r
                    ? ((a = { parent: r, cache: r }),
                      (t.memoizedState = a),
                      0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a),
                      bl(t, za, r))
                    : ((r = o.cache), bl(t, za, r), r !== a.cache && kl(t, [za], n, !0))),
              Gi(e, t, t.pendingProps.children, n),
              t.child
            );
          case 29:
            throw t.pendingProps;
        }
        throw Error(i(156, t.tag));
      }
      var hl = V(null),
        gl = null,
        yl = null;
      function bl(e, t, n) {
        Q(hl, t._currentValue), (t._currentValue = n);
      }
      function vl(e) {
        (e._currentValue = hl.current), W(hl);
      }
      function wl(e, t, n) {
        for (; null !== e; ) {
          var r = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
              : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function kl(e, t, n, r) {
        var a = e.child;
        for (null !== a && (a.return = e); null !== a; ) {
          var o = a.dependencies;
          if (null !== o) {
            var l = a.child;
            o = o.firstContext;
            e: for (; null !== o; ) {
              var s = o;
              o = a;
              for (var u = 0; u < t.length; u++)
                if (s.context === t[u]) {
                  (o.lanes |= n), null !== (s = o.alternate) && (s.lanes |= n), wl(o.return, n, e), r || (l = null);
                  break e;
                }
              o = s.next;
            }
          } else if (18 === a.tag) {
            if (null === (l = a.return)) throw Error(i(341));
            (l.lanes |= n), null !== (o = l.alternate) && (o.lanes |= n), wl(l, n, e), (l = null);
          } else l = a.child;
          if (null !== l) l.return = a;
          else
            for (l = a; null !== l; ) {
              if (l === e) {
                l = null;
                break;
              }
              if (null !== (a = l.sibling)) {
                (a.return = l.return), (l = a);
                break;
              }
              l = l.return;
            }
          a = l;
        }
      }
      function Sl(e, t, n, r) {
        e = null;
        for (var a = t, o = !1; null !== a; ) {
          if (!o)
            if (524288 & a.flags) o = !0;
            else if (262144 & a.flags) break;
          if (10 === a.tag) {
            var l = a.alternate;
            if (null === l) throw Error(i(387));
            if (null !== (l = l.memoizedProps)) {
              var s = a.type;
              Qn(a.pendingProps.value, l.value) || (null !== e ? e.push(s) : (e = [s]));
            }
          } else if (a === Z.current) {
            if (null === (l = a.alternate)) throw Error(i(387));
            l.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(Fd) : (e = [Fd]));
          }
          a = a.return;
        }
        null !== e && kl(t, e, n, r), (t.flags |= 262144);
      }
      function xl(e) {
        for (e = e.firstContext; null !== e; ) {
          if (!Qn(e.context._currentValue, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function El(e) {
        (gl = e), (yl = null), null !== (e = e.dependencies) && (e.firstContext = null);
      }
      function _l(e) {
        return Al(gl, e);
      }
      function Cl(e, t) {
        return null === gl && El(e), Al(e, t);
      }
      function Al(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), null === yl)) {
          if (null === e) throw Error(i(308));
          (yl = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288);
        } else yl = yl.next = t;
        return n;
      }
      var Tl = !1;
      function jl(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null,
        };
      }
      function Pl(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              callbacks: null,
            });
      }
      function Nl(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function Ol(e, t, n) {
        var r = e.updateQueue;
        if (null === r) return null;
        if (((r = r.shared), 2 & eu)) {
          var a = r.pending;
          return (
            null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
            (r.pending = t),
            (t = Nr(e)),
            Pr(e, null, n),
            t
          );
        }
        return Ar(e, r, t, n), Nr(e);
      }
      function Ll(e, t, n) {
        if (null !== (t = t.updateQueue) && ((t = t.shared), 4194176 & n)) {
          var r = t.lanes;
          (n |= r &= e.pendingLanes), (t.lanes = n), Re(e, n);
        }
      }
      function Rl(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
              null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
            } while (null !== n);
            null === o ? (a = o = t) : (o = o.next = t);
          } else a = o = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: o,
              shared: r.shared,
              callbacks: r.callbacks,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
      }
      var Dl = !1;
      function Fl() {
        if (Dl) {
          if (null !== Ga) throw Ga;
        }
      }
      function Il(e, t, n, r) {
        Dl = !1;
        var a = e.updateQueue;
        Tl = !1;
        var o = a.firstBaseUpdate,
          i = a.lastBaseUpdate,
          l = a.shared.pending;
        if (null !== l) {
          a.shared.pending = null;
          var s = l,
            u = s.next;
          (s.next = null), null === i ? (o = u) : (i.next = u), (i = s);
          var c = e.alternate;
          null !== c &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
            (null === l ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s));
        }
        if (null !== o) {
          var d = a.baseState;
          for (i = 0, c = u = s = null, l = o; ; ) {
            var f = -536870913 & l.lane,
              p = f !== l.lane;
            if (p ? (ru & f) === f : (r & f) === f) {
              0 !== f && f === Ha && (Dl = !0),
                null !== c && (c = c.next = { lane: 0, tag: l.tag, payload: l.payload, callback: null, next: null });
              e: {
                var m = e,
                  h = l;
                f = t;
                var g = n;
                switch (h.tag) {
                  case 1:
                    if ('function' == typeof (m = h.payload)) {
                      d = m.call(g, d, f);
                      break e;
                    }
                    d = m;
                    break e;
                  case 3:
                    m.flags = (-65537 & m.flags) | 128;
                  case 0:
                    if (null == (f = 'function' == typeof (m = h.payload) ? m.call(g, d, f) : m)) break e;
                    d = N({}, d, f);
                    break e;
                  case 2:
                    Tl = !0;
                }
              }
              null !== (f = l.callback) &&
                ((e.flags |= 64), p && (e.flags |= 8192), null === (p = a.callbacks) ? (a.callbacks = [f]) : p.push(f));
            } else
              (p = { lane: f, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
                null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                (i |= f);
            if (null === (l = l.next)) {
              if (null === (l = a.shared.pending)) break;
              (l = (p = l).next), (p.next = null), (a.lastBaseUpdate = p), (a.shared.pending = null);
            }
          }
          null === c && (s = d),
            (a.baseState = s),
            (a.firstBaseUpdate = u),
            (a.lastBaseUpdate = c),
            null === o && (a.shared.lanes = 0),
            (du |= i),
            (e.lanes = i),
            (e.memoizedState = d);
        }
      }
      function Ml(e, t) {
        if ('function' != typeof e) throw Error(i(191, e));
        e.call(t);
      }
      function zl(e, t) {
        var n = e.callbacks;
        if (null !== n) for (e.callbacks = null, e = 0; e < n.length; e++) Ml(n[e], t);
      }
      function Bl(e, t) {
        try {
          var n = t.updateQueue,
            r = null !== n ? n.lastEffect : null;
          if (null !== r) {
            var a = r.next;
            n = a;
            do {
              if ((n.tag & e) === e) {
                r = void 0;
                var o = n.create,
                  i = n.inst;
                (r = o()), (i.destroy = r);
              }
              n = n.next;
            } while (n !== a);
          }
        } catch (l) {
          rc(t, t.return, l);
        }
      }
      function $l(e, t, n) {
        try {
          var r = t.updateQueue,
            a = null !== r ? r.lastEffect : null;
          if (null !== a) {
            var o = a.next;
            r = o;
            do {
              if ((r.tag & e) === e) {
                var i = r.inst,
                  l = i.destroy;
                if (void 0 !== l) {
                  (i.destroy = void 0), (a = t);
                  var s = n;
                  try {
                    l();
                  } catch (u) {
                    rc(a, s, u);
                  }
                }
              }
              r = r.next;
            } while (r !== o);
          }
        } catch (u) {
          rc(t, t.return, u);
        }
      }
      function Ul(e) {
        var t = e.updateQueue;
        if (null !== t) {
          var n = e.stateNode;
          try {
            zl(t, n);
          } catch (r) {
            rc(e, e.return, r);
          }
        }
      }
      function ql(e, t, n) {
        (n.props = Li(e.type, e.memoizedProps)), (n.state = e.memoizedState);
        try {
          n.componentWillUnmount();
        } catch (r) {
          rc(e, t, r);
        }
      }
      function Hl(e, t) {
        try {
          var n = e.ref;
          if (null !== n) {
            var r = e.stateNode;
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var a = r;
                break;
              default:
                a = r;
            }
            'function' == typeof n ? (e.refCleanup = n(a)) : (n.current = a);
          }
        } catch (o) {
          rc(e, t, o);
        }
      }
      function Gl(e, t) {
        var n = e.ref,
          r = e.refCleanup;
        if (null !== n)
          if ('function' == typeof r)
            try {
              r();
            } catch (a) {
              rc(e, t, a);
            } finally {
              (e.refCleanup = null), null != (e = e.alternate) && (e.refCleanup = null);
            }
          else if ('function' == typeof n)
            try {
              n(null);
            } catch (o) {
              rc(e, t, o);
            }
          else n.current = null;
      }
      function Vl(e) {
        var t = e.type,
          n = e.memoizedProps,
          r = e.stateNode;
        try {
          e: switch (t) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              n.autoFocus && r.focus();
              break e;
            case 'img':
              n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
          }
        } catch (a) {
          rc(e, e.return, a);
        }
      }
      function Wl(e, t, n) {
        try {
          var r = e.stateNode;
          !(function (e, t, n, r) {
            switch (t) {
              case 'div':
              case 'span':
              case 'svg':
              case 'path':
              case 'a':
              case 'g':
              case 'p':
              case 'li':
                break;
              case 'input':
                var a = null,
                  o = null,
                  l = null,
                  s = null,
                  u = null,
                  c = null,
                  d = null;
                for (m in n) {
                  var f = n[m];
                  if (n.hasOwnProperty(m) && null != f)
                    switch (m) {
                      case 'checked':
                      case 'value':
                        break;
                      case 'defaultValue':
                        u = f;
                      default:
                        r.hasOwnProperty(m) || Hc(e, t, m, null, r, f);
                    }
                }
                for (var p in r) {
                  var m = r[p];
                  if (((f = n[p]), r.hasOwnProperty(p) && (null != m || null != f)))
                    switch (p) {
                      case 'type':
                        o = m;
                        break;
                      case 'name':
                        a = m;
                        break;
                      case 'checked':
                        c = m;
                        break;
                      case 'defaultChecked':
                        d = m;
                        break;
                      case 'value':
                        l = m;
                        break;
                      case 'defaultValue':
                        s = m;
                        break;
                      case 'children':
                      case 'dangerouslySetInnerHTML':
                        if (null != m) throw Error(i(137, t));
                        break;
                      default:
                        m !== f && Hc(e, t, p, m, r, f);
                    }
                }
                return void gt(e, l, s, u, c, d, o, a);
              case 'select':
                for (o in ((m = l = s = p = null), n))
                  if (((u = n[o]), n.hasOwnProperty(o) && null != u))
                    switch (o) {
                      case 'value':
                        break;
                      case 'multiple':
                        m = u;
                      default:
                        r.hasOwnProperty(o) || Hc(e, t, o, null, r, u);
                    }
                for (a in r)
                  if (((o = r[a]), (u = n[a]), r.hasOwnProperty(a) && (null != o || null != u)))
                    switch (a) {
                      case 'value':
                        p = o;
                        break;
                      case 'defaultValue':
                        s = o;
                        break;
                      case 'multiple':
                        l = o;
                      default:
                        o !== u && Hc(e, t, a, o, r, u);
                    }
                return (
                  (t = s),
                  (n = l),
                  (r = m),
                  void (null != p
                    ? vt(e, !!n, p, !1)
                    : !!r != !!n && (null != t ? vt(e, !!n, t, !0) : vt(e, !!n, n ? [] : '', !1)))
                );
              case 'textarea':
                for (s in ((m = p = null), n))
                  if (((a = n[s]), n.hasOwnProperty(s) && null != a && !r.hasOwnProperty(s)))
                    switch (s) {
                      case 'value':
                      case 'children':
                        break;
                      default:
                        Hc(e, t, s, null, r, a);
                    }
                for (l in r)
                  if (((a = r[l]), (o = n[l]), r.hasOwnProperty(l) && (null != a || null != o)))
                    switch (l) {
                      case 'value':
                        p = a;
                        break;
                      case 'defaultValue':
                        m = a;
                        break;
                      case 'children':
                        break;
                      case 'dangerouslySetInnerHTML':
                        if (null != a) throw Error(i(91));
                        break;
                      default:
                        a !== o && Hc(e, t, l, a, r, o);
                    }
                return void wt(e, p, m);
              case 'option':
                for (var h in n)
                  if (((p = n[h]), n.hasOwnProperty(h) && null != p && !r.hasOwnProperty(h)))
                    if ('selected' === h) e.selected = !1;
                    else Hc(e, t, h, null, r, p);
                for (u in r)
                  if (((p = r[u]), (m = n[u]), r.hasOwnProperty(u) && p !== m && (null != p || null != m)))
                    if ('selected' === u) e.selected = p && 'function' != typeof p && 'symbol' != typeof p;
                    else Hc(e, t, u, p, r, m);
                return;
              case 'img':
              case 'link':
              case 'area':
              case 'base':
              case 'br':
              case 'col':
              case 'embed':
              case 'hr':
              case 'keygen':
              case 'meta':
              case 'param':
              case 'source':
              case 'track':
              case 'wbr':
              case 'menuitem':
                for (var g in n)
                  (p = n[g]), n.hasOwnProperty(g) && null != p && !r.hasOwnProperty(g) && Hc(e, t, g, null, r, p);
                for (c in r)
                  if (((p = r[c]), (m = n[c]), r.hasOwnProperty(c) && p !== m && (null != p || null != m)))
                    switch (c) {
                      case 'children':
                      case 'dangerouslySetInnerHTML':
                        if (null != p) throw Error(i(137, t));
                        break;
                      default:
                        Hc(e, t, c, p, r, m);
                    }
                return;
              default:
                if (Ct(t)) {
                  for (var y in n)
                    (p = n[y]),
                      n.hasOwnProperty(y) && void 0 !== p && !r.hasOwnProperty(y) && Gc(e, t, y, void 0, r, p);
                  for (d in r)
                    (p = r[d]),
                      (m = n[d]),
                      !r.hasOwnProperty(d) || p === m || (void 0 === p && void 0 === m) || Gc(e, t, d, p, r, m);
                  return;
                }
            }
            for (var b in n)
              (p = n[b]), n.hasOwnProperty(b) && null != p && !r.hasOwnProperty(b) && Hc(e, t, b, null, r, p);
            for (f in r)
              (p = r[f]),
                (m = n[f]),
                !r.hasOwnProperty(f) || p === m || (null == p && null == m) || Hc(e, t, f, p, r, m);
          })(r, e.type, n, t),
            (r[ze] = t);
        } catch (a) {
          rc(e, e.return, a);
        }
      }
      function Ql(e) {
        return 5 === e.tag || 3 === e.tag || 26 === e.tag || 27 === e.tag || 4 === e.tag;
      }
      function Kl(e) {
        e: for (;;) {
          for (; null === e.sibling; ) {
            if (null === e.return || Ql(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            5 !== e.tag && 6 !== e.tag && 27 !== e.tag && 18 !== e.tag;

          ) {
            if (2 & e.flags) continue e;
            if (null === e.child || 4 === e.tag) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function Yl(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r)
          (e = e.stateNode),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = qc));
        else if (4 !== r && 27 !== r && null !== (e = e.child))
          for (Yl(e, t, n), e = e.sibling; null !== e; ) Yl(e, t, n), (e = e.sibling);
      }
      function Xl(e, t, n) {
        var r = e.tag;
        if (5 === r || 6 === r) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && 27 !== r && null !== (e = e.child))
          for (Xl(e, t, n), e = e.sibling; null !== e; ) Xl(e, t, n), (e = e.sibling);
      }
      var Zl = !1,
        Jl = !1,
        es = !1,
        ts = 'function' == typeof WeakSet ? WeakSet : Set,
        ns = null,
        rs = !1;
      function as(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            ys(e, n), 4 & r && Bl(5, n);
            break;
          case 1:
            if ((ys(e, n), 4 & r))
              if (((e = n.stateNode), null === t))
                try {
                  e.componentDidMount();
                } catch (l) {
                  rc(n, n.return, l);
                }
              else {
                var a = Li(n.type, t.memoizedProps);
                t = t.memoizedState;
                try {
                  e.componentDidUpdate(a, t, e.__reactInternalSnapshotBeforeUpdate);
                } catch (s) {
                  rc(n, n.return, s);
                }
              }
            64 & r && Ul(n), 512 & r && Hl(n, n.return);
            break;
          case 3:
            if ((ys(e, n), 64 & r && null !== (r = n.updateQueue))) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 27:
                  case 5:
                  case 1:
                    e = n.child.stateNode;
                }
              try {
                zl(r, e);
              } catch (l) {
                rc(n, n.return, l);
              }
            }
            break;
          case 26:
            ys(e, n), 512 & r && Hl(n, n.return);
            break;
          case 27:
          case 5:
            ys(e, n), null === t && 4 & r && Vl(n), 512 & r && Hl(n, n.return);
            break;
          case 12:
          default:
            ys(e, n);
            break;
          case 13:
            ys(e, n), 4 & r && cs(e, n);
            break;
          case 22:
            if (!(a = null !== n.memoizedState || Zl)) {
              t = (null !== t && null !== t.memoizedState) || Jl;
              var o = Zl,
                i = Jl;
              (Zl = a), (Jl = t) && !i ? vs(e, n, !!(8772 & n.subtreeFlags)) : ys(e, n), (Zl = o), (Jl = i);
            }
            512 & r && ('manual' === n.memoizedProps.mode ? Hl(n, n.return) : Gl(n, n.return));
        }
      }
      function os(e) {
        var t = e.alternate;
        null !== t && ((e.alternate = null), os(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          5 === e.tag && null !== (t = e.stateNode) && Ve(t),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      var is = null,
        ls = !1;
      function ss(e, t, n) {
        for (n = n.child; null !== n; ) us(e, t, n), (n = n.sibling);
      }
      function us(e, t, n) {
        if (be && 'function' == typeof be.onCommitFiberUnmount)
          try {
            be.onCommitFiberUnmount(ye, n);
          } catch (i) {}
        switch (n.tag) {
          case 26:
            Jl || Gl(n, t),
              ss(e, t, n),
              n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode).parentNode.removeChild(n);
            break;
          case 27:
            Jl || Gl(n, t);
            var r = is,
              a = ls;
            for (is = n.stateNode, ss(e, t, n), t = (n = n.stateNode).attributes; t.length; )
              n.removeAttributeNode(t[0]);
            Ve(n), (is = r), (ls = a);
            break;
          case 5:
            Jl || Gl(n, t);
          case 6:
            a = is;
            var o = ls;
            if (((is = null), ss(e, t, n), (ls = o), null !== (is = a)))
              if (ls)
                try {
                  (e = is), (r = n.stateNode), 8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r);
                } catch (l) {
                  rc(n, t, l);
                }
              else
                try {
                  is.removeChild(n.stateNode);
                } catch (l) {
                  rc(n, t, l);
                }
            break;
          case 18:
            null !== is &&
              (ls
                ? ((t = is),
                  (n = n.stateNode),
                  8 === t.nodeType ? od(t.parentNode, n) : 1 === t.nodeType && od(t, n),
                  gf(t))
                : od(is, n.stateNode));
            break;
          case 4:
            (r = is), (a = ls), (is = n.stateNode.containerInfo), (ls = !0), ss(e, t, n), (is = r), (ls = a);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            Jl || $l(2, n, t), Jl || $l(4, n, t), ss(e, t, n);
            break;
          case 1:
            Jl || (Gl(n, t), 'function' == typeof (r = n.stateNode).componentWillUnmount && ql(n, t, r)), ss(e, t, n);
            break;
          case 21:
            ss(e, t, n);
            break;
          case 22:
            Jl || Gl(n, t), (Jl = (r = Jl) || null !== n.memoizedState), ss(e, t, n), (Jl = r);
            break;
          default:
            ss(e, t, n);
        }
      }
      function cs(e, t) {
        if (
          null === t.memoizedState &&
          null !== (e = t.alternate) &&
          null !== (e = e.memoizedState) &&
          null !== (e = e.dehydrated)
        )
          try {
            gf(e);
          } catch (n) {
            rc(t, t.return, n);
          }
      }
      function ds(e, t) {
        var n = (function (e) {
          switch (e.tag) {
            case 13:
            case 19:
              var t = e.stateNode;
              return null === t && (t = e.stateNode = new ts()), t;
            case 22:
              return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new ts()), t;
            default:
              throw Error(i(435, e.tag));
          }
        })(e);
        t.forEach(function (t) {
          var r = sc.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        });
      }
      function fs(e, t) {
        var n = t.deletions;
        if (null !== n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r],
              o = e,
              l = t,
              s = l;
            e: for (; null !== s; ) {
              switch (s.tag) {
                case 27:
                case 5:
                  (is = s.stateNode), (ls = !1);
                  break e;
                case 3:
                case 4:
                  (is = s.stateNode.containerInfo), (ls = !0);
                  break e;
              }
              s = s.return;
            }
            if (null === is) throw Error(i(160));
            us(o, l, a), (is = null), (ls = !1), null !== (o = a.alternate) && (o.return = null), (a.return = null);
          }
        if (13878 & t.subtreeFlags) for (t = t.child; null !== t; ) ms(t, e), (t = t.sibling);
      }
      var ps = null;
      function ms(e, t) {
        var n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            fs(t, e), hs(e), 4 & r && ($l(3, e, e.return), Bl(3, e), $l(5, e, e.return));
            break;
          case 1:
            fs(t, e),
              hs(e),
              512 & r && (Jl || null === n || Gl(n, n.return)),
              64 & r &&
                Zl &&
                null !== (e = e.updateQueue) &&
                null !== (r = e.callbacks) &&
                ((n = e.shared.hiddenCallbacks), (e.shared.hiddenCallbacks = null === n ? r : n.concat(r)));
            break;
          case 26:
            var a = ps;
            if ((fs(t, e), hs(e), 512 & r && (Jl || null === n || Gl(n, n.return)), 4 & r)) {
              var o = null !== n ? n.memoizedState : null;
              if (((r = e.memoizedState), null === n))
                if (null === r)
                  if (null === e.stateNode) {
                    e: {
                      (r = e.type), (n = e.memoizedProps), (a = a.ownerDocument || a);
                      t: switch (r) {
                        case 'title':
                          (!(o = a.getElementsByTagName('title')[0]) ||
                            o[Ge] ||
                            o[Me] ||
                            'http://www.w3.org/2000/svg' === o.namespaceURI ||
                            o.hasAttribute('itemprop')) &&
                            ((o = a.createElement(r)), a.head.insertBefore(o, a.querySelector('head > title'))),
                            Vc(o, r, n),
                            (o[Me] = e),
                            Xe(o),
                            (r = o);
                          break e;
                        case 'link':
                          var l = Ad('link', 'href', a).get(r + (n.href || ''));
                          if (l)
                            for (var s = 0; s < l.length; s++)
                              if (
                                (o = l[s]).getAttribute('href') === (null == n.href ? null : n.href) &&
                                o.getAttribute('rel') === (null == n.rel ? null : n.rel) &&
                                o.getAttribute('title') === (null == n.title ? null : n.title) &&
                                o.getAttribute('crossorigin') === (null == n.crossOrigin ? null : n.crossOrigin)
                              ) {
                                l.splice(s, 1);
                                break t;
                              }
                          Vc((o = a.createElement(r)), r, n), a.head.appendChild(o);
                          break;
                        case 'meta':
                          if ((l = Ad('meta', 'content', a).get(r + (n.content || ''))))
                            for (s = 0; s < l.length; s++)
                              if (
                                (o = l[s]).getAttribute('content') === (null == n.content ? null : '' + n.content) &&
                                o.getAttribute('name') === (null == n.name ? null : n.name) &&
                                o.getAttribute('property') === (null == n.property ? null : n.property) &&
                                o.getAttribute('http-equiv') === (null == n.httpEquiv ? null : n.httpEquiv) &&
                                o.getAttribute('charset') === (null == n.charSet ? null : n.charSet)
                              ) {
                                l.splice(s, 1);
                                break t;
                              }
                          Vc((o = a.createElement(r)), r, n), a.head.appendChild(o);
                          break;
                        default:
                          throw Error(i(468, r));
                      }
                      (o[Me] = e), Xe(o), (r = o);
                    }
                    e.stateNode = r;
                  } else Td(a, e.type, e.stateNode);
                else e.stateNode = Sd(a, r, e.memoizedProps);
              else
                o !== r
                  ? (null === o ? null !== n.stateNode && (n = n.stateNode).parentNode.removeChild(n) : o.count--,
                    null === r ? Td(a, e.type, e.stateNode) : Sd(a, r, e.memoizedProps))
                  : null === r && null !== e.stateNode && Wl(e, e.memoizedProps, n.memoizedProps);
            }
            break;
          case 27:
            if (4 & r && null === e.alternate) {
              (a = e.stateNode), (o = e.memoizedProps);
              try {
                for (var u = a.firstChild; u; ) {
                  var c = u.nextSibling,
                    d = u.nodeName;
                  u[Ge] ||
                    'HEAD' === d ||
                    'BODY' === d ||
                    'SCRIPT' === d ||
                    'STYLE' === d ||
                    ('LINK' === d && 'stylesheet' === u.rel.toLowerCase()) ||
                    a.removeChild(u),
                    (u = c);
                }
                for (var f = e.type, p = a.attributes; p.length; ) a.removeAttributeNode(p[0]);
                Vc(a, f, o), (a[Me] = e), (a[ze] = o);
              } catch (h) {
                rc(e, e.return, h);
              }
            }
          case 5:
            if ((fs(t, e), hs(e), 512 & r && (Jl || null === n || Gl(n, n.return)), 32 & e.flags)) {
              a = e.stateNode;
              try {
                St(a, '');
              } catch (h) {
                rc(e, e.return, h);
              }
            }
            4 & r && null != e.stateNode && Wl(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
              1024 & r && (es = !0);
            break;
          case 6:
            if ((fs(t, e), hs(e), 4 & r)) {
              if (null === e.stateNode) throw Error(i(162));
              (r = e.memoizedProps), (n = e.stateNode);
              try {
                n.nodeValue = r;
              } catch (h) {
                rc(e, e.return, h);
              }
            }
            break;
          case 3:
            if (
              ((Cd = null),
              (a = ps),
              (ps = fd(t.containerInfo)),
              fs(t, e),
              (ps = a),
              hs(e),
              4 & r && null !== n && n.memoizedState.isDehydrated)
            )
              try {
                gf(t.containerInfo);
              } catch (h) {
                rc(e, e.return, h);
              }
            es && ((es = !1), gs(e));
            break;
          case 4:
            (r = ps), (ps = fd(e.stateNode.containerInfo)), fs(t, e), hs(e), (ps = r);
            break;
          case 12:
            fs(t, e), hs(e);
            break;
          case 13:
            fs(t, e),
              hs(e),
              8192 & e.child.flags &&
                (null !== e.memoizedState) != (null !== n && null !== n.memoizedState) &&
                (vu = se()),
              4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), ds(e, r));
            break;
          case 22:
            if (
              (512 & r && (Jl || null === n || Gl(n, n.return)),
              (u = null !== e.memoizedState),
              (c = null !== n && null !== n.memoizedState),
              (Zl = (d = Zl) || u),
              (Jl = (f = Jl) || c),
              fs(t, e),
              (Jl = f),
              (Zl = d),
              hs(e),
              ((t = e.stateNode)._current = e),
              (t._visibility &= -3),
              (t._visibility |= 2 & t._pendingVisibility),
              8192 & r &&
                ((t._visibility = u ? -2 & t._visibility : 1 | t._visibility),
                u && ((t = Zl || Jl), null === n || c || t || bs(e)),
                null === e.memoizedProps || 'manual' !== e.memoizedProps.mode))
            )
              e: for (n = null, t = e; ; ) {
                if (5 === t.tag || 26 === t.tag || 27 === t.tag) {
                  if (null === n) {
                    c = n = t;
                    try {
                      if (((a = c.stateNode), u))
                        'function' == typeof (o = a.style).setProperty
                          ? o.setProperty('display', 'none', 'important')
                          : (o.display = 'none');
                      else {
                        l = c.stateNode;
                        var m = null != (s = c.memoizedProps.style) && s.hasOwnProperty('display') ? s.display : null;
                        l.style.display = null == m || 'boolean' == typeof m ? '' : ('' + m).trim();
                      }
                    } catch (h) {
                      rc(c, c.return, h);
                    }
                  }
                } else if (6 === t.tag) {
                  if (null === n) {
                    c = t;
                    try {
                      c.stateNode.nodeValue = u ? '' : c.memoizedProps;
                    } catch (h) {
                      rc(c, c.return, h);
                    }
                  }
                } else if (
                  ((22 !== t.tag && 23 !== t.tag) || null === t.memoizedState || t === e) &&
                  null !== t.child
                ) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === e) break e;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === e) break e;
                  n === t && (n = null), (t = t.return);
                }
                n === t && (n = null), (t.sibling.return = t.return), (t = t.sibling);
              }
            4 & r && null !== (r = e.updateQueue) && null !== (n = r.retryQueue) && ((r.retryQueue = null), ds(e, n));
            break;
          case 19:
            fs(t, e), hs(e), 4 & r && null !== (r = e.updateQueue) && ((e.updateQueue = null), ds(e, r));
            break;
          case 21:
            break;
          default:
            fs(t, e), hs(e);
        }
      }
      function hs(e) {
        var t = e.flags;
        if (2 & t) {
          try {
            if (27 !== e.tag) {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (Ql(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 27:
                  var a = r.stateNode;
                  Xl(e, Kl(e), a);
                  break;
                case 5:
                  var o = r.stateNode;
                  32 & r.flags && (St(o, ''), (r.flags &= -33)), Xl(e, Kl(e), o);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  Yl(e, Kl(e), l);
                  break;
                default:
                  throw Error(i(161));
              }
            }
          } catch (s) {
            rc(e, e.return, s);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function gs(e) {
        if (1024 & e.subtreeFlags)
          for (e = e.child; null !== e; ) {
            var t = e;
            gs(t), 5 === t.tag && 1024 & t.flags && t.stateNode.reset(), (e = e.sibling);
          }
      }
      function ys(e, t) {
        if (8772 & t.subtreeFlags) for (t = t.child; null !== t; ) as(e, t.alternate, t), (t = t.sibling);
      }
      function bs(e) {
        for (e = e.child; null !== e; ) {
          var t = e;
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              $l(4, t, t.return), bs(t);
              break;
            case 1:
              Gl(t, t.return);
              var n = t.stateNode;
              'function' == typeof n.componentWillUnmount && ql(t, t.return, n), bs(t);
              break;
            case 26:
            case 27:
            case 5:
              Gl(t, t.return), bs(t);
              break;
            case 22:
              Gl(t, t.return), null === t.memoizedState && bs(t);
              break;
            default:
              bs(t);
          }
          e = e.sibling;
        }
      }
      function vs(e, t, n) {
        for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
          var r = t.alternate,
            a = e,
            o = t,
            i = o.flags;
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              vs(a, o, n), Bl(4, o);
              break;
            case 1:
              if ((vs(a, o, n), 'function' == typeof (a = (r = o).stateNode).componentDidMount))
                try {
                  a.componentDidMount();
                } catch (u) {
                  rc(r, r.return, u);
                }
              if (null !== (a = (r = o).updateQueue)) {
                var l = r.stateNode;
                try {
                  var s = a.shared.hiddenCallbacks;
                  if (null !== s) for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++) Ml(s[a], l);
                } catch (u) {
                  rc(r, r.return, u);
                }
              }
              n && 64 & i && Ul(o), Hl(o, o.return);
              break;
            case 26:
            case 27:
            case 5:
              vs(a, o, n), n && null === r && 4 & i && Vl(o), Hl(o, o.return);
              break;
            case 12:
            default:
              vs(a, o, n);
              break;
            case 13:
              vs(a, o, n), n && 4 & i && cs(a, o);
              break;
            case 22:
              null === o.memoizedState && vs(a, o, n), Hl(o, o.return);
          }
          t = t.sibling;
        }
      }
      function ws(e, t) {
        var n = null;
        null !== e &&
          null !== e.memoizedState &&
          null !== e.memoizedState.cachePool &&
          (n = e.memoizedState.cachePool.pool),
          (e = null),
          null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool),
          e !== n && (null != e && e.refCount++, null != n && $a(n));
      }
      function ks(e, t) {
        (e = null),
          null !== t.alternate && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && $a(e));
      }
      function Ss(e, t, n, r) {
        if (10256 & t.subtreeFlags) for (t = t.child; null !== t; ) xs(e, t, n, r), (t = t.sibling);
      }
      function xs(e, t, n, r) {
        var a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ss(e, t, n, r), 2048 & a && Bl(9, t);
            break;
          case 3:
            Ss(e, t, n, r),
              2048 & a &&
                ((e = null),
                null !== t.alternate && (e = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && $a(e)));
            break;
          case 12:
            if (2048 & a) {
              Ss(e, t, n, r), (e = t.stateNode);
              try {
                var o = t.memoizedProps,
                  i = o.id,
                  l = o.onPostCommit;
                'function' == typeof l && l(i, null === t.alternate ? 'mount' : 'update', e.passiveEffectDuration, -0);
              } catch (s) {
                rc(t, t.return, s);
              }
            } else Ss(e, t, n, r);
            break;
          case 23:
            break;
          case 22:
            (o = t.stateNode),
              null !== t.memoizedState
                ? 4 & o._visibility
                  ? Ss(e, t, n, r)
                  : _s(e, t)
                : 4 & o._visibility
                ? Ss(e, t, n, r)
                : ((o._visibility |= 4), Es(e, t, n, r, !!(10256 & t.subtreeFlags))),
              2048 & a && ws(t.alternate, t);
            break;
          case 24:
            Ss(e, t, n, r), 2048 & a && ks(t.alternate, t);
            break;
          default:
            Ss(e, t, n, r);
        }
      }
      function Es(e, t, n, r, a) {
        for (a = a && !!(10256 & t.subtreeFlags), t = t.child; null !== t; ) {
          var o = e,
            i = t,
            l = n,
            s = r,
            u = i.flags;
          switch (i.tag) {
            case 0:
            case 11:
            case 15:
              Es(o, i, l, s, a), Bl(8, i);
              break;
            case 23:
              break;
            case 22:
              var c = i.stateNode;
              null !== i.memoizedState
                ? 4 & c._visibility
                  ? Es(o, i, l, s, a)
                  : _s(o, i)
                : ((c._visibility |= 4), Es(o, i, l, s, a)),
                a && 2048 & u && ws(i.alternate, i);
              break;
            case 24:
              Es(o, i, l, s, a), a && 2048 & u && ks(i.alternate, i);
              break;
            default:
              Es(o, i, l, s, a);
          }
          t = t.sibling;
        }
      }
      function _s(e, t) {
        if (10256 & t.subtreeFlags)
          for (t = t.child; null !== t; ) {
            var n = e,
              r = t,
              a = r.flags;
            switch (r.tag) {
              case 22:
                _s(n, r), 2048 & a && ws(r.alternate, r);
                break;
              case 24:
                _s(n, r), 2048 & a && ks(r.alternate, r);
                break;
              default:
                _s(n, r);
            }
            t = t.sibling;
          }
      }
      var Cs = 8192;
      function As(e) {
        if (e.subtreeFlags & Cs) for (e = e.child; null !== e; ) Ts(e), (e = e.sibling);
      }
      function Ts(e) {
        switch (e.tag) {
          case 26:
            As(e),
              e.flags & Cs &&
                null !== e.memoizedState &&
                (function (e, t, n) {
                  if (null === Pd) throw Error(i(475));
                  var r = Pd;
                  if (
                    !(
                      'stylesheet' !== t.type ||
                      ('string' == typeof n.media && !1 === matchMedia(n.media).matches) ||
                      4 & t.state.loading
                    )
                  ) {
                    if (null === t.instance) {
                      var a = yd(n.href),
                        o = e.querySelector(bd(a));
                      if (o)
                        return (
                          null !== (e = o._p) &&
                            'object' == typeof e &&
                            'function' == typeof e.then &&
                            (r.count++, (r = Od.bind(r)), e.then(r, r)),
                          (t.state.loading |= 4),
                          (t.instance = o),
                          void Xe(o)
                        );
                      (o = e.ownerDocument || e),
                        (n = vd(n)),
                        (a = cd.get(a)) && Ed(n, a),
                        Xe((o = o.createElement('link')));
                      var l = o;
                      (l._p = new Promise(function (e, t) {
                        (l.onload = e), (l.onerror = t);
                      })),
                        Vc(o, 'link', n),
                        (t.instance = o);
                    }
                    null === r.stylesheets && (r.stylesheets = new Map()),
                      r.stylesheets.set(t, e),
                      (e = t.state.preload) &&
                        !(3 & t.state.loading) &&
                        (r.count++, (t = Od.bind(r)), e.addEventListener('load', t), e.addEventListener('error', t));
                  }
                })(ps, e.memoizedState, e.memoizedProps);
            break;
          case 5:
          default:
            As(e);
            break;
          case 3:
          case 4:
            var t = ps;
            (ps = fd(e.stateNode.containerInfo)), As(e), (ps = t);
            break;
          case 22:
            null === e.memoizedState &&
              (null !== (t = e.alternate) && null !== t.memoizedState
                ? ((t = Cs), (Cs = 16777216), As(e), (Cs = t))
                : As(e));
        }
      }
      function js(e) {
        var t = e.alternate;
        if (null !== t && null !== (e = t.child)) {
          t.child = null;
          do {
            (t = e.sibling), (e.sibling = null), (e = t);
          } while (null !== e);
        }
      }
      function Ps(e) {
        var t = e.deletions;
        if (16 & e.flags) {
          if (null !== t)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (ns = r), Ls(r, e);
            }
          js(e);
        }
        if (10256 & e.subtreeFlags) for (e = e.child; null !== e; ) Ns(e), (e = e.sibling);
      }
      function Ns(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            Ps(e), 2048 & e.flags && $l(9, e, e.return);
            break;
          case 3:
          case 12:
          default:
            Ps(e);
            break;
          case 22:
            var t = e.stateNode;
            null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag)
              ? ((t._visibility &= -5), Os(e))
              : Ps(e);
        }
      }
      function Os(e) {
        var t = e.deletions;
        if (16 & e.flags) {
          if (null !== t)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (ns = r), Ls(r, e);
            }
          js(e);
        }
        for (e = e.child; null !== e; ) {
          switch ((t = e).tag) {
            case 0:
            case 11:
            case 15:
              $l(8, t, t.return), Os(t);
              break;
            case 22:
              4 & (n = t.stateNode)._visibility && ((n._visibility &= -5), Os(t));
              break;
            default:
              Os(t);
          }
          e = e.sibling;
        }
      }
      function Ls(e, t) {
        for (; null !== ns; ) {
          var n = ns;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              $l(8, n, t);
              break;
            case 23:
            case 22:
              if (null !== n.memoizedState && null !== n.memoizedState.cachePool) {
                var r = n.memoizedState.cachePool.pool;
                null != r && r.refCount++;
              }
              break;
            case 24:
              $a(n.memoizedState.cache);
          }
          if (null !== (r = n.child)) (r.return = n), (ns = r);
          else
            e: for (n = e; null !== ns; ) {
              var a = (r = ns).sibling,
                o = r.return;
              if ((os(r), r === n)) {
                ns = null;
                break e;
              }
              if (null !== a) {
                (a.return = o), (ns = a);
                break e;
              }
              ns = o;
            }
        }
      }
      function Rs(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
          (this.index = 0),
          (this.refCleanup = this.ref = null),
          (this.pendingProps = t),
          (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Ds(e, t, n, r) {
        return new Rs(e, t, n, r);
      }
      function Fs(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Is(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Ds(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
          (n.flags = 31457280 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          (n.refCleanup = e.refCleanup),
          n
        );
      }
      function Ms(e, t) {
        e.flags &= 31457282;
        var n = e.alternate;
        return (
          null === n
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = n.childLanes),
              (e.lanes = n.lanes),
              (e.child = n.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = n.memoizedProps),
              (e.memoizedState = n.memoizedState),
              (e.updateQueue = n.updateQueue),
              (e.type = n.type),
              (t = n.dependencies),
              (e.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext })),
          e
        );
      }
      function zs(e, t, n, r, a, o) {
        var l = 0;
        if (((r = e), 'function' == typeof e)) Fs(e) && (l = 1);
        else if ('string' == typeof e)
          l = (function (e, t, n) {
            if (1 === n || null != t.itemProp) return !1;
            switch (e) {
              case 'meta':
              case 'title':
                return !0;
              case 'style':
                if ('string' != typeof t.precedence || 'string' != typeof t.href || '' === t.href) break;
                return !0;
              case 'link':
                if ('string' != typeof t.rel || 'string' != typeof t.href || '' === t.href || t.onLoad || t.onError)
                  break;
                return 'stylesheet' !== t.rel || ((e = t.disabled), 'string' == typeof t.precedence && null == e);
              case 'script':
                if (
                  t.async &&
                  'function' != typeof t.async &&
                  'symbol' != typeof t.async &&
                  !t.onLoad &&
                  !t.onError &&
                  t.src &&
                  'string' == typeof t.src
                )
                  return !0;
            }
            return !1;
          })(e, n, K.current)
            ? 26
            : 'html' === e || 'head' === e || 'body' === e
            ? 27
            : 5;
        else
          e: switch (e) {
            case d:
              return Bs(n.children, a, o, t);
            case f:
              (l = 8), (a |= 24);
              break;
            case p:
              return ((e = Ds(12, n, t, 2 | a)).elementType = p), (e.lanes = o), e;
            case b:
              return ((e = Ds(13, n, t, a)).elementType = b), (e.lanes = o), e;
            case v:
              return ((e = Ds(19, n, t, a)).elementType = v), (e.lanes = o), e;
            case S:
              return $s(n, a, o, t);
            default:
              if ('object' == typeof e && null !== e)
                switch (e.$$typeof) {
                  case m:
                  case g:
                    l = 10;
                    break e;
                  case h:
                    l = 9;
                    break e;
                  case y:
                    l = 11;
                    break e;
                  case w:
                    l = 14;
                    break e;
                  case k:
                    (l = 16), (r = null);
                    break e;
                }
              (l = 29), (n = Error(i(130, null === e ? 'null' : typeof e, ''))), (r = null);
          }
        return ((t = Ds(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t;
      }
      function Bs(e, t, n, r) {
        return ((e = Ds(7, e, r, t)).lanes = n), e;
      }
      function $s(e, t, n, r) {
        ((e = Ds(22, e, r, t)).elementType = S), (e.lanes = n);
        var a = {
          _visibility: 1,
          _pendingVisibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
          _current: null,
          detach: function () {
            var e = a._current;
            if (null === e) throw Error(i(456));
            if (!(2 & a._pendingVisibility)) {
              var t = jr(e, 2);
              null !== t && ((a._pendingVisibility |= 2), Ou(t, e, 2));
            }
          },
          attach: function () {
            var e = a._current;
            if (null === e) throw Error(i(456));
            if (2 & a._pendingVisibility) {
              var t = jr(e, 2);
              null !== t && ((a._pendingVisibility &= -3), Ou(t, e, 2));
            }
          },
        };
        return (e.stateNode = a), e;
      }
      function Us(e, t, n) {
        return ((e = Ds(6, e, null, t)).lanes = n), e;
      }
      function qs(e, t, n) {
        return (
          ((t = Ds(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
          (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
          t
        );
      }
      function Hs(e) {
        e.flags |= 4;
      }
      function Gs(e, t) {
        if ('stylesheet' !== t.type || 4 & t.state.loading) e.flags &= -16777217;
        else if (((e.flags |= 16777216), !jd(t))) {
          if (
            null !== (t = Ta.current) &&
            ((4194176 & ru) === ru ? null !== ja : ((62914560 & ru) !== ru && !(536870912 & ru)) || t !== ja)
          )
            throw ((fa = sa), la);
          e.flags |= 8192;
        }
      }
      function Vs(e, t) {
        null !== t && (e.flags |= 4),
          16384 & e.flags && ((t = 22 !== e.tag ? Pe() : 536870912), (e.lanes |= t), (hu |= t));
      }
      function Ws(e, t) {
        if (!Yr)
          switch (e.tailMode) {
            case 'hidden':
              t = e.tail;
              for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case 'collapsed':
              n = e.tail;
              for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
              null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
          }
      }
      function Qs(e) {
        var t = null !== e.alternate && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes),
              (r |= 31457280 & a.subtreeFlags),
              (r |= 31457280 & a.flags),
              (a.return = e),
              (a = a.sibling);
        else
          for (a = e.child; null !== a; )
            (n |= a.lanes | a.childLanes), (r |= a.subtreeFlags), (r |= a.flags), (a.return = e), (a = a.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
      }
      function Ks(e, t, n) {
        var r = t.pendingProps;
        switch ((Wr(t), t.tag)) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
          case 1:
            return Qs(t), null;
          case 3:
            return (
              (n = t.stateNode),
              (r = null),
              null !== e && (r = e.memoizedState.cache),
              t.memoizedState.cache !== r && (t.flags |= 2048),
              vl(za),
              ee(),
              n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (ra(t)
                  ? Hs(t)
                  : null === e ||
                    (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                    ((t.flags |= 1024), null !== Xr && (Ru(Xr), (Xr = null)))),
              Qs(t),
              null
            );
          case 26:
            return (
              (n = t.memoizedState),
              null === e
                ? (Hs(t), null !== n ? (Qs(t), Gs(t, n)) : (Qs(t), (t.flags &= -16777217)))
                : n
                ? n !== e.memoizedState
                  ? (Hs(t), Qs(t), Gs(t, n))
                  : (Qs(t), (t.flags &= -16777217))
                : (e.memoizedProps !== r && Hs(t), Qs(t), (t.flags &= -16777217)),
              null
            );
          case 27:
            ne(t), (n = X.current);
            var a = t.type;
            if (null !== e && null != t.stateNode) e.memoizedProps !== r && Hs(t);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return Qs(t), null;
              }
              (e = K.current), ra(t) ? ta(t) : ((e = ud(a, r, n)), (t.stateNode = e), Hs(t));
            }
            return Qs(t), null;
          case 5:
            if ((ne(t), (n = t.type), null !== e && null != t.stateNode)) e.memoizedProps !== r && Hs(t);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return Qs(t), null;
              }
              if (((e = K.current), ra(t))) ta(t);
              else {
                switch (((a = Kc(X.current)), e)) {
                  case 1:
                    e = a.createElementNS('http://www.w3.org/2000/svg', n);
                    break;
                  case 2:
                    e = a.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                    break;
                  default:
                    switch (n) {
                      case 'svg':
                        e = a.createElementNS('http://www.w3.org/2000/svg', n);
                        break;
                      case 'math':
                        e = a.createElementNS('http://www.w3.org/1998/Math/MathML', n);
                        break;
                      case 'script':
                        ((e = a.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild));
                        break;
                      case 'select':
                        (e =
                          'string' == typeof r.is
                            ? a.createElement('select', { is: r.is })
                            : a.createElement('select')),
                          r.multiple ? (e.multiple = !0) : r.size && (e.size = r.size);
                        break;
                      default:
                        e = 'string' == typeof r.is ? a.createElement(n, { is: r.is }) : a.createElement(n);
                    }
                }
                (e[Me] = t), (e[ze] = r);
                e: for (a = t.child; null !== a; ) {
                  if (5 === a.tag || 6 === a.tag) e.appendChild(a.stateNode);
                  else if (4 !== a.tag && 27 !== a.tag && null !== a.child) {
                    (a.child.return = a), (a = a.child);
                    continue;
                  }
                  if (a === t) break e;
                  for (; null === a.sibling; ) {
                    if (null === a.return || a.return === t) break e;
                    a = a.return;
                  }
                  (a.sibling.return = a.return), (a = a.sibling);
                }
                t.stateNode = e;
                e: switch ((Vc(e, n, r), n)) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    e = !!r.autoFocus;
                    break e;
                  case 'img':
                    e = !0;
                    break e;
                  default:
                    e = !1;
                }
                e && Hs(t);
              }
            }
            return Qs(t), (t.flags &= -16777217), null;
          case 6:
            if (e && null != t.stateNode) e.memoizedProps !== r && Hs(t);
            else {
              if ('string' != typeof r && null === t.stateNode) throw Error(i(166));
              if (((e = X.current), ra(t))) {
                if (((e = t.stateNode), (n = t.memoizedProps), (r = null), null !== (a = Qr)))
                  switch (a.tag) {
                    case 27:
                    case 5:
                      r = a.memoizedProps;
                  }
                (e[Me] = t),
                  (e = !!(
                    e.nodeValue === n ||
                    (null !== r && !0 === r.suppressHydrationWarning) ||
                    Uc(e.nodeValue, n)
                  )) || ea(t);
              } else ((e = Kc(e).createTextNode(r))[Me] = t), (t.stateNode = e);
            }
            return Qs(t), null;
          case 13:
            if (
              ((r = t.memoizedState), null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
            ) {
              if (((a = ra(t)), null !== r && null !== r.dehydrated)) {
                if (null === e) {
                  if (!a) throw Error(i(318));
                  if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                  a[Me] = t;
                } else aa(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                Qs(t), (a = !1);
              } else null !== Xr && (Ru(Xr), (Xr = null)), (a = !0);
              if (!a) return 256 & t.flags ? (La(t), t) : (La(t), null);
            }
            if ((La(t), 128 & t.flags)) return (t.lanes = n), t;
            if (((n = null !== r), (e = null !== e && null !== e.memoizedState), n)) {
              (a = null),
                null !== (r = t.child).alternate &&
                  null !== r.alternate.memoizedState &&
                  null !== r.alternate.memoizedState.cachePool &&
                  (a = r.alternate.memoizedState.cachePool.pool);
              var o = null;
              null !== r.memoizedState && null !== r.memoizedState.cachePool && (o = r.memoizedState.cachePool.pool),
                o !== a && (r.flags |= 2048);
            }
            return n !== e && n && (t.child.flags |= 8192), Vs(t, t.updateQueue), Qs(t), null;
          case 4:
            return ee(), null === e && Oc(t.stateNode.containerInfo), Qs(t), null;
          case 10:
            return vl(t.type), Qs(t), null;
          case 19:
            if ((W(Ra), null === (a = t.memoizedState))) return Qs(t), null;
            if (((r = !!(128 & t.flags)), null === (o = a.rendering)))
              if (r) Ws(a, !1);
              else {
                if (0 !== cu || (null !== e && 128 & e.flags))
                  for (e = t.child; null !== e; ) {
                    if (null !== (o = Da(e))) {
                      for (
                        t.flags |= 128,
                          Ws(a, !1),
                          e = o.updateQueue,
                          t.updateQueue = e,
                          Vs(t, e),
                          t.subtreeFlags = 0,
                          e = n,
                          n = t.child;
                        null !== n;

                      )
                        Ms(n, e), (n = n.sibling);
                      return Q(Ra, (1 & Ra.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== a.tail && se() > wu && ((t.flags |= 128), (r = !0), Ws(a, !1), (t.lanes = 4194304));
              }
            else {
              if (!r)
                if (null !== (e = Da(o))) {
                  if (
                    ((t.flags |= 128),
                    (r = !0),
                    (e = e.updateQueue),
                    (t.updateQueue = e),
                    Vs(t, e),
                    Ws(a, !0),
                    null === a.tail && 'hidden' === a.tailMode && !o.alternate && !Yr)
                  )
                    return Qs(t), null;
                } else
                  2 * se() - a.renderingStartTime > wu &&
                    536870912 !== n &&
                    ((t.flags |= 128), (r = !0), Ws(a, !1), (t.lanes = 4194304));
              a.isBackwards
                ? ((o.sibling = t.child), (t.child = o))
                : (null !== (e = a.last) ? (e.sibling = o) : (t.child = o), (a.last = o));
            }
            return null !== a.tail
              ? ((t = a.tail),
                (a.rendering = t),
                (a.tail = t.sibling),
                (a.renderingStartTime = se()),
                (t.sibling = null),
                (e = Ra.current),
                Q(Ra, r ? (1 & e) | 2 : 1 & e),
                t)
              : (Qs(t), null);
          case 22:
          case 23:
            return (
              La(t),
              Aa(),
              (r = null !== t.memoizedState),
              null !== e ? (null !== e.memoizedState) !== r && (t.flags |= 8192) : r && (t.flags |= 8192),
              r ? !!(536870912 & n) && !(128 & t.flags) && (Qs(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Qs(t),
              null !== (n = t.updateQueue) && Vs(t, n.retryQueue),
              (n = null),
              null !== e &&
                null !== e.memoizedState &&
                null !== e.memoizedState.cachePool &&
                (n = e.memoizedState.cachePool.pool),
              (r = null),
              null !== t.memoizedState && null !== t.memoizedState.cachePool && (r = t.memoizedState.cachePool.pool),
              r !== n && (t.flags |= 2048),
              null !== e && W(Qa),
              null
            );
          case 24:
            return (
              (n = null),
              null !== e && (n = e.memoizedState.cache),
              t.memoizedState.cache !== n && (t.flags |= 2048),
              vl(za),
              Qs(t),
              null
            );
          case 25:
            return null;
        }
        throw Error(i(156, t.tag));
      }
      function Ys(e, t) {
        switch ((Wr(t), t.tag)) {
          case 1:
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
          case 3:
            return vl(za), ee(), 65536 & (e = t.flags) && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null;
          case 26:
          case 27:
          case 5:
            return ne(t), null;
          case 13:
            if ((La(t), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
              if (null === t.alternate) throw Error(i(340));
              aa();
            }
            return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
          case 19:
            return W(Ra), null;
          case 4:
            return ee(), null;
          case 10:
            return vl(t.type), null;
          case 22:
          case 23:
            return La(t), Aa(), null !== e && W(Qa), 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
          case 24:
            return vl(za), null;
          default:
            return null;
        }
      }
      function Xs(e, t) {
        switch ((Wr(t), t.tag)) {
          case 3:
            vl(za), ee();
            break;
          case 26:
          case 27:
          case 5:
            ne(t);
            break;
          case 4:
            ee();
            break;
          case 13:
            La(t);
            break;
          case 19:
            W(Ra);
            break;
          case 10:
            vl(t.type);
            break;
          case 22:
          case 23:
            La(t), Aa(), null !== e && W(Qa);
            break;
          case 24:
            vl(za);
        }
      }
      var Zs = {
          getCacheForType: function (e) {
            var t = _l(za),
              n = t.data.get(e);
            return void 0 === n && ((n = e()), t.data.set(e, n)), n;
          },
        },
        Js = 'function' == typeof WeakMap ? WeakMap : Map,
        eu = 0,
        tu = null,
        nu = null,
        ru = 0,
        au = 0,
        ou = null,
        iu = !1,
        lu = !1,
        su = !1,
        uu = 0,
        cu = 0,
        du = 0,
        fu = 0,
        pu = 0,
        mu = 0,
        hu = 0,
        gu = null,
        yu = null,
        bu = !1,
        vu = 0,
        wu = 1 / 0,
        ku = null,
        Su = null,
        xu = !1,
        Eu = null,
        _u = 0,
        Cu = 0,
        Au = null,
        Tu = 0,
        ju = null;
      function Pu() {
        if (2 & eu && 0 !== ru) return ru & -ru;
        if (null !== P.T) {
          return 0 !== Ha ? Ha : kc();
        }
        return Fe();
      }
      function Nu() {
        0 === mu && (mu = 536870912 & ru && !Yr ? 536870912 : je());
        var e = Ta.current;
        return null !== e && (e.flags |= 32), mu;
      }
      function Ou(e, t, n) {
        ((e === tu && 2 === au) || null !== e.cancelPendingCommit) && (Bu(e, 0), Iu(e, ru, mu, !1)),
          Oe(e, n),
          (2 & eu && e === tu) || (e === tu && (!(2 & eu) && (fu |= n), 4 === cu && Iu(e, ru, mu, !1)), hc(e));
      }
      function Lu(e, t, n) {
        if (6 & eu) throw Error(i(327));
        for (
          var r = (!n && !(60 & t) && !(t & e.expiredLanes)) || Ae(e, t),
            a = r
              ? (function (e, t) {
                  var n = eu;
                  eu |= 2;
                  var r = Uu(),
                    a = qu();
                  tu !== e || ru !== t ? ((ku = null), (wu = se() + 500), Bu(e, t)) : (lu = Ae(e, t));
                  e: for (;;)
                    try {
                      if (0 !== au && null !== nu) {
                        t = nu;
                        var o = ou;
                        t: switch (au) {
                          case 1:
                            (au = 0), (ou = null), Yu(e, t, o, 1);
                            break;
                          case 2:
                            if (ua(o)) {
                              (au = 0), (ou = null), Ku(t);
                              break;
                            }
                            (t = function () {
                              2 === au && tu === e && (au = 7), hc(e);
                            }),
                              o.then(t, t);
                            break e;
                          case 3:
                            au = 7;
                            break e;
                          case 4:
                            au = 5;
                            break e;
                          case 7:
                            ua(o) ? ((au = 0), (ou = null), Ku(t)) : ((au = 0), (ou = null), Yu(e, t, o, 7));
                            break;
                          case 5:
                            var l = null;
                            switch (nu.tag) {
                              case 26:
                                l = nu.memoizedState;
                              case 5:
                              case 27:
                                var s = nu;
                                if (!l || jd(l)) {
                                  (au = 0), (ou = null);
                                  var u = s.sibling;
                                  if (null !== u) nu = u;
                                  else {
                                    var c = s.return;
                                    null !== c ? ((nu = c), Xu(c)) : (nu = null);
                                  }
                                  break t;
                                }
                            }
                            (au = 0), (ou = null), Yu(e, t, o, 5);
                            break;
                          case 6:
                            (au = 0), (ou = null), Yu(e, t, o, 6);
                            break;
                          case 8:
                            zu(), (cu = 6);
                            break e;
                          default:
                            throw Error(i(462));
                        }
                      }
                      Wu();
                      break;
                    } catch (d) {
                      $u(e, d);
                    }
                  return (
                    (yl = gl = null),
                    (P.H = r),
                    (P.A = a),
                    (eu = n),
                    null !== nu ? 0 : ((tu = null), (ru = 0), Cr(), cu)
                  );
                })(e, t)
              : Gu(e, t, !0),
            o = r;
          ;

        ) {
          if (0 === a) {
            lu && !r && Iu(e, t, 0, !1);
            break;
          }
          if (6 === a) Iu(e, t, 0, !iu);
          else {
            if (((n = e.current.alternate), o && !Fu(n))) {
              (a = Gu(e, t, !1)), (o = !1);
              continue;
            }
            if (2 === a) {
              if (((o = t), e.errorRecoveryDisabledLanes & o)) var l = 0;
              else l = 0 !== (l = -536870913 & e.pendingLanes) ? l : 536870912 & l ? 536870912 : 0;
              if (0 !== l) {
                t = l;
                e: {
                  var s = e;
                  a = gu;
                  var u = s.current.memoizedState.isDehydrated;
                  if ((u && (Bu(s, l).flags |= 256), 2 !== (l = Gu(s, l, !1)))) {
                    if (su && !u) {
                      (s.errorRecoveryDisabledLanes |= o), (fu |= o), (a = 4);
                      break e;
                    }
                    (o = yu), (yu = a), null !== o && Ru(o);
                  }
                  a = l;
                }
                if (((o = !1), 2 !== a)) continue;
              }
            }
            if (1 === a) {
              Bu(e, 0), Iu(e, t, 0, !0);
              break;
            }
            e: {
              switch (((r = e), a)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 4:
                  if ((4194176 & t) === t) {
                    Iu(r, t, mu, !iu);
                    break e;
                  }
                  break;
                case 2:
                  yu = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(i(329));
              }
              if (((r.finishedWork = n), (r.finishedLanes = t), (62914560 & t) === t && 10 < (o = vu + 300 - se()))) {
                if ((Iu(r, t, mu, !iu), 0 !== Ce(r, 0))) break e;
                r.timeoutHandle = ed(Du.bind(null, r, n, yu, ku, bu, t, mu, fu, hu, iu, 2, -0, 0), o);
              } else Du(r, n, yu, ku, bu, t, mu, fu, hu, iu, 0, -0, 0);
            }
          }
          break;
        }
        hc(e);
      }
      function Ru(e) {
        null === yu ? (yu = e) : yu.push.apply(yu, e);
      }
      function Du(e, t, n, r, a, o, l, s, u, c, d, f, p) {
        var m = t.subtreeFlags;
        if (
          (8192 & m || !(16785408 & ~m)) &&
          ((Pd = { stylesheets: null, count: 0, unsuspend: Nd }),
          Ts(t),
          null !==
            (t = (function () {
              if (null === Pd) throw Error(i(475));
              var e = Pd;
              return (
                e.stylesheets && 0 === e.count && Rd(e, e.stylesheets),
                0 < e.count
                  ? function (t) {
                      var n = setTimeout(function () {
                        if ((e.stylesheets && Rd(e, e.stylesheets), e.unsuspend)) {
                          var t = e.unsuspend;
                          (e.unsuspend = null), t();
                        }
                      }, 6e4);
                      return (
                        (e.unsuspend = t),
                        function () {
                          (e.unsuspend = null), clearTimeout(n);
                        }
                      );
                    }
                  : null
              );
            })()))
        )
          return (e.cancelPendingCommit = t(Ju.bind(null, e, n, r, a, l, s, u, 1, f, p))), void Iu(e, o, l, !c);
        Ju(e, n, r, a, l, s, u, d, f, p);
      }
      function Fu(e) {
        for (var t = e; ; ) {
          var n = t.tag;
          if (
            (0 === n || 11 === n || 15 === n) &&
            16384 & t.flags &&
            null !== (n = t.updateQueue) &&
            null !== (n = n.stores)
          )
            for (var r = 0; r < n.length; r++) {
              var a = n[r],
                o = a.getSnapshot;
              a = a.value;
              try {
                if (!Qn(o(), a)) return !1;
              } catch (i) {
                return !1;
              }
            }
          if (((n = t.child), 16384 & t.subtreeFlags && null !== n)) (n.return = t), (t = n);
          else {
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return !0;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return !0;
      }
      function Iu(e, t, n, r) {
        (t &= ~pu),
          (t &= ~fu),
          (e.suspendedLanes |= t),
          (e.pingedLanes &= ~t),
          r && (e.warmLanes |= t),
          (r = e.expirationTimes);
        for (var a = t; 0 < a; ) {
          var o = 31 - we(a),
            i = 1 << o;
          (r[o] = -1), (a &= ~i);
        }
        0 !== n && Le(e, n, t);
      }
      function Mu() {
        return !!(6 & eu) || (gc(0, !1), !1);
      }
      function zu() {
        if (null !== nu) {
          if (0 === au) var e = nu.return;
          else (yl = gl = null), bo((e = nu)), (ma = null), (ha = 0), (e = nu);
          for (; null !== e; ) Xs(e.alternate, e), (e = e.return);
          nu = null;
        }
      }
      function Bu(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        -1 !== n && ((e.timeoutHandle = -1), td(n)),
          null !== (n = e.cancelPendingCommit) && ((e.cancelPendingCommit = null), n()),
          zu(),
          (tu = e),
          (nu = n = Is(e.current, null)),
          (ru = t),
          (au = 0),
          (ou = null),
          (iu = !1),
          (lu = Ae(e, t)),
          (su = !1),
          (hu = mu = pu = fu = du = cu = 0),
          (yu = gu = null),
          (bu = !1),
          8 & t && (t |= 32 & t);
        var r = e.entangledLanes;
        if (0 !== r)
          for (e = e.entanglements, r &= t; 0 < r; ) {
            var a = 31 - we(r),
              o = 1 << a;
            (t |= e[a]), (r &= ~o);
          }
        return (uu = t), Cr(), n;
      }
      function $u(e, t) {
        (Ja = null),
          (P.H = _i),
          t === ia
            ? ((t = pa()), (au = 3))
            : t === la
            ? ((t = pa()), (au = 4))
            : (au = t === qi ? 8 : null !== t && 'object' == typeof t && 'function' == typeof t.then ? 6 : 1),
          (ou = t),
          null === nu && ((cu = 1), Mi(e, Rr(t, e.current)));
      }
      function Uu() {
        var e = P.H;
        return (P.H = _i), null === e ? _i : e;
      }
      function qu() {
        var e = P.A;
        return (P.A = Zs), e;
      }
      function Hu() {
        (cu = 4),
          iu || ((4194176 & ru) !== ru && null !== Ta.current) || (lu = !0),
          (!(134217727 & du) && !(134217727 & fu)) || null === tu || Iu(tu, ru, mu, !1);
      }
      function Gu(e, t, n) {
        var r = eu;
        eu |= 2;
        var a = Uu(),
          o = qu();
        (tu === e && ru === t) || ((ku = null), Bu(e, t)), (t = !1);
        var i = cu;
        e: for (;;)
          try {
            if (0 !== au && null !== nu) {
              var l = nu,
                s = ou;
              switch (au) {
                case 8:
                  zu(), (i = 6);
                  break e;
                case 3:
                case 2:
                case 6:
                  null === Ta.current && (t = !0);
                  var u = au;
                  if (((au = 0), (ou = null), Yu(e, l, s, u), n && lu)) {
                    i = 0;
                    break e;
                  }
                  break;
                default:
                  (u = au), (au = 0), (ou = null), Yu(e, l, s, u);
              }
            }
            Vu(), (i = cu);
            break;
          } catch (c) {
            $u(e, c);
          }
        return (
          t && e.shellSuspendCounter++,
          (yl = gl = null),
          (eu = r),
          (P.H = a),
          (P.A = o),
          null === nu && ((tu = null), (ru = 0), Cr()),
          i
        );
      }
      function Vu() {
        for (; null !== nu; ) Qu(nu);
      }
      function Wu() {
        for (; null !== nu && !ie(); ) Qu(nu);
      }
      function Qu(e) {
        var t = ml(e.alternate, e, uu);
        (e.memoizedProps = e.pendingProps), null === t ? Xu(e) : (nu = t);
      }
      function Ku(e) {
        var t = e,
          n = t.alternate;
        switch (t.tag) {
          case 15:
          case 0:
            t = Ji(n, t, t.pendingProps, t.type, void 0, ru);
            break;
          case 11:
            t = Ji(n, t, t.pendingProps, t.type.render, t.ref, ru);
            break;
          case 5:
            bo(t);
          default:
            Xs(n, t), (t = ml(n, (t = nu = Ms(t, uu)), uu));
        }
        (e.memoizedProps = e.pendingProps), null === t ? Xu(e) : (nu = t);
      }
      function Yu(e, t, n, r) {
        (yl = gl = null), bo(t), (ma = null), (ha = 0);
        var a = t.return;
        try {
          if (
            (function (e, t, n, r, a) {
              if (((n.flags |= 32768), null !== r && 'object' == typeof r && 'function' == typeof r.then)) {
                if ((null !== (t = n.alternate) && Sl(t, n, a, !0), null !== (n = Ta.current))) {
                  switch (n.tag) {
                    case 13:
                      return (
                        null === ja ? Hu() : null === n.alternate && 0 === cu && (cu = 3),
                        (n.flags &= -257),
                        (n.flags |= 65536),
                        (n.lanes = a),
                        r === sa
                          ? (n.flags |= 16384)
                          : (null === (t = n.updateQueue) ? (n.updateQueue = new Set([r])) : t.add(r), ac(e, r, a)),
                        !1
                      );
                    case 22:
                      return (
                        (n.flags |= 65536),
                        r === sa
                          ? (n.flags |= 16384)
                          : (null === (t = n.updateQueue)
                              ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([r]) }),
                                (n.updateQueue = t))
                              : null === (n = t.retryQueue)
                              ? (t.retryQueue = new Set([r]))
                              : n.add(r),
                            ac(e, r, a)),
                        !1
                      );
                  }
                  throw Error(i(435, n.tag));
                }
                return ac(e, r, a), Hu(), !1;
              }
              if (Yr)
                return (
                  null !== (t = Ta.current)
                    ? (!(65536 & t.flags) && (t.flags |= 256),
                      (t.flags |= 65536),
                      (t.lanes = a),
                      r !== Jr && oa(Rr((e = Error(i(422), { cause: r })), n)))
                    : (r !== Jr && oa(Rr((t = Error(i(423), { cause: r })), n)),
                      ((e = e.current.alternate).flags |= 65536),
                      (a &= -a),
                      (e.lanes |= a),
                      (r = Rr(r, n)),
                      Rl(e, (a = Bi(e.stateNode, r, a))),
                      4 !== cu && (cu = 2)),
                  !1
                );
              var o = Error(i(520), { cause: r });
              if (((o = Rr(o, n)), null === gu ? (gu = [o]) : gu.push(o), 4 !== cu && (cu = 2), null === t)) return !0;
              (r = Rr(r, n)), (n = t);
              do {
                switch (n.tag) {
                  case 3:
                    return (n.flags |= 65536), (e = a & -a), (n.lanes |= e), Rl(n, (e = Bi(n.stateNode, r, e))), !1;
                  case 1:
                    if (
                      ((t = n.type),
                      (o = n.stateNode),
                      !(
                        128 & n.flags ||
                        ('function' != typeof t.getDerivedStateFromError &&
                          (null === o || 'function' != typeof o.componentDidCatch || (null !== Su && Su.has(o))))
                      ))
                    )
                      return (n.flags |= 65536), (a &= -a), (n.lanes |= a), Ui((a = $i(a)), e, n, r), Rl(n, a), !1;
                }
                n = n.return;
              } while (null !== n);
              return !1;
            })(e, a, t, n, ru)
          )
            return (cu = 1), Mi(e, Rr(n, e.current)), void (nu = null);
        } catch (o) {
          if (null !== a) throw ((nu = a), o);
          return (cu = 1), Mi(e, Rr(n, e.current)), void (nu = null);
        }
        32768 & t.flags
          ? (Yr || 1 === r
              ? (e = !0)
              : lu || 536870912 & ru
              ? (e = !1)
              : ((iu = e = !0),
                (2 === r || 3 === r || 6 === r) && null !== (r = Ta.current) && 13 === r.tag && (r.flags |= 16384)),
            Zu(t, e))
          : Xu(t);
      }
      function Xu(e) {
        var t = e;
        do {
          if (32768 & t.flags) return void Zu(t, iu);
          e = t.return;
          var n = Ks(t.alternate, t, uu);
          if (null !== n) return void (nu = n);
          if (null !== (t = t.sibling)) return void (nu = t);
          nu = t = e;
        } while (null !== t);
        0 === cu && (cu = 5);
      }
      function Zu(e, t) {
        do {
          var n = Ys(e.alternate, e);
          if (null !== n) return (n.flags &= 32767), void (nu = n);
          if (
            (null !== (n = e.return) && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && null !== (e = e.sibling))
          )
            return void (nu = e);
          nu = e = n;
        } while (null !== e);
        (cu = 6), (nu = null);
      }
      function Ju(e, t, n, r, a, o, l, s, u, c) {
        var d = P.T,
          f = U.p;
        try {
          (U.p = 2),
            (P.T = null),
            (function (e, t, n, r, a, o, l, s) {
              do {
                tc();
              } while (null !== Eu);
              if (6 & eu) throw Error(i(327));
              var u = e.finishedWork;
              if (((r = e.finishedLanes), null === u)) return null;
              if (((e.finishedWork = null), (e.finishedLanes = 0), u === e.current)) throw Error(i(177));
              (e.callbackNode = null), (e.callbackPriority = 0), (e.cancelPendingCommit = null);
              var c = u.lanes | u.childLanes;
              if (
                ((function (e, t, n, r, a, o) {
                  var i = e.pendingLanes;
                  (e.pendingLanes = n),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.warmLanes = 0),
                    (e.expiredLanes &= n),
                    (e.entangledLanes &= n),
                    (e.errorRecoveryDisabledLanes &= n),
                    (e.shellSuspendCounter = 0);
                  var l = e.entanglements,
                    s = e.expirationTimes,
                    u = e.hiddenUpdates;
                  for (n = i & ~n; 0 < n; ) {
                    var c = 31 - we(n),
                      d = 1 << c;
                    (l[c] = 0), (s[c] = -1);
                    var f = u[c];
                    if (null !== f)
                      for (u[c] = null, c = 0; c < f.length; c++) {
                        var p = f[c];
                        null !== p && (p.lane &= -536870913);
                      }
                    n &= ~d;
                  }
                  0 !== r && Le(e, r, 0), 0 !== o && 0 === a && 0 !== e.tag && (e.suspendedLanes |= o & ~(i & ~t));
                })(e, r, (c |= _r), o, l, s),
                e === tu && ((nu = tu = null), (ru = 0)),
                (!(10256 & u.subtreeFlags) && !(10256 & u.flags)) ||
                  xu ||
                  ((xu = !0),
                  (Cu = c),
                  (Au = n),
                  (function (e, t) {
                    ae(e, t);
                  })(fe, function () {
                    return tc(), null;
                  })),
                (n = !!(15990 & u.flags)),
                15990 & u.subtreeFlags || n
                  ? ((n = P.T),
                    (P.T = null),
                    (o = U.p),
                    (U.p = 2),
                    (l = eu),
                    (eu |= 4),
                    (function (e, t) {
                      if (((e = e.containerInfo), (Wc = Hd), er((e = Jn(e))))) {
                        if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var r =
                              (n = ((n = e.ownerDocument) && n.defaultView) || window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (g) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n || (0 !== a && 3 !== f.nodeType) || (s = l + a),
                                    f !== o || (0 !== r && 3 !== f.nodeType) || (u = l + r),
                                    3 === f.nodeType && (l += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === o && ++d === r && (u = l),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              n = -1 === s || -1 === u ? null : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (Qc = { focusedElem: e, selectionRange: n }, Hd = !1, ns = t; null !== ns; )
                        if (((e = (t = ns).child), 1028 & t.subtreeFlags && null !== e)) (e.return = t), (ns = e);
                        else
                          for (; null !== ns; ) {
                            switch (((o = (t = ns).alternate), (e = t.flags), t.tag)) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 26:
                              case 27:
                              case 6:
                              case 4:
                              case 17:
                                break;
                              case 1:
                                if (1024 & e && null !== o) {
                                  (e = void 0),
                                    (n = t),
                                    (a = o.memoizedProps),
                                    (o = o.memoizedState),
                                    (r = n.stateNode);
                                  try {
                                    var h = Li(n.type, a, (n.elementType, n.type));
                                    (e = r.getSnapshotBeforeUpdate(h, o)), (r.__reactInternalSnapshotBeforeUpdate = e);
                                  } catch (y) {
                                    rc(n, n.return, y);
                                  }
                                }
                                break;
                              case 3:
                                if (1024 & e)
                                  if (9 === (n = (e = t.stateNode.containerInfo).nodeType)) id(e);
                                  else if (1 === n)
                                    switch (e.nodeName) {
                                      case 'HEAD':
                                      case 'HTML':
                                      case 'BODY':
                                        id(e);
                                        break;
                                      default:
                                        e.textContent = '';
                                    }
                                break;
                              default:
                                if (1024 & e) throw Error(i(163));
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (ns = e);
                              break;
                            }
                            ns = t.return;
                          }
                      (h = rs), (rs = !1);
                    })(e, u),
                    ms(u, e),
                    tr(Qc, e.containerInfo),
                    (Hd = !!Wc),
                    (Qc = Wc = null),
                    (e.current = u),
                    as(e, u.alternate, u),
                    le(),
                    (eu = l),
                    (U.p = o),
                    (P.T = n))
                  : (e.current = u),
                xu ? ((xu = !1), (Eu = e), (_u = r)) : ec(e, c),
                (c = e.pendingLanes),
                0 === c && (Su = null),
                (function (e) {
                  if (be && 'function' == typeof be.onCommitFiberRoot)
                    try {
                      be.onCommitFiberRoot(ye, e, void 0, !(128 & ~e.current.flags));
                    } catch (t) {}
                })(u.stateNode),
                hc(e),
                null !== t)
              )
                for (a = e.onRecoverableError, u = 0; u < t.length; u++)
                  (c = t[u]), a(c.value, { componentStack: c.stack });
              !!(3 & _u) && tc(),
                (c = e.pendingLanes),
                4194218 & r && 42 & c ? (e === ju ? Tu++ : ((Tu = 0), (ju = e))) : (Tu = 0),
                gc(0, !1);
            })(e, t, n, r, f, a, o, l);
        } finally {
          (P.T = d), (U.p = f);
        }
      }
      function ec(e, t) {
        0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && ((e.pooledCache = null), $a(t));
      }
      function tc() {
        if (null !== Eu) {
          var e = Eu,
            t = Cu;
          Cu = 0;
          var n = De(_u),
            r = P.T,
            a = U.p;
          try {
            if (((U.p = 32 > n ? 32 : n), (P.T = null), null === Eu)) var o = !1;
            else {
              (n = Au), (Au = null);
              var l = Eu,
                s = _u;
              if (((Eu = null), (_u = 0), 6 & eu)) throw Error(i(331));
              var u = eu;
              if (
                ((eu |= 4),
                Ns(l.current),
                xs(l, l.current, s, n),
                (eu = u),
                gc(0, !1),
                be && 'function' == typeof be.onPostCommitFiberRoot)
              )
                try {
                  be.onPostCommitFiberRoot(ye, l);
                } catch (c) {}
              o = !0;
            }
            return o;
          } finally {
            (U.p = a), (P.T = r), ec(e, t);
          }
        }
        return !1;
      }
      function nc(e, t, n) {
        (t = Rr(n, t)), null !== (e = Ol(e, (t = Bi(e.stateNode, t, 2)), 2)) && (Oe(e, 2), hc(e));
      }
      function rc(e, t, n) {
        if (3 === e.tag) nc(e, e, n);
        else
          for (; null !== t; ) {
            if (3 === t.tag) {
              nc(t, e, n);
              break;
            }
            if (1 === t.tag) {
              var r = t.stateNode;
              if (
                'function' == typeof t.type.getDerivedStateFromError ||
                ('function' == typeof r.componentDidCatch && (null === Su || !Su.has(r)))
              ) {
                (e = Rr(n, e)), null !== (r = Ol(t, (n = $i(2)), 2)) && (Ui(n, r, t, e), Oe(r, 2), hc(r));
                break;
              }
            }
            t = t.return;
          }
      }
      function ac(e, t, n) {
        var r = e.pingCache;
        if (null === r) {
          r = e.pingCache = new Js();
          var a = new Set();
          r.set(t, a);
        } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
        a.has(n) || ((su = !0), a.add(n), (e = oc.bind(null, e, t, n)), t.then(e, e));
      }
      function oc(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (e.pingedLanes |= e.suspendedLanes & n),
          (e.warmLanes &= ~n),
          tu === e &&
            (ru & n) === n &&
            (4 === cu || (3 === cu && (62914560 & ru) === ru && 300 > se() - vu) ? !(2 & eu) && Bu(e, 0) : (pu |= n),
            hu === ru && (hu = 0)),
          hc(e);
      }
      function ic(e, t) {
        0 === t && (t = Pe()), null !== (e = jr(e, t)) && (Oe(e, t), hc(e));
      }
      function lc(e) {
        var t = e.memoizedState,
          n = 0;
        null !== t && (n = t.retryLane), ic(e, n);
      }
      function sc(e, t) {
        var n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode,
              a = e.memoizedState;
            null !== a && (n = a.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          case 22:
            r = e.stateNode._retryCache;
            break;
          default:
            throw Error(i(314));
        }
        null !== r && r.delete(t), ic(e, n);
      }
      var uc = null,
        cc = null,
        dc = !1,
        fc = !1,
        pc = !1,
        mc = 0;
      function hc(e) {
        var t;
        e !== cc && null === e.next && (null === cc ? (uc = cc = e) : (cc = cc.next = e)),
          (fc = !0),
          dc ||
            ((dc = !0),
            (t = yc),
            rd(function () {
              6 & eu ? ae(ce, t) : t();
            }));
      }
      function gc(e, t) {
        if (!pc && fc) {
          pc = !0;
          do {
            for (var n = !1, r = uc; null !== r; ) {
              if (!t)
                if (0 !== e) {
                  var a = r.pendingLanes;
                  if (0 === a) var o = 0;
                  else {
                    var i = r.suspendedLanes,
                      l = r.pingedLanes;
                    (o = (1 << (31 - we(42 | e) + 1)) - 1),
                      (o = 201326677 & (o &= a & ~(i & ~l)) ? (201326677 & o) | 1 : o ? 2 | o : 0);
                  }
                  0 !== o && ((n = !0), wc(r, o));
                } else (o = ru), !(3 & (o = Ce(r, r === tu ? o : 0))) || Ae(r, o) || ((n = !0), wc(r, o));
              r = r.next;
            }
          } while (n);
          pc = !1;
        }
      }
      function yc() {
        fc = dc = !1;
        var e = 0;
        0 !== mc &&
          ((function () {
            var e = window.event;
            if (e && 'popstate' === e.type) return e !== Jc && ((Jc = e), !0);
            return (Jc = null), !1;
          })() && (e = mc),
          (mc = 0));
        for (var t = se(), n = null, r = uc; null !== r; ) {
          var a = r.next,
            o = bc(r, t);
          0 === o
            ? ((r.next = null), null === n ? (uc = a) : (n.next = a), null === a && (cc = n))
            : ((n = r), (0 !== e || 3 & o) && (fc = !0)),
            (r = a);
        }
        gc(e, !1);
      }
      function bc(e, t) {
        for (
          var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = -62914561 & e.pendingLanes;
          0 < o;

        ) {
          var i = 31 - we(o),
            l = 1 << i,
            s = a[i];
          -1 === s ? (l & n && !(l & r)) || (a[i] = Te(l, t)) : s <= t && (e.expiredLanes |= l), (o &= ~l);
        }
        if (
          ((n = ru),
          (n = Ce(e, e === (t = tu) ? n : 0)),
          (r = e.callbackNode),
          0 === n || (e === t && 2 === au) || null !== e.cancelPendingCommit)
        )
          return null !== r && null !== r && oe(r), (e.callbackNode = null), (e.callbackPriority = 0);
        if (!(3 & n) || Ae(e, n)) {
          if ((t = n & -n) === e.callbackPriority) return t;
          switch ((null !== r && oe(r), De(n))) {
            case 2:
            case 8:
              n = de;
              break;
            case 32:
            default:
              n = fe;
              break;
            case 268435456:
              n = me;
          }
          return (r = vc.bind(null, e)), (n = ae(n, r)), (e.callbackPriority = t), (e.callbackNode = n), t;
        }
        return null !== r && null !== r && oe(r), (e.callbackPriority = 2), (e.callbackNode = null), 2;
      }
      function vc(e, t) {
        var n = e.callbackNode;
        if (tc() && e.callbackNode !== n) return null;
        var r = ru;
        return 0 === (r = Ce(e, e === tu ? r : 0))
          ? null
          : (Lu(e, r, t), bc(e, se()), null != e.callbackNode && e.callbackNode === n ? vc.bind(null, e) : null);
      }
      function wc(e, t) {
        if (tc()) return null;
        Lu(e, t, !0);
      }
      function kc() {
        return 0 === mc && (mc = je()), mc;
      }
      function Sc(e) {
        return null == e || 'symbol' == typeof e || 'boolean' == typeof e
          ? null
          : 'function' == typeof e
          ? e
          : jt('' + e);
      }
      function xc(e, t) {
        var n = t.ownerDocument.createElement('input');
        return (
          (n.name = t.name),
          (n.value = t.value),
          e.id && n.setAttribute('form', e.id),
          t.parentNode.insertBefore(n, t),
          (e = new FormData(e)),
          n.parentNode.removeChild(n),
          e
        );
      }
      for (var Ec = 0; Ec < kr.length; Ec++) {
        var _c = kr[Ec];
        Sr(_c.toLowerCase(), 'on' + (_c[0].toUpperCase() + _c.slice(1)));
      }
      Sr(pr, 'onAnimationEnd'),
        Sr(mr, 'onAnimationIteration'),
        Sr(hr, 'onAnimationStart'),
        Sr('dblclick', 'onDoubleClick'),
        Sr('focusin', 'onFocus'),
        Sr('focusout', 'onBlur'),
        Sr(gr, 'onTransitionRun'),
        Sr(yr, 'onTransitionStart'),
        Sr(br, 'onTransitionCancel'),
        Sr(vr, 'onTransitionEnd'),
        tt('onMouseEnter', ['mouseout', 'mouseover']),
        tt('onMouseLeave', ['mouseout', 'mouseover']),
        tt('onPointerEnter', ['pointerout', 'pointerover']),
        tt('onPointerLeave', ['pointerout', 'pointerover']),
        et('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
        et(
          'onSelect',
          'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
        ),
        et('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
        et('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
        et('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
        et('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
      var Cc =
          'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
          ),
        Ac = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Cc));
      function Tc(e, t) {
        t = !!(4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i],
                  s = l.instance,
                  u = l.currentTarget;
                if (((l = l.listener), s !== o && a.isPropagationStopped())) break e;
                (o = l), (a.currentTarget = u);
                try {
                  o(a);
                } catch (c) {
                  Ri(c);
                }
                (a.currentTarget = null), (o = s);
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((s = (l = r[i]).instance),
                  (u = l.currentTarget),
                  (l = l.listener),
                  s !== o && a.isPropagationStopped())
                )
                  break e;
                (o = l), (a.currentTarget = u);
                try {
                  o(a);
                } catch (c) {
                  Ri(c);
                }
                (a.currentTarget = null), (o = s);
              }
          }
        }
      }
      function jc(e, t) {
        var n = t[$e];
        void 0 === n && (n = t[$e] = new Set());
        var r = e + '__bubble';
        n.has(r) || (Lc(t, e, 2, !1), n.add(r));
      }
      function Pc(e, t, n) {
        var r = 0;
        t && (r |= 4), Lc(n, e, r, t);
      }
      var Nc = '_reactListening' + Math.random().toString(36).slice(2);
      function Oc(e) {
        if (!e[Nc]) {
          (e[Nc] = !0),
            Ze.forEach(function (t) {
              'selectionchange' !== t && (Ac.has(t) || Pc(t, !1, e), Pc(t, !0, e));
            });
          var t = 9 === e.nodeType ? e : e.ownerDocument;
          null === t || t[Nc] || ((t[Nc] = !0), Pc('selectionchange', !1, t));
        }
      }
      function Lc(e, t, n, r) {
        switch (Xd(t)) {
          case 2:
            var a = Gd;
            break;
          case 8:
            a = Vd;
            break;
          default:
            a = Wd;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !Mt || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Rc(e, t, n, r, a) {
        var o = r;
        if (!(1 & t || 2 & t || null === r))
          e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
              var l = r.stateNode.containerInfo;
              if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
              if (4 === i)
                for (i = r.return; null !== i; ) {
                  var s = i.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = i.stateNode.containerInfo) === a || (8 === s.nodeType && s.parentNode === a))
                  )
                    return;
                  i = i.return;
                }
              for (; null !== l; ) {
                if (null === (i = We(l))) return;
                if (5 === (s = i.tag) || 6 === s || 26 === s || 27 === s) {
                  r = o = i;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        Ft(function () {
          var r = o,
            a = Nt(n),
            i = [];
          e: {
            var l = wr.get(e);
            if (void 0 !== l) {
              var s = Zt,
                u = e;
              switch (e) {
                case 'keypress':
                  if (0 === Ht(n)) break e;
                case 'keydown':
                case 'keyup':
                  s = mn;
                  break;
                case 'focusin':
                  (u = 'focus'), (s = an);
                  break;
                case 'focusout':
                  (u = 'blur'), (s = an);
                  break;
                case 'beforeblur':
                case 'afterblur':
                  s = an;
                  break;
                case 'click':
                  if (2 === n.button) break e;
                case 'auxclick':
                case 'dblclick':
                case 'mousedown':
                case 'mousemove':
                case 'mouseup':
                case 'mouseout':
                case 'mouseover':
                case 'contextmenu':
                  s = nn;
                  break;
                case 'drag':
                case 'dragend':
                case 'dragenter':
                case 'dragexit':
                case 'dragleave':
                case 'dragover':
                case 'dragstart':
                case 'drop':
                  s = rn;
                  break;
                case 'touchcancel':
                case 'touchend':
                case 'touchmove':
                case 'touchstart':
                  s = gn;
                  break;
                case pr:
                case mr:
                case hr:
                  s = on;
                  break;
                case vr:
                  s = yn;
                  break;
                case 'scroll':
                case 'scrollend':
                  s = en;
                  break;
                case 'wheel':
                  s = bn;
                  break;
                case 'copy':
                case 'cut':
                case 'paste':
                  s = ln;
                  break;
                case 'gotpointercapture':
                case 'lostpointercapture':
                case 'pointercancel':
                case 'pointerdown':
                case 'pointermove':
                case 'pointerout':
                case 'pointerover':
                case 'pointerup':
                  s = hn;
                  break;
                case 'toggle':
                case 'beforetoggle':
                  s = vn;
              }
              var c = !!(4 & t),
                d = !c && ('scroll' === e || 'scrollend' === e),
                f = c ? (null !== l ? l + 'Capture' : null) : l;
              c = [];
              for (var p, m = r; null !== m; ) {
                var h = m;
                if (
                  ((p = h.stateNode),
                  (5 !== (h = h.tag) && 26 !== h && 27 !== h) ||
                    null === p ||
                    null === f ||
                    (null != (h = It(m, f)) && c.push(Dc(m, h, p))),
                  d)
                )
                  break;
                m = m.return;
              }
              0 < c.length && ((l = new s(l, u, null, n, a)), i.push({ event: l, listeners: c }));
            }
          }
          if (!(7 & t)) {
            if (
              ((s = 'mouseout' === e || 'pointerout' === e),
              (!(l = 'mouseover' === e || 'pointerover' === e) ||
                n === Pt ||
                !(u = n.relatedTarget || n.fromElement) ||
                (!We(u) && !u[Be])) &&
                (s || l) &&
                ((l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window),
                s
                  ? ((s = r),
                    null !== (u = (u = n.relatedTarget || n.toElement) ? We(u) : null) &&
                      ((d = I(u)), (c = u.tag), u !== d || (5 !== c && 27 !== c && 6 !== c)) &&
                      (u = null))
                  : ((s = null), (u = r)),
                s !== u))
            ) {
              if (
                ((c = nn),
                (h = 'onMouseLeave'),
                (f = 'onMouseEnter'),
                (m = 'mouse'),
                ('pointerout' !== e && 'pointerover' !== e) ||
                  ((c = hn), (h = 'onPointerLeave'), (f = 'onPointerEnter'), (m = 'pointer')),
                (d = null == s ? l : Ke(s)),
                (p = null == u ? l : Ke(u)),
                ((l = new c(h, m + 'leave', s, n, a)).target = d),
                (l.relatedTarget = p),
                (h = null),
                We(a) === r && (((c = new c(f, m + 'enter', u, n, a)).target = p), (c.relatedTarget = d), (h = c)),
                (d = h),
                s && u)
              )
                e: {
                  for (f = u, m = 0, p = c = s; p; p = Ic(p)) m++;
                  for (p = 0, h = f; h; h = Ic(h)) p++;
                  for (; 0 < m - p; ) (c = Ic(c)), m--;
                  for (; 0 < p - m; ) (f = Ic(f)), p--;
                  for (; m--; ) {
                    if (c === f || (null !== f && c === f.alternate)) break e;
                    (c = Ic(c)), (f = Ic(f));
                  }
                  c = null;
                }
              else c = null;
              null !== s && Mc(i, l, s, c, !1), null !== u && null !== d && Mc(i, d, u, c, !0);
            }
            if (
              'select' === (s = (l = r ? Ke(r) : window).nodeName && l.nodeName.toLowerCase()) ||
              ('input' === s && 'file' === l.type)
            )
              var g = In;
            else if (Nn(l))
              if (Mn) g = Wn;
              else {
                g = Gn;
                var y = Hn;
              }
            else
              !(s = l.nodeName) || 'input' !== s.toLowerCase() || ('checkbox' !== l.type && 'radio' !== l.type)
                ? r && Ct(r.elementType) && (g = In)
                : (g = Vn);
            switch (
              (g && (g = g(e, r))
                ? On(i, g, n, a)
                : (y && y(e, l, r),
                  'focusout' === e &&
                    r &&
                    'number' === l.type &&
                    null != r.memoizedProps.value &&
                    bt(l, 'number', l.value)),
              (y = r ? Ke(r) : window),
              e)
            ) {
              case 'focusin':
                (Nn(y) || 'true' === y.contentEditable) && ((rr = y), (ar = r), (or = null));
                break;
              case 'focusout':
                or = ar = rr = null;
                break;
              case 'mousedown':
                ir = !0;
                break;
              case 'contextmenu':
              case 'mouseup':
              case 'dragend':
                (ir = !1), lr(i, n, a);
                break;
              case 'selectionchange':
                if (nr) break;
              case 'keydown':
              case 'keyup':
                lr(i, n, a);
            }
            var b;
            if (kn)
              e: {
                switch (e) {
                  case 'compositionstart':
                    var v = 'onCompositionStart';
                    break e;
                  case 'compositionend':
                    v = 'onCompositionEnd';
                    break e;
                  case 'compositionupdate':
                    v = 'onCompositionUpdate';
                    break e;
                }
                v = void 0;
              }
            else
              jn
                ? An(e, n) && (v = 'onCompositionEnd')
                : 'keydown' === e && 229 === n.keyCode && (v = 'onCompositionStart');
            v &&
              (En &&
                'ko' !== n.locale &&
                (jn || 'onCompositionStart' !== v
                  ? 'onCompositionEnd' === v && jn && (b = qt())
                  : (($t = 'value' in (Bt = a) ? Bt.value : Bt.textContent), (jn = !0))),
              0 < (y = Fc(r, v)).length &&
                ((v = new sn(v, e, null, n, a)),
                i.push({ event: v, listeners: y }),
                b ? (v.data = b) : null !== (b = Tn(n)) && (v.data = b))),
              (b = xn
                ? (function (e, t) {
                    switch (e) {
                      case 'compositionend':
                        return Tn(t);
                      case 'keypress':
                        return 32 !== t.which ? null : ((Cn = !0), _n);
                      case 'textInput':
                        return (e = t.data) === _n && Cn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (jn)
                      return 'compositionend' === e || (!kn && An(e, t))
                        ? ((e = qt()), (Ut = $t = Bt = null), (jn = !1), e)
                        : null;
                    switch (e) {
                      case 'paste':
                      default:
                        return null;
                      case 'keypress':
                        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case 'compositionend':
                        return En && 'ko' !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (v = Fc(r, 'onBeforeInput')).length &&
                ((y = new sn('onBeforeInput', 'beforeinput', null, n, a)),
                i.push({ event: y, listeners: v }),
                (y.data = b)),
              (function (e, t, n, r, a) {
                if ('submit' === t && n && n.stateNode === a) {
                  var o = Sc((a[ze] || null).action),
                    i = r.submitter;
                  i &&
                    null !== (t = (t = i[ze] || null) ? Sc(t.formAction) : i.getAttribute('formAction')) &&
                    ((o = t), (i = null));
                  var l = new Zt('action', 'action', null, r, a);
                  e.push({
                    event: l,
                    listeners: [
                      {
                        instance: null,
                        listener: function () {
                          if (r.defaultPrevented) {
                            if (0 !== mc) {
                              var e = i ? xc(a, i) : new FormData(a);
                              di(n, { pending: !0, data: e, method: a.method, action: o }, null, e);
                            }
                          } else
                            'function' == typeof o &&
                              (l.preventDefault(),
                              (e = i ? xc(a, i) : new FormData(a)),
                              di(n, { pending: !0, data: e, method: a.method, action: o }, o, e));
                        },
                        currentTarget: a,
                      },
                    ],
                  });
                }
              })(i, e, r, n, a);
          }
          Tc(i, t);
        });
      }
      function Dc(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Fc(e, t) {
        for (var n = t + 'Capture', r = []; null !== e; ) {
          var a = e,
            o = a.stateNode;
          (5 !== (a = a.tag) && 26 !== a && 27 !== a) ||
            null === o ||
            (null != (a = It(e, n)) && r.unshift(Dc(e, a, o)), null != (a = It(e, t)) && r.push(Dc(e, a, o))),
            (e = e.return);
        }
        return r;
      }
      function Ic(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag && 27 !== e.tag);
        return e || null;
      }
      function Mc(e, t, n, r, a) {
        for (var o = t._reactName, i = []; null !== n && n !== r; ) {
          var l = n,
            s = l.alternate,
            u = l.stateNode;
          if (((l = l.tag), null !== s && s === r)) break;
          (5 !== l && 26 !== l && 27 !== l) ||
            null === u ||
            ((s = u),
            a
              ? null != (u = It(n, o)) && i.unshift(Dc(n, u, s))
              : a || (null != (u = It(n, o)) && i.push(Dc(n, u, s)))),
            (n = n.return);
        }
        0 !== i.length && e.push({ event: t, listeners: i });
      }
      var zc = /\r\n?/g,
        Bc = /\u0000|\uFFFD/g;
      function $c(e) {
        return ('string' == typeof e ? e : '' + e).replace(zc, '\n').replace(Bc, '');
      }
      function Uc(e, t) {
        return (t = $c(t)), $c(e) === t;
      }
      function qc() {}
      function Hc(e, t, n, r, a, o) {
        switch (n) {
          case 'children':
            'string' == typeof r
              ? 'body' === t || ('textarea' === t && '' === r) || St(e, r)
              : ('number' == typeof r || 'bigint' == typeof r) && 'body' !== t && St(e, '' + r);
            break;
          case 'className':
            lt(e, 'class', r);
            break;
          case 'tabIndex':
            lt(e, 'tabindex', r);
            break;
          case 'dir':
          case 'role':
          case 'viewBox':
          case 'width':
          case 'height':
            lt(e, n, r);
            break;
          case 'style':
            _t(e, r, o);
            break;
          case 'data':
            if ('object' !== t) {
              lt(e, 'data', r);
              break;
            }
          case 'src':
          case 'href':
            if ('' === r && ('a' !== t || 'href' !== n)) {
              e.removeAttribute(n);
              break;
            }
            if (null == r || 'function' == typeof r || 'symbol' == typeof r || 'boolean' == typeof r) {
              e.removeAttribute(n);
              break;
            }
            (r = jt('' + r)), e.setAttribute(n, r);
            break;
          case 'action':
          case 'formAction':
            if ('function' == typeof r) {
              e.setAttribute(
                n,
                "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
              );
              break;
            }
            if (
              ('function' == typeof o &&
                ('formAction' === n
                  ? ('input' !== t && Hc(e, t, 'name', a.name, a, null),
                    Hc(e, t, 'formEncType', a.formEncType, a, null),
                    Hc(e, t, 'formMethod', a.formMethod, a, null),
                    Hc(e, t, 'formTarget', a.formTarget, a, null))
                  : (Hc(e, t, 'encType', a.encType, a, null),
                    Hc(e, t, 'method', a.method, a, null),
                    Hc(e, t, 'target', a.target, a, null))),
              null == r || 'symbol' == typeof r || 'boolean' == typeof r)
            ) {
              e.removeAttribute(n);
              break;
            }
            (r = jt('' + r)), e.setAttribute(n, r);
            break;
          case 'onClick':
            null != r && (e.onclick = qc);
            break;
          case 'onScroll':
            null != r && jc('scroll', e);
            break;
          case 'onScrollEnd':
            null != r && jc('scrollend', e);
            break;
          case 'dangerouslySetInnerHTML':
            if (null != r) {
              if ('object' != typeof r || !('__html' in r)) throw Error(i(61));
              if (null != (n = r.__html)) {
                if (null != a.children) throw Error(i(60));
                e.innerHTML = n;
              }
            }
            break;
          case 'multiple':
            e.multiple = r && 'function' != typeof r && 'symbol' != typeof r;
            break;
          case 'muted':
            e.muted = r && 'function' != typeof r && 'symbol' != typeof r;
            break;
          case 'suppressContentEditableWarning':
          case 'suppressHydrationWarning':
          case 'defaultValue':
          case 'defaultChecked':
          case 'innerHTML':
          case 'ref':
          case 'autoFocus':
            break;
          case 'xlinkHref':
            if (null == r || 'function' == typeof r || 'boolean' == typeof r || 'symbol' == typeof r) {
              e.removeAttribute('xlink:href');
              break;
            }
            (n = jt('' + r)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n);
            break;
          case 'contentEditable':
          case 'spellCheck':
          case 'draggable':
          case 'value':
          case 'autoReverse':
          case 'externalResourcesRequired':
          case 'focusable':
          case 'preserveAlpha':
            null != r && 'function' != typeof r && 'symbol' != typeof r
              ? e.setAttribute(n, '' + r)
              : e.removeAttribute(n);
            break;
          case 'inert':
          case 'allowFullScreen':
          case 'async':
          case 'autoPlay':
          case 'controls':
          case 'default':
          case 'defer':
          case 'disabled':
          case 'disablePictureInPicture':
          case 'disableRemotePlayback':
          case 'formNoValidate':
          case 'hidden':
          case 'loop':
          case 'noModule':
          case 'noValidate':
          case 'open':
          case 'playsInline':
          case 'readOnly':
          case 'required':
          case 'reversed':
          case 'scoped':
          case 'seamless':
          case 'itemScope':
            r && 'function' != typeof r && 'symbol' != typeof r ? e.setAttribute(n, '') : e.removeAttribute(n);
            break;
          case 'capture':
          case 'download':
            !0 === r
              ? e.setAttribute(n, '')
              : !1 !== r && null != r && 'function' != typeof r && 'symbol' != typeof r
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
            break;
          case 'cols':
          case 'rows':
          case 'size':
          case 'span':
            null != r && 'function' != typeof r && 'symbol' != typeof r && !isNaN(r) && 1 <= r
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
            break;
          case 'rowSpan':
          case 'start':
            null == r || 'function' == typeof r || 'symbol' == typeof r || isNaN(r)
              ? e.removeAttribute(n)
              : e.setAttribute(n, r);
            break;
          case 'popover':
            jc('beforetoggle', e), jc('toggle', e), it(e, 'popover', r);
            break;
          case 'xlinkActuate':
            st(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
            break;
          case 'xlinkArcrole':
            st(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
            break;
          case 'xlinkRole':
            st(e, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
            break;
          case 'xlinkShow':
            st(e, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
            break;
          case 'xlinkTitle':
            st(e, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
            break;
          case 'xlinkType':
            st(e, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
            break;
          case 'xmlBase':
            st(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
            break;
          case 'xmlLang':
            st(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
            break;
          case 'xmlSpace':
            st(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
            break;
          case 'is':
            it(e, 'is', r);
            break;
          case 'innerText':
          case 'textContent':
            break;
          default:
            (!(2 < n.length) || ('o' !== n[0] && 'O' !== n[0]) || ('n' !== n[1] && 'N' !== n[1])) &&
              it(e, (n = At.get(n) || n), r);
        }
      }
      function Gc(e, t, n, r, a, o) {
        switch (n) {
          case 'style':
            _t(e, r, o);
            break;
          case 'dangerouslySetInnerHTML':
            if (null != r) {
              if ('object' != typeof r || !('__html' in r)) throw Error(i(61));
              if (null != (n = r.__html)) {
                if (null != a.children) throw Error(i(60));
                e.innerHTML = n;
              }
            }
            break;
          case 'children':
            'string' == typeof r ? St(e, r) : ('number' == typeof r || 'bigint' == typeof r) && St(e, '' + r);
            break;
          case 'onScroll':
            null != r && jc('scroll', e);
            break;
          case 'onScrollEnd':
            null != r && jc('scrollend', e);
            break;
          case 'onClick':
            null != r && (e.onclick = qc);
            break;
          case 'suppressContentEditableWarning':
          case 'suppressHydrationWarning':
          case 'innerHTML':
          case 'ref':
          case 'innerText':
          case 'textContent':
            break;
          default:
            Je.hasOwnProperty(n) ||
              ('o' !== n[0] ||
              'n' !== n[1] ||
              ((a = n.endsWith('Capture')),
              (t = n.slice(2, a ? n.length - 7 : void 0)),
              'function' == typeof (o = null != (o = e[ze] || null) ? o[n] : null) && e.removeEventListener(t, o, a),
              'function' != typeof r)
                ? n in e
                  ? (e[n] = r)
                  : !0 === r
                  ? e.setAttribute(n, '')
                  : it(e, n, r)
                : ('function' != typeof o &&
                    null !== o &&
                    (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                  e.addEventListener(t, r, a)));
        }
      }
      function Vc(e, t, n) {
        switch (t) {
          case 'div':
          case 'span':
          case 'svg':
          case 'path':
          case 'a':
          case 'g':
          case 'p':
          case 'li':
            break;
          case 'img':
            jc('error', e), jc('load', e);
            var r,
              a = !1,
              o = !1;
            for (r in n)
              if (n.hasOwnProperty(r)) {
                var l = n[r];
                if (null != l)
                  switch (r) {
                    case 'src':
                      a = !0;
                      break;
                    case 'srcSet':
                      o = !0;
                      break;
                    case 'children':
                    case 'dangerouslySetInnerHTML':
                      throw Error(i(137, t));
                    default:
                      Hc(e, t, r, l, n, null);
                  }
              }
            return o && Hc(e, t, 'srcSet', n.srcSet, n, null), void (a && Hc(e, t, 'src', n.src, n, null));
          case 'input':
            jc('invalid', e);
            var s = (r = l = o = null),
              u = null,
              c = null;
            for (a in n)
              if (n.hasOwnProperty(a)) {
                var d = n[a];
                if (null != d)
                  switch (a) {
                    case 'name':
                      o = d;
                      break;
                    case 'type':
                      l = d;
                      break;
                    case 'checked':
                      u = d;
                      break;
                    case 'defaultChecked':
                      c = d;
                      break;
                    case 'value':
                      r = d;
                      break;
                    case 'defaultValue':
                      s = d;
                      break;
                    case 'children':
                    case 'dangerouslySetInnerHTML':
                      if (null != d) throw Error(i(137, t));
                      break;
                    default:
                      Hc(e, t, a, d, n, null);
                  }
              }
            return yt(e, r, s, u, c, l, o, !1), void dt(e);
          case 'select':
            for (o in (jc('invalid', e), (a = l = r = null), n))
              if (n.hasOwnProperty(o) && null != (s = n[o]))
                switch (o) {
                  case 'value':
                    r = s;
                    break;
                  case 'defaultValue':
                    l = s;
                    break;
                  case 'multiple':
                    a = s;
                  default:
                    Hc(e, t, o, s, n, null);
                }
            return (
              (t = r),
              (n = l),
              (e.multiple = !!a),
              void (null != t ? vt(e, !!a, t, !1) : null != n && vt(e, !!a, n, !0))
            );
          case 'textarea':
            for (l in (jc('invalid', e), (r = o = a = null), n))
              if (n.hasOwnProperty(l) && null != (s = n[l]))
                switch (l) {
                  case 'value':
                    a = s;
                    break;
                  case 'defaultValue':
                    o = s;
                    break;
                  case 'children':
                    r = s;
                    break;
                  case 'dangerouslySetInnerHTML':
                    if (null != s) throw Error(i(91));
                    break;
                  default:
                    Hc(e, t, l, s, n, null);
                }
            return kt(e, a, o, r), void dt(e);
          case 'option':
            for (u in n)
              if (n.hasOwnProperty(u) && null != (a = n[u]))
                if ('selected' === u) e.selected = a && 'function' != typeof a && 'symbol' != typeof a;
                else Hc(e, t, u, a, n, null);
            return;
          case 'dialog':
            jc('cancel', e), jc('close', e);
            break;
          case 'iframe':
          case 'object':
            jc('load', e);
            break;
          case 'video':
          case 'audio':
            for (a = 0; a < Cc.length; a++) jc(Cc[a], e);
            break;
          case 'image':
            jc('error', e), jc('load', e);
            break;
          case 'details':
            jc('toggle', e);
            break;
          case 'embed':
          case 'source':
          case 'link':
            jc('error', e), jc('load', e);
          case 'area':
          case 'base':
          case 'br':
          case 'col':
          case 'hr':
          case 'keygen':
          case 'meta':
          case 'param':
          case 'track':
          case 'wbr':
          case 'menuitem':
            for (c in n)
              if (n.hasOwnProperty(c) && null != (a = n[c]))
                switch (c) {
                  case 'children':
                  case 'dangerouslySetInnerHTML':
                    throw Error(i(137, t));
                  default:
                    Hc(e, t, c, a, n, null);
                }
            return;
          default:
            if (Ct(t)) {
              for (d in n) n.hasOwnProperty(d) && void 0 !== (a = n[d]) && Gc(e, t, d, a, n, void 0);
              return;
            }
        }
        for (s in n) n.hasOwnProperty(s) && null != (a = n[s]) && Hc(e, t, s, a, n, null);
      }
      var Wc = null,
        Qc = null;
      function Kc(e) {
        return 9 === e.nodeType ? e : e.ownerDocument;
      }
      function Yc(e) {
        switch (e) {
          case 'http://www.w3.org/2000/svg':
            return 1;
          case 'http://www.w3.org/1998/Math/MathML':
            return 2;
          default:
            return 0;
        }
      }
      function Xc(e, t) {
        if (0 === e)
          switch (t) {
            case 'svg':
              return 1;
            case 'math':
              return 2;
            default:
              return 0;
          }
        return 1 === e && 'foreignObject' === t ? 0 : e;
      }
      function Zc(e, t) {
        return (
          'textarea' === e ||
          'noscript' === e ||
          'string' == typeof t.children ||
          'number' == typeof t.children ||
          'bigint' == typeof t.children ||
          ('object' == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Jc = null;
      var ed = 'function' == typeof setTimeout ? setTimeout : void 0,
        td = 'function' == typeof clearTimeout ? clearTimeout : void 0,
        nd = 'function' == typeof Promise ? Promise : void 0,
        rd =
          'function' == typeof queueMicrotask
            ? queueMicrotask
            : void 0 !== nd
            ? function (e) {
                return nd.resolve(null).then(e).catch(ad);
              }
            : ed;
      function ad(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function od(e, t) {
        var n = t,
          r = 0;
        do {
          var a = n.nextSibling;
          if ((e.removeChild(n), a && 8 === a.nodeType))
            if ('/$' === (n = a.data)) {
              if (0 === r) return e.removeChild(a), void gf(t);
              r--;
            } else ('$' !== n && '$?' !== n && '$!' !== n) || r++;
          n = a;
        } while (n);
        gf(t);
      }
      function id(e) {
        var t = e.firstChild;
        for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
          var n = t;
          switch (((t = t.nextSibling), n.nodeName)) {
            case 'HTML':
            case 'HEAD':
            case 'BODY':
              id(n), Ve(n);
              continue;
            case 'SCRIPT':
            case 'STYLE':
              continue;
            case 'LINK':
              if ('stylesheet' === n.rel.toLowerCase()) continue;
          }
          e.removeChild(n);
        }
      }
      function ld(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
          if (8 === t) {
            if ('$' === (t = e.data) || '$!' === t || '$?' === t || 'F!' === t || 'F' === t) break;
            if ('/$' === t) return null;
          }
        }
        return e;
      }
      function sd(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ('$' === n || '$!' === n || '$?' === n) {
              if (0 === t) return e;
              t--;
            } else '/$' === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      function ud(e, t, n) {
        switch (((t = Kc(n)), e)) {
          case 'html':
            if (!(e = t.documentElement)) throw Error(i(452));
            return e;
          case 'head':
            if (!(e = t.head)) throw Error(i(453));
            return e;
          case 'body':
            if (!(e = t.body)) throw Error(i(454));
            return e;
          default:
            throw Error(i(451));
        }
      }
      var cd = new Map(),
        dd = new Set();
      function fd(e) {
        return 'function' == typeof e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      var pd = U.d;
      U.d = {
        f: function () {
          var e = pd.f(),
            t = Mu();
          return e || t;
        },
        r: function (e) {
          var t = Qe(e);
          null !== t && 5 === t.tag && 'form' === t.type ? pi(t) : pd.r(e);
        },
        D: function (e) {
          pd.D(e), hd('dns-prefetch', e, null);
        },
        C: function (e, t) {
          pd.C(e, t), hd('preconnect', e, t);
        },
        L: function (e, t, n) {
          pd.L(e, t, n);
          var r = md;
          if (r && e && t) {
            var a = 'link[rel="preload"][as="' + ht(t) + '"]';
            'image' === t && n && n.imageSrcSet
              ? ((a += '[imagesrcset="' + ht(n.imageSrcSet) + '"]'),
                'string' == typeof n.imageSizes && (a += '[imagesizes="' + ht(n.imageSizes) + '"]'))
              : (a += '[href="' + ht(e) + '"]');
            var o = a;
            switch (t) {
              case 'style':
                o = yd(e);
                break;
              case 'script':
                o = wd(e);
            }
            cd.has(o) ||
              ((e = N({ rel: 'preload', href: 'image' === t && n && n.imageSrcSet ? void 0 : e, as: t }, n)),
              cd.set(o, e),
              null !== r.querySelector(a) ||
                ('style' === t && r.querySelector(bd(o))) ||
                ('script' === t && r.querySelector(kd(o))) ||
                (Vc((t = r.createElement('link')), 'link', e), Xe(t), r.head.appendChild(t)));
          }
        },
        m: function (e, t) {
          pd.m(e, t);
          var n = md;
          if (n && e) {
            var r = t && 'string' == typeof t.as ? t.as : 'script',
              a = 'link[rel="modulepreload"][as="' + ht(r) + '"][href="' + ht(e) + '"]',
              o = a;
            switch (r) {
              case 'audioworklet':
              case 'paintworklet':
              case 'serviceworker':
              case 'sharedworker':
              case 'worker':
              case 'script':
                o = wd(e);
            }
            if (
              !cd.has(o) &&
              ((e = N({ rel: 'modulepreload', href: e }, t)), cd.set(o, e), null === n.querySelector(a))
            ) {
              switch (r) {
                case 'audioworklet':
                case 'paintworklet':
                case 'serviceworker':
                case 'sharedworker':
                case 'worker':
                case 'script':
                  if (n.querySelector(kd(o))) return;
              }
              Vc((r = n.createElement('link')), 'link', e), Xe(r), n.head.appendChild(r);
            }
          }
        },
        X: function (e, t) {
          pd.X(e, t);
          var n = md;
          if (n && e) {
            var r = Ye(n).hoistableScripts,
              a = wd(e),
              o = r.get(a);
            o ||
              ((o = n.querySelector(kd(a))) ||
                ((e = N({ src: e, async: !0 }, t)),
                (t = cd.get(a)) && _d(e, t),
                Xe((o = n.createElement('script'))),
                Vc(o, 'link', e),
                n.head.appendChild(o)),
              (o = { type: 'script', instance: o, count: 1, state: null }),
              r.set(a, o));
          }
        },
        S: function (e, t, n) {
          pd.S(e, t, n);
          var r = md;
          if (r && e) {
            var a = Ye(r).hoistableStyles,
              o = yd(e);
            t = t || 'default';
            var i = a.get(o);
            if (!i) {
              var l = { loading: 0, preload: null };
              if ((i = r.querySelector(bd(o)))) l.loading = 5;
              else {
                (e = N({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)), (n = cd.get(o)) && Ed(e, n);
                var s = (i = r.createElement('link'));
                Xe(s),
                  Vc(s, 'link', e),
                  (s._p = new Promise(function (e, t) {
                    (s.onload = e), (s.onerror = t);
                  })),
                  s.addEventListener('load', function () {
                    l.loading |= 1;
                  }),
                  s.addEventListener('error', function () {
                    l.loading |= 2;
                  }),
                  (l.loading |= 4),
                  xd(i, t, r);
              }
              (i = { type: 'stylesheet', instance: i, count: 1, state: l }), a.set(o, i);
            }
          }
        },
        M: function (e, t) {
          pd.M(e, t);
          var n = md;
          if (n && e) {
            var r = Ye(n).hoistableScripts,
              a = wd(e),
              o = r.get(a);
            o ||
              ((o = n.querySelector(kd(a))) ||
                ((e = N({ src: e, async: !0, type: 'module' }, t)),
                (t = cd.get(a)) && _d(e, t),
                Xe((o = n.createElement('script'))),
                Vc(o, 'link', e),
                n.head.appendChild(o)),
              (o = { type: 'script', instance: o, count: 1, state: null }),
              r.set(a, o));
          }
        },
      };
      var md = 'undefined' == typeof document ? null : document;
      function hd(e, t, n) {
        var r = md;
        if (r && 'string' == typeof t && t) {
          var a = ht(t);
          (a = 'link[rel="' + e + '"][href="' + a + '"]'),
            'string' == typeof n && (a += '[crossorigin="' + n + '"]'),
            dd.has(a) ||
              (dd.add(a),
              (e = { rel: e, crossOrigin: n, href: t }),
              null === r.querySelector(a) &&
                (Vc((t = r.createElement('link')), 'link', e), Xe(t), r.head.appendChild(t)));
        }
      }
      function gd(e, t, n, r) {
        var a,
          o,
          l,
          s,
          u = (u = X.current) ? fd(u) : null;
        if (!u) throw Error(i(446));
        switch (e) {
          case 'meta':
          case 'title':
            return null;
          case 'style':
            return 'string' == typeof n.precedence && 'string' == typeof n.href
              ? ((t = yd(n.href)),
                (r = (n = Ye(u).hoistableStyles).get(t)) ||
                  ((r = { type: 'style', instance: null, count: 0, state: null }), n.set(t, r)),
                r)
              : { type: 'void', instance: null, count: 0, state: null };
          case 'link':
            if ('stylesheet' === n.rel && 'string' == typeof n.href && 'string' == typeof n.precedence) {
              e = yd(n.href);
              var c = Ye(u).hoistableStyles,
                d = c.get(e);
              if (
                (d ||
                  ((u = u.ownerDocument || u),
                  (d = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }),
                  c.set(e, d),
                  (c = u.querySelector(bd(e))) && !c._p && ((d.instance = c), (d.state.loading = 5)),
                  cd.has(e) ||
                    ((n = {
                      rel: 'preload',
                      as: 'style',
                      href: n.href,
                      crossOrigin: n.crossOrigin,
                      integrity: n.integrity,
                      media: n.media,
                      hrefLang: n.hrefLang,
                      referrerPolicy: n.referrerPolicy,
                    }),
                    cd.set(e, n),
                    c ||
                      ((a = u),
                      (o = e),
                      (l = n),
                      (s = d.state),
                      a.querySelector('link[rel="preload"][as="style"][' + o + ']')
                        ? (s.loading = 1)
                        : ((o = a.createElement('link')),
                          (s.preload = o),
                          o.addEventListener('load', function () {
                            return (s.loading |= 1);
                          }),
                          o.addEventListener('error', function () {
                            return (s.loading |= 2);
                          }),
                          Vc(o, 'link', l),
                          Xe(o),
                          a.head.appendChild(o))))),
                t && null === r)
              )
                throw Error(i(528, ''));
              return d;
            }
            if (t && null !== r) throw Error(i(529, ''));
            return null;
          case 'script':
            return (
              (t = n.async),
              'string' == typeof (n = n.src) && t && 'function' != typeof t && 'symbol' != typeof t
                ? ((t = wd(n)),
                  (r = (n = Ye(u).hoistableScripts).get(t)) ||
                    ((r = { type: 'script', instance: null, count: 0, state: null }), n.set(t, r)),
                  r)
                : { type: 'void', instance: null, count: 0, state: null }
            );
          default:
            throw Error(i(444, e));
        }
      }
      function yd(e) {
        return 'href="' + ht(e) + '"';
      }
      function bd(e) {
        return 'link[rel="stylesheet"][' + e + ']';
      }
      function vd(e) {
        return N({}, e, { 'data-precedence': e.precedence, precedence: null });
      }
      function wd(e) {
        return '[src="' + ht(e) + '"]';
      }
      function kd(e) {
        return 'script[async]' + e;
      }
      function Sd(e, t, n) {
        if ((t.count++, null === t.instance))
          switch (t.type) {
            case 'style':
              var r = e.querySelector('style[data-href~="' + ht(n.href) + '"]');
              if (r) return (t.instance = r), Xe(r), r;
              var a = N({}, n, { 'data-href': n.href, 'data-precedence': n.precedence, href: null, precedence: null });
              return (
                Xe((r = (e.ownerDocument || e).createElement('style'))),
                Vc(r, 'style', a),
                xd(r, n.precedence, e),
                (t.instance = r)
              );
            case 'stylesheet':
              a = yd(n.href);
              var o = e.querySelector(bd(a));
              if (o) return (t.state.loading |= 4), (t.instance = o), Xe(o), o;
              (r = vd(n)), (a = cd.get(a)) && Ed(r, a), Xe((o = (e.ownerDocument || e).createElement('link')));
              var l = o;
              return (
                (l._p = new Promise(function (e, t) {
                  (l.onload = e), (l.onerror = t);
                })),
                Vc(o, 'link', r),
                (t.state.loading |= 4),
                xd(o, n.precedence, e),
                (t.instance = o)
              );
            case 'script':
              return (
                (o = wd(n.src)),
                (a = e.querySelector(kd(o)))
                  ? ((t.instance = a), Xe(a), a)
                  : ((r = n),
                    (a = cd.get(o)) && _d((r = N({}, n)), a),
                    Xe((a = (e = e.ownerDocument || e).createElement('script'))),
                    Vc(a, 'link', r),
                    e.head.appendChild(a),
                    (t.instance = a))
              );
            case 'void':
              return null;
            default:
              throw Error(i(443, t.type));
          }
        else
          'stylesheet' === t.type &&
            !(4 & t.state.loading) &&
            ((r = t.instance), (t.state.loading |= 4), xd(r, n.precedence, e));
        return t.instance;
      }
      function xd(e, t, n) {
        for (
          var r = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
            a = r.length ? r[r.length - 1] : null,
            o = a,
            i = 0;
          i < r.length;
          i++
        ) {
          var l = r[i];
          if (l.dataset.precedence === t) o = l;
          else if (o !== a) break;
        }
        o
          ? o.parentNode.insertBefore(e, o.nextSibling)
          : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
      }
      function Ed(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
          null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
          null == e.title && (e.title = t.title);
      }
      function _d(e, t) {
        null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
          null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
          null == e.integrity && (e.integrity = t.integrity);
      }
      var Cd = null;
      function Ad(e, t, n) {
        if (null === Cd) {
          var r = new Map(),
            a = (Cd = new Map());
          a.set(n, r);
        } else (r = (a = Cd).get(n)) || ((r = new Map()), a.set(n, r));
        if (r.has(e)) return r;
        for (r.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
          var o = n[a];
          if (
            !(o[Ge] || o[Me] || ('link' === e && 'stylesheet' === o.getAttribute('rel'))) &&
            'http://www.w3.org/2000/svg' !== o.namespaceURI
          ) {
            var i = o.getAttribute(t) || '';
            i = e + i;
            var l = r.get(i);
            l ? l.push(o) : r.set(i, [o]);
          }
        }
        return r;
      }
      function Td(e, t, n) {
        (e = e.ownerDocument || e).head.insertBefore(n, 'title' === t ? e.querySelector('head > title') : null);
      }
      function jd(e) {
        return !!('stylesheet' !== e.type || 3 & e.state.loading);
      }
      var Pd = null;
      function Nd() {}
      function Od() {
        if ((this.count--, 0 === this.count))
          if (this.stylesheets) Rd(this, this.stylesheets);
          else if (this.unsuspend) {
            var e = this.unsuspend;
            (this.unsuspend = null), e();
          }
      }
      var Ld = null;
      function Rd(e, t) {
        (e.stylesheets = null),
          null !== e.unsuspend && (e.count++, (Ld = new Map()), t.forEach(Dd, e), (Ld = null), Od.call(e));
      }
      function Dd(e, t) {
        if (!(4 & t.state.loading)) {
          var n = Ld.get(e);
          if (n) var r = n.get(null);
          else {
            (n = new Map()), Ld.set(e, n);
            for (var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), o = 0; o < a.length; o++) {
              var i = a[o];
              ('LINK' !== i.nodeName && 'not all' === i.getAttribute('media')) ||
                (n.set(i.dataset.precedence, i), (r = i));
            }
            r && n.set(null, r);
          }
          (i = (a = t.instance).getAttribute('data-precedence')),
            (o = n.get(i) || r) === r && n.set(null, a),
            n.set(i, a),
            this.count++,
            (r = Od.bind(this)),
            a.addEventListener('load', r),
            a.addEventListener('error', r),
            o
              ? o.parentNode.insertBefore(a, o.nextSibling)
              : (e = 9 === e.nodeType ? e.head : e).insertBefore(a, e.firstChild),
            (t.state.loading |= 4);
        }
      }
      var Fd = { $$typeof: g, Provider: null, Consumer: null, _currentValue: q, _currentValue2: q, _threadCount: 0 };
      function Id(e, t, n, r, a, o, i, l) {
        (this.tag = 1),
          (this.containerInfo = e),
          (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null),
          (this.callbackPriority = 0),
          (this.expirationTimes = Ne(-1)),
          (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.finishedLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Ne(0)),
          (this.hiddenUpdates = Ne(null)),
          (this.identifierPrefix = r),
          (this.onUncaughtError = a),
          (this.onCaughtError = o),
          (this.onRecoverableError = i),
          (this.pooledCache = null),
          (this.pooledCacheLanes = 0),
          (this.formState = l),
          (this.incompleteTransitions = new Map());
      }
      function Md(e, t, n, r, a, o, i, l, s, u, c, d) {
        return (
          (e = new Id(e, t, n, i, l, s, u, d)),
          (t = 1),
          !0 === o && (t |= 24),
          (o = Ds(3, null, null, t)),
          (e.current = o),
          (o.stateNode = e),
          (t = Ba()).refCount++,
          (e.pooledCache = t),
          t.refCount++,
          (o.memoizedState = { element: r, isDehydrated: n, cache: t }),
          jl(o),
          e
        );
      }
      function zd(e) {
        return e ? (e = Or) : Or;
      }
      function Bd(e, t, n, r, a, o) {
        (a = zd(a)),
          null === r.context ? (r.context = a) : (r.pendingContext = a),
          ((r = Nl(t)).payload = { element: n }),
          null !== (o = void 0 === o ? null : o) && (r.callback = o),
          null !== (n = Ol(e, r, t)) && (Ou(n, 0, t), Ll(n, e, t));
      }
      function $d(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function Ud(e, t) {
        $d(e, t), (e = e.alternate) && $d(e, t);
      }
      function qd(e) {
        if (13 === e.tag) {
          var t = jr(e, 67108864);
          null !== t && Ou(t, 0, 67108864), Ud(e, 67108864);
        }
      }
      var Hd = !0;
      function Gd(e, t, n, r) {
        var a = P.T;
        P.T = null;
        var o = U.p;
        try {
          (U.p = 2), Wd(e, t, n, r);
        } finally {
          (U.p = o), (P.T = a);
        }
      }
      function Vd(e, t, n, r) {
        var a = P.T;
        P.T = null;
        var o = U.p;
        try {
          (U.p = 8), Wd(e, t, n, r);
        } finally {
          (U.p = o), (P.T = a);
        }
      }
      function Wd(e, t, n, r) {
        if (Hd) {
          var a = Qd(r);
          if (null === a) Rc(e, t, r, Kd, n), lf(e, r);
          else if (
            (function (e, t, n, r, a) {
              switch (t) {
                case 'focusin':
                  return (Jd = sf(Jd, e, t, n, r, a)), !0;
                case 'dragenter':
                  return (ef = sf(ef, e, t, n, r, a)), !0;
                case 'mouseover':
                  return (tf = sf(tf, e, t, n, r, a)), !0;
                case 'pointerover':
                  var o = a.pointerId;
                  return nf.set(o, sf(nf.get(o) || null, e, t, n, r, a)), !0;
                case 'gotpointercapture':
                  return (o = a.pointerId), rf.set(o, sf(rf.get(o) || null, e, t, n, r, a)), !0;
              }
              return !1;
            })(a, e, t, n, r)
          )
            r.stopPropagation();
          else if ((lf(e, r), 4 & t && -1 < of.indexOf(e))) {
            for (; null !== a; ) {
              var o = Qe(a);
              if (null !== o)
                switch (o.tag) {
                  case 3:
                    if ((o = o.stateNode).current.memoizedState.isDehydrated) {
                      var i = _e(o.pendingLanes);
                      if (0 !== i) {
                        var l = o;
                        for (l.pendingLanes |= 2, l.entangledLanes |= 2; i; ) {
                          var s = 1 << (31 - we(i));
                          (l.entanglements[1] |= s), (i &= ~s);
                        }
                        hc(o), !(6 & eu) && ((wu = se() + 500), gc(0, !1));
                      }
                    }
                    break;
                  case 13:
                    null !== (l = jr(o, 2)) && Ou(l, 0, 2), Mu(), Ud(o, 2);
                }
              if ((null === (o = Qd(r)) && Rc(e, t, r, Kd, n), o === a)) break;
              a = o;
            }
            null !== a && r.stopPropagation();
          } else Rc(e, t, r, null, n);
        }
      }
      function Qd(e) {
        return Yd((e = Nt(e)));
      }
      var Kd = null;
      function Yd(e) {
        if (((Kd = null), null !== (e = We(e)))) {
          var t = I(e);
          if (null === t) e = null;
          else {
            var n = t.tag;
            if (13 === n) {
              if (null !== (e = M(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          }
        }
        return (Kd = e), null;
      }
      function Xd(e) {
        switch (e) {
          case 'beforetoggle':
          case 'cancel':
          case 'click':
          case 'close':
          case 'contextmenu':
          case 'copy':
          case 'cut':
          case 'auxclick':
          case 'dblclick':
          case 'dragend':
          case 'dragstart':
          case 'drop':
          case 'focusin':
          case 'focusout':
          case 'input':
          case 'invalid':
          case 'keydown':
          case 'keypress':
          case 'keyup':
          case 'mousedown':
          case 'mouseup':
          case 'paste':
          case 'pause':
          case 'play':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointerup':
          case 'ratechange':
          case 'reset':
          case 'resize':
          case 'seeked':
          case 'submit':
          case 'toggle':
          case 'touchcancel':
          case 'touchend':
          case 'touchstart':
          case 'volumechange':
          case 'change':
          case 'selectionchange':
          case 'textInput':
          case 'compositionstart':
          case 'compositionend':
          case 'compositionupdate':
          case 'beforeblur':
          case 'afterblur':
          case 'beforeinput':
          case 'blur':
          case 'fullscreenchange':
          case 'focus':
          case 'hashchange':
          case 'popstate':
          case 'select':
          case 'selectstart':
            return 2;
          case 'drag':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'mousemove':
          case 'mouseout':
          case 'mouseover':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'scroll':
          case 'touchmove':
          case 'wheel':
          case 'mouseenter':
          case 'mouseleave':
          case 'pointerenter':
          case 'pointerleave':
            return 8;
          case 'message':
            switch (ue()) {
              case ce:
                return 2;
              case de:
                return 8;
              case fe:
              case pe:
                return 32;
              case me:
                return 268435456;
              default:
                return 32;
            }
          default:
            return 32;
        }
      }
      var Zd = !1,
        Jd = null,
        ef = null,
        tf = null,
        nf = new Map(),
        rf = new Map(),
        af = [],
        of =
          'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
            ' '
          );
      function lf(e, t) {
        switch (e) {
          case 'focusin':
          case 'focusout':
            Jd = null;
            break;
          case 'dragenter':
          case 'dragleave':
            ef = null;
            break;
          case 'mouseover':
          case 'mouseout':
            tf = null;
            break;
          case 'pointerover':
          case 'pointerout':
            nf.delete(t.pointerId);
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
            rf.delete(t.pointerId);
        }
      }
      function sf(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }),
            null !== t && null !== (t = Qe(t)) && qd(t),
            e)
          : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== a && -1 === t.indexOf(a) && t.push(a), e);
      }
      function uf(e) {
        var t = We(e.target);
        if (null !== t) {
          var n = I(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = M(n)))
                return (
                  (e.blockedOn = t),
                  void (function (e, t) {
                    var n = U.p;
                    try {
                      return (U.p = e), t();
                    } finally {
                      U.p = n;
                    }
                  })(e.priority, function () {
                    if (13 === n.tag) {
                      var e = Pu(),
                        t = jr(n, e);
                      null !== t && Ou(t, 0, e), Ud(n, e);
                    }
                  })
                );
            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
              return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function cf(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Qd(e.nativeEvent);
          if (null !== n) return null !== (t = Qe(n)) && qd(t), (e.blockedOn = n), !1;
          var r = new (n = e.nativeEvent).constructor(n.type, n);
          (Pt = r), n.target.dispatchEvent(r), (Pt = null), t.shift();
        }
        return !0;
      }
      function df(e, t, n) {
        cf(e) && n.delete(t);
      }
      function ff() {
        (Zd = !1),
          null !== Jd && cf(Jd) && (Jd = null),
          null !== ef && cf(ef) && (ef = null),
          null !== tf && cf(tf) && (tf = null),
          nf.forEach(df),
          rf.forEach(df);
      }
      function pf(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null), Zd || ((Zd = !0), r.unstable_scheduleCallback(r.unstable_NormalPriority, ff)));
      }
      var mf = null;
      function hf(e) {
        mf !== e &&
          ((mf = e),
          r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
            mf === e && (mf = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t],
                r = e[t + 1],
                a = e[t + 2];
              if ('function' != typeof r) {
                if (null === Yd(r || n)) continue;
                break;
              }
              var o = Qe(n);
              null !== o &&
                (e.splice(t, 3), (t -= 3), di(o, { pending: !0, data: a, method: n.method, action: r }, r, a));
            }
          }));
      }
      function gf(e) {
        function t(t) {
          return pf(t, e);
        }
        null !== Jd && pf(Jd, e), null !== ef && pf(ef, e), null !== tf && pf(tf, e), nf.forEach(t), rf.forEach(t);
        for (var n = 0; n < af.length; n++) {
          var r = af[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
        for (; 0 < af.length && null === (n = af[0]).blockedOn; ) uf(n), null === n.blockedOn && af.shift();
        if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
          for (r = 0; r < n.length; r += 3) {
            var a = n[r],
              o = n[r + 1],
              i = a[ze] || null;
            if ('function' == typeof o) i || hf(n);
            else if (i) {
              var l = null;
              if (o && o.hasAttribute('formAction')) {
                if (((a = o), (i = o[ze] || null))) l = i.formAction;
                else if (null !== Yd(a)) continue;
              } else l = i.action;
              'function' == typeof l ? (n[r + 1] = l) : (n.splice(r, 3), (r -= 3)), hf(n);
            }
          }
      }
      function yf(e) {
        this._internalRoot = e;
      }
      function bf(e) {
        this._internalRoot = e;
      }
      (bf.prototype.render = yf.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (null === t) throw Error(i(409));
          Bd(t.current, Pu(), e, t, null, null);
        }),
        (bf.prototype.unmount = yf.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (null !== e) {
              this._internalRoot = null;
              var t = e.containerInfo;
              0 === e.tag && tc(), Bd(e.current, 2, null, e, null, null), Mu(), (t[Be] = null);
            }
          }),
        (bf.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            var t = Fe();
            e = { blockedOn: null, target: e, priority: t };
            for (var n = 0; n < af.length && 0 !== t && t < af[n].priority; n++);
            af.splice(n, 0, e), 0 === n && uf(e);
          }
        });
      var vf = a.version;
      if ('19.0.0' !== vf) throw Error(i(527, vf, '19.0.0'));
      U.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(i(188));
          throw ((e = Object.keys(e).join(',')), Error(i(268, e)));
        }
        return (
          (e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = I(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var o = a.alternate;
              if (null === o) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === o.child) {
                for (o = a.child; o; ) {
                  if (o === n) return z(a), e;
                  if (o === r) return z(a), t;
                  o = o.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = a), (r = o);
              else {
                for (var l = !1, s = a.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = a), (r = o);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = a), (n = o);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          })(t)),
          (e = null === (e = null !== e ? B(e) : null) ? null : e.stateNode)
        );
      };
      var wf = {
        bundleType: 0,
        version: '19.0.0',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: P,
        findFiberByHostInstance: We,
        reconcilerVersion: '19.0.0',
      };
      if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var kf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!kf.isDisabled && kf.supportsFiber)
          try {
            (ye = kf.inject(wf)), (be = kf);
          } catch (xf) {}
      }
      (t.createRoot = function (e, t) {
        if (!l(e)) throw Error(i(299));
        var n = !1,
          r = '',
          a = Di,
          o = Fi,
          s = Ii;
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onUncaughtError && (a = t.onUncaughtError),
            void 0 !== t.onCaughtError && (o = t.onCaughtError),
            void 0 !== t.onRecoverableError && (s = t.onRecoverableError),
            void 0 !== t.unstable_transitionCallbacks && t.unstable_transitionCallbacks),
          (t = Md(e, 1, !1, null, 0, n, r, a, o, s, 0, null)),
          (e[Be] = t.current),
          Oc(8 === e.nodeType ? e.parentNode : e),
          new yf(t)
        );
      }),
        (t.hydrateRoot = function (e, t, n) {
          if (!l(e)) throw Error(i(299));
          var r = !1,
            a = '',
            o = Di,
            s = Fi,
            u = Ii,
            c = null;
          return (
            null != n &&
              (!0 === n.unstable_strictMode && (r = !0),
              void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
              void 0 !== n.onUncaughtError && (o = n.onUncaughtError),
              void 0 !== n.onCaughtError && (s = n.onCaughtError),
              void 0 !== n.onRecoverableError && (u = n.onRecoverableError),
              void 0 !== n.unstable_transitionCallbacks && n.unstable_transitionCallbacks,
              void 0 !== n.formState && (c = n.formState)),
            ((t = Md(e, 1, !0, t, 0, r, a, o, s, u, 0, c)).context = zd(null)),
            (n = t.current),
            ((a = Nl((r = Pu()))).callback = null),
            Ol(n, a, r),
            (t.current.lanes = r),
            Oe(t, r),
            hc(t),
            (e[Be] = t.current),
            Oc(e),
            new bf(t)
          );
        }),
        (t.version = '19.0.0');
    },
    8142: (e, t, n) => {
      'use strict';
      n.d(t, { o: () => o, x: () => i });
      var r = n(3696),
        a = n(2540);
      const o = r.createContext(!1);
      function i(e) {
        let { children: t } = e;
        const [n, i] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            i(!0);
          }, []),
          (0, a.jsx)(o.Provider, { value: n, children: t })
        );
      }
    },
    8225: (e, t, n) => {
      'use strict';
      n.d(t, { Be: () => u, ZC: () => l, _q: () => i, dV: () => s, fM: () => c });
      var r = n(3696),
        a = n(3604),
        o = n(2540);
      function i(e) {
        const t = (0, r.useRef)(e);
        return (
          (0, a.A)(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)(function () {
            return t.current(...arguments);
          }, [])
        );
      }
      function l(e) {
        const t = (0, r.useRef)();
        return (
          (0, a.A)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      class s extends Error {
        constructor(e, t) {
          super(),
            (this.name = 'ReactContextError'),
            (this.message = `Hook ${
              this.stack?.split('\n')[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)?.groups.name ?? ''
            } is called outside the <${e}>. ${t ?? ''}`);
        }
      }
      function u(e) {
        const t = Object.entries(e);
        return t.sort((e, t) => e[0].localeCompare(t[0])), (0, r.useMemo)(() => e, t.flat());
      }
      function c(e) {
        return (t) => {
          let { children: n } = t;
          return (0, o.jsx)(o.Fragment, { children: e.reduceRight((e, t) => (0, o.jsx)(t, { children: e }), n) });
        };
      }
    },
    8299: (e, t) => {
      'use strict';
      var n = 'function' == typeof Symbol && Symbol.for,
        r = n ? Symbol.for('react.element') : 60103,
        a = n ? Symbol.for('react.portal') : 60106,
        o = n ? Symbol.for('react.fragment') : 60107,
        i = n ? Symbol.for('react.strict_mode') : 60108,
        l = n ? Symbol.for('react.profiler') : 60114,
        s = n ? Symbol.for('react.provider') : 60109,
        u = n ? Symbol.for('react.context') : 60110,
        c = n ? Symbol.for('react.async_mode') : 60111,
        d = n ? Symbol.for('react.concurrent_mode') : 60111,
        f = n ? Symbol.for('react.forward_ref') : 60112,
        p = n ? Symbol.for('react.suspense') : 60113,
        m = n ? Symbol.for('react.suspense_list') : 60120,
        h = n ? Symbol.for('react.memo') : 60115,
        g = n ? Symbol.for('react.lazy') : 60116,
        y = n ? Symbol.for('react.block') : 60121,
        b = n ? Symbol.for('react.fundamental') : 60117,
        v = n ? Symbol.for('react.responder') : 60118,
        w = n ? Symbol.for('react.scope') : 60119;
      function k(e) {
        if ('object' == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case o:
                case l:
                case i:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case g:
                    case h:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function S(e) {
        return k(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = s),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = o),
        (t.Lazy = g),
        (t.Memo = h),
        (t.Portal = a),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return S(e) || k(e) === c;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return k(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === s;
        }),
        (t.isElement = function (e) {
          return 'object' == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === f;
        }),
        (t.isFragment = function (e) {
          return k(e) === o;
        }),
        (t.isLazy = function (e) {
          return k(e) === g;
        }),
        (t.isMemo = function (e) {
          return k(e) === h;
        }),
        (t.isPortal = function (e) {
          return k(e) === a;
        }),
        (t.isProfiler = function (e) {
          return k(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === i;
        }),
        (t.isSuspense = function (e) {
          return k(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            'string' == typeof e ||
            'function' == typeof e ||
            e === o ||
            e === d ||
            e === l ||
            e === i ||
            e === p ||
            e === m ||
            ('object' == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === h ||
                e.$$typeof === s ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === b ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === y))
          );
        }),
        (t.typeOf = k);
    },
    8325: (e, t, n) => {
      'use strict';
      !(function e() {
        if (
          'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(5473));
    },
    8460: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => c });
      var r = n(3696),
        a = n(1750),
        o = n(5200),
        i = n(4996);
      const l = {
        themedComponent: 'themedComponent_siVc',
        'themedComponent--light': 'themedComponent--light_hHel',
        'themedComponent--dark': 'themedComponent--dark_yETr',
      };
      var s = n(2540);
      function u(e) {
        let { className: t, children: n } = e;
        const u = (0, o.A)(),
          { colorMode: c } = (0, i.G)();
        return (0, s.jsx)(s.Fragment, {
          children: (u ? ('dark' === c ? ['dark'] : ['light']) : ['light', 'dark']).map((e) => {
            const o = n({ theme: e, className: (0, a.A)(t, l.themedComponent, l[`themedComponent--${e}`]) });
            return (0, s.jsx)(r.Fragment, { children: o }, e);
          }),
        });
      }
      function c(e) {
        const { sources: t, className: n, alt: r, ...a } = e;
        return (0, s.jsx)(u, {
          className: n,
          children: (e) => {
            let { theme: n, className: o } = e;
            return (0, s.jsx)('img', { src: t[n], alt: r, className: o, ...a });
          },
        });
      }
    },
    8486: (e, t, n) => {
      'use strict';
      var r = n(4271),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
        i = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
        l = {};
      function s(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
        (l[r.Memo] = i);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' != typeof n) {
          if (m) {
            var a = p(n);
            a && a !== m && e(t, a, r);
          }
          var i = c(n);
          d && (i = i.concat(d(n)));
          for (var l = s(t), h = s(n), g = 0; g < i.length; ++g) {
            var y = i[g];
            if (!(o[y] || (r && r[y]) || (h && h[y]) || (l && l[y]))) {
              var b = f(n, y);
              try {
                u(t, y, b);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    8678: (e, t, n) => {
      'use strict';
      n.d(t, { Nr: () => f, w8: () => h, B5: () => x, Vd: () => w, QB: () => S, fW: () => k, OF: () => v, Y: () => y });
      var r = n(3696),
        a = n(9519),
        o = n(3971),
        i = n(9294),
        l = n(4422);
      function s(e) {
        return Array.from(new Set(e));
      }
      var u = n(1599),
        c = n(6658),
        d = n(3250);
      function f(e) {
        return 'link' !== e.type || e.unlisted
          ? 'category' === e.type
            ? (function (e) {
                if (e.href && !e.linkUnlisted) return e.href;
                for (const t of e.items) {
                  const e = f(t);
                  if (e) return e;
                }
              })(e)
            : void 0
          : e.href;
      }
      const p = (e, t) => void 0 !== e && (0, l.ys)(e, t),
        m = (e, t) => e.some((e) => h(e, t));
      function h(e, t) {
        return 'link' === e.type ? p(e.href, t) : 'category' === e.type && (p(e.href, t) || m(e.items, t));
      }
      function g(e, t) {
        switch (e.type) {
          case 'category':
            return h(e, t) || (void 0 !== e.href && !e.linkUnlisted) || e.items.some((e) => g(e, t));
          case 'link':
            return !e.unlisted || h(e, t);
          default:
            return !0;
        }
      }
      function y(e, t) {
        return (0, r.useMemo)(() => e.filter((e) => g(e, t)), [e, t]);
      }
      function b(e) {
        let { sidebarItems: t, pathname: n, onlyCategories: r = !1 } = e;
        const a = [];
        return (
          (function e(t) {
            for (const o of t)
              if (
                ('category' === o.type && ((0, l.ys)(o.href, n) || e(o.items))) ||
                ('link' === o.type && (0, l.ys)(o.href, n))
              ) {
                return (r && 'category' !== o.type) || a.unshift(o), !0;
              }
            return !1;
          })(t),
          a
        );
      }
      function v() {
        const e = (0, d.t)(),
          { pathname: t } = (0, a.zy)(),
          n = (0, i.vT)()?.pluginData.breadcrumbs;
        return !1 !== n && e ? b({ sidebarItems: e.items, pathname: t }) : null;
      }
      function w(e) {
        const { activeVersion: t } = (0, i.zK)(e),
          { preferredVersion: n } = (0, u.g1)(e),
          a = (0, i.r7)(e);
        return (0, r.useMemo)(() => s([t, n, a].filter(Boolean)), [t, n, a]);
      }
      function k(e, t) {
        const n = w(t);
        return (0, r.useMemo)(() => {
          const t = n.flatMap((e) => (e.sidebars ? Object.entries(e.sidebars) : [])),
            r = t.find((t) => t[0] === e);
          if (!r)
            throw new Error(
              `Can't find any sidebar with id "${e}" in version${n.length > 1 ? 's' : ''} ${n
                .map((e) => e.name)
                .join(', ')}".\nAvailable sidebar ids are:\n- ${t.map((e) => e[0]).join('\n- ')}`
            );
          return r[1];
        }, [e, n]);
      }
      function S(e, t) {
        const n = w(t);
        return (0, r.useMemo)(() => {
          const t = n.flatMap((e) => e.docs),
            r = t.find((t) => t.id === e);
          if (!r) {
            if (n.flatMap((e) => e.draftIds).includes(e)) return null;
            throw new Error(
              `Couldn't find any doc with id "${e}" in version${n.length > 1 ? 's' : ''} "${n
                .map((e) => e.name)
                .join(', ')}".\nAvailable doc ids are:\n- ${s(t.map((e) => e.id)).join('\n- ')}`
            );
          }
          return r;
        }, [e, n]);
      }
      function x(e) {
        let { route: t } = e;
        const n = (0, a.zy)(),
          r = (0, c.r)(),
          i = t.routes,
          l = i.find((e) => (0, a.B6)(n.pathname, e));
        if (!l) return null;
        const s = l.sidebar,
          u = s ? r.docsSidebars[s] : void 0;
        return { docElement: (0, o.v)(i), sidebarName: s, sidebarItems: u };
      }
    },
    8802: (e, t, n) => {
      var r = n(9134);
      (e.exports = m),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return s(o(e, t), t);
        }),
        (e.exports.tokensToFunction = s),
        (e.exports.tokensToRegExp = p);
      var a = new RegExp(
        [
          '(\\\\.)',
          '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))',
        ].join('|'),
        'g'
      );
      function o(e, t) {
        for (var n, r = [], o = 0, l = 0, s = '', u = (t && t.delimiter) || '/'; null != (n = a.exec(e)); ) {
          var d = n[0],
            f = n[1],
            p = n.index;
          if (((s += e.slice(l, p)), (l = p + d.length), f)) s += f[1];
          else {
            var m = e[l],
              h = n[2],
              g = n[3],
              y = n[4],
              b = n[5],
              v = n[6],
              w = n[7];
            s && (r.push(s), (s = ''));
            var k = null != h && null != m && m !== h,
              S = '+' === v || '*' === v,
              x = '?' === v || '*' === v,
              E = h || u,
              _ = y || b,
              C = h || ('string' == typeof r[r.length - 1] ? r[r.length - 1] : '');
            r.push({
              name: g || o++,
              prefix: h || '',
              delimiter: E,
              optional: x,
              repeat: S,
              partial: k,
              asterisk: !!w,
              pattern: _ ? c(_) : w ? '.*' : i(E, C),
            });
          }
        }
        return l < e.length && (s += e.substr(l)), s && r.push(s), r;
      }
      function i(e, t) {
        return !t || t.indexOf(e) > -1 ? '[^' + u(e) + ']+?' : u(t) + '|(?:(?!' + u(t) + ')[^' + u(e) + '])+?';
      }
      function l(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return '%' + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          'object' == typeof e[a] && (n[a] = new RegExp('^(?:' + e[a].pattern + ')$', f(t)));
        return function (t, a) {
          for (var o = '', i = t || {}, s = (a || {}).pretty ? l : encodeURIComponent, u = 0; u < e.length; u++) {
            var c = e[u];
            if ('string' != typeof c) {
              var d,
                f = i[c.name];
              if (null == f) {
                if (c.optional) {
                  c.partial && (o += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(f)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(f) + '`'
                  );
                if (0 === f.length) {
                  if (c.optional) continue;
                  throw new TypeError('Expected "' + c.name + '" to not be empty');
                }
                for (var p = 0; p < f.length; p++) {
                  if (((d = s(f[p])), !n[u].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        '`'
                    );
                  o += (0 === p ? c.prefix : c.delimiter) + d;
                }
              } else {
                if (
                  ((d = c.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : s(f)),
                  !n[u].test(d))
                )
                  throw new TypeError(
                    'Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + d + '"'
                  );
                o += c.prefix + d;
              }
            } else o += c;
          }
          return o;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
      }
      function c(e) {
        return e.replace(/([=!:$\/()])/g, '\\$1');
      }
      function d(e, t) {
        return (e.keys = t), e;
      }
      function f(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function p(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (var a = (n = n || {}).strict, o = !1 !== n.end, i = '', l = 0; l < e.length; l++) {
          var s = e[l];
          if ('string' == typeof s) i += u(s);
          else {
            var c = u(s.prefix),
              p = '(?:' + s.pattern + ')';
            t.push(s),
              s.repeat && (p += '(?:' + c + p + ')*'),
              (i += p =
                s.optional ? (s.partial ? c + '(' + p + ')?' : '(?:' + c + '(' + p + '))?') : c + '(' + p + ')');
          }
        }
        var m = u(n.delimiter || '/'),
          h = i.slice(-m.length) === m;
        return (
          a || (i = (h ? i.slice(0, -m.length) : i) + '(?:' + m + '(?=$))?'),
          (i += o ? '$' : a && h ? '' : '(?=' + m + '|$)'),
          d(new RegExp('^' + i, f(n)), t)
        );
      }
      function m(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return d(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++) r.push(m(e[a], t, n).source);
                return d(new RegExp('(?:' + r.join('|') + ')', f(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return p(o(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    9005: (e, t, n) => {
      'use strict';
      n.d(t, { mg: () => J, vd: () => G });
      var r = n(3696),
        a = n(2688),
        o = n.n(a),
        i = n(7383),
        l = n.n(i),
        s = n(2091),
        u = n.n(s),
        c = n(5317),
        d = n.n(c);
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          f.apply(this, arguments)
        );
      }
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), m(e, t);
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) t.indexOf((n = o[r])) >= 0 || (a[n] = e[n]);
        return a;
      }
      var g = {
          BASE: 'base',
          BODY: 'body',
          HEAD: 'head',
          HTML: 'html',
          LINK: 'link',
          META: 'meta',
          NOSCRIPT: 'noscript',
          SCRIPT: 'script',
          STYLE: 'style',
          TITLE: 'title',
          FRAGMENT: 'Symbol(react.fragment)',
        },
        y = { rel: ['amphtml', 'canonical', 'alternate'] },
        b = { type: ['application/ld+json'] },
        v = {
          charset: '',
          name: ['robots', 'description'],
          property: [
            'og:type',
            'og:title',
            'og:url',
            'og:image',
            'og:image:alt',
            'og:description',
            'twitter:url',
            'twitter:title',
            'twitter:description',
            'twitter:image',
            'twitter:image:alt',
            'twitter:card',
            'twitter:site',
          ],
        },
        w = Object.keys(g).map(function (e) {
          return g[e];
        }),
        k = {
          accesskey: 'accessKey',
          charset: 'charSet',
          class: 'className',
          contenteditable: 'contentEditable',
          contextmenu: 'contextMenu',
          'http-equiv': 'httpEquiv',
          itemprop: 'itemProp',
          tabindex: 'tabIndex',
        },
        S = Object.keys(k).reduce(function (e, t) {
          return (e[k[t]] = t), e;
        }, {}),
        x = function (e, t) {
          for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        E = function (e) {
          var t = x(e, g.TITLE),
            n = x(e, 'titleTemplate');
          if ((Array.isArray(t) && (t = t.join('')), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          var r = x(e, 'defaultTitle');
          return t || r || void 0;
        },
        _ = function (e) {
          return x(e, 'onChangeClientState') || function () {};
        },
        C = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return f({}, e, t);
            }, {});
        },
        A = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[g.BASE];
            })
            .map(function (e) {
              return e[g.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a += 1) {
                  var o = r[a].toLowerCase();
                  if (-1 !== e.indexOf(o) && n[o]) return t.concat(n);
                }
              return t;
            }, []);
        },
        T = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  'function' == typeof console.warn &&
                  console.warn('Helmet: ' + e + ' should be of type "Array". Instead found type "' + typeof t[e] + '"'),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (var n, o = Object.keys(e), i = 0; i < o.length; i += 1) {
                  var l = o[i],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    ('rel' === n && 'canonical' === e[n].toLowerCase()) ||
                    ('rel' === s && 'stylesheet' === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) || ('innerHTML' !== l && 'cssText' !== l && 'itemprop' !== l) || (n = l);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return r[n] || (r[n] = {}), a[n] || (a[n] = {}), !r[n][u] && ((a[n][u] = !0), !0);
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var o = Object.keys(a), i = 0; i < o.length; i += 1) {
                var l = o[i],
                  s = f({}, r[l], a[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        j = function (e, t) {
          if (Array.isArray(e) && e.length) for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          return !1;
        },
        P = function (e) {
          return Array.isArray(e) ? e.join('') : e;
        },
        N = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    (function (e, t) {
                      for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.priority.push(n)
                      : e.default.push(n),
                    e
                  );
                },
                { priority: [], default: [] }
              )
            : { default: e };
        },
        O = function (e, t) {
          var n;
          return f({}, e, (((n = {})[t] = void 0), n));
        },
        L = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
        R = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/>/g, '&gt;')
                  .replace(/"/g, '&quot;')
                  .replace(/'/g, '&#x27;')
          );
        },
        D = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : '' + n;
            return t ? t + ' ' + r : r;
          }, '');
        },
        F = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[k[n] || n] = e[n]), t;
            }, t)
          );
        },
        I = function (e, t) {
          return t.map(function (t, n) {
            var a,
              o = (((a = { key: n })['data-rh'] = !0), a);
            return (
              Object.keys(t).forEach(function (e) {
                var n = k[e] || e;
                'innerHTML' === n || 'cssText' === n
                  ? (o.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText })
                  : (o[n] = t[e]);
              }),
              r.createElement(e, o)
            );
          });
        },
        M = function (e, t, n) {
          switch (e) {
            case g.TITLE:
              return {
                toComponent: function () {
                  return (
                    (n = t.titleAttributes),
                    ((a = { key: (e = t.title) })['data-rh'] = !0),
                    (o = F(n, a)),
                    [r.createElement(g.TITLE, o, e)]
                  );
                  var e, n, a, o;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = D(n),
                      o = P(t);
                    return a
                      ? '<' + e + ' data-rh="true" ' + a + '>' + R(o, r) + '</' + e + '>'
                      : '<' + e + ' data-rh="true">' + R(o, r) + '</' + e + '>';
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case 'bodyAttributes':
            case 'htmlAttributes':
              return {
                toComponent: function () {
                  return F(t);
                },
                toString: function () {
                  return D(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return I(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !('innerHTML' === e || 'cssText' === e);
                          })
                          .reduce(function (e, t) {
                            var a = void 0 === r[t] ? t : t + '="' + R(r[t], n) + '"';
                            return e ? e + ' ' + a : a;
                          }, ''),
                        o = r.innerHTML || r.cssText || '',
                        i = -1 === L.indexOf(e);
                      return t + '<' + e + ' data-rh="true" ' + a + (i ? '/>' : '>' + o + '</' + e + '>');
                    }, '');
                  })(e, t, n);
                },
              };
          }
        },
        z = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            o = e.noscriptTags,
            i = e.styleTags,
            l = e.title,
            s = void 0 === l ? '' : l,
            u = e.titleAttributes,
            c = e.linkTags,
            d = e.metaTags,
            f = e.scriptTags,
            p = {
              toComponent: function () {},
              toString: function () {
                return '';
              },
            };
          if (e.prioritizeSeoTags) {
            var m = (function (e) {
              var t = e.linkTags,
                n = e.scriptTags,
                r = e.encode,
                a = N(e.metaTags, v),
                o = N(t, y),
                i = N(n, b);
              return {
                priorityMethods: {
                  toComponent: function () {
                    return [].concat(I(g.META, a.priority), I(g.LINK, o.priority), I(g.SCRIPT, i.priority));
                  },
                  toString: function () {
                    return M(g.META, a.priority, r) + ' ' + M(g.LINK, o.priority, r) + ' ' + M(g.SCRIPT, i.priority, r);
                  },
                },
                metaTags: a.default,
                linkTags: o.default,
                scriptTags: i.default,
              };
            })(e);
            (p = m.priorityMethods), (c = m.linkTags), (d = m.metaTags), (f = m.scriptTags);
          }
          return {
            priority: p,
            base: M(g.BASE, t, r),
            bodyAttributes: M('bodyAttributes', n, r),
            htmlAttributes: M('htmlAttributes', a, r),
            link: M(g.LINK, c, r),
            meta: M(g.META, d, r),
            noscript: M(g.NOSCRIPT, o, r),
            script: M(g.SCRIPT, f, r),
            style: M(g.STYLE, i, r),
            title: M(g.TITLE, { title: s, titleAttributes: u }, r),
          };
        },
        B = [],
        $ = function (e, t) {
          var n = this;
          void 0 === t && (t = 'undefined' != typeof document),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? B : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? B : n.instances).push(e);
                },
                remove: function (e) {
                  var t = (n.canUseDOM ? B : n.instances).indexOf(e);
                  (n.canUseDOM ? B : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = z({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: '',
                titleAttributes: {},
              }));
        },
        U = r.createContext({}),
        q = o().shape({
          setHelmet: o().func,
          helmetInstances: o().shape({ get: o().func, add: o().func, remove: o().func }),
        }),
        H = 'undefined' != typeof document,
        G = (function (e) {
          function t(n) {
            var r;
            return ((r = e.call(this, n) || this).helmetData = new $(r.props.context, t.canUseDOM)), r;
          }
          return (
            p(t, e),
            (t.prototype.render = function () {
              return r.createElement(U.Provider, { value: this.helmetData.value }, this.props.children);
            }),
            t
          );
        })(r.Component);
      (G.canUseDOM = H),
        (G.propTypes = { context: o().shape({ helmet: o().shape() }), children: o().node.isRequired }),
        (G.defaultProps = { context: {} }),
        (G.displayName = 'HelmetProvider');
      var V = function (e, t) {
          var n,
            r = document.head || document.querySelector(g.HEAD),
            a = r.querySelectorAll(e + '[data-rh]'),
            o = [].slice.call(a),
            i = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) &&
                    ('innerHTML' === a
                      ? (r.innerHTML = t.innerHTML)
                      : 'cssText' === a
                      ? r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText))
                      : r.setAttribute(a, void 0 === t[a] ? '' : t[a]));
                r.setAttribute('data-rh', 'true'),
                  o.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? o.splice(n, 1)
                    : i.push(r);
              }),
            o.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: o, newTags: i }
          );
        },
        W = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute('data-rh'), a = r ? r.split(',') : [], o = [].concat(a), i = Object.keys(t), l = 0;
              l < i.length;
              l += 1
            ) {
              var s = i[l],
                u = t[s] || '';
              n.getAttribute(s) !== u && n.setAttribute(s, u), -1 === a.indexOf(s) && a.push(s);
              var c = o.indexOf(s);
              -1 !== c && o.splice(c, 1);
            }
            for (var d = o.length - 1; d >= 0; d -= 1) n.removeAttribute(o[d]);
            a.length === o.length
              ? n.removeAttribute('data-rh')
              : n.getAttribute('data-rh') !== i.join(',') && n.setAttribute('data-rh', i.join(','));
          }
        },
        Q = function (e, t) {
          var n = e.baseTag,
            r = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            i = e.noscriptTags,
            l = e.onChangeClientState,
            s = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            d = e.titleAttributes;
          W(g.BODY, e.bodyAttributes),
            W(g.HTML, r),
            (function (e, t) {
              void 0 !== e && document.title !== e && (document.title = P(e)), W(g.TITLE, t);
            })(c, d);
          var f = {
              baseTag: V(g.BASE, n),
              linkTags: V(g.LINK, a),
              metaTags: V(g.META, o),
              noscriptTags: V(g.NOSCRIPT, i),
              scriptTags: V(g.SCRIPT, s),
              styleTags: V(g.STYLE, u),
            },
            p = {},
            m = {};
          Object.keys(f).forEach(function (e) {
            var t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (m[e] = f[e].oldTags);
          }),
            t && t(),
            l(e, p, m);
        },
        K = null,
        Y = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t;
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !d()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this), this.emitChange();
            }),
            (n.emitChange = function () {
              var e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                a = null,
                o =
                  ((e = n.helmetInstances.get().map(function (e) {
                    var t = f({}, e.props);
                    return delete t.context, t;
                  })),
                  {
                    baseTag: A(['href'], e),
                    bodyAttributes: C('bodyAttributes', e),
                    defer: x(e, 'defer'),
                    encode: x(e, 'encodeSpecialCharacters'),
                    htmlAttributes: C('htmlAttributes', e),
                    linkTags: T(g.LINK, ['rel', 'href'], e),
                    metaTags: T(g.META, ['name', 'charset', 'http-equiv', 'property', 'itemprop'], e),
                    noscriptTags: T(g.NOSCRIPT, ['innerHTML'], e),
                    onChangeClientState: _(e),
                    scriptTags: T(g.SCRIPT, ['src', 'innerHTML'], e),
                    styleTags: T(g.STYLE, ['cssText'], e),
                    title: E(e),
                    titleAttributes: C('titleAttributes', e),
                    prioritizeSeoTags: j(e, 'prioritizeSeoTags'),
                  });
              G.canUseDOM
                ? ((t = o),
                  K && cancelAnimationFrame(K),
                  t.defer
                    ? (K = requestAnimationFrame(function () {
                        Q(t, function () {
                          K = null;
                        });
                      }))
                    : (Q(t), (K = null)))
                : z && (a = z(o)),
                r(a);
            }),
            (n.init = function () {
              this.rendered || ((this.rendered = !0), this.props.context.helmetInstances.add(this), this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(r.Component);
      (Y.propTypes = { context: q.isRequired }), (Y.displayName = 'HelmetDispatcher');
      var X = ['children'],
        Z = ['children'],
        J = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !l()(O(this.props, 'helmetData'), O(e, 'helmetData'));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case g.SCRIPT:
                case g.NOSCRIPT:
                  return { innerHTML: t };
                case g.STYLE:
                  return { cssText: t };
                default:
                  throw new Error(
                    '<' +
                      e.type +
                      ' /> elements are self-closing and can not contain children. Refer to our API for more information.'
                  );
              }
            }),
            (n.flattenArrayTypeChildren = function (e) {
              var t,
                n = e.child,
                r = e.arrayTypeChildren;
              return f(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  f({}, e.newChildProps, this.mapNestedChildrenToProps(n, e.nestedChildren)),
                ])),
                t)
              );
            }),
            (n.mapObjectTypeChildren = function (e) {
              var t,
                n,
                r = e.child,
                a = e.newProps,
                o = e.newChildProps,
                i = e.nestedChildren;
              switch (r.type) {
                case g.TITLE:
                  return f({}, a, (((t = {})[r.type] = i), (t.titleAttributes = f({}, o)), t));
                case g.BODY:
                  return f({}, a, { bodyAttributes: f({}, o) });
                case g.HTML:
                  return f({}, a, { htmlAttributes: f({}, o) });
                default:
                  return f({}, a, (((n = {})[r.type] = f({}, o)), n));
              }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
              var n = f({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  var r;
                  n = f({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
              return (
                u()(
                  w.some(function (t) {
                    return e.type === t;
                  }),
                  'function' == typeof e.type
                    ? 'You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.'
                    : 'Only elements types ' +
                        w.join(', ') +
                        ' are allowed. Helmet does not support rendering <' +
                        e.type +
                        '> elements. Refer to our API for more information.'
                ),
                u()(
                  !t ||
                    'string' == typeof t ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return 'string' != typeof e;
                      })),
                  'Helmet expects a string as a child of <' +
                    e.type +
                    '>. Did you forget to wrap your children in braces? ( <' +
                    e.type +
                    '>{``}</' +
                    e.type +
                    '> ) Refer to our API for more information.'
                ),
                !0
              );
            }),
            (n.mapChildrenToProps = function (e, t) {
              var n = this,
                a = {};
              return (
                r.Children.forEach(e, function (e) {
                  if (e && e.props) {
                    var r = e.props,
                      o = r.children,
                      i = h(r, X),
                      l = Object.keys(i).reduce(function (e, t) {
                        return (e[S[t] || t] = i[t]), e;
                      }, {}),
                      s = e.type;
                    switch (('symbol' == typeof s ? (s = s.toString()) : n.warnOnInvalidChildren(e, o), s)) {
                      case g.FRAGMENT:
                        t = n.mapChildrenToProps(o, t);
                        break;
                      case g.LINK:
                      case g.META:
                      case g.NOSCRIPT:
                      case g.SCRIPT:
                      case g.STYLE:
                        a = n.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: a,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                        break;
                      default:
                        t = n.mapObjectTypeChildren({ child: e, newProps: t, newChildProps: l, nestedChildren: o });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(a, t)
              );
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = h(e, Z),
                a = f({}, n),
                o = n.helmetData;
              return (
                t && (a = this.mapChildrenToProps(t, a)),
                !o || o instanceof $ || (o = new $(o.context, o.instances)),
                o
                  ? r.createElement(Y, f({}, a, { context: o.value, helmetData: void 0 }))
                  : r.createElement(U.Consumer, null, function (e) {
                      return r.createElement(Y, f({}, a, { context: e }));
                    })
              );
            }),
            t
          );
        })(r.Component);
      (J.propTypes = {
        base: o().object,
        bodyAttributes: o().object,
        children: o().oneOfType([o().arrayOf(o().node), o().node]),
        defaultTitle: o().string,
        defer: o().bool,
        encodeSpecialCharacters: o().bool,
        htmlAttributes: o().object,
        link: o().arrayOf(o().object),
        meta: o().arrayOf(o().object),
        noscript: o().arrayOf(o().object),
        onChangeClientState: o().func,
        script: o().arrayOf(o().object),
        style: o().arrayOf(o().object),
        title: o().string,
        titleAttributes: o().object,
        titleTemplate: o().string,
        prioritizeSeoTags: o().bool,
        helmetData: o().object,
      }),
        (J.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }),
        (J.displayName = 'Helmet');
    },
    9006: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => a });
      const r = 'undefined' != typeof window && 'document' in window && 'createElement' in window.document,
        a = {
          canUseDOM: r,
          canUseEventListeners: r && ('addEventListener' in window || 'attachEvent' in window),
          canUseIntersectionObserver: r && 'IntersectionObserver' in window,
          canUseViewport: r && 'screen' in window,
        };
    },
    9134: (e) => {
      e.exports =
        Array.isArray ||
        function (e) {
          return '[object Array]' == Object.prototype.toString.call(e);
        };
    },
    9257: (e, t, n) => {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
      n.d(t, { A: () => r });
    },
    9294: (e, t, n) => {
      'use strict';
      n.d(t, { zK: () => h, vT: () => f, Gy: () => c, HW: () => g, ht: () => d, r7: () => m, jh: () => p });
      var r = n(9519),
        a = n(4669),
        o = n(2524);
      function i(e, t) {
        void 0 === t && (t = {});
        const n = (function () {
          const { globalData: e } = (0, a.A)();
          return e;
        })()[e];
        if (!n && t.failfast) throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);
        return n;
      }
      const l = (e) => e.versions.find((e) => e.isLast);
      function s(e, t) {
        const n = (function (e, t) {
            return [...e.versions]
              .sort((e, t) => (e.path === t.path ? 0 : e.path.includes(t.path) ? -1 : t.path.includes(e.path) ? 1 : 0))
              .find((e) => !!(0, r.B6)(t, { path: e.path, exact: !1, strict: !1 }));
          })(e, t),
          a = n?.docs.find((e) => !!(0, r.B6)(t, { path: e.path, exact: !0, strict: !1 }));
        return {
          activeVersion: n,
          activeDoc: a,
          alternateDocVersions: a
            ? (function (t) {
                const n = {};
                return (
                  e.versions.forEach((e) => {
                    e.docs.forEach((r) => {
                      r.id === t && (n[e.name] = r);
                    });
                  }),
                  n
                );
              })(a.id)
            : {},
        };
      }
      const u = {},
        c = () => i('docusaurus-plugin-content-docs') ?? u,
        d = (e) => {
          try {
            return (function (e, t, n) {
              void 0 === t && (t = o.W), void 0 === n && (n = {});
              const r = i(e),
                a = r?.[t];
              if (!a && n.failfast)
                throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);
              return a;
            })('docusaurus-plugin-content-docs', e, { failfast: !0 });
          } catch (t) {
            throw new Error(
              'You are using a feature of the Docusaurus docs plugin, but this plugin does not seem to be enabled' +
                ('Default' === e ? '' : ` (pluginId=${e}`),
              { cause: t }
            );
          }
        };
      function f(e) {
        void 0 === e && (e = {});
        const t = c(),
          { pathname: n } = (0, r.zy)();
        return (function (e, t, n) {
          void 0 === n && (n = {});
          const a = Object.entries(e)
              .sort((e, t) => t[1].path.localeCompare(e[1].path))
              .find((e) => {
                let [, n] = e;
                return !!(0, r.B6)(t, { path: n.path, exact: !1, strict: !1 });
              }),
            o = a ? { pluginId: a[0], pluginData: a[1] } : void 0;
          if (!o && n.failfast)
            throw new Error(
              `Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(
                e
              )
                .map((e) => e.path)
                .join(', ')}`
            );
          return o;
        })(t, n, e);
      }
      function p(e) {
        return d(e).versions;
      }
      function m(e) {
        const t = d(e);
        return l(t);
      }
      function h(e) {
        const t = d(e),
          { pathname: n } = (0, r.zy)();
        return s(t, n);
      }
      function g(e) {
        const t = d(e),
          { pathname: n } = (0, r.zy)();
        return (function (e, t) {
          const n = l(e);
          return { latestDocSuggestion: s(e, t).alternateDocVersions[n.name], latestVersionSuggestion: n };
        })(t, n);
      }
    },
    9517: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => r });
      const r = () => null;
    },
    9519: (e, t, n) => {
      'use strict';
      n.d(t, { B6: () => x, Ix: () => v, W6: () => O, XZ: () => b, dO: () => P, qh: () => E, zy: () => L });
      var r = n(1146),
        a = n(3696),
        o = n(2688),
        i = n.n(o),
        l = n(6941),
        s = n(6143),
        u = n(8102),
        c = n(8802),
        d = n.n(c),
        f = (n(4271), n(9257)),
        p = (n(8486), 1073741823),
        m =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : {};
      var h =
          a.createContext ||
          function (e, t) {
            var n,
              o,
              l =
                '__create-react-context-' +
                (function () {
                  var e = '__global_unique_id__';
                  return (m[e] = (m[e] || 0) + 1);
                })() +
                '__',
              s = (function (e) {
                function n() {
                  for (var t, n, r, a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                  return (
                    ((t = e.call.apply(e, [this].concat(o)) || this).emitter =
                      ((n = t.props.value),
                      (r = []),
                      {
                        on: function (e) {
                          r.push(e);
                        },
                        off: function (e) {
                          r = r.filter(function (t) {
                            return t !== e;
                          });
                        },
                        get: function () {
                          return n;
                        },
                        set: function (e, t) {
                          (n = e),
                            r.forEach(function (e) {
                              return e(n, t);
                            });
                        },
                      })),
                    t
                  );
                }
                (0, r.A)(n, e);
                var a = n.prototype;
                return (
                  (a.getChildContext = function () {
                    var e;
                    return ((e = {})[l] = this.emitter), e;
                  }),
                  (a.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      ((o = r) === (i = a) ? 0 !== o || 1 / o == 1 / i : o != o && i != i)
                        ? (n = 0)
                        : ((n = 'function' == typeof t ? t(r, a) : p), 0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var o, i;
                  }),
                  (a.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(a.Component);
            s.childContextTypes = (((n = {})[l] = i().object.isRequired), n);
            var u = (function (t) {
              function n() {
                for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                return (
                  ((e = t.call.apply(t, [this].concat(r)) || this).observedBits = void 0),
                  (e.state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    (0 | e.observedBits) & n && e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.A)(n, t);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? p : t;
                }),
                (a.componentDidMount = function () {
                  this.context[l] && this.context[l].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? p : e;
                }),
                (a.componentWillUnmount = function () {
                  this.context[l] && this.context[l].off(this.onUpdate);
                }),
                (a.getValue = function () {
                  return this.context[l] ? this.context[l].get() : e;
                }),
                (a.render = function () {
                  return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(a.Component);
            return (u.contextTypes = (((o = {})[l] = i().object), o)), { Provider: s, Consumer: u };
          },
        g = function (e) {
          var t = h();
          return (t.displayName = e), t;
        },
        y = g('Router-History'),
        b = g('Router'),
        v = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = { location: t.history.location }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._pendingLocation = e;
                })),
              n
            );
          }
          (0, r.A)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: '/', url: '/', params: {}, isExact: '/' === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (t) {
                    e._isMounted && e.setState({ location: t });
                  })),
                this._pendingLocation && this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && (this.unlisten(), (this._isMounted = !1), (this._pendingLocation = null));
            }),
            (n.render = function () {
              return a.createElement(
                b.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.createElement(y.Provider, { children: this.props.children || null, value: this.props.history })
              );
            }),
            t
          );
        })(a.Component);
      a.Component;
      a.Component;
      var w = {},
        k = 1e4,
        S = 0;
      function x(e, t) {
        void 0 === t && (t = {}), ('string' == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          a = n.exact,
          o = void 0 !== a && a,
          i = n.strict,
          l = void 0 !== i && i,
          s = n.sensitive,
          u = void 0 !== s && s;
        return [].concat(r).reduce(function (t, n) {
          if (!n && '' !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = '' + t.end + t.strict + t.sensitive,
                r = w[n] || (w[n] = {});
              if (r[e]) return r[e];
              var a = [],
                o = { regexp: d()(e, a, t), keys: a };
              return S < k && ((r[e] = o), S++), o;
            })(n, { end: o, strict: l, sensitive: u }),
            a = r.regexp,
            i = r.keys,
            s = a.exec(e);
          if (!s) return null;
          var c = s[0],
            f = s.slice(1),
            p = e === c;
          return o && !p
            ? null
            : {
                path: n,
                url: '/' === n && '' === c ? '/' : c,
                isExact: p,
                params: i.reduce(function (e, t, n) {
                  return (e[t.name] = f[n]), e;
                }, {}),
              };
        }, null);
      }
      var E = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.A)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(b.Consumer, null, function (t) {
              t || (0, s.A)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch ? e.props.computedMatch : e.props.path ? x(n.pathname, e.props) : t.match,
                o = (0, u.A)({}, t, { location: n, match: r }),
                i = e.props,
                l = i.children,
                c = i.component,
                d = i.render;
              return (
                Array.isArray(l) &&
                  (function (e) {
                    return 0 === a.Children.count(e);
                  })(l) &&
                  (l = null),
                a.createElement(
                  b.Provider,
                  { value: o },
                  o.match
                    ? l
                      ? 'function' == typeof l
                        ? l(o)
                        : l
                      : c
                      ? a.createElement(c, o)
                      : d
                      ? d(o)
                      : null
                    : 'function' == typeof l
                    ? l(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(a.Component);
      function _(e) {
        return '/' === e.charAt(0) ? e : '/' + e;
      }
      function C(e, t) {
        if (!e) return t;
        var n = _(e);
        return 0 !== t.pathname.indexOf(n) ? t : (0, u.A)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function A(e) {
        return 'string' == typeof e ? e : (0, l.AO)(e);
      }
      function T(e) {
        return function () {
          (0, s.A)(!1);
        };
      }
      function j() {}
      a.Component;
      var P = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.A)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(b.Consumer, null, function (t) {
              t || (0, s.A)(!1);
              var n,
                r,
                o = e.props.location || t.location;
              return (
                a.Children.forEach(e.props.children, function (e) {
                  if (null == r && a.isValidElement(e)) {
                    n = e;
                    var i = e.props.path || e.props.from;
                    r = i ? x(o.pathname, (0, u.A)({}, e.props, { path: i })) : t.match;
                  }
                }),
                r ? a.cloneElement(n, { location: o, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(a.Component);
      var N = a.useContext;
      function O() {
        return N(y);
      }
      function L() {
        return N(b).location;
      }
    },
    9695: (e, t, n) => {
      'use strict';
      n.d(t, { N: () => y, u: () => u });
      var r = n(3696),
        a = n(5200),
        o = n(3604),
        i = n(2620),
        l = n(2540);
      const s = 'ease-in-out';
      function u(e) {
        let { initialState: t } = e;
        const [n, a] = (0, r.useState)(t ?? !1),
          o = (0, r.useCallback)(() => {
            a((e) => !e);
          }, []);
        return { collapsed: n, setCollapsed: a, toggleCollapsed: o };
      }
      const c = { display: 'none', overflow: 'hidden', height: '0px' },
        d = { display: 'block', overflow: 'visible', height: 'auto' };
      function f(e, t) {
        const n = t ? c : d;
        (e.style.display = n.display), (e.style.overflow = n.overflow), (e.style.height = n.height);
      }
      function p(e) {
        let { collapsibleRef: t, collapsed: n, animation: a } = e;
        const o = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          const e = t.current;
          function r() {
            const t = e.scrollHeight,
              n =
                a?.duration ??
                (function (e) {
                  if ((0, i.O)()) return 1;
                  const t = e / 36;
                  return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
                })(t);
            return { transition: `height ${n}ms ${a?.easing ?? s}`, height: `${t}px` };
          }
          function l() {
            const t = r();
            (e.style.transition = t.transition), (e.style.height = t.height);
          }
          if (!o.current) return f(e, n), void (o.current = !0);
          return (
            (e.style.willChange = 'height'),
            (function () {
              const t = requestAnimationFrame(() => {
                n
                  ? (l(),
                    requestAnimationFrame(() => {
                      (e.style.height = c.height), (e.style.overflow = c.overflow);
                    }))
                  : ((e.style.display = 'block'),
                    requestAnimationFrame(() => {
                      l();
                    }));
              });
              return () => cancelAnimationFrame(t);
            })()
          );
        }, [t, n, a]);
      }
      function m(e) {
        let { collapsed: t, isBrowser: n } = e;
        if (!n) return t ? c : d;
      }
      function h(e) {
        let {
          as: t = 'div',
          collapsed: n,
          children: o,
          animation: i,
          onCollapseTransitionEnd: s,
          className: u,
          disableSSRStyle: c,
        } = e;
        const d = (0, a.A)(),
          h = (0, r.useRef)(null);
        return (
          p({ collapsibleRef: h, collapsed: n, animation: i }),
          (0, l.jsx)(t, {
            ref: h,
            style: c ? void 0 : m({ collapsed: n, isBrowser: d }),
            onTransitionEnd: (e) => {
              'height' === e.propertyName && (f(h.current, n), s?.(n));
            },
            className: u,
            children: o,
          })
        );
      }
      function g(e) {
        let { collapsed: t, ...n } = e;
        const [a, i] = (0, r.useState)(!t),
          [s, u] = (0, r.useState)(t);
        return (
          (0, o.A)(() => {
            t || i(!0);
          }, [t]),
          (0, o.A)(() => {
            a && u(t);
          }, [a, t]),
          a ? (0, l.jsx)(h, { ...n, collapsed: s }) : null
        );
      }
      function y(e) {
        let { lazy: t, ...n } = e;
        const r = t ? g : h;
        return (0, l.jsx)(r, { ...n });
      }
    },
    9941: (e, t, n) => {
      'use strict';
      n.d(t, { I9: () => d, Kd: () => c, N_: () => y, k2: () => w });
      var r = n(9519),
        a = n(1146),
        o = n(3696),
        i = n(6941),
        l = n(8102),
        s = n(9257),
        u = n(6143),
        c = (function (e) {
          function t() {
            for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
            return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, i.zR)(t.props)), t;
          }
          return (
            (0, a.A)(t, e),
            (t.prototype.render = function () {
              return o.createElement(r.Ix, { history: this.history, children: this.props.children });
            }),
            t
          );
        })(o.Component);
      var d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
          return ((t = e.call.apply(e, [this].concat(r)) || this).history = (0, i.TM)(t.props)), t;
        }
        return (
          (0, a.A)(t, e),
          (t.prototype.render = function () {
            return o.createElement(r.Ix, { history: this.history, children: this.props.children });
          }),
          t
        );
      })(o.Component);
      var f = function (e, t) {
          return 'function' == typeof e ? e(t) : e;
        },
        p = function (e, t) {
          return 'string' == typeof e ? (0, i.yJ)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        h = o.forwardRef;
      void 0 === h && (h = m);
      var g = h(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          i = (0, s.A)(e, ['innerRef', 'navigate', 'onClick']),
          u = i.target,
          c = (0, l.A)({}, i, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (u && '_self' !== u) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (m !== h && t) || n), o.createElement('a', c);
      });
      var y = h(function (e, t) {
          var n = e.component,
            a = void 0 === n ? g : n,
            c = e.replace,
            d = e.to,
            y = e.innerRef,
            b = (0, s.A)(e, ['component', 'replace', 'to', 'innerRef']);
          return o.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = e.history,
              r = p(f(d, e.location), e.location),
              s = r ? n.createHref(r) : '',
              g = (0, l.A)({}, b, {
                href: s,
                navigate: function () {
                  var t = f(d, e.location),
                    r = (0, i.AO)(e.location) === (0, i.AO)(p(t));
                  (c || r ? n.replace : n.push)(t);
                },
              });
            return m !== h ? (g.ref = t || y) : (g.innerRef = y), o.createElement(a, g);
          });
        }),
        b = function (e) {
          return e;
        },
        v = o.forwardRef;
      void 0 === v && (v = b);
      var w = v(function (e, t) {
        var n = e['aria-current'],
          a = void 0 === n ? 'page' : n,
          i = e.activeClassName,
          c = void 0 === i ? 'active' : i,
          d = e.activeStyle,
          m = e.className,
          h = e.exact,
          g = e.isActive,
          w = e.location,
          k = e.sensitive,
          S = e.strict,
          x = e.style,
          E = e.to,
          _ = e.innerRef,
          C = (0, s.A)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return o.createElement(r.XZ.Consumer, null, function (e) {
          e || (0, u.A)(!1);
          var n = w || e.location,
            i = p(f(E, n), n),
            s = i.pathname,
            A = s && s.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            T = A ? (0, r.B6)(n.pathname, { path: A, exact: h, sensitive: k, strict: S }) : null,
            j = !!(g ? g(T, n) : T),
            P = 'function' == typeof m ? m(j) : m,
            N = 'function' == typeof x ? x(j) : x;
          j &&
            ((P = (function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(' ');
            })(P, c)),
            (N = (0, l.A)({}, N, d)));
          var O = (0, l.A)({ 'aria-current': (j && a) || null, className: P, style: N, to: i }, C);
          return b !== v ? (O.ref = t || _) : (O.innerRef = _), o.createElement(y, O);
        });
      });
    },
    9985: (e, t, n) => {
      'use strict';
      n.d(t, { A: () => p });
      var r = n(3696),
        a = n(9941),
        o = n(99),
        i = n(4669),
        l = n(2535),
        s = n(9006),
        u = n(5470),
        c = n(3254),
        d = n(2540);
      function f(e, t) {
        let {
          isNavLink: n,
          to: f,
          href: p,
          activeClassName: m,
          isActive: h,
          'data-noBrokenLinkCheck': g,
          autoAddBaseUrl: y = !0,
          ...b
        } = e;
        const { siteConfig: v } = (0, i.A)(),
          { trailingSlash: w, baseUrl: k } = v,
          S = v.future.experimental_router,
          { withBaseUrl: x } = (0, c.hH)(),
          E = (0, u.A)(),
          _ = (0, r.useRef)(null);
        (0, r.useImperativeHandle)(t, () => _.current);
        const C = f || p;
        const A = (0, l.A)(C),
          T = C?.replace('pathname://', '');
        let j = void 0 !== T ? ((P = T), y && ((e) => e.startsWith('/'))(P) ? x(P) : P) : void 0;
        var P;
        'hash' === S && j?.startsWith('./') && (j = j?.slice(1)),
          j && A && (j = (0, o.Ks)(j, { trailingSlash: w, baseUrl: k }));
        const N = (0, r.useRef)(!1),
          O = n ? a.k2 : a.N_,
          L = s.A.canUseIntersectionObserver,
          R = (0, r.useRef)(),
          D = () => {
            N.current || null == j || (window.docusaurus.preload(j), (N.current = !0));
          };
        (0, r.useEffect)(
          () => (
            !L && A && s.A.canUseDOM && null != j && window.docusaurus.prefetch(j),
            () => {
              L && R.current && R.current.disconnect();
            }
          ),
          [R, j, L, A]
        );
        const F = j?.startsWith('#') ?? !1,
          I = !b.target || '_self' === b.target,
          M = !j || !A || !I || (F && 'hash' !== S);
        g || (!F && M) || E.collectLink(j), b.id && E.collectAnchor(b.id);
        const z = {};
        return M
          ? (0, d.jsx)('a', {
              ref: _,
              href: j,
              ...(C && !A && { target: '_blank', rel: 'noopener noreferrer' }),
              ...b,
              ...z,
            })
          : (0, d.jsx)(O, {
              ...b,
              onMouseEnter: D,
              onTouchStart: D,
              innerRef: (e) => {
                (_.current = e),
                  L &&
                    e &&
                    A &&
                    ((R.current = new window.IntersectionObserver((t) => {
                      t.forEach((t) => {
                        e === t.target &&
                          (t.isIntersecting || t.intersectionRatio > 0) &&
                          (R.current.unobserve(e), R.current.disconnect(), null != j && window.docusaurus.prefetch(j));
                      });
                    })),
                    R.current.observe(e));
              },
              to: j,
              ...(n && { isActive: h, activeClassName: m }),
              ...z,
            });
      }
      const p = r.forwardRef(f);
    },
  },
  (e) => {
    e.O(0, [869], () => {
      return (t = 3309), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
