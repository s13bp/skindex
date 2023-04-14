(window.webpackJsonp = window.webpackJsonp || []).push([
    [122], {
        1004: function(t, e, d) {
            "use strict";
            var r = {
                    name: "cta-middle-layers"
                },
                l = (d(991), d(2)),
                component = Object(l.a)(r, (function() {
                    return (0, this._self._c)("div", {
                        staticClass: "cta-middle-layers"
                    }, [this._t("default")], 2)
                }), [], !1, null, "e8e61ec4", null);
            e.a = component.exports
        },
        1148: function(t, e, d) {
            "use strict";
            d(993)
        },
        1149: function(t, e, d) {
            var r = d(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".cta-middle-arrows[data-v-11d7dcd4]{height:100%;left:0;position:absolute;top:0;width:100%;z-index:-1}.cta-middle-arrows path[data-v-11d7dcd4]{opacity:0;transition:opacity 275ms}.cta-middle-arrows path.active[data-v-11d7dcd4]{opacity:1}.cta-middle-arrows__left[data-v-11d7dcd4],.cta-middle-arrows__right[data-v-11d7dcd4]{position:absolute;top:50%;transform:translateY(-50%)}@media screen and (max-width:959px){.cta-middle-arrows__left[data-v-11d7dcd4],.cta-middle-arrows__right[data-v-11d7dcd4]{height:4rem}}.cta-middle-arrows__left[data-v-11d7dcd4]{fill:#3f3c38;right:50rem}@media screen and (max-width:1169px){.cta-middle-arrows__left[data-v-11d7dcd4]{right:75%}}@media screen and (max-width:959px){.cta-middle-arrows__left[data-v-11d7dcd4]{display:none}}.cta-middle-arrows__right[data-v-11d7dcd4]{fill:#00d7f4;left:50rem}@media screen and (max-width:1169px){.cta-middle-arrows__right[data-v-11d7dcd4]{left:75%}}@media screen and (max-width:959px){.cta-middle-arrows__right[data-v-11d7dcd4]{left:50%;transform:translate(-50%,-50%)}}", ""]), r.locals = {}, t.exports = r
        },
        1179: function(t, e, d) {
            "use strict";
            d(51);
            var r = {
                    name: "cta-middle-arrows",
                    data: function() {
                        return {
                            step: 0,
                            stepper: null
                        }
                    },
                    beforeDestroy: function() {
                        this.stepper && clearInterval(this.stepper)
                    },
                    methods: {
                        startAnimation: function() {
                            var t = this;
                            this.stepper = setInterval((function() {
                                t.step++, 4 === t.step && clearInterval(t.stepper)
                            }), 500)
                        }
                    }
                },
                l = (d(1148), d(2)),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "viewport",
                            rawName: "v-viewport.once",
                            value: 1,
                            expression: "1",
                            modifiers: {
                                once: !0
                            }
                        }],
                        staticClass: "cta-middle-arrows",
                        on: {
                            viewportin: t.startAnimation
                        }
                    }, [e("svg", {
                        staticClass: "cta-middle-arrows__left",
                        attrs: {
                            height: "106",
                            viewBox: "0 0 144 106",
                            width: "144",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("g", [e("path", {
                        class: {
                            active: t.step >= 1
                        },
                        attrs: {
                            d: "M80.372 49.781L37.175 1.6C36.253.578 34.967 0 33.604 0H4.805C2.914 0 1.195 1.118.418 2.852c-.768 1.745-.451 3.778.816 5.185L41.542 53 1.234 97.954c-1.267 1.416-1.593 3.45-.816 5.184.778 1.744 2.496 2.862 4.387 2.862h28.799c1.363 0 2.649-.588 3.57-1.59l43.198-48.182c1.642-1.83 1.642-4.625 0-6.447z",
                            "fill-opacity": ".65"
                        }
                    }), t._v(" "), e("path", {
                        class: {
                            active: t.step >= 2
                        },
                        attrs: {
                            d: "M142.769 49.781L99.57 1.6C98.65.578 97.363 0 96.001 0H67.2c-1.89 0-3.609 1.118-4.386 2.852-.768 1.745-.451 3.778.816 5.185L103.939 53 63.631 97.954c-1.267 1.416-1.594 3.45-.816 5.184.777 1.744 2.496 2.862 4.387 2.862H96c1.363 0 2.65-.588 3.571-1.59l43.198-48.182c1.641-1.83 1.641-4.625 0-6.447z"
                        }
                    })])]), t._v(" "), e("svg", {
                        staticClass: "cta-middle-arrows__right",
                        attrs: {
                            height: "106",
                            viewBox: "0 0 144 106",
                            width: "144",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [e("g", [e("path", {
                        class: {
                            active: t.step >= 3
                        },
                        attrs: {
                            d: "M80.372 49.781L37.175 1.6C36.253.578 34.967 0 33.604 0H4.805C2.914 0 1.195 1.118.418 2.852c-.768 1.745-.451 3.778.816 5.185L41.542 53 1.234 97.954c-1.267 1.416-1.593 3.45-.816 5.184.778 1.744 2.496 2.862 4.387 2.862h28.799c1.363 0 2.649-.588 3.57-1.59l43.198-48.182c1.642-1.83 1.642-4.625 0-6.447z",
                            "fill-opacity": ".25"
                        }
                    }), t._v(" "), e("path", {
                        class: {
                            active: t.step >= 4
                        },
                        attrs: {
                            d: "M142.769 49.781L99.57 1.6C98.65.578 97.363 0 96.001 0H67.2c-1.89 0-3.609 1.118-4.386 2.852-.768 1.745-.451 3.778.816 5.185L103.939 53 63.631 97.954c-1.267 1.416-1.594 3.45-.816 5.184.777 1.744 2.496 2.862 4.387 2.862H96c1.363 0 2.65-.588 3.571-1.59l43.198-48.182c1.641-1.83 1.641-4.625 0-6.447z",
                            "fill-opacity": ".5"
                        }
                    })])])])
                }), [], !1, null, "11d7dcd4", null);
            e.a = component.exports
        },
        1601: function(t, e, d) {
            var content = d(2835);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(7).default)("150feadb", content, !0, {
                sourceMap: !1
            })
        },
        2832: function(t, e, d) {
            t.exports = d.p + "img/csgo-middle-assets-left.db5acdd.png"
        },
        2833: function(t, e, d) {
            t.exports = d.p + "img/csgo-middle-assets-right.853aa05.png"
        },
        2834: function(t, e, d) {
            "use strict";
            d(1601)
        },
        2835: function(t, e, d) {
            var r = d(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".cta-middle-layers__assets[data-v-183b5719]{top:50%;transform:translateY(-50%)}.cta-middle-layers__assets--left[data-v-183b5719]{height:90%;left:0}@media screen and (max-width:959px){.cta-middle-layers__assets--left[data-v-183b5719]{height:100%;left:auto;right:55%}}.cta-middle-layers__assets--right[data-v-183b5719]{height:calc(100% + 4rem);right:0;transform:translateY(-50%) translateX(2rem)}@media screen and (max-width:959px){.cta-middle-layers__assets--right[data-v-183b5719]{left:55%;transform:translateY(-50%)}}", ""]), r.locals = {}, t.exports = r
        },
        2962: function(t, e, d) {
            "use strict";
            d.r(e);
            var r = d(1004),
                l = {
                    name: "cta-middle-layers-csgo",
                    components: {
                        CtaMiddleArrows: d(1179).a,
                        CtaMiddleLayers: r.a
                    }
                },
                c = (d(2834), d(2)),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("cta-middle-layers", [e("cta-middle-arrows"), t._v(" "), e("img", {
                        staticClass: "cta-middle-layers__assets cta-middle-layers__assets--left",
                        attrs: {
                            alt: "Crap CS:GO Skins",
                            loading: "lazy",
                            src: d(2832)
                        }
                    }), t._v(" "), e("img", {
                        staticClass: "cta-middle-layers__assets cta-middle-layers__assets--right",
                        attrs: {
                            alt: "Desirable CS:GO Skins",
                            loading: "lazy",
                            src: d(2833)
                        }
                    })], 1)
                }), [], !1, null, "183b5719", null);
            e.default = component.exports
        },
        883: function(t, e, d) {
            var content = d(992);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(7).default)("1e1d78e8", content, !0, {
                sourceMap: !1
            })
        },
        991: function(t, e, d) {
            "use strict";
            d(883)
        },
        992: function(t, e, d) {
            var r = d(6)((function(i) {
                return i[1]
            }));
            r.push([t.i, '.cta-middle-layers[data-v-e8e61ec4]{height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}@media screen and (max-width:959px){.cta-middle-layers[data-v-e8e61ec4]{height:var(--asset-height-mobile);margin:0 -1rem;overflow:hidden;width:calc(100% + 2rem)}}.cta-middle-layers[data-v-e8e61ec4]:before{background-color:#191816;content:"";height:100%;left:50%;margin-left:-50vw;position:absolute;top:0;width:100vw;z-index:-1}@media screen and (max-width:959px){.cta-middle-layers[data-v-e8e61ec4]:before{display:none}}[data-v-e8e61ec4] .cta-middle-layers__assets{display:block;position:absolute;width:auto}', ""]), r.locals = {}, t.exports = r
        },
        993: function(t, e, d) {
            var content = d(1149);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, d(7).default)("37695de5", content, !0, {
                sourceMap: !1
            })
        }
    }
]);