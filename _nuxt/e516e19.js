(window.webpackJsonp = window.webpackJsonp || []).push([
    [47], {
        1021: function(t, e, n) {
            "use strict";
            n(911)
        },
        1022: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".layout-sidebar[data-v-f78d04ee]{display:flex;flex-direction:column;flex-shrink:0;height:100%;width:16rem}@media screen and (max-width:959px){.layout-sidebar[data-v-f78d04ee]{width:100%}.layout-sidebar.only-desktop[data-v-f78d04ee]{display:none}}", ""]), o.locals = {}, t.exports = o
        },
        1160: function(t, e, n) {
            "use strict";
            var o = {
                    name: "layout-sidebar",
                    props: {
                        tag: {
                            type: String,
                            default: "aside"
                        },
                        onlyDesktop: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                r = (n(1021), n(2)),
                component = Object(r.a)(o, (function() {
                    var t = this;
                    return (0, t._self._c)(t.tag, {
                        tag: "component",
                        staticClass: "layout-sidebar",
                        class: {
                            "only-desktop": t.onlyDesktop
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, "f78d04ee", null);
            e.a = component.exports
        },
        1184: function(t, e, n) {
            var content = n(1627);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("a9ac519a", content, !0, {
                sourceMap: !1
            })
        },
        1185: function(t, e, n) {
            var content = n(1629);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("72052548", content, !0, {
                sourceMap: !1
            })
        },
        1626: function(t, e, n) {
            "use strict";
            n(1184)
        },
        1627: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".sidebar-navigation[data-v-30f18dce]{display:flex;flex-direction:column;gap:.5rem;margin-top:-.5rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}", ""]), o.locals = {}, t.exports = o
        },
        1628: function(t, e, n) {
            "use strict";
            n(1185)
        },
        1629: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".sidebar-navigation-item[data-v-9c7b2750]{align-items:center;border-radius:.25rem;color:#aea89b;cursor:pointer;display:flex;height:2.75rem;padding:0 .75rem;transition:color 275ms,background-color 275ms}.sidebar-navigation-item.nuxt-link-exact-active[data-v-9c7b2750],.sidebar-navigation-item[data-v-9c7b2750]:hover{background-color:#3f3c38}.sidebar-navigation-item.nuxt-link-exact-active[data-v-9c7b2750],.sidebar-navigation-item[data-v-9c7b2750]:hover:not(.destructive){color:#fcf5e8}.sidebar-navigation-item.destructive[data-v-9c7b2750]{color:#e46364}.sidebar-navigation-item__icon[data-v-9c7b2750]{font-size:1.25rem;margin-right:.75rem}.nuxt-link-exact-active .sidebar-navigation-item__icon[data-v-9c7b2750]{color:#00d7f4}", ""]), o.locals = {}, t.exports = o
        },
        2895: function(t, e, n) {
            "use strict";
            n.r(e);
            var o = n(3),
                r = (n(20), n(94), n(23), n(14), n(18), n(8), n(26), n(19), n(27), n(32)),
                c = n(866),
                l = n(840),
                d = n(9),
                f = {
                    name: "sidebar-navigation",
                    components: {
                        LayoutSidebar: n(1160).a
                    }
                },
                m = (n(1626), n(2)),
                v = Object(m.a)(f, (function() {
                    return (0, this._self._c)("layout-sidebar", {
                        staticClass: "sidebar-navigation",
                        attrs: {
                            tag: "nav",
                            "only-desktop": ""
                        }
                    }, [this._t("default")], 2)
                }), [], !1, null, "30f18dce", null).exports,
                h = {
                    name: "sidebar-navigation-item",
                    props: {
                        icon: {
                            type: Array,
                            required: !0
                        },
                        to: {
                            type: String,
                            default: null
                        },
                        destructive: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        component: function() {
                            return this.to ? "nuxt-link" : "span"
                        }
                    }
                },
                y = (n(1628), {
                    name: "account-sidebar",
                    components: {
                        SidebarNavigationItem: Object(m.a)(h, (function() {
                            var t = this,
                                e = t._self._c;
                            return e(t.component, {
                                tag: "component",
                                staticClass: "sidebar-navigation-item",
                                class: {
                                    destructive: t.destructive
                                },
                                attrs: {
                                    to: t.localePath(t.to)
                                }
                            }, [e("fa-icon", {
                                staticClass: "sidebar-navigation-item__icon",
                                attrs: {
                                    icon: t.icon
                                }
                            }), t._v(" "), t._t("default")], 2)
                        }), [], !1, null, "9c7b2750", null).exports,
                        SidebarNavigation: v
                    },
                    icons: {
                        mdiAccountSupervisorCircle: d.a,
                        mdiArrowTopRight: d.g,
                        mdiFolderText: d.B,
                        mdiSecurity: d.W,
                        mdiChartTimelineVariantShimmer: d.m
                    }
                });

            function _(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function x(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? _(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : _(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var O = {
                    components: {
                        AccountSidebar: Object(m.a)(y, (function() {
                            var t = this,
                                e = t._self._c;
                            return e("sidebar-navigation", [e("sidebar-navigation-item", {
                                attrs: {
                                    icon: ["mdi", "account-supervisor-circle"],
                                    to: t.localePath("/account/settings")
                                }
                            }, [t._v(t._s(t.$t("account.menu.settings")))]), t._v(" "), e("sidebar-navigation-item", {
                                attrs: {
                                    icon: ["mdi", "chart-timeline-variant-shimmer"],
                                    to: t.localePath("/account/affiliates")
                                }
                            }, [t._v(t._s(t.$t("account.menu.affiliates")))]), t._v(" "), e("sidebar-navigation-item", {
                                attrs: {
                                    icon: ["mdi", "folder-text"],
                                    to: t.localePath("/account/transactions")
                                }
                            }, [t._v(t._s(t.$t("account.menu.transactions")))]), t._v(" "), e("sidebar-navigation-item", {
                                attrs: {
                                    icon: ["mdi", "security"],
                                    to: t.localePath("/account/security")
                                }
                            }, [t._v(t._s(t.$t("account.menu.security")))]), t._v(" "), e("sidebar-navigation-item", {
                                attrs: {
                                    icon: ["mdi", "arrow-top-right"],
                                    destructive: "",
                                    marked: ""
                                },
                                nativeOn: {
                                    click: function(e) {
                                        return t.$auth.logout()
                                    }
                                }
                            }, [t._v(t._s(t.$t("account.menu.sign-out")))])], 1)
                        }), [], !1, null, null, null).exports,
                        LayoutContainer: l.a,
                        LayoutHeader: c.a
                    },
                    middleware: ["auth", function(t) {
                        var e = t.route,
                            n = t.redirect,
                            o = t.localePath;
                        e.path.match(/^(\/[a-z]{2})?\/account(\/)?$/) && n(o("/account/settings"))
                    }],
                    head: {
                        meta: [{
                            hid: "robots",
                            name: "robots",
                            content: "noindex"
                        }]
                    },
                    computed: x(x({}, Object(r.b)("screen", ["mdUp"])), {}, {
                        title: function() {
                            return this.mdUp ? this.$t("account.title") : this.pageTitles[this.$route.path] || this.$t("account.title")
                        },
                        pageTitles: function() {
                            return {
                                "/account/affiliates": this.$t("account.menu.affiliates"),
                                "/account/security": this.$t("account.menu.security"),
                                "/account/settings": this.$t("account.menu.settings"),
                                "/account/transactions": this.$t("account.menu.transactions")
                            }
                        }
                    }),
                    watch: {
                        "$auth.loggedIn": function(t) {
                            t || this.$router.push(this.localePath("/trade"))
                        }
                    }
                },
                w = Object(m.a)(O, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "account"
                    }, [e("layout-header", {
                        attrs: {
                            title: t.title,
                            tag: "h1"
                        }
                    }), t._v(" "), e("layout-container", {
                        scopedSlots: t._u([{
                            key: "sidebar",
                            fn: function() {
                                return [e("account-sidebar")]
                            },
                            proxy: !0
                        }, {
                            key: "default",
                            fn: function() {
                                return [e("nuxt-child")]
                            },
                            proxy: !0
                        }])
                    })], 1)
                }), [], !1, null, null, null);
            e.default = w.exports
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
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".layout-container[data-v-77f14a66]{background-color:#302e2a;padding:2rem 0}@media screen and (max-width:959px){.layout-container[data-v-77f14a66]{padding:1.5rem 0}}.layout-container.sidebar .container[data-v-77f14a66]{display:flex;gap:2rem}@media screen and (max-width:959px){.layout-container.sidebar .container[data-v-77f14a66]{flex-direction:column}}", ""]), o.locals = {}, t.exports = o
        },
        840: function(t, e, n) {
            "use strict";
            var o = {
                    name: "layout-container",
                    computed: {
                        hasSidebar: function() {
                            return !!this.$slots.sidebar
                        }
                    }
                },
                r = (n(820), n(2)),
                component = Object(r.a)(o, (function() {
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
        854: function(t, e, n) {
            "use strict";
            n(808)
        },
        855: function(t, e, n) {
            var o = n(6)((function(i) {
                return i[1]
            }));
            o.push([t.i, '.layout-header[data-v-f95090f4]{--stroke-color:#302e2a;background-color:#21201e;overflow:hidden}.layout-header__container[data-v-f95090f4]{align-items:center;border-top:1px solid #3f3c38;display:flex;justify-content:space-between;padding-bottom:2rem;padding-top:2rem;position:relative;z-index:1}.layout-header.tall .layout-header__container[data-v-f95090f4]{padding-bottom:4rem;padding-top:4rem}@media screen and (max-width:959px){.layout-header__container[data-v-f95090f4]:after{background:linear-gradient(270deg,#21201e .75rem,rgba(48,46,42,0));content:"";height:100%;position:absolute;right:0;top:0;width:3rem;z-index:-1}}.layout-header__title[data-v-f95090f4]{color:#fff;font-size:2.25rem;font-weight:400;margin:0}@media screen and (max-width:959px){.layout-header__title[data-v-f95090f4]{margin-left:1rem}}.layout-header__stroked[data-v-f95090f4]{left:0;position:absolute;top:50%;transform:translateY(-55%);z-index:-1}@media screen and (max-width:959px){.layout-header__stroked[data-v-f95090f4]{left:1rem;overflow:hidden;white-space:nowrap}}', ""]), o.locals = {}, t.exports = o
        },
        866: function(t, e, n) {
            "use strict";
            n(23), n(14), n(18), n(8), n(26), n(19), n(27);
            var o = n(3),
                r = n(32),
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
                                Object(o.a)(t, e, source[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                            }))
                        }
                        return t
                    }({}, Object(r.b)("screen", ["mdUp"]))
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
        },
        911: function(t, e, n) {
            var content = n(1022);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("2d2d1910", content, !0, {
                sourceMap: !1
            })
        }
    }
]);