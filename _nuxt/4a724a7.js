(window.webpackJsonp = window.webpackJsonp || []).push([
    [139], {
        1565: function(t, e, n) {
            var content = n(2763);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("6f65132f", content, !0, {
                sourceMap: !1
            })
        },
        1566: function(t, e, n) {
            var content = n(2765);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("6e1ca3f2", content, !0, {
                sourceMap: !1
            })
        },
        2762: function(t, e, n) {
            "use strict";
            n(1565)
        },
        2763: function(t, e, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".benefits-item[data-v-52cc05da]{display:flex;flex-direction:column;text-align:center}.benefits-item__icon[data-v-52cc05da]{color:#00d7f4;margin:0 auto .5rem}.benefits-item__header[data-v-52cc05da]{color:#fff;font-size:1.25rem;font-weight:700;line-height:1.15;margin:1rem 0 0}.benefits-item__header[data-v-52cc05da]+ p{margin-top:.75rem}.benefits-item__button[data-v-52cc05da]{color:#aea89b;font-size:1.125rem;line-height:1.5;margin-top:.5rem}@media screen and (max-width:959px){.benefits-item__button[data-v-52cc05da]{margin-top:0}}.benefits-item__button[data-v-52cc05da]:hover{color:#00d7f4}", ""]), r.locals = {}, t.exports = r
        },
        2764: function(t, e, n) {
            "use strict";
            n(1566)
        },
        2765: function(t, e, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".benefits[data-v-3fd5e78a]{grid-gap:2rem;display:grid;gap:2rem;grid-template-columns:repeat(3,1fr)}@media screen and (max-width:959px){.benefits[data-v-3fd5e78a]{display:flex;flex-direction:column;gap:3rem}}", ""]), r.locals = {}, t.exports = r
        },
        2916: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(3),
                o = (n(31), n(175), n(23), n(14), n(18), n(8), n(26), n(19), n(27), n(32)),
                c = n(9),
                f = (n(47), n(844), {
                    name: "landing-benefits-item",
                    icons: {
                        mdiChevronRight: c.r
                    },
                    props: {
                        benefit: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        link: function() {
                            return this.benefit.to ? {
                                attrs: {
                                    to: this.localePath(this.benefit.to)
                                },
                                component: "nuxt-link"
                            } : this.benefit.href ? {
                                attrs: {
                                    href: this.benefit.href,
                                    target: "_blank"
                                },
                                component: "a"
                            } : null
                        }
                    }
                }),
                l = (n(2762), n(2));

            function d(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function m(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? d(Object(source), !0).forEach((function(e) {
                        Object(r.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var h = {
                    name: "landing-benefits",
                    serverCacheKey: function(t) {
                        return "landing-benefits:".concat(t.lang, "-").concat(t.game)
                    },
                    components: {
                        LandingBenefitsItem: Object(l.a)(f, (function() {
                            var t = this,
                                e = t._self._c;
                            return e("div", {
                                staticClass: "benefits-item"
                            }, [e("fa-icon", {
                                staticClass: "benefits-item__icon",
                                attrs: {
                                    icon: t.benefit.icon,
                                    size: "2x"
                                }
                            }), t._v(" "), e("span", {
                                staticClass: "benefits-item__header",
                                domProps: {
                                    innerHTML: t._s(t.benefit.header)
                                }
                            }), t._v(" "), e("p", {
                                domProps: {
                                    innerHTML: t._s(t.benefit.description)
                                }
                            }), t._v(" "), t.link ? e(t.link.component, t._b({
                                tag: "component",
                                staticClass: "benefits-item__button"
                            }, "component", t.link.attrs, !1), [e("span", [t._v(t._s(t.benefit.buttonText))]), t._v(" "), e("fa-icon", {
                                attrs: {
                                    icon: ["mdi", "chevron-right"]
                                }
                            })], 1) : t._e()], 1)
                        }), [], !1, null, "52cc05da", null).exports
                    },
                    icons: {
                        mdiCart: c.j,
                        mdiCurrencyUsd: c.x,
                        mdiSwapHorizontal: c.db
                    },
                    props: {
                        lang: String,
                        game: Number
                    },
                    computed: m(m({}, Object(o.b)("storage", ["gameName"])), {}, {
                        benefits: function() {
                            return [{
                                header: this.$t("landing.".concat(this.gameName, ".benefits.trade.title")),
                                description: this.$t("landing.".concat(this.gameName, ".benefits.trade.description")),
                                icon: ["mdi", "swap-horizontal"],
                                buttonText: this.$t("landing.".concat(this.gameName, ".benefits.trade.action")),
                                to: "/trade"
                            }, {
                                header: this.$t("landing.".concat(this.gameName, ".benefits.sell.title")),
                                description: this.$t("landing.".concat(this.gameName, ".benefits.sell.description")),
                                icon: ["mdi", "currency-usd"],
                                buttonText: this.$t("landing.".concat(this.gameName, ".benefits.sell.action")),
                                href: "https://skincashier.com"
                            }, {
                                header: this.$t("landing.".concat(this.gameName, ".benefits.buy.title")),
                                description: this.$t("landing.".concat(this.gameName, ".benefits.buy.description")),
                                icon: ["mdi", "cart"],
                                buttonText: this.$t("landing.".concat(this.gameName, ".benefits.buy.action")),
                                to: "/trade"
                            }]
                        }
                    })
                },
                _ = (n(2764), Object(l.a)(h, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "benefits"
                    }, t._l(t.benefits, (function(t, n) {
                        return e("landing-benefits-item", {
                            key: n,
                            attrs: {
                                benefit: t
                            }
                        })
                    })), 1)
                }), [], !1, null, "3fd5e78a", null));
            e.default = _.exports
        },
        844: function(t, e, n) {
            "use strict";
            var r = n(5),
                o = n(291);
            r({
                target: "String",
                proto: !0,
                forced: n(292)("link")
            }, {
                link: function(t) {
                    return o(this, "a", "href", t)
                }
            })
        }
    }
]);