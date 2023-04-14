(window.webpackJsonp = window.webpackJsonp || []).push([
    [68], {
        2923: function(t, e, n) {
            "use strict";
            n.r(e);
            n(23), n(14), n(18), n(8), n(26), n(19), n(27);
            var r = n(3),
                c = n(89),
                o = n(1),
                l = (n(15), n(32)),
                f = n(864),
                d = n(841),
                m = ["params", "error"];

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var v = {
                    components: {
                        BaseStatic: d.a
                    },
                    asyncData: function(t) {
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var n, r, o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.params, r = t.error, o = Object(c.a)(t, m), e.prev = 1, e.next = 4, Object(f.a)(o, "help/".concat(n.slug));
                                    case 4:
                                        return l = e.sent, e.abrupt("return", {
                                            document: l
                                        });
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), r({
                                            statusCode: 404
                                        });
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 8]
                            ])
                        })))()
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? h(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(l.b)("screen", ["mdUp"]))
                },
                y = v,
                w = n(2),
                component = Object(w.a)(y, (function() {
                    return (0, this._self._c)("base-static", {
                        attrs: {
                            document: this.document
                        }
                    })
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        795: function(t, e, n) {
            var content = n(831);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("ed3ef490", content, !0, {
                sourceMap: !1
            })
        },
        830: function(t, e, n) {
            "use strict";
            n(795)
        },
        831: function(t, e, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".static-content[data-v-c02117fa]{padding:1rem 0}.static-content.narrow[data-v-c02117fa]{margin:0 auto;max-width:60ch;text-align:justify}.static-content[data-v-c02117fa] h1,.static-content[data-v-c02117fa] h2,.static-content[data-v-c02117fa] h3,.static-content[data-v-c02117fa] h4{color:#fff;margin-top:0}.static-content[data-v-c02117fa] h1:not(:first-child),.static-content[data-v-c02117fa] h2:not(:first-child),.static-content[data-v-c02117fa] h3:not(:first-child),.static-content[data-v-c02117fa] h4:not(:first-child){margin-top:1.5rem;padding-top:1rem}.static-content[data-v-c02117fa] h1{font-size:1.875rem;font-weight:500}.static-content[data-v-c02117fa] h2{font-size:1.125rem;font-weight:400}.static-content[data-v-c02117fa] h3{color:#ece6da;font-size:1rem;font-weight:400;margin-bottom:.5rem}.static-content[data-v-c02117fa] h3+p{margin-top:.5rem}.static-content[data-v-c02117fa] h3:not(:first-child){margin-top:.75rem;padding-top:.75rem}.static-content[data-v-c02117fa] li,.static-content[data-v-c02117fa] p{color:#aea89b;font-size:1rem;line-height:1.5}.static-content[data-v-c02117fa] li+li{margin-top:.75rem}.static-content[data-v-c02117fa] li::marker{color:#fcf5e8}.static-content[data-v-c02117fa] img{border-radius:.75rem;box-shadow:0 10px 10px -5px rgba(0,0,0,.04),0 20px 25px -5px rgba(0,0,0,.1);display:block;margin-top:2rem;max-width:100%}.static-content[data-v-c02117fa] img:last-child{margin-bottom:2rem}.static-content[data-v-c02117fa] img+em{color:#7b776f;display:block;font-size:.75rem;font-style:normal;margin-bottom:1.5rem;margin-top:.5rem}", ""]), r.locals = {}, t.exports = r
        },
        841: function(t, e, n) {
            "use strict";
            var r = {
                    name: "base-static",
                    props: {
                        document: {
                            type: Object,
                            default: null
                        },
                        narrow: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                c = (n(830), n(2)),
                component = Object(c.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "static-content",
                        class: {
                            narrow: t.narrow
                        }
                    }, [t._t("default", (function() {
                        return [t.document ? e("nuxt-content", {
                            attrs: {
                                document: t.document
                            }
                        }) : t._e()]
                    }))], 2)
                }), [], !1, null, "c02117fa", null);
            e.a = component.exports
        },
        864: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            }));
            var r = n(53),
                c = n(1);
            n(15), n(14), n(47), n(8), n(865), n(52), n(33), n(34), n(31), n(82);

            function o(t) {
                var e, n, r, c = 2;
                for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); c--;) {
                    if (n && null != (e = t[n])) return e.call(t);
                    if (r && null != (e = t[r])) return new l(e.call(t));
                    n = "@@asyncIterator", r = "@@iterator"
                }
                throw new TypeError("Object is not async iterable")
            }

            function l(s) {
                function t(t) {
                    if (Object(t) !== t) return Promise.reject(new TypeError(t + " is not an object."));
                    var e = t.done;
                    return Promise.resolve(t.value).then((function(t) {
                        return {
                            value: t,
                            done: e
                        }
                    }))
                }
                return l = function(s) {
                    this.s = s, this.n = s.next
                }, l.prototype = {
                    s: null,
                    n: null,
                    next: function() {
                        return t(this.n.apply(this.s, arguments))
                    },
                    return: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.resolve({
                            value: e,
                            done: !0
                        }) : t(n.apply(this.s, arguments))
                    },
                    throw: function(e) {
                        var n = this.s.return;
                        return void 0 === n ? Promise.reject(e) : t(n.apply(this.s, arguments))
                    }
                }, new l(s)
            }
            var f = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return e ? "".concat(t, "__").concat(e) : t
                },
                d = function(t, e, n) {
                    return [t, f(e, n)]
                };

            function m(t, e, n, r) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = Object(c.a)(regeneratorRuntime.mark((function t(e, n, c, l) {
                    var f, content, m, h, y, w, x, O, path, j;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                f = e.$i18n || e.app.i18n, content = e.$content || e.content, (m = []).push(d(f.locale, n, c)), f.locale !== f.fallbackLocale && m.push(d(f.fallbackLocale, n, c)), l && l !== c && (m.push(d(f.locale, n, l)), f.locale !== f.fallbackLocale && m.push(d(f.fallbackLocale, n, l))), h = !1, y = !1, t.prev = 8, x = o(m);
                            case 10:
                                return t.next = 12, x.next();
                            case 12:
                                if (!(h = !(O = t.sent).done)) {
                                    t.next = 22;
                                    break
                                }
                                return path = O.value, t.next = 16, v.apply(void 0, [content].concat(Object(r.a)(path)));
                            case 16:
                                if (!(j = t.sent)) {
                                    t.next = 19;
                                    break
                                }
                                return t.abrupt("return", j);
                            case 19:
                                h = !1, t.next = 10;
                                break;
                            case 22:
                                t.next = 28;
                                break;
                            case 24:
                                t.prev = 24, t.t0 = t.catch(8), y = !0, w = t.t0;
                            case 28:
                                if (t.prev = 28, t.prev = 29, !h || null == x.return) {
                                    t.next = 33;
                                    break
                                }
                                return t.next = 33, x.return();
                            case 33:
                                if (t.prev = 33, !y) {
                                    t.next = 36;
                                    break
                                }
                                throw w;
                            case 36:
                                return t.finish(33);
                            case 37:
                                return t.finish(28);
                            case 38:
                                throw new Error("Not found");
                            case 39:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [8, 24, 28, 38],
                        [29, , 33, 37]
                    ])
                })))).apply(this, arguments)
            }

            function v(t) {
                return y.apply(this, arguments)
            }

            function y() {
                return y = Object(c.a)(regeneratorRuntime.mark((function t(content) {
                    var e, path, n, r = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                for (e = r.length, path = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) path[n - 1] = r[n];
                                return t.prev = 1, t.next = 4, content.apply(void 0, path).fetch();
                            case 4:
                                return t.abrupt("return", t.sent);
                            case 7:
                                t.prev = 7, t.t0 = t.catch(1), console.warn("Failed to load content from ".concat(path.join("/"), " file"));
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t, null, [
                        [1, 7]
                    ])
                }))), y.apply(this, arguments)
            }
        },
        865: function(t, e, n) {
            n(289)("asyncIterator")
        }
    }
]);