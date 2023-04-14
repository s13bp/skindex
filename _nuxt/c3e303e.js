(window.webpackJsonp = window.webpackJsonp || []).push([
    [141], {
        1569: function(t, e, n) {
            var content = n(2771);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("1d81a840", content, !0, {
                sourceMap: !1
            })
        },
        2770: function(t, e, n) {
            "use strict";
            n(1569)
        },
        2771: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, '.landing-cta-cs2[data-v-7e6b6f57]{padding:3.5rem 0;position:relative;z-index:1}@media screen and (max-width:959px){.landing-cta-cs2[data-v-7e6b6f57]{padding:3rem 0}}.landing-cta-cs2[data-v-7e6b6f57]:before{background-color:#191816;content:"";height:100%;left:50%;margin-left:-50vw;position:absolute;top:0;width:100vw;z-index:-5}.landing-cta-cs2__body[data-v-7e6b6f57]{max-width:750px}.landing-cta-cs2__body[data-v-7e6b6f57] p{color:#aea89b;font-size:.875rem;font-weight:500}.landing-cta-cs2__title[data-v-7e6b6f57]{color:#fcf5e8;font-size:2.25rem;font-weight:600;margin:0}.landing-cta-cs2__subtitle[data-v-7e6b6f57]{color:#ece6da;font-size:1.125rem;font-weight:500;margin:.75rem 0 0}.landing-cta-cs2__content[data-v-7e6b6f57]{margin:1rem 0 2rem}@media screen and (max-width:1169px){.landing-cta-cs2__content[data-v-7e6b6f57]{max-width:660px}}.landing-cta-cs2__image-container[data-v-7e6b6f57]{bottom:0;left:0;left:50%;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transform:translateX(-50%);width:100vw;z-index:-1}@media screen and (max-width:959px){.landing-cta-cs2__image-container[data-v-7e6b6f57]{display:none}}.landing-cta-cs2__image[data-v-7e6b6f57]{height:100%;left:calc(50% - 100px);overflow:hidden;position:absolute;top:0}@media screen and (max-width:1169px){.landing-cta-cs2__image[data-v-7e6b6f57]{left:50%}}.landing-cta-cs2__image--main[data-v-7e6b6f57]{filter:drop-shadow(20px 25px 30px rgba(0,0,0,.5));z-index:2}.landing-cta-cs2__image--blur[data-v-7e6b6f57]{animation:image-7e6b6f57 5s ease-in-out infinite alternate;filter:blur(100px);z-index:1}@keyframes image-7e6b6f57{0%{filter:hue-rotate(-5deg) blur(100px);transform:translateZ(0) rotateY(0deg) rotate(0deg)}to{filter:hue-rotate(45deg) blur(100px);transform:translate3d(5%,10%,-50px) rotateY(12deg) rotate(-12deg) scale(1.2)}}', ""]), c.locals = {}, t.exports = c
        },
        2956: function(t, e, n) {
            "use strict";
            n.r(e);
            var c = n(176),
                o = {
                    name: "landing-cta-cs2",
                    components: {
                        BaseImage: n(786).a,
                        BaseButton: c.a
                    }
                },
                l = (n(2770), n(2)),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "landing-cta-cs2"
                    }, [e("div", {
                        staticClass: "landing-cta-cs2__body"
                    }, [e("h2", {
                        staticClass: "landing-cta-cs2__title"
                    }, [t._v(t._s(t.$t("landing.cta-cs2.title")))]), t._v(" "), e("h3", {
                        staticClass: "landing-cta-cs2__subtitle"
                    }, [t._v(t._s(t.$t("landing.cta-cs2.subtitle")))]), t._v(" "), e("div", {
                        staticClass: "landing-cta-cs2__content"
                    }, t._l(t.$t("landing.cta-cs2.description"), (function(p, n) {
                        return e("p", {
                            key: n,
                            domProps: {
                                innerHTML: t._s(p)
                            }
                        })
                    })), 0), t._v(" "), e("base-button", {
                        staticClass: "landing-cta-cs2__button",
                        attrs: {
                            to: t.localePath("/trade"),
                            large: ""
                        }
                    }, [t._v(t._s(t.$t("landing.cta-cs2.button-text")))])], 1), t._v(" "), e("div", {
                        staticClass: "landing-cta-cs2__image-container"
                    }, [e("base-image", {
                        staticClass: "landing-cta-cs2__image landing-cta-cs2__image--blur",
                        attrs: {
                            alt: "Counter Strike 2 Skins",
                            lazy: "",
                            src: "/images/cs2-assets@1x.png",
                            srcset: "/images/cs2-assets@2x.png 2x, /images/cs2-assets@3x.png 3x"
                        }
                    }), t._v(" "), e("base-image", {
                        staticClass: "landing-cta-cs2__image landing-cta-cs2__image--main",
                        attrs: {
                            alt: "Counter Strike 2 Skins",
                            lazy: "",
                            src: "/images/cs2-assets@1x.png",
                            srcset: "/images/cs2-assets@2x.png 2x, /images/cs2-assets@3x.png 3x"
                        }
                    })], 1)])
                }), [], !1, null, "7e6b6f57", null);
            e.default = component.exports
        },
        786: function(t, e, n) {
            "use strict";
            var c = {
                    name: "base-image",
                    props: {
                        src: {
                            type: String,
                            required: !0
                        },
                        alt: {
                            type: String,
                            required: !0
                        },
                        lazy: {
                            type: Boolean,
                            default: !1
                        },
                        async: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            loaded: !1
                        }
                    },
                    computed: {
                        params: function() {
                            return {
                                loading: this.lazy ? "lazy" : "eager",
                                decoding: this.async ? "async" : void 0
                            }
                        }
                    },
                    methods: {
                        onLoad: function() {
                            this.loaded = !0, this.$emit("load")
                        }
                    }
                },
                o = (n(822), n(2)),
                component = Object(o.a)(c, (function() {
                    var t = this;
                    return (0, t._self._c)("img", t._b({
                        staticClass: "image",
                        class: {
                            loaded: t.loaded
                        },
                        attrs: {
                            alt: t.alt,
                            src: t.src
                        },
                        on: {
                            load: t.onLoad
                        }
                    }, "img", t.params, !1))
                }), [], !1, null, "dcc77120", null);
            e.a = component.exports
        },
        790: function(t, e, n) {
            var content = n(823);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("43c971b6", content, !0, {
                sourceMap: !1
            })
        },
        822: function(t, e, n) {
            "use strict";
            n(790)
        },
        823: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, "img[data-v-dcc77120]{display:block;opacity:0;pointer-events:none;transition:opacity 275ms ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}img.loaded[data-v-dcc77120]{opacity:1}", ""]), c.locals = {}, t.exports = c
        }
    }
]);