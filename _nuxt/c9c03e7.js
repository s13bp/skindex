(window.webpackJsonp = window.webpackJsonp || []).push([
    [147], {
        1051: function(t, e, n) {
            "use strict";
            n(938)
        },
        1052: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, '.cta-bottom[data-v-5254e95a]{align-items:center;box-shadow:0 4px 6px -2px rgba(0,0,0,.05),0 10px 15px -3px rgba(0,0,0,.1);display:flex;height:20rem;padding:3rem 0;position:relative}@media screen and (max-width:1169px){.cta-bottom[data-v-5254e95a]{height:auto;justify-content:center;padding:1rem 0}.cta-bottom[data-v-5254e95a] .base-header{font-size:1.875rem}}.cta-bottom__body[data-v-5254e95a]{padding-left:4.625rem;z-index:5}@media screen and (max-width:1169px){.cta-bottom__body[data-v-5254e95a]{padding:2rem;text-align:center}}@media screen and (max-width:959px){.cta-bottom__body[data-v-5254e95a]{padding:.75rem 1rem}}@media screen and (max-width:599px){.cta-bottom__body[data-v-5254e95a]{padding:.5rem}.cta-bottom__body[data-v-5254e95a] br{content:""}.cta-bottom__body[data-v-5254e95a] br:after{content:" "}}', ""]), o.locals = {}, t.exports = o
        },
        1612: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(3),
                r = (n(8), n(33), n(34), n(31), n(175), n(23), n(14), n(18), n(26), n(19), n(27), n(32)),
                c = n(88),
                d = n(278),
                m = n(176);

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

            function f(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? l(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var h = function() {
                    return n.e(120).then(n.bind(null, 2952))
                },
                v = function() {
                    return n.e(121).then(n.bind(null, 2953))
                },
                y = function() {
                    return n.e(111).then(n.bind(null, 2954))
                },
                _ = {
                    name: "landing-cta-bottom",
                    serverCacheKey: function(t) {
                        return "landing-cta-bottom:".concat(t.lang, "-").concat(t.game)
                    },
                    components: {
                        BaseButton: m.a,
                        BaseHeader: d.a
                    },
                    props: {
                        lang: String,
                        game: Number
                    },
                    computed: f(f({}, Object(r.b)("storage", ["gameName"])), {}, {
                        layerComponent: function() {
                            switch (this.game) {
                                case c.b.RUST:
                                    return v;
                                case c.b.DOTA2:
                                    return y;
                                case c.b.CSGO:
                                default:
                                    return h
                            }
                        }
                    })
                },
                x = (n(1051), n(2)),
                component = Object(x.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "cta-bottom"
                    }, [e("div", {
                        staticClass: "cta-bottom__body"
                    }, [e("base-header", {
                        attrs: {
                            content: t.$t("landing.".concat(t.gameName, ".cta-bottom.title")),
                            tag: "h2"
                        }
                    }), t._v(" "), e("p", {
                        domProps: {
                            innerHTML: t._s(t.$t("landing.".concat(t.gameName, ".cta-bottom.description")))
                        }
                    }), t._v(" "), e("base-button", {
                        attrs: {
                            to: t.localePath("/trade"),
                            large: ""
                        }
                    }, [t._v(t._s(t.$t("landing.".concat(t.gameName, ".cta-bottom.button-text"))))])], 1), t._v(" "), e(t.layerComponent, {
                        key: t.game,
                        tag: "component"
                    })], 1)
                }), [], !1, null, "5254e95a", null);
            e.default = component.exports
        },
        938: function(t, e, n) {
            var content = n(1052);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("a03cfa48", content, !0, {
                sourceMap: !1
            })
        }
    }
]);