(window.webpackJsonp = window.webpackJsonp || []).push([
    [46], {
        2929: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(1),
                o = (r(15), r(20), r(58), r(69), r(8), r(16), r(17)),
                c = r(298),
                d = r(35),
                l = r(450),
                O = r(88),
                m = Object(d.a)({
                    OPEN_BONUS_MODAL: "bonus",
                    OPEN_DEPOSIT_MODAL: "deposit",
                    OPEN_BACKPACK: "backpack",
                    OPEN_CHRISTMAS_MODAL: "christmas",
                    REDIRECT_TO_DISCORD: "discord"
                }),
                f = function(e, t) {
                    if (e.$auth.loggedIn) {
                        var r = e.$route || e.route,
                            n = e.$store || e.store,
                            d = e.$i18n || e.app.i18n,
                            l = function() {
                                var path = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e.localePath("/trade");
                                t ? e.redirect(path) : e.$router.replace(path)
                            };
                        switch (r.params.action) {
                            case m.OPEN_BONUS_MODAL:
                                return e.$auth.user.orderBonusEligible && !n.state["trade-cart"].bonusCode ? e.$modal.show("code-bonus") : e.$toast.info(d.t("trade.bonus.already-claimed")), l();
                            case m.OPEN_DEPOSIT_MODAL:
                                return r.query.id ? e.$modal.show("deposit-state", {
                                    depositId: r.query.id
                                }) : e.$modal.show("deposit"), l();
                            case m.OPEN_BACKPACK:
                                return n.commit("trade-filter/setField", {
                                    path: o.a.USER,
                                    key: "game",
                                    value: O.b.VIRTUAL
                                }), l();
                            case m.OPEN_CHRISTMAS_MODAL:
                                e.store.watch((function() {
                                    return e.store.state.christmas.userNextExperienceTier
                                }), (function(t) {
                                    if (t >= 0) return e.$modal.replace(0 === e.store.state.christmas.userNextExperienceTier ? "christmas-gift" : "christmas-event"), l()
                                }), {
                                    immediate: !0
                                });
                                break;
                            case m.REDIRECT_TO_DISCORD:
                                window.location.href = c.a.find((function(e) {
                                    return "Discord" === e.name
                                })).url
                        }
                    }
                },
                h = {
                    layout: "cover",
                    middleware: ["auth", function() {
                        var e = Object(n.a)(regeneratorRuntime.mark((function e(t) {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("UNKNOWN" !== m.$getName(t.route.params.action)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", t.error({
                                            statusCode: 404
                                        }));
                                    case 2:
                                        return e.next = 5, Object(l.a)();
                                    case 5:
                                        return e.next = 7, f(t, !0);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()],
                    mounted: function() {
                        f(this)
                    }
                },
                _ = h,
                E = r(2),
                component = Object(E.a)(_, (function() {
                    return (0, this._self._c)("div")
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);