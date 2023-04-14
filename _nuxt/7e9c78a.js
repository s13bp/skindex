(window.webpackJsonp = window.webpackJsonp || []).push([
    [76], {
        2928: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(89),
                o = n(1),
                c = (n(15), n(864)),
                l = n(866),
                d = n(840),
                f = n(841),
                m = n(799),
                h = ["params", "error"],
                v = {
                    name: "terms-of-service",
                    components: {
                        BaseStatic: f.a,
                        LayoutContainer: d.a,
                        BaseTag: m.a,
                        LayoutHeader: l.a
                    },
                    asyncData: function(t) {
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var n, o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.params, n = t.error, o = Object(r.a)(t, h), e.prev = 1, e.next = 4, Object(c.a)(o, "static/terms-of-service");
                                    case 4:
                                        return l = e.sent, e.abrupt("return", {
                                            document: l
                                        });
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(1), n({
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
                    head: {
                        meta: [{
                            hid: "robots",
                            name: "robots",
                            content: "noindex"
                        }]
                    },
                    computed: {
                        updatedAt: function() {
                            var t = new Date(this.document.updated || this.document.updatedAt);
                            return new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                            }).format(t)
                        }
                    }
                },
                y = n(2),
                component = Object(y.a)(v, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "static"
                    }, [e("layout-header", {
                        attrs: {
                            title: t.document.title,
                            tag: "h1",
                            tall: ""
                        },
                        scopedSlots: t._u([{
                            key: "trailing",
                            fn: function() {
                                return [e("base-tag", {
                                    attrs: {
                                        large: "",
                                        "no-icon": "",
                                        theme: "transparent"
                                    }
                                }, [t._v("Last updated: " + t._s(t.updatedAt))])]
                            },
                            proxy: !0
                        }])
                    }), t._v(" "), e("layout-container", [e("base-static", {
                        attrs: {
                            narrow: "",
                            document: t.document
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        771: function(t, e, n) {
            var content = n(801);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("83362ac2", content, !0, {
                sourceMap: !1
            })
        },
        789: function(t, e, n) {
            var content = n(821);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("b0e53ace", content, !0, {
                sourceMap: !1
            })
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
        799: function(t, e, n) {
            "use strict";
            var r = n(3),
                o = (n(36), n(276)),
                c = n(9),
                l = {
                    success: ["mdi", "check-bold"],
                    neutral: ["fad", "spinner-third"],
                    error: ["mdi", "close-thick"],
                    warning: ["mdi", "alert-circle-outline"]
                },
                d = {
                    name: "base-tag",
                    icons: {
                        faSpinnerThird: o.i,
                        mdiAlertCircleOutline: c.b,
                        mdiCheckBold: c.o,
                        mdiCloseThick: c.u
                    },
                    props: {
                        icon: {
                            type: Array,
                            default: null
                        },
                        theme: {
                            type: String,
                            default: "neutral",
                            validator: function(t) {
                                return ["success", "neutral", "error", "warning", "transparent"].includes(t)
                            }
                        },
                        noIcon: {
                            type: Boolean,
                            default: !1
                        },
                        large: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        classList: function() {
                            var t;
                            return t = {}, Object(r.a)(t, this.theme, !0), Object(r.a)(t, "large", this.large), Object(r.a)(t, "no-icon", this.noIcon), Object(r.a)(t, "icon-only", !this.$slots.default), t
                        },
                        iconToShow: function() {
                            return this.noIcon ? null : this.icon || l[this.theme]
                        },
                        spin: function() {
                            return this.iconToShow && "spinner-third" === this.iconToShow[1]
                        }
                    }
                },
                f = (n(800), n(2)),
                component = Object(f.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tag",
                        class: t.classList
                    }, [t.iconToShow ? e("fa-icon", {
                        attrs: {
                            icon: t.iconToShow,
                            spin: t.spin
                        }
                    }) : t._e(), t._v(" "), e("span", [t._t("default")], 2)], 1)
                }), [], !1, null, "665b5fac", null);
            e.a = component.exports
        },
        800: function(t, e, n) {
            "use strict";
            n(771)
        },
        801: function(t, e, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".tag[data-v-665b5fac]{align-items:center;border-radius:.25rem;display:inline-flex;font-size:.75rem;gap:.5rem;height:1.75rem;padding:.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tag.icon-only[data-v-665b5fac]{justify-content:center;padding:0;width:1.75rem}.tag.icon-only.large[data-v-665b5fac]{width:2.25rem}.tag.large[data-v-665b5fac]{font-size:.875rem;height:2.25rem}.tag.success[data-v-665b5fac]{background-color:rgba(106,154,22,.2);color:#81bd1b}.tag.neutral[data-v-665b5fac]{background-color:hsla(40,5%,46%,.2);color:#aea89b}.tag.error[data-v-665b5fac]{background-color:rgba(228,99,100,.2);color:#e46364}.tag.warning[data-v-665b5fac]{background-color:rgba(203,165,61,.2);color:#cba53d}.tag.transparent[data-v-665b5fac]{border:1px solid #56524d;color:#fcf5e8}.tag>span[data-v-665b5fac]{line-height:1}.tag>span[data-v-665b5fac]:empty{display:none}", ""]), r.locals = {}, t.exports = r
        },
        808: function(t, e, n) {
            var content = n(855);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("78b3e3f5", content, !0, {
                sourceMap: !1
            })
        },
        820: function(t, e, n) {
            "use strict";
            n(789)
        },
        821: function(t, e, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".layout-container[data-v-77f14a66]{background-color:#302e2a;padding:2rem 0}@media screen and (max-width:959px){.layout-container[data-v-77f14a66]{padding:1.5rem 0}}.layout-container.sidebar .container[data-v-77f14a66]{display:flex;gap:2rem}@media screen and (max-width:959px){.layout-container.sidebar .container[data-v-77f14a66]{flex-direction:column}}", ""]), r.locals = {}, t.exports = r
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
        840: function(t, e, n) {
            "use strict";
            var r = {
                    name: "layout-container",
                    computed: {
                        hasSidebar: function() {
                            return !!this.$slots.sidebar
                        }
                    }
                },
                o = (n(820), n(2)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "layout-container",
                        class: {
                            sidebar: t.hasSidebar
                        }
                    }, [e("div", {
                        staticClass: "container"
                    }, [t._t("sidebar"), t._v(" "), t._t("default")], 2)])
                }), [], !1, null, "77f14a66", null);
            e.a = component.exports
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
                o = (n(830), n(2)),
                component = Object(o.a)(r, (function() {
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
        854: function(t, e, n) {
            "use strict";
            n(808)
        },
        855: function(t, e, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, '.layout-header[data-v-f95090f4]{--stroke-color:#302e2a;background-color:#21201e;overflow:hidden}.layout-header__container[data-v-f95090f4]{align-items:center;border-top:1px solid #3f3c38;display:flex;justify-content:space-between;padding-bottom:2rem;padding-top:2rem;position:relative;z-index:1}.layout-header.tall .layout-header__container[data-v-f95090f4]{padding-bottom:4rem;padding-top:4rem}@media screen and (max-width:959px){.layout-header__container[data-v-f95090f4]:after{background:linear-gradient(270deg,#21201e .75rem,rgba(48,46,42,0));content:"";height:100%;position:absolute;right:0;top:0;width:3rem;z-index:-1}}.layout-header__title[data-v-f95090f4]{color:#fff;font-size:2.25rem;font-weight:400;margin:0}@media screen and (max-width:959px){.layout-header__title[data-v-f95090f4]{margin-left:1rem}}.layout-header__stroked[data-v-f95090f4]{left:0;position:absolute;top:50%;transform:translateY(-55%);z-index:-1}@media screen and (max-width:959px){.layout-header__stroked[data-v-f95090f4]{left:1rem;overflow:hidden;white-space:nowrap}}', ""]), r.locals = {}, t.exports = r
        },
        864: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            }));
            var r = n(53),
                o = n(1);
            n(15), n(14), n(47), n(8), n(865), n(52), n(33), n(34), n(31), n(82);

            function c(t) {
                var e, n, r, o = 2;
                for ("undefined" != typeof Symbol && (n = Symbol.asyncIterator, r = Symbol.iterator); o--;) {
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
            var d = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return e ? "".concat(t, "__").concat(e) : t
                },
                f = function(t, e, n) {
                    return [t, d(e, n)]
                };

            function m(t, e, n, r) {
                return h.apply(this, arguments)
            }

            function h() {
                return (h = Object(o.a)(regeneratorRuntime.mark((function t(e, n, o, l) {
                    var d, content, m, h, y, w, x, _, path, j;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                d = e.$i18n || e.app.i18n, content = e.$content || e.content, (m = []).push(f(d.locale, n, o)), d.locale !== d.fallbackLocale && m.push(f(d.fallbackLocale, n, o)), l && l !== o && (m.push(f(d.locale, n, l)), d.locale !== d.fallbackLocale && m.push(f(d.fallbackLocale, n, l))), h = !1, y = !1, t.prev = 8, x = c(m);
                            case 10:
                                return t.next = 12, x.next();
                            case 12:
                                if (!(h = !(_ = t.sent).done)) {
                                    t.next = 22;
                                    break
                                }
                                return path = _.value, t.next = 16, v.apply(void 0, [content].concat(Object(r.a)(path)));
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
                return y = Object(o.a)(regeneratorRuntime.mark((function t(content) {
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
        },
        866: function(t, e, n) {
            "use strict";
            n(23), n(14), n(18), n(8), n(26), n(19), n(27);
            var r = n(3),
                o = n(32),
                c = n(278);

            function l(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }
            var d = {
                    name: "layout-header",
                    components: {
                        BaseTextStroke: n(288).a,
                        BaseHeader: c.a
                    },
                    props: {
                        tag: {
                            type: String,
                            required: !0,
                            default: "span"
                        },
                        tall: {
                            type: Boolean,
                            default: !1
                        },
                        title: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: function(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = null != arguments[i] ? arguments[i] : {};
                            i % 2 ? l(Object(source), !0).forEach((function(e) {
                                Object(r.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(o.b)("screen", ["mdUp"]))
                },
                f = d,
                m = (n(854), n(2)),
                component = Object(m.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "layout-header",
                        class: {
                            tall: t.tall
                        }
                    }, [e("div", {
                        staticClass: "layout-header__container container"
                    }, [e(t.tag, {
                        tag: "component",
                        staticClass: "layout-header__title"
                    }, [t._v(t._s(t.title))]), t._v(" "), e("base-text-stroke", {
                        staticClass: "layout-header__stroked",
                        attrs: {
                            small: ""
                        }
                    }, [t._v(t._s(t.title))]), t._v(" "), t.mdUp ? t._t("trailing") : t._e()], 2)])
                }), [], !1, null, "f95090f4", null);
            e.a = component.exports
        }
    }
]);