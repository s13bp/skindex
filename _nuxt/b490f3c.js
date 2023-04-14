(window.webpackJsonp = window.webpackJsonp || []).push([
    [50], {
        1027: function(t, e, n) {
            "use strict";
            n(917)
        },
        1028: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".layout-content[data-v-397474ae]{display:flex;flex-direction:column;gap:1.5rem}", ""]), c.locals = {}, t.exports = c
        },
        1029: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var c = n(1),
                r = (n(15), function() {
                    var t = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                        var n, c, r, o, l;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e.vuelidate.$reset(), t.next = 3, e.$nextTick();
                                case 3:
                                    if (e.vuelidate.$touch(), !e.vuelidate.$invalid) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    return t.prev = 6, n = e.tradeUrl, t.next = 10, e.$api.user.updateTradeUrl({
                                        tradeUrl: n
                                    });
                                case 10:
                                    c = t.sent, r = c.status, o = c.partner, l = c.token, e.$auth.updateUser((function(t) {
                                        t.tradeUrl = e.tradeUrl, t.data.partner = o, t.data.token = l, t.data.steamGuardStatus = r
                                    })), e.$toast.success(e.$t("account.settings.trade-url-updated")), t.next = 21;
                                    break;
                                case 18:
                                    t.prev = 18, t.t0 = t.catch(6), t.t0.isAxiosError ? e.apiError = t.t0.response.data.error.message : e.$toast.error(e.$t("common.error.unknown"));
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [6, 18]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
        },
        1158: function(t, e, n) {
            "use strict";
            var c = {
                    name: "layout-content"
                },
                r = (n(1027), n(2)),
                component = Object(r.a)(c, (function() {
                    return (0, this._self._c)("main", {
                        staticClass: "layout-content"
                    }, [this._t("default")], 2)
                }), [], !1, null, "397474ae", null);
            e.a = component.exports
        },
        1213: function(t, e, n) {
            var content = n(1687);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("bb981c12", content, !0, {
                sourceMap: !1
            })
        },
        1214: function(t, e, n) {
            var content = n(1689);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("e4106a70", content, !0, {
                sourceMap: !1
            })
        },
        1686: function(t, e, n) {
            "use strict";
            n(1213)
        },
        1687: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".account-contact__action[data-v-c52a963c]{font-size:.75rem;font-weight:700;line-height:1;margin-left:auto}.account-contact__status-wrapper[data-v-c52a963c]{font-size:.75rem;font-weight:700;line-height:1;white-space:nowrap}.account-contact__status[data-v-c52a963c]{border-radius:.125rem;margin:-.25rem 0 -.25rem auto;padding:.25rem .5rem}.account-contact__status--verified[data-v-c52a963c]{background-color:rgba(106,154,22,.2);color:#81bd1b!important}.account-contact__status--unverified[data-v-c52a963c]{background-color:rgba(203,165,61,.2);color:#cba53d!important}.account-contact__pending[data-v-c52a963c]{border-bottom:1px solid;color:#7b776f!important;cursor:pointer;transition:color 175ms}.account-contact__pending[data-v-c52a963c]:hover{color:#9a958b!important}.account-contact-checkbox[data-v-c52a963c] .form-checkbox__label{display:flex;flex-direction:column}.account-contact-checkbox__label[data-v-c52a963c]{color:#ece6da;font-size:1rem;line-height:1}.account-contact-checkbox__description[data-v-c52a963c]{color:#9a958b;font-size:.75rem;margin:0}.account-contact-preferences[data-v-c52a963c]{grid-gap:2rem;display:grid;gap:2rem;grid-template-columns:450px 1fr}@media screen and (max-width:1169px){.account-contact-preferences[data-v-c52a963c]{grid-template-columns:1fr}}.account-contact-preferences__label[data-v-c52a963c]{font-size:.875rem;margin-bottom:.25rem}.account-contact-preferences__description[data-v-c52a963c]{color:#aea89b;font-size:.875rem;margin:0}.account-contact-preferences__meta[data-v-c52a963c]{display:flex;flex-direction:column}.account-contact-preferences__content[data-v-c52a963c]{display:flex;flex-direction:column;gap:1rem}", ""]), c.locals = {}, t.exports = c
        },
        1688: function(t, e, n) {
            "use strict";
            n(1214)
        },
        1689: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".account-connections__list[data-v-4570ef5a]{grid-gap:.75rem;display:grid;gap:.75rem;grid-template-columns:repeat(2,1fr);margin-top:1rem}.account-connections__list.loading .account-connections-entry[data-v-4570ef5a]{filter:blur(2px)}.account-connections__list.loading .account-connections-entry__actions[data-v-4570ef5a]{opacity:0}@media screen and (max-width:959px){.account-connections__list[data-v-4570ef5a]{grid-template-columns:1fr}}.account-connections-entry[data-v-4570ef5a]{background:#393632;border-radius:.5rem;display:flex;height:4rem;overflow:hidden;transition:filter 275ms}.account-connections-entry:hover .account-connections-entry__actions.hidden[data-v-4570ef5a]{opacity:1}.account-connections-entry__image[data-v-4570ef5a]{align-items:center;aspect-ratio:1/1;display:flex;flex-shrink:0;font-size:1.75rem;height:100%;justify-content:center}.account-connections-entry__details[data-v-4570ef5a]{align-items:flex-start;display:flex;flex-direction:column;flex-grow:1;height:100%;justify-content:center;line-height:1}.account-connections-entry__name[data-v-4570ef5a]{font-weight:500}.account-connections-entry__account[data-v-4570ef5a]{color:#aea89b;font-size:.75rem;margin-top:.25rem}.account-connections-entry__actions[data-v-4570ef5a]{align-items:center;display:flex;flex-shrink:0;margin-right:.75rem}.account-connections-entry__actions.hidden[data-v-4570ef5a]{opacity:0;transition:opacity 275ms}", ""]), c.locals = {}, t.exports = c
        },
        2894: function(t, e, n) {
            "use strict";
            n.r(e);
            var c, r = n(1),
                o = (n(15), n(856)),
                l = n(774),
                d = n(920),
                f = n(1029),
                m = n(845),
                _ = n(870),
                h = n(278),
                v = n(277),
                x = n(768),
                y = n(884),
                k = {
                    name: "account-settings",
                    components: {
                        LayoutSection: y.a,
                        FormWrapper: x.a,
                        FormInput: v.a,
                        BaseHeader: h.a
                    },
                    mixins: [m.a, _.a],
                    validations: {
                        tradeUrl: {
                            required: o.f,
                            url: o.h,
                            tradeUrl: d.a
                        }
                    },
                    data: function() {
                        return {
                            tradeUrl: this.$auth.user.tradeUrl,
                            steamLink: l.a.TRADE_URL,
                            apiError: null,
                            vuelidateExternalResults: {
                                tradeUrl: []
                            }
                        }
                    },
                    watch: {
                        apiError: function(t) {
                            switch (t) {
                                case "tradeurl-invalid":
                                    this.vuelidateExternalResults.tradeUrl.push(d.a.$message);
                                    break;
                                case "user-unknown":
                                    this.reLogin()
                            }
                        }
                    },
                    methods: {
                        updateUser: function() {
                            var t = this;
                            this.$store.commit("auth/updateUser", (function(e) {
                                return e.tradeUrl = t.tradeUrl
                            }))
                        },
                        submit: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Object(f.a)(t);
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                $ = n(2),
                w = Object($.a)(k, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("layout-section", {
                        staticClass: "account-settings"
                    }, [e("base-header", {
                        attrs: {
                            small: "",
                            tag: "h2"
                        }
                    }, [t._v(t._s(t.$t("account.settings.title")))]), t._v(" "), e("p", [t._v(t._s(t.$t("account.settings.description")))]), t._v(" "), e("form-wrapper", [e("form-input", {
                        attrs: {
                            label: t.$t("account.settings.trade-url.label"),
                            placeholder: t.$t("account.settings.trade-url.placeholder"),
                            "validation-message": t.errorMessage("tradeUrl"),
                            editable: "",
                            "read-only": "",
                            trailing: ""
                        },
                        on: {
                            confirm: t.submit,
                            input: function(e) {
                                t.vuelidate.tradeUrl.$touch(), t.resetApiValidation("tradeUrl")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "label",
                            fn: function() {
                                return [t._v(t._s(t.$t("account.settings.trade-url.label")) + " "), e("a", {
                                    attrs: {
                                        href: t.steamLink,
                                        target: "_blank"
                                    }
                                }, [t._v(t._s(t.$t("account.settings.find-trade-url")))])]
                            },
                            proxy: !0
                        }]),
                        model: {
                            value: t.tradeUrl,
                            callback: function(e) {
                                t.tradeUrl = e
                            },
                            expression: "tradeUrl"
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null).exports,
                O = n(1158),
                C = (n(36), n(66), n(846), n(18), n(8), n(9)),
                R = n(900),
                j = n(87),
                A = {
                    name: "account-contact",
                    components: {
                        FormCheckbox: R.a,
                        LayoutSection: y.a,
                        FormWrapper: x.a,
                        FormInput: v.a,
                        BaseHeader: h.a
                    },
                    icons: {
                        mdiPencil: C.R
                    },
                    mixins: [m.a, _.a],
                    validations: {
                        email: {
                            required: o.f,
                            email: o.b
                        }
                    },
                    data: function() {
                        return {
                            email: this.$auth.user.data.email,
                            emailResent: !1,
                            apiError: null,
                            vuelidateExternalResults: {
                                email: []
                            },
                            preferences: {
                                transactional: this.$auth.user.preferences.emailTransactional,
                                marketing: this.$auth.user.preferences.emailMarketing
                            }
                        }
                    },
                    computed: {
                        emailVerified: function() {
                            return this.$auth.user.flags.includes("EMAIL_VERIFIED")
                        }
                    },
                    watch: {
                        apiError: function(t) {
                            switch (t) {
                                case "email-invalid":
                                    this.vuelidateExternalResults.form.email.push(this.$t("common.error.email-invalid"));
                                    break;
                                case "user-unknown":
                                    this.reLogin()
                            }
                        },
                        preferences: {
                            handler: function() {
                                this.updateEmailPreferences(this.preferences)
                            },
                            deep: !0
                        }
                    },
                    methods: {
                        updateUser: function() {
                            var t = this;
                            this.$store.commit("auth/updateUser", (function(e) {
                                e.data.email = t.email, e.flags = e.flags.filter((function(t) {
                                    return "EMAIL_VERIFIED" !== t
                                }))
                            }))
                        },
                        resendConfirmationEmail: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.emailResent = !0, e.next = 4, t.$axios.$post("/user-email/resend");
                                        case 4:
                                            t.$toast.success(t.$t("account.contact.email-resent")), e.next = 11;
                                            break;
                                        case 7:
                                            throw e.prev = 7, e.t0 = e.catch(0), t.emailResent = !1, e.t0;
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        submit: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.$auth.user.email !== t.email) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return t.vuelidate.$reset(), e.next = 5, t.$nextTick();
                                        case 5:
                                            if (t.vuelidate.$touch(), !t.vuelidate.$invalid) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 8:
                                            return e.prev = 8, e.next = 11, t.$api.user.postEmail({
                                                email: t.email
                                            });
                                        case 11:
                                            t.updateUser(), t.$modal.show("account-email-verify", {
                                                email: t.email
                                            }), e.next = 18;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(8), e.t0.isAxiosError ? t.apiError = e.t0.response.data.error.message : t.$toast.error(t.$t("common.error.unknown"));
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [8, 15]
                                ])
                            })))()
                        },
                        updateEmailPreferences: Object(j.b)((function(t) {
                            this.$axios.$post("/user/email-preferences", t), this.$auth.updateUser((function(e) {
                                e.preferences.emailTransactional = t.transactional, e.preferences.emailMarketing = t.marketing
                            }))
                        }), 1e3)
                    }
                },
                E = (n(1686), Object($.a)(A, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("layout-section", {
                        staticClass: "account-contact"
                    }, [e("base-header", {
                        attrs: {
                            small: "",
                            tag: "h2"
                        }
                    }, [t._v("\n    " + t._s(t.$t("account.contact.title")) + "\n  ")]), t._v(" "), e("p", [t._v(t._s(t.$t("account.contact.description")))]), t._v(" "), e("form-wrapper", [e("form-input", {
                        attrs: {
                            label: t.$t("common.input.email.label"),
                            "validation-message": t.errorMessage("email"),
                            editable: "",
                            "read-only": "",
                            trailing: ""
                        },
                        on: {
                            confirm: t.submit,
                            input: function(e) {
                                t.vuelidate.email.$touch(), t.resetApiValidation("email")
                            }
                        },
                        scopedSlots: t._u([{
                            key: "label",
                            fn: function() {
                                return [t._v("\n        " + t._s(t.$t("common.input.email.label")) + "\n\n        "), e("span", {
                                    staticClass: "account-contact__status-wrapper"
                                }, [t.emailVerified ? e("span", {
                                    staticClass: "account-contact__status account-contact__status--verified"
                                }, [t._v(t._s(t.$t("account.contact.email-status.verified")))]) : e("span", {
                                    staticClass: "account-contact__status account-contact__status--unverified"
                                }, [t._v(t._s(t.$t("account.contact.email-status.not-verified")))])]), t._v(" "), t.emailResent || t.emailVerified ? t._e() : e("span", {
                                    staticClass: "account-contact__action"
                                }, [t.emailResent ? t._e() : e("span", {
                                    staticClass: "account-contact__pending",
                                    on: {
                                        click: t.resendConfirmationEmail
                                    }
                                }, [t._v(t._s(t.$t("account.contact.email-resend")))])])]
                            },
                            proxy: !0
                        }]),
                        model: {
                            value: t.email,
                            callback: function(e) {
                                t.email = e
                            },
                            expression: "email"
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "account-contact-preferences"
                    }, [e("div", {
                        staticClass: "account-contact-preferences__meta"
                    }, [e("span", {
                        staticClass: "account-contact-preferences__label"
                    }, [t._v(t._s(t.$t("account.contact.preferences.title")))]), t._v(" "), e("p", {
                        staticClass: "account-contact-preferences__description"
                    }, [t._v(t._s(t.$t("account.contact.preferences.description")))])]), t._v(" "), e("div", {
                        staticClass: "account-contact-preferences__content"
                    }, [e("form-checkbox", {
                        staticClass: "account-contact-checkbox",
                        model: {
                            value: t.preferences.transactional,
                            callback: function(e) {
                                t.$set(t.preferences, "transactional", e)
                            },
                            expression: "preferences.transactional"
                        }
                    }, [e("span", {
                        staticClass: "account-contact-checkbox__label"
                    }, [t._v(t._s(t.$t("account.contact.preferences.transactional.title")))]), t._v(" "), e("span", {
                        staticClass: "account-contact-checkbox__description"
                    }, [t._v(t._s(t.$t("account.contact.preferences.transactional.description")))])]), t._v(" "), e("form-checkbox", {
                        staticClass: "account-contact-checkbox",
                        model: {
                            value: t.preferences.marketing,
                            callback: function(e) {
                                t.$set(t.preferences, "marketing", e)
                            },
                            expression: "preferences.marketing"
                        }
                    }, [e("span", {
                        staticClass: "account-contact-checkbox__label"
                    }, [t._v(t._s(t.$t("account.contact.preferences.marketing.title")))]), t._v(" "), e("span", {
                        staticClass: "account-contact-checkbox__description"
                    }, [t._v(t._s(t.$t("account.contact.preferences.marketing.description")))])])], 1)])], 1)], 1)
                }), [], !1, null, "c52a963c", null).exports),
                U = (n(16), n(23), n(14), n(26), n(19), n(27), n(10)),
                S = n(3),
                D = (n(45), n(78), n(112)),
                M = n(130),
                T = n(35),
                P = Object(T.a)({
                    STEAM: "STEAM",
                    DISCORD: "DISCORD"
                }),
                L = n(176);

            function I(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function z(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? I(Object(source), !0).forEach((function(e) {
                        Object(S.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : I(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var F = (c = {}, Object(S.a)(c, P.STEAM, {
                    name: "Steam",
                    icon: D.j,
                    disallowDisconnect: !0,
                    hasHelpText: !0
                }), Object(S.a)(c, P.DISCORD, {
                    name: "Discord",
                    icon: D.b
                }), c),
                N = {
                    name: "account-connections",
                    components: {
                        BaseButton: L.a,
                        LayoutSection: y.a,
                        BaseHeader: h.a
                    },
                    icons: {
                        faPlus: M.N
                    },
                    data: function() {
                        return {
                            connectedAccounts: [],
                            loading: !0
                        }
                    },
                    fetch: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$api.user.getConnectedAccounts();
                                    case 2:
                                        t.connectedAccounts = e.sent, t.loading = !1;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    computed: {
                        providers: function() {
                            var t = this.connectedAccounts.reduce((function(t, e) {
                                return t[e.provider] = e, t
                            }), {});
                            return Object.entries(F).map((function(e) {
                                var n = Object(U.a)(e, 2),
                                    c = n[0];
                                return z(z({
                                    key: c
                                }, n[1]), {}, {
                                    identifier: t[c] ? t[c].identifier : null,
                                    accountName: t[c] ? t[c].name : null
                                })
                            }))
                        }
                    },
                    methods: {
                        connect: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.abrupt("return", e.$auth.socialRedirect({
                                                provider: t,
                                                returnTo: e.$route.fullPath,
                                                connect: !0
                                            }));
                                        case 1:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        disconnect: function(t) {
                            var e = this;
                            return Object(r.a)(regeneratorRuntime.mark((function n() {
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, e.$api.user.disconnectAccount(t);
                                        case 2:
                                            e.connectedAccounts = e.connectedAccounts.filter((function(e) {
                                                return e.provider !== t
                                            }));
                                        case 3:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                },
                V = (n(1688), {
                    components: {
                        AccountConnections: Object($.a)(N, (function() {
                            var t = this,
                                e = t._self._c;
                            return e("layout-section", {
                                staticClass: "account-connections"
                            }, [e("base-header", {
                                attrs: {
                                    small: "",
                                    tag: "h2"
                                }
                            }, [t._v("\n    " + t._s(t.$t("account.connections.title")) + "\n  ")]), t._v(" "), e("div", {
                                staticClass: "account-connections__list",
                                class: {
                                    loading: t.loading
                                }
                            }, t._l(t.providers, (function(n) {
                                return e("div", {
                                    key: n.key,
                                    staticClass: "account-connections-entry"
                                }, [e("div", {
                                    staticClass: "account-connections-entry__image"
                                }, [e("fa-icon", {
                                    attrs: {
                                        icon: n.icon,
                                        "fixed-width": ""
                                    }
                                })], 1), t._v(" "), e("div", {
                                    staticClass: "account-connections-entry__details"
                                }, [e("span", {
                                    staticClass: "account-connections-entry__name"
                                }, [e("span", [t._v(t._s(n.name))])]), t._v(" "), t.loading ? e("span", {
                                    staticClass: "account-connections-entry__account"
                                }, [t._v("Loading...")]) : n.identifier ? e("span", {
                                    directives: [{
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: n.identifier,
                                        expression: "provider.identifier"
                                    }],
                                    staticClass: "account-connections-entry__account connected"
                                }, [t._v(t._s(n.accountName))]) : e("span", {
                                    staticClass: "account-connections-entry__account"
                                }, [t._v(t._s(t.$t("account.connections.not-connected")))])]), t._v(" "), e("div", {
                                    staticClass: "account-connections-entry__actions"
                                }, [t.loading || n.identifier ? e("base-button", {
                                    directives: [{
                                        name: "tooltip",
                                        rawName: "v-tooltip",
                                        value: n.disallowDisconnect ? {
                                            maxWidth: "22rem",
                                            content: t.$t("account.connections.unlink-steam")
                                        } : null,
                                        expression: "provider.disallowDisconnect ? { maxWidth: '22rem', content: $t('account.connections.unlink-steam') } : null"
                                    }],
                                    attrs: {
                                        action: function() {
                                            return t.disconnect(n.key)
                                        },
                                        disabled: n.disallowDisconnect,
                                        theme: "transparent"
                                    }
                                }, [e("span", [t._v(t._s(t.$t("account.connections.action.disconnect")))])]) : e("base-button", {
                                    attrs: {
                                        action: function() {
                                            return t.connect(n.key)
                                        },
                                        theme: "neutral"
                                    }
                                }, [e("fa-icon", {
                                    attrs: {
                                        icon: ["fas", "plus"]
                                    }
                                }), t._v(" "), e("span", [t._v(t._s(t.$t("account.connections.action.connect")))])], 1)], 1)])
                            })), 0)], 1)
                        }), [], !1, null, "4570ef5a", null).exports,
                        AccountContact: E,
                        LayoutContent: O.a,
                        AccountSettings: w
                    },
                    head: {
                        meta: [{
                            hid: "robots",
                            name: "robots",
                            content: "noindex"
                        }]
                    }
                }),
                B = Object($.a)(V, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("layout-content", {
                        attrs: {
                            divided: ""
                        }
                    }, [e("account-settings"), t._v(" "), e("account-contact"), t._v(" "), e("account-connections")], 1)
                }), [], !1, null, null, null);
            e.default = B.exports
        },
        757: function(t, e, n) {
            var content = n(770);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("23a11adf", content, !0, {
                sourceMap: !1
            })
        },
        768: function(t, e, n) {
            "use strict";
            var c = {
                    name: "form-wrapper",
                    methods: {
                        onSubmit: function() {
                            this.$emit("submit")
                        }
                    }
                },
                r = (n(769), n(2)),
                component = Object(r.a)(c, (function() {
                    var t = this;
                    return (0, t._self._c)("form", {
                        staticClass: "form-wrapper",
                        on: {
                            submit: function(e) {
                                return e.preventDefault(), t.onSubmit.apply(null, arguments)
                            }
                        }
                    }, [t._t("default")], 2)
                }), [], !1, null, "38fd3654", null);
            e.a = component.exports
        },
        769: function(t, e, n) {
            "use strict";
            n(757)
        },
        770: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".form-wrapper[data-v-38fd3654]{display:flex;flex-direction:column;gap:1.5rem}.form-wrapper[data-v-38fd3654]:not(:first-child){margin-top:1.5rem}", ""]), c.locals = {}, t.exports = c
        },
        774: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var c = {
                APP_TRADE_OFFER: "steam://url/ShowTradeOffer/",
                ACCOUNT_SETTINGS: "https://steamcommunity.com/my/edit/settings/",
                CHANGE_PASSWORD: "https://help.steampowered.com/pl/wizard/HelpChangePassword?redir=store/account/",
                TRADE_OFFER: "https://steamcommunity.com/tradeoffer/",
                TRADE_URL: "https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url",
                AVATAR_UPDATE: "https://steamcommunity.com/my/edit/avatar",
                NICKNAME_UPDATE: "https://steamcommunity.com/my/edit/info",
                STEAM_GUARD: "https://store.steampowered.com/twofactor/manage",
                API_KEY: "https://steamcommunity.com/dev/apiKey",
                ACCOUNT: "https://store.steampowered.com/account"
            }
        },
        824: function(t, e, n) {
            var content = n(890);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("3fbee87b", content, !0, {
                sourceMap: !1
            })
        },
        845: function(t, e, n) {
            "use strict";
            var c = n(1),
                r = (n(15), n(131), n(921)),
                o = n(87);
            e.a = {
                validationConfig: {
                    $lazy: !0
                },
                setup: function() {
                    return {
                        vuelidate: Object(r.a)()
                    }
                },
                methods: {
                    resetApiValidation: Object(o.b)(function() {
                        var t = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        (n = Object(o.c)(e, this.vuelidateExternalResults || {})).splice(0, n.length), this.apiError = null;
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(), 500),
                    errorMessage: function(t) {
                        var e = Object(o.c)(t, this.vuelidate).$errors;
                        return e.length ? e[0].$message : null
                    }
                }
            }
        },
        846: function(t, e, n) {
            var c = n(28),
                r = n(43),
                o = n(134),
                l = n(290),
                d = n(13),
                f = c.RegExp,
                m = f.prototype;
            r && d((function() {
                var t = !0;
                try {
                    f(".", "d")
                } catch (e) {
                    t = !1
                }
                var e = {},
                    n = "",
                    c = t ? "dgimsy" : "gimsy",
                    r = function(t, c) {
                        Object.defineProperty(e, t, {
                            get: function() {
                                return n += c, !0
                            }
                        })
                    },
                    o = {
                        dotAll: "s",
                        global: "g",
                        ignoreCase: "i",
                        multiline: "m",
                        sticky: "y"
                    };
                for (var l in t && (o.hasIndices = "d"), o) r(l, o[l]);
                return Object.getOwnPropertyDescriptor(m, "flags").get.call(e) !== c || n !== c
            })) && o(m, "flags", {
                configurable: !0,
                get: l
            })
        },
        869: function(t, e, n) {
            var content = n(919);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("df6d99c6", content, !0, {
                sourceMap: !1
            })
        },
        870: function(t, e, n) {
            "use strict";
            n(51);
            e.a = {
                methods: {
                    reLogin: function() {
                        var t = this;
                        this.$toast.warn(this.$t("common.error.user-unknown")), setTimeout((function() {
                            return t.$auth.socialRedirect({
                                provider: "steam"
                            })
                        }), 5e3)
                    }
                }
            }
        },
        884: function(t, e, n) {
            "use strict";
            var c = {
                    name: "layout-section"
                },
                r = (n(918), n(2)),
                component = Object(r.a)(c, (function() {
                    return (0, this._self._c)("section", {
                        staticClass: "layout-section"
                    }, [this._t("default")], 2)
                }), [], !1, null, "5b1033f6", null);
            e.a = component.exports
        },
        889: function(t, e, n) {
            "use strict";
            n(824)
        },
        890: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".form-checkbox[data-v-667e54a1]{margin:-.5rem 0}.form-checkbox:hover .form-checkbox__box[data-v-667e54a1]{border-color:#7b776f}.form-checkbox__core[data-v-667e54a1]{color:#aea89b;cursor:pointer;display:flex;gap:.5rem;padding:.5rem 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.form-checkbox__box[data-v-667e54a1]{align-items:center;border:2px solid #56524d;border-radius:.25rem;color:#3f3c38;cursor:pointer;display:flex;flex-shrink:0;font-size:.75rem;height:1.125rem;justify-content:center;transition:background-color 275ms,border 175ms;width:1.125rem}.form-checkbox.error .form-checkbox__box[data-v-667e54a1]{border-color:#dc3030}.form-checkbox.checked .form-checkbox__box[data-v-667e54a1]{background-color:#aea89b;border-color:#aea89b;color:#21201e}.form-checkbox.checked .form-checkbox__box .form-checkbox__icon[data-v-667e54a1]{opacity:1}.form-checkbox.readonly .form-checkbox__box[data-v-667e54a1]{cursor:not-allowed}.form-checkbox__icon[data-v-667e54a1]{opacity:0;pointer-events:none;transition:opacity 175ms}.form-checkbox__label[data-v-667e54a1]{font-size:.875rem;line-height:1.5;margin-top:-2px}", ""]), c.locals = {}, t.exports = c
        },
        900: function(t, e, n) {
            "use strict";
            n(31), n(42);
            var c = n(9),
                r = n(283),
                o = {
                    name: "form-checkbox",
                    components: {
                        FormItem: n(281).a,
                        FormValidation: r.a
                    },
                    icons: {
                        mdiCheckBold: c.o
                    },
                    props: {
                        value: {
                            type: Boolean,
                            required: !0
                        },
                        readonly: {
                            type: Boolean,
                            default: !1
                        },
                        validationMessage: {
                            type: String,
                            default: null
                        },
                        validationStatus: {
                            type: String,
                            default: null
                        }
                    },
                    data: function() {
                        return {
                            checked: this.value
                        }
                    },
                    computed: {
                        classList: function() {
                            return [this.status, {
                                checked: this.checked,
                                readonly: this.readonly
                            }]
                        },
                        status: function() {
                            return !this.validationStatus && this.validationMessage ? "error" : this.validationStatus
                        }
                    },
                    watch: {
                        checked: function(t) {
                            this.$emit("input", t)
                        }
                    }
                },
                l = (n(889), n(2)),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("form-item", {
                        staticClass: "form-checkbox",
                        class: t.classList
                    }, [e("label", {
                        staticClass: "form-checkbox__core"
                    }, [e("input", t._b({
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.checked,
                            expression: "checked"
                        }],
                        attrs: {
                            disabled: t.readonly,
                            hidden: "",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.checked) ? t._i(t.checked, null) > -1 : t.checked
                        },
                        on: {
                            change: function(e) {
                                var n = t.checked,
                                    c = e.target,
                                    r = !!c.checked;
                                if (Array.isArray(n)) {
                                    var o = t._i(n, null);
                                    c.checked ? o < 0 && (t.checked = n.concat([null])) : o > -1 && (t.checked = n.slice(0, o).concat(n.slice(o + 1)))
                                } else t.checked = r
                            }
                        }
                    }, "input", t.$attrs, !1)), t._v(" "), e("span", {
                        staticClass: "form-checkbox__box"
                    }, [e("fa-icon", {
                        staticClass: "form-checkbox__icon",
                        attrs: {
                            icon: ["mdi", "check-bold"]
                        }
                    })], 1), t._v(" "), e("span", {
                        staticClass: "form-checkbox__label"
                    }, [t._t("default")], 2)]), t._v(" "), e("form-validation", {
                        attrs: {
                            message: t.validationMessage,
                            status: t.status
                        }
                    })], 1)
                }), [], !1, null, "667e54a1", null);
            e.a = component.exports
        },
        917: function(t, e, n) {
            var content = n(1028);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(7).default)("47819205", content, !0, {
                sourceMap: !1
            })
        },
        918: function(t, e, n) {
            "use strict";
            n(869)
        },
        919: function(t, e, n) {
            var c = n(6)((function(i) {
                return i[1]
            }));
            c.push([t.i, ".layout-section[data-v-5b1033f6]{border-bottom:1px solid #3f3c38;padding-bottom:1.5rem}.layout-section[data-v-5b1033f6]:last-child{border-bottom:none;padding-bottom:0}", ""]), c.locals = {}, t.exports = c
        },
        920: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var c = {
                $validator: n(856).c.regex(/^https?:\/\/steamcommunity\.com\/tradeoffer\/new\/\?partner=\d{1,11}&token=[0-9A-Za-z_-]{8}$/i),
                $message: "Trade URL is invalid. Double check and try again"
            }
        }
    }
]);