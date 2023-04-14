(window.webpackJsonp = window.webpackJsonp || []).push([
    [148], {
        1561: function(e, t, n) {
            var content = n(2755);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(7).default)("64764cf3", content, !0, {
                sourceMap: !1
            })
        },
        2754: function(e, t, n) {
            "use strict";
            n(1561)
        },
        2755: function(e, t, n) {
            var r = n(6)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".cta-middle[data-v-137f24ee]{--asset-height-mobile:12rem;align-items:center;display:flex;height:23rem;justify-content:center;position:relative;z-index:1}@media screen and (max-width:959px){.cta-middle[data-v-137f24ee]{height:auto;padding-top:var(--asset-height-mobile)}.cta-middle.dota2[data-v-137f24ee]{padding-top:0}}.cta-middle__body[data-v-137f24ee]{text-align:center;z-index:1}", ""]), r.locals = {}, e.exports = r
        },
        2955: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(3),
                c = (n(8), n(33), n(34), n(31), n(175), n(23), n(14), n(18), n(26), n(19), n(27), n(32)),
                o = n(88),
                d = n(278),
                l = n(176);

            function m(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function f(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? m(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var h = function() {
                    return n.e(122).then(n.bind(null, 2962))
                },
                v = function() {
                    return n.e(123).then(n.bind(null, 2963))
                },
                O = function() {
                    return n.e(135).then(n.bind(null, 2964))
                },
                y = {
                    name: "landing-cta-middle",
                    serverCacheKey: function(e) {
                        return "landing-cta-middle:".concat(e.lang, "-").concat(e.game)
                    },
                    components: {
                        BaseButton: l.a,
                        BaseHeader: d.a
                    },
                    props: {
                        lang: String,
                        game: Number
                    },
                    computed: f(f({}, Object(c.b)("storage", ["gameName"])), {}, {
                        layerComponent: function() {
                            switch (this.game) {
                                case o.b.RUST:
                                    return v;
                                case o.b.DOTA2:
                                    return O;
                                case o.b.CSGO:
                                default:
                                    return h
                            }
                        }
                    })
                },
                j = (n(2754), n(2)),
                component = Object(j.a)(y, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "cta-middle",
                        class: [e.gameName]
                    }, [t("div", {
                        staticClass: "cta-middle__body"
                    }, [t("base-header", {
                        attrs: {
                            content: e.$t("landing.".concat(e.gameName, ".cta-middle.title")),
                            center: "",
                            tag: "span"
                        }
                    }), e._v(" "), t("p", {
                        domProps: {
                            innerHTML: e._s(e.$t("landing.".concat(e.gameName, ".cta-middle.description")))
                        }
                    }), e._v(" "), t("base-button", {
                        attrs: {
                            to: e.localePath("/trade"),
                            large: ""
                        }
                    }, [e._v(e._s(e.$t("landing.".concat(e.gameName, ".cta-middle.button-text"))))])], 1), e._v(" "), t(e.layerComponent, {
                        key: e.game,
                        tag: "component"
                    })], 1)
                }), [], !1, null, "137f24ee", null);
            t.default = component.exports
        }
    }
]);