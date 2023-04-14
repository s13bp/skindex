(window.webpackJsonp = window.webpackJsonp || []).push([
    [132], {
        1444: function(t, e, n) {
            var content = n(2254);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("72bc2288", content, !0, {
                sourceMap: !1
            })
        },
        1445: function(t, e, n) {
            var content = n(2256);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("0598f3de", content, !0, {
                sourceMap: !1
            })
        },
        2253: function(t, e, n) {
            "use strict";
            n(1444)
        },
        2254: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, '.modal-exit-intent-timer[data-v-daf9c5c8]{align-items:center;background:linear-gradient(90deg,rgba(163,126,9,.4),#121211 65%);border-top:2px solid #302e2a;bottom:0;color:#aea89b;display:flex;height:var(--counter-height);left:0;padding:0 2rem;pointer-events:none;position:absolute;width:100%;z-index:1}.modal-exit-intent-timer__bar[data-v-daf9c5c8]{background:linear-gradient(90deg,#ffe379,#00d7f4);height:2px;left:0;position:absolute;top:-2px;transform:translateX(var(--counter-progress));transition:transform 1s linear;width:100%;z-index:1}.modal-exit-intent-timer__bar[data-v-daf9c5c8]:after{background-color:#fff;border-radius:50%;content:"";height:8px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:8px}.modal-exit-intent-timer__body[data-v-daf9c5c8]{align-items:baseline;display:flex;gap:1rem}.modal-exit-intent-timer__counter[data-v-daf9c5c8]{font-feature-settings:"tnum";color:#fff;font-size:1.5rem;font-variant-numeric:tabular-nums;font-weight:700;letter-spacing:.05em;position:relative}.modal-exit-intent-timer__counter[data-v-daf9c5c8] span{animation:pulse-daf9c5c8 1s ease-in-out infinite}@keyframes pulse-daf9c5c8{0%{opacity:1}45%{opacity:1}55%{opacity:.5}to{opacity:.5}}', ""]), o.locals = {}, t.exports = o
        },
        2255: function(t, e, n) {
            "use strict";
            n(1445)
        },
        2256: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".modal-exit-intent[data-v-0ba8a1e2]{--counter-height:3.875rem;background-color:#121211;max-width:550px;overflow:hidden}.modal-exit-intent__body[data-v-0ba8a1e2]{align-items:flex-start;gap:1rem;padding-bottom:var(--counter-height);position:relative;text-align:left;z-index:1}.modal-exit-intent__subtitle[data-v-0ba8a1e2]{color:#00d7f4;font-size:.875rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}.modal-exit-intent__title[data-v-0ba8a1e2]{color:#fff;font-size:1.875rem;line-height:1em}.modal-exit-intent__description[data-v-0ba8a1e2]{color:#ece6da}.modal-exit-intent__button[data-v-0ba8a1e2]{height:2.625rem;padding:0 2rem}.modal-exit-intent__background[data-v-0ba8a1e2]{height:auto;left:40%;opacity:.75;position:absolute;top:40%;transform:translateY(-50%);width:28rem;z-index:-1}", ""]), o.locals = {}, t.exports = o
        },
        2909: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(759),
                r = n(176),
                l = (n(175), n(20), n(58), n(8), n(70), n(51), {
                    name: "modal-exit-intent-timer",
                    props: {
                        time: {
                            type: Number,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            counterInterval: null,
                            timeLeft: this.time
                        }
                    },
                    computed: {
                        counter: function() {
                            return new Date(1e3 * this.timeLeft).toISOString().substr(14, 5).toString().replace(":", "<span>:</span>")
                        },
                        style: function() {
                            return {
                                "--counter-progress": "-".concat(100 - this.timeLeft / this.time * 100, "%")
                            }
                        }
                    },
                    watch: {
                        timeLeft: function(t) {
                            0 === t && this.$modal.hide()
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.counterInterval = setInterval((function() {
                            return t.timeLeft -= 1
                        }), 1e3)
                    },
                    beforeDestroy: function() {
                        clearInterval(this.counterInterval)
                    }
                }),
                c = (n(2253), n(2)),
                d = {
                    name: "modal-exit-intent",
                    components: {
                        ModalExitIntentTimer: Object(c.a)(l, (function() {
                            var t = this,
                                e = t._self._c;
                            return e("div", {
                                staticClass: "modal-exit-intent-timer",
                                style: t.style
                            }, [e("div", {
                                staticClass: "modal-exit-intent-timer__body"
                            }, [e("div", {
                                staticClass: "modal-exit-intent-timer__bar"
                            }), t._v(" "), e("div", {
                                staticClass: "modal-exit-intent-timer__counter",
                                domProps: {
                                    innerHTML: t._s(t.counter)
                                }
                            }), t._v(" "), e("span", [t._v(t._s(t.$t("landing.exit-intent.timer")))])])])
                        }), [], !1, null, "daf9c5c8", null).exports,
                        BaseButton: r.a,
                        ModalBody: o.a
                    }
                },
                m = (n(2255), Object(c.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "modal-exit-intent"
                    }, [e("modal-body", {
                        staticClass: "modal-exit-intent__body"
                    }, [e("p", {
                        staticClass: "modal-exit-intent__subtitle",
                        domProps: {
                            innerHTML: t._s(t.$t("landing.exit-intent.label"))
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "modal-exit-intent__title",
                        domProps: {
                            innerHTML: t._s(t.$t("landing.exit-intent.title"))
                        }
                    }), t._v(" "), e("p", {
                        staticClass: "modal-exit-intent__description",
                        domProps: {
                            innerHTML: t._s(t.$t("landing.exit-intent.description"))
                        }
                    }), t._v(" "), e("base-button", {
                        staticClass: "modal-exit-intent__button",
                        attrs: {
                            to: "/trade"
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.$modal.hide()
                            }
                        }
                    }, [t._v(t._s(t.$t("landing.exit-intent.cta")))]), t._v(" "), e("img", {
                        staticClass: "modal-exit-intent__background",
                        attrs: {
                            alt: "SkinsMonkey",
                            src: n(466)
                        }
                    })], 1), t._v(" "), e("modal-exit-intent-timer", {
                        attrs: {
                            time: 180
                        }
                    })], 1)
                }), [], !1, null, "0ba8a1e2", null));
            e.default = m.exports
        },
        753: function(t, e, n) {
            var content = n(761);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("731c3f92", content, !0, {
                sourceMap: !1
            })
        },
        759: function(t, e, n) {
            "use strict";
            var o = {
                    name: "modal-body"
                },
                r = (n(760), n(2)),
                component = Object(r.a)(o, (function() {
                    return (0, this._self._c)("div", {
                        staticClass: "modal-body"
                    }, [this._t("default")], 2)
                }), [], !1, null, "291ec9c7", null);
            e.a = component.exports
        },
        760: function(t, e, n) {
            "use strict";
            n(753)
        },
        761: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".modal-body[data-v-291ec9c7]{align-items:center;display:flex;flex-direction:column;gap:1rem;text-align:center}.modal-body p[data-v-291ec9c7]{margin:0}", ""]), o.locals = {}, t.exports = o
        }
    }
]);