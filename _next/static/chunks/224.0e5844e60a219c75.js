(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [224], {
        4184: function(e, t) {
            var r;
            /*!
            	Copyright (c) 2018 Jed Watson.
            	Licensed under the MIT License (MIT), see
            	http://jedwatson.github.io/classnames
            */
            ! function() {
                "use strict";
                var l = {}.hasOwnProperty;

                function n() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var i = typeof r;
                            if ("string" === i || "number" === i) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var o = n.apply(null, r);
                                    o && e.push(o)
                                }
                            } else if ("object" === i) {
                                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                    e.push(r.toString());
                                    continue
                                }
                                for (var a in r) l.call(r, a) && r[a] && e.push(a)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 !== (r = (function() {
                    return n
                }).apply(t, [])) && (e.exports = r)
            }()
        },
        9332: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return e_
                }
            });
            var l = r(5893);

            function n() {
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)("div", {
                        className: "-z-[999] absolute h-full w-screen top-0 left-0 overflow-hidden dark:bg-secondary-blue"
                    })
                })
            }
            var i = r(2010),
                o = r(3750),
                a = r(9583),
                s = r(5155),
                c = () => {
                    let {
                        theme: e,
                        setTheme: t
                    } = (0, i.F)();
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "w-full bg-gradient-to-tr from-primary-teal to-primary-blue from-0% to-70% px-4 lg:px-8 py-16 lg:py-32",
                            children: (0, l.jsx)("div", {
                                className: "w-full flex flex-col items-center",
                                children: (0, l.jsx)("p", {
                                    className: "text-2xl lg:text-6xl text-center font-semibold text-primary-white",
                                    children: "Stay ahead of the curve with CryptoNewsBot: Your gateway to real-time cryptocurrency market insights and trends!"
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "container mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 p-8 mt-8",
                            children: [(0, l.jsxs)("div", {
                                className: "h-full flex flex-col gap-8",
                                children: [(0, l.jsx)("div", {
                                    className: "flex items-center gap-4",
                                    children: (0, l.jsx)("img", {
                                        className: "h-16",
                                        src: "dark" == e ? "rmob.png" : "/assets/Logo/PNG/yield magnet-05.png"
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "flex w-full items-center justify-center sm:justify-start gap-5 ",
                                    children: [(0, l.jsx)("a", {
                                        target: "_blank",
                                        href: "",
                                        className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                        children: (0, l.jsx)(a.AGi, {
                                            className: "group-hover:fill-secondary-white fill-secondary-black text-xl sm:text-2xl"
                                        })
                                    }), (0, l.jsx)("a", {
                                        target: "_blank",
                                        href: "",
                                        className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                        children: (0, l.jsx)(s.tzA, {
                                            className: "group-hover:fill-secondary-white fill-secondary-black text-xl sm:text-2xl"
                                        })
                                    }), (0, l.jsx)("a", {
                                        target: "_blank",
                                        href: "",
                                        className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                        children: (0, l.jsx)(a.uYZ, {
                                            className: "group-hover:fill-secondary-white fill-secondary-black text-xl sm:text-2xl"
                                        })
                                    }), (0, l.jsx)("a", {
                                        target: "_blank",
                                        href: "",
                                        className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                        children: (0, l.jsx)(o.meP, {
                                            className: "group-hover:fill-secondary-white fill-secondary-black text-xl sm:text-2xl"
                                        })
                                    }), (0, l.jsx)("a", {
                                        target: "_blank",
                                        href: "",
                                        className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                        children: (0, l.jsx)(o.aY7, {
                                            className: "group-hover:fill-secondary-white fill-secondary-black text-xl sm:text-2xl"
                                        })
                                        ///idher hai links
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                // La
                            })]
                        })]
                    })
                },
                u = r(1852),
                d = r(7294),
                f = r(5434),
                m = r(1163),
                p = r(9352),
                h = r(1873),
                y = r(4184);

            function x(e) {
                return e.split("-")[1]
            }

            function g(e) {
                return "y" === e ? "height" : "width"
            }

            function v(e) {
                return e.split("-")[0]
            }

            function w(e) {
                return ["top", "bottom"].includes(v(e)) ? "x" : "y"
            }

            function b(e, t, r) {
                let l, {
                        reference: n,
                        floating: i
                    } = e,
                    o = n.x + n.width / 2 - i.width / 2,
                    a = n.y + n.height / 2 - i.height / 2,
                    s = w(t),
                    c = g(s),
                    u = n[c] / 2 - i[c] / 2,
                    d = "x" === s;
                switch (v(t)) {
                    case "top":
                        l = {
                            x: o,
                            y: n.y - i.height
                        };
                        break;
                    case "bottom":
                        l = {
                            x: o,
                            y: n.y + n.height
                        };
                        break;
                    case "right":
                        l = {
                            x: n.x + n.width,
                            y: a
                        };
                        break;
                    case "left":
                        l = {
                            x: n.x - i.width,
                            y: a
                        };
                        break;
                    default:
                        l = {
                            x: n.x,
                            y: n.y
                        }
                }
                switch (x(t)) {
                    case "start":
                        l[s] -= u * (r && d ? -1 : 1);
                        break;
                    case "end":
                        l[s] += u * (r && d ? -1 : 1)
                }
                return l
            }
            let k = async (e, t, r) => {
                let {
                    placement: l = "bottom",
                    strategy: n = "absolute",
                    middleware: i = [],
                    platform: o
                } = r, a = i.filter(Boolean), s = await (null == o.isRTL ? void 0 : o.isRTL(t)), c = await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: n
                }), {
                    x: u,
                    y: d
                } = b(c, l, s), f = l, m = {}, p = 0;
                for (let r = 0; r < a.length; r++) {
                    let {
                        name: i,
                        fn: h
                    } = a[r], {
                        x: y,
                        y: x,
                        data: g,
                        reset: v
                    } = await h({
                        x: u,
                        y: d,
                        initialPlacement: l,
                        placement: f,
                        strategy: n,
                        middlewareData: m,
                        rects: c,
                        platform: o,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    u = null != y ? y : u, d = null != x ? x : d, m = { ...m,
                        [i]: { ...m[i],
                            ...g
                        }
                    }, v && p <= 50 && (p++, "object" == typeof v && (v.placement && (f = v.placement), v.rects && (c = !0 === v.rects ? await o.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: n
                    }) : v.rects), {
                        x: u,
                        y: d
                    } = b(c, f, s)), r = -1)
                }
                return {
                    x: u,
                    y: d,
                    placement: f,
                    strategy: n,
                    middlewareData: m
                }
            };

            function N(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function j(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function _(e, t) {
                var r;
                void 0 === t && (t = {});
                let {
                    x: l,
                    y: n,
                    platform: i,
                    rects: o,
                    elements: a,
                    strategy: s
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: m = 0
                } = t, p = N(m), h = a[f ? "floating" === d ? "reference" : "floating" : d], y = j(await i.getClippingRect({
                    element: null == (r = await (null == i.isElement ? void 0 : i.isElement(h))) || r ? h : h.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: s
                })), x = "floating" === d ? { ...o.floating,
                    x: l,
                    y: n
                } : o.reference, g = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), v = await (null == i.isElement ? void 0 : i.isElement(g)) && await (null == i.getScale ? void 0 : i.getScale(g)) || {
                    x: 1,
                    y: 1
                }, w = j(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: x,
                    offsetParent: g,
                    strategy: s
                }) : x);
                return {
                    top: (y.top - w.top + p.top) / v.y,
                    bottom: (w.bottom - y.bottom + p.bottom) / v.y,
                    left: (y.left - w.left + p.left) / v.x,
                    right: (w.right - y.right + p.right) / v.x
                }
            }
            let S = Math.min,
                E = Math.max,
                A = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            element: r,
                            padding: l = 0
                        } = e || {}, {
                            x: n,
                            y: i,
                            placement: o,
                            rects: a,
                            platform: s,
                            elements: c
                        } = t;
                        if (null == r) return {};
                        let u = N(l),
                            d = {
                                x: n,
                                y: i
                            },
                            f = w(o),
                            m = g(f),
                            p = await s.getDimensions(r),
                            h = "y" === f,
                            y = h ? "top" : "left",
                            v = h ? "bottom" : "right",
                            b = h ? "clientHeight" : "clientWidth",
                            k = a.reference[m] + a.reference[f] - d[f] - a.floating[m],
                            j = d[f] - a.reference[f],
                            _ = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(r)),
                            A = _ ? _[b] : 0;
                        A && await (null == s.isElement ? void 0 : s.isElement(_)) || (A = c.floating[b] || a.floating[m]);
                        let T = u[y],
                            R = A - p[m] - u[v],
                            L = A / 2 - p[m] / 2 + (k / 2 - j / 2),
                            O = E(T, S(L, R)),
                            C = null != x(o) && L != O && a.reference[m] / 2 - (L < T ? u[y] : u[v]) - p[m] / 2 < 0;
                        return {
                            [f]: d[f] - (C ? L < T ? T - L : R - L : 0),
                            data: {
                                [f]: O,
                                centerOffset: L - O
                            }
                        }
                    }
                }),
                T = (["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []), {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                });

            function R(e) {
                return e.replace(/left|right|bottom|top/g, e => T[e])
            }
            let L = {
                start: "end",
                end: "start"
            };

            function O(e) {
                return e.replace(/start|end/g, e => L[e])
            }
            let C = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "flip",
                        options: e,
                        async fn(t) {
                            var r, l, n, i;
                            let {
                                placement: o,
                                middlewareData: a,
                                rects: s,
                                initialPlacement: c,
                                platform: u,
                                elements: d
                            } = t, {
                                mainAxis: f = !0,
                                crossAxis: m = !0,
                                fallbackPlacements: p,
                                fallbackStrategy: h = "bestFit",
                                fallbackAxisSideDirection: y = "none",
                                flipAlignment: b = !0,
                                ...k
                            } = e, N = v(o), j = v(c) === c, S = await (null == u.isRTL ? void 0 : u.isRTL(d.floating)), E = p || (j || !b ? [R(c)] : function(e) {
                                let t = R(e);
                                return [O(e), t, O(t)]
                            }(c));
                            p || "none" === y || E.push(... function(e, t, r, l) {
                                let n = x(e),
                                    i = function(e, t, r) {
                                        let l = ["left", "right"],
                                            n = ["right", "left"];
                                        switch (e) {
                                            case "top":
                                            case "bottom":
                                                return r ? t ? n : l : t ? l : n;
                                            case "left":
                                            case "right":
                                                return t ? ["top", "bottom"] : ["bottom", "top"];
                                            default:
                                                return []
                                        }
                                    }(v(e), "start" === r, l);
                                return n && (i = i.map(e => e + "-" + n), t && (i = i.concat(i.map(O)))), i
                            }(c, b, y, S));
                            let A = [c, ...E],
                                T = await _(t, k),
                                L = [],
                                C = (null == (r = a.flip) ? void 0 : r.overflows) || [];
                            if (f && L.push(T[N]), m) {
                                let {
                                    main: e,
                                    cross: t
                                } = function(e, t, r) {
                                    void 0 === r && (r = !1);
                                    let l = x(e),
                                        n = w(e),
                                        i = g(n),
                                        o = "x" === n ? l === (r ? "end" : "start") ? "right" : "left" : "start" === l ? "bottom" : "top";
                                    return t.reference[i] > t.floating[i] && (o = R(o)), {
                                        main: o,
                                        cross: R(o)
                                    }
                                }(o, s, S);
                                L.push(T[e], T[t])
                            }
                            if (C = [...C, {
                                    placement: o,
                                    overflows: L
                                }], !L.every(e => e <= 0)) {
                                let e = ((null == (l = a.flip) ? void 0 : l.index) || 0) + 1,
                                    t = A[e];
                                if (t) return {
                                    data: {
                                        index: e,
                                        overflows: C
                                    },
                                    reset: {
                                        placement: t
                                    }
                                };
                                let r = null == (n = C.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : n.placement;
                                if (!r) switch (h) {
                                    case "bestFit":
                                        {
                                            let e = null == (i = C.map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : i[0];e && (r = e);
                                            break
                                        }
                                    case "initialPlacement":
                                        r = c
                                }
                                if (o !== r) return {
                                    reset: {
                                        placement: r
                                    }
                                }
                            }
                            return {}
                        }
                    }
                },
                P = function(e) {
                    return void 0 === e && (e = 0), {
                        name: "offset",
                        options: e,
                        async fn(t) {
                            let {
                                x: r,
                                y: l
                            } = t, n = await async function(e, t) {
                                let {
                                    placement: r,
                                    platform: l,
                                    elements: n
                                } = e, i = await (null == l.isRTL ? void 0 : l.isRTL(n.floating)), o = v(r), a = x(r), s = "x" === w(r), c = ["left", "top"].includes(o) ? -1 : 1, u = i && s ? -1 : 1, d = "function" == typeof t ? t(e) : t, {
                                    mainAxis: f,
                                    crossAxis: m,
                                    alignmentAxis: p
                                } = "number" == typeof d ? {
                                    mainAxis: d,
                                    crossAxis: 0,
                                    alignmentAxis: null
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    alignmentAxis: null,
                                    ...d
                                };
                                return a && "number" == typeof p && (m = "end" === a ? -1 * p : p), s ? {
                                    x: m * u,
                                    y: f * c
                                } : {
                                    x: f * c,
                                    y: m * u
                                }
                            }(t, e);
                            return {
                                x: r + n.x,
                                y: l + n.y,
                                data: n
                            }
                        }
                    }
                },
                D = function(e) {
                    return void 0 === e && (e = {}), {
                        name: "shift",
                        options: e,
                        async fn(t) {
                            let {
                                x: r,
                                y: l,
                                placement: n
                            } = t, {
                                mainAxis: i = !0,
                                crossAxis: o = !1,
                                limiter: a = {
                                    fn: e => {
                                        let {
                                            x: t,
                                            y: r
                                        } = e;
                                        return {
                                            x: t,
                                            y: r
                                        }
                                    }
                                },
                                ...s
                            } = e, c = {
                                x: r,
                                y: l
                            }, u = await _(t, s), d = w(v(n)), f = "x" === d ? "y" : "x", m = c[d], p = c[f];
                            i && (m = E(m + u["y" === d ? "top" : "left"], S(m, m - u["y" === d ? "bottom" : "right"]))), o && (p = E(p + u["y" === f ? "top" : "left"], S(p, p - u["y" === f ? "bottom" : "right"])));
                            let h = a.fn({ ...t,
                                [d]: m,
                                [f]: p
                            });
                            return { ...h,
                                data: {
                                    x: h.x - r,
                                    y: h.y - l
                                }
                            }
                        }
                    }
                };

            function z(e) {
                var t;
                return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function M(e) {
                return z(e).getComputedStyle(e)
            }

            function W(e) {
                return e instanceof z(e).Node
            }

            function F(e) {
                return W(e) ? (e.nodeName || "").toLowerCase() : ""
            }

            function H(e) {
                return e instanceof z(e).HTMLElement
            }

            function B(e) {
                return e instanceof z(e).Element
            }

            function $(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof z(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function I(e) {
                let {
                    overflow: t,
                    overflowX: r,
                    overflowY: l,
                    display: n
                } = M(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + l + r) && !["inline", "contents"].includes(n)
            }

            function Y(e) {
                let t = q(),
                    r = M(e);
                return "none" !== r.transform || "none" !== r.perspective || !t && !!r.backdropFilter && "none" !== r.backdropFilter || !t && !!r.filter && "none" !== r.filter || ["transform", "perspective", "filter"].some(e => (r.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (r.contain || "").includes(e))
            }

            function q() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function G(e) {
                return ["html", "body", "#document"].includes(F(e))
            }
            let V = Math.min,
                X = Math.max,
                K = Math.round;

            function U(e) {
                let t = M(e),
                    r = parseFloat(t.width) || 0,
                    l = parseFloat(t.height) || 0,
                    n = H(e),
                    i = n ? e.offsetWidth : r,
                    o = n ? e.offsetHeight : l,
                    a = K(r) !== i || K(l) !== o;
                return a && (r = i, l = o), {
                    width: r,
                    height: l,
                    fallback: a
                }
            }

            function J(e) {
                return B(e) ? e : e.contextElement
            }
            let Z = {
                x: 1,
                y: 1
            };

            function Q(e) {
                let t = J(e);
                if (!H(t)) return Z;
                let r = t.getBoundingClientRect(),
                    {
                        width: l,
                        height: n,
                        fallback: i
                    } = U(t),
                    o = (i ? K(r.width) : r.width) / l,
                    a = (i ? K(r.height) : r.height) / n;
                return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), {
                    x: o,
                    y: a
                }
            }
            let ee = {
                x: 0,
                y: 0
            };

            function et(e, t, r) {
                var l, n;
                if (void 0 === t && (t = !0), !q()) return ee;
                let i = e ? z(e) : window;
                return !r || t && r !== i ? ee : {
                    x: (null == (l = i.visualViewport) ? void 0 : l.offsetLeft) || 0,
                    y: (null == (n = i.visualViewport) ? void 0 : n.offsetTop) || 0
                }
            }

            function er(e, t, r, l) {
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                let n = e.getBoundingClientRect(),
                    i = J(e),
                    o = Z;
                t && (l ? B(l) && (o = Q(l)) : o = Q(e));
                let a = et(i, r, l),
                    s = (n.left + a.x) / o.x,
                    c = (n.top + a.y) / o.y,
                    u = n.width / o.x,
                    d = n.height / o.y;
                if (i) {
                    let e = z(i),
                        t = l && B(l) ? z(l) : l,
                        r = e.frameElement;
                    for (; r && l && t !== e;) {
                        let e = Q(r),
                            t = r.getBoundingClientRect(),
                            l = getComputedStyle(r);
                        t.x += (r.clientLeft + parseFloat(l.paddingLeft)) * e.x, t.y += (r.clientTop + parseFloat(l.paddingTop)) * e.y, s *= e.x, c *= e.y, u *= e.x, d *= e.y, s += t.x, c += t.y, r = z(r).frameElement
                    }
                }
                return j({
                    width: u,
                    height: d,
                    x: s,
                    y: c
                })
            }

            function el(e) {
                return ((W(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function en(e) {
                return B(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function ei(e) {
                return er(el(e)).left + en(e).scrollLeft
            }

            function eo(e) {
                if ("html" === F(e)) return e;
                let t = e.assignedSlot || e.parentNode || $(e) && e.host || el(e);
                return $(t) ? t.host : t
            }

            function ea(e, t, r) {
                let l;
                if ("viewport" === t) l = function(e, t) {
                    let r = z(e),
                        l = el(e),
                        n = r.visualViewport,
                        i = l.clientWidth,
                        o = l.clientHeight,
                        a = 0,
                        s = 0;
                    if (n) {
                        i = n.width, o = n.height;
                        let e = q();
                        (!e || e && "fixed" === t) && (a = n.offsetLeft, s = n.offsetTop)
                    }
                    return {
                        width: i,
                        height: o,
                        x: a,
                        y: s
                    }
                }(e, r);
                else if ("document" === t) l = function(e) {
                    let t = el(e),
                        r = en(e),
                        l = e.ownerDocument.body,
                        n = X(t.scrollWidth, t.clientWidth, l.scrollWidth, l.clientWidth),
                        i = X(t.scrollHeight, t.clientHeight, l.scrollHeight, l.clientHeight),
                        o = -r.scrollLeft + ei(e),
                        a = -r.scrollTop;
                    return "rtl" === M(l).direction && (o += X(t.clientWidth, l.clientWidth) - n), {
                        width: n,
                        height: i,
                        x: o,
                        y: a
                    }
                }(el(e));
                else if (B(t)) l = function(e, t) {
                    let r = er(e, !0, "fixed" === t),
                        l = r.top + e.clientTop,
                        n = r.left + e.clientLeft,
                        i = H(e) ? Q(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * i.x,
                        height: e.clientHeight * i.y,
                        x: n * i.x,
                        y: l * i.y
                    }
                }(t, r);
                else {
                    let r = et(e);
                    l = { ...t,
                        x: t.x - r.x,
                        y: t.y - r.y
                    }
                }
                return j(l)
            }

            function es(e, t) {
                return H(e) && "fixed" !== M(e).position ? t ? t(e) : e.offsetParent : null
            }

            function ec(e, t) {
                let r = z(e);
                if (!H(e)) return r;
                let l = es(e, t);
                for (; l && ["table", "td", "th"].includes(F(l)) && "static" === M(l).position;) l = es(l, t);
                return l && ("html" === F(l) || "body" === F(l) && "static" === M(l).position && !Y(l)) ? r : l || function(e) {
                    let t = eo(e);
                    for (; H(t) && !G(t);) {
                        if (Y(t)) return t;
                        t = eo(t)
                    }
                    return null
                }(e) || r
            }
            let eu = {
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: r,
                            rootBoundary: l,
                            strategy: n
                        } = e, i = "clippingAncestors" === r ? function(e, t) {
                            let r = t.get(e);
                            if (r) return r;
                            let l = (function e(t, r) {
                                    var l;
                                    void 0 === r && (r = []);
                                    let n = function e(t) {
                                            let r = eo(t);
                                            return G(r) ? r.ownerDocument.body : H(r) && I(r) ? r : e(r)
                                        }(t),
                                        i = n === (null == (l = t.ownerDocument) ? void 0 : l.body),
                                        o = z(n);
                                    return i ? r.concat(o, o.visualViewport || [], I(n) ? n : []) : r.concat(n, e(n))
                                })(e).filter(e => B(e) && "body" !== F(e)),
                                n = null,
                                i = "fixed" === M(e).position,
                                o = i ? eo(e) : e;
                            for (; B(o) && !G(o);) {
                                let t = M(o),
                                    r = Y(o);
                                r || "fixed" !== t.position || (n = null), (i ? !r && !n : !r && "static" === t.position && n && ["absolute", "fixed"].includes(n.position) || I(o) && !r && function e(t, r) {
                                    let l = eo(t);
                                    return !(l === r || !B(l) || G(l)) && ("fixed" === M(l).position || e(l, r))
                                }(e, o)) ? l = l.filter(e => e !== o) : n = t, o = eo(o)
                            }
                            return t.set(e, l), l
                        }(t, this._c) : [].concat(r), o = [...i, l], a = o[0], s = o.reduce((e, r) => {
                            let l = ea(t, r, n);
                            return e.top = X(l.top, e.top), e.right = V(l.right, e.right), e.bottom = V(l.bottom, e.bottom), e.left = X(l.left, e.left), e
                        }, ea(t, a, n));
                        return {
                            width: s.right - s.left,
                            height: s.bottom - s.top,
                            x: s.left,
                            y: s.top
                        }
                    },
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            rect: t,
                            offsetParent: r,
                            strategy: l
                        } = e, n = H(r), i = el(r);
                        if (r === i) return t;
                        let o = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            a = {
                                x: 1,
                                y: 1
                            },
                            s = {
                                x: 0,
                                y: 0
                            };
                        if ((n || !n && "fixed" !== l) && (("body" !== F(r) || I(i)) && (o = en(r)), H(r))) {
                            let e = er(r);
                            a = Q(r), s.x = e.x + r.clientLeft, s.y = e.y + r.clientTop
                        }
                        return {
                            width: t.width * a.x,
                            height: t.height * a.y,
                            x: t.x * a.x - o.scrollLeft * a.x + s.x,
                            y: t.y * a.y - o.scrollTop * a.y + s.y
                        }
                    },
                    isElement: B,
                    getDimensions: function(e) {
                        return U(e)
                    },
                    getOffsetParent: ec,
                    getDocumentElement: el,
                    getScale: Q,
                    async getElementRects(e) {
                        let {
                            reference: t,
                            floating: r,
                            strategy: l
                        } = e, n = this.getOffsetParent || ec, i = this.getDimensions;
                        return {
                            reference: function(e, t, r) {
                                let l = H(t),
                                    n = el(t),
                                    i = "fixed" === r,
                                    o = er(e, !0, i, t),
                                    a = {
                                        scrollLeft: 0,
                                        scrollTop: 0
                                    },
                                    s = {
                                        x: 0,
                                        y: 0
                                    };
                                if (l || !l && !i) {
                                    if (("body" !== F(t) || I(n)) && (a = en(t)), H(t)) {
                                        let e = er(t, !0, i, t);
                                        s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop
                                    } else n && (s.x = ei(n))
                                }
                                return {
                                    x: o.left + a.scrollLeft - s.x,
                                    y: o.top + a.scrollTop - s.y,
                                    width: o.width,
                                    height: o.height
                                }
                            }(t, await n(r), l),
                            floating: {
                                x: 0,
                                y: 0,
                                ...await i(r)
                            }
                        }
                    },
                    getClientRects: e => Array.from(e.getClientRects()),
                    isRTL: e => "rtl" === M(e).direction
                },
                ed = (e, t, r) => {
                    let l = new Map,
                        n = {
                            platform: eu,
                            ...r
                        },
                        i = { ...n.platform,
                            _c: l
                        };
                    return k(e, t, { ...n,
                        platform: i
                    })
                };

            function ef(e, t) {
                void 0 === t && (t = {});
                var r = t.insertAt;
                if (e && "undefined" != typeof document) {
                    var l = document.head || document.getElementsByTagName("head")[0],
                        n = document.createElement("style");
                    n.type = "text/css", "top" === r && l.firstChild ? l.insertBefore(n, l.firstChild) : l.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
                }
            }
            ef(":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}");
            let em = (e, t, r) => {
                    let l = null;
                    return function(...n) {
                        let i = () => {
                            l = null, r || e.apply(this, n)
                        };
                        r && !l && (e.apply(this, n), l = setTimeout(i, t)), r || (l && clearTimeout(l), l = setTimeout(i, t))
                    }
                },
                ep = {
                    anchorRefs: new Set,
                    activeAnchor: {
                        current: null
                    },
                    attach: () => {},
                    detach: () => {},
                    setActiveAnchor: () => {}
                },
                eh = (0, d.createContext)({
                    getTooltipData: () => ep
                });

            function ey(e = "DEFAULT_TOOLTIP_ID") {
                return (0, d.useContext)(eh).getTooltipData(e)
            }
            let ex = "undefined" != typeof window ? d.useLayoutEffect : d.useEffect,
                eg = async ({
                    elementReference: e = null,
                    tooltipReference: t = null,
                    tooltipArrowReference: r = null,
                    place: l = "top",
                    offset: n = 10,
                    strategy: i = "absolute",
                    middlewares: o = [P(Number(n)), C(), D({
                        padding: 5
                    })]
                }) => e && null !== t ? r ? (o.push(A({
                    element: r,
                    padding: 5
                })), ed(e, t, {
                    placement: l,
                    strategy: i,
                    middleware: o
                }).then(({
                    x: e,
                    y: t,
                    placement: r,
                    middlewareData: l
                }) => {
                    var n, i;
                    let o = {
                            left: `${e}px`,
                            top: `${t}px`
                        },
                        {
                            x: a,
                            y: s
                        } = null !== (n = l.arrow) && void 0 !== n ? n : {
                            x: 0,
                            y: 0
                        };
                    return {
                        tooltipStyles: o,
                        tooltipArrowStyles: {
                            left: null != a ? `${a}px` : "",
                            top: null != s ? `${s}px` : "",
                            right: "",
                            bottom: "",
                            [null !== (i = ({
                                top: "bottom",
                                right: "left",
                                bottom: "top",
                                left: "right"
                            })[r.split("-")[0]]) && void 0 !== i ? i : "bottom"]: "-4px"
                        },
                        place: r
                    }
                })) : ed(e, t, {
                    placement: "bottom",
                    strategy: i,
                    middleware: o
                }).then(({
                    x: e,
                    y: t,
                    placement: r
                }) => ({
                    tooltipStyles: {
                        left: `${e}px`,
                        top: `${t}px`
                    },
                    tooltipArrowStyles: {},
                    place: r
                })) : {
                    tooltipStyles: {},
                    tooltipArrowStyles: {},
                    place: l
                };
            var ev = {
                tooltip: "styles-module_tooltip__mnnfp",
                fixed: "styles-module_fixed__7ciUi",
                arrow: "styles-module_arrow__K0L3T",
                noArrow: "styles-module_noArrow__T8y2L",
                clickable: "styles-module_clickable__Bv9o7",
                show: "styles-module_show__2NboJ",
                dark: "styles-module_dark__xNqje",
                light: "styles-module_light__Z6W-X",
                success: "styles-module_success__A2AKt",
                warning: "styles-module_warning__SCK0X",
                error: "styles-module_error__JvumD",
                info: "styles-module_info__BWdHW"
            };
            ef(".styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;left:0;opacity:0;padding:8px 16px;pointer-events:none;position:absolute;top:0;transition:opacity .3s ease-out;visibility:hidden;width:max-content;will-change:opacity,visibility}.styles-module_fixed__7ciUi{position:fixed}.styles-module_arrow__K0L3T{background:inherit;height:8px;position:absolute;transform:rotate(45deg);width:8px}.styles-module_noArrow__T8y2L{display:none}.styles-module_clickable__Bv9o7{pointer-events:auto}.styles-module_show__2NboJ{opacity:var(--rt-opacity);visibility:visible}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}");
            let ew = ({
                    id: e,
                    className: t,
                    classNameArrow: r,
                    variant: l = "dark",
                    anchorId: n,
                    anchorSelect: i,
                    place: o = "top",
                    offset: a = 10,
                    events: s = ["hover"],
                    openOnClick: c = !1,
                    positionStrategy: u = "absolute",
                    middlewares: f,
                    wrapper: m,
                    delayShow: p = 0,
                    delayHide: h = 0,
                    float: x = !1,
                    hidden: g = !1,
                    noArrow: v = !1,
                    clickable: w = !1,
                    closeOnEsc: b = !1,
                    style: k,
                    position: N,
                    afterShow: j,
                    afterHide: _,
                    content: S,
                    contentWrapperRef: E,
                    isOpen: A,
                    setIsOpen: T,
                    activeAnchor: R,
                    setActiveAnchor: L
                }) => {
                    let O = (0, d.useRef)(null),
                        C = (0, d.useRef)(null),
                        P = (0, d.useRef)(null),
                        D = (0, d.useRef)(null),
                        [z, M] = (0, d.useState)(o),
                        [W, F] = (0, d.useState)({}),
                        [H, B] = (0, d.useState)({}),
                        [$, I] = (0, d.useState)(!1),
                        [Y, q] = (0, d.useState)(!1),
                        G = (0, d.useRef)(!1),
                        V = (0, d.useRef)(null),
                        {
                            anchorRefs: X,
                            setActiveAnchor: K
                        } = ey(e),
                        U = (0, d.useRef)(!1),
                        [J, Z] = (0, d.useState)([]),
                        Q = (0, d.useRef)(!1),
                        ee = c || s.includes("click");
                    ex(() => (Q.current = !0, () => {
                        Q.current = !1
                    }), []), (0, d.useEffect)(() => {
                        if (!$) {
                            let e = setTimeout(() => {
                                q(!1)
                            }, 150);
                            return () => {
                                clearTimeout(e)
                            }
                        }
                        return () => null
                    }, [$]);
                    let et = e => {
                        Q.current && (e && q(!0), setTimeout(() => {
                            Q.current && (null == T || T(e), void 0 === A && I(e))
                        }, 10))
                    };
                    (0, d.useEffect)(() => {
                        if (void 0 === A) return () => null;
                        A && q(!0);
                        let e = setTimeout(() => {
                            I(A)
                        }, 10);
                        return () => {
                            clearTimeout(e)
                        }
                    }, [A]), (0, d.useEffect)(() => {
                        $ !== G.current && (G.current = $, $ ? null == j || j() : null == _ || _())
                    }, [$]);
                    let er = (e = h) => {
                            D.current && clearTimeout(D.current), D.current = setTimeout(() => {
                                U.current || et(!1)
                            }, e)
                        },
                        el = e => {
                            var t;
                            if (!e) return;
                            let r = null !== (t = e.currentTarget) && void 0 !== t ? t : e.target;
                            if (!(null == r ? void 0 : r.isConnected)) return L(null), void K({
                                current: null
                            });
                            p ? (P.current && clearTimeout(P.current), P.current = setTimeout(() => {
                                et(!0)
                            }, p)) : et(!0), L(r), K({
                                current: r
                            }), D.current && clearTimeout(D.current)
                        },
                        en = () => {
                            w ? er(h || 100) : h ? er() : et(!1), P.current && clearTimeout(P.current)
                        },
                        ei = ({
                            x: e,
                            y: t
                        }) => {
                            eg({
                                place: o,
                                offset: a,
                                elementReference: {
                                    getBoundingClientRect: () => ({
                                        x: e,
                                        y: t,
                                        width: 0,
                                        height: 0,
                                        top: t,
                                        left: e,
                                        right: e,
                                        bottom: t
                                    })
                                },
                                tooltipReference: O.current,
                                tooltipArrowReference: C.current,
                                strategy: u,
                                middlewares: f
                            }).then(e => {
                                Object.keys(e.tooltipStyles).length && F(e.tooltipStyles), Object.keys(e.tooltipArrowStyles).length && B(e.tooltipArrowStyles), M(e.place)
                            })
                        },
                        eo = e => {
                            if (!e) return;
                            let t = {
                                x: e.clientX,
                                y: e.clientY
                            };
                            ei(t), V.current = t
                        },
                        ea = e => {
                            el(e), h && er()
                        },
                        es = e => {
                            var t;
                            [document.querySelector(`[id='${n}']`), ...J].some(t => null == t ? void 0 : t.contains(e.target)) || (null === (t = O.current) || void 0 === t ? void 0 : t.contains(e.target)) || et(!1)
                        },
                        ec = e => {
                            "Escape" === e.key && et(!1)
                        },
                        eu = em(el, 50, !0),
                        ed = em(en, 50, !0);
                    (0, d.useEffect)(() => {
                        var e, t;
                        let r = new Set(X);
                        J.forEach(e => {
                            r.add({
                                current: e
                            })
                        });
                        let l = document.querySelector(`[id='${n}']`);
                        l && r.add({
                            current: l
                        }), b && window.addEventListener("keydown", ec);
                        let i = [];
                        ee ? (window.addEventListener("click", es), i.push({
                            event: "click",
                            listener: ea
                        })) : (i.push({
                            event: "mouseenter",
                            listener: eu
                        }, {
                            event: "mouseleave",
                            listener: ed
                        }, {
                            event: "focus",
                            listener: eu
                        }, {
                            event: "blur",
                            listener: ed
                        }), x && i.push({
                            event: "mousemove",
                            listener: eo
                        }));
                        let o = () => {
                                U.current = !0
                            },
                            a = () => {
                                U.current = !1, en()
                            };
                        return w && !ee && (null === (e = O.current) || void 0 === e || e.addEventListener("mouseenter", o), null === (t = O.current) || void 0 === t || t.addEventListener("mouseleave", a)), i.forEach(({
                            event: e,
                            listener: t
                        }) => {
                            r.forEach(r => {
                                var l;
                                null === (l = r.current) || void 0 === l || l.addEventListener(e, t)
                            })
                        }), () => {
                            var e, t;
                            ee && window.removeEventListener("click", es), b && window.removeEventListener("keydown", ec), w && !ee && (null === (e = O.current) || void 0 === e || e.removeEventListener("mouseenter", o), null === (t = O.current) || void 0 === t || t.removeEventListener("mouseleave", a)), i.forEach(({
                                event: e,
                                listener: t
                            }) => {
                                r.forEach(r => {
                                    var l;
                                    null === (l = r.current) || void 0 === l || l.removeEventListener(e, t)
                                })
                            })
                        }
                    }, [Y, X, J, b, s]), (0, d.useEffect)(() => {
                        let t = null != i ? i : "";
                        !t && e && (t = `[data-tooltip-id='${e}']`);
                        let r = new MutationObserver(r => {
                            let l = [];
                            r.forEach(r => {
                                if ("attributes" === r.type && "data-tooltip-id" === r.attributeName && r.target.getAttribute("data-tooltip-id") === e && l.push(r.target), "childList" === r.type && (R && [...r.removedNodes].some(e => {
                                        var t;
                                        return !!(null === (t = null == e ? void 0 : e.contains) || void 0 === t ? void 0 : t.call(e, R)) && (q(!1), et(!1), L(null), !0)
                                    }), t)) try {
                                    let e = [...r.addedNodes].filter(e => 1 === e.nodeType);
                                    l.push(...e.filter(e => e.matches(t))), l.push(...e.flatMap(e => [...e.querySelectorAll(t)]))
                                } catch (e) {}
                            }), l.length && Z(e => [...e, ...l])
                        });
                        return r.observe(document.body, {
                            childList: !0,
                            subtree: !0,
                            attributes: !0,
                            attributeFilter: ["data-tooltip-id"]
                        }), () => {
                            r.disconnect()
                        }
                    }, [e, i, R]);
                    let ef = () => {
                        N ? ei(N) : x ? V.current && ei(V.current) : eg({
                            place: o,
                            offset: a,
                            elementReference: R,
                            tooltipReference: O.current,
                            tooltipArrowReference: C.current,
                            strategy: u,
                            middlewares: f
                        }).then(e => {
                            Q.current && (Object.keys(e.tooltipStyles).length && F(e.tooltipStyles), Object.keys(e.tooltipArrowStyles).length && B(e.tooltipArrowStyles), M(e.place))
                        })
                    };
                    (0, d.useEffect)(() => {
                        ef()
                    }, [$, R, S, k, o, a, u, N]), (0, d.useEffect)(() => {
                        if (!(null == E ? void 0 : E.current)) return () => null;
                        let e = new ResizeObserver(() => {
                            ef()
                        });
                        return e.observe(E.current), () => {
                            e.disconnect()
                        }
                    }, [S, null == E ? void 0 : E.current]), (0, d.useEffect)(() => {
                        var e;
                        let t = document.querySelector(`[id='${n}']`),
                            r = [...J, t];
                        R && r.includes(R) || L(null !== (e = J[0]) && void 0 !== e ? e : t)
                    }, [n, J, R]), (0, d.useEffect)(() => () => {
                        P.current && clearTimeout(P.current), D.current && clearTimeout(D.current)
                    }, []), (0, d.useEffect)(() => {
                        let t = i;
                        if (!t && e && (t = `[data-tooltip-id='${e}']`), t) try {
                            let e = Array.from(document.querySelectorAll(t));
                            Z(e)
                        } catch (e) {
                            Z([])
                        }
                    }, [e, i]);
                    let ep = !g && S && $ && Object.keys(W).length > 0;
                    return Y ? d.createElement(m, {
                        id: e,
                        role: "tooltip",
                        className: y("react-tooltip", ev.tooltip, ev[l], t, `react-tooltip__place-${z}`, {
                            [ev.show]: ep,
                            [ev.fixed]: "fixed" === u,
                            [ev.clickable]: w
                        }),
                        style: { ...k,
                            ...W
                        },
                        ref: O
                    }, S, d.createElement(m, {
                        className: y("react-tooltip-arrow", ev.arrow, r, {
                            [ev.noArrow]: v
                        }),
                        style: H,
                        ref: C
                    })) : null
                },
                eb = ({
                    content: e
                }) => d.createElement("span", {
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                }),
                ek = ({
                    id: e,
                    anchorId: t,
                    anchorSelect: r,
                    content: l,
                    html: n,
                    render: i,
                    className: o,
                    classNameArrow: a,
                    variant: s = "dark",
                    place: c = "top",
                    offset: u = 10,
                    wrapper: f = "div",
                    children: m = null,
                    events: p = ["hover"],
                    openOnClick: h = !1,
                    positionStrategy: y = "absolute",
                    middlewares: x,
                    delayShow: g = 0,
                    delayHide: v = 0,
                    float: w = !1,
                    hidden: b = !1,
                    noArrow: k = !1,
                    clickable: N = !1,
                    closeOnEsc: j = !1,
                    style: _,
                    position: S,
                    isOpen: E,
                    setIsOpen: A,
                    afterShow: T,
                    afterHide: R
                }) => {
                    let [L, O] = (0, d.useState)(l), [C, P] = (0, d.useState)(n), [D, z] = (0, d.useState)(c), [M, W] = (0, d.useState)(s), [F, H] = (0, d.useState)(u), [B, $] = (0, d.useState)(g), [I, Y] = (0, d.useState)(v), [q, G] = (0, d.useState)(w), [V, X] = (0, d.useState)(b), [K, U] = (0, d.useState)(f), [J, Z] = (0, d.useState)(p), [Q, ee] = (0, d.useState)(y), [et, er] = (0, d.useState)(null), {
                        anchorRefs: el,
                        activeAnchor: en
                    } = ey(e), ei = e => null == e ? void 0 : e.getAttributeNames().reduce((t, r) => {
                        var l;
                        return r.startsWith("data-tooltip-") && (t[r.replace(/^data-tooltip-/, "")] = null !== (l = null == e ? void 0 : e.getAttribute(r)) && void 0 !== l ? l : null), t
                    }, {}), eo = e => {
                        let t = {
                            place: e => {
                                z(null != e ? e : c)
                            },
                            content: e => {
                                O(null != e ? e : l)
                            },
                            html: e => {
                                P(null != e ? e : n)
                            },
                            variant: e => {
                                W(null != e ? e : s)
                            },
                            offset: e => {
                                H(null === e ? u : Number(e))
                            },
                            wrapper: e => {
                                U(null != e ? e : f)
                            },
                            events: e => {
                                let t = null == e ? void 0 : e.split(" ");
                                Z(null != t ? t : p)
                            },
                            "position-strategy": e => {
                                ee(null != e ? e : y)
                            },
                            "delay-show": e => {
                                $(null === e ? g : Number(e))
                            },
                            "delay-hide": e => {
                                Y(null === e ? v : Number(e))
                            },
                            float: e => {
                                G(null === e ? w : "true" === e)
                            },
                            hidden: e => {
                                X(null === e ? b : "true" === e)
                            }
                        };
                        Object.values(t).forEach(e => e(null)), Object.entries(e).forEach(([e, r]) => {
                            var l;
                            null === (l = t[e]) || void 0 === l || l.call(t, r)
                        })
                    };
                    (0, d.useEffect)(() => {
                        O(l)
                    }, [l]), (0, d.useEffect)(() => {
                        P(n)
                    }, [n]), (0, d.useEffect)(() => {
                        z(c)
                    }, [c]), (0, d.useEffect)(() => {
                        W(s)
                    }, [s]), (0, d.useEffect)(() => {
                        H(u)
                    }, [u]), (0, d.useEffect)(() => {
                        $(g)
                    }, [g]), (0, d.useEffect)(() => {
                        Y(v)
                    }, [v]), (0, d.useEffect)(() => {
                        G(w)
                    }, [w]), (0, d.useEffect)(() => {
                        X(b)
                    }, [b]), (0, d.useEffect)(() => {
                        ee(y)
                    }, [y]), (0, d.useEffect)(() => {
                        var l;
                        let n = new Set(el),
                            i = r;
                        if (!i && e && (i = `[data-tooltip-id='${e}']`), i) try {
                            document.querySelectorAll(i).forEach(e => {
                                n.add({
                                    current: e
                                })
                            })
                        } catch (e) {
                            console.warn(`[react-tooltip] "${i}" is not a valid CSS selector`)
                        }
                        let o = document.querySelector(`[id='${t}']`);
                        if (o && n.add({
                                current: o
                            }), !n.size) return () => null;
                        let a = null !== (l = null != et ? et : o) && void 0 !== l ? l : en.current,
                            s = new MutationObserver(e => {
                                e.forEach(e => {
                                    var t;
                                    if (!a || "attributes" !== e.type || !(null === (t = e.attributeName) || void 0 === t ? void 0 : t.startsWith("data-tooltip-"))) return;
                                    let r = ei(a);
                                    eo(r)
                                })
                            });
                        if (a) {
                            let e = ei(a);
                            eo(e), s.observe(a, {
                                attributes: !0,
                                childList: !1,
                                subtree: !1
                            })
                        }
                        return () => {
                            s.disconnect()
                        }
                    }, [el, en, et, t, r]);
                    let ea = m,
                        es = (0, d.useRef)(null);
                    if (i) {
                        let e = i({
                            content: null != L ? L : null,
                            activeAnchor: et
                        });
                        ea = e ? d.createElement("div", {
                            ref: es,
                            className: "react-tooltip-content-wrapper"
                        }, e) : null
                    } else L && (ea = L);
                    C && (ea = d.createElement(eb, {
                        content: C
                    }));
                    let ec = {
                        id: e,
                        anchorId: t,
                        anchorSelect: r,
                        className: o,
                        classNameArrow: a,
                        content: ea,
                        contentWrapperRef: es,
                        place: D,
                        variant: M,
                        offset: F,
                        wrapper: K,
                        events: J,
                        openOnClick: h,
                        positionStrategy: Q,
                        middlewares: x,
                        delayShow: B,
                        delayHide: I,
                        float: q,
                        hidden: V,
                        noArrow: k,
                        clickable: N,
                        closeOnEsc: j,
                        style: _,
                        position: S,
                        isOpen: E,
                        setIsOpen: A,
                        afterShow: T,
                        afterHide: R,
                        activeAnchor: et,
                        setActiveAnchor: e => er(e)
                    };
                    return d.createElement(ew, { ...ec
                    })
                };

            function eN(e) {
                let {
                    title: t,
                    icon: r,
                    link: n,
                    newTab: i,
                    disabled: o,
                    onClick: a,
                    className: s
                } = e;
                return (0, l.jsx)("a", {
                    href: n,
                    target: i ? "_blank" : "_self",
                    className: "items-center flex",
                    style: {
                        pointerEvents: o ? "none" : null
                    },
                    onClick: a,
                    children: (0, l.jsxs)("button", {
                        disabled: o,
                        className: " w-full text-2xl justify-start items-center flex pl-2 p-1 enabled:hover:text-primary-blue gap-5 disabled:opacity-50 ".concat(s),
                        children: [r, t]
                    })
                })
            }
            r(1001);
            var ej = e => {
                    let {
                        className: t
                    } = e;
                    (0, u.useMediaQuery)({
                        query: "(max-width: 700px)"
                    });
                    let r = (0, m.useRouter)(),
                        [n, c] = (0, d.useState)(!1),
                        [y, x] = (0, d.useState)(!1),
                        {
                            theme: g,
                            setTheme: v
                        } = (0, i.F)();
                    return (0, d.useEffect)(() => {
                        n ? setTimeout(() => {
                            x(!0)
                        }, 1) : setTimeout(() => {
                            x(!1)
                        }, 300)
                    }, [n]), (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "bg-transparent w-full px-6 py-4 fixed  z-[9999] flex justify-center ".concat(t),
                            children: (0, l.jsxs)("div", {
                                className: "container flex justify-between items-center",
                                children: [(0, l.jsx)("div", {
                                    className: "w-fit flex gap-7",
                                    children: (0, l.jsx)("div", {
                                        children: (0, l.jsx)("a", {
                                            href: "/",
                                            className: "h-10 flex items-center",
                                            children: (0, l.jsx)("img", {
                                                className: "h-full",
                                                src: "dark" == g ? "rmob.png" : "rmob.png"
                                            })
                                        })
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "gap-3 flex flex-col relative",
                                    children: (0, l.jsxs)("div", {
                                        className: "gap-3 flex",
                                        children: [(0, l.jsx)("button", {
                                            onClick: () => {
                                                "dark" == g ? v("light") : v("dark"), console.log(g)
                                            },
                                            // className: "border-2 border-[transparent] rounded-xl p-2 hover:brightness-125",
                                            // children: "dark" == g ? (0, l.jsx)(o.UD2, {
                                            //     className: "w-[30px]  fill-secondary-white",
                                            //     fontSize: "1.5rem"
                                            // }) : (0, l.jsx)(o.pwr, {
                                            //     className: "w-[30px] fill-secondary-black",
                                            //     fontSize: "1.5rem"
                                            // })
                                        }), (0, l.jsx)("button", {
                                            onClick: () => r.push(""),
                                            className: "bg-gradient-to-tr from-primary-teal to-primary-blue from-0% to-80% w-fit rounded-xl p-2 hover:brightness-125 flex items-center gap-1 justify-center",
                                            children: "Button choice"
                                        })]
                                    })
                                })]
                            })
                        }), (0, l.jsxs)("div", {
                            className: "fixed right-0 w-[70%] p-2 sm:w-[300px] h-full dark:bg-secondary-black bg-primary-white z-[10000] visible ".concat(n ? "openanim" : "closeanim", " ").concat(y ? null : "hidden", " ease-in-out duration-300	"),
                            hoverOffset: !0,
                            children: [(0, l.jsxs)("div", {
                                className: "w-full flex justify-between px-8 pt-8",
                                children: [(0, l.jsxs)("a", {
                                    href: "/",
                                    className: "h-10 flex items-center gap-3",
                                    children: [(0, l.jsx)("img", {
                                        className: "h-full",
                                        src: "/icon-01.svg"
                                    }), (0, l.jsx)("div", {
                                        className: "text-2xl  font-semibold relative z-[9999]",
                                        children: (0, l.jsx)("h1", {
                                            className: "text-4xl dark:text-secondary-white text-secondary-black",
                                            children: "SIGIL"
                                        })
                                    })]
                                }), (0, l.jsx)("button", {
                                    className: "rounded-full dark:bg-primary-white/10 bg-primary-blue p-1 dark:hover:bg-primary-white/20 hover:bg-primary-blue/80",
                                    onClick: () => {
                                        c(!1)
                                    },
                                    children: (0, l.jsx)(f.FU5, {
                                        fontSize: "2rem",
                                        className: "fill-primary-white "
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col gap-8 p-8",
                                children: [(0, l.jsx)("div", {
                                    className: "text-lg  dark:text-primary-white/70 text-primary-black",
                                    children: "Navigation"
                                }), (0, l.jsx)(eN, {
                                    className: "dark:text-primary-white text-primary-black",
                                    title: "Pools",
                                    icon: (0, l.jsx)(o.id_, {
                                        className: "dark:fill-primary-white fill-primary-black"
                                    }),
                                    link: "/"
                                }), (0, l.jsx)(eN, {
                                    className: "dark:text-primary-white text-primary-black",
                                    title: "Stake",
                                    icon: (0, l.jsx)(p.PhS, {
                                        className: "dark:fill-primary-white fill-primary-black"
                                    }),
                                    link: "/stake"
                                }), (0, l.jsx)(eN, {
                                    className: "dark:text-primary-white text-primary-black",
                                    title: "Swap",
                                    icon: (0, l.jsx)(f.FPU, {
                                        className: "dark:fill-primary-white fill-primary-black"
                                    }),
                                    link: "/magnet"
                                }), (0, l.jsx)(eN, {
                                    className: "dark:text-primary-white text-primary-black",
                                    title: "Docs",
                                    link: "https://docs.yieldmagnet.io",
                                    icon: (0, l.jsx)(h._de, {
                                        className: "dark:fill-primary-white fill-primary-black"
                                    })
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "absolute bottom-2 flex w-full items-center justify-start pl-6 gap-5 my-4 justify-self-end",
                                children: [(0, l.jsx)("a", {
                                    target: "_blank",
                                    href: "https://t.me/YieldMagnet",
                                    className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                    children: (0, l.jsx)(a.AGi, {
                                        fontSize: "1.5rem",
                                        className: "group-hover:fill-secondary-white fill-secondary-black"
                                    })
                                }), (0, l.jsx)("a", {
                                    target: "_blank",
                                    href: "mailto:contact@yieldmagnet.io",
                                    className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                    children: (0, l.jsx)(s.tzA, {
                                        fontSize: "1.5rem",
                                        className: "group-hover:fill-secondary-white fill-secondary-black"
                                    })
                                }), (0, l.jsx)("a", {
                                    target: "_blank",
                                    href: "https://twitter.com/YieldMagnet",
                                    className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                    children: (0, l.jsx)(o.meP, {
                                        fontSize: "1.5rem",
                                        className: "group-hover:fill-secondary-white fill-secondary-black"
                                    })
                                }), (0, l.jsx)("a", {
                                    target: "_blank",
                                    href: "https://medium.com/@YieldMagnet",
                                    className: "p-2 hover:bg-primary-blue hover:first:fill-red group bg-primary-white rounded-full",
                                    children: (0, l.jsx)(o.aY7, {
                                        fontSize: "1.5rem",
                                        className: "group-hover:fill-secondary-white fill-secondary-black"
                                    })
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            onClick: () => {
                                console.log("adasdas"), c(!1)
                            },
                            className: "absolute dark:bg-secondary-black/95 bg-secondary-white/95 w-full h-full bg-primary-white/1 z-[9999] visible ".concat(n ? "bdanim" : "bdanimshow", " ").concat(y ? null : "hidden", " ease-in-out duration-300	")
                        }), (0, l.jsx)(ek, {
                            id: "coming-soon-tooltip",
                            place: "bottom",
                            style: {
                                backgroundColor: "rgb(255,255,255)",
                                opacity: "1",
                                color: "black",
                                transition: "ease-in-out",
                                transitionDuration: "0.3s",
                                padding: "6px",
                                fontSize: "1.3rem",
                                zIndex: "200000"
                            }
                        }), (0, l.jsx)("style", {
                            children: "\n         .openanim{animation:posi 0.3s}@keyframes posi{from{right:-500px} to{right:0}}\n         .closeanim{animation: close 0.8s; animation-fill-mode:forwards;}@keyframes close{0%{right:0} 100%{right: -100em}}\n         \n         .bdanim{animation:opac 0.3s}@keyframes opac{from{opacity:0} to{opacity:1}}\n    \n         .bdanimshow{animation: show 0.3s; animation-fill-mode:forwards;}@keyframes show{0%{opacity:1}   100%{opacity:0}}\n      "
                        })]
                    })
                },
                e_ = e => {
                    let {
                        children: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                            className: "h-full relative overflow-hidden w-full",
                            children: [(0, l.jsx)(n, {}), (0, l.jsx)(ej, {}), (0, l.jsx)("div", {
                                className: "flex flex-col items-center p-0 mt-24 mb-10 mx-4",
                                children: t
                            }), (0, l.jsx)(c, {})]
                        })
                    })
                }
        },
        1001: function() {},
        1163: function(e, t, r) {
            e.exports = r(6885)
        },
        8357: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return s
                }
            });
            var l = r(7294),
                n = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = l.createContext && l.createContext(n),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, r = 1, l = arguments.length; r < l; r++)
                            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e
                    }).apply(this, arguments)
                },
                a = function(e, t) {
                    var r = {};
                    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && 0 > t.indexOf(l) && (r[l] = e[l]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, l = Object.getOwnPropertySymbols(e); n < l.length; n++) 0 > t.indexOf(l[n]) && Object.prototype.propertyIsEnumerable.call(e, l[n]) && (r[l[n]] = e[l[n]]);
                    return r
                };

            function s(e) {
                return function(t) {
                    return l.createElement(c, o({
                        attr: o({}, e.attr)
                    }, t), function e(t) {
                        return t && t.map(function(t, r) {
                            return l.createElement(t.tag, o({
                                key: r
                            }, t.attr), e(t.child))
                        })
                    }(e.child))
                }
            }

            function c(e) {
                var t = function(t) {
                    var r, n = e.attr,
                        i = e.size,
                        s = e.title,
                        c = a(e, ["attr", "size", "title"]),
                        u = i || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), l.createElement("svg", o({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, n, c, {
                        className: r,
                        style: o(o({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: u,
                        width: u,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), s && l.createElement("title", null, s), e.children)
                };
                return void 0 !== i ? l.createElement(i.Consumer, null, function(e) {
                    return t(e)
                }) : t(n)
            }
        }
    }
]);