(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        2010: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return s
                },
                f: function() {
                    return d
                }
            });
            var r = n(7294);
            let l = ["light", "dark"],
                a = "(prefers-color-scheme: dark)",
                o = "undefined" == typeof window,
                i = (0, r.createContext)(void 0),
                u = {
                    setTheme: e => {},
                    themes: []
                },
                s = () => {
                    var e;
                    return null !== (e = (0, r.useContext)(i)) && void 0 !== e ? e : u
                },
                d = e => (0, r.useContext)(i) ? r.createElement(r.Fragment, null, e.children) : r.createElement(m, e),
                c = ["light", "dark"],
                m = ({
                    forcedTheme: e,
                    disableTransitionOnChange: t = !1,
                    enableSystem: n = !0,
                    enableColorScheme: o = !0,
                    storageKey: u = "theme",
                    themes: s = c,
                    defaultTheme: d = n ? "system" : "light",
                    attribute: m = "data-theme",
                    value: y,
                    children: _,
                    nonce: v
                }) => {
                    let [w, g] = (0, r.useState)(() => h(u, d)), [k, E] = (0, r.useState)(() => h(u)), S = y ? Object.values(y) : s, $ = (0, r.useCallback)(e => {
                        let r = e;
                        if (!r) return;
                        "system" === e && n && (r = b());
                        let a = y ? y[r] : r,
                            i = t ? p() : null,
                            u = document.documentElement;
                        if ("class" === m ? (u.classList.remove(...S), a && u.classList.add(a)) : a ? u.setAttribute(m, a) : u.removeAttribute(m), o) {
                            let e = l.includes(d) ? d : null,
                                t = l.includes(r) ? r : e;
                            u.style.colorScheme = t
                        }
                        null == i || i()
                    }, []), C = (0, r.useCallback)(e => {
                        g(e);
                        try {
                            localStorage.setItem(u, e)
                        } catch (e) {}
                    }, [e]), T = (0, r.useCallback)(t => {
                        let r = b(t);
                        E(r), "system" === w && n && !e && $("system")
                    }, [w, e]);
                    (0, r.useEffect)(() => {
                        let e = window.matchMedia(a);
                        return e.addListener(T), T(e), () => e.removeListener(T)
                    }, [T]), (0, r.useEffect)(() => {
                        let e = e => {
                            e.key === u && C(e.newValue || d)
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [C]), (0, r.useEffect)(() => {
                        $(null != e ? e : w)
                    }, [e, w]);
                    let O = (0, r.useMemo)(() => ({
                        theme: w,
                        setTheme: C,
                        forcedTheme: e,
                        resolvedTheme: "system" === w ? k : w,
                        themes: n ? [...s, "system"] : s,
                        systemTheme: n ? k : void 0
                    }), [w, C, e, k, n, s]);
                    return r.createElement(i.Provider, {
                        value: O
                    }, r.createElement(f, {
                        forcedTheme: e,
                        disableTransitionOnChange: t,
                        enableSystem: n,
                        enableColorScheme: o,
                        storageKey: u,
                        themes: s,
                        defaultTheme: d,
                        attribute: m,
                        value: y,
                        children: _,
                        attrs: S,
                        nonce: v
                    }), _)
                },
                f = (0, r.memo)(({
                    forcedTheme: e,
                    storageKey: t,
                    attribute: n,
                    enableSystem: o,
                    enableColorScheme: i,
                    defaultTheme: u,
                    value: s,
                    attrs: d,
                    nonce: c
                }) => {
                    let m = "system" === u,
                        f = "class" === n ? `var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});` : `var d=document.documentElement,n='${n}',s='setAttribute';`,
                        h = i ? l.includes(u) && u ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                        p = (e, t = !1, r = !0) => {
                            let a = s ? s[e] : e,
                                o = t ? e + "|| ''" : `'${a}'`,
                                u = "";
                            return i && r && !t && l.includes(e) && (u += `d.style.colorScheme = '${e}';`), "class" === n ? u += t || a ? `c.add(${o})` : "null" : a && (u += `d[s](n,${o})`), u
                        },
                        b = e ? `!function(){${f}${p(e)}}()` : o ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${m?"":"else{"+p(u,!1,!1)+"}"}${h}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(u,!1,!1)};}${h}}catch(t){}}();`;
                    return r.createElement("script", {
                        nonce: c,
                        dangerouslySetInnerHTML: {
                            __html: b
                        }
                    })
                }, () => !0),
                h = (e, t) => {
                    let n;
                    if (!o) {
                        try {
                            n = localStorage.getItem(e) || void 0
                        } catch (e) {}
                        return n || t
                    }
                },
                p = () => {
                    let e = document.createElement("style");
                    return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(e)
                        }, 1)
                    }
                },
                b = e => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light")
        },
        1118: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(7069)
            }])
        },
        5677: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    noSSR: function() {
                        return o
                    },
                    default: function() {
                        return i
                    }
                });
            let r = n(8754),
                l = (n(7294), r._(n(8976)));

            function a(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function o(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function i(e, t) {
                let n = l.default,
                    r = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: r
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? r.loader = () => e : "function" == typeof e ? r.loader = e : "object" == typeof e && (r = { ...r,
                    ...e
                }), r = { ...r,
                    ...t
                };
                let i = r.loader;
                return (r.loadableGenerated && (r = { ...r,
                    ...r.loadableGenerated
                }, delete r.loadableGenerated), "boolean" != typeof r.ssr || r.ssr) ? n({ ...r,
                    loader: () => null != i ? i().then(a) : Promise.resolve(a(() => null))
                }) : (delete r.webpack, delete r.modules, o(n, r))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2254: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let r = n(8754),
                l = r._(n(7294)),
                a = l.default.createContext(null)
        },
        8976: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let r = n(8754),
                l = r._(n(7294)),
                a = n(2254),
                o = [],
                i = [],
                u = !1;

            function s(e) {
                let t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
                    throw n.loading = !1, n.error = e, e
                }), n
            }
            class d {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = { ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            }

            function c(e) {
                return function(e, t) {
                    let n = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        r = null;

                    function o() {
                        if (!r) {
                            let t = new d(e, n);
                            r = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return r.promise()
                    }
                    if (!u) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e && i.push(t => {
                            for (let n of e)
                                if (t.includes(n)) return o()
                        })
                    }

                    function s(e, t) {
                        ! function() {
                            o();
                            let e = l.default.useContext(a.LoadableContext);
                            e && Array.isArray(n.modules) && n.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let i = l.default.useSyncExternalStore(r.subscribe, r.getCurrentValue, r.getCurrentValue);
                        return l.default.useImperativeHandle(t, () => ({
                            retry: r.retry
                        }), []), l.default.useMemo(() => {
                            var t;
                            return i.loading || i.error ? l.default.createElement(n.loading, {
                                isLoading: i.loading,
                                pastDelay: i.pastDelay,
                                timedOut: i.timedOut,
                                error: i.error,
                                retry: r.retry
                            }) : i.loaded ? l.default.createElement((t = i.loaded) && t.default ? t.default : t, e) : null
                        }, [e, i])
                    }
                    return s.preload = () => o(), s.displayName = "LoadableComponent", l.default.forwardRef(s)
                }(s, e)
            }

            function m(e, t) {
                let n = [];
                for (; e.length;) {
                    let r = e.pop();
                    n.push(r(t))
                }
                return Promise.all(n).then(() => {
                    if (e.length) return m(e, t)
                })
            }
            c.preloadAll = () => new Promise((e, t) => {
                m(o).then(e, t)
            }), c.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let n = () => (u = !0, t());
                m(i, e).then(n, n)
            })), window.__NEXT_PRELOADREADY = c.preloadReady;
            let f = c
        },
        7069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n(5893);
            n(7952);
            var l = n(5152),
                a = n.n(l),
                o = n(2010),
                i = n(7294),
                u = () => {
                    window.va || (window.va = function(...e) {
                        (window.vaq = window.vaq || []).push(e)
                    })
                };

            function s() {
                return "development" === (window.vam || "production")
            }

            function d({
                beforeSend: e,
                debug: t = !0,
                mode: n = "auto"
            }) {
                return (0, i.useEffect)(() => {
                    ! function(e = {
                        debug: !0
                    }) {
                        var t;
                        if (!("undefined" != typeof window)) return;
                        (function(e = "auto") {
                            if ("auto" === e) {
                                window.vam = "production";
                                return
                            }
                            window.vam = e
                        })(e.mode), u(), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
                        let n = s() ? "https://va.vercel-scripts.com/v1/script.debug.js" : "/_vercel/insights/script.js";
                        if (document.head.querySelector(`script[src*="${n}"]`)) return;
                        let r = document.createElement("script");
                        r.src = n, r.defer = !0, r.setAttribute("data-sdkn", "@vercel/analytics"), r.setAttribute("data-sdkv", "1.0.1"), s() && !1 === e.debug && r.setAttribute("data-debug", "false"), document.head.appendChild(r)
                    }({
                        beforeSend: e,
                        debug: t,
                        mode: n
                    })
                }, [e, t, n]), null
            }
            let c = a()(() => Promise.all([n.e(86), n.e(937), n.e(228), n.e(158), n.e(445), n.e(13), n.e(852), n.e(224)]).then(n.bind(n, 9332)), {
                loadableGenerated: {
                    webpack: () => [9332]
                },
                ssr: !1
            });

            function m(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                return (0, r.jsx)(o.f, {
                    attribute: "class",
                    defaultTheme: "dark",
                    children: (0, r.jsxs)(c, {
                        children: [(0, r.jsx)(t, { ...n
                        }), (0, r.jsx)(d, {})]
                    })
                })
            }
        },
        7952: function() {},
        5152: function(e, t, n) {
            e.exports = n(5677)
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(1118), t(6885)
        }), _N_E = e.O()
    }
]);