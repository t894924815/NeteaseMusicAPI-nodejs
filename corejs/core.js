(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    };
    NEJ.P = function (FM7F) {
        if (!FM7F || !FM7F.length) return null;
        var YB6v = window;
        for (var a = FM7F.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; YB6v = YB6v[a[i]] = YB6v[a[i]] || {}, i++) ;
        return YB6v
    };
    NEJ.Q = function (bN7G, FM7F) {
        bN7G = bN7G || NEJ.O;
        var bs7l = FM7F.split(".");
        for (var i = 0, l = bs7l.length; i < l; i++) {
            bN7G = bN7G[bs7l[i]];
            if (!bN7G) break
        }
        return bN7G
    };
    NEJ.C = function () {
        var bvt5y = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var bLC9t = function (C6w, bv7o) {
            for (var x in bv7o) if (C6w == bv7o[x]) return x;
            return null
        };
        var beK9B = {cs7l: 0, bj6d: 1, bA7t: 2, bS7L: 3, bH7A: 4, eL8D: 5, jR0x: 6, es8k: 7},
            uB3x = {cx7q: 0, bk6e: 1, bF7y: 2, cc7V: 3, bL7E: 4, gp9g: 5, kA0x: 6, fW9N: 7};
        return function () {
            var fv8n = function () {
                this.bvR5W();
                return this.cs7l.apply(this, arguments)
            };
            fv8n.prototype.bvR5W = NEJ.F;
            fv8n.prototype.cs7l = NEJ.F;
            fv8n.O6I = function (BV5a, bwH5M) {
                if (bvt5y(BV5a)) return;
                if (bwH5M == null || !!bwH5M) NEJ.X(this, BV5a, bvt5y);
                this.cdG5L = BV5a;
                this.cl7e = BV5a.prototype;
                var bG7z = function () {
                };
                bG7z.prototype = BV5a.prototype;
                this.prototype = new bG7z;
                var Du6o = this.prototype;
                Du6o.constructor = this;
                var cf7Y;
                for (var x in beK9B) {
                    cf7Y = bLC9t(beK9B[x], uB3x);
                    if (!cf7Y || !this.cl7e[x]) continue;
                    Du6o[x] = function (T6N) {
                        return function () {
                            this[T6N].apply(this, arguments)
                        }
                    }(cf7Y)
                }
                var Gf7Y = {};
                for (var x in uB3x) {
                    cf7Y = bLC9t(uB3x[x], beK9B);
                    if (!cf7Y || !this.cl7e[cf7Y]) continue;
                    Gf7Y[cf7Y] = BV5a;
                    Du6o[x] = function (T6N) {
                        return function () {
                            var o6i, bG7z = this.bgo9f[T6N], bbY8Q = bG7z.prototype[T6N];
                            this.bgo9f[T6N] = bG7z.cdG5L || BV5a;
                            if (!!bbY8Q) o6i = bbY8Q.apply(this, arguments);
                            this.bgo9f[T6N] = BV5a;
                            return o6i
                        }
                    }(cf7Y)
                }
                Du6o.bvR5W = function () {
                    this.bgo9f = NEJ.X({}, Gf7Y)
                };
                Du6o.cCi0x = Du6o.cx7q;
                return Du6o
            };
            return fv8n
        }
    }();
    NEJ.X = function (gb9S, bQ7J, dP8H) {
        if (!gb9S || !bQ7J) return gb9S;
        dP8H = dP8H || NEJ.F;
        for (var x in bQ7J) {
            if (bQ7J.hasOwnProperty(x) && !dP8H(bQ7J[x], x)) gb9S[x] = bQ7J[x]
        }
        return gb9S
    };
    NEJ.EX = function (gb9S, bQ7J) {
        if (!gb9S || !bQ7J) return gb9S;
        for (var x in gb9S) {
            if (gb9S.hasOwnProperty(x) && bQ7J[x] != null) gb9S[x] = bQ7J[x]
        }
        return gb9S
    };
    var KZ8R = Function.prototype;
    KZ8R.er8j = function (le0x, Tz5E) {
        var f = NEJ.F, Tz5E = Tz5E || f, le0x = le0x || f, dp8h = this;
        return function () {
            var d6d = {args: NEJ.R.slice.call(arguments, 0)};
            le0x(d6d);
            if (!d6d.stopped) {
                d6d.value = dp8h.apply(this, d6d.args);
                Tz5E(d6d)
            }
            return d6d.value
        }
    };
    KZ8R.g6a = function () {
        var bh6b = arguments, gb9S = arguments[0], bgp9g = this;
        return function () {
            var vH3x = NEJ.R.slice.call(bh6b, 1);
            NEJ.R.push.apply(vH3x, arguments);
            return bgp9g.apply(gb9S || window, vH3x)
        }
    };
    KZ8R.en8f = function () {
        var bh6b = arguments, gb9S = NEJ.R.shift.call(bh6b), bgp9g = this;
        return function () {
            NEJ.R.push.apply(arguments, bh6b);
            return bgp9g.apply(gb9S || window, arguments)
        }
    };
    var KZ8R = String.prototype;
    if (!KZ8R.trim) {
        KZ8R.trim = function () {
            var cZ7S = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(cZ7S, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, N6H = c6e("nej.p"), bcs8k = window.navigator.platform,
        tA3x = window.navigator.userAgent;
    var kK0x = {mac: bcs8k, win: bcs8k, linux: bcs8k, ipad: tA3x, ipod: tA3x, iphone: bcs8k, android: tA3x};
    N6H.KX8P = kK0x;
    for (var x in kK0x) kK0x[x] = (new RegExp(x, "i")).test(kK0x[x]);
    kK0x.ios = kK0x.ipad || kK0x.iphone || kK0x.ipod;
    kK0x.tablet = kK0x.ipad;
    kK0x.desktop = kK0x.mac || kK0x.win || kK0x.linux && !kK0x.android;
    var hT9K = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {css: "", pro: "", clz: ""}
    };
    N6H.dj8b = hT9K;
    if (/msie\s+(.*?);/i.test(tA3x) || /trident\/.+rv:([\d\.]+)/i.test(tA3x)) {
        hT9K.engine = "trident";
        hT9K.browser = "ie";
        hT9K.version = RegExp.$1;
        hT9K.prefix = {css: "ms", pro: "ms", clz: "MS", evt: "MS"};
        var oy1x = {6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0"};
        hT9K.release = oy1x[document.documentMode] || oy1x[parseInt(hT9K.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(tA3x)) {
        hT9K.engine = "webkit";
        hT9K.release = RegExp.$1 || "";
        hT9K.prefix = {css: "webkit", pro: "webkit", clz: "WebKit"}
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(tA3x)) {
        hT9K.engine = "gecko";
        hT9K.release = RegExp.$1 || "";
        hT9K.browser = "firefox";
        hT9K.prefix = {css: "Moz", pro: "moz", clz: "Moz"};
        if (/firefox\/(.*?)(?=\s|$)/i.test(tA3x)) hT9K.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(tA3x)) {
        hT9K.engine = "presto";
        hT9K.release = RegExp.$1 || "";
        hT9K.browser = "opera";
        hT9K.prefix = {css: "O", pro: "o", clz: "O"};
        if (/version\/(.*?)(?=\s|$)/i.test(tA3x)) hT9K.version = RegExp.$1 || ""
    }
    if (hT9K.browser == "unknow") {
        var oy1x = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = oy1x.length, T6N; i < l; i++) {
            T6N = oy1x[i] == "safari" ? "version" : oy1x[i];
            if ((new RegExp(T6N + "/(.*?)(?=\\s|$)", "i")).test(tA3x)) {
                hT9K.browser = oy1x[i];
                hT9K.version = RegExp.$1.trim();
                break
            }
        }
    }
    N6H.bND0x = {};
    var XI6C = hT9K.engine != "trident";
    N6H.mF1x = {
        gecko: hT9K.engine != "gecko",
        webkit: hT9K.engine != "webkit",
        presto: hT9K.engine != "presto",
        trident0: XI6C || hT9K.release > "2.0",
        trident1: XI6C || hT9K.release < "6.0",
        trident2: XI6C || hT9K.release > "3.0",
        trident: XI6C || hT9K.release >= "6.0"
    }
})();
(function () {
    var hO9F = NEJ.P("nej.c"), Q6K = {};
    var bgF9w = function () {
        var cZ7S = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V6P) {
            V6P = V6P || "";
            if (cZ7S.test(V6P)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Ts5x = function () {
        var bwq5v = function (i6c, bv7o) {
            if (!i6c || !i6c.length) return;
            for (var i = 0, l = i6c.length, li0x; i < l; i++) {
                li0x = i6c[i];
                if (li0x.indexOf("://") > 0) bv7o[bgF9w(li0x)] = li0x
            }
        };
        var bd6X = {
            portrait: {name: "portrait", dft: "portrait/"},
            "ajax.swf": {name: "ajax", dft: "nej_proxy_flash.swf"},
            "chart.swf": {name: "chart", dft: "nej_flex_chart.swf"},
            "audio.swf": {name: "audio", dft: "nej_player_audio.swf"},
            "video.swf": {name: "video", dft: "nej_player_video.swf"},
            "clipboard.swf": {name: "clipboard", dft: "nej_clipboard.swf"}
        };
        return function (bQ7J) {
            hO9F.KV8N("root", bQ7J.root || "/res/");
            var bjt0x, fK9B = hO9F.B6v("root");
            for (var x in bd6X) {
                bjt0x = bd6X[x];
                hO9F.KV8N(x, bQ7J[bjt0x.name] || fK9B + bjt0x.dft)
            }
            var BO5T = bQ7J.p_csrf;
            if (BO5T == !0) {
                BO5T = {cookie: "AntiCSRF", param: "AntiCSRF"}
            }
            hO9F.KV8N("csrf", NEJ.EX({cookie: "", param: ""}, BO5T));
            Q6K.frames = {};
            bwq5v(bQ7J.p_frame, Q6K.frames);
            Q6K.flashs = {};
            bwq5v(bQ7J.p_flash, Q6K.flashs)
        }
    }();
    hO9F.KV8N = function (J6D, C6w) {
        Q6K[J6D] = C6w
    };
    hO9F.B6v = function (J6D) {
        return Q6K[J6D]
    };
    hO9F.bWF3x = function (V6P) {
        var sB2x = bgF9w(V6P);
        return Q6K.frames[sB2x] || sB2x + "/res/nej_proxy_frame.html"
    };
    hO9F.bXb3x = function (V6P) {
        return Q6K.flashs[bgF9w(V6P)]
    };
    Ts5x(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p"), hO9F = c6e("nej.c"), bQ7J = window.NEJ_CONF || NEJ.O;
    if (N6H.mF1x.trident) return;
    hO9F.KV8N("storage.swf", bQ7J.storage || hO9F.B6v("root") + "nej_storage.swf");
    if (N6H.dj8b.release < "4.0") {
        hO9F.KV8N("blank.png", bQ7J.blank || hO9F.B6v("root") + "nej_blank.gif")
    }
    var i6c = bQ7J.xdr, go9f = /^(https?:\/\/.*?)(?=\/|$)/i, jD0x = /[\/?=&]/i;
    var bNW0x = function (V6P) {
        return (go9f.test(V6P) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i6c && !!i6c.length) for (var i = i6c.length - 1, V6P, J6D; i >= 0; i--) {
        V6P = i6c[i];
        J6D = bNW0x(V6P);
        if (!!J6D) hO9F.KV8N(J6D, V6P)
    }
    hO9F.cBa0x = function (V6P) {
        var J6D = bNW0x(V6P);
        if (!J6D) {
            if (jD0x.test(V6P)) {
                J6D = location.protocol + "//" + location.host
            } else if (V6P.indexOf("://") < 0) {
                J6D = location.protocol + "//" + V6P
            } else {
                J6D = V6P
            }
        }
        return hO9F.B6v(J6D) || J6D + "/res/nej_xdomain.html"
    }
})();
(function () {
    var c6e = NEJ.P, hO9F = c6e("nej.c"), N6H = c6e("nej.g"), gq9h = +(new Date);
    N6H.cAR0x = 1e4 - gq9h;
    N6H.blG1x = 10001 - gq9h;
    N6H.cAO0x = 10002 - gq9h;
    N6H.bwG5L = 10003 - gq9h;
    N6H.cku6o = 10004 - gq9h;
    N6H.cAF0x = 10005 - gq9h;
    N6H.bne1x = 10006 - gq9h;
    N6H.cwl9c = 10007 - gq9h;
    N6H.yj4n = "Content-Type";
    N6H.cAy0x = "text/plain";
    N6H.EM6G = "multipart/form-data";
    N6H.cwD9u = "application/x-www-form-urlencoded";
    N6H.bnm1x = hO9F.B6v("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var c6e = NEJ.P, fj8b = NEJ.R, N6H = c6e("nej.p"), a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        bc6W = c6e("nej.h");
    var lD0x = N6H.dj8b.prefix, bzW6Q = N6H.bND0x,
        cwT9K = {scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})"}, cwU9L = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }, Tb5g = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var Ts5x = function () {
        var ss2x = bc6W.bzZ6T();
        bzW6Q.css3d = !!ss2x && ss2x.m41 != null;
        var cZ7S = /-([a-z])/g;
        for (var x in Tb5g) {
            Tb5g[bAe6Y(x)] = Tb5g[x]
        }
    };
    var bAe6Y = function () {
        var cZ7S = /-([a-z])/g;
        return function (T6N) {
            T6N = T6N || "";
            return T6N.replace(cZ7S, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bAg6a = function (T6N) {
        return (!bzW6Q.css3d ? cwT9K : cwU9L)[T6N]
    };
    var bAh6b = function () {
        var cZ7S = /\s+/;
        return function (fv8n) {
            fv8n = (fv8n || "").trim();
            return !!fv8n ? fv8n.split(cZ7S) : null
        }
    }();
    var bby8q = function (G6A, t6n, fv8n) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return;
        k6e.bb6V(bAh6b(fv8n), function (dS8K) {
            G6A.classList[t6n](dS8K)
        })
    };
    bc6W.KQ8I = function (i6c) {
        return fj8b.slice.call(i6c, 0)
    };
    bc6W.bnr1x = function (G6A) {
        return bc6W.KQ8I(G6A.children)
    };
    bc6W.bns1x = function (G6A, fv8n) {
        return bc6W.KQ8I(G6A.getElementsByClassName(fv8n))
    };
    bc6W.bnt1x = function (G6A, KO8G) {
        bby8q(G6A, "add", KO8G)
    };
    bc6W.bnu1x = function (G6A, KM8E) {
        bby8q(G6A, "remove", KM8E)
    };
    bc6W.SN5S = function (G6A, KM8E, KO8G) {
        bby8q(G6A, "remove", KM8E);
        bby8q(G6A, "add", KO8G)
    };
    bc6W.bnw1x = function (G6A, fv8n) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return !1;
        var i6c = G6A.classList;
        if (!i6c || !i6c.length) return !1;
        return k6e.dd8V(bAh6b(fv8n), function (dS8K) {
            return i6c.contains(dS8K)
        }) >= 0
    };
    bc6W.bnF1x = function (G6A, dS8K) {
    };
    bc6W.boo2x = function (G6A) {
    };
    bc6W.bor2x = function (fO9F, nf1x) {
        fO9F.selectionEnd = nf1x.end || 0;
        fO9F.selectionStart = nf1x.start || 0;
        fO9F.focus()
    };
    bc6W.boX2x = function (fO9F) {
        return {end: fO9F.selectionEnd, start: fO9F.selectionStart}
    };
    bc6W.boZ2x = function () {
        var DY6S = function (dS8K, d6d) {
            var G6A = h6b.U6O(d6d);
            if (!G6A.value) a5f.v6p(G6A, dS8K)
        };
        var KH8z = function (dS8K, d6d) {
            a5f.w6q(h6b.U6O(d6d), dS8K)
        };
        return function (G6A, eZ8R, dS8K) {
            if (eZ8R == 1) {
                h6b.s6m(G6A, "blur", DY6S.g6a(null, dS8K))
            }
            if (eZ8R == 1 || eZ8R == -1) {
                h6b.s6m(G6A, "focus", KH8z.g6a(null, dS8K))
            }
        }
    }();
    bc6W.bph2x = function (I6C) {
        return (new XMLSerializer).serializeToString(I6C) || ""
    };
    bc6W.bqa4e = function (BE5J) {
        var fK9B = (new DOMParser).parseFromString(BE5J, "text/xml").documentElement;
        return fK9B.nodeName == "parsererror" ? null : fK9B
    };
    bc6W.bqf4j = function (G6A) {
    };
    bc6W.ng1x = function (G6A) {
        return null
    };
    bc6W.bqi4m = function (G6A) {
        return null
    };
    bc6W.bqm4q = function (dW8O) {
    };
    bc6W.bqK4O = function () {
        var bh6b = bc6W.KQ8I(arguments);
        bh6b[0] = a5f.B6v(bh6b[0]);
        if (!bh6b[0]) return null;
        bh6b[1] = (bh6b[1] || "").toLowerCase();
        if (!bh6b[1]) return null;
        return bh6b
    };
    bc6W.BD5I = function () {
        var vc3x = {touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup"}, iT9K = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration"
        };
        var cee5j = function (t6n) {
            return (lD0x.evt || lD0x.pro) + t6n
        };
        return function () {
            var bh6b = bc6W.bqK4O.apply(bc6W, arguments);
            if (!bh6b) return;
            var bcy8q = iT9K[bh6b[1]], bcI8A = vc3x[bh6b[1]];
            if (!!bcy8q) {
                bh6b[4] = bh6b[1];
                bh6b[1] = cee5j(bcy8q)
            } else if (!!bcI8A) {
                var T6N = "on" + bh6b[1];
                if (!(T6N in bh6b[0])) {
                    bh6b[4] = bh6b[1];
                    bh6b[1] = bcI8A
                }
            }
            return bh6b
        }
    }();
    bc6W.bqM4Q = function () {
        var bh6b = arguments;
        bh6b[0].addEventListener(bh6b[1], bh6b[2], !!bh6b[3])
    };
    bc6W.VB5G = function () {
        var bh6b = arguments;
        bh6b[0].removeEventListener(bh6b[1], bh6b[2], !!bh6b[3])
    };
    bc6W.bqZ4d = function (G6A, t6n, e6c) {
        var d6d = document.createEvent("Event");
        d6d.initEvent(t6n, !0, !0);
        NEJ.X(d6d, e6c);
        G6A.dispatchEvent(d6d)
    };
    bc6W.bzZ6T = function () {
        var go9f = /\((.*?)\)/, jD0x = /\s*,\s*/, i6c = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Wv6p = function (ss2x) {
            var iz9q = {};
            if (go9f.test(ss2x || "")) {
                k6e.bb6V(RegExp.$1.split(jD0x), function (C6w, r6l) {
                    iz9q[i6c[r6l]] = C6w || ""
                })
            }
            return iz9q
        };
        return function (ss2x) {
            if (!!window.CSSMatrix) return new CSSMatrix(ss2x);
            var T6N = lD0x.clz + "CSSMatrix";
            if (!!window[T6N]) return new window[T6N](ss2x || "");
            return Wv6p(ss2x)
        }
    }();
    bc6W.bIC8u = function () {
        var cZ7S = /\{(.*?)\}/g;
        return function (T6N, bv7o) {
            bv7o = bv7o || o;
            var pT1x = bAg6a(T6N);
            return !pT1x ? "" : pT1x.replace(cZ7S, function ($1, $2) {
                var bs7l = $2.split("|");
                return bv7o[bs7l[0]] || bs7l[1] || "0"
            })
        }
    }();
    bc6W.brl4p = function (G6A, T6N, C6w) {
        G6A.style[bc6W.bIW8O(T6N)] = C6w
    };
    bc6W.bIW8O = function () {
        var cZ7S = /^[a-z]/, brA4E = lD0x.css;
        var cql8d = function (T6N) {
            return T6N.replace(cZ7S, function ($1) {
                return brA4E + $1.toUpperCase()
            })
        };
        return function (T6N) {
            T6N = bAe6Y(T6N);
            var csT8L = bc6W.csZ8R(T6N, Tb5g);
            return csT8L ? cql8d(T6N) : T6N
        }
    }();
    bc6W.csZ8R = function () {
        var cZ7S = /^([a-z]+?)[A-Z]/;
        return function (T6N, bv7o) {
            if (!bv7o[T6N]) {
                if (cZ7S.test(T6N)) T6N = RegExp.$1
            }
            return !!bv7o[T6N]
        }
    }();
    bc6W.ctf8X = function () {
        var cZ7S = /\$<(.*?)>/gi, brA4E = "-" + lD0x.css.toLowerCase() + "-";
        return function (jH0x) {
            return jH0x.replace(cZ7S, function ($1, $2) {
                var eG8y = $2, bs7l = eG8y.split("|"), pT1x = bAg6a(bs7l[0]);
                if (!!pT1x) {
                    return bc6W.bIC8u(bs7l[0], k6e.hD9u(bs7l[1]))
                }
                return !bc6W.cuc8U(eG8y, Tb5g) ? eG8y : brA4E + eG8y
            })
        }
    }();
    bc6W.cuc8U = function (T6N, bv7o) {
        return !!bv7o[T6N]
    };
    bc6W.btZ5e = function (cb7U, jH0x) {
        cb7U.textContent = jH0x
    };
    bc6W.buf5k = function (cb7U, jH0x) {
        var xh4l = cb7U.sheet, bm6g = xh4l.cssRules.length;
        xh4l.insertRule(jH0x, bm6g);
        return xh4l.cssRules[bm6g]
    };
    bc6W.cyq9h = function (G6A, e6c) {
    };
    bc6W.Vd5i = function (Vf5k) {
        return (Vf5k || "").toLowerCase() != "transparent"
    };
    bc6W.cye9V = function (G6A) {
    };
    bc6W.bcS8K = function (G6A, T6N) {
        if (!!G6A.getAttribute) return G6A.getAttribute(T6N);
        return ""
    };
    bc6W.VR6L = function (ft8l) {
        a5f.cz7s(ft8l)
    };
    Ts5x()
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), N6H = c6e("nej.p"), bc6W = c6e("nej.h");
    if (N6H.mF1x.trident0) return;
    var gq9h = +(new Date);
    Q6K = {};
    bc6W.bnF1x = bc6W.bnF1x.er8j(function (d6d) {
        d6d.stopped = !0;
        var bh6b = d6d.args, D6x = a5f.kZ0x(bh6b[0]), J6D = "hover-" + D6x;
        if (!D6x || !!Q6K[J6D]) return;
        Q6K[J6D] = !0;
        h6b.s6m(D6x, "mouseenter", a5f.w6q.g6a(a5f, D6x, bh6b[1]));
        h6b.s6m(D6x, "mouseleave", a5f.v6p.g6a(a5f, D6x, bh6b[1]))
    });
    bc6W.boo2x = function () {
        var cAB0x = function () {
        };
        return bc6W.boo2x.er8j(function (d6d) {
            d6d.stopped = !0;
            var G6A = d6d.args[0], D6x = "fixed-" + a5f.kZ0x(G6A);
            if (!!Q6K[D6x]) return;
            var bd6X = {};
            Q6K[D6x] = bd6X
        })
    }();
    bc6W.bqf4j = bc6W.bqf4j.er8j(function (d6d) {
        d6d.stopped = !0;
        var G6A = d6d.args[0], cb7U = G6A.style, bRw2x = a5f.oQ1x();
        cb7U.width = bRw2x.scrollWidth + "px";
        cb7U.height = bRw2x.scrollHeight + "px"
    });
    bc6W.ng1x = bc6W.ng1x.er8j(function (d6d) {
        d6d.stopped = !0;
        var G6A = d6d.args[0], kI0x = Q6K[G6A.msk];
        if (!kI0x) {
            G6A.msk = gq9h++;
            kI0x = a5f.cY7R("iframe");
            kI0x.style.position = "absolute";
            Q6K[G6A.msk] = kI0x
        }
        d6d.value = kI0x;
        var cb7U = kI0x.style;
        cb7U.top = (parseInt(a5f.cV7O(G6A, "top")) || 0) + "px";
        cb7U.left = (parseInt(a5f.cV7O(G6A, "left")) || 0) + "px";
        cb7U.width = G6A.offsetWidth + "px";
        cb7U.height = G6A.offsetHeight + "px";
        G6A.insertAdjacentElement("beforeBegin", kI0x)
    });
    bc6W.bqi4m = bc6W.bqi4m.er8j(function (d6d) {
        d6d.stopped = !0;
        var kI0x = Q6K[d6d.args[0].msk];
        if (!!kI0x) a5f.mK1x(kI0x)
    })
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p"), a5f = c6e("nej.e"), bc6W = c6e("nej.h");
    if (N6H.mF1x.trident1) return;
    bc6W.BD5I = function () {
        var vc3x = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return bc6W.BD5I.er8j(function (d6d) {
            var bh6b = bc6W.bqK4O.apply(bc6W, d6d.args);
            if (!bh6b) {
                d6d.stopped = !0;
                return
            }
            var t6n = vc3x[bh6b[1]];
            if (!!t6n && ("on" + t6n).toLowerCase() in bh6b[0]) {
                bh6b[4] = bh6b[1];
                bh6b[1] = t6n;
                d6d.stopped = !0;
                d6d.value = bh6b
            }
        })
    }();
    bc6W.Vd5i = function (Vf5k) {
        return !0
    };
    bc6W.VR6L = bc6W.VR6L.er8j(function (d6d) {
        d6d.stopped = !0;
        var ft8l = d6d.args[0];
        a5f.Y6S(ft8l, "display", "none");
        try {
            ft8l.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) {
        }
    })
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, N6H = c6e("nej.p"), a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        bc6W = c6e("nej.h"), buJ5O = {};
    if (N6H.mF1x.trident) return;
    bc6W.KQ8I = bc6W.KQ8I.er8j(function (d6d) {
        d6d.stopped = !0;
        var i6c = d6d.args[0];
        if (!i6c) {
            d6d.value = null;
            return
        }
        var r6l = 0, o6i = [];
        while (!!i6c[r6l]) {
            o6i.push(i6c[r6l++])
        }
        d6d.value = o6i
    });
    bc6W.bnr1x = bc6W.bnr1x.er8j(function (d6d) {
        d6d.stopped = !0;
        var bs7l = [];
        k6e.bb6V(d6d.args[0].childNodes, function (f6b) {
            if (f6b.nodeType == 1) bs7l.push(f6b)
        });
        d6d.value = bs7l
    });
    bc6W.bns1x = bc6W.bns1x.er8j(function (d6d) {
        var G6A = d6d.args[0];
        if (!!G6A.getElementsByClassName) return;
        d6d.stopped = !0;
        var o6i = [], buH5M = new RegExp("(\\s|^)(?:" + d6d.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k6e.bb6V(G6A.getElementsByTagName("*"), function (f6b) {
            if (buH5M.test(f6b.className)) o6i.push(f6b)
        });
        d6d.value = o6i
    });
    bc6W.bor2x = bc6W.bor2x.er8j(function (d6d) {
        var fO9F = d6d.args[0], nf1x = d6d.args[1];
        if (fO9F.selectionStart == null) {
            d6d.stopped = !0;
            var cR7K = fO9F.createTextRange();
            cR7K.collapse(!0);
            cR7K.moveStart("character", nf1x.start);
            cR7K.moveEnd("character", nf1x.end - nf1x.start);
            cR7K.select();
            fO9F.focus()
        }
    });
    bc6W.boX2x = bc6W.boX2x.er8j(function (d6d) {
        var fO9F = d6d.args[0];
        fO9F.focus();
        if (fO9F.selectionStart == null) {
            d6d.stopped = !0;
            var bRq2x = document.selection.createRange();
            var bRp2x = fO9F.createTextRange();
            bRp2x.moveToBookmark(bRq2x.getBookmark());
            var buG5L = fO9F.createTextRange();
            buG5L.collapse(!0);
            buG5L.setEndPoint("EndToStart", bRp2x);
            var hW9N = buG5L.text.length;
            d6d.value = {start: hW9N, end: hW9N + bRq2x.text.length}
        }
    });
    bc6W.bph2x = bc6W.bph2x.er8j(function (d6d) {
        if (!!window.XMLSerializer) return;
        d6d.stopped = !0;
        var G6A = d6d.args[0];
        d6d.value = G6A.xml != null ? G6A.xml : G6A.outHTML
    });
    bc6W.bqa4e = function () {
        var Sx4B = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var cxB9s = function () {
            try {
                for (var i = 0, l = Sx4B.length; i < l; i++) return new ActiveXObject(Sx4B[i])
            } catch (ex) {
                return null
            }
        };
        return bc6W.bqa4e.er8j(function (d6d) {
            if (!!window.DOMParser) return;
            d6d.stopped = !0;
            var nx1x = cxB9s();
            if (!!nx1x && nx1x.loadXML(d6d.args[0]) && !nx1x.parseError.errorCode) d6d.value = nx1x.documentElement
        })
    }();
    bc6W.BD5I = function () {
        var iT9K = {input: "propertychange", load: "readystatechange"};
        for (var x in iT9K) buJ5O[iT9K[x]] = !0;
        var cxA9r = function (G6A, t6n) {
            if ("on" + t6n in G6A) return null;
            return iT9K[t6n] || ""
        };
        var cxd9U = function (t6n, dp8h) {
            var dE8w = dp8h;
            switch (t6n) {
                case"readystatechange":
                    dE8w = function (d6d) {
                        var G6A = h6b.U6O(d6d) || this;
                        if (G6A.readyState == "loaded" || G6A.readyState == "complete") {
                            d6d.target = G6A;
                            dp8h.call(G6A, d6d)
                        }
                    };
                    break;
                case"propertychange":
                    dE8w = function (d6d) {
                        var G6A = h6b.U6O(d6d) || this;
                        if ("value" in G6A && d6d.propertyName == "value") {
                            d6d.target = G6A;
                            dp8h.call(G6A, d6d)
                        }
                    };
                    break
            }
            return dE8w
        };
        return bc6W.BD5I.er8j(function (d6d) {
            var bh6b = bc6W.bqK4O.apply(bc6W, d6d.args);
            if (!bh6b) {
                d6d.stopped = !0;
                return
            }
            var t6n = cxA9r(bh6b[0], bh6b[1]);
            if (!!t6n) {
                d6d.stopped = !0;
                bh6b[4] = bh6b[1];
                bh6b[1] = t6n;
                if (!!bh6b[2]) {
                    bh6b[5] = bh6b[2];
                    bh6b[2] = cxd9U(bh6b[1], bh6b[2])
                }
                d6d.value = bh6b
            }
        }, function (d6d) {
            var bh6b = d6d.value;
            if (!bh6b[0] || !k6e.gr9i(bh6b[2])) return;
            if (!k6e.gr9i(bh6b[5])) bh6b[5] = bh6b[2];
            bh6b[2] = bh6b[2].g6a(bh6b[0])
        })
    }();
    bc6W.bqM4Q = bc6W.bqM4Q.er8j(function (d6d) {
        var bh6b = d6d.args;
        if (!!buJ5O[bh6b[1]] || !document.addEventListener) {
            d6d.stopped = !0;
            bh6b[0].attachEvent("on" + bh6b[1], bh6b[2])
        }
    });
    bc6W.VB5G = bc6W.VB5G.er8j(function (d6d) {
        var bh6b = d6d.args;
        if (!!buJ5O[bh6b[1]] || !document.removeEventListener) {
            d6d.stopped = !0;
            bh6b[0].detachEvent("on" + bh6b[1], bh6b[2])
        }
    });
    bc6W.bqZ4d = bc6W.bqZ4d.er8j(function (d6d) {
        if (!document.createEvent) {
            d6d.stopped = !0;
            var bh6b = d6d.args, bRc2x = document.createEventObject();
            NEJ.X(bRc2x, bh6b[2]);
            try {
                bh6b[0].fireEvent("on" + bh6b[1], bRc2x)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    bc6W.brl4p = bc6W.brl4p.er8j(function (d6d) {
        var bh6b = d6d.args, T6N = bh6b[1].toLowerCase();
        if (T6N == "opacity" && !(T6N in document.body.style)) {
            bh6b[1] = "filter";
            bh6b[2] = "alpha(opacity=" + bh6b[2] * 100 + ")"
        }
    });
    bc6W.btZ5e = function () {
        var fc8U = 30;
        return bc6W.btZ5e.er8j(function (d6d) {
            var G6A = d6d.args[0];
            if (!G6A.styleSheet) return;
            d6d.stopped = !0;
            var jH0x = d6d.args[1];
            var i6c = document.styleSheets;
            if (i6c.length > fc8U) {
                G6A = i6c[fc8U];
                jH0x = G6A.cssText + jH0x
            } else {
                G6A = G6A.styleSheet
            }
            G6A.cssText = jH0x
        })
    }();
    bc6W.buf5k = bc6W.buf5k.er8j(function (d6d) {
        var bh6b = d6d.args, xh4l = bh6b[0].sheet;
        if (!!xh4l) return;
        d6d.stopped = !0;
        var xh4l = bh6b[0].styleSheet, bm6g = xh4l.rules.length, bs7l = bh6b[1].split(/[\{\}]/);
        xh4l.addRule(bs7l[0], bs7l[1], bm6g);
        d6d.value = xh4l.rules[bm6g]
    });
    bc6W.boZ2x = function () {
        var DY6S = function (dS8K, d6d) {
            a5f.v6p(h6b.U6O(d6d), dS8K)
        };
        return bc6W.boZ2x.er8j(function (d6d) {
            if (N6H.dj8b.release >= "4.0") return;
            var bh6b = d6d.args;
            if (bh6b[1] != 1) {
                h6b.s6m(bh6b[0], "blur", DY6S.g6a(null, bh6b[2]));
                bh6b[1] = -1
            }
        })
    }();
    bc6W.Vd5i = function (Vf5k) {
        return !0
    };
    bc6W.bcS8K = bc6W.bcS8K.er8j(function (d6d) {
        var bh6b = d6d.args, f6b = (bh6b[0].attributes || Z6T)[bh6b[1]];
        if (!!f6b) {
            d6d.stopped = !0;
            d6d.value = f6b.value
        }
    }, function (d6d) {
        var bh6b = d6d.args;
        if (bh6b[1] == "maxlength" && d6d.value == 2147483647) d6d.value = ""
    });
    if (N6H.dj8b.release < 5) {
        bc6W.bqm4q = function () {
            var eE8w, ft8l, jE0x = [], buy5D = "cb-" + +(new Date),
                bl6f = '<script>parent.nej.h["' + buy5D + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bQY2x = function () {
                eE8w = window.clearTimeout(eE8w);
                if (!jE0x.length) return;
                var dW8O = jE0x.shift();
                try {
                    var vh3x = ft8l.contentWindow.document;
                    vh3x.open();
                    vh3x.write("<head><title>");
                    vh3x.write(document.title);
                    vh3x.write("</title>");
                    vh3x.write(bl6f.replace("#<HASH>", encodeURIComponent(dW8O)));
                    vh3x.write("</head><body></body>");
                    if (location.hostname != document.domain) vh3x.domain = document.domain;
                    vh3x.close();
                    bc6W[buy5D] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jE0x.unshift(dW8O)
                }
                eE8w = window.setTimeout(bQY2x, 50)
            };
            return bc6W.bqm4q.er8j(function (d6d) {
                d6d.stopped = !0;
                var dW8O = d6d.args[0];
                if (!!bc6W[buy5D] || !ft8l && !dW8O) return;
                jE0x.push(dW8O);
                if (!ft8l) ft8l = a5f.Xb6V();
                bQY2x()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
})();
(function () {
    var c6e = NEJ.P, h6b = c6e("nej.v"), bc6W = c6e("nej.h"), N6H = c6e("nej.p"), Xp6j = N6H.bND0x;
    if (N6H.mF1x.gecko) return;
    var Ts5x = function () {
        Xp6j.css3d = Xp6j.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function (iq9h, G6A) {
            if (!iq9h || !G6A) return;
            switch (iq9h) {
                case"beforeEnd":
                    this.appendChild(G6A);
                    return;
                case"beforeBegin":
                    this.parentNode.insertBefore(G6A, this);
                    return;
                case"afterBegin":
                    !this.firstChild ? this.appendChild(G6A) : this.insertBefore(G6A, this.firstChild);
                    return;
                case"afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(G6A) : this.parentNode.insertBefore(G6A, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (bl6f) {
                this.textContent = bl6f
            })
        }
    };
    bc6W.BD5I = function () {
        var go9f = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return bc6W.BD5I.er8j(function (d6d) {
            var bh6b = d6d.args;
            if (go9f.test(bh6b[1] || "")) {
                d6d.stopped = !0;
                d6d.value = bh6b
            }
        })
    }();
    bc6W.cye9V = function () {
        var cwR9I = function (d6d) {
            h6b.bf6Z(d6d);
            h6b.U6O(d6d).control.click()
        };
        return function (G6A) {
            h6b.s6m(G6A, "click", cwR9I)
        }
    }();
    Ts5x()
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), bc6W = c6e("nej.h");
    var Ya6U = function () {
        var oy1x = !!document.body.classList;
        return function () {
            return oy1x
        }
    }();
    var bQV2x = function () {
        var cZ7S = /\s+/g;
        return function (fv8n) {
            fv8n = (fv8n || "").trim();
            return !fv8n ? null : new RegExp("(\\s|^)(?:" + fv8n.replace(cZ7S, "|") + ")(?=\\s|$)", "g")
        }
    }();
    bc6W.SN5S = bc6W.SN5S.er8j(function (d6d) {
        if (Ya6U()) return;
        d6d.stopped = !0;
        var bh6b = d6d.args, G6A = a5f.B6v(bh6b[0]);
        if (!G6A || !bh6b[1] && !bh6b[2]) return;
        var fv8n = G6A.className || "";
        var KO8G = " " + (bh6b[2] || ""), KM8E = bQV2x((bh6b[1] || "") + KO8G);
        !!KM8E && (fv8n = fv8n.replace(KM8E, "$1"));
        G6A.className = (fv8n + KO8G).replace(/\s+/g, " ").trim()
    });
    bc6W.bnt1x = bc6W.bnt1x.er8j(function (d6d) {
        if (Ya6U()) return;
        d6d.stopped = !0;
        var bh6b = d6d.args;
        bc6W.SN5S(bh6b[0], "", bh6b[1])
    });
    bc6W.bnu1x = bc6W.bnu1x.er8j(function (d6d) {
        if (Ya6U()) return;
        d6d.stopped = !0;
        var bh6b = d6d.args;
        bc6W.SN5S(bh6b[0], bh6b[1], "")
    });
    bc6W.bnw1x = bc6W.bnw1x.er8j(function (d6d) {
        if (Ya6U()) return;
        d6d.stopped = !0;
        var bh6b = d6d.args, G6A = a5f.B6v(bh6b[0]);
        if (!G6A) {
            d6d.value = !1;
            return
        }
        var cZ7S = bQV2x(bh6b[1]);
        d6d.value = !cZ7S ? !1 : cZ7S.test(G6A.className || "")
    })
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p"), bc6W = c6e("nej.h");
    if (N6H.mF1x.webkit) return;
    bc6W.Vd5i = function (Vf5k) {
        return !0
    }
})();
(function () {
    var c6e = NEJ.P, bc6W = c6e("nej.h"), a5f = c6e("nej.e"), k6e = c6e("nej.u"), h6b = c6e("nej.v"),
        cP7I = c6e("nej.x"), Q6K = {};
    var bQS2x = function (G6A) {
        G6A = a5f.B6v(G6A);
        if (!G6A || !Q6K[G6A.id]) return;
        var YC6w = !0, D6x = G6A.id;
        k6e.ey8q(Q6K[D6x], function () {
            YC6w = !1;
            return !0
        });
        if (YC6w) delete Q6K[D6x]
    };
    h6b.s6m = cP7I.s6m = function () {
        var cwC9t = function () {
            var bh6b = bc6W.BD5I.apply(bc6W, arguments);
            if (!bh6b || !bh6b[2]) return;
            var ut3x = a5f.kZ0x(bh6b[0]), oo1x = Q6K[ut3x] || {};
            Q6K[ut3x] = oo1x;
            ut3x = bh6b[4] || bh6b[1];
            var Bq5v = oo1x[ut3x] || [];
            oo1x[ut3x] = Bq5v;
            Bq5v.push({type: bh6b[1], func: bh6b[2], capt: !!bh6b[3], sfun: bh6b[5] || bh6b[2]});
            return bh6b.slice(0, 4)
        };
        return function () {
            var bh6b = cwC9t.apply(null, arguments);
            if (!!bh6b) bc6W.bqM4Q.apply(bc6W, bh6b);
            return this
        }
    }();
    h6b.mx0x = cP7I.mx0x = function () {
        var cwz9q = function () {
            var vH3x = arguments, ut3x = a5f.kZ0x(vH3x[0]), oo1x = Q6K[ut3x], t6n = (vH3x[1] || "").toLowerCase(),
                d6d = vH3x[2];
            if (!oo1x || !t6n || !d6d) return;
            oo1x = oo1x[t6n];
            if (!oo1x) return;
            var cwy9p = !!vH3x[3], r6l = k6e.dd8V(oo1x, function (iT9K) {
                return d6d == iT9K.sfun && cwy9p == iT9K.capt
            });
            if (r6l < 0) return;
            var iT9K = oo1x.splice(r6l, 1)[0];
            return !iT9K ? null : [a5f.B6v(ut3x), iT9K.type, iT9K.func, iT9K.capt]
        };
        return function () {
            var bh6b = cwz9q.apply(null, arguments);
            if (!!bh6b) {
                bc6W.VB5G.apply(bc6W, bh6b);
                bQS2x(bh6b[0])
            }
            return this
        }
    }();
    h6b.gG9x = cP7I.gG9x = function () {
        var bQH2x = function () {
            var vH3x = arguments, ut3x = a5f.kZ0x(vH3x[0]), oo1x = Q6K[ut3x], Bq5v = (vH3x[1] || "").toLowerCase();
            if (!oo1x || !Bq5v) return;
            var G6A = a5f.B6v(ut3x);
            k6e.mt0x(oo1x[Bq5v], function (iT9K, r6l, i6c) {
                bc6W.VB5G(G6A, iT9K.type, iT9K.func, iT9K.capt);
                i6c.splice(r6l, 1)
            });
            delete oo1x[Bq5v]
        };
        var cwi9Z = function (G6A) {
            G6A = a5f.B6v(G6A);
            if (!G6A) return;
            var D6x = G6A.id;
            k6e.ey8q(Q6K[D6x], function (i6c, t6n) {
                bQH2x(D6x, t6n)
            });
            delete Q6K[D6x]
        };
        return function (G6A, t6n) {
            !t6n ? cwi9Z(G6A) : bQH2x(G6A, t6n);
            bQS2x(G6A);
            return this
        }
    }();
    h6b.U6O = function () {
        var buo5t;
        var KB8t = function (T6N, G6A) {
            var bs7l = T6N.split(":");
            if (bs7l.length > 1) {
                if (!buo5t) buo5t = {c: a5f.by7r, d: a5f.u6o, a: a5f.ga9R};
                var KA8s = buo5t[bs7l[0]];
                if (!!KA8s) return !!KA8s(G6A, bs7l[1]);
                T6N = bs7l[1]
            }
            return !!a5f.ga9R(G6A, T6N) || !!a5f.u6o(G6A, T6N) || a5f.by7r(G6A, T6N)
        };
        return function (d6d) {
            if (!d6d) return null;
            var G6A = d6d.target || d6d.srcElement, dP8H = arguments[1];
            if (!dP8H) return G6A;
            if (k6e.fw8o(dP8H)) dP8H = KB8t.g6a(null, dP8H);
            if (k6e.gr9i(dP8H)) {
                while (G6A) {
                    if (!!dP8H(G6A)) return G6A;
                    G6A = G6A.parentNode
                }
                return null
            }
            return G6A
        }
    }();
    h6b.bf6Z = function (d6d) {
        h6b.si2x(d6d);
        h6b.cm7f(d6d);
        return this
    };
    h6b.si2x = function (d6d) {
        if (!!d6d) {
            !!d6d.stopPropagation ? d6d.stopPropagation() : d6d.cancelBubble = !0
        }
        return this
    };
    h6b.cm7f = function (d6d) {
        if (!!d6d) {
            !!d6d.preventDefault ? d6d.preventDefault() : d6d.returnValue = !1
        }
        return this
    };
    h6b.cyn9e = function () {
        var pF1x = !1;
        var cvV9M = function () {
            if (pF1x) return;
            pF1x = !0;
            h6b.s6m(document, "click", cvK9B, !0)
        };
        var cvK9B = function (d6d) {
            var G6A = h6b.U6O(d6d), cvD9u = a5f.u6o(G6A, "stopped");
            if (cvD9u == "true") {
                h6b.bf6Z(d6d);
                a5f.u6o(G6A, "stopped", "false")
            }
        };
        return function (d6d) {
            if (!d6d) return;
            if (d6d.type == "click") {
                h6b.bf6Z(d6d);
                return
            }
            cvV9M();
            a5f.u6o(h6b.U6O(d6d), "stopped", "true")
        }
    }();
    h6b.iW9N = function (d6d) {
        return d6d.pageX != null ? d6d.pageX : d6d.clientX + a5f.oQ1x().scrollLeft
    };
    h6b.lJ0x = function (d6d) {
        return d6d.pageY != null ? d6d.pageY : d6d.clientY + a5f.oQ1x().scrollTop
    };
    h6b.z6t = cP7I.z6t = function (G6A, t6n, e6c) {
        var bh6b = bc6W.BD5I(G6A, t6n);
        if (!!bh6b) bc6W.bqZ4d(bh6b[0], bh6b[1], e6c);
        return this
    };
    c6e("dbg").dumpEV = function () {
        return Q6K
    };
    cP7I.isChange = !0
})();
(function () {
    var o = !0, w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify, b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({a: [f, o, !1, w, "\0\b\n\f\r\t"]}) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try {
                                    e = !a('"\t"')
                                } catch (g) {
                                }
                                if (e) try {
                                    e = 1 !== a("01")
                                } catch (i) {
                                }
                            }
                        }
                    } catch (O) {
                        e = !1
                    }
                    if (!c) return e
                }
                return b && e
            }
        }

        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) {
        }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor, J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function (a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function (a) {
                var f = {}, c;
                if ((f.__proto__ = w, f.__proto__ = {toString: 1}, f).toString != m) p = function (a) {
                    var f = this.__proto__, a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                }; else {
                    c = f.constructor;
                    p = function (a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = {"boolean": 1, number: 1, string: 1, "undefined": 1};
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function (a, f) {
                    var c = {}, b = m.call(a) == "[object Function]", d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function (a, f) {
                    var c = m.call(a) == "[object Function]", b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                }; else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c) if (d = typeof a.constructor != "function") {
                            d = typeof a.hasOwnProperty;
                            d = d == "object" ? !!a.hasOwnProperty : !K[d]
                        }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b)) ;
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }, G = function (a) {
                        var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    }, E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) {
                        }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON")) if (g > -1 / 0 && g < 1 / 0) {
                                if (z) {
                                    k = t(g / 864e5);
                                    for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++) ;
                                    for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++) ;
                                    k = 1 + k - z(i, j);
                                    l = (g % 864e5 + 864e5) % 864e5;
                                    q = t(l / 36e5) % 24;
                                    s = t(l / 6e4) % 60;
                                    v = t(l / 1e3) % 60;
                                    l = l % 1e3
                                } else {
                                    i = g.getUTCFullYear();
                                    j = g.getUTCMonth();
                                    k = g.getUTCDate();
                                    q = g.getUTCHours();
                                    s = g.getUTCMinutes();
                                    v = g.getUTCSeconds();
                                    l = g.getUTCMilliseconds()
                                }
                                g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                            } else g = w; else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;) if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b) if (m.call(b) == "[object Function]") h = b; else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1)) ;
                    }
                    if (c) if (m.call(c) == "[object Number]") {
                        if ((c = c - c % 1) > 0) {
                            d = "";
                            for (c > 10 && (c = 10); d.length < c; d = d + " ") ;
                        }
                    } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, A,
                    j = function () {
                        b = A = w;
                        throw SyntaxError()
                    }, q = function () {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j(); else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++) ;
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++) ;
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    }, F = function (a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = []; ; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {}; ; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c) if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else j();
                                    (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    }, I = function (a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    }, H = function (a, b, c) {
                        var d = a[b], h;
                        if (typeof d == "object" && d) if (m.call(d) == "[object Array]") for (h = d.length; h--;) I(d, h, c); else C(d, function (a) {
                            I(d, a, c)
                        });
                        return c.call(a, b, d)
                    };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p");
    if (N6H.mF1x.trident0) return;
    JSON.parse = JSON.parse.er8j(function (d6d) {
        var cF7y = d6d.args[0] || "";
        if (cF7y.length >= 5e5) {
            d6d.stopped = !0;
            d6d.value = eval("(" + cF7y + ")")
        }
    })
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, eb8T = c6e("nej.g"), a5f = c6e("nej.e"), k6e = c6e("nej.u"),
        h6b = c6e("nej.v"), bc6W = c6e("nej.h"), cP7I = c6e("nej.x"), Kx8p, bui5n = {},
        Q6K = document.createDocumentFragment();
    a5f.kZ0x = cP7I.kZ0x = function (G6A) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return;
        var D6x = !!G6A.id ? G6A.id : "auto-id-" + k6e.Sj4n(16);
        G6A.id = D6x;
        if (a5f.B6v(D6x) != G6A) bui5n[D6x] = G6A;
        return D6x
    };
    a5f.B6v = cP7I.B6v = function (G6A) {
        var f6b = bui5n["" + G6A];
        if (!!f6b) return f6b;
        if (!k6e.fw8o(G6A) && !k6e.vl3x(G6A)) return G6A;
        return document.getElementById(G6A)
    };
    a5f.db8T = cP7I.db8T = function (G6A, dS8K) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return null;
        var i6c = bc6W.bnr1x(G6A);
        if (!!dS8K) k6e.mt0x(i6c, function (f6b, r6l) {
            if (!a5f.by7r(f6b, dS8K)) i6c.splice(r6l, 1)
        });
        return i6c
    };
    a5f.F6z = cP7I.F6z = function (G6A, fv8n) {
        G6A = a5f.B6v(G6A);
        return !G6A ? null : bc6W.bns1x(G6A, fv8n.trim())
    };
    a5f.bQm0x = cP7I.bQm0x = function (G6A) {
        G6A = a5f.B6v(G6A);
        if (!!G6A) {
            G6A = G6A.parentNode;
            while (!!G6A) {
                if (G6A.scrollHeight > G6A.clientHeight) break;
                G6A = G6A.parentNode
            }
            if (!!G6A) return G6A
        }
        var oo1x = document.body.scrollHeight, Bq5v = document.documentElement.scrollHeight;
        return Bq5v >= oo1x ? document.documentElement : document.body
    };
    a5f.oQ1x = function () {
        var bQj0x = function (i6c) {
            var o6i = 0;
            k6e.bb6V(i6c, function (eV8N) {
                if (!eV8N) return;
                if (!o6i) {
                    o6i = eV8N
                } else {
                    o6i = Math.min(o6i, eV8N)
                }
            });
            return o6i
        };
        return function (vh3x) {
            var Kv8n = vh3x || document, Bj5o = Kv8n.body, Bi5n = Kv8n.documentElement, o6i = {
                scrollTop: Math.max(Bj5o.scrollTop, Bi5n.scrollTop),
                scrollLeft: Math.max(Bj5o.scrollLeft, Bi5n.scrollLeft),
                clientWidth: bQj0x([Bj5o.clientWidth, Bj5o.offsetWidth, Bi5n.clientWidth, Bi5n.offsetWidth]),
                clientHeight: bQj0x([Bj5o.clientHeight, Bj5o.offsetHeight, Bi5n.clientHeight, Bi5n.offsetHeight])
            };
            o6i.scrollWidth = Math.max(o6i.clientWidth, Bj5o.scrollWidth, Bi5n.scrollWidth);
            o6i.scrollHeight = Math.max(o6i.clientHeight, Bj5o.scrollHeight, Bi5n.scrollHeight);
            return o6i
        }
    }();
    a5f.cyr9i = function (fc8U, oq1x) {
        var o6i = NEJ.X({}, oq1x), bQg0x = fc8U.width / fc8U.height, bba7T = oq1x.width / oq1x.height;
        if (bQg0x > bba7T && oq1x.height > fc8U.height) {
            o6i.height = fc8U.height;
            o6i.width = o6i.height * bba7T
        }
        if (bQg0x < bba7T && oq1x.width > fc8U.width) {
            o6i.width = fc8U.width;
            o6i.height = o6i.width / bba7T
        }
        return o6i
    };
    a5f.cys0x = function () {
        var cZ7S = /\s+/;
        var up3x = {
            left: function () {
                return 0
            }, center: function (gY9P, oq1x) {
                return (gY9P.width - oq1x.width) / 2
            }, right: function (gY9P, oq1x) {
                return gY9P.width - oq1x.width
            }, top: function () {
                return 0
            }, middle: function (gY9P, oq1x) {
                return (gY9P.height - oq1x.height) / 2
            }, bottom: function (gY9P, oq1x) {
                return gY9P.height - oq1x.height
            }
        };
        return function (gY9P, oq1x, nl1x) {
            var o6i = {}, bs7l = (nl1x || "").split(cZ7S), gi9Z = up3x[bs7l[1]] || up3x.middle,
                gx9o = up3x[bs7l[0]] || up3x.center;
            o6i.top = gi9Z(gY9P, oq1x);
            o6i.left = gx9o(gY9P, oq1x);
            return o6i
        }
    }();
    a5f.sU2x = cP7I.sU2x = function (G6A, dS8K) {
        bc6W.bnF1x(G6A, dS8K || a5f.u6o(G6A, "hover") || "js-hover");
        return this
    };
    a5f.Ks8k = cP7I.Ks8k = function (G6A) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return;
        bc6W.boo2x(G6A)
    };
    a5f.cvi9Z = cP7I.cvi9Z = function () {
        var Q6K = {}, bQa0x = 2;
        var cvg9X = function (D6x, dS8K, d6d) {
            Q6K[D6x] = [h6b.iW9N(d6d), h6b.lJ0x(d6d)];
            a5f.w6q(D6x, dS8K)
        };
        var cva9R = function (D6x, dS8K, d6d) {
            var bI7B = Q6K[D6x];
            if (!k6e.eC8u(bI7B)) return;
            var cuZ9Q = Math.abs(h6b.iW9N(d6d) - bI7B[0]), cuY9P = Math.abs(h6b.lJ0x(d6d) - bI7B[1]);
            if (cuZ9Q > bQa0x || cuY9P > bQa0x) bud5i(D6x, dS8K)
        };
        var bud5i = function (D6x, dS8K) {
            if (k6e.eC8u(Q6K[D6x])) {
                Q6K[D6x] = -1;
                a5f.v6p(D6x, dS8K)
            }
        };
        return function (G6A, dS8K) {
            var D6x = a5f.kZ0x(G6A);
            if (!D6x || Q6K[D6x] != null) return;
            Q6K[D6x] = -1;
            dS8K = dS8K || a5f.u6o(D6x, "highlight") || "js-highlight";
            h6b.s6m(D6x, "touchstart", cvg9X.g6a(null, D6x, dS8K));
            h6b.s6m(document, "touchmove", cva9R.g6a(null, D6x, dS8K));
            h6b.s6m(document, "touchend", bud5i.g6a(null, D6x, dS8K));
            h6b.s6m(document, "touchcancel", bud5i.g6a(null, D6x, dS8K))
        }
    }();
    a5f.Bc5h = cP7I.Bc5h = function () {
        var cuH9y = function (D6x, dS8K, cuG9x) {
            var G6A = a5f.B6v(D6x), d6d = {clazz: dS8K, target: G6A};
            if (a5f.by7r(G6A, dS8K)) {
                d6d.toggled = !1;
                a5f.v6p(G6A, dS8K)
            } else {
                d6d.toggled = !0;
                a5f.w6q(G6A, dS8K)
            }
            cuG9x.call(null, d6d)
        };
        return function (G6A, e6c) {
            G6A = a5f.B6v(G6A);
            if (!!G6A) {
                var iz9q = {ontoggle: bn7g, clazz: "js-toggle", element: G6A.parentNode};
                if (k6e.fw8o(e6c)) {
                    var f6b = a5f.B6v(e6c);
                    !!f6b ? iz9q.element = f6b : iz9q.clazz = e6c
                } else {
                    NEJ.EX(iz9q, e6c);
                    iz9q.element = a5f.B6v(iz9q.element)
                }
                var D6x = a5f.kZ0x(iz9q.element);
                h6b.s6m(G6A, "click", cuH9y.g6a(null, D6x, iz9q.clazz, iz9q.ontoggle || bn7g))
            }
            return this
        }
    }();
    a5f.mc0x = cP7I.mc0x = function (G6A, e6c) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return;
        var eZ8R = 0, dS8K = "js-focus";
        if (k6e.vl3x(e6c)) {
            eZ8R = e6c
        } else if (k6e.fw8o(e6c)) {
            dS8K = e6c
        } else if (k6e.lg0x(e6c)) {
            eZ8R = e6c.mode || eZ8R;
            dS8K = e6c.clazz || dS8K
        }
        var C6w = parseInt(a5f.u6o(G6A, "mode"));
        if (!isNaN(C6w)) eZ8R = C6w;
        C6w = a5f.u6o(G6A, "focus");
        if (!!C6w) dS8K = C6w;
        bc6W.boZ2x(G6A, eZ8R, dS8K);
        return this
    };
    a5f.cY7R = function () {
        var bv7o = {
            a: {href: "#", hideFocus: !0},
            style: {type: "text/css"},
            link: {type: "text/css", rel: "stylesheet"},
            iframe: {frameBorder: 0},
            script: {defer: !0, type: "text/javascript"}
        };
        return function (fk8c, fv8n, bG7z) {
            var G6A = document.createElement(fk8c);
            NEJ.X(G6A, bv7o[fk8c.toLowerCase()]);
            if (!!fv8n) G6A.className = fv8n;
            bG7z = a5f.B6v(bG7z);
            if (!!bG7z) bG7z.appendChild(G6A);
            return G6A
        }
    }();
    a5f.Xb6V = function () {
        var cuF9w = function () {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cuA9r = function (T6N) {
            T6N = T6N.trim();
            if (!T6N) return a5f.cY7R("iframe");
            var ft8l;
            try {
                ft8l = document.createElement('<iframe name="' + T6N + '"></iframe>');
                ft8l.frameBorder = 0
            } catch (e) {
                ft8l = a5f.cY7R("iframe");
                ft8l.name = T6N
            }
            return ft8l
        };
        return function (e6c) {
            e6c = e6c || Z6T;
            var ft8l = cuA9r(e6c.name || "");
            if (!e6c.visible) ft8l.style.display = "none";
            if (k6e.gr9i(e6c.onload)) h6b.s6m(ft8l, "load", function (d6d) {
                if (!ft8l.src) return;
                h6b.gG9x(ft8l, "load");
                e6c.onload(d6d)
            });
            var bG7z = e6c.parent;
            if (k6e.gr9i(bG7z)) {
                try {
                    bG7z(ft8l)
                } catch (e) {
                }
            } else {
                (a5f.B6v(bG7z) || document.body).appendChild(ft8l)
            }
            var dt8l = e6c.src || cuF9w();
            window.setTimeout(function () {
                ft8l.src = dt8l
            }, 0);
            return ft8l
        }
    }();
    a5f.cz7s = cP7I.cz7s = function () {
        var bPP0x = function (yE4I) {
            yE4I.src = eb8T.bnm1x
        };
        var bPO0x = function (vn3x) {
            vn3x.src = "about:blank"
        };
        return function (G6A, cur9i) {
            G6A = a5f.B6v(G6A);
            if (!G6A) return this;
            if (!cur9i) h6b.gG9x(G6A);
            delete bui5n[G6A.id];
            var fk8c = G6A.tagName;
            if (fk8c == "IFRAME") {
                bPO0x(G6A)
            } else if (fk8c == "IMG") {
                bPP0x(G6A)
            } else if (!!G6A.getElementsByTagName) {
                k6e.bb6V(G6A.getElementsByTagName("img"), bPP0x);
                k6e.bb6V(G6A.getElementsByTagName("iframe"), bPO0x)
            }
            if (!!G6A.parentNode) {
                G6A.parentNode.removeChild(G6A)
            }
            return this
        }
    }();
    a5f.mK1x = cP7I.mK1x = function (G6A) {
        G6A = a5f.B6v(G6A);
        if (!!G6A) Q6K.appendChild(G6A);
        return this
    };
    a5f.bPN0x = cP7I.bPN0x = function (G6A) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return;
        k6e.mt0x(G6A.childNodes, function (f6b) {
            a5f.cz7s(f6b)
        })
    };
    a5f.Kn8f = cP7I.Kn8f = function () {
        var dS8K, go9f = /\s+/;
        var cuk9b = function () {
            if (!!dS8K) return;
            dS8K = a5f.sp2x(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a5f.bPM0x()
        };
        return function (G6A, e6c) {
            G6A = a5f.B6v(G6A);
            if (!G6A) return;
            cuk9b();
            e6c = e6c || Z6T;
            var bG7z = G6A.parentNode;
            if (!a5f.by7r(bG7z, dS8K)) {
                bG7z = a5f.cY7R("span", dS8K);
                G6A.insertAdjacentElement("beforeBegin", bG7z);
                bG7z.appendChild(G6A)
            }
            var bPJ0x = e6c.nid || "", f6b = a5f.F6z(bG7z, bPJ0x || dS8K + "-show")[0];
            if (!f6b) {
                var dT8L = ((e6c.clazz || "") + " " + bPJ0x).trim();
                dT8L = dS8K + "-show" + (!dT8L ? "" : " ") + dT8L;
                f6b = a5f.cY7R(e6c.tag || "span", dT8L);
                bG7z.appendChild(f6b)
            }
            var dT8L = e6c.clazz;
            if (!!dT8L) {
                dT8L = (dT8L || "").trim().split(go9f)[0] + "-parent";
                a5f.w6q(bG7z, dT8L)
            }
            return f6b
        }
    }();
    a5f.u6o = cP7I.u6o = function () {
        var btY5d = {}, fk8c = "data-", cZ7S = /\-(.{1})/gi;
        var EK6E = function (G6A) {
            var D6x = a5f.kZ0x(G6A);
            if (!!btY5d[D6x]) return;
            var bv7o = {};
            k6e.bb6V(G6A.attributes, function (f6b) {
                var J6D = f6b.nodeName;
                if (J6D.indexOf(fk8c) != 0) return;
                J6D = J6D.replace(fk8c, "").replace(cZ7S, function ($1, $2) {
                    return $2.toUpperCase()
                });
                bv7o[J6D] = f6b.nodeValue || ""
            });
            btY5d[D6x] = bv7o
        };
        return function (G6A, J6D, C6w) {
            G6A = a5f.B6v(G6A);
            if (!G6A) return null;
            var baK7D = G6A.dataset;
            if (!baK7D) {
                EK6E(G6A);
                baK7D = btY5d[G6A.id]
            }
            if (C6w !== undefined) baK7D[J6D] = C6w;
            return baK7D[J6D]
        }
    }();
    a5f.ga9R = cP7I.ga9R = function (G6A, T6N, C6w) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return "";
        if (C6w !== undefined && !!G6A.setAttribute) G6A.setAttribute(T6N, C6w);
        return bc6W.bcS8K(G6A, T6N)
    };
    a5f.no1x = function (dL8D) {
        var qL2x = document.createElement("div");
        qL2x.innerHTML = dL8D;
        var i6c = a5f.db8T(qL2x);
        return i6c.length > 1 ? qL2x : i6c[0]
    };
    a5f.ctS8K = cP7I.ctS8K = function (G6A) {
        G6A = a5f.B6v(G6A);
        return !G6A ? "" : bc6W.bph2x(G6A)
    };
    a5f.bPE0x = function (BE5J) {
        BE5J = (BE5J || "").trim();
        return !BE5J ? null : bc6W.bqa4e(BE5J)
    };
    a5f.ctJ8B = function (cJ7C, t6n) {
        cJ7C = cJ7C || "";
        switch (t6n) {
            case"xml":
                cJ7C = a5f.bPE0x(cJ7C);
                break;
            case"json":
                try {
                    cJ7C = JSON.parse(cJ7C)
                } catch (ex) {
                    cJ7C = null
                }
                break
        }
        return cJ7C
    };
    a5f.hL9C = cP7I.hL9C = function () {
        var ctI8A = function (G6A) {
            return G6A == document.body || G6A == document.documentElement
        };
        return function (dY8Q, oA1x) {
            dY8Q = a5f.B6v(dY8Q);
            if (!dY8Q) return null;
            oA1x = a5f.B6v(oA1x) || null;
            var o6i = {x: 0, y: 0}, btW5b, dl8d, Uz5E;
            while (!!dY8Q && dY8Q != oA1x) {
                btW5b = ctI8A(dY8Q);
                dl8d = btW5b ? 0 : dY8Q.scrollLeft;
                Uz5E = parseInt(a5f.cV7O(dY8Q, "borderLeftWidth")) || 0;
                o6i.x += dY8Q.offsetLeft + Uz5E - dl8d;
                dl8d = btW5b ? 0 : dY8Q.scrollTop;
                Uz5E = parseInt(a5f.cV7O(dY8Q, "borderTopWidth")) || 0;
                o6i.y += dY8Q.offsetTop + Uz5E - dl8d;
                dY8Q = dY8Q.offsetParent
            }
            return o6i
        }
    }();
    a5f.mE1x = cP7I.mE1x = function (G6A) {
        var be6Y = a5f.hL9C(G6A);
        window.scrollTo(be6Y.x, be6Y.y);
        return this
    };
    a5f.cyx0x = function (ss2x) {
        ss2x = (ss2x || "").trim();
        return bc6W.bzZ6T(ss2x)
    };
    a5f.ctA8s = cP7I.ctA8s = function (G6A, T6N, bv7o) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return this;
        var C6w = bc6W.bIC8u(T6N, bv7o);
        if (!C6w) return this;
        a5f.Y6S(G6A, "transform", C6w);
        return this
    };
    a5f.eT8L = cP7I.eT8L = function (G6A, bv7o) {
        G6A = a5f.B6v(G6A);
        if (!!G6A) k6e.ey8q(bv7o, function (C6w, T6N) {
            a5f.Y6S(G6A, T6N, C6w)
        });
        return this
    };
    a5f.ctz8r = cP7I.ctz8r = function (fO9F, e6c) {
        fO9F = a5f.B6v(fO9F);
        if (!fO9F) return {start: 0, end: 0};
        if (k6e.vl3x(e6c)) e6c = {start: e6c, end: e6c};
        if (e6c != null) {
            if (e6c.end == null) e6c.end = e6c.start || 0;
            bc6W.bor2x(fO9F, e6c)
        } else {
            e6c = bc6W.boX2x(fO9F)
        }
        return e6c
    };
    a5f.Y6S = cP7I.Y6S = function (G6A, T6N, C6w) {
        G6A = a5f.B6v(G6A);
        if (!!G6A) bc6W.brl4p(G6A, T6N, C6w);
        return this
    };
    a5f.cV7O = cP7I.cV7O = function (G6A, T6N) {
        G6A = a5f.B6v(G6A);
        if (!G6A) return "";
        var gI9z = !window.getComputedStyle ? G6A.currentStyle || Z6T : window.getComputedStyle(G6A, null);
        return gI9z[bc6W.bIW8O(T6N)] || ""
    };
    a5f.bPA0x = function () {
        var cZ7S = /[\s\r\n]+/gi;
        return function (cb7U) {
            cb7U = (cb7U || "").trim().replace(cZ7S, " ");
            if (!cb7U) return;
            var f6b = a5f.cY7R("style");
            document.head.appendChild(f6b);
            bc6W.btZ5e(f6b, bc6W.ctf8X(cb7U));
            return f6b
        }
    }();
    a5f.bPx0x = function (yS5X) {
        try {
            yS5X = yS5X.trim();
            if (!!yS5X) return (new Function(yS5X))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a5f.sp2x = function () {
        var cZ7S = /#<.*?>/g, gq9h = +(new Date);
        return function (jH0x) {
            if (!Kx8p) Kx8p = [];
            var fv8n = "auto-" + gq9h++;
            Kx8p.push(jH0x.replace(cZ7S, fv8n));
            return fv8n
        }
    }();
    a5f.bPM0x = function () {
        if (!!Kx8p) {
            a5f.bPA0x(Kx8p.join(""));
            Kx8p = null
        }
        return this
    };
    a5f.cyz0x = function (cb7U, jH0x) {
        cb7U = a5f.B6v(cb7U);
        return !cb7U ? null : bc6W.buf5k(cb7U, jH0x)
    };
    a5f.w6q = cP7I.w6q = function () {
        bc6W.bnt1x.apply(bc6W, arguments);
        return this
    };
    a5f.v6p = cP7I.v6p = function () {
        bc6W.bnu1x.apply(bc6W, arguments);
        return this
    };
    a5f.eR8J = cP7I.eR8J = function () {
        bc6W.SN5S.apply(bc6W, arguments);
        return this
    };
    a5f.by7r = cP7I.by7r = function () {
        return bc6W.bnw1x.apply(bc6W, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cP7I.isChange = !0
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, fj8b = NEJ.R, bn7g = NEJ.F, a5f = c6e("nej.e"), bc6W = c6e("nej.h"),
        k6e = c6e("nej.u");
    var DV6P = function (j6d, t6n) {
        try {
            t6n = t6n.toLowerCase();
            if (j6d === null) return t6n == "null";
            if (j6d === undefined) return t6n == "undefined";
            return Z6T.toString.call(j6d).toLowerCase() == "[object " + t6n + "]"
        } catch (e) {
            return !1
        }
    };
    k6e.gr9i = function (j6d) {
        return DV6P(j6d, "function")
    };
    k6e.fw8o = function (j6d) {
        return DV6P(j6d, "string")
    };
    k6e.vl3x = function (j6d) {
        return DV6P(j6d, "number")
    };
    k6e.cyA0x = function (j6d) {
        return DV6P(j6d, "boolean")
    };
    k6e.Eq6k = function (j6d) {
        return DV6P(j6d, "date")
    };
    k6e.eC8u = function (j6d) {
        return DV6P(j6d, "array")
    };
    k6e.lg0x = function (j6d) {
        return DV6P(j6d, "object")
    };
    k6e.fp8h = function () {
        var cZ7S = /[^\x00-\xfff]/g;
        return function (bl6f) {
            return ("" + (bl6f || "")).replace(cZ7S, "**").length
        }
    }();
    k6e.dd8V = function (i6c, p6j) {
        var dP8H = k6e.gr9i(p6j) ? p6j : function (C6w) {
            return C6w === p6j
        }, r6l = k6e.ey8q(i6c, dP8H);
        return r6l != null ? r6l : -1
    };
    k6e.cyB0x = function () {
        var bPr0x;
        var RQ4U = function (i6c, nO1x, oi1x) {
            if (nO1x > oi1x) return -1;
            var FX7Q = Math.ceil((nO1x + oi1x) / 2), o6i = bPr0x(i6c[FX7Q], FX7Q, i6c);
            if (o6i == 0) return FX7Q;
            if (o6i < 0) return RQ4U(i6c, nO1x, FX7Q - 1);
            return RQ4U(i6c, FX7Q + 1, oi1x)
        };
        return function (i6c, KA8s) {
            bPr0x = KA8s || bn7g;
            return RQ4U(i6c, 0, i6c.length - 1)
        }
    }();
    k6e.mt0x = function (i6c, dE8w, iK9B) {
        if (!i6c || !i6c.length || !k6e.gr9i(dE8w)) return null;
        for (var i = i6c.length - 1; i >= 0; i--) if (!!dE8w.call(iK9B, i6c[i], i, i6c)) return i;
        return null
    };
    k6e.bb6V = function (i6c, dE8w, iK9B) {
        if (!i6c || !i6c.length || !k6e.gr9i(dE8w)) return this;
        if (!!i6c.forEach) {
            i6c.forEach(dE8w, iK9B);
            return this
        }
        for (var i = 0, l = i6c.length; i < l; i++) dE8w.call(iK9B, i6c[i], i, i6c);
        return this
    };
    k6e.ey8q = function (i6c, dE8w, iK9B) {
        if (!i6c || !k6e.gr9i(dE8w)) return null;
        if (i6c.length != null) {
            if (i6c.length > 0) for (var i = 0, l = i6c.length; i < l; i++) if (!!dE8w.call(iK9B, i6c[i], i, i6c)) return i
        }
        if (k6e.lg0x(i6c)) {
            for (var x in i6c) if (i6c.hasOwnProperty(x) && !!dE8w.call(iK9B, i6c[x], x, i6c)) return x
        }
        return null
    };
    k6e.csO8G = function (iF9w, csN8F, e6c) {
        iF9w = iF9w || [];
        e6c = e6c || Z6T;
        var bPo0x = !!e6c.union, vu3x = !!e6c.begin, bar7k = e6c.compare, csJ8B = bPo0x && vu3x ? k6e.mt0x : k6e.bb6V;
        csJ8B(csN8F, function (p6j) {
            if (!!bar7k) bar7k = bar7k.en8f(p6j);
            var r6l = k6e.dd8V(iF9w, bar7k || p6j);
            if (r6l >= 0) iF9w.splice(r6l, 1);
            if (bPo0x) iF9w[vu3x ? "unshift" : "push"](p6j)
        });
        return iF9w
    };
    k6e.Cq6k = function (bv7o, bl6f) {
        if (!bv7o || !bl6f || !bl6f.replace) return bl6f || "";
        return bl6f.replace(bv7o.r, function ($1) {
            var o6i = bv7o[!bv7o.i ? $1.toLowerCase() : $1];
            return o6i != null ? o6i : $1
        })
    };
    k6e.dQ8I = function () {
        var bv7o = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (bl6f) {
            return k6e.Cq6k(bv7o, bl6f)
        }
    }();
    k6e.Kk8c = function () {
        var bv7o = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (bl6f) {
            return k6e.Cq6k(bv7o, bl6f)
        }
    }();
    k6e.hJ9A = function () {
        var bv7o = {i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g}, csE8w = ["上午", "下午"],
            csC8u = ["A.M.", "P.M."], btQ5V = ["日", "一", "二", "三", "四", "五", "六"],
            csx8p = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            cso8g = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var RM4Q = function (gB9s) {
            gB9s = parseInt(gB9s) || 0;
            return (gB9s < 10 ? "0" : "") + gB9s
        };
        var csl8d = function (pt1x) {
            return pt1x < 12 ? 0 : 1
        };
        return function (bw7p, Ki8a, csk8c) {
            if (!bw7p || !Ki8a) return "";
            bw7p = k6e.Ut5y(bw7p);
            bv7o.yyyy = bw7p.getFullYear();
            bv7o.yy = ("" + bv7o.yyyy).substr(2);
            bv7o.M = bw7p.getMonth() + 1;
            bv7o.MM = RM4Q(bv7o.M);
            bv7o.eM = cso8g[bv7o.M - 1];
            bv7o.cM = csx8p[bv7o.M - 1];
            bv7o.d = bw7p.getDate();
            bv7o.dd = RM4Q(bv7o.d);
            bv7o.H = bw7p.getHours();
            bv7o.HH = RM4Q(bv7o.H);
            bv7o.m = bw7p.getMinutes();
            bv7o.mm = RM4Q(bv7o.m);
            bv7o.s = bw7p.getSeconds();
            bv7o.ss = RM4Q(bv7o.s);
            bv7o.ms = bw7p.getMilliseconds();
            bv7o.w = btQ5V[bw7p.getDay()];
            var bOX0x = csl8d(bv7o.H);
            bv7o.ct = csE8w[bOX0x];
            bv7o.et = csC8u[bOX0x];
            if (!!csk8c) {
                bv7o.H = bv7o.H % 12
            }
            return k6e.Cq6k(bv7o, Ki8a)
        }
    }();
    k6e.Ut5y = function (bw7p) {
        var cN7G = bw7p;
        if (k6e.fw8o(bw7p)) cN7G = new Date(Date.parse(bw7p));
        if (!k6e.Eq6k(bw7p)) cN7G = new Date(bw7p);
        return cN7G
    };
    k6e.Ks8k = function (crZ8R, crW8O) {
        return (new Number(crZ8R)).toFixed(crW8O)
    };
    k6e.btM5R = function () {
        var go9f = /([^\/:])\/.*$/, jD0x = /\/[^\/]+$/, EE6y = /[#\?]/, btJ4N = location.href.split(/[?#]/)[0],
            sJ2x = document.createElement("a");
        var btI4M = function (lf0x) {
            return (lf0x || "").indexOf("://") > 0
        };
        var bOP0x = function (lf0x) {
            return (lf0x || "").split(EE6y)[0].replace(jD0x, "/")
        };
        var crL8D = function (lf0x, fK9B) {
            if (lf0x.indexOf("/") == 0) return fK9B.replace(go9f, "$1") + lf0x;
            return bOP0x(fK9B) + lf0x
        };
        btJ4N = bOP0x(btJ4N);
        return function (lf0x, fK9B) {
            lf0x = (lf0x || "").trim();
            if (!btI4M(fK9B)) fK9B = btJ4N;
            if (!lf0x) return fK9B;
            if (btI4M(lf0x)) return lf0x;
            lf0x = crL8D(lf0x, fK9B);
            sJ2x.href = lf0x;
            lf0x = sJ2x.href;
            return btI4M(lf0x) ? lf0x : sJ2x.getAttribute("href", 4)
        }
    }();
    k6e.crI8A = function () {
        var cZ7S = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (V6P) {
            if (cZ7S.test(V6P || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k6e.bOO0x = function (I6C, iz9q) {
        if (!I6C) return iz9q;
        var T6N = I6C.tagName.toLowerCase(), i6c = a5f.db8T(I6C);
        if (!i6c || !i6c.length) {
            iz9q[T6N] = I6C.textContent || I6C.text || "";
            return iz9q
        }
        var cf7Y = {};
        iz9q[T6N] = cf7Y;
        k6e.bb6V(i6c, function (f6b) {
            k6e.bOO0x(f6b, cf7Y)
        });
        return iz9q
    };
    k6e.cyD0x = function (BE5J) {
        try {
            return k6e.bOO0x(a5f.bPE0x(BE5J), {})
        } catch (ex) {
            return null
        }
    };
    k6e.bOM0x = function (if9W, RC4G) {
        var iz9q = {};
        k6e.bb6V((if9W || "").split(RC4G), function (T6N) {
            var XB6v = T6N.split("=");
            if (!XB6v || !XB6v.length) return;
            var J6D = XB6v.shift();
            if (!J6D) return;
            iz9q[decodeURIComponent(J6D)] = decodeURIComponent(XB6v.join("="))
        });
        return iz9q
    };
    k6e.sY2x = function (gb9S, RC4G, crz8r) {
        if (!gb9S) return "";
        var bs7l = [];
        for (var x in gb9S) {
            bs7l.push(encodeURIComponent(x) + "=" + (!!crz8r ? encodeURIComponent(gb9S[x]) : gb9S[x]))
        }
        return bs7l.join(RC4G || ",")
    };
    k6e.hD9u = function (bx7q) {
        return k6e.bOM0x(bx7q, "&")
    };
    k6e.dh8Z = function (gb9S) {
        return k6e.sY2x(gb9S, "&", !0)
    };
    k6e.cyE0x = function (gb9S) {
        return bc6W.KQ8I(gb9S)
    };
    k6e.cyF0x = function (i6c, dP8H) {
        var o6i = {};
        k6e.bb6V(i6c, function (p6j) {
            var J6D = p6j;
            if (!!dP8H) {
                J6D = dP8H(p6j)
            }
            o6i[J6D] = p6j
        });
        return o6i
    };
    k6e.cyG0x = function (gB9s, gn9e) {
        var crm8e = ("" + gB9s).length, crl8d = Math.max(1, parseInt(gn9e) || 0), dl8d = crl8d - crm8e;
        if (dl8d > 0) {
            gB9s = (new Array(dl8d + 1)).join("0") + gB9s
        }
        return "" + gB9s
    };
    k6e.YV7O = function (gb9S, T6N) {
        if (!k6e.eC8u(T6N)) {
            try {
                delete gb9S[T6N]
            } catch (e) {
                gb9S[T6N] = undefined
            }
            return this
        }
        k6e.bb6V(T6N, k6e.YV7O.g6a(k6e, gb9S));
        return this
    };
    k6e.Sj4n = function () {
        var bOF0x = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (bm6g) {
            bm6g = bm6g || 10;
            var o6i = [];
            for (var i = 0, bOE0x; i < bm6g; ++i) {
                bOE0x = Math.floor(Math.random() * bOF0x.length);
                o6i.push(bOF0x.charAt(bOE0x))
            }
            return o6i.join("")
        }
    }();
    k6e.Ay5D = function (fr8j, fc8U) {
        return Math.floor(Math.random() * (fc8U - fr8j) + fr8j)
    };
    k6e.ns1x = function (bm6g) {
        bm6g = Math.max(0, Math.min(bm6g || 8, 30));
        var fr8j = Math.pow(10, bm6g - 1), fc8U = fr8j * 10;
        return k6e.Ay5D(fr8j, fc8U).toString()
    };
    k6e.bav7o = function () {
        var gq9h = +(new Date);
        return function () {
            return "" + gq9h++
        }
    }()
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, fj8b = NEJ.R, bn7g = NEJ.F, h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        N6H = c6e("nej.ut"), ot1x;
    if (!!N6H.cD7w) return;
    N6H.cD7w = NEJ.C();
    ot1x = N6H.cD7w.prototype;
    N6H.cD7w.A6u = function (e6c) {
        e6c = e6c || {};
        var cv7o = !!this.yV5a && this.yV5a.shift();
        if (!cv7o) {
            cv7o = new this(e6c);
            this.cri8a = (this.cri8a || 0) + 1
        }
        cv7o.bj6d(e6c);
        return cv7o
    };
    N6H.cD7w.S6M = function () {
        var RB4F = function (p6j, r6l, i6c) {
            p6j.S6M();
            i6c.splice(r6l, 1)
        };
        return function (cv7o) {
            if (!cv7o) return null;
            if (!k6e.eC8u(cv7o)) {
                if (!(cv7o instanceof this)) {
                    var fv8n = cv7o.constructor;
                    if (!!fv8n.S6M) fv8n.S6M(cv7o);
                    return null
                }
                if (cv7o == this.eX8P) delete this.eX8P;
                if (cv7o == this.Av5A) delete this.Av5A;
                cv7o.bA7t();
                if (!this.yV5a) this.yV5a = [];
                if (k6e.dd8V(this.yV5a, cv7o) < 0) {
                    this.yV5a.push(cv7o)
                }
                return null
            }
            k6e.mt0x(cv7o, RB4F, this)
        }
    }();
    N6H.cD7w.gh9Y = function (e6c) {
        e6c = e6c || {};
        if (!this.eX8P) this.eX8P = this.A6u(e6c);
        return this.eX8P
    };
    N6H.cD7w.crh8Z = function (e6c, qR2x) {
        e6c = e6c || {};
        if (!!qR2x && !!this.Av5A) {
            this.Av5A.S6M();
            delete this.Av5A
        }
        if (!this.Av5A) {
            this.Av5A = this.A6u(e6c)
        } else {
            this.Av5A.bj6d(e6c)
        }
        return this.Av5A
    };
    ot1x.cs7l = function () {
        var gq9h = +(new Date);
        return function () {
            this.id = gq9h++;
            this.lI0x = {};
            this.bOA0x = {}
        }
    }();
    ot1x.bj6d = function (e6c) {
        this.btE4I(e6c)
    };
    ot1x.bA7t = function () {
        this.gG9x();
        this.Ke8W()
    };
    ot1x.bT7M = function () {
        var gq9h = +(new Date);
        var cqW8O = function (bh6b) {
            if (!bh6b || bh6b.length < 3) return;
            this.bOA0x["de-" + gq9h++] = bh6b;
            h6b.s6m.apply(h6b, bh6b)
        };
        return function (i6c) {
            k6e.bb6V(i6c, cqW8O, this)
        }
    }();
    ot1x.Ke8W = function () {
        var cqU8M = function (bh6b, J6D, bv7o) {
            delete bv7o[J6D];
            h6b.mx0x.apply(h6b, bh6b)
        };
        return function () {
            k6e.ey8q(this.bOA0x, cqU8M)
        }
    }();
    ot1x.cyH0x = function (dP8H) {
        dP8H = dP8H || bn7g;
        k6e.ey8q(this, function (FT7M, J6D, bv7o) {
            if (!!FT7M && !!FT7M.S6M && !dP8H(FT7M)) {
                delete bv7o[J6D];
                FT7M.S6M()
            }
        })
    };
    ot1x.S6M = function () {
        this.constructor.S6M(this)
    };
    ot1x.bOt0x = function (t6n) {
        var d6d = this.lI0x[t6n.toLowerCase()];
        return !!d6d && d6d !== bn7g
    };
    ot1x.s6m = function (t6n, d6d) {
        this.vF3x.apply(this, arguments);
        return this
    };
    ot1x.mx0x = function (t6n, d6d) {
        var t6n = (t6n || "").toLowerCase(), dU8M = this.lI0x[t6n];
        if (!k6e.eC8u(dU8M)) {
            if (dU8M == d6d) delete this.lI0x[t6n];
            return
        }
        k6e.mt0x(dU8M, function (eF8x, r6l, i6c) {
            if (eF8x == d6d) i6c.splice(r6l, 1)
        })
    };
    ot1x.vF3x = function (t6n, d6d) {
        if (!!t6n && k6e.gr9i(d6d)) this.lI0x[t6n.toLowerCase()] = d6d;
        return this
    };
    ot1x.btE4I = function () {
        var cqJ8B = function (d6d, t6n) {
            this.vF3x(t6n, d6d)
        };
        return function (dU8M) {
            k6e.ey8q(dU8M, cqJ8B, this);
            return this
        }
    }();
    ot1x.gG9x = function () {
        var btC4G = function (d6d, t6n) {
            this.gG9x(t6n)
        };
        return function (t6n) {
            var t6n = (t6n || "").toLowerCase();
            if (!!t6n) {
                delete this.lI0x[t6n]
            } else {
                k6e.ey8q(this.lI0x, btC4G, this)
            }
            return this
        }
    }();
    ot1x.btB4F = function (t6n, d6d) {
        if (!t6n || !k6e.gr9i(d6d)) return this;
        t6n = t6n.toLowerCase();
        var dU8M = this.lI0x[t6n];
        if (!dU8M) {
            this.lI0x[t6n] = d6d;
            return this
        }
        if (!k6e.eC8u(dU8M)) {
            this.lI0x[t6n] = [dU8M]
        }
        this.lI0x[t6n].push(d6d);
        return this
    };
    ot1x.z6t = function (t6n) {
        var d6d = this.lI0x[(t6n || "").toLowerCase()];
        if (!d6d) return this;
        var bh6b = fj8b.slice.call(arguments, 1);
        if (!k6e.eC8u(d6d)) return d6d.apply(this, bh6b);
        k6e.bb6V(d6d, function (dp8h) {
            try {
                dp8h.apply(this, bh6b)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N6H.VO6I = function () {
        var Q6K = {};
        return function (D6x, fv8n, e6c) {
            var eU8M = fv8n.cqF8x;
            if (!eU8M) {
                eU8M = k6e.Sj4n(10);
                fv8n.cqF8x = eU8M
            }
            var J6D = D6x + "-" + eU8M, cv7o = Q6K[J6D];
            if (!!e6c && !cv7o) {
                cv7o = fv8n.A6u(e6c);
                cv7o.S6M = cv7o.S6M.er8j(function (d6d) {
                    delete Q6K[J6D];
                    delete cv7o.S6M
                });
                Q6K[J6D] = cv7o
            }
            return cv7o
        }
    }()
})();
(function () {
    var o = NEJ.O, u = NEJ.P("nej.u"), j = NEJ.P("nej.j");
    j.gZ9Q = function () {
        var cN7G = new Date, cqD8v = +cN7G, btz4D = 864e5;
        var cqx8p = function (T6N) {
            var qS2x = document.cookie, rU2x = "\\b" + T6N + "=", Xo6i = qS2x.search(rU2x);
            if (Xo6i < 0) return "";
            Xo6i += rU2x.length - 2;
            var Am5r = qS2x.indexOf(";", Xo6i);
            if (Am5r < 0) Am5r = qS2x.length;
            return qS2x.substring(Xo6i, Am5r) || ""
        };
        return function (T6N, j6d) {
            if (j6d === undefined) return cqx8p(T6N);
            if (u.fw8o(j6d)) {
                if (!!j6d) {
                    document.cookie = T6N + "=" + j6d + ";";
                    return j6d
                }
                j6d = {expires: -100}
            }
            j6d = j6d || o;
            var qS2x = T6N + "=" + (j6d.value || "") + ";";
            delete j6d.value;
            if (j6d.expires !== undefined) {
                cN7G.setTime(cqD8v + j6d.expires * btz4D);
                j6d.expires = cN7G.toGMTString()
            }
            qS2x += u.sY2x(j6d, ";");
            document.cookie = qS2x
        }
    }()
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, hO9F = c6e("nej.c"), eb8T = c6e("nej.g"), a5f = c6e("nej.e"), x6r = c6e("nej.j"),
        H6B = c6e("nej.ut"), N6H = c6e("nej.ut.j"), k6e = c6e("nej.u"), b6f;
    if (!!N6H.Ka8S) return;
    N6H.Ka8S = NEJ.C();
    b6f = N6H.Ka8S.O6I(H6B.cD7w);
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.oS1x = {noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4};
        NEJ.EX(this.oS1x, e6c);
        var BO5T = hO9F.B6v("csrf");
        if ((/^\/[^\/]/.test(this.oS1x.url) || this.oS1x.url.indexOf(location.protocol + "//" + location.host) == 0) && !!BO5T.cookie && !!BO5T.param) {
            var bx7q = encodeURIComponent(BO5T.param) + "=" + encodeURIComponent(x6r.gZ9Q(BO5T.cookie) || ""),
                RC4G = this.oS1x.url.indexOf("?") < 0 ? "?" : "&";
            this.oS1x.url += RC4G + bx7q
        }
        this.XV6P = e6c.headers || {};
        var bl6f = this.XV6P[eb8T.yj4n];
        if (bl6f == null) this.XV6P[eb8T.yj4n] = eb8T.cwD9u
    };
    b6f.bA7t = function () {
        this.bF7y();
        delete this.Ai5n;
        delete this.oS1x;
        delete this.XV6P
    };
    b6f.cqw8o = function (bl6f) {
        var bv7o = {r: /\<|\>/g, "<": "&lt;", ">": "&gt;"};
        if (!this.oS1x.noescape) {
            return k6e.Cq6k(bv7o, bl6f)
        } else {
            return bl6f
        }
    };
    b6f.tQ3x = function (d6d) {
        var eh8Z = d6d.status;
        if (eh8Z == -1) {
            this.z6t("onerror", {code: eb8T.bwG5L, message: "请求[" + this.oS1x.url + "]超时！"});
            return
        }
        if (("" + eh8Z).indexOf("2") != 0) {
            this.z6t("onerror", {
                data: eh8Z,
                code: eb8T.bne1x,
                message: "服务器返回异常状态[" + eh8Z + "]!",
                extData: d6d.result
            });
            return
        }
        this.z6t("onload", a5f.ctJ8B(this.cqw8o(d6d.result), this.oS1x.type))
    };
    b6f.cn7g = bn7g;
    b6f.bty4C = function (j6d) {
        var V6P = this.oS1x.url;
        if (!V6P) {
            this.z6t("onerror", {code: eb8T.blG1x, message: "没有输入请求地址！"});
            return this
        }
        try {
            this.oS1x.data = j6d == null ? null : j6d;
            var d6d = {request: this.oS1x, headers: this.XV6P};
            try {
                this.z6t("onbeforerequest", d6d)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cn7g(d6d)
        } catch (e) {
            this.z6t("onerror", {code: eb8T.bne1x, message: "请求[" + V6P + "]失败:" + e.message + "！"})
        }
        return this
    };
    b6f.jI0x = bn7g
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, bc6W = c6e("nej.h"), eb8T = c6e("nej.g"), k6e = c6e("nej.u"), N6H = c6e("nej.ut.j"),
        Q6K = {}, Ro4s;
    if (!!N6H.Zp7i) return;
    N6H.Zp7i = NEJ.C();
    Ro4s = N6H.Zp7i.O6I(N6H.Ka8S);
    Ro4s.bA7t = function () {
        this.bF7y();
        window.clearTimeout(this.dX8P);
        delete this.dX8P;
        try {
            this.qU2x.onreadystatechange = bn7g;
            this.qU2x.abort()
        } catch (e) {
        }
        delete this.qU2x
    };
    Ro4s.cn7g = function () {
        var cqu8m = function (C6w, J6D) {
            this.qU2x.setRequestHeader(J6D, C6w)
        };
        return function (e6c) {
            var fP9G = e6c.request, ol1x = e6c.headers;
            this.qU2x = bc6W.btx4B();
            if (ol1x[eb8T.yj4n] === eb8T.EM6G) {
                delete ol1x[eb8T.yj4n];
                this.qU2x.upload.onprogress = this.fX9O.g6a(this, 1);
                if (fP9G.data.tagName === "FORM") fP9G.data = new FormData(fP9G.data)
            }
            this.qU2x.onreadystatechange = this.fX9O.g6a(this, 2);
            if (fP9G.timeout != 0) {
                this.dX8P = window.setTimeout(this.fX9O.g6a(this, 3), fP9G.timeout)
            }
            this.qU2x.open(fP9G.method, fP9G.url, !fP9G.sync);
            k6e.ey8q(ol1x, cqu8m, this);
            if (!!this.oS1x.cookie && "withCredentials" in this.qU2x) this.qU2x.withCredentials = !0;
            this.qU2x.send(fP9G.data)
        }
    }();
    Ro4s.fX9O = function (t6n) {
        switch (t6n) {
            case 1:
                this.z6t("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qU2x.readyState == 4) this.tQ3x({
                    status: this.qU2x.status,
                    result: this.qU2x.responseText || ""
                });
                break;
            case 3:
                this.tQ3x({status: -1});
                break
        }
    };
    Ro4s.jI0x = function () {
        this.tQ3x({status: 0});
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Rl4p = {}, baJ7C = [], bOb0x = /\s+/g, gq9h = +(new Date), JW8O, bQ7J, kv0x;
    var Fk7d = function () {
        var go9f = /^\s*[\[\{'"].*?[\]\}'"]\s*$/, jD0x = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            EE6y = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i, btw4A = /^new\s+/,
            cqh8Z = /['"]/;
        var cqg8Y = function (C6w) {
            if (go9f.test(C6w)) return;
            C6w = C6w.split(".")[0].trim();
            if (!C6w || cqh8Z.test(C6w)) return;
            C6w = C6w.replace(btw4A, "");
            try {
                if (EE6y.test(C6w)) return;
                kv0x[C6w] = 1
            } catch (e) {
            }
        };
        return function (bl6f) {
            bl6f = bl6f || "";
            if (!bl6f || go9f.test(bl6f)) return;
            var bs7l = bl6f.split(jD0x);
            for (var i = 0, l = bs7l.length; i < l; i++) cqg8Y(bs7l[i])
        }
    }();
    var cqd8V = function (dB8t) {
        if (dB8t[2] != "in") throw"bad for loop statement: " + dB8t.join(" ");
        baJ7C.push(dB8t[1]);
        Fk7d(dB8t[3]);
        return "var __HASH__" + dB8t[1] + " = " + dB8t[3] + "," + dB8t[1] + "," + dB8t[1] + "_count=0;" + "if (!!__HASH__" + dB8t[1] + ")" + "for(var " + dB8t[1] + "_key in __HASH__" + dB8t[1] + "){" + dB8t[1] + " = __HASH__" + dB8t[1] + "[" + dB8t[1] + "_key];" + "if (typeof(" + dB8t[1] + ')=="function") continue;' + dB8t[1] + "_count++;"
    };
    var cqc8U = function () {
        var dB8t = baJ7C[baJ7C.length - 1];
        return "}; if(!__HASH__" + dB8t + "||!" + dB8t + "_count){"
    };
    var cqa8S = function () {
        baJ7C.pop();
        return "};"
    };
    var cpZ8R = function (dB8t) {
        if (dB8t[2] != "as") throw"bad for list loop statement: " + dB8t.join(" ");
        var Rg4k = dB8t[1].split("..");
        if (Rg4k.length > 1) {
            Fk7d(Rg4k[0]);
            Fk7d(Rg4k[1]);
            return "for(var " + dB8t[3] + "," + dB8t[3] + "_index=0," + dB8t[3] + "_beg=" + Rg4k[0] + "," + dB8t[3] + "_end=" + Rg4k[1] + "," + dB8t[3] + "_length=parseInt(" + dB8t[3] + "_end-" + dB8t[3] + "_beg+1);" + dB8t[3] + "_index<" + dB8t[3] + "_length;" + dB8t[3] + "_index++){" + dB8t[3] + " = " + dB8t[3] + "_beg+" + dB8t[3] + "_index;"
        } else {
            Fk7d(dB8t[1]);
            return "for(var __LIST__" + dB8t[3] + " = " + dB8t[1] + "," + dB8t[3] + "," + dB8t[3] + "_index=0," + dB8t[3] + "_length=__LIST__" + dB8t[3] + ".length;" + dB8t[3] + "_index<" + dB8t[3] + "_length;" + dB8t[3] + "_index++){" + dB8t[3] + " = __LIST__" + dB8t[3] + "[" + dB8t[3] + "_index];"
        }
    };
    var cpT8L = function (dB8t) {
        if (!dB8t || !dB8t.length) return;
        dB8t.shift();
        var T6N = dB8t[0].split("(")[0];
        return "var " + T6N + " = function" + dB8t.join("").replace(T6N, "") + "{var __OUT=[];"
    };
    var cpS8K = function (dB8t) {
        if (!dB8t[1]) throw"bad include statement: " + dB8t.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var btt4x = function (lD0x, dB8t) {
        Fk7d(dB8t.slice(1).join(" "));
        return lD0x
    };
    var cpQ8I = function (dB8t) {
        return btt4x("if(", dB8t)
    };
    var cpP8H = function (dB8t) {
        return btt4x("}else if(", dB8t)
    };
    var cpO8G = function (dB8t) {
        return btt4x("var ", dB8t)
    };
    bQ7J = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {pfix: cpQ8I, sfix: "){", pmin: 1},
            "else": {pfix: "}else{"},
            elseif: {pfix: cpP8H, sfix: "){", pdft: "true"},
            "/if": {pfix: "}"},
            "for": {pfix: cqd8V, pmin: 3},
            forelse: {pfix: cqc8U},
            "/for": {pfix: cqa8S},
            list: {pfix: cpZ8R, pmin: 3},
            "/list": {pfix: "};"},
            "break": {pfix: "break;"},
            "var": {pfix: cpO8G, sfix: ";"},
            macro: {pfix: cpT8L},
            "/macro": {pfix: 'return __OUT.join("");};'},
            trim: {
                pfix: function () {
                    JW8O = !0
                }
            },
            "/trim": {
                pfix: function () {
                    JW8O = null
                }
            },
            inline: {pfix: cpS8K, pmin: 1, sfix: "));}"}
        },
        ext: {
            seed: function (lD0x) {
                return (lD0x || "") + "" + gq9h
            }, "default": function (C6w, kT0x) {
                return C6w || kT0x
            }
        }
    };
    var cpN8F = function () {
        var cpL7E = /\\([\{\}])/g;
        return function (bl6f, jl0x) {
            bl6f = bl6f.replace(cpL7E, "$1");
            var dB8t = bl6f.slice(1, -1).split(bOb0x), bd6X = bQ7J.def[dB8t[0]];
            if (!bd6X) {
                Vl5q(bl6f, jl0x);
                return
            }
            if (!!bd6X.pmin && bd6X.pmin >= dB8t.length) throw"Statement needs more parameters:" + bl6f;
            jl0x.push(!!bd6X.pfix && typeof bd6X.pfix != "string" ? bd6X.pfix(dB8t) : bd6X.pfix || "");
            if (!!bd6X.sfix) {
                if (dB8t.length <= 1) {
                    if (!!bd6X.pdft) jl0x.push(bd6X.pdft)
                } else {
                    for (var i = 1, l = dB8t.length; i < l; i++) {
                        if (i > 1) jl0x.push(" ");
                        jl0x.push(dB8t[i])
                    }
                }
                jl0x.push(bd6X.sfix)
            }
        }
    }();
    var bNR0x = function (JT8L, jl0x) {
        if (!JT8L || !JT8L.length) return;
        if (JT8L.length == 1) {
            var bts4w = JT8L.pop();
            Fk7d(bts4w);
            jl0x.push(bts4w == "" ? '""' : bts4w);
            return
        }
        var btr4v = JT8L.pop().split(":");
        jl0x.push("__MDF['" + btr4v.shift() + "'](");
        bNR0x(JT8L, jl0x);
        if (btr4v.length > 0) {
            var bh6b = btr4v.join(":");
            Fk7d(bh6b);
            jl0x.push("," + bh6b)
        }
        jl0x.push(")")
    };
    var Vl5q = function (bl6f, jl0x) {
        if (!bl6f) return;
        var vM4Q = bl6f.split("\n");
        if (!vM4Q || !vM4Q.length) return;
        for (var i = 0, l = vM4Q.length, he9V; i < l; i++) {
            he9V = vM4Q[i];
            if (!!JW8O) {
                he9V = he9V.trim();
                if (!he9V) continue
            }
            cpG7z(he9V, jl0x);
            if (!!JW8O && i < l - 1) jl0x.push("__OUT.push('\\n');")
        }
    };
    var cpG7z = function () {
        var cpE7x = /\|\|/g, cpD7w = /#@@#/g;
        return function (bl6f, jl0x) {
            var QZ4d = "}", QY4c = -1, bm6g = bl6f.length, vu3x, gs9j, JR8J, WQ6K, QW4a;
            while (QY4c + QZ4d.length < bm6g) {
                vu3x = "${";
                gs9j = "}";
                JR8J = bl6f.indexOf(vu3x, QY4c + QZ4d.length);
                if (JR8J < 0) break;
                if (bl6f.charAt(JR8J + 2) == "%") {
                    vu3x = "${%";
                    gs9j = "%}"
                }
                WQ6K = bl6f.indexOf(gs9j, JR8J + vu3x.length);
                if (WQ6K < 0) break;
                Xf6Z(bl6f.substring(QY4c + QZ4d.length, JR8J), jl0x);
                QW4a = bl6f.substring(JR8J + vu3x.length, WQ6K).replace(cpE7x, "#@@#").split("|");
                for (var i = 0, l = QW4a.length; i < l; QW4a[i] = QW4a[i].replace(cpD7w, "||"), i++) ;
                jl0x.push("__OUT.push(");
                bNR0x(QW4a, jl0x);
                jl0x.push(");");
                QZ4d = gs9j;
                QY4c = WQ6K
            }
            Xf6Z(bl6f.substring(QY4c + QZ4d.length), jl0x)
        }
    }();
    var Xf6Z = function () {
        var bv7o = {r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'"};
        var cpC7v = function (bl6f) {
            return (bl6f || "").replace(bv7o.r, function ($1) {
                return bv7o[$1] || $1
            })
        };
        return function (bl6f, jl0x) {
            if (!bl6f) return;
            jl0x.push("__OUT.push('" + cpC7v(bl6f) + "');")
        }
    }();
    var cpB7u = function () {
        var cpz7s = /\t/g, cpn7g = /\n/g, cpi7b = /\r\n?/g;
        var bNy0x = function (bl6f, vu3x) {
            var r6l = bl6f.indexOf("}", vu3x + 1);
            while (bl6f.charAt(r6l - 1) == "\\") {
                r6l = bl6f.indexOf("}", r6l + 1)
            }
            return r6l
        };
        var cpc7V = function () {
            var bs7l = [], DS6M = arguments[0];
            for (var x in DS6M) {
                x = (x || "").trim();
                if (!x) continue;
                bs7l.push(x + "=$v('" + x + "')")
            }
            return bs7l.length > 0 ? "var " + bs7l.join(",") + ";" : ""
        };
        return function (bl6f) {
            kv0x = {};
            bl6f = bl6f.replace(cpi7b, "\n").replace(cpz7s, "    ");
            var qX2x = ["if(!__CTX) return '';", ""];
            qX2x.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qX2x.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qX2x.push("__OUT=[];");
            var DW6Q = -1, bm6g = bl6f.length;
            var mz0x, JQ8I, QR4V, QP4T, zX5c, QN4R, btg4k, QK4O;
            while (DW6Q + 1 < bm6g) {
                mz0x = DW6Q;
                mz0x = bl6f.indexOf("{", mz0x + 1);
                while (mz0x >= 0) {
                    JQ8I = bNy0x(bl6f, mz0x);
                    QR4V = bl6f.substring(mz0x, JQ8I);
                    QP4T = QR4V.match(bQ7J.blk);
                    if (!!QP4T) {
                        zX5c = QP4T[1].length + 1;
                        QN4R = bl6f.indexOf("}", mz0x + zX5c);
                        if (QN4R >= 0) {
                            btg4k = QN4R - mz0x - zX5c <= 0 ? "{/" + QP4T[1] + "}" : QR4V.substr(zX5c + 1);
                            zX5c = bl6f.indexOf(btg4k, QN4R + 1);
                            if (zX5c >= 0) {
                                Vl5q(bl6f.substring(DW6Q + 1, mz0x), qX2x);
                                QK4O = bl6f.substring(QN4R + 1, zX5c);
                                switch (QP4T[1]) {
                                    case"cdata":
                                        Xf6Z(QK4O, qX2x);
                                        break;
                                    case"minify":
                                        Xf6Z(QK4O.replace(cpn7g, " ").replace(bOb0x, " "), qX2x);
                                        break;
                                    case"eval":
                                        if (!!QK4O) qX2x.push("__OUT.push((function(){" + QK4O + "})());");
                                        break
                                }
                                mz0x = DW6Q = zX5c + btg4k.length - 1
                            }
                        }
                    } else if (bl6f.charAt(mz0x - 1) != "$" && bl6f.charAt(mz0x - 1) != "\\" && QR4V.substr(QR4V.charAt(1) == "/" ? 2 : 1).search(bQ7J.tag) == 0) {
                        break
                    }
                    mz0x = bl6f.indexOf("{", mz0x + 1)
                }
                if (mz0x < 0) break;
                JQ8I = bNy0x(bl6f, mz0x);
                if (JQ8I < 0) break;
                Vl5q(bl6f.substring(DW6Q + 1, mz0x), qX2x);
                cpN8F(bl6f.substring(mz0x, JQ8I + 1), qX2x);
                DW6Q = JQ8I
            }
            Vl5q(bl6f.substring(DW6Q + 1), qX2x);
            qX2x.push(';return __OUT.join("");');
            qX2x[1] = cpc7V(kv0x);
            kv0x = null;
            return new Function("__CTX", "__MDF", qX2x.join(""))
        }
    }();
    TrimPath.seed = function () {
        return gq9h
    };
    TrimPath.merge = function () {
        var QJ4N = {};
        TrimPath.dump = function () {
            return {func: QJ4N, text: Rl4p}
        };
        return function (eU8M, j6d, js0x) {
            try {
                j6d = j6d || {};
                if (!QJ4N[eU8M] && !Rl4p[eU8M]) return "";
                if (!QJ4N[eU8M]) {
                    QJ4N[eU8M] = cpB7u(Rl4p[eU8M]);
                    delete Rl4p[eU8M]
                }
                if (!!js0x) {
                    for (var x in bQ7J.ext) if (!js0x[x]) js0x[x] = bQ7J.ext[x]
                }
                return QJ4N[eU8M](j6d, js0x || bQ7J.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var coZ7S = +(new Date);
        return function (bl6f, eU8M) {
            if (!bl6f) return "";
            eU8M = eU8M || "ck_" + coZ7S++;
            Rl4p[eU8M] = bl6f;
            return eU8M
        }
    }()
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), k6e = c6e("nej.u"), eJ8B = {}, bNt0x = {};
    a5f.JO8G = TrimPath.seed;
    a5f.bX7Q = function () {
        var bNs0x = function (D6x) {
            return !a5f.ih9Y ? "" : a5f.ih9Y(D6x)
        };
        return function (eU8M, j6d, js0x) {
            j6d = NEJ.X(NEJ.X({}, bNt0x), j6d);
            j6d.inline = bNs0x;
            js0x = NEJ.X(NEJ.X({}, eJ8B), js0x);
            js0x.rand = k6e.ns1x;
            js0x.format = k6e.hJ9A;
            js0x.escape = k6e.dQ8I;
            js0x.inline = bNs0x;
            return TrimPath.merge(eU8M, j6d, js0x)
        }
    }();
    a5f.et8l = function (bl6f, coV7O) {
        if (!bl6f) return "";
        var eU8M, G6A = a5f.B6v(bl6f);
        if (!!G6A) {
            eU8M = G6A.id;
            bl6f = G6A.value || G6A.innerText;
            if (!coV7O) a5f.cz7s(G6A)
        }
        return TrimPath.parse(bl6f, eU8M)
    };
    a5f.dH8z = function (bG7z, eU8M, j6d, js0x) {
        bG7z = a5f.B6v(bG7z);
        if (!!bG7z) bG7z.innerHTML = a5f.bX7Q(eU8M, j6d, js0x);
        return this
    };
    a5f.cyN0x = function (bv7o) {
        NEJ.X(eJ8B, bv7o)
    };
    a5f.coO7H = function (bv7o) {
        NEJ.X(bNt0x, bv7o)
    };
    c6e("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var dn8f = NEJ.P("nej.p"), N6H = window, kK0x = dn8f.KX8P, bNo0x = kK0x.ipad || kK0x.iphone;
    if (!bNo0x && !!N6H.requestAnimationFrame && !!N6H.cancelRequestAnimationFrame) return;
    var lD0x = dn8f.dj8b.prefix.pro;
    if (!bNo0x && !!N6H[lD0x + "RequestAnimationFrame"] && !!N6H[lD0x + "CancelRequestAnimationFrame"]) {
        N6H.requestAnimationFrame = N6H[lD0x + "RequestAnimationFrame"];
        N6H.cancelRequestAnimationFrame = N6H[lD0x + "CancelRequestAnimationFrame"];
        return
    }
    var bbl7e = kK0x.desktop ? 80 : kK0x.ios ? 50 : 30;
    N6H.requestAnimationFrame = function (dE8w) {
        return window.setTimeout(function () {
            try {
                dE8w(+(new Date))
            } catch (ex) {
            }
        }, 1e3 / bbl7e)
    };
    N6H.cancelRequestAnimationFrame = function (D6x) {
        window.clearTimeout(D6x);
        return this
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, k6e = c6e("nej.u"), a5f = c6e("nej.e"), h6b = c6e("nej.v"), bc6W = c6e("nej.h"),
        cP7I = c6e("nej.x"), bbp7i = c6e("nej.ut.j.cb"), gt9k;
    if (!!a5f.pW1x) return;
    a5f.pW1x = cP7I.pW1x = function () {
        var Q6K = {}, go9f = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (d6d) {
            var D6x = decodeURIComponent(d6d.target), t6n = d6d.type.toLowerCase();
            var dp8h = Q6K[D6x + "-on" + t6n];
            if (!!dp8h) {
                try {
                    dp8h(d6d)
                } catch (e) {
                }
                return
            }
            var cE7x = Q6K[D6x + "-tgt"];
            if (!!cE7x && go9f.test(t6n)) {
                bNn0x(cE7x, d6d)
            }
        };
        var btd4h = function (e6c) {
            var bG7z = a5f.B6v(e6c.parent) || document.body, dL8D = a5f.bX7Q(gt9k, e6c);
            bG7z.insertAdjacentHTML(!e6c.hidden ? "beforeEnd" : "afterBegin", dL8D)
        };
        var bNn0x = function (D6x, d6d) {
            var t6n = d6d.type.toLowerCase();
            requestAnimationFrame(function () {
                h6b.z6t(D6x, t6n)
            })
        };
        var coI7B = function (ho9f) {
            return !!ho9f && !!ho9f.inited && !!ho9f.inited()
        };
        var QB4F = function (D6x) {
            var bs7l = [document.embeds[D6x], a5f.B6v(D6x), document[D6x], window[D6x]], r6l = k6e.ey8q(bs7l, coI7B),
                ho9f = bs7l[r6l], btc4g = D6x + "-count";
            Q6K[btc4g]++;
            if (!!ho9f || Q6K[btc4g] > 100) {
                Q6K[D6x](ho9f);
                delete Q6K[D6x];
                delete Q6K[btc4g];
                return
            }
            window.setTimeout(QB4F.g6a(null, D6x), 300)
        };
        var coG7z = function (e6c) {
            var D6x = e6c.id, gd9U = e6c.params;
            if (!gd9U) {
                gd9U = {};
                e6c.params = gd9U
            }
            var kv0x = gd9U.flashvars || "";
            kv0x += (!kv0x ? "" : "&") + ("id=" + D6x);
            if (!e6c.hidden && (!!e6c.target || bc6W.Vd5i(gd9U.wmode))) {
                var hs9j = a5f.kZ0x(e6c.target) || a5f.kZ0x(e6c.parent), TW5b = k6e.bav7o();
                bbp7i["cb" + TW5b] = bNn0x.g6a(null, hs9j);
                kv0x += "&onevent=nej.ut.j.cb.cb" + TW5b;
                Q6K[D6x + "-tgt"] = hs9j
            }
            gd9U.flashvars = kv0x;
            k6e.ey8q(e6c, function (C6w, J6D) {
                if (k6e.gr9i(C6w) && J6D != "onready") {
                    Q6K[D6x + "-" + J6D] = C6w
                }
            })
        };
        return function (e6c) {
            e6c = NEJ.X({}, e6c);
            if (!e6c.src) return;
            var D6x = "flash_" + k6e.bav7o();
            e6c.id = D6x;
            coG7z(e6c);
            btd4h(e6c);
            if (!e6c.onready) return;
            Q6K[D6x] = e6c.onready;
            Q6K[D6x + "-count"] = 0;
            QB4F(D6x)
        }
    }();
    gt9k = a5f.et8l('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cP7I.isChange = !0
})();
(function () {
    var c6e = NEJ.P, hO9F = c6e("nej.c"), a5f = c6e("nej.e"), k6e = c6e("nej.u"), N6H = c6e("nej.ut.j"),
        bbp7i = c6e("nej.ut.j.cb"), Q6K = {}, gq9h = +(new Date), btb4f;
    if (!!N6H.bta4e) return;
    bbp7i["ld" + gq9h] = function (J6D, cJ7C) {
        var jq0x = Q6K[J6D];
        if (!jq0x) return;
        delete Q6K[J6D];
        jq0x.tQ3x({status: 200, result: cJ7C})
    };
    bbp7i["er" + gq9h] = function (J6D, eh8Z) {
        var jq0x = Q6K[J6D];
        if (!jq0x) return;
        delete Q6K[J6D];
        jq0x.tQ3x({status: eh8Z || 0})
    };
    N6H.bta4e = NEJ.C();
    btb4f = N6H.bta4e.O6I(N6H.Ka8S);
    btb4f.cn7g = function (e6c) {
        var ho9f = Q6K.flash;
        if (k6e.eC8u(ho9f)) {
            ho9f.push(this.cn7g.g6a(this, e6c));
            return
        }
        if (!ho9f) {
            Q6K.flash = [this.cn7g.g6a(this, e6c)];
            a5f.pW1x({
                hidden: !0, src: hO9F.B6v("ajax.swf"), onready: function (ho9f) {
                    if (!ho9f) return;
                    var i6c = Q6K.flash;
                    Q6K.flash = ho9f;
                    k6e.mt0x(i6c, function (dp8h) {
                        try {
                            dp8h()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Ai5n = "swf-" + k6e.ns1x();
        Q6K[this.Ai5n] = this;
        var j6d = NEJ.EX({url: "", data: null, method: "GET"}, e6c.request);
        j6d.key = this.Ai5n;
        j6d.headers = e6c.headers;
        j6d.onerror = "nej.ut.j.cb.er" + gq9h;
        j6d.onloaded = "nej.ut.j.cb.ld" + gq9h;
        var bNi0x = hO9F.bXb3x(j6d.url);
        if (!!bNi0x) j6d.policyURL = bNi0x;
        ho9f.request(j6d)
    };
    btb4f.jI0x = function () {
        delete Q6K[this.Ai5n];
        this.tQ3x({status: 0});
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bc6W = c6e("nej.h");
    bc6W.bNh9Y = function () {
        var cZ7S = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (kd0x) {
            kd0x = kd0x || "";
            if (cZ7S.test(kd0x)) return RegExp.$1;
            return "*"
        }
    }();
    bc6W.bsW4a = function (j6d) {
        return j6d
    };
    bc6W.bsV4Z = function (bMY9P, e6c) {
        if (!bMY9P.postMessage) return;
        e6c = e6c || Z6T;
        bMY9P.postMessage(bc6W.bsW4a(e6c.data), bc6W.bNh9Y(e6c.origin))
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), N6H = c6e("nej.ut"), b6f;
    if (!!N6H.fE8w) return;
    N6H.fE8w = NEJ.C();
    b6f = N6H.fE8w.O6I(N6H.cD7w);
    b6f.cs7l = function () {
        this.R6L = {};
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.Qs4w = a5f.B6v(e6c.element) || window;
        this.bMX9O(e6c.event);
        this.coj7c();
        this.z6t("oninit")
    };
    b6f.bA7t = function () {
        var CT6N = function (C6w, J6D, bv7o) {
            if (!k6e.eC8u(C6w)) {
                k6e.YV7O(this.Qs4w, J6D)
            }
            delete bv7o[J6D]
        };
        return function () {
            this.bF7y();
            k6e.ey8q(this.R6L, CT6N, this);
            delete this.Qs4w
        }
    }();
    b6f.VK6E = function (G6A, t6n) {
        G6A = a5f.B6v(G6A);
        return G6A == this.Qs4w && (!t6n || !!this.R6L["on" + t6n])
    };
    b6f.bMX9O = function (d6d) {
        if (k6e.fw8o(d6d)) {
            var T6N = "on" + d6d;
            if (!this.R6L[T6N]) {
                this.R6L[T6N] = this.coi7b.g6a(this, d6d)
            }
            this.bMW9N(d6d);
            return
        }
        if (k6e.eC8u(d6d)) {
            k6e.bb6V(d6d, this.bMX9O, this)
        }
    };
    b6f.bMW9N = function (t6n) {
        var d6d = "on" + t6n, dp8h = this.Qs4w[d6d], bMP9G = this.R6L[d6d];
        if (dp8h != bMP9G) {
            this.VT6N(t6n);
            if (!!dp8h && dp8h != bn7g) this.bMO9F(t6n, dp8h);
            this.Qs4w[d6d] = bMP9G
        }
    };
    b6f.bMO9F = function (t6n, dp8h, cnS7L) {
        var i6c = this.R6L[t6n];
        if (!i6c) {
            i6c = [];
            this.R6L[t6n] = i6c
        }
        if (k6e.gr9i(dp8h)) {
            !cnS7L ? i6c.push(dp8h) : i6c.unshift(dp8h)
        }
    };
    b6f.VT6N = function (t6n, dp8h) {
        var i6c = this.R6L[t6n];
        if (!i6c || !i6c.length) return;
        if (!dp8h) {
            delete this.R6L[t6n];
            return
        }
        k6e.mt0x(i6c, function (C6w, r6l, JK8C) {
            if (dp8h === C6w) {
                JK8C.splice(r6l, 1);
                return !0
            }
        })
    };
    b6f.coi7b = function (t6n, d6d) {
        d6d = d6d || {noargs: !0};
        d6d.type = t6n;
        this.z6t("ondispatch", d6d);
        if (!!d6d.stopped) return;
        k6e.bb6V(this.R6L[t6n], function (dp8h) {
            try {
                dp8h(d6d)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b6f.coj7c = function () {
        var bsR4V = function (d6d) {
            var bh6b = d6d.args, t6n = bh6b[1].toLowerCase();
            if (this.VK6E(bh6b[0], t6n)) {
                d6d.stopped = !0;
                this.bMW9N(t6n);
                this.bMO9F(t6n, bh6b[2], bh6b[3]);
                this.z6t("oneventadd", {type: t6n, listener: bh6b[2]})
            }
        };
        var cnD7w = function (d6d) {
            var bh6b = d6d.args, t6n = bh6b[1].toLowerCase();
            if (this.VK6E(bh6b[0], t6n)) {
                d6d.stopped = !0;
                this.VT6N(t6n, bh6b[2])
            }
        };
        var btC4G = function (d6d) {
            var bh6b = d6d.args, t6n = (bh6b[1] || "").toLowerCase();
            if (this.VK6E(bh6b[0])) {
                if (!!t6n) {
                    this.VT6N(t6n);
                    return
                }
                k6e.ey8q(this.R6L, function (C6w, J6D) {
                    if (k6e.eC8u(C6w)) {
                        this.VT6N(J6D)
                    }
                }, this)
            }
        };
        var cnC7v = function (d6d) {
            var bh6b = d6d.args, t6n = bh6b[1].toLowerCase();
            if (this.VK6E(bh6b[0], t6n)) {
                d6d.stopped = !0;
                bh6b[0]["on" + t6n].apply(bh6b[0], bh6b.slice(2))
            }
        };
        return function () {
            if (!!this.cnB7u) return;
            this.cnB7u = true;
            h6b.s6m = h6b.s6m.er8j(bsR4V.g6a(this));
            h6b.mx0x = h6b.mx0x.er8j(cnD7w.g6a(this));
            h6b.gG9x = h6b.gG9x.er8j(btC4G.g6a(this));
            h6b.z6t = h6b.z6t.er8j(cnC7v.g6a(this))
        }
    }()
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p"), bc6W = c6e("nej.h"), k6e = c6e("nej.u"), h6b = c6e("nej.v"),
        H6B = c6e("nej.ut");
    if (N6H.mF1x.trident) return;
    if (!!window.postMessage) {
        bc6W.bsW4a = bc6W.bsW4a.er8j(function (d6d) {
            d6d.stopped = !0;
            d6d.value = JSON.stringify(d6d.args[0])
        });
        return
    }
    var J6D = "MSG|", jE0x = [];
    var cnz7s = function () {
        var T6N = unescape(window.name || "").trim();
        if (!T6N || T6N.indexOf(J6D) != 0) return;
        window.name = "";
        var o6i = k6e.bOM0x(T6N.replace(J6D, ""), "|"), kd0x = (o6i.origin || "").toLowerCase();
        if (!!kd0x && kd0x != "*" && location.href.toLowerCase().indexOf(kd0x) != 0) return;
        h6b.z6t(window, "message", {
            data: JSON.parse(o6i.data || "null"),
            source: window.frames[o6i.self] || o6i.self,
            origin: bc6W.bNh9Y(o6i.ref || document.referrer)
        })
    };
    var cnv7o = function () {
        var WC6w;
        var cns7l = function (bv7o, r6l, i6c) {
            if (k6e.dd8V(WC6w, bv7o.w) < 0) {
                WC6w.push(bv7o.w);
                i6c.splice(r6l, 1);
                bv7o.w.name = bv7o.d
            }
        };
        return function () {
            WC6w = [];
            k6e.mt0x(jE0x, cns7l);
            WC6w = null
        }
    }();
    bc6W.bsV4Z = function () {
        var cnp7i = function (j6d) {
            var o6i = {};
            j6d = j6d || Z6T;
            o6i.origin = j6d.origin || "";
            o6i.ref = location.href;
            o6i.self = j6d.source;
            o6i.data = JSON.stringify(j6d.data);
            return J6D + k6e.sY2x(o6i, "|", !0)
        };
        return bc6W.bsV4Z.er8j(function (d6d) {
            d6d.stopped = !0;
            var bh6b = d6d.args;
            jE0x.unshift({w: bh6b[0], d: escape(cnp7i(bh6b[1]))})
        })
    }();
    H6B.fE8w.A6u({element: window, event: "message"});
    window.setInterval(cnv7o, 100);
    window.setInterval(cnz7s, 20)
})();
(function () {
    var c6e = NEJ.P, bc6W = c6e("nej.h"), a5f = c6e("nej.e"), x6r = c6e("nej.j");
    x6r.cno7h = function () {
        var iQ9H = window.name || "_parent", cni7b = {gi9Z: window.top, iQ9H: window, bG7z: window.parent};
        return function (cE7x, e6c) {
            if (typeof cE7x == "string") {
                cE7x = cni7b[cE7x] || window.frames[cE7x];
                if (!cE7x) return this
            }
            var j6d = NEJ.X({origin: "*", source: iQ9H}, e6c);
            bc6W.bsV4Z(cE7x, j6d);
            return this
        }
    }()
})();
(function () {
    var c6e = NEJ.P, hO9F = c6e("nej.c"), a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        x6r = c6e("nej.j"), N6H = c6e("nej.ut.j"), Q6K = {}, Xk6e;
    if (!!N6H.bsH4L) return;
    N6H.bsH4L = NEJ.C();
    Xk6e = N6H.bsH4L.O6I(N6H.Ka8S);
    Xk6e.cs7l = function () {
        var eO8G = "NEJ-AJAX-DATA:", EK6E = !1;
        var bsG4K = function (d6d) {
            var j6d = d6d.data;
            if (j6d.indexOf(eO8G) != 0) return;
            j6d = JSON.parse(j6d.replace(eO8G, ""));
            var jq0x = Q6K[j6d.key];
            if (!jq0x) return;
            delete Q6K[j6d.key];
            j6d.result = decodeURIComponent(j6d.result || "");
            jq0x.tQ3x(j6d)
        };
        var bsF4J = function () {
            if (!EK6E) {
                EK6E = !0;
                h6b.s6m(window, "message", bsG4K)
            }
        };
        return function () {
            this.cx7q();
            bsF4J()
        }
    }();
    Xk6e.cn7g = function (e6c) {
        var fP9G = e6c.request, jq0x = hO9F.bWF3x(fP9G.url), vn3x = Q6K[jq0x];
        if (k6e.eC8u(vn3x)) {
            vn3x.push(this.cn7g.g6a(this, e6c));
            return
        }
        if (!vn3x) {
            Q6K[jq0x] = [this.cn7g.g6a(this, e6c)];
            a5f.Xb6V({
                src: jq0x, visible: !1, onload: function (d6d) {
                    var i6c = Q6K[jq0x];
                    Q6K[jq0x] = h6b.U6O(d6d).contentWindow;
                    k6e.mt0x(i6c, function (dp8h) {
                        try {
                            dp8h()
                        } catch (e) {
                        }
                    })
                }
            });
            return
        }
        this.Ai5n = "frm-" + k6e.ns1x();
        Q6K[this.Ai5n] = this;
        var j6d = NEJ.EX({url: "", data: null, timeout: 0, method: "GET"}, fP9G);
        j6d.key = this.Ai5n;
        j6d.headers = e6c.headers;
        x6r.cno7h(Q6K[jq0x], {data: j6d})
    };
    Xk6e.jI0x = function () {
        delete Q6K[this.Ai5n];
        this.tQ3x({status: 0});
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, eb8T = c6e("nej.g"), a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        x6r = c6e("nej.j"), N6H = c6e("nej.ut.j"), Q6K = {}, JI8A;
    if (!!N6H.bsE4I) return;
    N6H.bsE4I = NEJ.C();
    JI8A = N6H.bsE4I.O6I(N6H.Ka8S);
    JI8A.cs7l = function () {
        var eO8G = "NEJ-UPLOAD-RESULT:", EK6E = !1;
        var bsG4K = function (d6d) {
            var j6d = d6d.data;
            if (j6d.indexOf(eO8G) != 0) return;
            j6d = JSON.parse(j6d.replace(eO8G, ""));
            var jq0x = Q6K[j6d.key];
            if (!jq0x) return;
            delete Q6K[j6d.key];
            jq0x.tQ3x(decodeURIComponent(j6d.result))
        };
        var bsF4J = function () {
            if (!EK6E) {
                EK6E = !0;
                h6b.s6m(window, "message", bsG4K)
            }
        };
        return function () {
            this.cx7q();
            bsF4J()
        }
    }();
    JI8A.bA7t = function () {
        this.bF7y();
        a5f.cz7s(this.bsD4H);
        delete this.bsD4H;
        window.clearTimeout(this.dX8P);
        delete this.dX8P
    };
    JI8A.tQ3x = function (cJ7C) {
        var P6J;
        try {
            P6J = JSON.parse(cJ7C);
            this.z6t("onload", P6J)
        } catch (e) {
            this.z6t("onerror", {code: eb8T.cku6o, message: cJ7C})
        }
    };
    JI8A.cn7g = function () {
        var cmo7h = function () {
            var mb0x, cJ7C;
            try {
                var mb0x = this.bsD4H.contentWindow.document.body, cJ7C = mb0x.innerText || mb0x.textContent
            } catch (e) {
                return
            }
            this.tQ3x(cJ7C)
        };
        var bsC4G = function (V6P, eZ8R, qS2x) {
            x6r.bp7i(V6P, {
                type: "json",
                method: "POST",
                cookie: qS2x,
                mode: parseInt(eZ8R) || 0,
                onload: function (j6d) {
                    if (!this.dX8P) return;
                    this.z6t("onuploading", j6d);
                    this.dX8P = window.setTimeout(bsC4G.g6a(this, V6P, eZ8R, qS2x), 1e3)
                }.g6a(this),
                onerror: function (bV7O) {
                    if (!this.dX8P) return;
                    this.dX8P = window.setTimeout(bsC4G.g6a(this, V6P, eZ8R, qS2x), 1e3)
                }.g6a(this)
            })
        };
        return function (e6c) {
            var fP9G = e6c.request, ol1x = e6c.headers, eS8K = fP9G.data, T6N = "fom-" + k6e.ns1x();
            Q6K[T6N] = this;
            eS8K.target = T6N;
            eS8K.method = "POST";
            eS8K.enctype = eb8T.EM6G;
            eS8K.encoding = eb8T.EM6G;
            var V6P = eS8K.action || "", lp0x = V6P.indexOf("?") <= 0 ? "?" : "&";
            eS8K.action = V6P + lp0x + "_proxy_=form";
            this.bsD4H = a5f.Xb6V({
                name: T6N, onload: function (d6d) {
                    var vn3x = h6b.U6O(d6d);
                    h6b.s6m(vn3x, "load", cmo7h.g6a(this));
                    eS8K.submit();
                    var bMb9S = (eS8K.nej_query || Z6T).value;
                    if (!bMb9S) return;
                    var eZ8R = (eS8K.nej_mode || Z6T).value, qS2x = (eS8K.nej_cookie || Z6T).value == "true";
                    this.dX8P = window.setTimeout(bsC4G.g6a(this, bMb9S, eZ8R, qS2x), 100)
                }.g6a(this)
            })
        }
    }();
    JI8A.jI0x = function () {
        this.z6t("onerror", {code: eb8T.cwl9c, message: "客户端终止文件上传"});
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bc6W = c6e("nej.h"), N6H = c6e("nej.ut.j");
    bc6W.btx4B = function () {
        return new XMLHttpRequest
    };
    bc6W.bsB4F = function (eZ8R, Yq6k, e6c) {
        var bv7o = !!Yq6k ? {2: N6H.bsE4I} : {2: N6H.bsH4L, 3: N6H.bta4e};
        return (bv7o[eZ8R] || N6H.Zp7i).A6u(e6c)
    }
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p"), bc6W = c6e("nej.h");
    if (N6H.mF1x.trident) return;
    bc6W.btx4B = function () {
        var Sx4B = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cmd7W = function () {
            for (var i = 0, l = Sx4B.length; i < l; i++) {
                try {
                    return new ActiveXObject(Sx4B[i])
                } catch (e) {
                }
            }
            return null
        };
        return bc6W.btx4B.er8j(function (d6d) {
            if (!!window.XMLHttpRequest) return;
            d6d.stopped = !0;
            d6d.value = cmd7W()
        })
    }();
    bc6W.bsB4F = function () {
        var Gf7Y = {0: 2, 1: 3};
        return bc6W.bsB4F.er8j(function (d6d) {
            var bh6b = d6d.args, eZ8R = bh6b[0] || 0;
            bh6b[0] = !!bh6b[1] ? 2 : Gf7Y[eZ8R] || eZ8R
        })
    }()
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, bc6W = c6e("nej.h"), eb8T = c6e("nej.g"), k6e = c6e("nej.u"),
        x6r = c6e("nej.j"), N6H = c6e("nej.ut.j"), nt1x = {}, KB8t = bn7g;
    x6r.jI0x = function (eU8M) {
        var Q6K = nt1x[eU8M];
        if (!Q6K) return this;
        Q6K.req.jI0x();
        return this
    };
    x6r.YK6E = function (dP8H) {
        KB8t = dP8H || bn7g;
        return this
    };
    x6r.bp7i = function () {
        var jd0x = (location.protocol + "//" + location.host).toLowerCase();
        var clY7R = function (V6P) {
            var kd0x = k6e.crI8A(V6P);
            return !!kd0x && kd0x != jd0x
        };
        var clS7L = function (ol1x) {
            return (ol1x || Z6T)[eb8T.yj4n] == eb8T.EM6G
        };
        var clI6C = function (e6c) {
            var Yq6k = clS7L(e6c.headers);
            if (!clY7R(e6c.url) && !Yq6k) return N6H.Zp7i.A6u(e6c);
            return bc6W.bsB4F(e6c.mode, Yq6k, e6c)
        };
        var CT6N = function (eU8M) {
            var Q6K = nt1x[eU8M];
            if (!Q6K) return;
            if (!!Q6K.req) Q6K.req.S6M();
            delete nt1x[eU8M]
        };
        var bLK9B = function (eU8M, t6n) {
            var Q6K = nt1x[eU8M];
            if (!Q6K) return;
            CT6N(eU8M);
            try {
                var d6d = {type: t6n, result: arguments[2]};
                KB8t(d6d);
                if (!d6d.stopped) (Q6K[t6n] || bn7g)(d6d.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yD4H = function (eU8M, j6d) {
            bLK9B(eU8M, "onload", j6d)
        };
        var zy5D = function (eU8M, bV7O) {
            bLK9B(eU8M, "onerror", bV7O)
        };
        return function (V6P, e6c) {
            e6c = e6c || {};
            var eU8M = k6e.ns1x(), Q6K = {onload: e6c.onload || bn7g, onerror: e6c.onerror || bn7g};
            nt1x[eU8M] = Q6K;
            e6c.onload = yD4H.g6a(null, eU8M);
            e6c.onerror = zy5D.g6a(null, eU8M);
            if (!!e6c.query) {
                var lp0x = V6P.indexOf("?") < 0 ? "?" : "&", bx7q = e6c.query;
                if (k6e.lg0x(bx7q)) bx7q = k6e.dh8Z(bx7q);
                if (!!bx7q) V6P += lp0x + bx7q
            }
            e6c.url = V6P;
            Q6K.req = clI6C(e6c);
            Q6K.req.bty4C(e6c.data);
            return eU8M
        }
    }();
    x6r.gC9t = function (eS8K, e6c) {
        var gM9D = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(gM9D, e6c);
        gM9D.data = eS8K;
        gM9D.method = "POST";
        gM9D.timeout = 0;
        gM9D.headers[eb8T.yj4n] = eb8T.EM6G;
        return x6r.bp7i(eS8K.action, gM9D)
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, eb8T = c6e("nej.g"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        N6H = c6e("nej.ut.j"), lO0x, jM0x = 6e4;
    if (!!N6H.Qf4j) return;
    N6H.Qf4j = NEJ.C();
    lO0x = N6H.Qf4j.O6I(H6B.cD7w);
    lO0x.cs7l = function () {
        this.cx7q();
        this.Qd4h = {onerror: this.clh6b.g6a(this), onloaded: this.cld6X.g6a(this)};
        if (!this.constructor.R6L) this.constructor.R6L = {loaded: {}}
    };
    lO0x.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.JG8y = e6c.version;
        this.bsp4t = e6c.timeout;
        this.Qd4h.version = this.JG8y;
        this.Qd4h.timeout = this.bsp4t
    };
    lO0x.bLw9n = function (J6D) {
        delete this.constructor.R6L[J6D]
    };
    lO0x.zx5C = function (J6D) {
        return this.constructor.R6L[J6D]
    };
    lO0x.bLv9m = function (J6D, j6d) {
        this.constructor.R6L[J6D] = j6d
    };
    lO0x.bbn7g = bn7g;
    lO0x.bLu9l = function (fP9G) {
        h6b.gG9x(fP9G)
    };
    lO0x.bsl4p = function (fP9G) {
        fP9G.src = this.lk0x;
        document.head.appendChild(fP9G)
    };
    lO0x.zv5A = function () {
        var Q6K = this.zx5C(this.lk0x);
        if (!Q6K) return;
        window.clearTimeout(Q6K.timer);
        this.bLu9l(Q6K.request);
        delete Q6K.bind;
        delete Q6K.timer;
        delete Q6K.request;
        this.bLw9n(this.lk0x);
        this.zx5C("loaded")[this.lk0x] = !0
    };
    lO0x.bbU8M = function (T6N) {
        var Q6K = this.zx5C(this.lk0x);
        if (!Q6K) return;
        var i6c = Q6K.bind;
        this.zv5A();
        if (!!i6c && i6c.length > 0) {
            var cv7o;
            while (i6c.length) {
                cv7o = i6c.shift();
                try {
                    cv7o.z6t(T6N, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cv7o.S6M()
            }
        }
    };
    lO0x.ew8o = function (bV7O) {
        this.bbU8M("onerror", bV7O)
    };
    lO0x.bLr9i = function () {
        this.bbU8M("onloaded")
    };
    lO0x.ckH6B = function (V6P) {
        this.constructor.A6u(this.Qd4h).JC8u(V6P)
    };
    lO0x.bLp9g = function (bV7O) {
        var Q6K = this.zx5C(this.wm4q);
        if (!Q6K) return;
        if (!!bV7O) Q6K.error++;
        Q6K.loaded++;
        if (Q6K.loaded < Q6K.total) return;
        this.bLw9n(this.wm4q);
        this.z6t(Q6K.error > 0 ? "onerror" : "onloaded")
    };
    lO0x.clh6b = function (bV7O) {
        this.bLp9g(!0)
    };
    lO0x.cld6X = function () {
        this.bLp9g()
    };
    lO0x.JC8u = function (V6P) {
        V6P = k6e.btM5R(V6P);
        if (!V6P) {
            this.z6t("onerror", {code: eb8T.blG1x, message: "请指定要载入的资源地址！"});
            return this
        }
        this.lk0x = V6P;
        if (!!this.JG8y) this.lk0x += (this.lk0x.indexOf("?") < 0 ? "?" : "&") + this.JG8y;
        if (this.zx5C("loaded")[this.lk0x]) {
            try {
                this.z6t("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S6M();
            return this
        }
        var Q6K = this.zx5C(this.lk0x), fP9G;
        if (!!Q6K) {
            Q6K.bind.unshift(this);
            Q6K.timer = window.clearTimeout(Q6K.timer)
        } else {
            fP9G = this.bbn7g();
            Q6K = {request: fP9G, bind: [this]};
            this.bLv9m(this.lk0x, Q6K);
            h6b.s6m(fP9G, "load", this.bLr9i.g6a(this));
            h6b.s6m(fP9G, "error", this.ew8o.g6a(this, {code: eb8T.bne1x, message: "无法加载指定资源文件[" + this.lk0x + "]！"}))
        }
        if (this.bsp4t != 0) Q6K.timer = window.setTimeout(this.ew8o.g6a(this, {
            code: eb8T.bwG5L,
            message: "指定资源文件[" + this.lk0x + "]载入超时！"
        }), this.bsp4t || jM0x);
        if (!!fP9G) this.bsl4p(fP9G);
        this.z6t("onloading");
        return this
    };
    lO0x.bLl9c = function (i6c) {
        if (!i6c || !i6c.length) {
            this.z6t("onerror", {code: eb8T.blG1x, message: "请指定要载入的资源队列！"});
            return this
        }
        this.wm4q = k6e.ns1x();
        var Q6K = {error: 0, loaded: 0, total: i6c.length};
        this.bLv9m(this.wm4q, Q6K);
        for (var i = 0, l = i6c.length; i < l; i++) {
            if (!i6c[i]) {
                Q6K.total--;
                continue
            }
            this.ckH6B(i6c[i])
        }
        this.z6t("onloading");
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), bc6W = c6e("nej.h"), N6H = c6e("nej.ut.j"), PQ4U;
    if (!!N6H.bsf4j) return;
    N6H.bsf4j = NEJ.C();
    PQ4U = N6H.bsf4j.O6I(N6H.Qf4j);
    PQ4U.bbn7g = function () {
        var ft8l = a5f.cY7R("iframe");
        ft8l.width = 0;
        ft8l.height = 0;
        ft8l.style.display = "none";
        return ft8l
    };
    PQ4U.bsl4p = function (fP9G) {
        fP9G.src = this.lk0x;
        document.body.appendChild(fP9G)
    };
    PQ4U.ew8o = function (bV7O) {
        var ft8l = (this.zx5C(this.lk0x) || Z6T).request;
        this.bbU8M("onerror", bV7O);
        bc6W.VR6L(ft8l)
    };
    PQ4U.bLr9i = function () {
        var mb0x = null, ft8l = (this.zx5C(this.lk0x) || Z6T).request;
        try {
            mb0x = ft8l.contentWindow.document.body
        } catch (ex) {
        }
        this.bbU8M("onloaded", mb0x);
        bc6W.VR6L(ft8l)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), N6H = c6e("nej.ut.j"), bse4i;
    if (!!N6H.TQ5V) return;
    N6H.TQ5V = NEJ.C();
    bse4i = N6H.TQ5V.O6I(N6H.Qf4j);
    bse4i.bbn7g = function () {
        return a5f.cY7R("link")
    };
    bse4i.bsl4p = function (fP9G) {
        fP9G.href = this.lk0x;
        document.head.appendChild(fP9G)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), N6H = c6e("nej.ut.j"), TS5X;
    if (!!N6H.TU5Z) return;
    N6H.TU5Z = NEJ.C();
    TS5X = N6H.TU5Z.O6I(N6H.Qf4j);
    TS5X.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.bLh9Y = e6c.async;
        this.bsd4h = e6c.charset;
        this.Qd4h.async = !1;
        this.Qd4h.charset = this.bsd4h
    };
    TS5X.bbn7g = function () {
        var fP9G = a5f.cY7R("script");
        if (this.bLh9Y != null) fP9G.async = !!this.bLh9Y;
        if (this.bsd4h != null) fP9G.charset = this.bsd4h;
        return fP9G
    };
    TS5X.bLu9l = function (fP9G) {
        a5f.cz7s(fP9G)
    }
})();
(function () {
    var c6e = NEJ.P, x6r = c6e("nej.j"), N6H = c6e("nej.ut.j");
    x6r.cks6m = function (V6P, e6c) {
        N6H.TU5Z.A6u(e6c).JC8u(V6P);
        return this
    };
    x6r.cke6Y = function (i6c, e6c) {
        N6H.TU5Z.A6u(e6c).bLl9c(i6c);
        return this
    };
    x6r.cyV0x = function (V6P, e6c) {
        N6H.TQ5V.A6u(e6c).JC8u(V6P);
        return this
    };
    x6r.ckb6V = function (i6c, e6c) {
        N6H.TQ5V.A6u(e6c).bLl9c(i6c);
        return this
    };
    x6r.bKS9J = function (V6P, e6c) {
        N6H.bsf4j.A6u(e6c).JC8u(V6P);
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), x6r = c6e("nej.j"),
        H6B = c6e("nej.ut"), Q6K = {}, sa2x = +(new Date) + "-";
    a5f.cO7H = function () {
        var cA7t = 0;
        var PI4M = function () {
            if (cA7t > 0) return;
            cA7t = 0;
            h6b.z6t(document, "templateready");
            h6b.gG9x(document, "templateready")
        };
        var Va5f = function (fO9F, e6c) {
            var dt8l = a5f.u6o(fO9F, "src");
            if (!dt8l) return;
            e6c = e6c || Z6T;
            var fK9B = e6c.root;
            if (!fK9B) {
                fK9B = fO9F.ownerDocument.location.href
            } else {
                fK9B = k6e.btM5R(fK9B)
            }
            dt8l = dt8l.split(",");
            k6e.bb6V(dt8l, function (C6w, r6l, i6c) {
                i6c[r6l] = k6e.btM5R(C6w, fK9B)
            });
            return dt8l
        };
        var cjU6O = function (fO9F, e6c) {
            if (!fO9F) return;
            var dt8l = Va5f(fO9F, e6c);
            if (!!dt8l) x6r.ckb6V(dt8l, {version: a5f.u6o(fO9F, "version")});
            a5f.bPA0x(fO9F.value)
        };
        var cjO6I = function (C6w) {
            cA7t--;
            a5f.bPx0x(C6w);
            PI4M()
        };
        var cjM6G = function (fO9F, e6c) {
            if (!fO9F) return;
            var dt8l = Va5f(fO9F, e6c), eG8y = fO9F.value;
            if (!!dt8l) {
                cA7t++;
                var e6c = {version: a5f.u6o(fO9F, "version"), onloaded: cjO6I.g6a(null, eG8y)};
                window.setTimeout(x6r.cke6Y.g6a(x6r, dt8l, e6c), 0);
                return
            }
            a5f.bPx0x(eG8y)
        };
        var cjK6E = function (mb0x) {
            cA7t--;
            a5f.cO7H(mb0x);
            PI4M()
        };
        var cjI6C = function (fO9F, e6c) {
            if (!fO9F) return;
            var dt8l = Va5f(fO9F, e6c)[0];
            if (!!dt8l) {
                cA7t++;
                var e6c = {version: a5f.u6o(fO9F, "version"), onloaded: cjK6E};
                window.setTimeout(x6r.bKS9J.g6a(x6r, dt8l, e6c), 0)
            }
        };
        var cjc6W = function (D6x, cJ7C) {
            cA7t--;
            a5f.JA8s(D6x, cJ7C || "");
            PI4M()
        };
        var cja6U = function (fO9F, e6c) {
            if (!fO9F || !fO9F.id) return;
            var D6x = fO9F.id, dt8l = Va5f(fO9F, e6c)[0];
            if (!!dt8l) {
                cA7t++;
                var V6P = dt8l + (dt8l.indexOf("?") < 0 ? "?" : "&") + (a5f.u6o(fO9F, "version") || ""),
                    e6c = {type: "text", method: "GET", onload: cjc6W.g6a(null, D6x)};
                window.setTimeout(x6r.bp7i.g6a(x6r, V6P, e6c), 0)
            }
        };
        var ciU6O = function (f6b, e6c) {
            var t6n = f6b.name.toLowerCase();
            switch (t6n) {
                case"jst":
                    a5f.et8l(f6b, !0);
                    return;
                case"txt":
                    a5f.JA8s(f6b.id, f6b.value || "");
                    return;
                case"ntp":
                    a5f.in9e(f6b.value || "", f6b.id);
                    return;
                case"js":
                    cjM6G(f6b, e6c);
                    return;
                case"css":
                    cjU6O(f6b, e6c);
                    return;
                case"html":
                    cjI6C(f6b, e6c);
                    return;
                case"res":
                    cja6U(f6b, e6c);
                    return
            }
        };
        H6B.fE8w.A6u({element: document, event: "templateready", oneventadd: PI4M});
        return function (G6A, e6c) {
            G6A = a5f.B6v(G6A);
            if (!!G6A) {
                var i6c = G6A.tagName == "TEXTAREA" ? [G6A] : G6A.getElementsByTagName("textarea");
                k6e.bb6V(i6c, function (f6b) {
                    ciU6O(f6b, e6c)
                });
                a5f.cz7s(G6A, !0)
            }
            PI4M();
            return this
        }
    }();
    a5f.JA8s = function (J6D, C6w) {
        Q6K[J6D] = C6w || "";
        return this
    };
    a5f.ih9Y = function (J6D) {
        return Q6K[J6D] || ""
    };
    a5f.in9e = function (G6A, J6D) {
        J6D = J6D || k6e.ns1x();
        G6A = a5f.B6v(G6A) || G6A;
        a5f.JA8s(sa2x + J6D, G6A);
        a5f.mK1x(G6A);
        return J6D
    };
    a5f.dr8j = function (J6D) {
        if (!J6D) return null;
        J6D = sa2x + J6D;
        var C6w = a5f.ih9Y(J6D);
        if (!C6w) return null;
        if (k6e.fw8o(C6w)) {
            C6w = a5f.no1x(C6w);
            a5f.JA8s(J6D, C6w)
        }
        return C6w.cloneNode(!0)
    };
    a5f.zn5s = function () {
        var KB8t = function (C6w, J6D) {
            return J6D == "offset" || J6D == "limit"
        };
        return function (i6c, p6j, e6c) {
            var bs7l = [];
            if (!i6c || !i6c.length || !p6j) return bs7l;
            e6c = e6c || Z6T;
            var du8m = i6c.length, jB0x = parseInt(e6c.offset) || 0,
                gs9j = Math.min(du8m, jB0x + (parseInt(e6c.limit) || du8m)),
                co7h = {total: i6c.length, range: [jB0x, gs9j]};
            NEJ.X(co7h, e6c, KB8t);
            for (var i = jB0x, cv7o; i < gs9j; i++) {
                co7h.index = i;
                co7h.data = i6c[i];
                cv7o = p6j.A6u(co7h);
                var D6x = cv7o.Ed6X();
                Q6K[D6x] = cv7o;
                cv7o.S6M = cv7o.S6M.er8j(function (D6x, cv7o) {
                    delete Q6K[D6x];
                    delete cv7o.S6M
                }.g6a(null, D6x, cv7o));
                bs7l.push(cv7o)
            }
            return bs7l
        }
    }();
    a5f.bKl9c = function (D6x) {
        return Q6K[D6x]
    };
    a5f.cyW0x = function (dT8L, e6c) {
        e6c = e6c || Z6T;
        a5f.cO7H(e6c.tid || "template-box");
        h6b.s6m(document, "templateready", function () {
            dT8L.A6u().z6t("onshow", e6c)
        })
    };
    c6e("dbg").dumpTC = function () {
        return Q6K
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        N6H = c6e("nej.ui"), b6f;
    if (!!N6H.ee8W) return;
    N6H.ee8W = NEJ.C();
    b6f = N6H.ee8W.O6I(H6B.cD7w);
    b6f.cs7l = function () {
        this.cx7q();
        a5f.bPM0x();
        this.ca7T();
        this.bS7L()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.ciB6v(e6c.clazz);
        this.bKe9V(e6c.parent)
    };
    b6f.bA7t = function () {
        this.bF7y();
        this.bKb9S();
        delete this.fQ9H;
        a5f.mK1x(this.m6g);
        a5f.v6p(this.m6g, this.brL4P);
        delete this.brL4P
    };
    b6f.ca7T = bn7g;
    b6f.bS7L = function () {
        if (!this.cd7W) this.WL6F();
        this.m6g = a5f.dr8j(this.cd7W);
        if (!this.m6g) this.m6g = a5f.cY7R("div", this.lw0x);
        a5f.w6q(this.m6g, this.lw0x)
    };
    b6f.WL6F = bn7g;
    b6f.ciB6v = function (dS8K) {
        this.brL4P = dS8K || "";
        a5f.w6q(this.m6g, this.brL4P)
    };
    b6f.cir6l = function () {
        if (!this.lw0x) return;
        a5f.w6q(this.fQ9H, this.lw0x + "-parent")
    };
    b6f.bKb9S = function () {
        if (!this.lw0x) return;
        a5f.v6p(this.fQ9H, this.lw0x + "-parent")
    };
    b6f.ln0x = function () {
        return this.m6g
    };
    b6f.bKe9V = function (bG7z) {
        if (!this.m6g) return this;
        this.bKb9S();
        if (k6e.gr9i(bG7z)) {
            this.fQ9H = bG7z(this.m6g)
        } else {
            this.fQ9H = a5f.B6v(bG7z);
            if (!!this.fQ9H) this.fQ9H.appendChild(this.m6g)
        }
        this.cir6l();
        return this
    };
    b6f.L6F = function () {
        if (!this.fQ9H || !this.m6g || this.m6g.parentNode == this.fQ9H) return this;
        this.fQ9H.appendChild(this.m6g);
        return this
    };
    b6f.br7k = function () {
        a5f.mK1x(this.m6g);
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), k6e = c6e("nej.u"), bc6W = c6e("nej.h"),
        N6H = c6e("nej.ui"), wr4v, bJW9N;
    if (!!N6H.Pz3x) return;
    N6H.Pz3x = NEJ.C();
    wr4v = N6H.Pz3x.O6I(N6H.ee8W);
    bJW9N = N6H.Pz3x.cl7e;
    wr4v.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.vF3x("oncontentready", e6c.oncontentready || this.cim6g.g6a(this));
        this.cil6f = !!e6c.nohack;
        this.cik6e = !!e6c.destroyable;
        this.Jw8o(e6c.content)
    };
    wr4v.bA7t = function () {
        this.z6t("onbeforerecycle");
        this.bF7y();
        this.XE6y();
        this.Jw8o("");
        a5f.eT8L(this.m6g, {top: "", left: ""})
    };
    wr4v.cim6g = bn7g;
    wr4v.Jv8n = bn7g;
    wr4v.XE6y = function () {
        a5f.mK1x(this.m6g);
        if (!!this.ng1x) {
            this.ng1x = bc6W.bqi4m(this.m6g);
            delete this.ng1x
        }
    };
    wr4v.Jw8o = function (bl6f) {
        if (!this.m6g || !this.zf5k || bl6f == null) return this;
        bl6f = bl6f || "";
        k6e.fw8o(bl6f) ? this.zf5k.innerHTML = bl6f : this.zf5k.appendChild(bl6f);
        this.z6t("oncontentready", this.zf5k);
        return this
    };
    wr4v.gj9a = function (be6Y) {
        var C6w = be6Y.top;
        if (C6w != null) {
            C6w += "px";
            a5f.Y6S(this.m6g, "top", C6w);
            a5f.Y6S(this.ng1x, "top", C6w)
        }
        var C6w = be6Y.left;
        if (C6w != null) {
            C6w += "px";
            a5f.Y6S(this.m6g, "left", C6w);
            a5f.Y6S(this.ng1x, "left", C6w)
        }
        return this
    };
    wr4v.L6F = function () {
        a5f.Y6S(this.m6g, "visibility", "hidden");
        bJW9N.L6F.apply(this, arguments);
        this.Jv8n();
        a5f.Y6S(this.m6g, "visibility", "");
        if (!this.cil6f) {
            this.ng1x = bc6W.ng1x(this.m6g)
        }
        return this
    };
    wr4v.br7k = function () {
        this.cik6e ? this.S6M() : this.XE6y();
        return this
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, k6e = c6e("nej.u"), a5f = c6e("nej.e"), N6H = c6e("nej.ui"), ze5j;
    if (!!N6H.XS6M) return;
    N6H.XS6M = NEJ.C();
    ze5j = N6H.XS6M.O6I(N6H.ee8W);
    ze5j.bj6d = function (e6c) {
        this.Pw3x();
        this.bk6e(this.cii6c(e6c));
        this.bW7P.onbeforerecycle = this.S6M.g6a(this);
        this.om1x = this.brK4O()
    };
    ze5j.bA7t = function () {
        this.z6t("onbeforerecycle");
        this.bF7y();
        delete this.bW7P;
        a5f.mK1x(this.m6g);
        var zd5i = this.om1x;
        if (!!zd5i) {
            delete this.om1x;
            zd5i.S6M()
        }
    };
    ze5j.brK4O = bn7g;
    ze5j.cii6c = function (e6c) {
        var o6i = {};
        k6e.ey8q(e6c, function (p6j, J6D) {
            this.bW7P.hasOwnProperty(J6D) ? this.bW7P[J6D] = p6j : o6i[J6D] = p6j
        }, this);
        return o6i
    };
    ze5j.Pw3x = function () {
        this.bW7P = {clazz: "", parent: null, content: this.m6g, destroyable: !1, oncontentready: null, nohack: !1}
    };
    ze5j.L6F = function () {
        if (!!this.om1x) this.om1x.L6F();
        this.z6t("onaftershow");
        return this
    };
    ze5j.br7k = function () {
        if (!!this.om1x) this.om1x.br7k();
        return this
    }
})();
(function () {
    var c6e = NEJ.P, eb8T = c6e("nej.g"), bc6W = c6e("nej.h"), a5f = c6e("nej.e"), k6e = c6e("nej.u"),
        h6b = c6e("nej.v"), N6H = c6e("nej.ui"), Pu3x, bJS9J;
    if (!!N6H.Ju8m) return;
    var io9f = a5f.sp2x(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + eb8T.bnm1x + ");}");
    N6H.Ju8m = NEJ.C();
    Pu3x = N6H.Ju8m.O6I(N6H.ee8W);
    bJS9J = N6H.Ju8m.cl7e;
    Pu3x.bj6d = function (e6c) {
        this.bk6e(e6c);
        var bl6f = e6c.content || "&nbsp;";
        k6e.fw8o(bl6f) ? this.m6g.innerHTML = bl6f : this.m6g.appendChild(bl6f)
    };
    Pu3x.bA7t = function () {
        this.bF7y();
        this.m6g.innerHTML = "&nbsp;"
    };
    Pu3x.ca7T = function () {
        this.lw0x = io9f
    };
    Pu3x.L6F = function () {
        bc6W.bqf4j(this.m6g);
        bJS9J.L6F.apply(this, arguments);
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), N6H = c6e("nej.ut"), uU3x;
    if (!!N6H.tE3x) return;
    N6H.tE3x = NEJ.C();
    uU3x = N6H.tE3x.O6I(N6H.cD7w);
    uU3x.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.chT6N = !!e6c.overflow;
        this.m6g = a5f.B6v(e6c.body);
        this.yY5d = a5f.B6v(e6c.view) || a5f.bQm0x(this.m6g);
        this.bJL9C = a5f.B6v(e6c.mbar) || this.m6g;
        this.Zk7d = parseInt(e6c.direction) || 0;
        if (!!e6c.isRelative) {
            this.m6g.style.position = "relative";
            this.brG4K = true;
            this.brF4J()
        }
        this.bT7M([[document, "mouseup", this.brE4I.g6a(this)], [document, "mousemove", this.brC4G.g6a(this)], [this.bJL9C, "mousedown", this.Pq3x.g6a(this)]])
    };
    uU3x.brF4J = function () {
        if (!!this.brG4K) {
            this.Jp8h = a5f.hL9C(this.m6g, this.yY5d);
            this.Jp8h.x -= parseInt(a5f.cV7O(this.m6g, "left")) || 0;
            this.Jp8h.y -= parseInt(a5f.cV7O(this.m6g, "top")) || 0
        }
    };
    uU3x.bA7t = function () {
        this.bF7y();
        delete this.m6g;
        delete this.bJL9C;
        delete this.yY5d
    };
    uU3x.brz4D = function () {
        return {
            x: Math.max(this.yY5d.clientWidth, this.yY5d.scrollWidth) - this.m6g.offsetWidth,
            y: Math.max(this.yY5d.clientHeight, this.yY5d.scrollHeight) - this.m6g.offsetHeight
        }
    };
    uU3x.Pq3x = function (d6d) {
        h6b.bf6Z(d6d);
        if (!!this.hp9g) return;
        this.hp9g = {x: h6b.iW9N(d6d), y: h6b.lJ0x(d6d)};
        this.bJx9o = this.brz4D();
        this.z6t("ondragstart", d6d)
    };
    uU3x.brC4G = function (d6d) {
        if (!this.hp9g) return;
        var be6Y = {x: h6b.iW9N(d6d), y: h6b.lJ0x(d6d)};
        var oE1x = be6Y.x - this.hp9g.x, pe1x = be6Y.y - this.hp9g.y, C6w = {
            top: (parseInt(a5f.cV7O(this.m6g, "top")) || 0) + pe1x,
            left: (parseInt(a5f.cV7O(this.m6g, "left")) || 0) + oE1x
        };
        if (this.brG4K) {
            this.brF4J();
            C6w.top = C6w.top + this.Jp8h.y;
            C6w.left = C6w.left + this.Jp8h.x
        }
        this.hp9g = be6Y;
        this.gj9a(C6w)
    };
    uU3x.brE4I = function (d6d) {
        if (!this.hp9g) return;
        delete this.bJx9o;
        delete this.hp9g;
        this.z6t("ondragend", this.brw4A())
    };
    uU3x.gj9a = function (d6d) {
        if (!this.chT6N) {
            var bJp9g = this.bJx9o || this.brz4D();
            d6d.top = Math.min(bJp9g.y, Math.max(0, d6d.top));
            d6d.left = Math.min(bJp9g.x, Math.max(0, d6d.left))
        }
        var cb7U = this.m6g.style;
        if (this.brG4K) {
            this.brF4J();
            d6d.top = d6d.top - this.Jp8h.y;
            d6d.left = d6d.left - this.Jp8h.x
        }
        if (this.Zk7d == 0 || this.Zk7d == 2) cb7U.top = d6d.top + "px";
        if (this.Zk7d == 0 || this.Zk7d == 1) cb7U.left = d6d.left + "px";
        this.z6t("onchange", d6d);
        return this
    };
    uU3x.brw4A = function () {
        return {left: parseInt(a5f.cV7O(this.m6g, "left")) || 0, top: parseInt(a5f.cV7O(this.m6g, "top")) || 0}
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = NEJ.P("nej.e"), h6b = NEJ.P("nej.v"), k6e = NEJ.P("nej.u"),
        H6B = NEJ.P("nej.ut"), N6H = NEJ.P("nej.ui"), io9f, gt9k, b6f, K6E;
    if (!!N6H.baI7B) return;
    N6H.baI7B = NEJ.C();
    b6f = N6H.baI7B.O6I(N6H.Pz3x);
    K6E = N6H.baI7B.cl7e;
    b6f.cs7l = function () {
        this.rs2x = {};
        this.kg0x = {onchange: this.brC4G.g6a(this)};
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.cgZ5e(e6c.mask);
        this.cgR5W(e6c.align);
        this.yW5b(e6c.title);
        if (!e6c.draggable) return;
        this.ip9g = H6B.tE3x.A6u(this.kg0x)
    };
    b6f.bA7t = function () {
        this.bF7y();
        delete this.qw2x;
        delete this.Pj3x;
        if (!!this.yZ5e) {
            this.yZ5e.S6M();
            delete this.yZ5e
        }
        if (!!this.ip9g) {
            this.ip9g.S6M();
            delete this.ip9g
        }
    };
    b6f.ca7T = function () {
        this.lw0x = io9f;
        this.cd7W = gt9k
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.db8T(this.m6g);
        this.zf5k = i6c[1];
        this.kg0x.mbar = i6c[0];
        this.kg0x.body = this.m6g;
        h6b.s6m(i6c[2], "mousedown", this.cgN5S.g6a(this));
        h6b.s6m(this.kg0x.mbar, "mousedown", this.Pq3x.g6a(this));
        this.bJh8Z = a5f.db8T(this.kg0x.mbar)[0]
    };
    b6f.cgN5S = function (d6d) {
        h6b.bf6Z(d6d);
        this.z6t("onclose", d6d);
        if (!d6d.stopped) {
            this.br7k()
        }
    };
    b6f.Pq3x = function (d6d) {
        h6b.z6t(document, "click")
    };
    b6f.brC4G = function (d6d) {
        if (!this.ng1x) return;
        a5f.eT8L(this.ng1x, {top: d6d.top + "px", left: d6d.left + "px"})
    };
    b6f.Jv8n = function () {
        var eF8x = [function () {
            return 0
        }, function (nr1x, CX6R, be6Y, J6D) {
            if (J6D == "top" && window.top != window.self) {
                var bbS8K = 0, Da6U = 0;
                if (top.g_topBarHeight) bbS8K = top.g_topBarHeight;
                if (top.g_bottomBarShow && top.g_bottomBarHeight) Da6U = top.g_bottomBarHeight;
                if (nr1x.top <= bbS8K) {
                    var brt4x = Math.max(0, (CX6R.height - (bbS8K - nr1x.top) - Da6U - be6Y.height) / 2);
                    return brt4x + bbS8K
                } else {
                    var brt4x = Math.max(0, (CX6R.height - Da6U - be6Y.height) / 2);
                    return brt4x + nr1x.top
                }
            }
            return Math.max(0, nr1x[J6D] + (CX6R[hS9J[J6D]] - be6Y[hS9J[J6D]]) / 2)
        }, function (nr1x, CX6R, be6Y, J6D) {
            return nr1x[J6D] + (CX6R[hS9J[J6D]] - be6Y[hS9J[J6D]])
        }], cgF5K = ["left", "top"], hS9J = {left: "width", top: "height"};
        return function () {
            var C6w = {}, cb7U = this.m6g.style, jj0x = a5f.oQ1x(), nr1x = {left: jj0x.scrollLeft, top: jj0x.scrollTop},
                CX6R = {width: jj0x.clientWidth, height: jj0x.clientHeight},
                be6Y = {width: this.m6g.offsetWidth, height: this.m6g.offsetHeight},
                dl8d = {left: jj0x.clientWidth - this.m6g.offsetWidth, top: jj0x.clientHeight - this.m6g.offsetHeight};
            k6e.bb6V(cgF5K, function (J6D, r6l) {
                var dp8h = eF8x[this.qw2x[r6l]];
                if (!dp8h) return;
                C6w[J6D] = dp8h(nr1x, CX6R, be6Y, J6D)
            }, this);
            this.gj9a(C6w)
        }
    }();
    b6f.cgw5B = function () {
        if (!this.yZ5e) {
            if (!this.Pj3x) return;
            this.rs2x.parent = this.fQ9H;
            this.yZ5e = this.Pj3x.A6u(this.rs2x)
        }
        this.yZ5e.L6F()
    };
    b6f.XE6y = function () {
        if (!!this.yZ5e) this.yZ5e.br7k();
        K6E.XE6y.apply(this, arguments)
    };
    b6f.cgZ5e = function (kI0x) {
        if (!!kI0x) {
            if (kI0x instanceof N6H.Ju8m) {
                this.yZ5e = kI0x;
                return
            }
            if (k6e.gr9i(kI0x)) {
                this.Pj3x = kI0x;
                return
            }
            this.Pj3x = N6H.Ju8m;
            if (k6e.fw8o(kI0x)) this.rs2x.clazz = kI0x;
            return
        }
        this.Pj3x = null
    };
    b6f.yW5b = function (ec8U, dL8D) {
        if (!!this.bJh8Z) {
            var bbY8Q = !dL8D ? "innerText" : "innerHTML";
            this.bJh8Z[bbY8Q] = ec8U || "标题"
        }
        return this
    };
    b6f.cgR5W = function () {
        var cZ7S = /\s+/, cgv5A = {left: 0, center: 1, right: 2, auto: 3},
            cgu5z = {top: 0, middle: 1, bottom: 2, auto: 3};
        return function (nl1x) {
            this.qw2x = (nl1x || "").split(cZ7S);
            var cf7Y = cgv5A[this.qw2x[0]];
            if (cf7Y == null) cf7Y = 1;
            this.qw2x[0] = cf7Y;
            var cf7Y = cgu5z[this.qw2x[1]];
            if (cf7Y == null) cf7Y = 1;
            this.qw2x[1] = cf7Y;
            return this
        }
    }();
    b6f.L6F = function () {
        K6E.L6F.apply(this, arguments);
        this.cgw5B();
        return this
    };
    io9f = a5f.sp2x(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gt9k = a5f.in9e('<div class="' + io9f + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var c6e = NEJ.P, k6e = c6e("nej.u"), N6H = c6e("nej.ui"), brr4v;
    if (!!N6H.bcC8u) return;
    N6H.bcC8u = NEJ.C();
    brr4v = N6H.bcC8u.O6I(N6H.XS6M);
    brr4v.brK4O = function () {
        return N6H.baI7B.A6u(this.bW7P)
    };
    brr4v.Pw3x = function () {
        N6H.bcC8u.cl7e.Pw3x.apply(this, arguments);
        this.bW7P.mask = null;
        this.bW7P.title = "标题";
        this.bW7P.align = "";
        this.bW7P.draggable = !1;
        this.bW7P.onclose = null
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), ba6U = c6e("nej.ui"), n6h = c6e("nm.l"), b6f, K6E;
    n6h.ei8a = NEJ.C();
    b6f = n6h.ei8a.O6I(ba6U.bcC8u);
    b6f.bj6d = function (e6c) {
        e6c.clazz = "m-layer z-show " + (e6c.clazz || "");
        e6c.nohack = true;
        e6c.draggable = true;
        this.bk6e(e6c)
    };
    b6f.dG8y = function (f6b, bE7x) {
        if (!f6b) return;
        a5f.Y6S(f6b, "display", !bE7x ? "none" : "");
        f6b.lastChild.innerText = bE7x || ""
    };
    b6f.dO8G = function (gl9c, cQ7J, Ph3x, Pg3x) {
        var dT8L = "js-lock";
        if (cQ7J === undefined) return a5f.by7r(gl9c, dT8L);
        !cQ7J ? a5f.v6p(gl9c, dT8L) : a5f.w6q(gl9c, dT8L);
        gl9c.firstChild.innerText = !cQ7J ? Ph3x : Pg3x
    };
    n6h.ei8a.L6F = function (e6c) {
        e6c = e6c || {};
        if (e6c.mask === undefined) e6c.mask = "m-mask";
        if (e6c.parent === undefined) e6c.parent = document.body;
        if (e6c.draggable === undefined) e6c.draggable = true;
        !!this.eX8P && this.eX8P.S6M();
        this.eX8P = this.A6u(e6c);
        this.eX8P.L6F(e6c);
        return this.eX8P
    };
    n6h.ei8a.br7k = function () {
        !!this.eX8P && this.eX8P.S6M()
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), q6k = c6e("nm.d"),
        l6f = c6e("nm.x"), n6h = c6e("nm.l"), b6f, K6E;
    n6h.brp4t = NEJ.C();
    b6f = n6h.brp4t.O6I(n6h.ei8a);
    K6E = n6h.brp4t.cl7e;
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        if (e6c.bubble === undefined) e6c.bubble = true;
        this.Pf3x = e6c.bubble;
        this.qh2x = e6c.message || ""
    };
    b6f.ca7T = function () {
        this.cd7W = a5f.in9e('<div class="lyct f-cb f-tc"></div>')
    };
    b6f.bS7L = function () {
        this.cc7V();
        h6b.s6m(this.m6g, "click", this.cG7z.g6a(this))
    };
    b6f.cG7z = function (d6d) {
        var f6b = h6b.U6O(d6d, "d:action");
        if (!f6b) return;
        if (f6b.href) h6b.cm7f(d6d);
        if (a5f.u6o(f6b, "action") == "close") this.br7k();
        if (this.Pf3x === !1) h6b.si2x(d6d);
        this.z6t("onaction", a5f.u6o(f6b, "action"))
    };
    b6f.L6F = function () {
        K6E.L6F.call(this);
        this.m6g.innerHTML = this.qh2x
    };
    var gq9h = a5f.et8l('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="javascript:;" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l6f.mM1x = function () {
        var eE8w;
        var cv7o;
        var brn4r = function (fx8p, W6Q) {
            if (k6e.gr9i(fx8p, "function") && fx8p(W6Q) != -1) cv7o.S6M()
        };
        var zj5o = function () {
            !!cv7o && cv7o.br7k()
        };
        return function (e6c) {
            clearTimeout(eE8w);
            e6c = e6c || {};
            e6c.title = e6c.title || "提示";
            e6c.clazz = e6c.clazz || "";
            e6c.parent = e6c.parent || document.body;
            e6c.buttons = e6c.buttons || [];
            e6c.message = a5f.bX7Q(gq9h, e6c);
            e6c.onaction = brn4r.g6a(null, e6c.action);
            if (e6c.mask === undefined) e6c.mask = true;
            if (e6c.draggable === undefined) e6c.draggable = true;
            !!cv7o && cv7o.S6M();
            cv7o = n6h.brp4t.A6u(e6c);
            cv7o.L6F();
            if (e6c.autoclose) eE8w = setTimeout(zj5o.g6a(null), 2e3);
            return cv7o
        }
    }();
    l6f.fh8Z = function (e6c) {
        e6c = e6c || {};
        e6c.clazz = e6c.clazz || "m-layer-w1";
        e6c.buttons = [{klass: "u-btn2-2", action: "close", text: e6c.btntxt || "确定"}];
        var cv7o = l6f.mM1x(e6c);
        return cv7o
    };
    l6f.gD9u = function (e6c) {
        e6c = e6c || {};
        e6c.clazz = e6c.clazz || "m-layer-w2";
        e6c.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: e6c.btnok || "确定",
            style: e6c.okstyle || ""
        }, {klass: "u-btn2-1", action: "close", text: e6c.btncc || "取消", style: e6c.ccstyle || ""}];
        var cv7o = l6f.mM1x(e6c);
        return cv7o
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u");
    a5f.cgb5g = function () {
        var go9f = /[\r\n]/gi, Q6K = {};
        var cga5f = function (cF7y) {
            return (cF7y || "").replace(go9f, "aa").length
        };
        var bIU8M = function (D6x) {
            var bd6X = Q6K[D6x], bIQ8I = a5f.B6v(D6x), pU1x = a5f.B6v(D6x + "-counter");
            if (!bIQ8I || !bd6X) return;
            var d6d = {input: bIQ8I.value};
            d6d.length = bd6X.onlength(d6d.input);
            d6d.delta = bd6X.max - d6d.length;
            bd6X.onchange(d6d);
            pU1x.innerHTML = d6d.value || "剩余" + d6d.delta + "个字"
        };
        return function (G6A, e6c) {
            var D6x = a5f.kZ0x(G6A);
            if (!D6x || !!Q6K[D6x]) return;
            var bd6X = NEJ.X({}, e6c);
            bd6X.onchange = bd6X.onchange || bn7g;
            bd6X.onlength = cga5f;
            if (!bd6X.max) {
                var bIP8H = parseInt(a5f.ga9R(D6x, "maxlength")), bIO8G = parseInt(a5f.u6o(D6x, "maxLength"));
                bd6X.max = bIP8H || bIO8G || 100;
                if (!bIP8H && !!bIO8G) bd6X.onlength = k6e.fp8h
            }
            Q6K[D6x] = bd6X;
            h6b.s6m(D6x, "input", bIU8M.g6a(null, D6x));
            var f6b = a5f.Kn8f(D6x, {nid: bd6X.nid || "js-counter", clazz: bd6X.clazz});
            bd6X.xid = D6x + "-counter";
            f6b.id = bd6X.xid;
            bIU8M(D6x)
        }
    }()
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), bc6W = c6e("nej.h");
    bc6W.bri4m = function (G6A, dS8K) {
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, N6H = c6e("nej.p"), a5f = c6e("nej.e"), h6b = c6e("nej.v"), bc6W = c6e("nej.h");
    if (N6H.mF1x.trident) return;
    bc6W.bri4m = function () {
        var Q6K = {};
        var KH8z = function (d6d) {
            var dc8U = h6b.U6O(d6d);
            if (!!dc8U.value) return;
            a5f.Y6S(a5f.Kn8f(dc8U), "display", "none")
        };
        var DY6S = function (d6d) {
            var dc8U = h6b.U6O(d6d);
            if (!!dc8U.value) return;
            a5f.Y6S(a5f.Kn8f(dc8U), "display", "")
        };
        var cfK5P = function (dc8U, dS8K) {
            var D6x = a5f.kZ0x(dc8U), iw9n = a5f.Kn8f(dc8U, {tag: "label", clazz: dS8K});
            iw9n.htmlFor = D6x;
            var cJ7C = a5f.ga9R(dc8U, "placeholder") || "";
            iw9n.innerText = cJ7C == "null" ? "" : cJ7C;
            var ch7a = dc8U.offsetHeight + "px";
            a5f.eT8L(iw9n, {left: 0, display: !dc8U.value ? "" : "none"})
        };
        return bc6W.bri4m.er8j(function (d6d) {
            d6d.stopped = !0;
            var bh6b = d6d.args, dc8U = a5f.B6v(bh6b[0]);
            if (!!Q6K[dc8U.id]) return;
            cfK5P(dc8U, bh6b[1]);
            Q6K[dc8U.id] = !0;
            h6b.s6m(dc8U, "blur", DY6S.g6a(null));
            h6b.s6m(dc8U, "focus", KH8z.g6a(null))
        })
    }()
})();
(function () {
    var c6e = NEJ.P, bc6W = c6e("nej.h"), a5f = c6e("nej.e"), cP7I = c6e("nej.x");
    a5f.fV9M = cP7I.fV9M = function (G6A, dS8K) {
        bc6W.bri4m(G6A, a5f.u6o(G6A, "holder") || dS8K || "js-placeholder");
        return this
    };
    cP7I.isChange = !0
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        N6H = c6e("nej.ut"), hu9l;
    if (!!N6H.Pc3x) return;
    N6H.Pc3x = NEJ.C();
    hu9l = N6H.Pc3x.O6I(N6H.cD7w);
    hu9l.cs7l = function () {
        this.cx7q();
        this.Ff7Y = {tp: {nid: "js-nej-tp"}, ok: {nid: "js-nej-ok"}, er: {nid: "js-nej-er"}}
    };
    hu9l.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.fY9P = document.forms[e6c.form] || a5f.B6v(e6c.form);
        this.bT7M([[this.fY9P, "keypress", this.cfH5M.g6a(this)]]);
        this.qh2x = e6c.message || {};
        this.qh2x.pass = this.qh2x.pass || "&nbsp;";
        var eZ8R = this.pl1x(this.fY9P, "focusMode", 1);
        if (!isNaN(eZ8R)) {
            this.bIH8z = {mode: eZ8R, clazz: e6c.focus}
        }
        this.zt5y = e6c.holder;
        this.Ff7Y.tp.clazz = "js-mhd " + (e6c.tip || "js-tip");
        this.Ff7Y.ok.clazz = "js-mhd " + (e6c.pass || "js-pass");
        this.Ff7Y.er.clazz = "js-mhd " + (e6c.error || "js-error");
        this.bIF8x = e6c.invalid || "js-invalid";
        this.cfD5I(e6c);
        this.ge9V();
        if (!!this.zu5z) this.zu5z.focus()
    };
    hu9l.bA7t = function () {
        this.bF7y();
        delete this.qh2x;
        delete this.zu5z;
        delete this.FI7B;
        delete this.fY9P;
        delete this.bIE8w;
        delete this.OX3x
    };
    hu9l.pl1x = function (f6b, wl4p, t6n) {
        var C6w = a5f.u6o(f6b, wl4p);
        switch (t6n) {
            case 1:
                return parseInt(C6w);
            case 2:
                return (C6w || "").toLowerCase() == "true";
            case 3:
                return this.brg4k(C6w)
        }
        return C6w
    };
    hu9l.zB5G = function (C6w, t6n) {
        if (t6n == "date") return this.brg4k(C6w);
        return parseInt(C6w)
    };
    hu9l.WU6O = function () {
        var jD0x = /^button|submit|reset|image|hidden|file$/i;
        return function (f6b) {
            f6b = this.B6v(f6b) || f6b;
            var t6n = f6b.type;
            return !!f6b.name && !jD0x.test(f6b.type || "")
        }
    }();
    hu9l.cfr5w = function () {
        var jD0x = /^hidden$/i;
        return function (f6b) {
            if (this.WU6O(f6b)) return !0;
            f6b = this.B6v(f6b) || f6b;
            var t6n = f6b.type || "";
            return jD0x.test(t6n)
        }
    }();
    hu9l.brg4k = function () {
        var cZ7S = /[-\/]/;
        var cfo5t = function (C6w) {
            if (!C6w) return "";
            C6w = C6w.split(cZ7S);
            C6w.push(C6w.shift());
            return C6w.join("/")
        };
        return function (C6w) {
            if ((C6w || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(cfo5t(C6w))
        }
    }();
    hu9l.cfH5M = function (d6d) {
        if (d6d.keyCode != 13) return;
        this.z6t("onenter", d6d)
    };
    hu9l.cfn5s = function (D6x, T6N) {
        var rD2x = this.OX3x[T6N], C6w = this.pl1x(D6x, T6N);
        if (!C6w || !rD2x) return;
        this.Xh6b(D6x, rD2x);
        this.brb4f(D6x, T6N, C6w)
    };
    hu9l.cfh5m = function (D6x, T6N) {
        try {
            var bIr8j = this.pl1x(D6x, T6N);
            if (!bIr8j) return;
            var C6w = new RegExp(bIr8j);
            this.brb4f(D6x, T6N, C6w);
            this.Xh6b(D6x, this.OX3x[T6N])
        } catch (e) {
        }
    };
    hu9l.cff5k = function (D6x, T6N) {
        var rD2x = this.OX3x[T6N];
        if (!!rD2x && this.pl1x(D6x, T6N, 2)) this.Xh6b(D6x, rD2x)
    };
    hu9l.bra4e = function (D6x, T6N, C6w) {
        C6w = parseInt(C6w);
        if (isNaN(C6w)) return;
        this.brb4f(D6x, T6N, C6w);
        this.Xh6b(D6x, this.OX3x[T6N])
    };
    hu9l.bIl8d = function (D6x, T6N) {
        this.bra4e(D6x, T6N, this.pl1x(D6x, T6N))
    };
    hu9l.bIk8c = function (D6x, T6N) {
        this.bra4e(D6x, T6N, a5f.ga9R(D6x, T6N))
    };
    hu9l.bIj8b = function (D6x, T6N, t6n) {
        var C6w = this.zB5G(this.pl1x(D6x, T6N), this.pl1x(D6x, "type"));
        this.bra4e(D6x, T6N, C6w)
    };
    hu9l.ceO5T = function () {
        var go9f = /^input|textarea$/i;
        var KH8z = function (d6d) {
            this.pp1x(h6b.U6O(d6d))
        };
        var DY6S = function (d6d) {
            var f6b = h6b.U6O(d6d);
            if (!this.pl1x(f6b, "ignore", 2)) {
                this.bIh8Z(f6b)
            }
        };
        return function (f6b) {
            if (this.pl1x(f6b, "autoFocus", 2)) this.zu5z = f6b;
            var qb2x = a5f.ga9R(f6b, "placeholder");
            if (!!qb2x && qb2x != "null") a5f.fV9M(f6b, this.zt5y);
            if (!!this.bIH8z && go9f.test(f6b.tagName)) a5f.mc0x(f6b, this.bIH8z);
            var D6x = a5f.kZ0x(f6b);
            this.cff5k(D6x, "required");
            this.cfn5s(D6x, "type");
            this.cfh5m(D6x, "pattern");
            this.bIk8c(D6x, "maxlength");
            this.bIk8c(D6x, "minlength");
            this.bIl8d(D6x, "maxLength");
            this.bIl8d(D6x, "minLength");
            this.bIj8b(D6x, "min");
            this.bIj8b(D6x, "max");
            var T6N = f6b.name;
            this.qh2x[T6N + "-tip"] = this.pl1x(f6b, "tip");
            this.qh2x[T6N + "-error"] = this.pl1x(f6b, "message");
            this.pp1x(f6b);
            var bu7n = this.FI7B[D6x], j6d = (bu7n || Z6T).data || Z6T, OM3x = this.pl1x(f6b, "counter", 2);
            if (OM3x && (j6d.maxlength || j6d.maxLength)) {
                a5f.cgb5g(D6x, {nid: this.Ff7Y.tp.nid, clazz: "js-counter"})
            }
            if (!!bu7n && go9f.test(f6b.tagName)) {
                this.bT7M([[f6b, "focus", KH8z.g6a(this)], [f6b, "blur", DY6S.g6a(this)]])
            } else if (this.pl1x(f6b, "focus", 2)) {
                this.bT7M([[f6b, "focus", KH8z.g6a(this)]])
            }
        }
    }();
    hu9l.cfD5I = function () {
        var Ch6b = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.brg4k(v))
            }
        };
        var ceJ5O = {
            required: function (f6b) {
                var t6n = f6b.type, ceI5N = !f6b.value, ceH5M = (t6n == "checkbox" || t6n == "radio") && !f6b.checked;
                if (ceH5M || ceI5N) return -1
            }, type: function (f6b, e6c) {
                var cZ7S = this.bIE8w[e6c.type], eG8y = f6b.value.trim(), ceC5H = !!cZ7S.test && !cZ7S.test(eG8y),
                    ceB5G = k6e.gr9i(cZ7S) && !cZ7S.call(this, eG8y);
                if (ceC5H || ceB5G) return -2
            }, pattern: function (f6b, e6c) {
                if (!e6c.pattern.test(f6b.value)) return -3
            }, maxlength: function (f6b, e6c) {
                if (f6b.value.length > e6c.maxlength) return -4
            }, minlength: function (f6b, e6c) {
                if (f6b.value.length < e6c.minlength) return -5
            }, maxLength: function (f6b, e6c) {
                if (k6e.fp8h(f6b.value) > e6c.maxLength) return -4
            }, minLength: function (f6b, e6c) {
                if (k6e.fp8h(f6b.value) < e6c.minLength) return -5
            }, min: function (f6b, e6c) {
                var gB9s = this.zB5G(f6b.value, e6c.type);
                if (isNaN(gB9s) || gB9s < e6c.min) return -6
            }, max: function (f6b, e6c) {
                var gB9s = this.zB5G(f6b.value, e6c.type);
                if (isNaN(gB9s) || gB9s > e6c.max) return -7
            }
        };
        return function (e6c) {
            this.bIE8w = NEJ.X(NEJ.X({}, Ch6b), e6c.type);
            this.OX3x = NEJ.X(NEJ.X({}, ceJ5O), e6c.attr)
        }
    }();
    hu9l.Xh6b = function (D6x, ys4w) {
        if (!k6e.gr9i(ys4w)) return;
        var bu7n = this.FI7B[D6x];
        if (!bu7n || !bu7n.func) {
            bu7n = bu7n || {};
            bu7n.func = [];
            this.FI7B[D6x] = bu7n
        }
        bu7n.func.push(ys4w)
    };
    hu9l.brb4f = function (D6x, T6N, C6w) {
        if (!T6N) return;
        var bu7n = this.FI7B[D6x];
        if (!bu7n || !bu7n.data) {
            bu7n = bu7n || {};
            bu7n.data = {};
            this.FI7B[D6x] = bu7n
        }
        bu7n.data[T6N] = C6w
    };
    hu9l.bIh8Z = function (f6b) {
        f6b = this.B6v(f6b) || f6b;
        var bu7n = this.FI7B[a5f.kZ0x(f6b)];
        if (!f6b || !bu7n || !this.WU6O(f6b)) return !0;
        var o6i;
        k6e.ey8q(bu7n.func, function (eF8x) {
            o6i = eF8x.call(this, f6b, bu7n.data);
            return o6i != null
        }, this);
        if (o6i == null) {
            var d6d = {target: f6b, form: this.fY9P};
            this.z6t("oncheck", d6d);
            o6i = d6d.value
        }
        var d6d = {target: f6b, form: this.fY9P};
        if (o6i != null) {
            d6d.code = o6i;
            this.z6t("oninvalid", d6d);
            if (!d6d.stopped) {
                this.cez5E(f6b, d6d.value || this.qh2x[f6b.name + o6i])
            }
        } else {
            this.z6t("onvalid", d6d);
            if (!d6d.stopped) this.cey5D(f6b, d6d.value)
        }
        return o6i == null
    };
    hu9l.yq4u = function () {
        var cex5C = function (bcy8q, bcI8A) {
            return bcy8q == bcI8A ? "block" : "none"
        };
        var cet5y = function (f6b, t6n, bE7x) {
            var qb2x = bHV8N.call(this, f6b, t6n);
            if (!qb2x && !!bE7x) qb2x = a5f.Kn8f(f6b, this.Ff7Y[t6n]);
            return qb2x
        };
        var bHV8N = function (f6b, t6n) {
            var qb2x;
            if (t6n == "tp") qb2x = a5f.B6v(f6b.name + "-tip");
            if (!qb2x) qb2x = a5f.F6z(f6b.parentNode, this.Ff7Y[t6n].nid)[0];
            return qb2x
        };
        return function (f6b, bE7x, t6n) {
            f6b = this.B6v(f6b) || f6b;
            if (!f6b) return;
            t6n == "er" ? a5f.w6q(f6b, this.bIF8x) : a5f.v6p(f6b, this.bIF8x);
            var qb2x = cet5y.call(this, f6b, t6n, bE7x);
            if (!!qb2x && !!bE7x) qb2x.innerHTML = bE7x;
            k6e.ey8q(this.Ff7Y, function (C6w, J6D) {
                a5f.Y6S(bHV8N.call(this, f6b, J6D), "display", cex5C(t6n, J6D))
            }, this)
        }
    }();
    hu9l.pp1x = function (f6b, bE7x) {
        this.yq4u(f6b, bE7x || this.qh2x[f6b.name + "-tip"], "tp");
        return this
    };
    hu9l.cey5D = function (f6b, bE7x) {
        this.yq4u(f6b, bE7x || this.qh2x[f6b.name + "-pass"] || this.qh2x.pass, "ok");
        return this
    };
    hu9l.cez5E = function (f6b, bE7x) {
        this.yq4u(f6b, bE7x || this.qh2x[f6b.name + "-error"], "er");
        return this
    };
    hu9l.ir9i = function () {
        var go9f = /^(?:radio|checkbox)$/i;
        var cep5u = function (C6w) {
            return C6w == null ? "" : C6w
        };
        var bHQ8I = function (C6w, f6b) {
            if (go9f.test(f6b.type || "")) {
                f6b.checked = C6w == f6b.value
            } else {
                f6b.value = cep5u(C6w)
            }
        };
        return function (T6N, C6w) {
            var f6b = this.B6v(T6N);
            if (!f6b) return this;
            if (f6b.tagName == "SELECT" || !f6b.length) {
                bHQ8I(C6w, f6b)
            } else {
                k6e.bb6V(f6b, bHQ8I.g6a(null, C6w))
            }
            return this
        }
    }();
    hu9l.B6v = function (T6N) {
        return this.fY9P.elements[T6N]
    };
    hu9l.czd0x = function () {
        return this.fY9P
    };
    hu9l.YO6I = function () {
        var go9f = /^radio|checkbox$/i, jD0x = /^number|date$/;
        var ceg5l = function (bv7o, f6b) {
            var T6N = f6b.name, C6w = f6b.value, bu7n = bv7o[T6N], t6n = this.pl1x(f6b, "type");
            if (jD0x.test(t6n)) C6w = this.zB5G(C6w, t6n);
            if (go9f.test(f6b.type) && !f6b.checked) {
                C6w = this.pl1x(f6b, "value");
                if (!C6w) return
            }
            if (!!bu7n) {
                if (!k6e.eC8u(bu7n)) {
                    bu7n = [bu7n];
                    bv7o[T6N] = bu7n
                }
                bu7n.push(C6w)
            } else {
                bv7o[T6N] = C6w
            }
        };
        return function () {
            var o6i = {};
            k6e.bb6V(this.fY9P.elements, function (f6b) {
                if (this.cfr5w(f6b)) ceg5l.call(this, o6i, f6b)
            }, this);
            return o6i
        }
    }();
    hu9l.Jf8X = function () {
        var cef5k = function (f6b) {
            if (this.WU6O(f6b)) this.pp1x(f6b)
        };
        return function () {
            this.fY9P.reset();
            k6e.bb6V(this.fY9P.elements, cef5k, this);
            return this
        }
    }();
    hu9l.cze0x = function () {
        this.fY9P.submit();
        return this
    };
    hu9l.ge9V = function () {
        var ced5i = function (f6b) {
            if (this.WU6O(f6b)) this.ceO5T(f6b)
        };
        return function () {
            this.FI7B = {};
            k6e.bb6V(this.fY9P.elements, ced5i, this);
            return this
        }
    }();
    hu9l.cec5h = function (f6b) {
        f6b = this.B6v(f6b) || f6b;
        if (!!f6b) return this.bIh8Z(f6b);
        var o6i = !0;
        k6e.bb6V(this.fY9P.elements, function (f6b) {
            var ky0x = this.cec5h(f6b);
            o6i = o6i && ky0x
        }, this);
        return o6i
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), H6B = c6e("nej.ut"), k6e = c6e("nej.u"),
        l6f = c6e("nm.x"), n6h = c6e("nm.l"), b6f, K6E;
    n6h.Zv7o = NEJ.C();
    b6f = n6h.Zv7o.O6I(n6h.ei8a);
    K6E = n6h.Zv7o.cl7e;
    b6f.bS7L = function () {
        this.cc7V();
        h6b.s6m(this.m6g, "click", this.cG7z.g6a(this));
        h6b.s6m(document, "mousewheel", this.zI5N.g6a(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.zI5N.g6a(this))
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        if (e6c.jst) {
            this.m6g.innerHTML = a5f.bX7Q(e6c.jst, e6c.data)
        } else if (e6c.ntp) {
            this.m6g.appendChild(a5f.dr8j(e6c.ntp))
        } else if (e6c.txt) {
            this.m6g.innerHTML = a5f.ih9Y(e6c.txt)
        } else if (e6c.html) {
            this.m6g.innerHTML = e6c.html
        }
        var OE3x = this.m6g.getElementsByTagName("form");
        if (OE3x.length) {
            this.fY9P = H6B.Pc3x.A6u({form: OE3x[0]})
        }
        this.Dh6b = a5f.db8T(this.m6g)[0]
    };
    b6f.bA7t = function () {
        this.z6t("ondestroy");
        this.bF7y();
        this.m6g.innerHTML = "";
        delete this.Dh6b
    };
    b6f.cG7z = function (d6d) {
        var f6b = h6b.U6O(d6d, "d:action"), j6d = this.fY9P ? this.fY9P.YO6I() : null,
            d6d = {action: a5f.u6o(f6b, "action")};
        if (j6d) d6d.data = j6d;
        if (d6d.action) {
            this.z6t("onaction", d6d);
            if (d6d.stopped) return;
            this.br7k()
        }
    };
    b6f.zI5N = function (d6d) {
        if (!this.Dh6b) return;
        h6b.bf6Z(d6d);
        var dl8d = d6d.wheelDelta || -d6d.detail;
        this.Dh6b.scrollTop -= dl8d
    };
    l6f.jK0x = function (e6c) {
        e6c.destroyable = e6c.destroyable || true;
        e6c.title = e6c.title || "提示";
        e6c.draggable = true;
        e6c.parent = document.body;
        e6c.mask = e6c.mask || true;
        var zd5i = n6h.Zv7o.A6u(e6c);
        zd5i.L6F();
        return zd5i
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var bHK8C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", OD3x = {}, Dt6n = {};
    for (var i = 0, l = bHK8C.length, c; i < l; i++) {
        c = bHK8C.charAt(i);
        OD3x[i] = c;
        Dt6n[c] = i
    }
    var cdX5c = function (hZ9Q) {
        var r6l = 0, c, o6i = [];
        while (r6l < hZ9Q.length) {
            c = hZ9Q[r6l];
            if (c < 128) {
                o6i.push(String.fromCharCode(c));
                r6l++
            } else if (c > 191 && c < 224) {
                o6i.push(String.fromCharCode((c & 31) << 6 | hZ9Q[r6l + 1] & 63));
                r6l += 2
            } else {
                o6i.push(String.fromCharCode((c & 15) << 12 | (hZ9Q[r6l + 1] & 63) << 6 | hZ9Q[r6l + 2] & 63));
                r6l += 3
            }
        }
        return o6i.join("")
    };
    var cdW5b = function () {
        var he9V = /\r\n/g;
        return function (j6d) {
            j6d = j6d.replace(he9V, "\n");
            var o6i = [], oy1x = String.fromCharCode(237);
            if (oy1x.charCodeAt(0) < 0) for (var i = 0, l = j6d.length, c; i < l; i++) {
                c = j6d.charCodeAt(i);
                c > 0 ? o6i.push(c) : o6i.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
            } else for (var i = 0, l = j6d.length, c; i < l; i++) {
                c = j6d.charCodeAt(i);
                if (c < 128) o6i.push(c); else if (c > 127 && c < 2048) o6i.push(c >> 6 | 192, c & 63 | 128); else o6i.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
            }
            return o6i
        }
    }();
    var Je8W = function (hZ9Q) {
        var r6l = 0, o6i = [], eZ8R = hZ9Q.length % 3;
        if (eZ8R == 1) hZ9Q.push(0, 0);
        if (eZ8R == 2) hZ9Q.push(0);
        while (r6l < hZ9Q.length) {
            o6i.push(OD3x[hZ9Q[r6l] >> 2], OD3x[(hZ9Q[r6l] & 3) << 4 | hZ9Q[r6l + 1] >> 4], OD3x[(hZ9Q[r6l + 1] & 15) << 2 | hZ9Q[r6l + 2] >> 6], OD3x[hZ9Q[r6l + 2] & 63]);
            r6l += 3
        }
        if (eZ8R == 1) o6i[o6i.length - 1] = o6i[o6i.length - 2] = "=";
        if (eZ8R == 2) o6i[o6i.length - 1] = "=";
        return o6i.join("")
    };
    var bHJ8B = function () {
        var qR2x = /\n|\r|=/g;
        return function (j6d) {
            var r6l = 0, o6i = [];
            j6d = j6d.replace(qR2x, "");
            for (var i = 0, l = j6d.length; i < l; i += 4) o6i.push(Dt6n[j6d.charAt(i)] << 2 | Dt6n[j6d.charAt(i + 1)] >> 4, (Dt6n[j6d.charAt(i + 1)] & 15) << 4 | Dt6n[j6d.charAt(i + 2)] >> 2, (Dt6n[j6d.charAt(i + 2)] & 3) << 6 | Dt6n[j6d.charAt(i + 3)]);
            var bm6g = o6i.length, eZ8R = j6d.length % 4;
            if (eZ8R == 2) o6i = o6i.slice(0, bm6g - 2);
            if (eZ8R == 3) o6i = o6i.slice(0, bm6g - 1);
            return o6i
        }
    }();
    p.czf0x = function (j6d) {
        return cdX5c(bHJ8B(j6d))
    };
    p.cdO5T = function (j6d) {
        var hZ9Q = bHJ8B(j6d), du8m = hZ9Q.length, hO9F;
        var r6l = 0;
        while (hO9F = hZ9Q[r6l]) {
            if (hO9F > 128) {
                hZ9Q[r6l] = hO9F - 256
            }
            r6l++
        }
        return hZ9Q
    };
    p.cdN5S = function (j6d) {
        try {
            return window.btoa(j6d)
        } catch (ex) {
            return Je8W(cdW5b(j6d))
        }
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, h6b = c6e("nej.v"), a5f = c6e("nej.e"), x6r = c6e("nej.j"), N6H = c6e("nej.p"),
        k6e = c6e("nej.u"), n6h = c6e("nm.l"), y6s = c6e("nm.w"), bC7v = c6e("nej.ui"), q6k = c6e("nm.d"),
        l6f = c6e("nm.x"), b6f, K6E;
    var TYPE_MAP = {13: "playlist", 17: "program", 18: "song", 19: "album"};
    n6h.bHB8t = NEJ.C();
    b6f = n6h.bHB8t.O6I(n6h.ei8a);
    b6f.ca7T = function () {
        this.cd7W = "m-download-layer"
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.F6z(this.m6g, "j-flag");
        this.bqI4M = i6c[0];
        this.bqF4J = i6c[1];
        this.bHr8j = i6c[2];
        x6r.bp7i("/client/version/get", {type: "json", onload: this.cdt5y.g6a(this)});
        if (N6H.KX8P.mac) {
            a5f.v6p(this.bqI4M.parentNode, "f-hide");
            a5f.w6q(this.bqF4J.parentNode, "f-hide");
            a5f.w6q(this.bHr8j, "f-hide")
        } else {
            a5f.w6q(this.bqI4M.parentNode, "f-hide");
            a5f.v6p(this.bqF4J.parentNode, "f-hide");
            a5f.v6p(this.bHr8j, "f-hide")
        }
    };
    b6f.bj6d = function (e6c) {
        e6c.clazz = " m-layer-down";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "下载";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bk6e(e6c);
        this.bT7M([[this.m6g, "click", this.bP7I.g6a(this)]]);
        this.ez8r = TYPE_MAP[e6c.type];
        this.gL9C = e6c.id
    };
    b6f.bA7t = function () {
        this.bF7y()
    };
    b6f.zQ5V = function () {
        this.br7k()
    };
    b6f.Ep6j = function (d6d) {
        this.z6t("onok", C6w);
        this.br7k()
    };
    b6f.bP7I = function (d6d) {
        var f6b = h6b.U6O(d6d, "d:action");
        switch (a5f.u6o(f6b, "action")) {
            case"download":
                this.br7k();
                window.open(a5f.u6o(f6b, "src"));
                break;
            case"orpheus":
                this.br7k();
                location.href = "orpheus://" + k6e.cdN5S(JSON.stringify({
                    type: this.ez8r,
                    id: this.gL9C,
                    cmd: "download"
                }));
                break
        }
    };
    b6f.cdt5y = function (d6d) {
        if ((d6d || Z6T).code == 200) {
            this.JG8y = d6d.data;
            this.bqI4M.innerText = "V" + this.JG8y.mac;
            this.bqF4J.innerText = "V" + this.JG8y.pc
        }
    };
    l6f.Jc8U = function (e6c) {
        n6h.bHB8t.A6u(e6c).L6F()
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, k6e = c6e("nej.u"), q6k = c6e("nm.d"), bQ7J = {};
    q6k.B6v = function (J6D) {
        return bQ7J[J6D]
    };
    q6k.mQ1x = function (J6D, bd6X) {
        bQ7J[J6D] = bd6X
    };
    q6k.ff8X = function (j6d) {
        k6e.ey8q(j6d, function (p6j, J6D) {
            var bd6X = bQ7J[J6D] || {};
            NEJ.X(bd6X, p6j);
            bQ7J[J6D] = bd6X
        })
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, bc6W = c6e("nej.h");
    bc6W.bbK8C = function (J6D) {
        return localStorage.getItem(J6D)
    };
    bc6W.bbR8J = function (J6D, C6w) {
        localStorage.setItem(J6D, C6w)
    };
    bc6W.bqz4D = function (J6D) {
        localStorage.removeItem(J6D)
    };
    bc6W.bqy4C = function () {
        localStorage.clear()
    };
    bc6W.cdk5p = function () {
        var o6i = [];
        for (var i = 0, l = localStorage.length; i < l; i++) o6i.push(localStorage.key(i));
        return o6i
    };
    bc6W.bqw4A = function () {
        (document.onstorageready || bn7g)()
    };
    bc6W.bqu4y = function () {
        return !0
    }
})();
(function () {
    var c6e = NEJ.P, N6H = c6e("nej.p"), hO9F = c6e("nej.c"), bc6W = c6e("nej.h"), sZ2x;
    if (N6H.mF1x.trident || !!window.localStorage) return;
    var ccP4T = function () {
        var qL2x, eE8w;
        var btd4h = function () {
            qL2x = document.createElement("div");
            NEJ.X(qL2x.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", qL2x);
            qL2x.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + hO9F.B6v("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var QB4F = function () {
            eE8w = window.clearTimeout(eE8w);
            var ho9f = qL2x.getElementsByTagName("object")[0];
            if (!!ho9f.initStorage) {
                delete qL2x;
                sZ2x = ho9f;
                sZ2x.initStorage("nej-storage");
                (document.onstorageready || bn7g)();
                return
            }
            eE8w = window.setTimeout(QB4F, 500)
        };
        return function () {
            if (!!sZ2x) return;
            btd4h();
            QB4F()
        }
    }();
    bc6W.bbK8C = bc6W.bbK8C.er8j(function (d6d) {
        d6d.stopped = !0;
        if (!sZ2x) return;
        d6d.value = sZ2x.getItem(d6d.args[0])
    });
    bc6W.bbR8J = bc6W.bbR8J.er8j(function (d6d) {
        d6d.stopped = !0;
        if (!sZ2x) return;
        var bh6b = d6d.args;
        sZ2x.setItem(bh6b[0], bh6b[1])
    });
    bc6W.bqz4D = bc6W.bqz4D.er8j(function (d6d) {
        d6d.stopped = !0;
        if (!sZ2x) return;
        sZ2x.removeItem(d6d.args[0])
    });
    bc6W.bqy4C = bc6W.bqy4C.er8j(function (d6d) {
        d6d.stopped = !0;
        if (!!sZ2x) sZ2x.clear()
    });
    bc6W.bqw4A = bc6W.bqw4A.er8j(function (d6d) {
        d6d.stopped = !0;
        ccP4T()
    });
    bc6W.bqu4y = bc6W.bqu4y.er8j(function (d6d) {
        d6d.stopped = !0;
        d6d.value = !!sZ2x
    })
})();
(function () {
    var c6e = NEJ.P, k6e = c6e("nej.u"), h6b = c6e("nej.v"), bc6W = c6e("nej.h"), x6r = c6e("nej.j"),
        H6B = c6e("nej.ut"), Q6K = {};
    x6r.vZ4d = function (J6D, C6w) {
        var bGY8Q = JSON.stringify(C6w);
        try {
            bc6W.bbR8J(J6D, bGY8Q)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bGY8Q != bc6W.bbK8C(J6D)) Q6K[J6D] = C6w;
        return this
    };
    x6r.tb2x = function (J6D) {
        var j6d = JSON.parse(bc6W.bbK8C(J6D) || "null");
        return j6d == null ? Q6K[J6D] : j6d
    };
    x6r.bGS8K = function (J6D, C6w) {
        var j6d = x6r.tb2x(J6D);
        if (j6d == null) {
            j6d = C6w;
            x6r.vZ4d(J6D, j6d)
        }
        return j6d
    };
    x6r.Ov3x = function (J6D) {
        delete Q6K[J6D];
        bc6W.bqz4D(J6D);
        return this
    };
    x6r.czg0x = function () {
        var bqn4r = function (p6j, J6D, bv7o) {
            delete bv7o[J6D]
        };
        return function () {
            k6e.ey8q(Q6K, bqn4r);
            bc6W.bqy4C();
            return this
        }
    }();
    x6r.czh0x = function (o6i) {
        o6i = o6i || {};
        k6e.bb6V(bc6W.cdk5p(), function (J6D) {
            o6i[J6D] = x6r.tb2x(J6D)
        });
        return o6i
    };
    H6B.fE8w.A6u({
        element: document, event: "storageready", oneventadd: function () {
            if (bc6W.bqu4y()) {
                document.onstorageready()
            }
        }
    });
    var ccr4v = function () {
        var ccq4u = function (C6w, J6D, bv7o) {
            bc6W.bbR8J(J6D, JSON.stringify(C6w));
            delete bv7o[J6D]
        };
        return function () {
            k6e.ey8q(Q6K, ccq4u)
        }
    }();
    h6b.s6m(document, "storageready", ccr4v);
    bc6W.bqw4A()
})();
(function () {
    var c6e = NEJ.P, h6b = c6e("nej.v"), k6e = c6e("nej.u"), N6H = c6e("nej.ut"), Ja8S;
    if (!!N6H.bql4p) return;
    N6H.bql4p = NEJ.C();
    Ja8S = N6H.bql4p.O6I(N6H.cD7w);
    Ja8S.cs7l = function () {
        var gq9h = +(new Date), mu0x = "dat-" + gq9h;
        return function () {
            this.cx7q();
            var Q6K = this.constructor[mu0x];
            if (!Q6K) {
                Q6K = {};
                this.constructor[mu0x] = Q6K
            }
            this.R6L = Q6K
        }
    }();
    Ja8S.B6v = function (J6D) {
        return this.R6L[J6D]
    };
    Ja8S.mQ1x = function (J6D, C6w) {
        var mv0x = this.R6L[J6D];
        this.R6L[J6D] = C6w;
        h6b.z6t(localCache, "cachechange", {key: J6D, type: "set", oldValue: mv0x, newValue: C6w});
        return this
    };
    Ja8S.cz7s = function (J6D) {
        var mv0x = this.R6L[J6D];
        k6e.YV7O(this.R6L, J6D);
        h6b.z6t(localCache, "cachechange", {key: J6D, type: "delete", oldValue: mv0x, newValue: undefined});
        return mv0x
    };
    Ja8S.TV5a = function (FM7F) {
        return NEJ.Q(this.R6L, FM7F)
    };
    window.localCache = N6H.bql4p.A6u();
    N6H.fE8w.A6u({element: localCache, event: "cachechange"})
})();
(function () {
    var c6e = NEJ.P, fj8b = NEJ.R, bn7g = NEJ.F, k6e = c6e("nej.u"), x6r = c6e("nej.j"), N6H = c6e("nej.ut"),
        mu0x = "dat-" + +(new Date), mw0x;
    if (!!N6H.bqk4o) return;
    N6H.bqk4o = NEJ.C();
    mw0x = N6H.bqk4o.O6I(N6H.cD7w);
    mw0x.cs7l = function () {
        this.cx7q();
        this.R6L = this.constructor[mu0x];
        if (!this.R6L) {
            this.R6L = {};
            this.R6L[mu0x + "-l"] = {};
            this.constructor[mu0x] = this.R6L
        }
    };
    mw0x.rF2x = function (J6D) {
        return this.R6L[J6D]
    };
    mw0x.pu1x = function (J6D, C6w) {
        this.R6L[J6D] = C6w
    };
    mw0x.lj0x = function (J6D, kT0x) {
        var j6d = this.rF2x(J6D);
        if (j6d == null) {
            j6d = kT0x;
            this.pu1x(J6D, j6d)
        }
        return j6d
    };
    mw0x.cci4m = function (J6D) {
        if (J6D != null) {
            delete this.R6L[J6D];
            return
        }
        k6e.ey8q(this.R6L, function (p6j, J6D) {
            if (J6D == mu0x + "-l") return;
            this.cci4m(J6D)
        }, this)
    };
    mw0x.czi0x = function (J6D) {
        if (!!x6r.Ov3x) return x6r.Ov3x(J6D)
    };
    mw0x.cbX4b = function (J6D) {
        if (!!x6r.tb2x) return x6r.tb2x(J6D)
    };
    mw0x.cbT4X = function (J6D, C6w) {
        if (!!x6r.vZ4d) x6r.vZ4d(J6D, C6w)
    };
    mw0x.FD7w = function (J6D, kT0x) {
        var j6d = this.Op3x(J6D);
        if (j6d == null) {
            j6d = kT0x;
            this.vT4X(J6D, j6d)
        }
        return j6d
    };
    mw0x.Op3x = function (J6D) {
        var j6d = this.rF2x(J6D);
        if (j6d != null) return j6d;
        j6d = this.cbX4b(J6D);
        if (j6d != null) this.pu1x(J6D, j6d);
        return j6d
    };
    mw0x.vT4X = function (J6D, C6w) {
        this.cbT4X(J6D, C6w);
        this.pu1x(J6D, C6w)
    };
    mw0x.bGA8s = function (J6D) {
        if (J6D != null) {
            delete this.R6L[J6D];
            if (!!x6r.Ov3x) x6r.Ov3x(J6D);
            return
        }
        k6e.ey8q(this.R6L, function (p6j, J6D) {
            if (J6D == mu0x + "-l") return;
            this.bGA8s(J6D)
        }, this)
    };
    mw0x.czk0x = function () {
        this.bGA8s();
        return this
    };
    mw0x.czl0x = function (J6D) {
        var j6d = this.R6L[mu0x + "-l"];
        delete j6d[J6D]
    };
    mw0x.bqe4i = function (J6D) {
        var j6d = this.R6L[mu0x + "-l"], bh6b = fj8b.slice.call(arguments, 1);
        k6e.bb6V(j6d[J6D], function (dE8w) {
            try {
                dE8w.apply(null, bh6b)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j6d[J6D]
    };
    mw0x.bqb4f = function (J6D, dE8w) {
        dE8w = dE8w || bn7g;
        var i6c = this.R6L[mu0x + "-l"][J6D];
        if (!i6c) {
            i6c = [dE8w];
            this.R6L[mu0x + "-l"][J6D] = i6c;
            return !1
        }
        i6c.push(dE8w);
        return !0
    };
    mw0x.cbA4E = function (i6c, be6Y, gn9e) {
        if (!i6c) return !1;
        be6Y = parseInt(be6Y) || 0;
        gn9e = parseInt(gn9e) || 0;
        if (!gn9e) {
            if (!i6c.loaded) return !1;
            gn9e = i6c.length
        }
        if (!!i6c.loaded) gn9e = Math.min(gn9e, i6c.length - be6Y);
        for (var i = 0; i < gn9e; i++) if (!i6c[be6Y + i]) return !1;
        return !0
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, k6e = c6e("nej.u"), N6H = c6e("nej.ut"), b6f, K6E;
    if (!!N6H.On3x) return;
    N6H.On3x = NEJ.C();
    b6f = N6H.On3x.O6I(N6H.bqk4o);
    K6E = N6H.On3x.cl7e;
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.wm4q = e6c.key || "id";
        this.bi6c = e6c.data || Z6T;
        this.cby4C = !!e6c.autogc;
        this.cbu4y(e6c.id)
    };
    b6f.bA7t = function () {
        this.bF7y();
        if (!!this.dX8P) {
            this.bGl8d()
        }
    };
    b6f.cbu4y = function (D6x) {
        var Q6K;
        if (!!D6x) {
            Q6K = this.R6L[D6x];
            if (!Q6K) {
                Q6K = {};
                this.R6L[D6x] = Q6K
            }
        }
        Q6K = Q6K || this.R6L;
        Q6K.hash = Q6K.hash || {};
        this.Oi3x = Q6K
    };
    b6f.bGl8d = function () {
        this.dX8P = window.clearTimeout(this.dX8P);
        var bv7o = {};
        k6e.ey8q(this.Oi3x, function (i6c, J6D) {
            if (J6D == "hash") return;
            if (!k6e.eC8u(i6c)) return;
            k6e.bb6V(i6c, function (p6j) {
                if (!p6j) return;
                bv7o[p6j[this.wm4q]] = !0
            }, this)
        }, this);
        k6e.ey8q(this.Vk5p(), function (p6j, D6x, dW8O) {
            if (!bv7o[D6x]) {
                delete dW8O[D6x]
            }
        })
    };
    b6f.cbp4t = function () {
        if (!!this.dX8P) {
            this.dX8P = window.clearTimeout(this.dX8P)
        }
        this.dX8P = window.setTimeout(this.bGl8d.g6a(this), 150)
    };
    b6f.zW5b = function (p6j, Vs5x) {
        p6j = this.bGk8c(p6j, Vs5x) || p6j;
        if (!p6j) return null;
        var J6D = p6j[this.wm4q];
        if (J6D != null) {
            var hQ9H = this.Vk5p()[J6D];
            if (!!hQ9H) p6j = NEJ.X(hQ9H, p6j);
            this.Vk5p()[J6D] = p6j
        }
        delete p6j.bGj8b;
        return p6j
    };
    b6f.bGk8c = bn7g;
    b6f.bpV4Z = function (J6D, p6j) {
        if (!p6j) return;
        if (!k6e.eC8u(p6j)) {
            var i6c = this.hi9Z(J6D), p6j = this.zW5b(p6j, J6D);
            if (!!p6j) i6c.unshift(p6j);
            return
        }
        k6e.mt0x(p6j, this.bpV4Z.g6a(this, J6D))
    };
    b6f.Oe3x = function (J6D, cu7n) {
        var i6c = this.hi9Z(J6D);
        i6c.length = Math.max(i6c.length, cu7n);
        this.bpU4Y(J6D);
        return this
    };
    b6f.jn0x = function (J6D) {
        return this.hi9Z(J6D).length
    };
    b6f.bpU4Y = function (J6D, nP1x) {
        this.hi9Z(J6D).loaded = nP1x != !1;
        return this
    };
    b6f.VS6M = function (J6D) {
        return !!this.hi9Z(J6D).loaded
    };
    b6f.ui3x = function (J6D, i6c) {
        this.uk3x(J6D);
        this.bpT4X({key: J6D, offset: 0, limit: i6c.length + 1}, {list: i6c, total: i6c.length})
    };
    b6f.hi9Z = function () {
        var Cc6W = function (J6D) {
            return (J6D || "") + (!J6D ? "" : "-") + "list"
        };
        return function (J6D) {
            var J6D = Cc6W(J6D), i6c = this.Oi3x[J6D];
            if (!i6c) {
                i6c = [];
                this.Oi3x[J6D] = i6c
            }
            return i6c
        }
    }();
    b6f.Vk5p = function () {
        var dW8O = this.Oi3x.hash;
        if (!dW8O) {
            dW8O = {};
            this.Oi3x.hash = dW8O
        }
        return dW8O
    };
    b6f.bpS3x = function () {
        var Cc6W = function (e6c) {
            return "r-" + e6c.key
        };
        return function (e6c) {
            var iy9p = NEJ.X({}, e6c), ny1x = Cc6W(iy9p);
            if (!this.bqb4f(ny1x, this.z6t.g6a(this))) {
                iy9p.rkey = ny1x;
                iy9p.onload = this.cbg4k.g6a(this, iy9p);
                this.z6t("dopullrefresh", iy9p)
            }
            return this
        }
    }();
    b6f.cbg4k = function (e6c, i6c) {
        this.bpV4Z(e6c.key, i6c);
        this.bqe4i(e6c.rkey, "onpullrefresh", e6c)
    };
    b6f.la0x = function () {
        var Cc6W = function (e6c) {
            return "r-" + e6c.key + "-" + e6c.offset + "-" + e6c.limit
        };
        return function (e6c) {
            e6c = e6c || Z6T;
            var iy9p = {
                key: "" + e6c.key || "",
                ext: e6c.ext || null,
                data: e6c.data || null,
                offset: parseInt(e6c.offset) || 0,
                limit: parseInt(e6c.limit) || 0
            }, i6c = this.hi9Z(iy9p.key);
            if (this.cbA4E(i6c, iy9p.offset, iy9p.limit)) {
                this.z6t("onlistload", iy9p);
                return this
            }
            var ny1x = Cc6W(iy9p);
            if (!this.bqb4f(ny1x, this.z6t.g6a(this))) {
                iy9p.rkey = ny1x;
                iy9p.onload = this.bpT4X.g6a(this, iy9p);
                this.z6t("doloadlist", iy9p)
            }
            return this
        }
    }();
    b6f.bpT4X = function () {
        var CT6N = function (p6j, r6l, i6c) {
            if (!!p6j) {
                return !0
            }
            i6c.splice(r6l, 1)
        };
        return function (e6c, o6i) {
            e6c = e6c || Z6T;
            var J6D = e6c.key, be6Y = e6c.offset, bGd8V = this.hi9Z(J6D);
            var i6c = o6i || [];
            if (!k6e.eC8u(i6c)) {
                i6c = o6i.result || o6i.list || [];
                var cu7n = parseInt(o6i.total);
                if (!isNaN(cu7n) || cu7n > i6c.length) {
                    this.Oe3x(J6D, cu7n)
                }
            }
            k6e.bb6V(i6c, function (p6j, r6l) {
                bGd8V[be6Y + r6l] = this.zW5b(p6j, J6D)
            }, this);
            if (i6c.length < e6c.limit) {
                this.bpU4Y(J6D);
                k6e.mt0x(bGd8V, CT6N)
            }
            this.bqe4i(e6c.rkey, "onlistload", e6c)
        }
    }();
    b6f.uk3x = function () {
        var CT6N = function (p6j, r6l, i6c) {
            i6c.splice(r6l, 1)
        };
        return function (J6D) {
            var i6c = this.hi9Z(J6D);
            k6e.mt0x(i6c, CT6N);
            this.bpU4Y(J6D, !1);
            if (this.cby4C) {
                this.cbp4t()
            }
            return this
        }
    }();
    b6f.bGb8T = function (p6j, Vs5x) {
        return !p6j.bGj8b
    };
    b6f.ex8p = function (D6x) {
        return this.Vk5p()[D6x]
    };
    b6f.czn0x = function (D6x) {
        var p6j = this.ex8p(D6x);
        if (!!p6j) p6j.bGj8b = !0
    };
    b6f.WE6y = function () {
        var Cc6W = function (e6c) {
            return "r-" + e6c.key + "-" + e6c.id
        };
        return function (e6c) {
            e6c = e6c || Z6T;
            var D6x = e6c[this.wm4q], iy9p = {id: D6x, ext: e6c.ext, data: e6c.data || {}, key: "" + e6c.key || ""};
            p6j = this.ex8p(D6x);
            iy9p.data[this.wm4q] = D6x;
            if (!!p6j && this.bGb8T(p6j, iy9p.key)) {
                this.z6t("onitemload", iy9p);
                return this
            }
            var ny1x = Cc6W(iy9p);
            if (!this.bqb4f(ny1x, this.z6t.g6a(this))) {
                iy9p.rkey = ny1x;
                iy9p.onload = this.caY4c.g6a(this, iy9p);
                this.z6t("doloaditem", iy9p)
            }
            return this
        }
    }();
    b6f.caY4c = function (e6c, p6j) {
        e6c = e6c || Z6T;
        this.zW5b(p6j, e6c.key);
        this.bqe4i(e6c.rkey, "onitemload", e6c)
    };
    b6f.iY9P = function (e6c) {
        e6c = NEJ.X({}, e6c);
        e6c.onload = this.xJ4N.g6a(this, e6c);
        this.z6t("doadditem", e6c)
    };
    b6f.xJ4N = function (e6c, p6j) {
        var J6D = e6c.key;
        p6j = this.zW5b(p6j, J6D);
        if (!!p6j) {
            var eO8G = 0, i6c = this.hi9Z(J6D);
            if (!e6c.push) {
                eO8G = -1;
                var be6Y = e6c.offset || 0;
                i6c.splice(be6Y, 0, p6j)
            } else if (i6c.loaded) {
                eO8G = 1;
                i6c.push(p6j)
            } else {
                i6c.length++
            }
        }
        var d6d = {key: J6D, flag: eO8G, data: p6j, action: "add", ext: e6c.ext};
        this.z6t("onitemadd", d6d);
        return d6d
    };
    b6f.IT8L = function (e6c) {
        e6c = NEJ.X({}, e6c);
        e6c.onload = this.bpM3x.g6a(this, e6c);
        this.z6t("dodeleteitem", e6c)
    };
    b6f.bpM3x = function (e6c, bFS8K) {
        var p6j, J6D = e6c.key;
        if (!!bFS8K) {
            p6j = this.ex8p(e6c.id) || null;
            var D6x = e6c.id, caR4V = this.wm4q, i6c = this.hi9Z(J6D), r6l = k6e.dd8V(i6c, function (hQ9H) {
                return !!hQ9H && hQ9H[caR4V] == D6x
            });
            if (r6l >= 0) i6c.splice(r6l, 1)
        }
        var d6d = {key: J6D, data: p6j, action: "delete", ext: e6c.ext};
        this.z6t("onitemdelete", d6d);
        return d6d
    };
    b6f.WS6M = function (e6c) {
        e6c = NEJ.X({}, e6c);
        e6c.onload = this.caQ4U.g6a(this, e6c);
        this.z6t("doupdateitem", e6c)
    };
    b6f.caQ4U = function (e6c, p6j) {
        var J6D = e6c.key;
        if (!!p6j) p6j = this.zW5b(p6j, J6D);
        var d6d = {key: J6D, data: p6j, action: "update", ext: e6c.ext};
        this.z6t("onitemupdate", d6d);
        return d6d
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, k6e = c6e("nej.u"), N6H = c6e("nej.ut"), b6f;
    if (!!N6H.bpJ3x) return;
    N6H.bpJ3x = NEJ.C();
    b6f = N6H.bpJ3x.O6I(N6H.On3x);
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.btE4I({
            doloadlist: this.WY6S.g6a(this),
            doloaditem: this.bpI3x.g6a(this),
            doadditem: this.bFP8H.g6a(this),
            dodeleteitem: this.Xd6X.g6a(this),
            doupdateitem: this.Xe6Y.g6a(this),
            dopullrefresh: this.bFN8F.g6a(this)
        })
    };
    b6f.WY6S = bn7g;
    b6f.bFN8F = bn7g;
    b6f.bpI3x = bn7g;
    b6f.bFP8H = bn7g;
    b6f.Xd6X = bn7g;
    b6f.Xe6Y = bn7g
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, k6e = c6e("nej.u"), h6b = c6e("nej.v"), x6r = c6e("nej.j"),
        H6B = c6e("nej.ut"), l6f = c6e("nm.x"), q6k = c6e("nm.d"), b6f, K6E;
    q6k.hn9e = NEJ.C();
    b6f = q6k.hn9e.O6I(H6B.bpJ3x);
    b6f.cn7g = function () {
        var NQ3x = location.protocol + "//" + location.host;
        var caI4M = function (bs7l, j6d) {
            var bv7o = {conf: {}, data: {}, urls: []};
            k6e.bb6V(bs7l, function (J6D, r6l, i6c) {
                var bd6X = q6k.B6v(J6D);
                if (!bd6X) return;
                var bpC3x = bFH8z(bd6X.url, j6d[J6D]);
                bv7o.urls.push(bpC3x);
                bv7o.conf[bpC3x] = bd6X;
                bv7o.data[bpC3x] = JSON.stringify(j6d[J6D] == null ? "" : j6d[J6D])
            });
            return bv7o
        };
        var bFH8z = function (V6P, j6d) {
            return V6P.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return j6d[$2] || $1
            })
        };
        var bFF8x = function (bd6X, e6c, d6d) {
            h6b.z6t(window, "requesterror", d6d);
            if (!!d6d.stopped) return;
            var IO8G = bd6X.onerror || e6c.onerror;
            if (k6e.fw8o(IO8G)) {
                this.z6t(IO8G, d6d, e6c)
            } else {
                (IO8G || bn7g).call(this, d6d, e6c)
            }
            var d6d = {result: d6d, option: e6c};
            this.z6t("onerror", d6d);
            if (!d6d.stopped) (bd6X.onmessage || bn7g).call(this, d6d.result.code, d6d.result)
        };
        var bFB8t = function (P6J, bd6X, e6c) {
            var o6i = P6J;
            if (k6e.gr9i(bd6X.format)) {
                o6i = bd6X.format.call(this, P6J, e6c)
            }
            return o6i
        };
        var yD4H = function (P6J, bd6X, e6c, uB3x) {
            if (k6e.gr9i(bd6X.beforeload)) {
                bd6X.beforeload.call(this, P6J, e6c, bd6X)
            }
            if (P6J && P6J.code != null && P6J.code != 200) {
                bFF8x.call(this, bd6X, e6c, {
                    key: e6c.key,
                    code: P6J.code,
                    message: P6J.message || "",
                    captchaId: P6J.captchaId,
                    ext: P6J
                });
                return
            }
            var o6i = P6J;
            if (!uB3x) {
                o6i = bFB8t.call(this, P6J, bd6X, e6c)
            } else if (k6e.gr9i(bd6X.format)) {
                var bpv3x = [];
                k6e.bb6V(uB3x.urls, function (V6P) {
                    bpv3x.push(bFB8t.call(this, P6J[V6P], uB3x.conf[V6P], e6c))
                }, this);
                bpv3x.push(e6c);
                o6i = bd6X.format.apply(this, bpv3x)
            }
            var tc3x = bd6X.onload || e6c.onload, bFv8n = bd6X.finaly || e6c.finaly || bn7g;
            if (k6e.fw8o(tc3x)) {
                bFv8n.call(this, this.z6t(tc3x, o6i), e6c)
            } else {
                bFv8n.call(this, (tc3x || bn7g).call(this, o6i), e6c)
            }
        };
        var zy5D = function (bd6X, e6c, bV7O) {
            bFF8x.call(this, bd6X, e6c, {key: e6c.key, code: bV7O.code || -1, message: bV7O.message || ""})
        };
        return function (bd6X, e6c) {
            if (k6e.fw8o(bd6X)) {
                bd6X = q6k.B6v(bd6X)
            }
            delete e6c.value;
            (bd6X.filter || bn7g).call(this, e6c, bd6X);
            var P6J = e6c.value;
            if (!!P6J) {
                yD4H.call(this, P6J, bd6X, e6c);
                return
            }
            var V6P, j6d = e6c.data || Z6T, xF4J = {
                cookie: !0,
                type: bd6X.rtype || "json",
                method: bd6X.type || "POST",
                onerror: zy5D.g6a(this, bd6X, e6c),
                noescape: bd6X.noescape
            };
            if (k6e.eC8u(bd6X.url)) {
                var uB3x = caI4M(bd6X.url, j6d);
                V6P = NQ3x + "/api/batch";
                xF4J.data = k6e.dh8Z(uB3x.data);
                xF4J.onload = yD4H.en8f(this, bd6X, e6c, uB3x);
                xF4J.headers = {"batch-method": "POST"};
                delete uB3x.data
            } else {
                var lD0x = bd6X.url.indexOf(":") < 0 ? NQ3x : "";
                V6P = bFH8z(lD0x + bd6X.url, j6d);
                xF4J.data = k6e.dh8Z(e6c.data);
                xF4J.onload = yD4H.en8f(this, bd6X, e6c)
            }
            if (xF4J.method == "GET") xF4J.query = xF4J.data;
            return x6r.bp7i(V6P, xF4J)
        }
    }();
    b6f.Dl6f = function () {
        var go9f = /^get|list|pull$/i;
        return function (bFu8m, e6c) {
            var J6D = e6c.key, bd6X = q6k.B6v(J6D.split("-")[0] + "-" + bFu8m);
            if (go9f.test(bFu8m) && J6D.indexOf("post-") < 0) bd6X.type = "GET";
            this.cn7g(bd6X, e6c)
        }
    }();
    b6f.czr0x = function (J6D, i6c) {
        var cu7n = i6c.length;
        this.bpT4X({key: J6D, offset: 0, limit: cu7n + 1}, {list: i6c, total: cu7n})
    };
    b6f.WY6S = function (e6c) {
        this.Dl6f("list", e6c)
    };
    b6f.bpI3x = function (e6c) {
        this.Dl6f("get", e6c)
    };
    b6f.bFN8F = function (e6c) {
        this.Dl6f("pull", e6c)
    };
    b6f.bFP8H = function (e6c) {
        this.Dl6f("add", e6c)
    };
    b6f.Xd6X = function (e6c) {
        this.Dl6f("del", e6c)
    };
    b6f.Xe6Y = function (e6c) {
        this.Dl6f("update", e6c)
    };
    b6f.cam4q = function (p6j) {
        this.zW5b(p6j)
    };
    H6B.fE8w.A6u({element: window, event: "requesterror"})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), H6B = c6e("nej.ut"), q6k = c6e("nm.d"), bpu3x = {},
        b6f, K6E;
    var tl3x = function (o6i, e6c) {
        o6i.conf = e6c.conf;
        return o6i
    };
    q6k.ff8X({
        "res-mv-get": {
            type: "GET", url: "/api/v1/mv/detail", format: function (P6J, e6c) {
                return tl3x({mv: P6J}, e6c)
            }
        },
        "res-song-get": {
            type: "GET", url: "/api/song/detail", format: function (o6i, e6c) {
                if (!!o6i.songs && o6i.songs.length > 0) o6i.song = o6i.songs[0]; else o6i.song = bpu3x;
                delete o6i.songs;
                return tl3x(o6i, e6c)
            }, filter: function (e6c) {
                e6c.data.ids = "[" + e6c.data.id + "]"
            }
        },
        "res-program-get": {type: "GET", url: "/api/dj/program/detail", format: tl3x},
        "res-album-get": {type: "GET", url: "/api/album/{id}", format: tl3x},
        "res-playlist-get": {
            type: "GET", url: "/api/playlist/detail", format: function (o6i, e6c) {
                o6i.playlist = o6i.result;
                delete o6i.result;
                return tl3x(o6i, e6c)
            }
        },
        "res-mv-play": {type: "GET", url: "/api/song/mv/play", format: tl3x},
        "res-playlist-play": {type: "GET", url: "/api/playlist/update/playcount", format: tl3x},
        "res-program-play": {type: "GET", url: "/api/dj/program/listen", format: tl3x},
        "res-djradio-get": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e6c) {
                var i6c = e6c.data.id.split("-");
                e6c.data.radioId = i6c[0];
                e6c.data.asc = i6c[1] == 2;
                e6c.data.limit = 1e3;
                delete e6c.data.id
            }, format: function (P6J, e6c) {
                var caj4n = {id: e6c.data.radioId, programs: P6J.programs};
                return tl3x({djradio: caj4n}, e6c)
            }
        },
        "res-hotSongs-get": {type: "GET", url: "/api/artist/{id}", format: tl3x},
        "res-lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e6c) {
                e6c.data.lv = 0;
                e6c.data.tv = 0
            }, format: function (o6i, e6c) {
                var vP4T = {lyric: "", nolyric: true};
                if (o6i.code == 200 && o6i.lrc && o6i.lrc.lyric) {
                    vP4T.lyric = o6i.lrc.lyric;
                    vP4T.nolyric = false
                } else {
                    vP4T.nolyric = true
                }
                return tl3x({lyric: vP4T}, e6c)
            }
        }
    });
    q6k.vO4S = NEJ.C();
    b6f = q6k.vO4S.O6I(q6k.hn9e);
    b6f.caf4j = function (t6n, cU7N) {
        return this.rF2x(this.Yd6X(t6n, cU7N))
    };
    b6f.NE0x = function (t6n, cU7N, e6c) {
        e6c = e6c || {};
        var j6d = this.rF2x(this.Yd6X(t6n, cU7N));
        if (j6d && (t6n != 13 && t6n != 19 || e6c.conf && e6c.conf.useCache)) {
            this.z6t("onresourceload", t6n, cU7N, j6d, e6c.conf);
            return
        }
        e6c.data = {id: cU7N};
        e6c.onload = this.cac4g.g6a(this, t6n, cU7N);
        e6c.onerror = this.cab4f.g6a(this, t6n, cU7N);
        this.cn7g("res-" + this.Aa5f(t6n) + "-get", e6c)
    };
    b6f.cac4g = function (t6n, cU7N, o6i) {
        var j6d = o6i[this.Aa5f(t6n)];
        this.pu1x(this.Yd6X(t6n, cU7N), j6d);
        this.z6t("onresourceload", t6n, cU7N, j6d, o6i.conf)
    };
    b6f.cab4f = function (t6n, cU7N, o6i, e6c) {
        if (o6i.code != 404) {
            this.z6t("onresourceerror", t6n, cU7N, o6i.code);
            return
        }
        this.pu1x(this.Yd6X(t6n, cU7N), bpu3x);
        this.z6t("onresourceload", t6n, cU7N, bpu3x, e6c.conf)
    };
    b6f.czs0x = function (t6n, e6c) {
        this.cn7g("res-" + this.Aa5f(t6n) + "-play", e6c)
    };
    b6f.Yd6X = function (t6n, cU7N) {
        return "res-" + this.Aa5f(t6n) + "-" + cU7N
    };
    b6f.Aa5f = function (t6n) {
        var bv7o = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return bv7o[t6n]
    };
    q6k.vO4S.IJ8B = function (t6n, cU7N) {
        if (!this.eX8P) this.eX8P = q6k.vO4S.A6u({});
        return this.eX8P.caf4j(t6n, cU7N)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        q6k = c6e("nm.d"), bps3x = /^[1-9][0-9]*$/, b6f, K6E;
    var LOCAL_LOG_KEY = "local-log";
    q6k.ff8X({
        "bi-log": {url: "/api/feedback/weblog"},
        "bi-batch-log": {url: "/api/feedback/weblog"},
        "plus-mv-count": {url: "/api/song/mv/play"},
        "plus-song-count": {url: "/api/song/play"},
        "plus-dj-count": {type: "GET", url: "/api/dj/program/listen"},
        "plus-playlist-count": {type: "GET", url: "/api/playlist/update/playcount"}
    });
    q6k.hM9D = NEJ.C();
    b6f = q6k.hM9D.O6I(q6k.hn9e);
    b6f.fu8m = function (W6Q, bd6X) {
        if (!W6Q || !bd6X) return;
        if (k6e.fw8o(bd6X)) {
            try {
                bd6X = JSON.parse(bd6X)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", a5f)
                }
            }
        }
        if (!k6e.lg0x(bd6X)) return;
        this.cn7g("bi-log", {data: {logs: JSON.stringify([{action: W6Q, json: bd6X}])}});
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + W6Q + ", json=" + JSON.stringify(bd6X))
        }
    };
    b6f.YJ6D = function (nn1x) {
        if (!k6e.eC8u(nn1x)) return;
        this.cn7g("bi-batch-log", {data: {logs: JSON.stringify(nn1x)}})
    };
    b6f.bFk7d = function (bd6X) {
        if (!bd6X || !bd6X.type || !bd6X.rid) return;
        var nm1x = bd6X.type;
        if (bps3x.test(nm1x)) {
            nm1x = this.Aa5f(nm1x)
        }
        if (!nm1x) return;
        if (nm1x == "playlist") nm1x = "list";
        this.fu8m("search", {type: nm1x, id: bd6X.rid || null, keyword: bd6X.keyword || null})
    };
    b6f.NC0x = function () {
        var bZP4T = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (bd6X) {
            if (!bd6X || !bd6X.type || !bd6X.rid) return;
            if (bd6X.play === undefined) bd6X.play = true;
            var nm1x = bd6X.type;
            if (bps3x.test(nm1x)) {
                nm1x = this.Aa5f(nm1x)
            }
            if (!nm1x) return;
            if (nm1x == "playlist") nm1x = "list";
            var P6J = {id: bd6X.rid, type: nm1x};
            if (nm1x == "song" && bd6X.source) {
                P6J.source = this.bFh7a(bd6X.source);
                if (!!bd6X.sourceid) P6J.sourceid = bd6X.sourceid
            }
            this.fu8m(!bd6X.play ? "addto" : "play", P6J);
            if (nm1x == "song" && bd6X.hash && bd6X.hash.match(bZP4T)) {
                this.fu8m(!bd6X.play ? "addto" : "play", {type: RegExp.$1, id: RegExp.$2})
            }
        }
    }();
    b6f.bpq3x = function (D6x, bw7p, dY8Q, Ec6W) {
        var P6J = {type: "song", wifi: 0, download: 0};
        var bZF4J = {1: "ui", 2: "playend", 3: "interrupt", 4: "exception"};
        P6J.id = D6x;
        P6J.time = Math.round(bw7p);
        P6J.end = k6e.fw8o(Ec6W) ? Ec6W : bZF4J[Ec6W] || "";
        if (dY8Q && dY8Q.fid) {
            P6J.source = this.bFh7a(dY8Q.fid);
            P6J.sourceId = dY8Q.fdata
        }
        this.fu8m("play", P6J)
    };
    b6f.bFd7W = function (t6n, cU7N) {
        if (!t6n || !cU7N) return;
        if (bps3x.test(t6n)) t6n = this.Aa5f(t6n);
        if (t6n != "playlist" && t6n != "dj") return;
        var bd6X = q6k.B6v("plus-" + t6n + "-count");
        if (!bd6X) return !1;
        this.cn7g(bd6X, {data: {id: cU7N}});
        var Q6K = this.lj0x("play-hist-" + t6n, []);
        if (k6e.dd8V(Q6K, cU7N) < 0) {
            Q6K.push(cU7N);
            return !0
        }
        return !1
    };
    b6f.Aa5f = function (t6n) {
        var bv7o = {1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist"};
        return bv7o[t6n]
    };
    b6f.bFh7a = function (II8A) {
        var bv7o = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return bv7o[II8A]
    };
    b6f.bZC4G = function (hh9Y) {
        var nn1x = this.FD7w(LOCAL_LOG_KEY, []);
        nn1x.unshift(hh9Y);
        if (nn1x.length > 200) {
            nn1x.length = 200
        }
        this.vT4X(LOCAL_LOG_KEY, nn1x)
    };
    b6f.bZz4D = function () {
        return this.Op3x(LOCAL_LOG_KEY)
    };
    b6f.eu8m = function (P6J) {
        this.fu8m("play", P6J)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), x6r = c6e("nej.j"), H6B = c6e("nej.ut"),
        a5f = c6e("nej.e"), k6e = c6e("nej.u"), n6h = c6e("nm.l"), l6f = c6e("nm.x"), q6k = c6e("nm.d");
    if (!q6k.vO4S) return;
    var Q6K = q6k.vO4S.A6u({onresourceload: bZy4C});
    var tL3x = q6k.hM9D.gh9Y();

    function bZy4C(t6n, cU7N, j6d, bd6X) {
        var i6c = [];
        switch (parseInt(t6n)) {
            case 2:
                i6c = j6d;
                break;
            case 13:
                i6c = j6d.tracks;
                break;
            case 18:
                i6c.push(j6d);
                break;
            case 19:
                i6c = j6d.songs;
                break;
            case 21:
                if (j6d.mp && j6d.mp.fee && j6d.mp.pl <= 0) {
                    l6f.ZR7K(j6d.data.id, j6d.mp.fee);
                    return
                }
                break
        }
        if (l6f.IH8z(i6c, true, null, t6n == 19 ? {source: "album", sourceid: cU7N} : null) == 0) {
            return
        }
        l6f.fh8Z({clazz: "m-layer-w2", bubble: !1, message: bd6X.message})
    }

    function bZu4y(d6d, rr2x, xz4D, eJ8B) {
        eJ8B = eJ8B || {};
        if (d6d.action == "ok") {
            if (xz4D) {
                location.dispatch2("/payfee?songId=" + xz4D)
            } else {
                location.dispatch2("/payfee?fee=" + rr2x || 1)
            }
            tL3x.fu8m("click", {
                type: "tobuyvip",
                name: "box",
                source: eJ8B.source || "song",
                sourceid: eJ8B.sourceid || xz4D || 0
            })
        } else if (d6d.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + xz4D);
            tL3x.fu8m("click", {
                type: "tobuyone",
                name: "box",
                source: eJ8B.source || "song",
                sourceid: eJ8B.sourceid || xz4D || 0
            })
        }
    }

    function Nx0x(bE7x) {
        l6f.fh8Z({clazz: "m-layer-w2", bubble: !1, message: bE7x, btntxt: "知道了"})
    }

    function Nw0x(bE7x, P6J) {
        Nx0x((P6J || Z6T).toast || bE7x)
    }

    l6f.ic9T = function (bE7x, D6x, t6n, bZr4v, bg6a) {
        bE7x = bE7x || "由于版权保护，您所在的地区暂时无法使用。";
        if (bZr4v && bg6a && bg6a.privilege && bg6a.privilege.toast) {
            x6r.bp7i("/api/song/toast", {
                query: {id: bg6a.id},
                type: "json",
                onload: Nw0x.g6a(this, bE7x),
                onerror: Nw0x.g6a(this, bE7x)
            })
        } else if (D6x && t6n) {
            Q6K.NE0x(t6n, D6x, {conf: {message: bE7x, useCache: t6n != 18}})
        } else {
            Nx0x(bE7x)
        }
    };
    l6f.tY3x = function (rr2x, xz4D, t6n, eJ8B, na1x) {
        var bQ7J, pT1x = "m-popup-info", bpo3x = "单首购买", bpj3x = "马上去开通", cI7B = "唱片公司要求，当前歌曲须付费使用。", bER7K = true;
        try {
            bQ7J = top.api.feeMessage || {}
        } catch (e) {
            bQ7J = {}
        }
        if (rr2x == 1 || rr2x == 8 || rr2x == 16) {
            if (t6n == "song") {
                pT1x = "m-popup-song-buy";
                cI7B = bQ7J["vip2"] || cI7B;
                bpj3x = bQ7J["vip2button"] || "包月购买";
                bpo3x = bQ7J["vip2link"] || bpo3x;
                if (na1x && na1x.flag !== undefined) {
                    var bs7l = na1x.flag.toString(2).split("");
                    if (parseInt(bs7l.pop(), 10) == 1) {
                        bER7K = false
                    }
                }
            } else {
                cI7B = bQ7J["vip"] || cI7B
            }
        } else if (rr2x == 4) {
            cI7B = bQ7J["album"] || cI7B;
            bpj3x = "立即订购"
        } else {
            cI7B = bQ7J["unknow"] || cI7B
        }
        l6f.jK0x({
            clazz: "m-layer-w5",
            html: a5f.bX7Q(pT1x, {songTxt: bpo3x, tip: cI7B, oktext: bpj3x, cctext: "以后再说", showSongText: bER7K}),
            onaction: bZu4y.en8f(null, rr2x, xz4D, eJ8B)
        })
    };
    l6f.bEP7I = function (hc9T, hd9U) {
        l6f.gD9u({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (t6n) {
                if (t6n == "ok") {
                    l6f.Jc8U({id: hc9T, type: hd9U})
                }
            }
        })
    };
    l6f.ZR7K = function (oz1x, rr2x) {
        var bQ7J, cI7B = "唱片公司要求，当前歌曲须付费使用。";
        try {
            bQ7J = top.api.feeMessage || {}
        } catch (e) {
            bQ7J = {}
        }
        if (rr2x == 1 || rr2x == 8) {
            cI7B = bQ7J["vip"] || cI7B
        } else if (rr2x == 4) {
            cI7B = bQ7J["album"] || cI7B
        } else {
            cI7B = bQ7J["unknow"] || cI7B
        }
        return l6f.jK0x({
            clazz: "m-layer-w5",
            html: a5f.bX7Q("m-popup-info", {tip: cI7B, oktext: "马上去开通", cctext: "以后再说"}),
            onaction: function (d6d) {
                if (d6d.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + oz1x);
                    tL3x.fu8m("click", {type: "tobuyone", name: "box", source: "mv", sourceid: oz1x || 0})
                }
            }
        })
    };
    l6f.IH8z = function () {
        function compareFee(bZe4i, bZc4g) {
            var bv7o = {1: 99, 8: 99, 4: 88, 16: 99};
            return (bv7o[bZe4i] || 0) - (bv7o[bZc4g] || 0)
        }

        return function (i6c, cI7B, um3x, eJ8B) {
            um3x = um3x || {};
            var ys4w = [], IG8y = {}, bEN7G = 0, bEM7F = 0, IF8x = null;
            if (!i6c || !i6c.length) return ys4w;
            k6e.bb6V(i6c, function (bg6a) {
                var fm8e = l6f.oU1x(bg6a);
                if (fm8e == 0) {
                    ys4w.push(bg6a)
                } else if (fm8e == 10) {
                    if (bg6a.privilege) {
                        bg6a.fee = bg6a.privilege.fee
                    }
                    if (compareFee(bg6a.fee, IG8y.fee) > 0) {
                        IG8y = bg6a
                    }
                } else if (fm8e == 11) {
                    ++bEN7G;
                    if (!um3x.play) ys4w.push(bg6a)
                } else if (fm8e == 1e3) {
                    ++bEM7F;
                    if (!um3x.download) ys4w.push(bg6a)
                } else if (fm8e == 100) {
                    IF8x = bg6a
                }
            });
            if (ys4w.length == 0 && cI7B) {
                if (bEN7G == i6c.length) {
                    var sc2x = i6c[0].privilege || {};
                    if (sc2x.payed) {
                        l6f.ic9T("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        l6f.tY3x(sc2x.fee, null, null, eJ8B)
                    }
                } else if (bEM7F == i6c.length) {
                    l6f.ic9T("因版权方要求，该歌曲不支持下载")
                } else if (IG8y.id) {
                    l6f.tY3x(IG8y.fee, IG8y.id, null, eJ8B, IG8y.privilege)
                } else {
                    if (IF8x && i6c.length == 1 && IF8x.privilege && IF8x.privilege.st < 0 && IF8x.privilege.toast) {
                        l6f.ic9T(null, null, null, true, IF8x)
                    } else {
                        l6f.ic9T()
                    }
                }
            }
            return ys4w
        }
    }();
    l6f.oU1x = function (bg6a) {
        if (!bg6a) return 0;
        var fm8e = bg6a.privilege;
        if (bg6a.program) return 0;
        if (window.GAbroad) return 100;
        if (fm8e) {
            if (fm8e.st != null && fm8e.st < 0) {
                return 100
            }
            if (fm8e.fee > 0 && fm8e.fee != 8 && fm8e.payed == 0 && fm8e.pl <= 0) return 10;
            if (fm8e.fee == 16) return 11;
            if ((fm8e.fee == 0 || fm8e.payed) && fm8e.pl > 0 && fm8e.dl == 0) return 1e3;
            if (fm8e.pl == 0 && fm8e.dl == 0) return 100;
            return 0
        } else {
            var eh8Z = bg6a.status != null ? bg6a.status : bg6a.st != null ? bg6a.st : 0;
            if (bg6a.status >= 0) return 0;
            if (bg6a.fee > 0) return 10;
            return 100
        }
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, fj8b = NEJ.R, a5f = c6e("nej.e"), h6b = c6e("nej.v"),
        k6e = c6e("nej.u"), H6B = c6e("nej.ut"), y6s = c6e("nm.w"), b6f;
    if (!!y6s.bEL7E) return;
    var cf7Y = ~[];
    cf7Y = {
        bEK7D: ++cf7Y,
        bYX4b: (![] + "")[cf7Y],
        jV0x: ++cf7Y,
        IE8w: (![] + "")[cf7Y],
        bbZ8R: (cf7Y[cf7Y] + "")[cf7Y],
        bEE7x: ++cf7Y,
        czv0x: ({} + "")[cf7Y],
        bYI4M: (cf7Y[cf7Y] + "")[cf7Y],
        bYG4K: (![] + "")[cf7Y],
        No9f: ++cf7Y,
        bcr8j: (!"" + "")[cf7Y],
        czw0x: ++cf7Y,
        Ak5p: ++cf7Y,
        bEx7q: ({} + "")[cf7Y],
        vI3x: ++cf7Y,
        bYr3x: ++cf7Y,
        czx0x: ++cf7Y,
        czz0x: ++cf7Y
    };
    cf7Y.IC8u = (cf7Y.IC8u = cf7Y + "")[cf7Y.Ak5p] + (cf7Y.IB8t = cf7Y.IC8u[cf7Y.jV0x]) + (cf7Y.bcL8D = (cf7Y.Gd7W + "")[cf7Y.jV0x]) + (!cf7Y + "")[cf7Y.No9f] + (cf7Y.Ge7X = cf7Y.IC8u[cf7Y.vI3x]) + (cf7Y.Gd7W = (!"" + "")[cf7Y.jV0x]) + (bYj3x = (!"" + "")[cf7Y.bEE7x]) + cf7Y.IC8u[cf7Y.Ak5p] + cf7Y.Ge7X + cf7Y.IB8t + cf7Y.Gd7W;
    cf7Y.bcL8D = cf7Y.Gd7W + (!"" + "")[cf7Y.No9f] + cf7Y.Ge7X + bYj3x + cf7Y.Gd7W + cf7Y.bcL8D;
    cf7Y.Gd7W = cf7Y.bEK7D[cf7Y.IC8u][cf7Y.IC8u];
    y6s.bEL7E = cf7Y
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, h6b = c6e("nej.v"), a5f = c6e("nej.e"), N6H = c6e("nej.ui"), b6f;
    if (!!N6H.TP5U) return;
    var io9f = a5f.sp2x(".#<uispace>{position:absolute;background:#fff;}");
    N6H.TP5U = NEJ.C();
    b6f = N6H.TP5U.O6I(N6H.Pz3x);
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.bT7M([[document, "click", this.rI2x.g6a(this)]]);
        this.bYf3x = !!e6c.nostop;
        this.bEk7d = {top: e6c.top, left: e6c.left}
    };
    b6f.bA7t = function () {
        delete this.xi4m;
        delete this.boR2x;
        delete this.qw2x;
        delete this.bEh7a;
        delete this.Ub5g;
        delete this.bEk7d;
        this.bF7y()
    };
    b6f.ca7T = function () {
        this.lw0x = io9f
    };
    b6f.bS7L = function () {
        this.cc7V();
        this.zf5k = this.m6g;
        h6b.s6m(this.m6g, "click", this.bXR3x.g6a(this))
    };
    b6f.rI2x = function (d6d) {
        if (d6d.button != 2) this.br7k()
    };
    b6f.bXR3x = function (d6d) {
        if (this.bYf3x) return;
        h6b.si2x(d6d);
        var G6A = h6b.U6O(d6d);
        if (G6A.tagName == "A") h6b.cm7f(d6d)
    };
    b6f.bXN3x = function () {
        var cZ7S = /\s+/i;
        return function (nl1x) {
            nl1x = (nl1x || "").trim().toLowerCase().split(cZ7S);
            nl1x[0] = nl1x[0] || "bottom";
            nl1x[1] = nl1x[1] || "left";
            this.qw2x = nl1x
        }
    }();
    b6f.bXJ3x = function (nl1x) {
        var o6i = {}, mO1x = this.boR2x, czA0x = a5f.oQ1x(), cy7r = this.m6g.offsetWidth, ch7a = this.m6g.offsetHeight;
        switch (nl1x[0]) {
            case"top":
                o6i.top = mO1x.top - ch7a;
                o6i.left = nl1x[1] == "right" ? mO1x.left + mO1x.width - cy7r : mO1x.left;
                break;
            case"left":
                o6i.left = mO1x.left - cy7r;
                o6i.top = nl1x[1] == "bottom" ? mO1x.top + mO1x.height - ch7a : mO1x.top;
                break;
            case"right":
                o6i.left = mO1x.left + mO1x.width;
                o6i.top = nl1x[1] == "bottom" ? mO1x.top + mO1x.height - ch7a : mO1x.top;
                break;
            default:
                o6i.top = mO1x.top + mO1x.height;
                o6i.left = nl1x[1] == "right" ? mO1x.left + mO1x.width - cy7r : mO1x.left;
                break
        }
        return o6i
    };
    b6f.Jv8n = function () {
        if (!this.bEh7a) {
            this.gj9a(this.bEk7d);
            return
        }
        if (!!this.Ub5g) {
            this.gj9a(this.xi4m);
            return
        }
        if (!!this.boR2x) this.gj9a(this.bXJ3x(this.qw2x))
    };
    b6f.bXA3x = function (G6A, dl8d, d6d) {
        dl8d = dl8d || Z6T;
        var bDR7K = a5f.oQ1x(), cP7I = h6b.iW9N(d6d) + (dl8d.left || 0), gU9L = h6b.lJ0x(d6d) + (dl8d.top || 0),
            cy7r = G6A.offsetWidth + (dl8d.right || 0), ch7a = G6A.offsetHeight + (dl8d.bottom || 0),
            Iv8n = bDR7K.scrollWidth, boM2x = bDR7K.scrollHeight, boL2x = cP7I + cy7r, boK2x = gU9L + ch7a;
        switch (this.qw2x[0]) {
            case"top":
                gU9L = boK2x > boM2x ? gU9L - ch7a : gU9L;
                if (this.qw2x[1] == "right") {
                    cP7I = cP7I - cy7r < 0 ? 0 : cP7I - cy7r
                } else {
                    cP7I = boL2x > Iv8n ? Iv8n - cy7r : cP7I
                }
                break;
            case"left":
                cP7I = boL2x > Iv8n ? Iv8n - cy7r : cP7I;
                if (this.qw2x[1] == "top") {
                    gU9L = boK2x > boM2x ? gU9L - ch7a : gU9L
                } else {
                    gU9L = gU9L - ch7a < 0 ? gU9L : gU9L - ch7a
                }
                break;
            case"right":
                cP7I = cP7I - cy7r < 0 ? 0 : cP7I - cy7r;
                if (this.qw2x[1] == "top") {
                    gU9L = boK2x > boM2x ? gU9L - ch7a : gU9L
                } else {
                    gU9L = gU9L - ch7a < 0 ? gU9L : gU9L - ch7a
                }
                break;
            default:
                gU9L = gU9L - ch7a < 0 ? gU9L : gU9L - ch7a;
                if (this.qw2x[1] == "left") {
                    cP7I = boL2x > Iv8n ? Iv8n - cy7r : cP7I
                } else {
                    cP7I = cP7I - cy7r < 0 ? 0 : cP7I - cy7r
                }
                break
        }
        return {top: gU9L, left: cP7I}
    };
    b6f.boJ2x = function () {
        var bXq3x = function (G6A, dl8d) {
            G6A = a5f.B6v(G6A);
            if (!G6A) return;
            dl8d = dl8d || Z6T;
            var be6Y = a5f.hL9C(G6A);
            return {
                top: be6Y.y - (dl8d.top || 0),
                left: be6Y.x - (dl8d.left || 0),
                width: G6A.offsetWidth + (dl8d.right || 0),
                height: G6A.offsetHeight + (dl8d.bottom || 0)
            }
        };
        return function (e6c) {
            e6c = e6c || Z6T;
            this.Ub5g = e6c.event;
            this.bXN3x(e6c.align);
            if (!!this.Ub5g) this.xi4m = this.bXA3x(e6c.target, e6c.delta, this.Ub5g);
            this.boR2x = bXq3x(e6c.target, e6c.delta);
            this.bEh7a = !!e6c.fitable;
            this.L6F();
            return this
        }
    }()
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), N6H = c6e("nej.ui"), b6f,
        K6E;
    if (!!N6H.Ax5C) return;
    N6H.Ax5C = NEJ.C();
    b6f = N6H.Ax5C.O6I(N6H.XS6M);
    K6E = N6H.Ax5C.cl7e;
    N6H.Ax5C.czC0x = function () {
        var bXi3x = function (d6d, D6x, fv8n, jL0x, MV9M) {
            var cv7o, J6D = D6x + "-i", Q6K = fv8n.wY4c, bDG7z = !!jL0x.noclear, bDE7x = !!jL0x.toggled;
            if (k6e.gr9i(jL0x.onbeforeclick)) {
                var Vi5n = jL0x.noclear, bXa3x = jL0x.toggled;
                try {
                    jL0x.onbeforeclick(jL0x)
                } catch (e) {
                }
                bDG7z = !!jL0x.noclear;
                bDE7x = !!jL0x.toggled;
                jL0x.toggled = bXa3x;
                jL0x.noclear = Vi5n
            }
            var FT7M = Q6K[J6D];
            if (bDE7x && !!FT7M) {
                FT7M.br7k();
                return
            }
            h6b.bf6Z(d6d);
            if (!bDG7z) {
                h6b.z6t(document, "click");
                cv7o = fv8n.A6u(jL0x)
            } else {
                cv7o = fv8n.crh8Z(jL0x, !0)
            }
            Q6K[J6D] = cv7o;
            cv7o.vF3x("onbeforerecycle", function () {
                delete Q6K[J6D]
            });
            cv7o.boJ2x(MV9M)
        };
        return function (f6b, e6c) {
            f6b = a5f.B6v(f6b);
            if (!f6b) return this;
            if (!this.wY4c) this.wY4c = {};
            var D6x = a5f.kZ0x(f6b);
            if (!!this.wY4c[D6x]) return this;
            e6c = NEJ.X({}, e6c);
            var MV9M = NEJ.EX({align: "", delta: null, fitable: !1}, e6c);
            MV9M.target = D6x;
            e6c.destroyable = !0;
            if (!e6c.fixed) {
                MV9M.fitable = !0;
                e6c.parent = document.body
            }
            this.wY4c[D6x] = [D6x, e6c.event || "click", bXi3x.en8f(null, D6x, this, e6c, MV9M)];
            h6b.s6m.apply(h6b, this.wY4c[D6x]);
            return this
        }
    }();
    N6H.Ax5C.czF0x = function (f6b) {
        if (!this.wY4c) return this;
        var D6x = a5f.kZ0x(f6b), d6d = this.wY4c[D6x];
        if (!d6d) return this;
        delete this.wY4c[D6x];
        h6b.mx0x.apply(h6b, d6d);
        var cv7o = this.wY4c[D6x + "-i"];
        if (!!cv7o) cv7o.br7k();
        return this
    };
    b6f.brK4O = function () {
        return N6H.TP5U.A6u(this.bW7P)
    };
    b6f.Pw3x = function () {
        K6E.Pw3x.apply(this, arguments);
        this.bW7P.top = null;
        this.bW7P.left = null;
        this.bW7P.nostop = !1
    };
    b6f.boJ2x = function (e6c) {
        if (!!this.om1x) this.om1x.boJ2x(e6c);
        return this
    }
})();
(function () {
    var c6e = NEJ.P, ba6U = c6e("nej.ui"), n6h = c6e("nm.l"), b6f, K6E;
    n6h.boE2x = NEJ.C();
    b6f = n6h.boE2x.O6I(ba6U.Ax5C);
    b6f.bj6d = function (e6c) {
        e6c.nohack = true;
        this.bk6e(e6c)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), n6h = c6e("nm.l"), b6f, K6E;
    n6h.X6R = NEJ.C();
    b6f = n6h.X6R.O6I(n6h.boE2x);
    K6E = n6h.X6R.cl7e;
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.ez8r = e6c.type || 1
    };
    b6f.bS7L = function () {
        this.cc7V();
        this.m6g = a5f.no1x(this.bWT3x());
        var i6c = a5f.db8T(this.m6g);
        this.pN1x = i6c[0];
        this.cp7i = i6c[1]
    };
    b6f.bWT3x = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b6f.Jv8n = function () {
        var C6w = {}, cb7U = this.m6g.style, jj0x = a5f.oQ1x(), nr1x = {left: jj0x.scrollLeft, top: jj0x.scrollTop},
            dl8d = {left: jj0x.clientWidth - this.m6g.offsetWidth, top: jj0x.clientHeight - this.m6g.offsetHeight};
        C6w.top = Math.max(0, nr1x.top + dl8d.top / 2);
        C6w.left = Math.max(0, nr1x.left + dl8d.left / 2);
        this.om1x.gj9a(C6w)
    };
    b6f.L6F = function (e6c) {
        K6E.L6F.call(this);
        this.Jv8n();
        this.ez8r == 1 ? a5f.eR8J(this.pN1x, "u-icn-32", "u-icn-31") : a5f.eR8J(this.pN1x, "u-icn-31", "u-icn-32");
        this.cp7i.innerHTML = e6c.tip || ""
    };
    window.g_showTipCard = n6h.X6R.L6F = function () {
        var eE8w;
        return function (e6c) {
            clearTimeout(eE8w);
            if (e6c.parent === undefined) e6c.parent = document.body;
            if (e6c.autoclose === undefined) e6c.autoclose = true;
            e6c.clazz = "m-sysmsg";
            !!this.eX8P && this.eX8P.S6M();
            this.eX8P = this.A6u(e6c);
            this.eX8P.L6F(e6c);
            if (e6c.autoclose) eE8w = setTimeout(this.br7k.g6a(this), 2e3)
        }.g6a(n6h.X6R)
    }();
    n6h.X6R.br7k = function () {
        !!this.eX8P && this.eX8P.br7k()
    }
})();
(function () {
    var c6e = NEJ.P, x6r = c6e("nej.j"), k6e = c6e("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        x6r.bp7i = x6r.bp7i.er8j(function (d6d) {
            e6c = d6d.args[1];
            e6c.query = e6c.query || {};
            if (k6e.fw8o(e6c.query)) e6c.query = k6e.hD9u(e6c.query);
            e6c.query.ref = "mail"
        })
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, fj8b = NEJ.R, H6B = c6e("nej.ut"), k6e = c6e("nej.u"), h6b = c6e("nej.v"),
        x6r = c6e("nej.j"), q6k = c6e("nm.d"), n6h = c6e("nm.l"), J6D = "playlist-tracks_", b6f;
    q6k.ff8X({
        "playlist_my-list": {
            url: "/api/user/playlist", type: "GET", format: function (P6J, e6c) {
                this.bWS3x(P6J.playlist);
                return {total: 0, list: fj8b}
            }, onerror: function () {
                this.z6t("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create", format: function (P6J, e6c) {
                var mD1x = P6J.playlist;
                mD1x.creator = GUser;
                mD1x.isHost = !0;
                mD1x.typeFlag = "playlist";
                return mD1x
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.hw9n, "listchange", d6d)
            }, onmessage: function () {
                var lU0x = {507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cg7Z) {
                    n6h.X6R.L6F({tip: lU0x[cg7Z] || "创建失败", type: 2})
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete", type: "GET", filter: function (e6c) {
                e6c.id = e6c.data.pid
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.hw9n, "listchange", d6d)
            }, onmessage: function () {
                var lU0x = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cg7Z) {
                    n6h.X6R.L6F({tip: lU0x[cg7Z] || "删除失败", type: 2})
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET", url: "/api/playlist/subscribe", filter: function (e6c) {
                var eJ8B = e6c.ext || {};
                e6c.ext = NEJ.X(eJ8B, e6c.data);
                e6c.data = {id: e6c.ext.id}
            }, format: function (P6J, e6c) {
                n6h.X6R.L6F({tip: "收藏成功" + (P6J.point > 0 ? ' 获得<em class="s-fc6">' + P6J.point + "积分</em>" : "")});
                var p6j = e6c.ext;
                p6j.subscribedCount++;
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.bWI3x, "listchange", d6d);
                h6b.z6t(q6k.bWI3x, "itemchange", {attr: "subscribedCount", data: d6d.data})
            }, onmessage: function () {
                var lU0x = {404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！"};
                return function (cg7Z) {
                    n6h.X6R.L6F({type: 2, tip: lU0x[cg7Z] || "收藏失败，请稍后再试！"})
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe", type: "GET", filter: function (e6c) {
                e6c.id = e6c.data.id = e6c.data.pid
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.hw9n, "listchange", d6d)
            }, onmessage: function () {
                var lU0x = {404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！"};
                return function (cg7Z) {
                    n6h.X6R.L6F({tip: lU0x[cg7Z], type: 2})
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (e6c) {
                var j6d = e6c.data, VL6F = {};
                VL6F["playlist-update-name"] = {id: j6d.id, name: j6d.name};
                VL6F["playlist-update-tag"] = {id: j6d.id, tags: j6d.tags.join(";")};
                VL6F["playlist-update-desc"] = {id: j6d.id, desc: j6d.description};
                e6c.data = VL6F;
                e6c.ext = j6d
            },
            format: function (T6N, pH1x, MO9F, e6c) {
                if (T6N.code == 200 && pH1x.code == 200 && MO9F.code == 200) {
                    e6c.ext.allSuccess = true;
                    n6h.X6R.L6F({tip: "保存成功"})
                } else if (T6N.code == 407 || pH1x.code == 407 || MO9F.code == 407) {
                    e6c.ext.allSuccess = false;
                    n6h.X6R.L6F({type: 2, tip: "输入内容包含关键字"})
                } else {
                    e6c.ext.allSuccess = false;
                    n6h.X6R.L6F({type: 2, tip: "保存失败"})
                }
                return this.ex8p(e6c.ext.id)
            },
            finaly: function (d6d, e6c) {
                h6b.z6t(q6k.hw9n, "listchange", d6d)
            },
            onmessage: function (cg7Z) {
                n6h.X6R.L6F({type: 2, tip: "保存失败"})
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name", format: function (P6J, e6c) {
                var p6j = this.ex8p(e6c.ext.id);
                if (P6J.code == 200) p6j.name = e6c.ext.name;
                return P6J
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update", format: function (P6J, e6c) {
                var p6j = this.ex8p(e6c.ext.id);
                if (P6J.code == 200) p6j.tags = e6c.ext.tags;
                return P6J
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update", format: function (P6J, e6c) {
                var p6j = this.ex8p(e6c.ext.id);
                if (P6J.code == 200) p6j.description = e6c.ext.description;
                return P6J
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update", filter: function (e6c) {
                e6c.url = e6c.data.url;
                delete e6c.data.url
            }, format: function (P6J, e6c) {
                n6h.X6R.L6F({tip: "保存成功"});
                var p6j = this.ex8p(e6c.data.id);
                p6j.coverImgUrl = e6c.url;
                e6c.ext = p6j;
                return p6j
            }, onmessage: function (cg7Z) {
                n6h.X6R.L6F({type: 2, tip: "保存失败"})
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.hw9n, "itemchange", {attr: "coverImgUrl", data: e6c.ext})
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount", type: "GET", format: function (P6J, e6c) {
                var mD1x = this.ex8p(e6c.data.id);
                if (!mD1x) return;
                mD1x.playCount++;
                h6b.z6t(q6k.hw9n, "itemchange", {attr: "playcount", data: mD1x})
            }
        }
    });
    q6k.hw9n = NEJ.C();
    b6f = q6k.hw9n.O6I(q6k.hn9e);
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bDv7o = function () {
        var de8W = GUser.userId;
        this.la0x({limit: 1001, key: "playlist_my-" + de8W, data: {offset: 0, limit: 1001, uid: de8W}})
    };
    b6f.bWS3x = function (i6c) {
        var de8W = GUser.userId, iv9m = [], bDr7k = [];
        k6e.bb6V(i6c, function (p6j) {
            p6j.typeFlag = "playlist";
            if (p6j.creator && p6j.creator.userId == de8W) {
                if (p6j.specialType == 5) p6j.name = "我喜欢的音乐";
                p6j.isHost = !0;
                iv9m.push(p6j)
            } else {
                bDr7k.push(p6j)
            }
        });
        this.ui3x("playlist_new-" + de8W, iv9m);
        this.ui3x("playlist_fav-" + de8W, bDr7k)
    };
    b6f.bWw3x = function (j6d) {
        this.cn7g("playlist-update-cover", {data: j6d})
    };
    b6f.czN0x = function () {
        var MM9D = this.bWu3x.B6v("host-plist");
        if (MM9D.length == 0) {
            return
        }
        if (MM9D.length == 1 && MM9D[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = MM9D.length; i < len; i++) {
            var p6j = MM9D[i];
            if (p6j.trackCount > 0) return p6j.id
        }
        return this.bWu3x.B6v("host-plist")[0].id
    };
    b6f.bWs3x = function (D6x) {
        if (GUser && GUser.userId > 0) {
            this.cn7g("playlist-upcount", {data: {id: D6x}})
        }
    };
    b6f.Dd6X = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b6f.czP0x = function () {
        return GUser.userId
    };
    b6f.bow2x = function (p6j) {
        if (p6j.userId == GUser.userId && p6j.specialType == 5) p6j.name = "我喜欢的音乐";
        h6b.z6t(this.constructor, "itemchange", {data: this.zW5b(p6j)});
        return p6j
    };
    H6B.fE8w.A6u({element: q6k.hw9n, event: ["listchange", "playcountchange", "itemchange"]})
})();
(function () {
    var c6e = NEJ.P, fj8b = NEJ.R, bn7g = NEJ.F, Z6T = NEJ.O, H6B = c6e("nej.ut"), h6b = c6e("nej.v"),
        k6e = c6e("nej.u"), l6f = c6e("nm.x"), q6k = c6e("nm.d"), n6h = c6e("nm.l"), b6f, K6E;
    q6k.ff8X({
        "program-get": {
            url: "/api/dj/program/detail", format: function (P6J) {
                return P6J.program
            }
        }, "program_djradio-list": {
            type: "GET", url: "/api/dj/program/byradio", filter: function (e6c) {
                e6c.data.limit = 1e3;
                delete e6c.data.id
            }, format: function (P6J, e6c) {
                var bDg7Z = [], oK1x = P6J.programs;
                if (oK1x) {
                    for (var i = 0, l = oK1x.length; i < l; i++) {
                        if (oK1x[i].programFeeType < 10 || oK1x[i].buyed) {
                            bDg7Z.push(oK1x[i])
                        }
                    }
                }
                return bDg7Z
            }
        }, "program_fav-list": {
            url: "/api/djprogram/subscribed/paged", format: function (P6J, e6c) {
                return P6J.programs
            }, onerror: "onlisterror"
        }, "program_fav-add": {
            url: "/api/djprogram/subscribe", filter: function (e6c) {
                e6c.ext = e6c.data;
                e6c.data = {id: e6c.ext.id};
                e6c.id = e6c.data.id
            }, format: function (P6J, e6c) {
                n6h.X6R.L6F({tip: "收藏成功"});
                var p6j = e6c.ext;
                p6j.subscribedCount++;
                p6j.subscribed = !0;
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.qj2x, "listchange", d6d)
            }, onmessage: function () {
                var lU0x = {404: "节目不存在！", 501: "节目已收藏！"};
                return function (cg7Z) {
                    n6h.X6R.L6F({type: 2, tip: lU0x[cg7Z] || "收藏失败！"})
                }
            }()
        }, "program_fav-del": {
            url: "/api/djprogram/unsubscribe", finaly: function (d6d, e6c) {
                h6b.z6t(q6k.qj2x, "listchange", d6d)
            }, onmessage: function () {
                var lU0x = {404: "节目不存在！", 502: "没有收藏此节目！"};
                return function (cg7Z) {
                    l6f.bou2x({txt: lU0x[cg7Z] || "取消收藏失败！"})
                }
            }()
        }, "program-update-count": {
            type: "GET", url: "/api/dj/program/listen", filter: function (e6c) {
                var p6j = this.ex8p(e6c.data.id) || Z6T;
                e6c.ext = (p6j.listenerCount || 0) + 1
            }, format: function (P6J, e6c) {
                var p6j = this.ex8p(e6c.data.id);
                if (!!p6j) {
                    p6j.listenerCount = Math.max(e6c.ext, p6j.listenerCount || 0)
                }
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.qj2x, "itemchange", {attr: "playCount", data: this.ex8p(e6c.data.id)})
            }
        }, "program-like": {
            url: "/api/resource/like", filter: function (e6c) {
                e6c.data = {threadId: "A_DJ_1_" + e6c.id}
            }, format: function (P6J, e6c) {
                var p6j = e6c.ext.data || this.ex8p(e6c.id);
                p6j.liked = true;
                p6j.likedCount++;
                e6c.ext.data = p6j;
                try {
                    top.player.setLike(p6j)
                } catch (e) {
                }
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.qj2x, "itemchange", {attr: "likedCount", data: e6c.ext.data})
            }
        }, "program-unlike": {
            url: "/api/resource/unlike", filter: function (e6c) {
                e6c.data = {threadId: "A_DJ_1_" + e6c.id}
            }, format: function (P6J, e6c) {
                var p6j = e6c.ext.data || this.ex8p(e6c.id);
                p6j.liked = false;
                p6j.likedCount--;
                e6c.ext.data = p6j;
                try {
                    top.player.setLike(p6j)
                } catch (e) {
                }
                return p6j
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.qj2x, "itemchange", {attr: "likedCount", data: e6c.ext.data})
            }
        }
    });
    q6k.qj2x = NEJ.C();
    b6f = q6k.qj2x.O6I(q6k.hn9e);
    b6f.czT0x = function () {
        var de8W = GUser.userId;
        this.la0x({limit: 1001, key: "program_fav-" + de8W, data: {offset: 0, limit: 1e3, uid: de8W}})
    };
    b6f.czV0x = function (cT7M) {
        var oH1x = cT7M[this.wm4q];
        l6f.bVM3x(4, function (Q6K) {
            Q6K.ui3x("track_program-" + oH1x, cT7M.songs)
        });
        delete cT7M.songs;
        var bJ7C = cT7M.mainSong;
        l6f.bVM3x(4, function (Q6K) {
            Q6K.ui3x("track_program_main-" + oH1x, !bJ7C ? [] : [bJ7C])
        });
        cT7M.mainSong = (bJ7C || Z6T).id
    };
    b6f.czW0x = function (D6x) {
        var cT7M = this.ex8p(D6x), de8W = localCache.TV5a("host.profile.userId");
        return !!cT7M && cT7M.dj.userId == de8W
    };
    b6f.czX0x = function (D6x) {
        return !1
    };
    b6f.bow2x = function (p6j) {
        h6b.z6t(this.constructor, "itemchange", {attr: "detail", data: this.zW5b(p6j)});
        return p6j
    };
    b6f.bWs3x = function (D6x) {
        this.cn7g("program-update-count", {data: {id: D6x}})
    };
    l6f.bCI7B = function (e6c) {
        var Q6K = q6k.qj2x.A6u({
            onitemadd: function () {
                (e6c.onsuccess || bn7g)()
            }, onerror: function () {
                (e6c.onerror || bn7g)()
            }
        });
        if (e6c.data.liked) {
            Q6K.MI9z(e6c.data)
        } else {
            Q6K.vy3x(e6c.data)
        }
    };
    b6f.vy3x = function (cT7M) {
        if (!l6f.gN9E()) return;
        var co7h = {ext: {}};
        if (k6e.lg0x(cT7M)) {
            co7h.id = cT7M.id;
            co7h.ext.data = cT7M
        } else {
            co7h.id = cT7M
        }
        this.cn7g("program-like", co7h)
    };
    b6f.MI9z = function (cT7M) {
        if (!l6f.gN9E()) return;
        var co7h = {ext: {}};
        if (k6e.lg0x(cT7M)) {
            co7h.id = cT7M.id;
            co7h.ext.data = cT7M
        } else {
            co7h.id = cT7M
        }
        this.cn7g("program-unlike", co7h)
    };
    H6B.fE8w.A6u({element: q6k.qj2x, event: ["listchange", "itemchange"]})
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, fj8b = NEJ.R, H6B = c6e("nej.ut"), k6e = c6e("nej.u"), h6b = c6e("nej.v"),
        x6r = c6e("nej.j"), q6k = c6e("nm.d"), n6h = c6e("nm.l"), l6f = c6e("nm.x"), J6D = "playlist-tracks_",
        l6f = c6e("nm.x"), b6f;
    q6k.ff8X({
        "track-get": {
            url: "/api/v3/song/detail", filter: function (e6c) {
                e6c.data.c = JSON.stringify([{id: e6c.data.id}])
            }, format: function (P6J, e6c) {
                var bg6a = l6f.DH6B(P6J.songs[0]);
                bg6a.privilege = P6J.privileges[0];
                return bg6a
            }
        }, "track_playlist-list": {
            url: "/api/v3/playlist/detail", filter: function (e6c) {
                e6c.data.n = 1e3
            }, format: function (P6J, e6c) {
                var gW9N = [];
                this.sw2x.bow2x(P6J.playlist);
                k6e.bb6V(P6J.playlist.tracks, function (bJ7C, r6l) {
                    var bCA7t = l6f.DH6B(bJ7C);
                    bCA7t.privilege = P6J.privileges[r6l];
                    gW9N.push(bCA7t)
                }, this);
                return gW9N
            }
        }, "track_album-list": {
            url: "/api/v1/album/{id}", format: function (P6J, e6c) {
                var gW9N = [];
                k6e.bb6V(P6J.songs, function (bg6a) {
                    gW9N.push(l6f.DH6B(bg6a))
                });
                return gW9N
            }
        }, "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks", filter: function (e6c) {
                var bv7o = {}, j6d = e6c.data, bVg3x = this.hi9Z(e6c.key) || [];
                DL6F = [];
                k6e.bb6V(bVg3x, function (bJ7C) {
                    var D6x = k6e.lg0x(bJ7C) ? bJ7C.id : bJ7C;
                    bv7o[D6x] = true
                });
                e6c.ext = [];
                k6e.bb6V(j6d.tracks, function (bJ7C) {
                    var D6x = k6e.lg0x(bJ7C) ? bJ7C.id : bJ7C;
                    if (!bv7o[D6x]) {
                        DL6F.push(D6x);
                        bv7o[D6x] = true;
                        e6c.ext.push(bJ7C)
                    }
                });
                j6d.trackIds = JSON.stringify(DL6F);
                j6d.op = "add";
                if (!DL6F.length) {
                    e6c.value = {code: 502}
                }
            }, format: function (P6J, e6c) {
                n6h.X6R.L6F({tip: "已添加至歌单"});
                var mD1x = this.sw2x.ex8p(e6c.data.pid);
                if (!!P6J.coverImgUrl) mD1x.coverImgUrl = P6J.coverImgUrl;
                k6e.mt0x(e6c.ext, function (bJ7C) {
                    this.xJ4N(e6c, k6e.lg0x(bJ7C) ? bJ7C : null);
                    if (!!mD1x) mD1x.trackCount++
                }, this);
                h6b.z6t(q6k.hw9n, "itemchange", {data: mD1x || {}, cmd: "add"});
                this.z6t("onaddsuccess");
                return null
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.vw3x, "listchange", {key: e6c.key, action: "refresh"});
                var oH1x = e6c.data.pid, cu7n = this.jn0x(e6c.key)
            }, onmessage: function () {
                var lU0x = {502: "歌曲已存在！", 505: "歌单已满！"};
                return function (cg7Z) {
                    setTimeout(function () {
                        n6h.X6R.L6F({tip: lU0x[cg7Z] || "添加失败，请稍后再试！", type: 2})
                    }, 0)
                }
            }()
        }, "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks", filter: function (e6c) {
                var j6d = e6c.data;
                e6c.ext = j6d.trackIds;
                j6d.trackIds = JSON.stringify(j6d.trackIds);
                j6d.op = "del"
            }, format: function (P6J, e6c) {
                var mD1x = this.sw2x.ex8p(e6c.data.pid);
                k6e.bb6V(e6c.ext, function (D6x) {
                    this.bpM3x({id: D6x, key: "track_playlist-" + e6c.data.pid}, !0);
                    if (!!mD1x) mD1x.trackCount = Math.max(0, mD1x.trackCount - 1)
                }, this);
                h6b.z6t(q6k.hw9n, "itemchange", {data: mD1x || {}, cmd: "del"});
                return null
            }, finaly: function (d6d, e6c) {
                h6b.z6t(q6k.vw3x, "listchange", {key: e6c.key, action: "refresh"})
            }, onmessage: function (cg7Z) {
                l6f.bou2x({text: "歌曲删除失败！"})
            }
        }, "track_program-list": {
            url: "/api/dj/program/detail", format: function (P6J, e6c) {
                return this.bCy7r.bow2x(P6J.program).songs
            }, onerror: "onlisterror"
        }, "track_listen_record-list": {
            url: "/api/v1/play/record", format: function (P6J, e6c) {
                var i6c = [];
                if (e6c.data.type == -1) {
                    if (P6J.weekData && P6J.weekData.length) {
                        e6c.data.type = 1
                    } else {
                        e6c.data.type = 0
                    }
                }
                if (e6c.data.type == 1) {
                    i6c = this.bCw7p(P6J.weekData)
                } else {
                    i6c = this.bCw7p(P6J.allData)
                }
                return i6c
            }, onerror: "onlisterror"
        }, "track_day-list": {
            url: "/api/v2/discovery/recommend/songs", format: function (P6J, e6c) {
                var nn1x = [], i6c = P6J.recommend || [];
                k6e.bb6V(i6c, function (bg6a, r6l) {
                    nn1x.push({
                        action: "recommendimpress",
                        json: {alg: bg6a.alg, scene: "user-song", position: r6l, id: bg6a.id}
                    })
                });
                this.kU0x.YJ6D(nn1x);
                e6c.limit = i6c.length;
                return i6c
            }, onerror: "onlisterror"
        }, "track_lyric-get": {
            type: "GET", url: "/api/song/lyric", filter: function (e6c) {
                e6c.data.lv = 0;
                e6c.data.tv = 0
            }, format: function (o6i, e6c) {
                return o6i
            }, onload: "onlyricload", onerror: "onlyricerror"
        }
    });
    q6k.vw3x = NEJ.C();
    b6f = q6k.vw3x.O6I(q6k.hn9e);
    b6f.cs7l = function () {
        this.cx7q();
        this.sw2x = q6k.hw9n.A6u();
        this.bCy7r = q6k.qj2x.A6u();
        this.kU0x = q6k.hM9D.A6u()
    };
    b6f.bCw7p = function (i6c) {
        var o6i = [], fc8U = 0;
        k6e.bb6V(i6c, function (p6j, r6l) {
            var bg6a = l6f.DH6B(p6j.song);
            if (r6l == 0) {
                fc8U = p6j.score
            }
            bg6a.max = fc8U;
            bg6a.playCount = p6j.playCount;
            bg6a.score = p6j.score;
            o6i.push(bg6a)
        });
        return o6i
    };
    H6B.fE8w.A6u({element: q6k.vw3x, event: ["listchange"]})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, cW7P = c6e("nm.pc");
    var boj2x = {playlist: "A_PL_0_", dj: "A_DJ_1_", program: "A_DJ_1_", album: "R_AL_3_", song: "R_SO_4_"};
    var qW2x = function (bQ7J) {
        var NQ3x = "orpheus://orpheus";
        if (GEnvType == "local") NQ3x = "http://igame.163.com";
        window.top.postMessage(JSON.stringify(bQ7J), NQ3x)
    };
    var bUW3x = function (lH0x) {
        var kd0x = "http://" + location.host + "/",
            ME9v = /(igame|music)\.163\.com\/(song|album|playlist|dj|event|artist|mv|djradio|topic|video|program|user\/home|activity)\?id=(\w+)(&uid=(\d+))?/,
            fn8f = ME9v.exec(lH0x);
        if (!fn8f) return bUV3x(lH0x);
        var hd9U = fn8f[2], hc9T = fn8f[3], de8W = fn8f[4] || "", iH9y = "";
        switch (hd9U) {
            case"album":
                iH9y = "#/m/album/comment/?rid=" + boj2x[hd9U] + hc9T + "&id=" + hc9T;
                break;
            case"playlist":
                iH9y = "#/m/playlist/comment/?rid=" + boj2x[hd9U] + hc9T + "&id=" + hc9T;
                break;
            case"song":
            case"dj":
            case"program":
                iH9y = "#/m/song?rid=" + boj2x[hd9U] + hc9T;
                break;
            case"event":
                iH9y = "#/m/friend/event/?id=" + hc9T + "&uid=" + de8W;
                break;
            case"user/home":
                iH9y = "#/m/personal/?uid=" + hc9T;
                break;
            case"mv":
                iH9y = "#/m2/mv/?id=" + hc9T;
                break;
            case"activity":
                iH9y = "#/m/friend/activity?id=" + hc9T;
                break;
            case"video":
                iH9y = "#/m2/mv/?id=" + hc9T + "&type=1";
                break;
            default:
                iH9y = "#/m/" + hd9U + "/?id=" + hc9T
        }
        return kd0x + iH9y
    };
    var bUV3x = function (lH0x) {
        var bUN3x = /http:\/\/player\.youku\.com\/embed\/(.+)/;
        var fn8f = bUN3x.exec(lH0x);
        if (fn8f) return "http://v.youku.com/v_show/id_" + fn8f[1];
        return lH0x
    };
    cW7P.eu8m = function (hd9U, hc9T) {
        qW2x({name: "play", args: {type: hd9U, id: hc9T}})
    };
    cW7P.fH8z = function () {
        qW2x({name: "pause"})
    };
    cW7P.AJ5O = function (lH0x) {
        qW2x({name: "open", args: {link: bUW3x(lH0x)}})
    };
    cW7P.mr0x = function (hd9U, hc9T) {
        qW2x({name: "share", args: {type: hd9U, id: hc9T}})
    };
    cW7P.bCo7h = function (hd9U, hc9T) {
        qW2x({name: "comment", args: {type: hd9U, id: hc9T}})
    };
    cW7P.bUH3x = function () {
        qW2x({name: "init"})
    };
    cW7P.MD9u = function (ch7a) {
        qW2x({name: "setHeight", args: {height: ch7a}})
    };
    cW7P.ji0x = function (bE7x, dw8o) {
        qW2x({name: "toast", args: {message: bE7x || "", state: dw8o}})
    };
    cW7P.XR6L = function (lH0x) {
        qW2x({name: "login", args: {link: lH0x}})
    };
    cW7P.bCl7e = function (AO5T) {
        qW2x({name: "topbar", args: {show: !!AO5T}})
    };
    cW7P.bUA3x = function (bu7n) {
        qW2x({name: "refreshtopbar", args: {info: bu7n}})
    };
    cW7P.bUy3x = function (bs7l, r6l) {
        qW2x({name: "big", args: {arr: bs7l, index: r6l}})
    };
    cW7P.Jc8U = function (cK7D) {
        qW2x({name: "download", args: {img: cK7D}})
    }
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++) if (f.charAt(c) == g[a]) {
                    b.push(a.toString(16));
                    break
                }
            }
            return decodeURIComponent(b.join(""))
        }
    }

    var k = (new J).d, d = (new J).d, e = (new J).d, f = (new J).d, g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15], l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h) for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]); else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d,
                        f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74], e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g); else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g); else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]); else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++) if (h.charAt(d) == b[27]) if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]); else throw Error(b[146]); else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23], g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {
                        }
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }

                        var d = [c[21], c[141], B[6]], l = [], f = c[139], e = b[327], g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]), g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null, h = null, d = [];
                        try {
                            h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) {
                        }
                        if (!a) return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) {
                        }
                        try {
                            d.push(e(a, h))
                        } catch (k) {
                        }
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76], l = b[240], g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](), X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]), d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try {
                            C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h)
                        } catch (e) {
                            d.push(b[349])
                        }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]), d = h[B[7]](b[354]), f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [], f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b) if (z && b.forEach === z) b.forEach(h, void 0); else if (b.length === +b.length) for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++) ; else for (c in b) if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }

                    var z = Array.prototype.forEach, I = Array.prototype.map,
                        n = {e: M, j: !0, i: !0, h: !0, b: !0, a: !0};
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = [], l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) {
                                e = !1
                            }
                            if (e) try {
                                h.push(k()), n.b && h.push(f())
                            } catch (E) {
                                h.push(b[59])
                            }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]), p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) {
                            p += a[541], E++
                        }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) {
                            u++, H += C
                        }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a:{
                        if (!r(q)) for (h = a[15]; h < q.length; h++) {
                            var d = q[h];
                            if (d.g && !Ra(d)) {
                                h = d;
                                break a
                            }
                        }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a)) return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta, f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]], e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++) if (h.hasOwnProperty(d[f])) {
                            var g = b[29] + d[f] + b[262], k;
                            k = b[0] + h[d[f]];
                            k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                            e += g + k + b[191]
                        }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) {
                    window[pa] = a
                }

                function Ea(a) {
                    window[qa] = a
                }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15])) for (var c = a[15]; c < K.length; c++) {
                        var d = K[c];
                        (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                    }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0, t = {v: b[227]}, l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({b: Xa, a: Ya})).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1
                    }
                    try {
                        var v = l = Ca(t), t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y), p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301], z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F); else {
                            var n = A.length, J = a[15], J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null; else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null; else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null; else if (null == D) ia = w; else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E), ja = f(xa), ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null; else if (G.length == a[15]) ka = b[0]; else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;) if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya; else {
                                    u.push(k(G, R, G.length - R));
                                    break
                                }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({ec: b[43], em: ga.message}), h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }

                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0, Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]], y = window[c[6]], N = a[16], T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158], L = a[158], ha = a[23], va = a[23], d = function (b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    }, Za = b[345], S = b[299], V = c[100], fa = a[91], ea = b[275], Ta = ea.length, sa = a[444],
                    ta = a[396], Ya = !1, Xa = !1, O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56], A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A), pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(), K = function (c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1; else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () {
})();
(function () {
    var bCg7Z;
    var uP3x = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var bUf2x = 0;
    var bBY7R = 0;
    var bBX7Q = 1;
    var bBV7O = 0;
    var boc2x = "";
    var bBM7F = "";
    var bBJ7C = "";
    var Yo6i = "";
    var Yp6j = "";
    var boa2x = "";
    var bBG6A = 0;
    var bBF6z = "";
    var In7g = "";
    var ER6L = 0;
    var bnZ2x = ntes_get_domain();
    var bnX2x = null;
    var czZ0x = "//analytics.163.com";
    var bTC2x = function () {
    };

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bnZ2x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bnZ2x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bnZ2x
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "", n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {
                    }
                }
            }
        }
        return f
    }

    var bTB2x = 0;
    var Mn9e = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * Mn9e))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << Mn9e) - 1;
        for (var b = 0; b < d.length * Mn9e; b += Mn9e) {
            c[b >> 5] |= (d.charCodeAt(b / Mn9e) & a) << b % 32
        }
        return c
    }

    function binl2hex(c) {
        var b = bTB2x ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }

    function ntes_get_navigation_info() {
        Yo6i = "-";
        boa2x = "-";
        Yp6j = "-";
        var c = window.self, b = window.screen, a = window.navigator;
        if (c.screen) {
            Yo6i = b.width + "x" + b.height;
            boa2x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Yo6i = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Yp6j = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Yp6j = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bBG6A = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cAa0x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || bTC2x;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        };
        a.onerror = function () {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bCg7Z;
        boc2x = escape(a || document.location);
        bBM7F = escape(m || document.title);
        bBJ7C = l === true ? "" : escape(l || document.referrer);
        bBF6z = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bnX2x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bnX2x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (boc2x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bnX2x) {
                uP3x = fetch_visitor_hash();
                bBY7R = 1;
                ntes_set_cookie_long("_ntes_nnid", uP3x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uP3x)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            uP3x = h.substr(0, o);
            ER6L = h.substr(o + 1, p - o - 1);
            if (ER6L == 0) {
                ER6L = (new Date).getTime();
                f = true
            }
            if (!uP3x) {
                uP3x = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", uP3x + "," + ER6L);
                ntes_set_cookie_long("_ntes_nuid", uP3x)
            }
            if (ER6L != 0 && b - ER6L > 365 * 86400 * 1e3) {
                ER6L = 0;
                ntes_set_cookie_long("_ntes_nnid", uP3x + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", uP3x)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q), r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }

        In7g = c("P_INFO", "P_OINFO");
        In7g = In7g ? In7g.substr(0, In7g.indexOf("|")) : "";
        bBV7O = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", uP3x, "&_nvtm=", bUf2x, "&_nvsf=", bBX7Q, "&_nvfi=", bBY7R, "&_nlag=", Yp6j, "&_nlmf=", bBG6A, "&_nres=", Yo6i, "&_nscd=", boa2x, "&_nstm=", bBV7O, "&_nurl=", boc2x, "&_ntit=", bBM7F, "&_nref=", bBJ7C, "&_nfla=", bBF6z, "&_nssn=", In7g, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bBX7Q = 0;
        neteaseTracker.callback = null
    }

    bCg7Z = "iad";
    neteaseTracker()
})();
(function () {
})();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}, l = d.lib = {}, s = function () {
    }, t = l.Base = {
        extend: function (a) {
            s.prototype = this;
            var c = new s;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function () {
                c.$super.init.apply(this, arguments)
            });
            c.init.prototype = c;
            c.$super = this;
            return c
        }, create: function () {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a
        }, init: function () {
        }, mixIn: function (a) {
            for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString)
        }, clone: function () {
            return this.init.prototype.extend(this)
        }
    }, r = l.WordArray = t.extend({
        init: function (a, c) {
            a = this.words = a || [];
            this.sigBytes = c != p ? c : 4 * a.length
        }, toString: function (a) {
            return (a || v).stringify(this)
        }, concat: function (a) {
            var c = this.words, e = a.words, j = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (j % 4) for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4); else if (65535 < e.length) for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2]; else c.push.apply(c, e);
            this.sigBytes += a;
            return this
        }, clamp: function () {
            var a = this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = u.ceil(c / 4)
        }, clone: function () {
            var a = t.clone.call(this);
            a.words = this.words.slice(0);
            return a
        }, random: function (a) {
            for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
            return new r.init(c, a)
        }
    }), w = d.enc = {}, v = w.Hex = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) {
                var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                e.push((k >>> 4).toString(16));
                e.push((k & 15).toString(16))
            }
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
            return new r.init(e, c / 2)
        }
    }, b = w.Latin1 = {
        stringify: function (a) {
            var c = a.words;
            a = a.sigBytes;
            for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
            return e.join("")
        }, parse: function (a) {
            for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
            return new r.init(e, c)
        }
    }, x = w.Utf8 = {
        stringify: function (a) {
            try {
                return decodeURIComponent(escape(b.stringify(a)))
            } catch (c) {
                throw Error("Malformed UTF-8 data")
            }
        }, parse: function (a) {
            return b.parse(unescape(encodeURIComponent(a)))
        }
    }, q = l.BufferedBlockAlgorithm = t.extend({
        reset: function () {
            this.j6d = new r.init;
            this.bBv6p = 0
        }, YP7I: function (a) {
            "string" == typeof a && (a = x.parse(a));
            this.j6d.concat(a);
            this.bBv6p += a.sigBytes
        }, AT5Y: function (a) {
            var c = this.j6d, e = c.words, j = c.sigBytes, k = this.blockSize, b = j / (4 * k),
                b = a ? u.ceil(b) : u.max((b | 0) - this.bBx6r, 0);
            a = b * k;
            j = u.min(4 * a, j);
            if (a) {
                for (var q = 0; q < a; q += k) this.bBt6n(e, q);
                q = e.splice(0, a);
                c.sigBytes -= j
            }
            return new r.init(q, j)
        }, clone: function () {
            var a = t.clone.call(this);
            a.j6d = this.j6d.clone();
            return a
        }, bBx6r: 0
    });
    l.Hasher = q.extend({
        cfg: t.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            q.reset.call(this);
            this.bnV2x()
        }, update: function (a) {
            this.YP7I(a);
            this.AT5Y();
            return this
        }, finalize: function (a) {
            a && this.YP7I(a);
            return this.Zn7g()
        }, blockSize: 16, bnW2x: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        }, bTo2x: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this.bv7o;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this.bv7o, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, bv7o: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bnV2x: function () {
            this.dW8O = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        }, bBt6n: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dW8O.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4], r = q[n + 5],
                t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11], u = q[n + 12],
                D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]), f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]), m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]), g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]), h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]), f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]), m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]), g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]), h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]), f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]), m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]), g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]), h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]), f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]), m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]), g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]), h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]), f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]), m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]), g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, Zn7g: function () {
            var b = this.j6d, n = b.words, a = 8 * this.bBv6p, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.AT5Y();
            b = this.dW8O;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b.dW8O = this.dW8O.clone();
            return b
        }
    });
    t.MD5 = v.bnW2x(r);
    t.HmacMD5 = v.bTo2x(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this.bnU2x, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this.bTh2x, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bBj6d = e;
                this.J6D = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this.bnV2x()
            }, process: function (e) {
                this.YP7I(e);
                return this.AT5Y()
            }, finalize: function (e) {
                e && this.YP7I(e);
                return this.Zn7g()
            }, keySize: 4, ivSize: 4, bnU2x: 1, bTh2x: 2, bnW2x: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Zn7g: function () {
            return this.AT5Y(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this.bBi6c;
        c ? this.bBi6c = u : c = this.bBe6Y;
        for (var d = 0; d < b; d++) e[a + d] ^= c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this.bBd6X = e;
            this.bBi6c = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bBd6X, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bBe6Y = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bBd6X, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bBe6Y = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this.bBj6d == this.bnU2x) var c = a.createEncryptor; else c = a.createDecryptor, this.bBx6r = 1;
            this.eZ8R = c.call(a, this, b && b.words)
        }, bBt6n: function (a, b) {
            this.eZ8R.processBlock(a, b)
        }, Zn7g: function () {
            var a = this.cfg.padding;
            if (this.bBj6d == this.bnU2x) {
                a.pad(this.j6d, this.blockSize);
                var b = this.AT5Y(!0)
            } else b = this.AT5Y(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        }, decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this.Wv6p(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, Wv6p: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d, b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this.Wv6p(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        bnV2x: function () {
            for (var a = this.J6D, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.bSS2x = d + 6) + 1), e = this.bSR2x = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this.bSO2x = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this.bBb6V(a, b, this.bSR2x, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this.bBb6V(a, c, this.bSO2x, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, bBb6V: function (a, b, c, d, e, j, l, f) {
            for (var m = this.bSS2x, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p.bnW2x(d)
})();

function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m)
}

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e) for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1
}

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt; else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15, c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg; else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c) if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}

var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks,
    biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        return c
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b), d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a), f = CryptoJS.AES.encrypt(e, c, {iv: d, mode: CryptoJS.mode.CBC});
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {}, i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }

    window.asrsea = d, window.ecnonasr = e
}();
(function () {
    var c6e = NEJ.P, eb8T = c6e("nej.g"), x6r = c6e("nej.j"), k6e = c6e("nej.u"), Mc9T = c6e("nm.x.ek");
    Mc9T.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Mc9T.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var c6e = NEJ.P, eb8T = c6e("nej.g"), x6r = c6e("nej.j"), k6e = c6e("nej.u"), Mc9T = c6e("nm.x.ek"),
        l6f = c6e("nm.x");
    if (x6r.bp7i.redefine) return;
    window.GEnc = true;
    var bnQ2x = function (bSH2x) {
        var o6i = [];
        k6e.bb6V(bSH2x, function (bSG2x) {
            o6i.push(Mc9T.emj[bSG2x])
        });
        return o6i.join("")
    };
    var bSA2x = x6r.bp7i;
    x6r.bp7i = function (V6P, e6c) {
        var j6d = {}, e6c = NEJ.X({}, e6c), lp0x = V6P.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V6P) && !(e6c.headers && e6c.headers[eb8T.yj4n] == eb8T.EM6G) && !e6c.noEnc) {
            if (lp0x != -1) {
                j6d = k6e.hD9u(V6P.substring(lp0x + 1));
                V6P = V6P.substring(0, lp0x)
            }
            if (e6c.query) {
                j6d = NEJ.X(j6d, k6e.fw8o(e6c.query) ? k6e.hD9u(e6c.query) : e6c.query)
            }
            if (e6c.data) {
                j6d = NEJ.X(j6d, k6e.fw8o(e6c.data) ? k6e.hD9u(e6c.data) : e6c.data)
            }
            j6d["csrf_token"] = x6r.gZ9Q("__csrf");
            V6P = V6P.replace("api", "weapi");
            e6c.method = "post";
            delete e6c.query;
            window.console.warn("param: " + JSON.stringify(j6d))
            var bAM6G = window.asrsea(JSON.stringify(j6d), bnQ2x(["流泪", "强"]), bnQ2x(Mc9T.md), bnQ2x(["爱心", "女孩", "惊恐", "大笑"]));
            e6c.data = k6e.dh8Z({params: bAM6G.encText, encSecKey: bAM6G.encSecKey})
        }
        bSA2x(V6P, e6c)
    };
    x6r.bp7i.redefine = true
})();
(function () {
    window.setTimeout(function () {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") {
            bp.src = "https://zz.bdstatic.com/linksubmit/push.js"
        } else {
            bp.src = "http://push.zhanzhang.baidu.com/push.js"
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function () {
})();
(function () {
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), dn8f = c6e("nej.p"), k6e = c6e("nej.u"), h6b = c6e("nej.v"),
        x6r = c6e("nej.j"), dz8r = c6e("nm.u"), l6f = c6e("nm.x"), q6k = c6e("nm.d"), n6h = c6e("nm.l"),
        cW7P = c6e("nm.pc"), bnK1x = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png", j6d = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }, bSx2x = function () {
            if (h6b && h6b.z6t) {
                h6b.dispatchEventalias = h6b.z6t
            }
        };
    bSx2x();
    l6f.bnJ1x = function (bJ7C) {
        if (!bJ7C || bJ7C.copyrightId === undefined || !!bJ7C.program) return false;
        if (window.GAbroad) {
            bJ7C.fee = 0;
            return true
        }
        if (bJ7C.status < 0) return true;
        var LW9N;
        if (typeof GCopyrights !== "undefined") LW9N = GCopyrights;
        try {
            if (!LW9N && !!top.GCopyrights) LW9N = top.GCopyrights
        } catch (e) {
        }
        if (LW9N) {
            var r6l = k6e.dd8V(LW9N, bJ7C.copyrightId);
            if (r6l >= 0) return true
        }
        return false
    };
    l6f.bnI1x = function () {
        var AZ5e = /^\/m\/(song|album|artist|playlist|dj|search)\?/, vc3x = {
            2: "artist",
            13: "playlist",
            17: "dj",
            19: "album",
            18: "song",
            31: "toplist",
            32: "searchsong",
            33: "searchlyric",
            34: "event",
            70: "djradio",
            24: "day",
            50: "record"
        }, bSr2x = {
            song: "单曲",
            album: "专辑",
            artist: "歌手",
            playlist: "歌单",
            dj: "电台节目",
            searchsong: "单曲搜索",
            searchlyric: "歌词搜索",
            toplist: "榜单",
            event: "动态",
            djradio: "电台",
            day: "每日歌曲推荐",
            record: "听歌排行榜"
        };
        var bSp2x = function (J6D, j6d, LP9G) {
            switch (J6D) {
                case"event":
                    j6d = j6d.split("|");
                    return "/event?id=" + j6d[0] + "&uid=" + j6d[1];
                case"searchsong":
                case"searchlyric":
                    var t6n = J6D == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j6d) + "&type=" + t6n;
                case"toplist":
                    return "/discover/toplist?id=" + j6d + "&_hash=songlist-" + LP9G;
                case"day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + LP9G;
                    ;
                case"record":
                    j6d = j6d.split("|");
                    return "/user/songs/rank?id=" + j6d[0] + "&cat=" + j6d[1];
                    break;
                default:
                    return "/" + J6D + "?id=" + j6d + "&_hash=songlist-" + LP9G
            }
        };
        return function (dY8Q, LP9G) {
            if (!dY8Q) return null;
            var II8A = dY8Q.fid || (dY8Q.type != 18 ? dY8Q.type : null), bnH1x = dY8Q.fdata || dY8Q.rid,
                bAF6z = dY8Q.page || dY8Q.fhref;
            var J6D = vc3x[II8A];
            if (!J6D) {
                var yC4G = (bAF6z || "").match(AZ5e);
                if (yC4G) J6D = yC4G[1]
            }
            if (!J6D) return null;
            return {title: bSr2x[J6D], link: !vc3x[II8A] ? bAF6z : bSp2x(J6D, bnH1x, LP9G), fid: II8A, fdata: bnH1x}
        }
    }();
    l6f.baX7Q = function (kT0x) {
        var df8X = kT0x;
        if (typeof GUser !== "undefined" && GUser.userId > 0) df8X = GUser;
        return df8X
    };
    l6f.gN9E = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l6f.Ig7Z = function () {
        var AZ5e = /#(.*?)$/;
        return function (gi9Z) {
            var jd0x = gi9Z === false ? location : top.location;
            return AZ5e.test(jd0x.href) ? RegExp.$1 : ""
        }
    }();
    l6f.Bf5k = function () {
        var Bh5m = a5f.cY7R("audio"), bSg2x = Bh5m.canPlayType && Bh5m.canPlayType("audio/mpeg");
        if (bSg2x) return 2;
        var bSd2x = l6f.bnD1x().supported;
        if (bSd2x) return 1;
        return 0
    };
    l6f.bnD1x = function () {
        var gb9S, bnB1x = !1, bnA1x = "";
        if (dn8f.dj8b.browser == "ie") {
            try {
                gb9S = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                gb9S = null
            }
            if (gb9S) {
                bnB1x = !0;
                bnA1x = gb9S.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                gb9S = navigator.plugins["Shockwave Flash"];
                if (gb9S) {
                    bnB1x = !0;
                    bnA1x = gb9S.description
                }
            }
        }
        return {supported: bnB1x, version: bnA1x}
    };
    l6f.rf2x = function () {
        return "网易云音乐"
    };
    l6f.bRS2x = function () {
        return j6d
    };
    l6f.bAv6p = function (cJ7C) {
        var D6x = j6d[cJ7C];
        return D6x == null ? "" : bnK1x.replace("{ID}", D6x)
    };
    l6f.vj3x = function (bl6f, dT8L, Bm5r) {
        if (!bl6f) return "";
        if (!!Bm5r) {
            bl6f = l6f.bRP2x(bl6f)
        }
        return l6f.bbC8u(l6f.bRM2x(bl6f, dT8L))
    };
    l6f.bbI8A = function () {
        var ME9v = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }, bny1x = {
            LINK: '<a href="${url}" class="${klass}">${value}</a>',
            AT: '<a href="${url}" class="${klass}">@${value}</a>',
            ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
        }, cyb9S = {
            r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        }, cxS9J = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cxF9w = function (dA8s, bnq1x) {
            dA8s = Ie7X(dA8s);
            if (!!bnq1x) {
                dA8s = dA8s.replace(ME9v.MLINE, "\n\n").replace(ME9v.LING, "</br>")
            }
            dA8s = l6f.bbC8u(dA8s);
            return dA8s
        };
        var Ie7X = function (bl6f) {
            return k6e.Cq6k(cyb9S, bl6f)
        };
        return function (dA8s, e6c, ej8b) {
            e6c = e6c || {};
            ej8b = ej8b || {};
            ej8b.actHash = {};
            var cxz9q = !!e6c.parseLink, cxx9o = !!e6c.parseAct, cxi9Z = e6c.linkTpl || bny1x.LINK,
                cxh9Y = e6c.atTpl || bny1x.AT, cxc9T = e6c.atUrl || "/user/home?nickname=",
                cxa9R = e6c.actTpl || bny1x.ACT, bnq1x = !!e6c.keepSpace, bnn1x = e6c.linkKlass || "s-fc7";
            cAq0x = e6c.actBiJson || "";
            if (!dA8s) return "";
            dA8s = dA8s.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kS0x = cxS9J[cxz9q + 2 * cxx9o], cZ7S = ME9v[kS0x], bs7l = null, lL0x = null, gS9J = 0, cAr0x = "",
                cAt0x = "";
            var Bs5x = [];
            cZ7S.lastIndex = 0;
            while (bs7l = cZ7S.exec(dA8s)) {
                var fn8f = {html: "", before: bs7l.index - 1, after: bs7l.index + bs7l[0].length};
                if (bs7l[1]) {
                    var lL0x = bs7l[2].replace(/[^\x00-\xff]/g, "**");
                    if (lL0x.length < 4 || lL0x.length > 32) {
                    } else {
                        var LA9r = a5f.et8l(cxh9Y);
                        fn8f.html = a5f.bX7Q(LA9r, {
                            value: Ie7X(bs7l[2]),
                            url: encodeURI(cxc9T + bs7l[2]),
                            klass: bnn1x
                        });
                        Bs5x.push(fn8f)
                    }
                } else if (bs7l.length > 8 && bs7l[4]) {
                    var LA9r = a5f.et8l(cxi9Z);
                    fn8f.html = a5f.bX7Q(LA9r, {value: Ie7X(bs7l[4]), url: bs7l[4], klass: bnn1x});
                    Bs5x.push(fn8f)
                } else {
                    var bzY6S = kS0x == "ACT_NOLINK" ? 4 : 9;
                    var LA9r = a5f.et8l(cxa9R);
                    fn8f.html = a5f.bX7Q(LA9r, {value: Ie7X(bs7l[bzY6S]), klass: bnn1x});
                    Bs5x.push(fn8f);
                    ej8b.actHash[bs7l[bzY6S].slice(1, -1)] = true
                }
            }
            var cwv9m = Bs5x.length, kT0x = {before: dA8s.length - 1, after: 0}, bnl1x = "";
            for (var i = 0; i <= cwv9m; i++) {
                var hW9N, gs9j;
                hW9N = (Bs5x[i - 1] || kT0x).after;
                gs9j = (Bs5x[i] || kT0x).before;
                if (gs9j >= hW9N && hW9N >= 0 && gs9j <= dA8s.length - 1) {
                    bnl1x += cxF9w(dA8s.substring(hW9N, gs9j + 1), bnq1x)
                }
                if (Bs5x[i]) {
                    bnl1x += Bs5x[i].html
                }
            }
            return bnl1x
        }
    }();
    l6f.bRP2x = function () {
        var cZ7S = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (bl6f) {
            return (bl6f || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cZ7S, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l6f.bRM2x = function () {
        var cZ7S = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eF8x = function (lL0x, dT8L) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lL0x) + '" class="' + (dT8L || "") + '">@' + lL0x + "</a>"
        };
        return function (bl6f, dT8L) {
            return (bl6f || "").replace(cZ7S, function ($0, $1) {
                return eF8x($1, dT8L)
            })
        }
    }();
    l6f.bbC8u = function () {
        var cZ7S = /\[(.*?)\]/g;
        return function (bl6f) {
            return (bl6f || "").replace(cZ7S, function ($1, $2) {
                var V6P = l6f.bAv6p($2);
                return !V6P ? $1 : '<img src="' + V6P + '"/>'
            })
        }
    }();
    l6f.Bc5h = function (G6A, dT8L) {
        a5f.by7r(G6A, dT8L) ? a5f.v6p(G6A, dT8L) : a5f.w6q(G6A, dT8L)
    };
    l6f.Ib7U = function (cE7x, kd0x) {
        cE7x = a5f.B6v(cE7x);
        kd0x = a5f.B6v(kd0x);
        if (!cE7x || !kd0x) return !1;
        for (kd0x = kd0x.parentNode; !!kd0x && kd0x != cE7x; kd0x = kd0x.parentNode) ;
        return kd0x == cE7x
    };
    l6f.kX0x = function () {
        var bzP6J = function (gB9s) {
            return (gB9s < 10 ? "0" : "") + gB9s
        };
        return function (kk0x) {
            kk0x = parseInt(kk0x) || 0;
            if (!kk0x) return "00:00";
            var xI4M = Math.floor(kk0x % 60), cwh9Y = Math.floor(kk0x / 60);
            return bzP6J(cwh9Y) + ":" + bzP6J(xI4M)
        }
    }();
    l6f.xE4I = function (fF8x, vg3x) {
        if (!fF8x || fF8x.length == 0) return "";
        vg3x = vg3x || "/";
        var bs7l = [];
        for (var i = fF8x.length - 1; i >= 0; i--) {
            bs7l.unshift(fF8x[i].name)
        }
        return bs7l.join(vg3x)
    };
    l6f.rY2x = function () {
        var Lw9n = function (hA9r, dT8L, cE7x, Uh5m) {
            var eF8x = Uh5m ? l6f.bng1x : k6e.dQ8I;
            if (!hA9r || !hA9r.name) return "";
            if (!hA9r.id) return '<span class="' + dT8L + '">' + eF8x(hA9r.name) + "</span>";
            return "<a" + (cE7x ? ' target="_blank"' : "") + ' class="' + dT8L + '" href="/artist?id=' + hA9r.id + '" hidefocus="true">' + eF8x(hA9r.name) + "</a>"
        };
        return function (fF8x, T6N, vg3x, cE7x, bzG6A, Uh5m) {
            if (!fF8x || !fF8x.length) return "";
            vg3x = vg3x || "/";
            T6N = T6N || "";
            Ia7T = "";
            var ec8U = [];
            for (var i = 0, i6c = [], sg2x = [], fA8s; i < fF8x.length; ++i) {
                ec8U.push(fF8x[i].name);
                if (!fF8x[i] || fF8x[i].id <= 0) {
                    sg2x.push(fF8x[i]);
                    continue
                }
                if (k6e.gr9i(T6N)) {
                    fA8s = T6N(fF8x[i])
                } else {
                    fA8s = Lw9n(fF8x[i], T6N, cE7x, Uh5m)
                }
                if (fA8s && bzG6A && fF8x[i].tns && fF8x[i].tns.length > 0) {
                    Ia7T = k6e.dQ8I(fF8x[i].tns[0]);
                    fA8s += '<span class="s-fc8" title="' + Ia7T + '"> - (' + Ia7T + ")</span>"
                }
                !!fA8s && i6c.push(fA8s)
            }
            for (var i = 0, fA8s; i < sg2x.length; ++i) {
                if (k6e.gr9i(T6N)) {
                    fA8s = T6N(sg2x[i])
                } else {
                    fA8s = Lw9n(sg2x[i], T6N, cE7x, Uh5m)
                }
                if (fA8s && bzG6A && sg2x[i].tns && sg2x[i].tns.length > 0) {
                    Ia7T = k6e.dQ8I(sg2x[i].tns[0]);
                    fA8s += '<span class="s-fc8" title="' + Ia7T + '"> - (' + Ia7T + ")</span>"
                }
                !!fA8s && i6c.push(fA8s)
            }
            return '<span title="' + ec8U.join(vg3x) + '">' + i6c.join(vg3x) + "</span>"
        }
    }();
    l6f.xu4y = function (fl8d, oJ1x) {
        oJ1x = oJ1x || "86";
        return !!fl8d && (oJ1x == "86" ? /^\d{11}$/ : /^\d+$/).test(fl8d)
    };
    l6f.cAC0x = function (fl8d) {
        if (!l6f.xu4y(fl8d)) return fl8d;
        return fl8d.substring(0, 3) + "****" + fl8d.substr(7)
    };
    l6f.jy0x = function () {
        var cZ7S = /^\s+$/g;
        return function (if9W) {
            return !if9W || cZ7S.test(if9W)
        }
    }();
    l6f.Lu9l = function () {
        var bnd1x = /[^\x00-\xfff]/g;
        return function (if9W) {
            var cvj9a = if9W.match(bnd1x) || [], du8m = cvj9a.length;
            return if9W.length + du8m
        }
    }();
    l6f.Bt5y = function () {
        var bnd1x = /[^\x00-\xfff]/;
        return function (if9W, eV8N) {
            for (var i = 0, len = if9W.length; i < len && eV8N > 0; i++) {
                if (bnd1x.test(if9W.charAt(i))) {
                    eV8N -= 2;
                    if (eV8N < 0) {
                        break
                    }
                } else {
                    eV8N -= 1
                }
            }
            return if9W.substring(0, i)
        }
    }();
    l6f.Bv5A = function (if9W, eV8N, OM3x) {
        eV8N = eV8N || 10;
        OM3x = OM3x || nej.p.dj8b.engine == "trident" && parseInt(nej.p.dj8b.release) < 5;
        if (OM3x && l6f.Lu9l(if9W) > eV8N) {
            return l6f.Bt5y(if9W, eV8N) + "..."
        } else {
            return if9W
        }
    };
    l6f.bzv6p = function (f6b) {
        return f6b === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f6b.type || f6b.href || ~f6b.tabIndex)
    };
    l6f.ctT8L = function (d6d, cE7x) {
        if (!d6d || !cE7x) return !0;
        var f6b, t6n = d6d.type.toLowerCase();
        if (t6n == "mouseout") {
            f6b = d6d.relatedTarget || d6d.toElement
        } else if (t6n == "mouseover") {
            f6b = d6d.relatedTarget || d6d.fromElement
        }
        return !f6b || f6b !== cE7x && !l6f.Ib7U(cE7x, f6b)
    };
    l6f.sU2x = function () {
        Q6K = {};
        return function (f6b, dS8K) {
            var D6x = a5f.kZ0x(f6b), J6D = "hover-" + D6x;
            if (!dS8K || !D6x || !!Q6K[J6D]) return;
            Q6K[J6D] = !0;
            h6b.s6m(D6x, "mouseover", function () {
                var bmQ1x = a5f.F6z(f6b, "hshow") || [];
                var bmP1x = a5f.F6z(f6b, "icn-dislike") || [];
                a5f.w6q(D6x, "z-hover");
                a5f.Y6S(bmQ1x[0], "display", "block");
                a5f.Y6S(bmP1x[0], "display", "block")
            });
            h6b.s6m(D6x, "mouseout", function () {
                var bmQ1x = a5f.F6z(f6b, "hshow") || [];
                var bmP1x = a5f.F6z(f6b, "icn-dislike") || [];
                a5f.v6p(D6x, "z-hover");
                a5f.Y6S(bmQ1x[0], "display", "none");
                a5f.Y6S(bmP1x[0], "display", "none")
            })
        }
    }();
    l6f.byT6N = function () {
        var bv7o = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (if9W) {
            return k6e.Cq6k(bv7o, if9W)
        }
    }();
    l6f.xf4j = function (bw7p) {
        if (k6e.Eq6k(bw7p)) bw7p = bw7p.getTime();
        var fe8W = new Date, jN0x = fe8W.getTime() - bw7p;
        if (jN0x <= 6e4) return "刚刚";
        var mH1x = fe8W.getHours() * 36e5 + fe8W.getMinutes() * 6e4 + fe8W.getSeconds() * 1e3;
        if (jN0x <= mH1x) {
            if (jN0x < 36e5) {
                var Dz6t = Math.floor(jN0x / 6e4);
                return Dz6t + "分钟前"
            }
            return k6e.hJ9A(bw7p, "HH:mm")
        } else {
            if (jN0x < mH1x + 864e5) {
                return "昨天" + k6e.hJ9A(bw7p, "HH:mm")
            } else {
                var gm9d = fe8W.getFullYear(), Lq9h = new Date(gm9d, 0, 1);
                var mH1x = fe8W.getTime() - Lq9h.getTime();
                if (jN0x < mH1x) {
                    return k6e.hJ9A(bw7p, "M月d日 HH:mm")
                }
                return k6e.hJ9A(bw7p, "yyyy年M月d日")
            }
        }
    };
    l6f.csp8h = function (bw7p) {
        if (k6e.Eq6k(bw7p)) bw7p = bw7p.getTime();
        var fe8W = new Date, jN0x = fe8W.getTime() - bw7p;
        var mH1x = fe8W.getHours() * 36e5 + fe8W.getMinutes() * 6e4 + fe8W.getSeconds() * 1e3;
        if (jN0x <= mH1x) {
            return "今天" + k6e.hJ9A(bw7p, "HH:mm")
        } else {
            if (jN0x < mH1x + 864e5) {
                return "昨天" + k6e.hJ9A(bw7p, "HH:mm")
            } else {
                return k6e.hJ9A(bw7p, "yy-MM-dd HH:mm")
            }
        }
    };
    l6f.csj8b = function (bw7p) {
        if (k6e.Eq6k(bw7p)) bw7p = bw7p.getTime();
        var fe8W = new Date, jN0x = fe8W.getTime() - bw7p;
        if (jN0x <= 6e4) return "刚刚";
        var mH1x = fe8W.getHours() * 36e5 + fe8W.getMinutes() * 6e4 + fe8W.getSeconds() * 1e3;
        if (jN0x <= mH1x) {
            if (jN0x < 36e5) {
                var Dz6t = Math.floor(jN0x / 6e4);
                return Dz6t + "分钟前"
            }
            return k6e.hJ9A(bw7p, "HH:mm")
        } else {
            if (jN0x < mH1x + 864e5) {
                return "昨天" + k6e.hJ9A(bw7p, "HH:mm")
            } else if (jN0x < mH1x + 864e5 * 6) {
                var gm9d = fe8W.getFullYear(), Lq9h = new Date(gm9d, 0, 1);
                var mH1x = fe8W.getTime() - Lq9h.getTime();
                if (jN0x < mH1x) {
                    return k6e.hJ9A(bw7p, "M月d日 HH:mm")
                }
                return k6e.hJ9A(bw7p, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l6f.Vn5s = function () {
        var cZ7S = /\{(.*?)\}/gi;
        return function (pT1x, j6d) {
            return (pT1x || "").replace(cZ7S, function ($1, $2) {
                var C6w = j6d[$2];
                return C6w == null ? $1 : C6w
            })
        }
    }();
    l6f.ff8X = function () {
        var bh6b = Array.prototype.slice.call(arguments, 0), pT1x = bh6b.shift();
        if (pT1x) {
            return pT1x.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < bh6b.length ? bh6b[$2] : $1
            })
        }
        return ""
    };
    l6f.HY7R = function (i6c, dT8L, lD0x) {
        return "";
        lD0x = lD0x || " - ";
        if (i6c && i6c.length) {
            return lD0x + (!!dT8L ? '<span class="' + dT8L + '">' + i6c[0] + "</span>" : i6c[0])
        }
        return ""
    };
    l6f.byL6F = function () {
        if (window.getSelection) {
            var qC2x = window.getSelection();
            if (qC2x && qC2x.focusNode && qC2x.focusNode.tagName) {
                var BA5F = a5f.db8T(qC2x.focusNode);
                for (var i = 0, wO4S; i < BA5F.length; ++i) {
                    wO4S = BA5F[i].tagName;
                    if (!wO4S) continue;
                    wO4S = wO4S.toLowerCase();
                    if (wO4S == "textarea" || wO4S == "input") return !0
                }
            }
        } else if (document.selection) {
            var cR7K = document.selection.createRange();
            if (cR7K) {
                var f6b = cR7K.parentElement();
                if (f6b && f6b.tagName) {
                    var wO4S = f6b.tagName.toLowerCase();
                    if (wO4S == "textarea" || wO4S == "input") return !0
                }
            }
        }
        return !1
    };
    l6f.BF5K = function (fs8k) {
        if (/^[A-Z]\:\\/i.test(fs8k)) {
            fs8k = fs8k.split("\\")
        } else {
            fs8k = fs8k.split("/")
        }
        fs8k = fs8k[fs8k.length - 1];
        return fs8k
    };
    l6f.crQ8I = function () {
        var Ch6b = [13, 17, 34, 19, 18, 21];
        return function (D6x) {
            var bs7l = (D6x || "").split("_");
            return {type: Ch6b[bs7l[2]] || -1, id: bs7l[3] || ""}
        }
    }();
    l6f.byI6C = function (gb9S) {
        if (!gb9S) {
            return true
        }
        for (var k in gb9S) {
            return false
        }
        return true
    };
    l6f.bmK1x = function (df8X) {
        if (!df8X) {
            return ""
        }
        if (4 == df8X.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (df8X.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (df8X.expertTags && df8X.expertTags.length || !l6f.byI6C(df8X.experts)) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l6f.Lm8e = function (hj9a) {
        if (!hj9a) return "";
        var du8m = hj9a.length, hK9B = [];
        hK9B[0] = du8m / 3 | 0;
        hK9B[1] = hK9B[0] + ((du8m - hK9B[0]) / 2 | 0);
        return hj9a.substring(0, hK9B[0]) + hj9a.substring(hK9B[0], hK9B[1]).replace(/\d/g, "*") + hj9a.substring(hK9B[1], du8m)
    };
    l6f.cAG0x = function (r6l, cu7n) {
        return (r6l % cu7n + cu7n) % cu7n
    };
    l6f.bmI1x = function () {
        var Ch6b = {0: "playlist", 1: "program", 2: "event", 3: "album", 4: "song", 5: "mv", 6: "topic", 62: "video"};
        return function (D6x) {
            var bs7l = (D6x || "").split("_"), o6i = {type: Ch6b[bs7l[2]] || -1, id: bs7l[3] || ""};
            if (o6i.type == "event") {
                o6i.uid = bs7l[4] || "";
                return "/" + o6i.type + "?id=" + o6i.id + "&uid=" + o6i.uid
            }
            return "/" + o6i.type + "?id=" + o6i.id
        }
    }();
    l6f.bmH1x = function () {
        var Ch6b = {0: "歌单", 1: "电台节目", 2: "动态", 3: "专辑", 4: "单曲", 5: "MV", 6: "专栏文章", 62: "视频"};
        return function (D6x) {
            var bs7l = (D6x || "").split("_");
            return Ch6b[bs7l[2]] || "资源"
        }
    }();
    l6f.crf8X = function (bx7q) {
        var qs = bx7q.length > 0 ? bx7q.substring(1) : "", args = {}, items = qs.length ? qs.split("&") : [],
            item = null, name = null, value = null, i = 0, len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    };
    l6f.bmE1x = function (pR1x, Lg8Y) {
        var VY6S = 0, eh8Z = new Array;
        k6e.bb6V(pR1x, function (V6P, r6l) {
            var cK7D = a5f.cY7R("img");
            cK7D.src = V6P;
            h6b.s6m(cK7D, "load", function (r6l, d6d) {
                eh8Z[r6l] = 1;
                VY6S++;
                if (VY6S == pR1x.length) Lg8Y(pR1x, eh8Z)
            }.g6a(this, r6l));
            h6b.s6m(cK7D, "error", function (d6d, r6l) {
                eh8Z[r6l] = 0;
                VY6S++;
                if (VY6S == pR1x.length) Lg8Y(pR1x, eh8Z)
            }.g6a(this, r6l))
        })
    };
    l6f.HW7P = function (i6c, dP8H) {
        var o6i = [];
        k6e.bb6V(i6c, function (p6j, r6l, iK9B) {
            o6i.push(dP8H(p6j, r6l, iK9B))
        });
        return o6i
    };
    l6f.YK6E = function (i6c, dP8H, iK9B) {
        var o6i = [];
        k6e.bb6V(i6c, function (p6j, r6l) {
            if (dP8H.call(iK9B, p6j, r6l, i6c)) {
                o6i.push(p6j)
            }
        });
        return o6i
    };
    l6f.byt6n = function (bl6f) {
        return k6e.dQ8I((bl6f || "").replace(/\s{2,}/g, " ").trim())
    };
    l6f.bmx1x = function (bg6a) {
        if (bg6a.transNames && bg6a.transNames.length) {
            return bg6a.transNames[0]
        } else if (bg6a.alias && bg6a.alias.length) {
            return bg6a.alias[0]
        }
    };
    l6f.bmu1x = function (MO9F) {
        if (MO9F) {
            return MO9F.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l6f.bmt1x = function (f6b) {
        var f6b = a5f.B6v(f6b), cJ7C = f6b && f6b.getElementsByTagName("textarea")[0], J6D = a5f.u6o(f6b, "key"),
            bms1x = a5f.u6o(f6b, "simple") == "1", cpW8O = a5f.u6o(f6b, "pvnamed") == "1", cpJ7C = q6k.vw3x.gh9Y();
        if (!(f6b && cJ7C && J6D)) return;
        var Wq6k, bmn1x, Wt6n;
        Wq6k = a5f.F6z(a5f.B6v("m-playlist"), "j-img");
        k6e.bb6V(Wq6k, function (iR9I) {
            if (!Wt6n && a5f.u6o(iR9I, "key")) {
                Wt6n = a5f.u6o(iR9I, "key");
                iR9I.removeAttribute("data-key")
            }
        });
        Wq6k = a5f.F6z(a5f.B6v("m-playlist"), "m-info");
        k6e.bb6V(Wq6k, function (iR9I) {
            if (!bmn1x && iR9I.id && iR9I.id.indexOf("auto-id-") == 0) {
                bmn1x = iR9I.id.slice(8, 12)
            }
        });
        var C6w = cJ7C.value || cJ7C.defaultValue;
        if (Wt6n) {
            C6w = decodeURIComponent(k6e.cpq7j(C6w, "param=" + bmn1x + Wt6n))
        }
        C6w = JSON.parse(C6w);
        if (cpW8O) {
            l6f.cpp7i(C6w)
        }
        if (bms1x) {
            C6w = l6f.DH6B(C6w)
        }
        cpJ7C.ui3x(J6D, C6w);
        f6b.innerHTML = "";
        return J6D
    };
    l6f.cpo7h = function (oW1x) {
        if (!oW1x.onbeforelistload) {
            oW1x.onbeforelistload = function (d6d) {
                d6d.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!oW1x.onemptylist) {
            oW1x.onemptylist = function (d6d) {
                d6d.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oW1x.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return oW1x
    };
    l6f.cpp7i = function (gW9N) {
        k6e.bb6V(gW9N, function (bJ7C) {
            bJ7C.privilege = bJ7C.pv;
            delete bJ7C.pv
        })
    };
    l6f.DH6B = function (hI9z) {
        if (k6e.eC8u(hI9z)) {
            var ej8b = [];
            k6e.bb6V(hI9z, function (bms1x) {
                ej8b.push(bxO6I(bms1x))
            });
            return ej8b
        } else {
            return bxO6I(hI9z)
        }

        function bxO6I(hI9z) {
            if (!hI9z) return null;
            var ej8b = {
                album: hI9z.al,
                alias: hI9z.alia || hI9z.ala || [],
                artists: hI9z.ar || [],
                commentThreadId: "R_SO_4_" + hI9z.id,
                copyrightId: hI9z.cp || 0,
                duration: hI9z.dt || 0,
                id: hI9z.id,
                mvid: hI9z.mv || 0,
                name: hI9z.name || "",
                cd: hI9z.cd,
                position: hI9z.no || 0,
                ringtone: hI9z.rt,
                rtUrl: hI9z.rtUrl,
                status: hI9z.st || 0,
                pstatus: hI9z.pst || 0,
                fee: hI9z.fee || 0,
                version: hI9z.v || 0,
                eq: hI9z.eq,
                songType: hI9z.t || 0,
                mst: hI9z.mst,
                score: hI9z.pop || 0,
                ftype: hI9z.ftype,
                rtUrls: hI9z.rtUrls,
                transNames: hI9z.tns,
                privilege: hI9z.privilege,
                lyrics: hI9z.lyrics
            };
            return ej8b
        }
    };
    l6f.cAH0x = function () {
        var f6b = a5f.no1x('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f6b);
        h6b.s6m(f6b, "click", function (d6d) {
            h6b.bf6Z(d6d);
            a5f.cz7s(f6b)
        })
    };
    l6f.jZ0x = function (cA7t) {
        if (cA7t < 1e5) {
            return cA7t
        } else {
            return Math.floor(cA7t / 1e4) + "万"
        }
    };
    l6f.tW3x = function (cA7t, cJ7C) {
        return "<i>" + (cA7t ? "(" + cA7t + ")" : cJ7C) + "</i>"
    };
    l6f.bxL6F = function (t6n, hz9q) {
        var e6c = {};
        if (!k6e.lg0x(hz9q)) {
            return e6c
        }
        switch (parseInt(t6n)) {
            case 17:
                e6c.title = hz9q.name;
                e6c.author = (hz9q.radio || []).name;
                e6c.picUrl = hz9q.coverUrl;
                e6c.category = hz9q.radio.category;
                break;
            case 19:
                e6c.title = hz9q.name;
                e6c.author = l6f.xE4I(hz9q.artists);
                e6c.authors = l6f.xE4I(hz9q.artists, " / ");
                e6c.picUrl = hz9q.picUrl;
                break;
            case 13:
                e6c.title = hz9q.name;
                e6c.author = (hz9q.creator || []).nickname;
                e6c.picUrl = hz9q.coverImgUrl;
                break;
            case 18:
                e6c.title = hz9q.name;
                e6c.author = l6f.xE4I(hz9q.artists);
                e6c.picUrl = (hz9q.album || []).picUrl;
                break;
            case 20:
                e6c.title = hz9q.name;
                e6c.author = "";
                e6c.picUrl = hz9q.img1v1Url;
                break;
            case 21:
                e6c.title = hz9q.name;
                e6c.author = hz9q.artistName;
                e6c.authors = l6f.xE4I(hz9q.artists, " / ");
                e6c.picUrl = hz9q.newCover || hz9q.cover;
                break;
            case 70:
                e6c.title = hz9q.name;
                e6c.author = (hz9q.dj || []).nickname;
                e6c.picUrl = hz9q.picUrl;
                e6c.category = hz9q.category;
                break;
            default:
                break
        }
        return e6c
    };
    l6f.bxH5M = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l6f.coF7y = function (eF8x, uY3x, e6c) {
        var bN7G, bh6b, o6i;
        var jM0x = null;
        var Tr5w = 0;
        if (!e6c) e6c = {};
        var WM6G = function () {
            Tr5w = e6c.leading === false ? 0 : +(new Date);
            jM0x = null;
            o6i = eF8x.apply(bN7G, bh6b);
            if (!jM0x) bN7G = bh6b = null
        };
        return function () {
            var fe8W = +(new Date);
            if (!Tr5w && e6c.leading === false) Tr5w = fe8W;
            var bme1x = uY3x - (fe8W - Tr5w);
            bN7G = this;
            bh6b = arguments;
            if (bme1x <= 0 || bme1x > uY3x) {
                if (jM0x) {
                    clearTimeout(jM0x);
                    jM0x = null
                }
                Tr5w = fe8W;
                o6i = eF8x.apply(bN7G, bh6b);
                if (!jM0x) bN7G = bh6b = null
            } else if (!jM0x && e6c.trailing !== false) {
                jM0x = setTimeout(WM6G, bme1x)
            }
            return o6i
        }
    };
    l6f.Tf5k = function (eF8x, uY3x, ru2x) {
        var jM0x, bh6b, bN7G, Td5i, o6i;
        var WM6G = function () {
            var gS9J = new Date - Td5i;
            if (gS9J < uY3x && gS9J >= 0) {
                jM0x = setTimeout(WM6G, uY3x - gS9J)
            } else {
                jM0x = null;
                if (!ru2x) {
                    o6i = eF8x.apply(bN7G, bh6b);
                    if (!jM0x) bN7G = bh6b = null
                }
            }
        };
        return function () {
            bN7G = this;
            bh6b = arguments;
            Td5i = new Date;
            var bmd1x = ru2x && !jM0x;
            if (!jM0x) jM0x = setTimeout(WM6G, uY3x);
            if (bmd1x) {
                o6i = eF8x.apply(bN7G, bh6b);
                bN7G = bh6b = null
            }
            return o6i
        }
    };
    l6f.Tc5h = function (f6b, hy9p) {
        if (f6b) {
            var f6b = f6b.firstElementChild;
            if (f6b) {
                f6b.firstElementChild && (f6b = f6b.firstElementChild);
                f6b.setAttribute("xlink:href", "/style/pc/svg/" + hy9p)
            }
        }
    };
    l6f.bxB5G = function (ec8U) {
        if (!ec8U || !ec8U.length) {
            return
        }
        ec8U = /^#(.+?)#$/.exec(ec8U)[1];
        ec8U = ec8U.replace(/\s/g, " ");
        x6r.bp7i("/api/act/detail", {
            type: "json",
            method: "post",
            data: k6e.dh8Z({actname: ec8U}),
            onload: function (P6J) {
                if (!P6J || P6J.code != 200 || !P6J.act) {
                    n6h.X6R.L6F({type: 2, tip: "该话题暂未创建"})
                } else {
                    location.dispatch2("/activity?id=" + P6J.act.actId)
                }
            },
            onerror: function (bV7O) {
                n6h.X6R.L6F({type: 2, tip: "操作失败，请稍后再试"})
            }
        })
    };
    l6f.con7g = function (ec8U) {
        if (!ec8U || !ec8U.length) {
            return
        }
        var SQ5V = location.host;
        ec8U = /^#(.+?)#$/.exec(ec8U)[1];
        ec8U = ec8U.replace(/\s/g, " ");
        x6r.bp7i("/api/act/detail", {
            type: "json",
            method: "post",
            data: k6e.dh8Z({actname: ec8U}),
            onload: function (P6J) {
                if (!P6J || P6J.code != 200 || !P6J.act) {
                    cW7P.ji0x("该话题暂未创建")
                } else {
                    cW7P.AJ5O(SQ5V + "/activity?id=" + P6J.act.actId)
                }
            },
            onerror: function (bV7O) {
                cW7P.ji0x("操作失败，请稍后再试")
            }
        })
    };
    l6f.blZ1x = function (SJ5O, wQ4U) {
        if (!SJ5O || !wQ4U) return false;
        if (SJ5O == wQ4U) return true;
        return l6f.blZ1x(SJ5O, wQ4U.parentNode)
    };
    a5f.ct7m = function (bG7z, ja9R) {
        if (!bG7z) return null;
        if (!ja9R) return bG7z.firstChild;
        return a5f.F6z(bG7z, ja9R)[0]
    };
    l6f.bxt5y = function (if9W) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(if9W)
    };
    l6f.bxs5x = function (if9W, SG5L) {
        SG5L = SG5L || "86";
        if (SG5L == "86") return /^\d{11}$/.test(if9W);
        return /^\d+$/.test(if9W)
    };
    l6f.cAJ0x = function (us3x) {
        if (!us3x) {
            return "0b"
        }
        var cnV7O = ["Bytes", "KB", "MB", "GB"];
        var ba6U = Math.floor(Math.log(us3x) / Math.log(1024));
        return (us3x / Math.pow(1024, Math.floor(ba6U))).toFixed(ba6U == 1 ? 0 : 1) + cnV7O[ba6U]
    };
    l6f.bxo5t = function (dA8s, fc8U, cnH7A) {
        if (!dA8s) return dA8s;
        var du8m = k6e.fp8h(dA8s);
        if (du8m <= fc8U) return dA8s;
        var blV1x = du8m - dA8s.length, blT1x = dA8s.length - blV1x;
        var fr8j = Math.ceil(fc8U / 2), cnq7j = fc8U, bxg5l = 0;
        if (blV1x < fr8j) fr8j = fc8U - blV1x;
        if (blT1x < fc8U) fc8U = blT1x + Math.ceil((fc8U - blT1x) / 2);
        while (fr8j <= fc8U) {
            bxg5l = k6e.fp8h(dA8s.substr(0, fr8j));
            var blR1x = cnq7j - bxg5l;
            if (blR1x == 0) break;
            if (blR1x == 1) {
                var cmM7F = k6e.fp8h(dA8s.charAt(fr8j));
                if (cmM7F == 1) {
                    fr8j++;
                    break
                } else {
                    break
                }
            }
            fr8j += Math.floor(blR1x / 2)
        }
        return dA8s.substr(0, fr8j) + (!!cnH7A ? "" : "...")
    };
    l6f.cmI7B = function (bm6g) {
        bm6g = bm6g || 10;
        var cF7y = "";
        for (var i = 0; i < bm6g; i++) {
            cF7y += String.fromCharCode(Math.round(Math.random() * 20901) + 19968)
        }
        return cF7y
    };
    var cmH7A = /([A-Za-z0-9 \.\-\(\)\!\?])/, cmC7v = /([\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff\u31f0-\u31ff])/,
        cmB7u = ["的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他", "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动", "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所", "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自", "二", "理", "起", "小", "物", "现", "实", "加", "量", "都", "两", "体", "制", "机", "当", "使", "点", "从", "业", "本", "去", "把", "性", "好", "应", "开", "它", "合", "还", "因", "由", "其", "些", "然", "前", "外", "天", "政", "四", "日", "那", "社", "义", "事", "平", "形", "相", "全", "表", "间", "样", "与", "关", "各", "重", "新", "线", "内", "数", "正", "心", "反", "你", "明", "看", "原", "又", "么", "利", "比", "或", "但", "质", "气", "第", "向", "道", "命", "此", "变", "条", "只", "没", "结", "解", "问", "意", "建", "月", "公", "无", "系", "军", "很", "情", "者", "最", "立", "代", "想", "已", "通", "并", "提", "直", "题", "党", "程", "展", "五", "果", "料", "象", "员", "革", "位", "入", "常", "文", "总", "次", "品", "式", "活", "设", "及", "管", "特", "件", "长", "求", "老", "头", "基", "资", "边", "流", "路", "级", "少", "图", "山", "统", "接", "知", "较", "将", "组", "见", "计", "别", "她", "手", "角", "期", "根", "论", "运", "农", "指", "几", "九", "区", "强", "放", "决", "西", "被", "干", "做", "必", "战", "先", "回", "则", "任", "取", "据", "处", "队", "南", "给", "色", "光", "门", "即", "保", "治", "北", "造", "百", "规", "热", "领", "七", "海", "口", "东", "导", "器", "压", "志", "世", "金", "增", "争", "济", "阶", "油", "思", "术", "极", "交", "受", "联", "什", "认", "六", "共", "权", "收", "证", "改", "清", "己", "美", "再", "采", "转", "更", "单", "风", "切", "打", "白", "教", "速", "花", "带", "安", "场", "身", "车", "例", "真", "务", "具", "万", "每", "目", "至", "达", "走", "积", "示", "议", "声", "报", "斗", "完", "类", "八", "离", "华", "名", "确", "才", "科", "张", "信", "马", "节", "话", "米", "整", "空", "元", "况", "今", "集", "温", "传", "土", "许", "步", "群", "广", "石", "记", "需", "段", "研", "界", "拉", "林", "律", "叫", "且", "究", "观", "越", "织", "装", "影", "算", "低", "持", "音", "众", "书", "布", "复", "容", "儿", "须", "际", "商", "非", "验", "连", "断", "深", "难", "近", "矿", "千", "周", "委", "素", "技", "备", "半", "办", "青", "省", "列", "习", "响", "约", "支", "般", "史", "感", "劳", "便", "团", "往", "酸", "历", "市", "克", "何", "除", "消", "构", "府", "称", "太", "准", "精", "值", "号", "率", "族", "维", "划", "选", "标", "写", "存", "候", "毛", "亲", "快", "效", "斯", "院", "查", "江", "型", "眼", "王", "按", "格", "养", "易", "置", "派", "层", "片", "始", "却", "专", "状", "育", "厂", "京", "识", "适", "属", "圆", "包", "火", "住", "调", "满", "县", "局", "照", "参", "红", "细", "引", "听", "该", "铁", "价", "严", "龙", "飞"];
    var bxe5j = function (cmz7s) {
        var bm6g = k6e.Ay5D(1, 5), cmy7r = Math.random() < .5, iv9m = "";
        if (cmz7s) {
            if (cmy7r) {
                while (bm6g >= 0) {
                    iv9m += cmB7u[k6e.Ay5D(0, 500)];
                    bm6g--
                }
            } else {
                iv9m = l6f.cmI7B(bm6g)
            }
        } else {
            iv9m = k6e.Sj4n(bm6g)
        }
        return '<div class="soil">' + iv9m + "</div>"
    };
    l6f.bng1x = function (eg8Y) {
        eg8Y = k6e.Kk8c(eg8Y);
        try {
            var bm6g = eg8Y.length, r6l = k6e.Ay5D(1, bm6g - 1);
            while (r6l < bm6g) {
                if (cmC7v.test(eg8Y.charAt(r6l))) {
                    return k6e.dQ8I(eg8Y.slice(0, r6l)) + bxe5j(true) + k6e.dQ8I(eg8Y.slice(r6l))
                } else if (cmH7A.test(eg8Y.charAt(r6l))) {
                    return k6e.dQ8I(eg8Y.slice(0, r6l)) + bxe5j() + k6e.dQ8I(eg8Y.slice(r6l))
                } else {
                    r6l++
                }
            }
            return k6e.dQ8I(eg8Y)
        } catch (e) {
            return k6e.dQ8I(eg8Y)
        }
    };
    l6f.XZ6T = function (kL0x, me0x) {
        return "//nos.netease.com/" + kL0x + "/" + me0x
    };
    l6f.cmv7o = function (fs8k) {
        var fn8f = /(.+)(\.[^\.]+$)/.exec(fs8k);
        return fn8f ? {filename: fn8f[1], suffix: fn8f[2]} : {filename: fs8k || "", suffix: ""}
    };
    l6f.cms7l = function (V6P) {
        return (V6P || "").replace(/^https?:/, "")
    }
})();
(function () {
    var k6e = NEJ.P("nej.u");

    function cmp7i() {
        var BR5W = function (jQ0x) {
            if (jQ0x < -128) {
                return BR5W(128 - (-128 - jQ0x))
            } else if (jQ0x >= -128 && jQ0x <= 127) {
                return jQ0x
            } else if (jQ0x > 127) {
                return BR5W(-129 + jQ0x - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cmn7g = function (jQ0x, be6Y) {
            return BR5W(jQ0x + be6Y)
        };
        var cmk7d = function (Yk6e, blQ1x) {
            if (Yk6e == null) {
                return null
            }
            if (blQ1x == null) {
                return Yk6e
            }
            var pG1x = [];
            var clG6A = blQ1x.length;
            for (var i = 0, bm6g = Yk6e.length; i < bm6g; i++) {
                pG1x[i] = cmn7g(Yk6e[i], blQ1x[i % clG6A])
            }
            return pG1x
        };
        var clB6v = function (Yr6l) {
            if (Yr6l == null) {
                return Yr6l
            }
            var pG1x = [];
            var ckN6H = Yr6l.length;
            for (var i = 0, bm6g = ckN6H; i < bm6g; i++) {
                pG1x[i] = BR5W(0 - Yr6l[i])
            }
            return pG1x
        };
        var ckM6G = function (blN1x, Sr4v) {
            blN1x = BR5W(blN1x);
            Sr4v = BR5W(Sr4v);
            return BR5W(blN1x ^ Sr4v)
        };
        var bwN5S = function (Sn4r, blL1x) {
            if (Sn4r == null || blL1x == null || Sn4r.length != blL1x.length) {
                return Sn4r
            }
            var pG1x = [];
            var ckD6x = Sn4r.length;
            for (var i = 0, bm6g = ckD6x; i < bm6g; i++) {
                pG1x[i] = ckM6G(Sn4r[i], blL1x[i])
            }
            return pG1x
        };
        var bwK5P = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var ckB6v = function (dn8f) {
            var HQ7J = [];
            HQ7J.push(bwK5P[dn8f >>> 4 & 15]);
            HQ7J.push(bwK5P[dn8f & 15]);
            return HQ7J.join("")
        };
        var bwJ5O = function (us3x) {
            var bm6g = us3x.length;
            if (us3x == null || bm6g < 0) {
                return new String("")
            }
            var HQ7J = [];
            for (var i = 0; i < bm6g; i++) {
                HQ7J.push(ckB6v(us3x[i]))
            }
            return HQ7J.join("")
        };
        var bwE5J = function (YT7M) {
            if (YT7M == null || YT7M.length == 0) {
                return YT7M
            }
            var blI1x = new String(YT7M);
            var pG1x = [];
            var bm6g = blI1x.length / 2;
            var be6Y = 0;
            for (var i = 0; i < bm6g; i++) {
                var oi1x = parseInt(blI1x.charAt(be6Y++), 16) << 4;
                var nO1x = parseInt(blI1x.charAt(be6Y++), 16);
                pG1x[i] = BR5W(oi1x + nO1x)
            }
            return pG1x
        };
        var bwA5F = function (cF7y) {
            if (cF7y == null || cF7y == undefined) {
                return cF7y
            }
            var Sg4k = encodeURIComponent(cF7y);
            var us3x = [];
            var bwz5E = Sg4k.length;
            for (var i = 0; i < bwz5E; i++) {
                if (Sg4k.charAt(i) == "%") {
                    if (i + 2 < bwz5E) {
                        us3x.push(bwE5J(Sg4k.charAt(++i) + "" + Sg4k.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    us3x.push(Sg4k.charCodeAt(i))
                }
            }
            return us3x
        };
        var cjN6H = function (uW3x) {
            var ba6U = 0;
            ba6U += (uW3x[0] & 255) << 24;
            ba6U += (uW3x[1] & 255) << 16;
            ba6U += (uW3x[2] & 255) << 8;
            ba6U += uW3x[3] & 255;
            return ba6U
        };
        var cAQ0x = function (ba6U) {
            var uW3x = [];
            uW3x[0] = ba6U >>> 24 & 255;
            uW3x[1] = ba6U >>> 16 & 255;
            uW3x[2] = ba6U >>> 8 & 255;
            uW3x[3] = ba6U & 255;
            return uW3x
        };
        var cjy6s = function (dt8l, blB1x, bm6g) {
            var ej8b = [];
            if (dt8l == null || dt8l.length == 0) {
                return ej8b
            }
            if (dt8l.length < bm6g) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm6g; i++) {
                ej8b[i] = dt8l[blB1x + i]
            }
            return ej8b
        };
        var blA1x = function (dt8l, blB1x, rv2x, cje6Y, bm6g) {
            if (dt8l == null || dt8l.length == 0) {
                return rv2x
            }
            if (rv2x == null) {
                throw new Error("1004")
            }
            if (dt8l.length < bm6g) {
                throw new Error("1003")
            }
            for (var i = 0; i < bm6g; i++) {
                rv2x[cje6Y + i] = dt8l[blB1x + i]
            }
            return rv2x
        };
        var cjd6X = function (bm6g) {
            var bs7l = [];
            for (var i = 0; i < bm6g; i++) {
                bs7l[i] = 0
            }
            return bs7l
        };
        var ciS6M = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var HL7E = 64;
        var Zu7n = 64;
        var bwj5o = 4;
        var ciA6u = function (pM1x) {
            var bwd5i = [];
            if (pM1x == null || pM1x == undefined || pM1x.length == 0) {
                return cjd6X(Zu7n)
            }
            if (pM1x.length >= Zu7n) {
                return cjy6s(pM1x, 0, Zu7n)
            } else {
                for (var i = 0; i < Zu7n; i++) {
                    bwd5i[i] = pM1x[i % pM1x.length]
                }
            }
            return bwd5i
        };
        var cig6a = function (ZD7w) {
            if (ZD7w == null || ZD7w.length % HL7E != 0) {
                throw new Error("1005")
            }
            var bln1x = [];
            var be6Y = 0;
            var chB6v = ZD7w.length / HL7E;
            for (var i = 0; i < chB6v; i++) {
                bln1x[i] = [];
                for (var j = 0; j < HL7E; j++) {
                    bln1x[i][j] = ZD7w[be6Y++]
                }
            }
            return bln1x
        };
        var chA6u = function (bvM5R) {
            var oi1x = bvM5R >>> 4 & 15;
            var nO1x = bvM5R & 15;
            var be6Y = oi1x * 16 + nO1x;
            return ciS6M[be6Y]
        };
        var bvL5Q = function (blj1x) {
            if (blj1x == null) {
                return null
            }
            var bvF5K = [];
            for (var i = 0, bm6g = blj1x.length; i < bm6g; i++) {
                bvF5K[i] = chA6u(blj1x[i])
            }
            return bvF5K
        };
        var bvB5G = function (HH7A, pM1x) {
            if (HH7A == null) {
                return null
            }
            if (HH7A.length == 0) {
                return []
            }
            if (HH7A.length % HL7E != 0) {
                throw new Error("1005")
            }
            pM1x = ciA6u(pM1x);
            var bli1x = pM1x;
            var blh1x = cig6a(HH7A);
            var Rz4D = [];
            var cgh5m = blh1x.length;
            for (var i = 0; i < cgh5m; i++) {
                var blg1x = bvL5Q(blh1x[i]);
                blg1x = bvL5Q(blg1x);
                var blf1x = bwN5S(blg1x, bli1x);
                var cfS5X = cmk7d(blf1x, clB6v(bli1x));
                blf1x = bwN5S(cfS5X, pM1x);
                blA1x(blf1x, 0, Rz4D, i * HL7E, HL7E);
                bli1x = blh1x[i]
            }
            var bvn5s = [];
            blA1x(Rz4D, Rz4D.length - bwj5o, bvn5s, 0, bwj5o);
            var bm6g = cjN6H(bvn5s);
            if (bm6g > Rz4D.length) {
                throw new Error("1006")
            }
            var pG1x = [];
            blA1x(Rz4D, 0, pG1x, 0, bm6g);
            return pG1x
        };
        var cfP5U = function (bap7i, J6D) {
            if (bap7i == null) {
                return null
            }
            var bvb5g = new String(bap7i);
            if (bvb5g.length == 0) {
                return []
            }
            var HH7A = bwE5J(bvb5g);
            if (J6D == null || J6D == undefined) {
                throw new Error("1007")
            }
            var pM1x = bwA5F(J6D);
            return bvB5G(HH7A, pM1x)
        };
        this.cfe5j = function (bap7i, J6D) {
            var bkZ1x = cfP5U(bap7i, J6D);
            var Cy6s = new String(bwJ5O(bkZ1x));
            var wW4a = [];
            var bkY1x = Cy6s.length / 2;
            var be6Y = 0;
            for (var i = 0; i < bkY1x; i++) {
                wW4a.push("%");
                wW4a.push(Cy6s.charAt(be6Y++));
                wW4a.push(Cy6s.charAt(be6Y++))
            }
            return wW4a.join("")
        };
        k6e.cpq7j = function (bkX1x, J6D) {
            return k6e.ceQ5V(k6e.cdO5T(bkX1x), J6D)
        };
        k6e.ceQ5V = function (bkX1x, J6D) {
            var bkZ1x = bvB5G(bkX1x, bwA5F(J6D));
            var Cy6s = new String(bwJ5O(bkZ1x));
            var wW4a = [];
            var bkY1x = Cy6s.length / 2;
            var be6Y = 0;
            for (var i = 0; i < bkY1x; i++) {
                wW4a.push("%");
                wW4a.push(Cy6s.charAt(be6Y++));
                wW4a.push(Cy6s.charAt(be6Y++))
            }
            return wW4a.join("")
        }
    }

    window.settmusic = (new cmp7i).cfe5j
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, H6B = c6e("nej.ut"), k6e = c6e("nej.u"), h6b = c6e("nej.v"), x6r = c6e("nej.j"),
        q6k = c6e("nm.d"), l6f = c6e("nm.x"), J6D = "Search-tracks_", b6f;
    q6k.ff8X({
        "search-suggest": {
            url: "/api/search/suggest/web", type: "POST", format: function (P6J) {
                return P6J
            }, onerror: function (P6J, e6c) {
                if (P6J.code == 407) {
                    e6c.onForbidden()
                }
            }
        },
        "search-multimatch": {url: "/api/search/suggest/multimatch", type: "GET"},
        "search-list": {
            url: "/api/cloudsearch/get/web", type: "post", noescape: true, filter: function (e6c, bd6X) {
                window.log && window.log("searchkeywordclient", {
                    type: this.ceN5S(parseInt(e6c.data.type)) || "suggest",
                    keyword: e6c.data.s,
                    offset: e6c.offset
                })
            }, format: function (P6J, e6c) {
                if (P6J.abroad) {
                    try {
                        P6J.result = JSON.parse(decodeURIComponent(settmusic(P6J.result, q6k.sk)))
                    } catch (e) {
                    }
                }
                P6J.result = P6J.result || {};
                var i6c, cu7n, jk0x = [], tj3x = e6c.data.s || "", gn9e = e6c.data.limit,
                    t6n = parseInt(e6c.data.type) || 1, o6i = P6J.result;
                switch (t6n) {
                    case 1:
                        i6c = this.buQ5V(o6i.songs, e6c.data.hlpretag, e6c.data.hlposttag);
                        cu7n = o6i.songCount;
                        break;
                    case 10:
                        i6c = o6i.albums;
                        cu7n = o6i.albumCount;
                        break;
                    case 100:
                        i6c = o6i.artists;
                        cu7n = o6i.artistCount;
                        break;
                    case 1e3:
                        i6c = o6i.playlists;
                        cu7n = o6i.playlistCount;
                        break;
                    case 1002:
                        i6c = o6i.userprofiles;
                        cu7n = o6i.userprofileCount;
                        break;
                    case 1004:
                        i6c = o6i.mvs;
                        cu7n = o6i.mvCount;
                        break;
                    case 1006:
                        i6c = this.buQ5V(o6i.songs, e6c.data.hlpretag, e6c.data.hlposttag);
                        cu7n = o6i.songCount;
                        break;
                    case 1009:
                        var qe2x = o6i.djRadios;
                        if (!!qe2x) {
                            k6e.bb6V(qe2x, function (C6w, r6l, ceE5J) {
                                C6w.xid = C6w.id;
                                C6w.id = C6w.id + "_rad"
                            });
                            if (qe2x.length) {
                                this.ui3x("radio_search-" + e6c.data.s, qe2x)
                            }
                        }
                        cu7n = Math.min(o6i.djprogramCount, 500);
                        i6c = o6i.djprograms || [];
                        if (e6c.data.isPub) {
                            k6e.mt0x(qe2x, function (C6w, r6l, ceE5J) {
                                C6w.stype = 1;
                                i6c.unshift(C6w)
                            });
                            cu7n = Math.min(i6c.length, 500)
                        }
                        break
                }
                this.z6t("onsearchload", P6J);
                if (i6c && i6c.length) {
                    for (var i = 0; i < gn9e; i++) {
                        if (i < i6c.length) {
                            jk0x.push(i6c[i])
                        } else {
                            jk0x.push(null)
                        }
                    }
                }
                return {more: !0, total: Math.min(cu7n || 0, tj3x.length < 3 ? 500 : 5e3), list: jk0x}
            }, onerror: function (P6J, e6c) {
                e6c.onload(e6c, []);
                if (k6e.gr9i(e6c.onerror)) {
                    e6c.onerror(P6J)
                }
            }
        }
    });
    q6k.CK6E = NEJ.C();
    b6f = q6k.CK6E.O6I(q6k.hn9e);
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.ceu5z = function (J6D, e6c) {
        if (!J6D) return;
        if (!!this.bRC2x) x6r.jI0x(this.bRC2x);
        this.bRC2x = this.cn7g("search-suggest", NEJ.X({data: {s: J6D, limit: 8}}, e6c))
    };
    b6f.ceh5m = function (J6D, e6c) {
        if (!J6D) return;
        this.cn7g("search-multimatch", NEJ.X({data: {s: J6D}}, e6c))
    };
    b6f.buQ5V = function () {
        var cdY5d = function (he9V, bRk2x, bRj2x) {
            var cdF5K = he9V.match(new RegExp(bRk2x + "(.+?)" + bRj2x, "gi")), cA7t = 0;
            k6e.bb6V(cdF5K, function (p6j) {
                cA7t += p6j.replace(new RegExp(bRk2x, "g"), "").replace(new RegExp(bRj2x, "g"), "").length
            });
            return cA7t
        };
        return function (iL9C, cdC5H, cdq5v) {
            var bQU2x = [];
            k6e.bb6V(iL9C, function (bg6a, ba6U) {
                bg6a = l6f.DH6B(bg6a);
                var bbi7b = bg6a.lyrics || [], du8m = bbi7b.length, jB0x = 0, cu7n = 4, bbj7c = {l: 0, v: 0}, bkQ1x;
                if (du8m > 4) {
                    k6e.bb6V(bbi7b, function (he9V, r6l) {
                        var bQK2x = cdY5d(he9V, cdC5H, cdq5v);
                        if (bQK2x > bbj7c.v) {
                            bbj7c.v = bQK2x;
                            bbj7c.l = r6l
                        }
                    });
                    jB0x = bbj7c.l;
                    jB0x = Math.max(jB0x, 0);
                    bkQ1x = du8m - jB0x - 4;
                    if (bkQ1x < 0) jB0x += bkQ1x;
                    bg6a.lrcAbstractEnd = jB0x + cu7n - 1
                } else {
                    bg6a.lrcAbstractEnd = du8m - 1
                }
                bg6a.lrcAbstractStart = jB0x;
                bg6a.indexId = (bbi7b && bbi7b.length ? "L" : "NL") + bg6a.id;
                bQU2x.push(bg6a)
            });
            return bQU2x
        }
    }();
    b6f.ceN5S = function (t6n) {
        switch (t6n) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        x6r = c6e("nej.j"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), E6y = c6e("nm.m"), n6h = c6e("nm.l"),
        dq8i = c6e("nm.i"), M6G = c6e("nm.m.sch"), b6f, K6E;
    var bbq7j = {songs: 1, artists: 100, albums: 10, playlists: 1e3, mvs: 1004};
    M6G.QE4I = NEJ.C();
    b6f = M6G.QE4I.O6I(H6B.cD7w);
    b6f.cs7l = function (f6b) {
        this.cx7q();
        this.bS7L(f6b);
        this.R6L = q6k.CK6E.gh9Y()
    };
    b6f.bS7L = function (f6b) {
        this.m6g = f6b;
        var i6c = a5f.F6z(f6b, "j-flag");
        this.eI8A = i6c[0];
        this.bkN1x = i6c[1];
        this.cj7c = i6c[2];
        this.mG1x = i6c[3];
        h6b.s6m(this.eI8A, "input", this.fN9E.g6a(this));
        h6b.s6m(this.eI8A, "keyup", this.fN9E.g6a(this));
        h6b.s6m(this.eI8A, "focus", this.gu9l.g6a(this));
        h6b.s6m(this.bkN1x, "click", this.gu9l.g6a(this));
        h6b.s6m(this.eI8A, "blur", this.bkM1x.g6a(this));
        h6b.s6m(this.cj7c, "click", this.bbH8z.g6a(this));
        h6b.s6m(this.m6g, "keydown", this.bkK1x.g6a(this));
        h6b.s6m(this.m6g, "keypress", this.bbJ8B.g6a(this));
        h6b.s6m(this.mG1x, "mouseover", this.Qq4u.g6a(this));
        h6b.s6m(this.mG1x, "mouseout", this.Qq4u.g6a(this));
        if (this.eI8A.value) {
            this.eI8A.value = ""
        }
        if (this.eI8A.style.opacity != null) {
            this.eI8A.style.opacity = 1
        }
    };
    b6f.fN9E = function (d6d) {
        if (d6d.type == "keyup" && d6d.keyCode == 8 || d6d.keyCode == 46) {
            this.Di6c()
        } else if (d6d.type == "input" || d6d.type == "propertychange") {
            setTimeout(this.Di6c.g6a(this), 0)
        }
    };
    b6f.gu9l = function () {
        this.yb4f(this.bkN1x, !1);
        a5f.w6q(this.m6g, "m-srch-fcs");
        this.eI8A.focus();
        this.Di6c();
        a5f.w6q(a5f.F6z("g-topbar", "j-showoff")[0], "f-hide")
    };
    b6f.bkM1x = function () {
        if (!this.eI8A.value) {
            this.yb4f(this.bkN1x, !0)
        }
        var Dk6e = a5f.F6z(this.mG1x, "slt");
        if (this.bbT8L(this.mG1x) && Dk6e.length > 0 && a5f.u6o(Dk6e[0], "type")) {
            var hy9p = Dk6e[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(hy9p)) {
                window.log("search", {rid: RegExp.$2, type: RegExp.$1, keyword: this.eI8A.value})
            }
            this.bkJ1x(Dk6e[0].href)
        }
        this.yb4f(this.mG1x, !1);
        a5f.v6p(this.m6g, "m-srch-fcs")
    };
    b6f.yb4f = function (f6b, lN0x) {
        a5f.Y6S(f6b, "display", !lN0x ? "none" : "")
    };
    b6f.bbT8L = function (f6b) {
        return a5f.cV7O(f6b, "display") != "none"
    };
    b6f.Di6c = function () {
        var Dn6h = function (tS3x, cJ7C) {
            if (!cJ7C) return;
            return cJ7C.replace(new RegExp(l6f.byT6N(tS3x), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var ccI4M = function (if9W) {
            var eV8N = this.m6g.clientWidth > 250 ? 41 : 17;
            if (l6f.Lu9l(if9W) > eV8N) {
                return l6f.Bt5y(if9W, eV8N) + "..."
            } else {
                return if9W
            }
        };
        var bch8Z = function (o6i) {
            return o6i.songs && o6i.songs.length || o6i.albums && o6i.albums.length || o6i.artists && o6i.artists.length || o6i.playlists && o6i.playlists.length
        };
        var tc3x = function (tS3x, d6d) {
            if (!l6f.bzv6p(this.eI8A) || l6f.jy0x(this.eI8A.value)) {
                this.yb4f(this.mG1x, !1);
                return
            }
            d6d.keyword = k6e.dQ8I(tS3x);
            var dL8D = a5f.bX7Q("m-search-suggest", d6d, {mark: Dn6h.g6a(this, tS3x), cutStr: ccI4M.g6a(this)}),
                sD2x = d6d.result.order;
            this.mG1x.innerHTML = dL8D;
            this.yb4f(this.mG1x, bch8Z(d6d.result) ? !0 : !1);
            if (!!sD2x && !!sD2x.length && bbq7j[sD2x[0]]) {
                this.bkG0x = {keyword: tS3x, type: bbq7j[sD2x[0]]}
            }
        };
        var ccl4p = function () {
            this.yb4f(this.mG1x, !1);
            return
        };
        return function () {
            var C6w = this.eI8A.value;
            if (l6f.jy0x(C6w)) {
                this.yb4f(this.mG1x, !1);
                return
            }
            this.R6L.ceu5z(C6w, {onload: tc3x.g6a(this, C6w), onForbidden: ccl4p.g6a(this)})
        }
    }();
    b6f.bbJ8B = function (d6d) {
        if (d6d.keyCode != 13) return;
        var Dk6e = a5f.F6z(this.mG1x, "slt");
        if (this.bbT8L(this.mG1x) && Dk6e.length > 0) {
            this.bkJ1x(Dk6e[0].href);
            this.yb4f(this.mG1x, !1);
            return
        }
        this.bbH8z();
        this.yb4f(this.mG1x, !1)
    };
    b6f.bkK1x = function (d6d) {
        if (!this.bbT8L(this.mG1x)) return;
        var i6c = a5f.F6z(this.mG1x, "xtag"), du8m = i6c.length, r6l = k6e.dd8V(i6c, function (p6j) {
            return a5f.by7r(p6j, "slt")
        });
        switch (d6d.keyCode) {
            case 38:
                if (r6l >= 0) a5f.v6p(i6c[r6l], "slt");
                a5f.w6q(i6c[r6l <= 0 ? du8m - 1 : r6l - 1], "slt");
                break;
            case 40:
                if (r6l >= 0) a5f.v6p(i6c[r6l], "slt");
                a5f.w6q(i6c[(r6l + 1) % du8m], "slt");
                break
        }
    };
    b6f.Qq4u = function (d6d) {
        if (!this.bbT8L(this.mG1x)) return;
        var PZ4d, G6A = h6b.U6O(d6d), i6c = a5f.F6z(this.mG1x, "xtag");
        if (G6A.tagName.toLowerCase() == "a") PZ4d = G6A; else if (G6A.parentNode.tagName.toLowerCase() == "a") PZ4d = G6A.parentNode;
        if (!PZ4d) return;
        k6e.bb6V(i6c, function (p6j) {
            a5f.v6p(p6j, "slt");
            a5f.u6o(p6j, "type", "")
        });
        if (d6d.type == "mouseout") return;
        a5f.w6q(PZ4d, "slt");
        a5f.u6o(PZ4d, "type", "mouse")
    };
    b6f.bbH8z = function () {
        var dW8O = location.hash, r6l = dW8O.indexOf("?"), bx7q = k6e.hD9u(dW8O.substring(r6l + 1));
        bx7q.s = this.eI8A.value;
        if (l6f.jy0x(bx7q.s)) return;
        if (!bx7q.type && this.bkG0x && this.bkG0x.keyword == bx7q.s) {
            bx7q.type = this.bkG0x.type
        }
        this.bkJ1x("/search/#/?" + k6e.dh8Z(bx7q));
        this.eI8A.blur()
    };
    b6f.bkJ1x = function (V6P) {
        if (location.dispatch2) {
            location.dispatch2(V6P)
        } else {
            location.href = V6P
        }
    };
    M6G.QE4I.cch4l = function () {
        var i6c = a5f.F6z(document.body, "j-suggest");
        k6e.bb6V(i6c, function (p6j) {
            new M6G.QE4I(p6j)
        })
    };
    M6G.QE4I.cch4l()
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, H6B = c6e("nej.ut"), k6e = c6e("nej.u"), h6b = c6e("nej.v"), x6r = c6e("nej.j"),
        q6k = c6e("nm.d"), b6f;
    q6k.ff8X({
        "mv_artist-list": {
            url: "/api/artist/mvs", type: "get", format: function (P6J) {
                return {total: P6J.size || 0, list: P6J.mvs || []}
            }
        }, "album_artist-list": {
            url: "/api/artist/albums/{id}", type: "get", format: function (P6J) {
                return {total: P6J.size || 0, list: P6J.hotAlbums || []}
            }
        }, "ydcailing_post-list": {
            url: "/api/cailing/all", type: "POST", format: function (P6J) {
                return P6J.result.songs
            }
        }, "wo-list": {
            url: "/api/unicom/wo/content", format: function (P6J, e6c) {
                if (e6c.offset == 0) {
                    var px1x = P6J.data[0];
                    this.z6t("onfirstload", px1x);
                    P6J.data.splice(0, 1);
                    return P6J.data
                } else {
                    return P6J.data
                }
            }
        }
    });
    q6k.Dx6r = NEJ.C();
    b6f = q6k.Dx6r.O6I(q6k.hn9e);
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bkD0x = function () {
        var sa2x = "LOCAL_FLAG";
        return function (t6n, cbR4V) {
            var j6d = this.FD7w(sa2x, {});
            if (j6d[t6n]) {
                return true
            } else {
                if (!cbR4V) {
                    j6d[t6n] = true;
                    this.vT4X(sa2x, j6d)
                }
                return false
            }
        }
    }()
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), k6e = c6e("nej.u"), N6H = c6e("nej.ut"), bkC0x;
    if (!!N6H.nI1x) return;
    N6H.nI1x = NEJ.C();
    bkC0x = N6H.nI1x.O6I(N6H.cD7w);
    bkC0x.bj6d = function () {
        var cbK4O = function (d6d) {
            d6d.matched = d6d.source == d6d.target
        };
        return function (e6c) {
            e6c.oncheck = e6c.oncheck || cbK4O;
            this.bk6e(e6c);
            this.bO7H = e6c.list;
            this.iG9x = e6c.dataset || "id";
            this.ki0x = e6c.selected || "js-selected"
        }
    }();
    bkC0x.nv1x = function (C6w) {
        var G6A, d6d = {target: C6w};
        k6e.bb6V(this.bO7H, function (f6b) {
            delete d6d.matched;
            d6d.source = a5f.u6o(f6b, this.iG9x);
            this.z6t("oncheck", d6d);
            if (!d6d.matched) {
                a5f.v6p(f6b, this.ki0x)
            } else {
                G6A = f6b;
                a5f.w6q(f6b, this.ki0x)
            }
        }, this);
        return G6A
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), N6H = c6e("nej.ut"), pj1x;
    if (!!N6H.cX7Q) return;
    N6H.cX7Q = NEJ.C();
    pj1x = N6H.cX7Q.O6I(N6H.cD7w);
    pj1x.cs7l = function () {
        this.it9k = {};
        this.cx7q();
        this.bH7A()
    };
    pj1x.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.bkz0x = e6c.umi || "";
        this.AU5Z = e6c.dispatcher;
        this.Hu7n = e6c.composite || Z6T;
        this.btE4I({
            onshow: this.eL8D.g6a(this),
            onhide: this.jR0x.g6a(this),
            onrefresh: this.es8k.g6a(this),
            onmessage: this.pZ2x.g6a(this),
            onbeforehide: this.cbb4f.g6a(this)
        })
    };
    pj1x.bA7t = function () {
        delete this.bkz0x;
        this.it9k = {};
        this.bF7y()
    };
    pj1x.tf3x = function (d6d) {
        if (!!d6d) d6d.stopped = !0
    };
    pj1x.bH7A = bn7g;
    pj1x.eL8D = bn7g;
    pj1x.jR0x = bn7g;
    pj1x.es8k = bn7g;
    pj1x.pZ2x = bn7g;
    pj1x.cbb4f = bn7g;
    pj1x.mV1x = function (oA1x, bE7x, eZ8R) {
        this.AU5Z.bkx0x({to: oA1x, mode: eZ8R || 0, data: bE7x, from: this.bkz0x})
    };
    pj1x.cBc0x = function (t6n, j6d) {
        this.AU5Z.AP5U(t6n, {from: this.bkz0x, data: j6d})
    };
    pj1x.cBd0x = function () {
        this.AU5Z.mi0x.apply(this.AU5Z, arguments)
    };
    pj1x.caT4X = function () {
        return this.it9k
    };
    a5f.Uf5k = function () {
        if (!!window.dispatcher) {
            dispatcher.bOo0x.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var c6e = NEJ.P, bn7g = NEJ.F, Z6T = NEJ.O, a5f = c6e("nej.e"), k6e = c6e("nej.u"), N6H = c6e("nej.ut"), wD4H;
    if (!!N6H.do8g) return;
    N6H.do8g = NEJ.C();
    wD4H = N6H.do8g.O6I(N6H.cX7Q);
    wD4H.caO4S = function (e6c) {
        var bG7z;
        if (!bG7z) {
            var j6d = e6c.input || Z6T;
            bG7z = a5f.B6v(j6d.parent)
        }
        if (!bG7z) {
            var j6d = e6c.data || Z6T;
            bG7z = a5f.B6v(j6d.parent)
        }
        if (!bG7z) {
            bG7z = a5f.B6v(e6c.parent)
        }
        return bG7z
    };
    wD4H.eL8D = function (e6c) {
        var bG7z = this.caO4S(e6c);
        if (!!bG7z && !!this.m6g) bG7z.appendChild(this.m6g);
        this.gp9g(e6c);
        this.bOm0x("onshow", e6c);
        this.es8k(e6c)
    };
    wD4H.es8k = function (e6c) {
        this.fW9N(e6c);
        this.bOm0x("onrefresh", e6c)
    };
    wD4H.jR0x = function () {
        this.kA0x();
        this.caE4I();
        a5f.mK1x(this.m6g)
    };
    wD4H.bNZ0x = function () {
        var go9f = /^onshow|onrefresh|delay$/;
        return function (ce7X) {
            return go9f.test(ce7X)
        }
    }();
    wD4H.bNV0x = bn7g;
    wD4H.bOm0x = function () {
        var bNQ0x = function (bx7q, e6c, ce7X, oH1x) {
            if (this.bNZ0x(oH1x)) return;
            if (!!bx7q) ce7X += (ce7X.indexOf("?") > 1 ? "&" : "?") + bx7q;
            var dc8U = this.bNV0x(oH1x, e6c) || {};
            dc8U.location = e6c;
            dc8U.parent = this.it9k[oH1x];
            this.AU5Z.hU9L(ce7X, {input: dc8U})
        };
        return function (t6n, e6c) {
            if (!e6c.nodelay) {
                if (!!this.Hu7n.delay) return;
                var bNO0x = this.Hu7n[t6n] || Z6T;
                if (bNO0x.delay) return
            }
            var bx7q = k6e.dh8Z(e6c.param) || "";
            if (t6n == "onrefresh") {
                k6e.ey8q(this.Hu7n, bNQ0x.g6a(this, bx7q, e6c))
            }
            k6e.ey8q(bNO0x, bNQ0x.g6a(this, bx7q, e6c))
        }
    }();
    wD4H.caE4I = function () {
        var zj5o = function (ce7X, oH1x) {
            if (!this.bNZ0x(oH1x)) this.AU5Z.br7k(ce7X)
        };
        return function () {
            k6e.ey8q(this.Hu7n, zj5o, this);
            k6e.ey8q(this.Hu7n.onshow, zj5o, this);
            k6e.ey8q(this.Hu7n.onrefresh, zj5o, this)
        }
    }()
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), H6B = c6e("nej.ut"), x6r = c6e("nej.j"),
        k6e = c6e("nej.u"), E6y = c6e("nm.m"), l6f = c6e("nm.x"), q6k = c6e("nm.d"), b6f, K6E;
    E6y.PH4L = NEJ.C();
    b6f = E6y.PH4L.O6I(H6B.cD7w);
    b6f.cs7l = function () {
        this.cx7q();
        this.m6g = a5f.B6v("g-topbar");
        var i6c = a5f.F6z(this.m6g, "j-tflag");
        this.bks0x = i6c[0];
        this.Ei6c = i6c[1];
        this.bNI0x = i6c[2];
        this.bkr0x = i6c[3];
        this.bZU4Y = H6B.nI1x.A6u({list: this.bks0x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bkq0x = H6B.nI1x.A6u({list: this.bkr0x.getElementsByTagName("a"), selected: "z-slt", dataset: "module"});
        this.bT7M([[this.m6g, "click", this.PA3x.g6a(this)], [this.Ei6c, "click", this.cG7z.g6a(this)], [this.Ei6c, "mouseout", this.bNC0x.g6a(this, 0)], [this.Ei6c, "mouseover", this.bNC0x.g6a(this, 1)]]);
        window.scrollTopbar = this.bZv4z.g6a(this);
        window.matchNav = this.bNw0x.g6a(this);
        window.polling = this.ul3x.g6a(this);
        this.bkp0x = q6k.Dx6r.A6u();
        this.bZq4u();
        this.Hq7j();
        var bx7q = k6e.hD9u(location.href.split("?")[1]) || {};
        if (bx7q.market) {
            a5f.B6v("topbar-download-link").href = "/download?market=" + bx7q.market
        }
        var bkm0x = a5f.F6z(this.m6g, "j-showoff");
        if (bkm0x && !this.bkp0x.bkD0x("newMvSearch")) {
            a5f.v6p(bkm0x[0], "f-hide");
            window.setTimeout(function () {
                a5f.w6q(bkm0x[0], "f-hide")
            }, 5e3)
        }
    };
    b6f.ul3x = function (d6d) {
        var dW8O = l6f.Ig7Z();
        if (!/^\/msg/.test(dW8O)) {
            var vx3x = 0;
            vx3x += d6d.comment;
            vx3x += d6d.forward;
            vx3x += d6d.msg;
            vx3x += d6d.notice;
            if (vx3x > 0) {
                vx3x = vx3x > 99 ? "99+" : vx3x;
                this.Pn3x.innerText = vx3x;
                this.Hp7i.innerText = vx3x;
                a5f.v6p(this.Pn3x, "f-hide");
                a5f.v6p(this.Hp7i, "f-hide");
                this.Vc5h = true
            } else {
                a5f.w6q(this.Pn3x, "f-hide");
                a5f.w6q(this.Hp7i, "f-hide");
                this.Vc5h = false
            }
            var eH8z = "/at";
            if (d6d.notice) eH8z = "/notify";
            if (d6d.comment) eH8z = "/comment";
            if (d6d.msg > 0) eH8z = "/private";
            if (d6d.forward > 0) eH8z = "/at";
            this.Hp7i.parentNode.href = "/msg/#" + eH8z
        } else {
            this.Hp7i.parentNode.href = "javascript:;";
            a5f.w6q(this.Pn3x, "f-hide");
            a5f.w6q(this.Hp7i, "f-hide");
            this.Vc5h = false
        }
        var i6c = a5f.F6z(this.bks0x, "j-t");
        if (!/^\/friend/.test(dW8O)) {
            if (i6c && i6c.length) {
                a5f.Y6S(i6c[0], "display", d6d.event > 0 ? "" : "none")
            }
        } else {
            a5f.Y6S(i6c[0], "display", "none")
        }
    };
    b6f.cG7z = function (d6d) {
        var f6b = h6b.U6O(d6d, "d:action");
        if (f6b) {
            switch (a5f.u6o(f6b, "action")) {
                case"login":
                    h6b.cm7f(d6d);
                    var t6n = a5f.u6o(f6b, "type");
                    if (t6n) {
                        if (t6n == "sina" || t6n == "tencent") top.open(f6b.href); else top.login(t6n == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case"logout":
                    h6b.cm7f(d6d);
                    top.logout();
                    break;
                case"viewStore":
                    if (!this.bkp0x.bkD0x("storeNew")) {
                        a5f.w6q(this.cBf0x, "f-vhide")
                    }
                    break;
                case"viewLevel":
                    if (!this.bkp0x.bkD0x("levelNew")) {
                        a5f.w6q(this.cBi0x, "f-vhide")
                    }
                    break
            }
        }
    };
    b6f.PA3x = function (d6d) {
        var f6b = h6b.U6O(d6d, "d:action");
        if (!f6b) return;
        var W6Q = a5f.u6o(f6b, "action");
        switch (W6Q) {
            case"bilog":
                var bkj0x = a5f.u6o(f6b, "logAction"), bkh0x = a5f.u6o(f6b, "logJson");
                window.log(bkj0x, bkh0x);
                break
        }
    };
    b6f.bNC0x = function (Ho7h, d6d) {
        if (this.bkg0x) {
            this.bkg0x.style.display = !Ho7h ? "none" : "";
            (Ho7h || !this.Vc5h ? a5f.w6q : a5f.v6p).call(window, this.Pn3x, "f-hide")
        }
    };
    b6f.bZv4z = function (fS9J) {
        a5f.Y6S(this.m6g, "top", -fS9J + "px")
    };
    b6f.bNw0x = function (eH8z, bYp3x) {
        this.bZU4Y.nv1x(eH8z);
        if (eH8z == "discover") {
            a5f.w6q(this.bNI0x, "f-hide");
            a5f.v6p(this.bkr0x, "f-hide");
            window.g_topBarHeight = 105;
            this.bkq0x.nv1x(bYp3x)
        } else {
            a5f.v6p(this.bNI0x, "f-hide");
            a5f.w6q(this.bkr0x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b6f.bZq4u = function () {
        var vn3x = a5f.B6v("g_iframe");
        if (!vn3x) return;
        var gi9Z = vn3x.contentWindow.document.getElementById("g_top");
        this.bNw0x(a5f.u6o(gi9Z, "module"), a5f.u6o(gi9Z, "sub"))
    };
    var Vo5t = {}, bMt9k = /\/\/\w+/, bYk3x = {
        avatarUrl: function (a, b) {
            a = a || "";
            b = b || "";
            return a.replace(bMt9k, "") !== b.replace(bMt9k, "")
        }, userId: true, nickname: true, reward: true, topic: true, djStatus: true
    };
    b6f.bYi3x = function (Vt5y) {
        var nd1x = k6e.dd8V(bYk3x, function (C6w, J6D) {
            if (k6e.gr9i(C6w)) {
                return C6w(Vt5y[J6D], Vo5t[J6D])
            } else {
                return Vt5y[J6D] !== Vo5t[J6D]
            }
        });
        Vo5t = Vt5y;
        return Vt5y[nd1x]
    };
    b6f.Hq7j = function () {
        var df8X = GUser || {}, bYg3x = GUserAcc || {};
        if (df8X && df8X.userId) {
            var bMm9d = NEJ.X(df8X, bYg3x);
            if (this.bYi3x(bMm9d)) {
                a5f.dH8z(this.Ei6c, "m-topbar-user-login", bMm9d)
            }
        } else {
            Vo5t = {};
            this.Ei6c.innerHTML = a5f.ih9Y("m-topbar-user-unlogin");
            var i6c = a5f.F6z(this.bks0x, "j-t");
            a5f.Y6S(i6c[0], "display", "none")
        }
        a5f.v6p(this.Ei6c, "f-hide");
        this.Vc5h = false;
        var i6c = a5f.F6z(this.Ei6c, "j-uflag");
        if (df8X && df8X.userId) {
            this.Pn3x = i6c.shift();
            this.bkg0x = i6c.shift();
            this.Hp7i = i6c.shift()
        } else {
            this.bkg0x = i6c.shift()
        }
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), H6B = c6e("nej.ut"), q6k = c6e("nm.d"), b6f, K6E;
    q6k.ff8X({
        "polling-get": {
            type: "GET", url: "/api/pl/count", format: function (P6J) {
                h6b.z6t(q6k.rJ2x, "message", P6J)
            }
        }
    });
    q6k.rJ2x = NEJ.C();
    b6f = q6k.rJ2x.O6I(q6k.hn9e);
    b6f.VA5F = function () {
        this.cn7g("polling-get", {})
    };
    b6f.th3x = function () {
        var eE8w;
        return function () {
            if (!!eE8w) return;
            eE8w = window.setInterval(this.VA5F.g6a(this), 1e5);
            this.VA5F()
        }
    }();
    H6B.fE8w.A6u({event: "message", element: q6k.rJ2x})
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || ""), uri = {}, i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        };
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol, host = uri.host, port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || ""), components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        };
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            return null
        };
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        };
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        };
        util.inherit = function (ctor, ctor2) {
            function f() {
            }

            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function (arr, arr2) {
            var ret = [], longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {
            }
            return j <= i ? -1 : i
        };
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {
        }

        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }

            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        };
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {parse: nativeJSON.parse, stringify: nativeJSON.stringify}
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }

        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent,
            meta = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case"string":
                    return quote(value);
                case"number":
                    return isFinite(value) ? String(value) : "null";
                case"boolean":
                case"null":
                    return String(value);
                case"object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }

        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {"": value})
        };
        JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({"": j}, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON, indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type), id = packet.id || "", endpoint = packet.endpoint || "",
                ack = packet.ack, data = null;
            switch (packet.type) {
                case"error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case"message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case"event":
                    var ev = {name: packet.name};
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case"json":
                    data = JSON.stringify(packet.data);
                    break;
                case"connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case"ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "", data = pieces[5] || "",
                packet = {type: packets[pieces[1]], endpoint: pieces[4] || ""};
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data"; else packet.ack = true
            }
            switch (packet.type) {
                case"error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case"message":
                    packet.data = data || "";
                    break;
                case"event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {
                    }
                    packet.args = packet.args || [];
                    break;
                case"json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) {
                    }
                    break;
                case"connect":
                    packet.qs = data || "";
                    break;
                case"ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) {
                            }
                        }
                    }
                    break;
                case"disconnect":
                case"heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }

        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        };
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        };
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        };
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({type: "heartbeat"})
        };
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }

        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({type: "connect"})
                }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {
        }

        Socket.prototype.handshake = function (fn) {
            var self = this, options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }

            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0], script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {
                                        }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }

                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        };
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        };
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({type: "disconnect"})
                }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function () {
            this.open = true
        };
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        };
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected, wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        };
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this, maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"], limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({type: "connect"})
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }

            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }

        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {type: this.flags.json ? "json" : "message", data: data};
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1), lastArg = args[args.length - 1],
                packet = {type: "event", name: name};
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({type: "disconnect"});
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;

            function ack() {
                self.packet({type: "ack", args: io.util.toArray(arguments), ackId: packet.id})
            }

            switch (packet.type) {
                case"connect":
                    this.$emit("connect");
                    break;
                case"disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case"message":
                case"json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({type: "ack", ackId: packet.id})
                    }
                    this.$emit.apply(this, params);
                    break;
                case"event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case"ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case"error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }

        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;

        function WS(socket) {
            io.Transport.apply(this, arguments)
        }

        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            };
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function (e) {
                self.onError(e)
            };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        };
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        };
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function () {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }

        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this, args = arguments;
            WebSocket.VC5H(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.send = function () {
            var self = this, args = arguments;
            WebSocket.VC5H(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        };
        Flashsocket.prototype.close = function () {
            WebSocket.OC3x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options, port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bkd0x();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }

            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function () {
            return true
        };
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window,
                j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false,
                a = false, n, G, m = true, M = function () {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1", ag = [0, 0, 0], ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new (window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {
                            }
                        }
                    }
                    return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
                }(), k = function () {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                        f()
                    }
                    if (!J) {
                        if (typeof j.addEventListener != D) {
                            j.addEventListener("DOMContentLoaded", f, false)
                        }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function () {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function () {
                                    if (J) {
                                        return
                                    }
                                    try {
                                        j.documentElement.doScroll("left")
                                    } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function () {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }

            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }

            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {success: false, id: Y};
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {success: false, id: X};
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) {
                }
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv, X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }

            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({success: false, id: ab})
                        }
                    }
                }, getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {success: false, id: ah};
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                }, switchOffAutoHideShow: function () {
                    m = false
                }, ua: M, getFlashPlayerVersion: function () {
                    return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
                }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                }, showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                }, removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                }, createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                }, expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () {
                }, error: function () {
                }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gL9C = WebSocket.bXS3x++;
            WebSocket.bLX9O[self.gL9C] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lI0x = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.VC5H(function () {
                    WebSocket.oP1x.create(self.gL9C, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        };
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw"INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oP1x.send(this.gL9C, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oP1x.close(this.gL9C)
        };
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.lI0x)) {
                this.lI0x[type] = []
            }
            this.lI0x[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.lI0x)) return;
            var events = this.lI0x[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.lI0x[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.bXO3x = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bLS9J(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bLS9J("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bXD3x("message", data)
            } else {
                throw"unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bLS9J = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {type: type, bubbles: false, cancelable: false}
            }
        };
        WebSocket.prototype.bXD3x = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {type: type, data: data, bubbles: false, cancelable: false}
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oP1x = null;
        WebSocket.bLX9O = {};
        WebSocket.OC3x = [];
        WebSocket.bXS3x = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.VC5H(function () {
                WebSocket.oP1x.loadManualPolicyFile(url)
            })
        };
        WebSocket.bkd0x = function () {
            if (WebSocket.oP1x) return;
            if (WebSocket.bXB3x) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.bXB3x
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bXz3x()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        };
        WebSocket.cBk0x = function () {
            setTimeout(function () {
                WebSocket.oP1x = document.getElementById("webSocketFlash");
                WebSocket.oP1x.setCallerUrl(location.href);
                WebSocket.oP1x.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.OC3x.length; ++i) {
                    WebSocket.OC3x[i]()
                }
                WebSocket.OC3x = []
            }, 0)
        };
        WebSocket.cBl0x = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.oP1x.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bLX9O[events[i].webSocketId].bXO3x(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        };
        WebSocket.cBm0x = function (message) {
            console.log(decodeURIComponent(message))
        };
        WebSocket.dG8y = function (message) {
            console.error(decodeURIComponent(message))
        };
        WebSocket.VC5H = function (task) {
            if (WebSocket.oP1x) {
                task()
            } else {
                WebSocket.OC3x.push(task)
            }
        };
        WebSocket.bXz3x = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bkd0x()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bkd0x()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }

        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        };

        function empty() {
        }

        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }

            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function () {
            this.onClose();
            return this
        };
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) {
                }
            }
            return req
        };
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {
            }
            return false
        };
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        };
        HTMLFile.prototype.c6e = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {
            }
        };
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) {
                }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {
                }
            }
            return false
        };
        HTMLFile.xdomainCheck = function () {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }

        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        };
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {
        }

        XHRPolling.prototype.get = function () {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }

            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) {
                }
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.c6e(msg)
            })
        }

        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this, query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }

            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) {
            }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function () {
            var self = this, script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c6e = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        };
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        };
        JSONPPolling.check = function () {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function () {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {
    }

    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.dU8M) this.dU8M = {};
        this.bLF9w = n
    };
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dU8M || !this.dU8M.error || isArray(this.dU8M.error) && !this.dU8M.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dU8M) return false;
        var handler = this.dU8M[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dU8M) this.dU8M = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dU8M[type]) {
            this.dU8M[type] = listener
        } else if (isArray(this.dU8M[type])) {
            this.dU8M[type].push(listener)
        } else {
            this.dU8M[type] = [this.dU8M[type], listener]
        }
        if (isArray(this.dU8M[type]) && !this.dU8M[type].warned) {
            var m;
            if (this.bLF9w !== undefined) {
                m = this.bLF9w
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.dU8M[type].length > m) {
                this.dU8M[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dU8M[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }

        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dU8M || !this.dU8M[type]) return this;
        var list = this.dU8M[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.dU8M[type]
        }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.dU8M = {};
            return this
        }
        var events = this.dU8M && this.dU8M[type];
        if (!events) return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.dU8M[type] = null
        }
        return this
    };
    EventEmitter.prototype.listeners = function (type) {
        if (!this.dU8M) this.dU8M = {};
        if (!this.dU8M[type]) this.dU8M[type] = [];
        if (!isArray(this.dU8M[type])) {
            this.dU8M[type] = [this.dU8M[type]]
        }
        return this.dU8M[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() {
            }

            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {"force new connection": true, reconnect: true, "max reconnection attempts": 50}
        } else {
            params = {"force new connection": true, reconnect: false}
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {id: msgId, route: path, msg: msg};
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {flag: "online", domain: current_domain, user: current_user})
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    };
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    };
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    };
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {user: user, msgIds: msgIds, types: types, domain: domain};
        notify("ack", message)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        l6f = c6e("nm.x"), dz8r = c6e("nm.u"), q6k = c6e("nm.d"), Ou3x = c6e("pomelo"), dw8o = 0, b6f, K6E;
    q6k.ff8X({
        "polling-init": {
            url: "/api/push/init", format: function (P6J) {
                dw8o = 2;
                var rV2x = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }, j6d = P6J.account || Z6T, de8W = GUser.userId;
                Ou3x.init(rV2x.host, rV2x.port, true, this.bXs3x.g6a(this, {
                    user: de8W,
                    nonce: j6d.nonce,
                    domain: rV2x.domain,
                    productKey: rV2x.key,
                    signature: j6d.signature,
                    expire_time: j6d.expireTime
                }))
            }, onerror: function () {
                return this.bjZ0x()
            }
        }
    });
    q6k.Ah5m = NEJ.C();
    b6f = q6k.Ah5m.O6I(q6k.hn9e);
    b6f.cs7l = function () {
        var pF1x = !1;
        return function (e6c) {
            if (!pF1x) {
                pF1x = !0
            }
            this.cx7q(e6c);
            Ou3x.on("specify", this.pZ2x.g6a(this));
            Ou3x.on("broadcast", this.pZ2x.g6a(this))
        }
    }();
    b6f.pZ2x = function (d6d) {
        k6e.bb6V(d6d, function (bE7x) {
            h6b.z6t(q6k.Ah5m, "message", bE7x)
        }, this)
    };
    b6f.bjZ0x = function () {
        var bw7p = 500;
        return function () {
            dw8o = 0;
            Ou3x.disconnect();
            if (bw7p > 6e4) bw7p = 500;
            bw7p *= 2
        }
    }();
    b6f.bXs3x = function (e6c, bV7O) {
        if (!!bV7O) {
            return this.bjZ0x()
        }
        dw8o = 3;
        Ou3x.registerAndBind(e6c, function (o6i) {
            if (o6i.code != 200) {
                return this.bjZ0x()
            }
            dw8o = 4
        }.g6a(this))
    };
    b6f.cBn0x = function () {
        dz8r.bWX3x.gh9Y().cBo0x()
    };
    b6f.cBp0x = function () {
        dz8r.bWX3x.gh9Y().cBq0x()
    };
    b6f.bjQ0x = function () {
        var pF1x = !1;
        return function () {
            if (pF1x) return;
            pF1x = !0;
            this.cn7g("polling-init", {})
        }
    }();
    H6B.fE8w.A6u({event: "message", element: q6k.Ah5m})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), x6r = c6e("nej.j"), dn8f = c6e("nej.p"),
        k6e = c6e("nej.u"), n6h = c6e("nm.l"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), cW7P = c6e("api"), b6f, K6E;
    var gt9k = a5f.in9e('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n6h.bjP0x = NEJ.C();
    b6f = n6h.bjP0x.O6I(n6h.ei8a);
    K6E = n6h.bjP0x.cl7e;
    b6f.bj6d = function (e6c) {
        e6c.title = "意见反馈";
        this.bk6e(e6c)
    };
    b6f.ca7T = function () {
        this.cd7W = gt9k
    };
    b6f.bS7L = function () {
        this.cc7V();
        this.ha9R = {};
        var Hj7c = a5f.F6z;
        var Fx7q = h6b.s6m;
        this.ha9R.submit_btn = Hj7c(this.m6g, "u-btn2")[0];
        this.ha9R.cancle_btn = Hj7c(this.m6g, "u-btn2")[1];
        this.ha9R.prompt_msg = Hj7c(this.m6g, "u-err")[0];
        this.ha9R.zs = Hj7c(this.m6g, "zs")[0];
        a5f.Y6S(this.ha9R.zs, "display", "none");
        this.ha9R.fb_txt = Hj7c(this.m6g, "u-txt")[0];
        this.ha9R.contact = Hj7c(this.m6g, "u-txt")[1];
        a5f.fV9M(this.ha9R.fb_txt, "holder");
        a5f.fV9M(this.ha9R.contact, "holder");
        if (a5f.by7r(this.ha9R.fb_txt.parentNode, "holder-parent")) {
            a5f.Y6S(this.ha9R.fb_txt.parentNode, "display", "block")
        }
        if (a5f.by7r(this.ha9R.contact.parentNode, "holder-parent")) {
            a5f.Y6S(this.ha9R.contact.parentNode, "display", "block")
        }
        Fx7q(this.ha9R.submit_btn, "click", this.bWn3x.g6a(this));
        Fx7q(this.ha9R.cancle_btn, "click", this.bWm3x.g6a(this));
        Fx7q(this.ha9R.prompt_msg, "msgShow", this.bVZ3x.g6a(this));
        Fx7q(this.ha9R.fb_txt, "keyup", this.tm3x.g6a(this));
        Fx7q(this.ha9R.fb_txt, "input", this.fC8u.g6a(this));
        Fx7q(this.ha9R.contact, "keyup", this.bVL3x.g6a(this));
        Fx7q(this.ha9R.contact, "input", this.bKH9y.g6a(this));
        this.kU0x = q6k.hM9D.A6u()
    };
    b6f.bWn3x = function (d6d) {
        h6b.bf6Z(d6d);
        if (this.cC7v()) return;
        var bl6f = this.ha9R.fb_txt.value.trim();
        var bm6g = bl6f.length;
        var e6c = {type: "json", method: "post", noEnc: true};
        var bKG9x = this.ha9R.contact.value.trim();
        var WD6x = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: l6f.bnD1x(),
            contact: bKG9x
        };
        var j6d = {content: bl6f, client: "web", xInfo: JSON.stringify(WD6x)}, nn1x = this.kU0x.bZz4D();
        if (nn1x && nn1x.length) {
            j6d.log = nn1x.join("\n")
        }
        if (bm6g == 0) {
            this.ha9R.prompt_msg.innerHTML = "反馈内容不能为空";
            a5f.Y6S(this.ha9R.prompt_msg, "display", "block");
            return
        }
        if (bKG9x.length > 100) {
            this.ha9R.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a5f.Y6S(this.ha9R.prompt_msg, "display", "block");
            return
        }
        this.cC7v(true);
        e6c.data = k6e.dh8Z(j6d);
        e6c.onload = this.bVI3x.g6a(this);
        e6c.onerror = this.ix9o.g6a(this);
        x6r.bp7i("/api/feedback/web", e6c)
    };
    b6f.fC8u = function (d6d) {
        var bm6g = this.ha9R.fb_txt.value.trim().length;
        if (bm6g > 0) a5f.Y6S(this.ha9R.prompt_msg, "display", "none");
        dn8f.dj8b.browser == "ie" && dn8f.dj8b.version < "7.0" ? setTimeout(this.fN9E.g6a(this), 0) : this.fN9E()
    };
    b6f.tm3x = function (d6d) {
        if (d6d.keyCode === 8) this.fN9E()
    };
    b6f.fN9E = function () {
        var bm6g = this.ha9R.fb_txt.value.trim().length;
        this.ha9R.zs.innerHTML = !bm6g ? "0/140" : bm6g + "/140"
    };
    b6f.bKH9y = function (d6d) {
        var bm6g = this.ha9R.contact.value.trim().length;
        if (bm6g > 0) a5f.Y6S(this.ha9R.prompt_msg, "display", "none")
    };
    b6f.bVL3x = function (d6d) {
        if (d6d.keyCode === 8) this.bKH9y()
    };
    b6f.bWm3x = function (d6d) {
        h6b.cm7f(d6d);
        this.br7k()
    };
    b6f.bVZ3x = function (d6d) {
        var f6b = h6b.U6O(d6d);
        f6b.innerHTML = "请输入反馈内容"
    };
    b6f.cBs0x = function (cBt0x) {
        var f6b = h6b.U6O(d6d);
        f6b.innerHTML = ""
    };
    b6f.bVI3x = function (o6i) {
        this.cC7v(false);
        this.br7k();
        n6h.X6R.L6F({tip: "意见发送成功", autoclose: true})
    };
    b6f.ix9o = function (o6i) {
        this.cC7v(false);
        n6h.X6R.L6F({tip: "意见发送失败", autoclose: true})
    };
    b6f.cC7v = function (cQ7J) {
        return this.dO8G(this.ha9R.submit_btn, cQ7J, "发送意见", "发送中...")
    };
    b6f.L6F = function () {
        K6E.L6F.call(this);
        this.cC7v(false);
        this.ha9R.fb_txt.value = "";
        this.ha9R.contact.value = "";
        a5f.Y6S(this.ha9R.prompt_msg, "display", "none");
        this.fN9E()
    };
    l6f.bVF3x = function (e6c) {
        e6c = e6c || {};
        if (e6c.title === undefined) e6c.title = "意见反馈";
        n6h.bjP0x.L6F(e6c)
    };
    cW7P.feedback = l6f.feedback = l6f.bVF3x
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, N6H = c6e("nej.ui"), b6f;
    if (!!N6H.xP4T) return;
    N6H.xP4T = NEJ.C();
    b6f = N6H.xP4T.O6I(N6H.ee8W);
    b6f.cs7l = function () {
        this.gL9C = this.bKB9s();
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.cq7j = e6c.index;
        this.gg9X = e6c.total;
        this.gX9O = e6c.range;
        this.ge9V(e6c.data)
    };
    b6f.bA7t = function () {
        this.bF7y();
        delete this.bi6c;
        delete this.cq7j;
        delete this.gg9X;
        delete this.gX9O
    };
    b6f.hG9x = bn7g;
    b6f.bKB9s = function () {
        var gq9h = +(new Date);
        return function () {
            return "itm-" + ++gq9h
        }
    }();
    b6f.Ed6X = function () {
        return this.gL9C
    };
    b6f.hC9t = function () {
        return this.bi6c
    };
    b6f.ge9V = function (j6d) {
        this.bi6c = j6d || {};
        this.hG9x(this.bi6c)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), N6H = c6e("nej.ui"), b6f, K6E;
    if (!!N6H.tk3x) return;
    N6H.tk3x = NEJ.C();
    b6f = N6H.tk3x.O6I(N6H.xP4T);
    K6E = N6H.tk3x.cl7e;
    b6f.bj6d = function (e6c) {
        this.bVD3x = e6c.pkey || "id";
        this.bk6e(e6c)
    };
    b6f.FZ7S = function (j6d) {
        this.z6t("ondelete", {ext: j6d, id: this.Ed6X(), data: this.hC9t(), body: this.ln0x()})
    };
    b6f.sW2x = function (j6d) {
        this.z6t("onupdate", {ext: j6d, id: this.Ed6X(), data: this.hC9t(), body: this.ln0x()})
    };
    b6f.ge9V = function (j6d) {
        K6E.ge9V.apply(this, arguments);
        this.gL9C = this.bi6c[this.bVD3x] || this.bKB9s()
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, fj8b = NEJ.R, a5f = c6e("nej.e"), k6e = c6e("nej.u"), N6H = c6e("nej.ui"), b6f, io9f,
        bjL0x;
    if (!!N6H.bjK0x) return;
    N6H.bjK0x = NEJ.C();
    b6f = N6H.bjK0x.O6I(N6H.ee8W);
    b6f.bj6d = function (e6c) {
        this.Xc6W = NEJ.X({}, e6c);
        this.fG8y = NEJ.X({}, e6c);
        delete this.Xc6W.onchange;
        this.fG8y.onchange = this.fI9z.g6a(this);
        this.bk6e(e6c);
        this.bVu3x({number: e6c.number, label: e6c.label || Z6T})
    };
    b6f.bA7t = function () {
        this.bF7y();
        if (!!this.kE0x) {
            this.kE0x.S6M();
            delete this.kE0x
        }
        delete this.Xc6W;
        delete this.fG8y;
        this.bUZ3x();
        this.m6g.innerHTML = "&nbsp;"
    };
    b6f.ca7T = function () {
        this.lw0x = io9f
    };
    b6f.bVu3x = function (j6d) {
        a5f.dH8z(this.m6g, bjL0x, j6d);
        var gq9h = a5f.JO8G();
        this.fG8y.list = a5f.F6z(this.m6g, "js-i-" + gq9h);
        this.fG8y.pbtn = (a5f.F6z(this.m6g, "js-p-" + gq9h) || fj8b)[0];
        this.fG8y.nbtn = (a5f.F6z(this.m6g, "js-n-" + gq9h) || fj8b)[0]
    };
    b6f.bS7L = function () {
        this.cc7V()
    };
    b6f.cBv0x = function (j6d) {
        return a5f.bX7Q(bjL0x, j6d)
    };
    b6f.fI9z = function (d6d) {
        if (this.NB0x) return;
        var r6l = d6d.index, cu7n = d6d.total;
        this.NB0x = !0;
        this.NA0x(r6l, cu7n);
        k6e.bb6V(this.Xm6g, function (sT2x) {
            sT2x.NA0x(r6l, cu7n)
        });
        this.NB0x = !1;
        this.z6t("onchange", d6d)
    };
    b6f.g6a = function (bG7z) {
        bG7z = a5f.B6v(bG7z);
        if (!bG7z) return this;
        var co7h = NEJ.X({}, this.Xc6W);
        co7h.parent = bG7z;
        co7h.index = this.sQ2x();
        co7h.total = this.jn0x();
        var sT2x = this.constructor.A6u(co7h);
        sT2x.vF3x("onchange", this.fG8y.onchange);
        if (!this.Xm6g) this.Xm6g = [];
        this.Xm6g.push(sT2x);
        return this
    };
    b6f.bUZ3x = function () {
        var bqn4r = function (sT2x, r6l, i6c) {
            sT2x.S6M();
            i6c.splice(r6l, 1)
        };
        return function () {
            k6e.mt0x(this.Xm6g, bqn4r)
        }
    }();
    b6f.kp0x = function (r6l) {
        if (!this.kE0x) return;
        this.kE0x.kp0x(r6l)
    };
    b6f.sQ2x = function () {
        if (!this.kE0x) return 1;
        return this.kE0x.sQ2x()
    };
    b6f.jn0x = function () {
        if (!this.kE0x) return 1;
        return this.kE0x.jn0x()
    };
    b6f.NA0x = function (r6l, cu7n) {
        if (!this.kE0x) return;
        this.kE0x.NA0x(r6l, cu7n)
    };
    b6f.bjA0x = function (cu7n) {
        if (!this.kE0x) return;
        this.kE0x.bjA0x(cu7n)
    };
    io9f = a5f.sp2x(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bjL0x = a5f.et8l('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        N6H = c6e("nej.ut"), b6f;
    if (!!N6H.Xr6l) return;
    N6H.Xr6l = NEJ.C();
    b6f = N6H.Xr6l.O6I(N6H.cD7w);
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.Xs6m = e6c.pbtn;
        this.cj7c = e6c.nbtn;
        this.Xt6n = e6c.sbtn;
        this.Xu6o = e6c.ebtn;
        this.iG9x = e6c.event || "click";
        this.ki0x = e6c.selected || "js-selected";
        this.nD1x = e6c.disabled || "js-disabled";
        this.bUk3x(e6c.list);
        this.NA0x(e6c.index || 1, e6c.total || 1)
    };
    b6f.bA7t = function () {
        this.bF7y();
        delete this.bO7H;
        delete this.iG9x;
        delete this.Xs6m;
        delete this.cj7c;
        delete this.Xt6n;
        delete this.Xu6o;
        delete this.bJg8Y;
        delete this.gg9X;
        delete this.cq7j;
        delete this.ki0x;
        delete this.nD1x
    };
    b6f.bUk3x = function () {
        var bjy0x = function (f6b) {
            this.bO7H.push(f6b);
            this.bT7M([[f6b, this.iG9x, this.cr7k.en8f(this, 0)]])
        };
        return function (i6c) {
            this.bO7H = [];
            this.bT7M([[this.Xs6m, "click", this.cr7k.en8f(this, -1)], [this.cj7c, "click", this.cr7k.en8f(this, 1)], [this.Xt6n, "click", this.cr7k.en8f(this, -2)], [this.Xu6o, "click", this.cr7k.en8f(this, 2)]]);
            k6e.bb6V(i6c, bjy0x, this)
        }
    }();
    b6f.Ca5f = function (f6b, r6l) {
        if (r6l == null) {
            f6b.innerText = "";
            a5f.Y6S(f6b, "display", "none");
            a5f.v6p(f6b, this.ki0x)
        } else {
            f6b.innerText = r6l;
            a5f.Y6S(f6b, "display", "");
            r6l == this.cq7j ? a5f.w6q(f6b, this.ki0x) : a5f.v6p(f6b, this.ki0x)
        }
    };
    b6f.bjx0x = function () {
        if (this.cq7j <= 1) {
            a5f.w6q(this.Xs6m, this.nD1x);
            a5f.w6q(this.Xt6n, this.nD1x)
        } else {
            a5f.v6p(this.Xs6m, this.nD1x);
            a5f.v6p(this.Xt6n, this.nD1x)
        }
        if (this.cq7j >= this.gg9X) {
            a5f.w6q(this.cj7c, this.nD1x);
            a5f.w6q(this.Xu6o, this.nD1x)
        } else {
            a5f.v6p(this.cj7c, this.nD1x);
            a5f.v6p(this.Xu6o, this.nD1x)
        }
    };
    b6f.XF6z = bn7g;
    b6f.bjw0x = function () {
        this.XF6z();
        this.bjx0x();
        this.z6t("onchange", {last: this.bJg8Y, total: this.gg9X, index: this.cq7j, ext: this.bjv0x})
    };
    b6f.bIL8D = function (r6l) {
        r6l = parseInt(r6l);
        if (isNaN(r6l) || this.gg9X == null) return !1;
        r6l = Math.max(1, Math.min(r6l, this.gg9X));
        this.bJg8Y = this.cq7j;
        this.cq7j = r6l;
        return !0
    };
    b6f.bju0x = function (cu7n) {
        cu7n = parseInt(cu7n);
        if (isNaN(cu7n) || cu7n < 1) return !1;
        this.gg9X = cu7n;
        return !0
    };
    b6f.cr7k = function (d6d, eO8G) {
        h6b.cm7f(d6d);
        var G6A = h6b.U6O(d6d);
        if (!G6A || a5f.by7r(G6A, this.ki0x) || a5f.by7r(G6A, this.nD1x)) return;
        var r6l = G6A.innerText;
        switch (eO8G) {
            case 1:
            case-1:
                r6l = this.cq7j + eO8G;
                break;
            case 2:
                r6l = this.gg9X;
                break;
            case-2:
                r6l = 1;
                break
        }
        this.kp0x(r6l)
    };
    b6f.sQ2x = function () {
        return this.cq7j
    };
    b6f.kp0x = function (r6l) {
        var bTM2x = this.cq7j;
        this.bIL8D(r6l);
        if (bTM2x != this.cq7j) this.bjw0x();
        return this
    };
    b6f.jn0x = function () {
        return this.gg9X
    };
    b6f.Oe3x = function (cu7n) {
        if (this.bju0x(cu7n) && this.cq7j != null) {
            this.cq7j = 1;
            this.bjw0x()
        }
        return this
    };
    b6f.bjA0x = function (cu7n) {
        if (this.bju0x(cu7n)) {
            this.XF6z();
            this.bjx0x()
        }
        return this
    };
    b6f.NA0x = function (r6l, cu7n) {
        if (!this.bju0x(cu7n) || !this.bIL8D(r6l)) return this;
        this.bjw0x();
        return this
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), k6e = c6e("nej.u"), cP7I = c6e("nej.x"), N6H = c6e("nej.ut"), b6f;
    if (!!N6H.Ng9X) return;
    N6H.Ng9X = NEJ.C();
    b6f = N6H.Ng9X.O6I(N6H.Xr6l);
    b6f.cs7l = function () {
        this.cx7q();
        var f6b = a5f.cY7R("span", "zdot");
        f6b.innerText = "...";
        this.XO6I = [f6b.cloneNode(true), f6b]
    };
    b6f.bA7t = function () {
        this.bF7y();
        this.bIG8y()
    };
    b6f.bIG8y = function () {
        a5f.mK1x(this.XO6I[0]);
        a5f.mK1x(this.XO6I[1])
    };
    b6f.XF6z = function () {
        this.bjv0x = {last: !1, first: !1, list: this.bO7H};
        this.bIG8y();
        this.Ca5f(this.bO7H[0], 1);
        var bI7B = 1, bm6g = this.bO7H.length;
        if (this.gg9X < bm6g) {
            for (var qy2x; bI7B < bm6g; bI7B++) {
                qy2x = bI7B + 1;
                this.Ca5f(this.bO7H[bI7B], qy2x > this.gg9X ? null : qy2x)
            }
            return
        }
        if (this.cq7j > 1) {
            var cA7t = Math.floor((bm6g - 2) / 2), bTG2x = this.gg9X - bm6g + 2, hW9N = Math.max(2, this.cq7j - cA7t);
            if (this.gg9X >= bm6g) {
                hW9N = Math.min(hW9N, bTG2x)
            }
            if (hW9N > 2) {
                this.bO7H[0].insertAdjacentElement("afterEnd", this.XO6I[0]);
                this.bjv0x.first = !0
            }
            for (var r6l; ; bI7B++) {
                r6l = hW9N + bI7B - 1;
                if (r6l > this.cq7j) break;
                this.Ca5f(this.bO7H[bI7B], r6l)
            }
        }
        if (this.cq7j < this.gg9X) {
            var r6l, hW9N = this.cq7j + 1;
            for (var i = 0, l = bm6g - 2; ; i++, bI7B++) {
                r6l = hW9N + i;
                if (bI7B > l || r6l > this.gg9X) break;
                this.Ca5f(this.bO7H[bI7B], r6l)
            }
            if (r6l < this.gg9X) {
                this.bO7H[bI7B].insertAdjacentElement("beforeBegin", this.XO6I[1]);
                this.bjv0x.last = !0
            }
            if (r6l <= this.gg9X) {
                this.Ca5f(this.bO7H[bI7B++], this.gg9X)
            }
        }
        for (; bI7B < bm6g; bI7B++) {
            this.Ca5f(this.bO7H[bI7B])
        }
    };
    a5f.bTE2x = cP7I.bTE2x = function (bG7z, e6c) {
        var D6x = a5f.kZ0x(bG7z);
        if (!D6x) return null;
        if (!N6H.VO6I(D6x, N6H.Ng9X)) {
            e6c = e6c || {};
            var i6c = !e6c.clazz ? a5f.db8T(D6x) : a5f.F6z(D6x, e6c.clazz);
            e6c.pbtn = i6c.shift();
            e6c.nbtn = i6c.pop();
            e6c.list = i6c;
            delete e6c.clazz
        }
        return N6H.VO6I(D6x, N6H.Ng9X, e6c || Z6T)
    };
    cP7I.isChange = !0
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, fj8b = NEJ.R, a5f = c6e("nej.e"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        N6H = c6e("nej.ui"), b6f, K6E, gt9k;
    if (!!N6H.Nc9T) return;
    N6H.Nc9T = NEJ.C();
    b6f = N6H.Nc9T.O6I(N6H.bjK0x);
    K6E = N6H.Nc9T.cl7e;
    b6f.bj6d = function (e6c) {
        e6c.number = parseInt(e6c.number) || 9;
        this.bk6e(e6c);
        this.kE0x = H6B.Ng9X.A6u(this.fG8y)
    };
    b6f.fI9z = function (d6d) {
        if (!!this.Xc6W.noend) {
            var bIu8m = d6d.ext || Z6T, i6c = bIu8m.list || fj8b;
            if (bIu8m.last) {
                a5f.Y6S(i6c[i6c.length - 1], "display", "none")
            }
        }
        K6E.fI9z.apply(this, arguments)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        ba6U = c6e("nej.ui"), N6H = c6e("nej.ut"), b6f;
    if (!!N6H.XX6R) return;
    N6H.XX6R = NEJ.C();
    b6f = N6H.XX6R.O6I(N6H.cD7w);
    b6f.bj6d = function (e6c) {
        this.iO9F = {};
        this.bk6e(e6c);
        this.iE9v = a5f.B6v(e6c.parent);
        this.fb8T = {parent: this.iE9v};
        this.oC1x = parseInt(e6c.limit) || 10;
        this.yB4F = parseInt(e6c.first) || this.oC1x;
        this.bTv2x(e6c.item);
        this.bTs2x(e6c.cache || Z6T);
        this.bTl2x(e6c.pager || Z6T);
        this.ge9V()
    };
    b6f.bA7t = function () {
        this.z6t("onbeforerecycle");
        this.MN9E();
        this.bF7y();
        if (this.iO9F.clear) {
            this.R6L.uk3x(this.iO9F.key)
        }
        this.R6L.S6M();
        if (!!this.iU9L) {
            this.iU9L.S6M();
            delete this.iU9L
        }
        delete this.bIa8S;
        delete this.fG8y;
        delete this.Yl6f;
        delete this.R6L;
        delete this.iE9v;
        delete this.MG9x;
        delete this.fb8T;
        delete this.iO9F
    };
    b6f.bHZ8R = function () {
        var cZ7S = /\{(.*?)\}/gi, bTa2x = function (pT1x, j6d) {
            return (pT1x || "{id}{seed}").replace(cZ7S, function ($1, $2) {
                var C6w = j6d[$2];
                return C6w == null ? $1 : C6w
            })
        };
        return function (D6x) {
            var J6D = bTa2x(this.fb8T.jstIdTempalte, {id: D6x, seed: a5f.JO8G()});
            if (!this.fb8T.jstIdType) {
                return a5f.B6v(J6D)
            } else if (this.fb8T.jstIdType == 1) {
                return (a5f.F6z(this.iE9v, J6D) || [])[0]
            }
        }
    }();
    b6f.zo5t = function (bI7B, be6Y, gn9e, bm6g) {
        var o6i = {index: 1, total: 1};
        if (be6Y >= bI7B) {
            o6i.index = Math.floor((be6Y - bI7B) / gn9e) + 2
        }
        if (bm6g > bI7B) {
            o6i.total = Math.ceil((bm6g - bI7B) / gn9e) + 1
        }
        return o6i
    };
    b6f.bHY8Q = function (J6D) {
        delete this.MG9x;
        this.GY7R = J6D;
        this.bT7M([[this.iE9v, "click", this.bSX2x.g6a(this)]])
    };
    b6f.bTv2x = function (p6j) {
        if (k6e.fw8o(p6j)) {
            this.bHY8Q(p6j);
            return
        }
        NEJ.X(this.fb8T, p6j);
        var dT8L = this.fb8T.klass;
        delete this.fb8T.klass;
        if (k6e.fw8o(dT8L)) {
            this.bHY8Q(dT8L);
            return
        }
        delete this.GY7R;
        this.MG9x = dT8L;
        this.fb8T.ondelete = this.z6t.g6a(this, "ondelete");
        this.fb8T.onupdate = this.z6t.g6a(this, "onupdate")
    };
    b6f.bTs2x = function (Q6K) {
        var dT8L = Q6K.klass, jL0x = NEJ.X({}, Q6K);
        this.iO9F.key = jL0x.lkey;
        this.iO9F.data = jL0x.data || {};
        this.iO9F.clear = !!jL0x.clear;
        this.fb8T.pkey = jL0x.key || "id";
        jL0x.onlistload = this.bjo0x.g6a(this);
        jL0x.onpullrefresh = this.bSV2x.g6a(this);
        if (!!dT8L && "onlistchange" in dT8L) {
            this.bT7M([[dT8L, "listchange", this.bjj0x.g6a(this)]])
        } else {
            jL0x.onitemadd = this.Yy6s.g6a(this);
            jL0x.onitemdelete = this.YA6u.g6a(this);
            jL0x.onitemupdate = this.bHA8s.g6a(this)
        }
        this.R6L = (dT8L || N6H.On3x).A6u(jL0x);
        if (Q6K.total != null) {
            this.R6L.Oe3x(this.iO9F.key, Q6K.total)
        }
        if (!!Q6K.list) {
            this.R6L.ui3x(this.iO9F.key, Q6K.list)
        }
    };
    b6f.bTl2x = function (sT2x) {
        this.bIa8S = sT2x.klass || ba6U.Nc9T;
        this.fG8y = NEJ.X({}, sT2x);
        if (k6e.eC8u(sT2x.parent)) {
            this.fG8y.parent = sT2x.parent[0];
            this.LQ9H = sT2x.parent.slice(1);
            if (!this.LQ9H || !this.LQ9H.length) {
                delete this.LQ9H
            }
        }
        delete this.fG8y.klass
    };
    b6f.MN9E = function () {
        var go9f = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.z6t("onbeforelistclear", {parent: this.iE9v});
            if (!!this.fy8q && this.fy8q.length > 0) {
                this.fy8q = this.MG9x.S6M(this.fy8q);
                delete this.fy8q
            }
            if (go9f.test(this.iE9v.tagName)) {
                a5f.bPN0x(this.iE9v)
            } else {
                this.iE9v.innerHTML = ""
            }
        }
    }();
    b6f.bjh0x = function (YH6B) {
        if (!!this.fG8y.fixed) return;
        a5f.Y6S(this.fG8y.parent, "display", YH6B);
        k6e.bb6V(this.LQ9H, function (bG7z) {
            a5f.Y6S(bG7z, "display", YH6B)
        }, this)
    };
    b6f.bjg0x = function () {
        var r6l = this.fG8y.index || 1;
        delete this.fG8y.index;
        if (!!this.iU9L) {
            r6l = this.iU9L.sQ2x()
        }
        this.zb5g({last: r6l, index: r6l})
    };
    b6f.zb5g = function (d6d) {
        this.z6t("onpagechange", d6d)
    };
    b6f.bHt8l = function (be6Y) {
        this.iO9F.offset = be6Y;
        this.WY6S()
    };
    b6f.bHs8k = function (e6c) {
        return e6c
    };
    b6f.WY6S = function () {
        this.LB9s();
        var j6d = this.iO9F.data;
        j6d.offset = this.iO9F.offset;
        var px1x = j6d.offset == 0;
        j6d.total = px1x;
        this.iO9F.limit = px1x ? this.yB4F : this.oC1x;
        j6d.limit = this.iO9F.limit;
        this.R6L.la0x(this.bHs8k(NEJ.X({}, this.iO9F)))
    };
    b6f.bjo0x = function (e6c) {
        if (e6c.key != this.iO9F.key || e6c.offset != this.iO9F.offset) return;
        this.YR7K();
        var i6c = this.R6L.hi9Z(e6c.key);
        if (!i6c || !i6c.length) {
            this.bjf0x();
            return
        }
        var gn9e = e6c.limit, be6Y = e6c.offset;
        if (this.bje0x(i6c, be6Y, gn9e)) return;
        this.z6t("onbeforelistrender", {list: i6c, offset: be6Y, parent: this.iE9v});
        if (!!this.GY7R) {
            this.fb8T.xlist = i6c;
            this.fb8T.beg = be6Y;
            this.fb8T.end = Math.min(i6c.length, be6Y + gn9e) - 1;
            this.fb8T.act = "list";
            var dL8D = a5f.bX7Q(this.GY7R, this.fb8T);
            this.Lv9m(dL8D)
        } else {
            this.fb8T.limit = gn9e;
            this.fb8T.offset = be6Y;
            var gO9F = a5f.zn5s(i6c, this.MG9x, this.fb8T);
            this.Lt9k(gO9F)
        }
        this.z6t("onafterlistrender", {list: i6c, offset: be6Y, parent: this.iE9v})
    };
    b6f.bSV2x = function (e6c) {
        if (!this.Yl6f) return;
        delete this.Yl6f;
        this.YR7K("onafterpullrefresh");
        this.ge9V()
    };
    b6f.bHf8X = function (r6l, cu7n) {
        if (!!this.iU9L) {
            var Am5r = this.iU9L.sQ2x(), cxJ9A = this.iU9L.jn0x();
            if (Am5r > cu7n || cu7n != cxJ9A) {
                this.iU9L.S6M();
                delete this.iU9L;
                this.zb5g({last: Am5r, index: Math.min(r6l, cu7n)});
                return !0
            }
        } else {
            this.fG8y.index = r6l;
            this.fG8y.total = cu7n;
            this.iU9L = this.bIa8S.A6u(this.fG8y);
            this.iU9L.vF3x("onchange", this.zb5g.g6a(this));
            k6e.bb6V(this.LQ9H, function (bG7z) {
                this.iU9L.g6a(bG7z)
            }, this)
        }
    };
    b6f.YZ7S = function () {
        var gq9h = +(new Date);
        return function (j6d) {
            var D6x = j6d[this.fb8T.pkey];
            if (!D6x) {
                j6d["dirty-data"] = !0;
                j6d[this.fb8T.pkey] = "dirty-" + gq9h++
            }
            return j6d
        }
    }();
    b6f.Zb7U = function (j6d) {
        var D6x = j6d[this.fb8T.pkey];
        if (!!j6d["dirty-data"]) {
            delete j6d["dirty-data"];
            delete j6d[this.fb8T.pkey]
        }
        return D6x
    };
    b6f.Zc7V = function () {
        var cxD9u = function (kf0x, mb0x) {
            this.iE9v.insertAdjacentElement(kf0x, mb0x)
        };
        return function (kf0x, j6d) {
            var JK8C = [j6d];
            if (!!this.GY7R) {
                this.fb8T.xlist = JK8C;
                this.fb8T.beg = 0;
                this.fb8T.end = 0;
                this.fb8T.act = "add";
                this.Lv9m(a5f.bX7Q(this.GY7R, this.fb8T), kf0x)
            } else {
                this.fb8T.limit = 1;
                this.fb8T.offset = 0;
                this.fb8T.parent = cxD9u.g6a(this, kf0x);
                var gO9F = a5f.zn5s(JK8C, this.MG9x, this.fb8T);
                this.fb8T.parent = this.iE9v;
                this.Lt9k(gO9F)
            }
        }
    }();
    b6f.LB9s = bn7g;
    b6f.YR7K = function (T6N) {
        var d6d = {parent: this.iE9v};
        this.z6t(T6N || "onafterlistload", d6d);
        if (!d6d.stopped) {
            a5f.mK1x(this.cp7i)
        }
    };
    b6f.bje0x = bn7g;
    b6f.Zf7Y = function (bE7x, kf0x) {
        if (k6e.fw8o(bE7x)) {
            if (!this.cp7i) this.cp7i = a5f.cY7R("div");
            this.cp7i.innerHTML = bE7x
        } else {
            this.cp7i = bE7x
        }
        this.iE9v.insertAdjacentElement(kf0x || "beforeEnd", this.cp7i)
    };
    b6f.yq4u = function (T6N, kT0x, kf0x) {
        var d6d = {parent: this.iE9v};
        this.z6t(T6N, d6d);
        if (!d6d.stopped) {
            this.Zf7Y(d6d.value || kT0x, kf0x)
        }
    };
    b6f.bjf0x = bn7g;
    b6f.Lv9m = bn7g;
    b6f.Lt9k = bn7g;
    b6f.bSX2x = function () {
        var go9f = /^(?:delete|update)$/;
        return function (d6d) {
            var f6b = h6b.U6O(d6d, "d:action");
            if (!f6b) return;
            var W6Q = a5f.u6o(f6b, "action");
            if (!go9f.test(W6Q)) return;
            var D6x = a5f.u6o(f6b, "id");
            if (!D6x) return;
            var p6j = this.R6L.ex8p(D6x);
            if (!p6j) return;
            h6b.bf6Z(d6d);
            this.z6t("on" + W6Q, {data: p6j, id: p6j[this.fb8T.pkey], body: a5f.B6v(this.bHZ8R(D6x))})
        }
    }();
    b6f.Yy6s = bn7g;
    b6f.Xd6X = function (d6d) {
        var j6d = d6d.data || {}, e6c = {data: j6d, key: this.iO9F.key, id: j6d[this.fb8T.pkey]};
        this.z6t("onbeforedelete", e6c);
        this.R6L.IT8L(e6c)
    };
    b6f.YA6u = bn7g;
    b6f.Xe6Y = function (d6d) {
        var j6d = d6d.data || {}, e6c = {data: j6d, key: this.iO9F.key};
        this.z6t("onbeforeupdate", e6c);
        this.R6L.WS6M(e6c)
    };
    b6f.bHA8s = function (d6d) {
        this.Lk8c(d6d, "onafterupdate");
        if (d6d.stopped) return;
        var D6x = d6d.data[this.fb8T.pkey];
        if (!!this.fy8q) {
            var p6j = a5f.bKl9c(D6x);
            if (!!p6j) p6j.ge9V(d6d.data)
        } else {
            var f6b = a5f.B6v(D6x + "" + a5f.JO8G());
            if (!f6b) return;
            var i6c = this.R6L.hi9Z(d6d.key), r6l = k6e.dd8V(i6c, d6d.data);
            if (r6l < 0) return;
            this.fb8T.list = i6c;
            this.fb8T.beg = r6l;
            this.fb8T.end = r6l;
            this.fb8T.act = "update";
            var dL8D = a5f.bX7Q(this.GY7R, this.fb8T);
            f6b.insertAdjacentHTML("afterEnd", dL8D);
            a5f.cz7s(f6b)
        }
    };
    b6f.Lk8c = function (d6d, T6N) {
        var p6j = d6d.data;
        if (!p6j || p6j[this.fb8T.pkey] == null) {
            this.z6t("onerror", d6d);
            d6d.stopped = !0
        }
        if (!d6d.stopped) {
            this.z6t(T6N, d6d)
        }
    };
    b6f.bja0x = bn7g;
    b6f.biZ0x = bn7g;
    b6f.bjj0x = function (d6d) {
        if (d6d.key != this.iO9F.key) return;
        switch (d6d.action) {
            case"add":
                this.Yy6s(d6d);
                break;
            case"delete":
                this.YA6u(d6d);
                break;
            case"update":
                this.bHA8s(d6d);
                break;
            case"refresh":
                this.ge9V();
                break;
            case"unshift":
                this.biZ0x(d6d.offset, d6d.limit);
                break;
            case"append":
                this.bja0x(d6d.offset, d6d.limit);
                break
        }
    };
    b6f.oY1x = function (p6j) {
        this.Xe6Y({data: p6j})
    };
    b6f.ma0x = function (p6j) {
        this.Xd6X({data: p6j})
    };
    b6f.sk2x = function (p6j) {
        this.R6L.iY9P({data: p6j, key: this.iO9F.key})
    };
    b6f.sj2x = function () {
        return this.R6L
    };
    b6f.biY0x = function (j6d) {
        this.Zc7V("afterBegin", this.YZ7S(j6d));
        return this.Zb7U(j6d)
    };
    b6f.bGF8x = function (j6d) {
        this.Zc7V("beforeEnd", this.YZ7S(j6d));
        return this.Zb7U(j6d)
    };
    b6f.ge9V = function () {
        this.MN9E();
        this.bjg0x()
    };
    b6f.cBz0x = function () {
        this.R6L.uk3x(this.iO9F.key);
        this.ge9V()
    };
    b6f.bpS3x = function () {
        if (!!this.Yl6f) return;
        this.Yl6f = !0;
        this.yq4u("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.R6L.bpS3x({key: this.iO9F.key, data: this.iO9F.data})
    };
    b6f.jn0x = function () {
        return this.R6L.jn0x(this.iO9F.key)
    };
    b6f.bGx8p = function () {
        return this.iU9L
    };
    b6f.VS6M = function () {
        return this.R6L.VS6M(this.iO9F.key)
    };
    b6f.cwq9h = function () {
        return this.fy8q
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, fj8b = NEJ.R, k6e = c6e("nej.u"), a5f = c6e("nej.e"), N6H = c6e("nej.ut"), b6f, K6E;
    if (!!N6H.iP9G) return;
    N6H.iP9G = NEJ.C();
    b6f = N6H.iP9G.O6I(N6H.XX6R);
    K6E = N6H.iP9G.cl7e;
    b6f.zo5t = function (be6Y, bm6g) {
        return K6E.zo5t.call(this, this.yB4F, be6Y, this.oC1x, bm6g)
    };
    b6f.biX0x = function (r6l) {
        var be6Y = 0;
        if (r6l > 1) be6Y = this.yB4F + (r6l - 2) * this.oC1x;
        return be6Y
    };
    b6f.zb5g = function (d6d) {
        K6E.zb5g.apply(this, arguments);
        if (!d6d.stopped) {
            this.bHt8l(this.biX0x(d6d.index))
        }
    };
    b6f.LB9s = function () {
        this.MN9E();
        this.yq4u("onbeforelistload", "列表加载中...")
    };
    b6f.YR7K = function () {
        K6E.YR7K.apply(this, arguments);
        this.MN9E()
    };
    b6f.bje0x = function (i6c, be6Y, gn9e) {
        var bu7n = this.zo5t(be6Y, i6c.length);
        if (this.bHf8X(bu7n.index, bu7n.total)) return !0;
        this.bjh0x(bu7n.total > 1 ? "" : "none")
    };
    b6f.bjf0x = function () {
        this.yq4u("onemptylist", "没有列表数据！")
    };
    b6f.Zf7Y = function (bE7x, kf0x) {
        if (!kf0x && k6e.fw8o(bE7x)) {
            this.iE9v.innerHTML = bE7x;
            return
        }
        K6E.Zf7Y.apply(this, arguments)
    };
    b6f.Lv9m = function (dL8D) {
        this.iE9v.innerHTML = dL8D
    };
    b6f.Lt9k = function (gO9F) {
        this.fy8q = gO9F
    };
    b6f.Yy6s = function (d6d) {
        this.Lk8c(d6d, "onafteradd");
        if (!d6d.stopped) this.ge9V()
    };
    b6f.YA6u = function (d6d) {
        this.Lk8c(d6d, "onafterdelete");
        if (!d6d.stopped) this.ge9V()
    };
    b6f.bja0x = function (be6Y, gn9e) {
        var r6l = 1;
        if (!!this.iU9L) {
            r6l = this.iU9L.sQ2x()
        }
        var jB0x = this.biX0x(r6l), gs9j = jB0x + (r6l > 1 ? this.oC1x : this.yB4F);
        if (be6Y >= gs9j && !!this.iU9L) {
            var bu7n = this.zo5t(0, this.jn0x());
            this.iU9L.bjA0x(bu7n.total);
            this.bjh0x(bu7n.total > 1 ? "" : "none")
        } else {
            this.ge9V()
        }
    };
    b6f.biZ0x = function (be6Y, gn9e) {
        var r6l = 1;
        if (!!this.iU9L) {
            r6l = this.iU9L.sQ2x()
        }
        var jB0x = this.biX0x(r6l), bu7n = this.zo5t(jB0x, this.jn0x());
        this.zb5g({last: r6l, index: bu7n.index})
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), H6B = c6e("nej.ut"),
        k6e = c6e("nej.u"), l6f = c6e("nm.x"), q6k = c6e("nm.d"), y6s = c6e("nm.w"), fc8U = 40, b6f, K6E;
    y6s.Zy7r = NEJ.C();
    b6f = y6s.Zy7r.O6I(H6B.cD7w);
    K6E = y6s.Zy7r.cl7e;
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.Sb4f = e6c.inputer;
        this.biW0x = e6c.tipper;
        this.bT7M([[this.Sb4f, "input", this.fC8u.g6a(this)]])
    };
    b6f.bA7t = function () {
        this.bF7y();
        this.GP7I(null, null)
    };
    b6f.fC8u = function (d6d) {
        if (d6d && d6d.type == "keyup" && (d6d.keyCode != 8 || d6d.keyCode != 68)) return;
        var T6N = this.Sb4f.value, cBA0x;
        if (l6f.Lu9l(T6N) > fc8U) {
            this.Sb4f.value = l6f.Bt5y(T6N, fc8U);
            this.GP7I("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g6a(this))
        } else if (T6N.indexOf("#") >= 0 || T6N.indexOf("@") >= 0) {
            this.GP7I("歌单名不能包含字符“@”和“#”！")
        } else {
            this.GP7I(null, null);
            this.z6t("onchange", {value: T6N})
        }
    };
    b6f.cvM9D = function () {
        this.fC8u()
    };
    b6f.GP7I = function () {
        var D6x = 0;
        return function (dA8s, bGq8i) {
            if (!!D6x) window.clearTimeout(D6x);
            if (!dA8s) {
                a5f.w6q(this.biW0x, "f-vhide");
                this.bGo8g = !1;
                return
            }
            this.biW0x.innerHTML = '<i class="u-icn u-icn-25"></i>' + dA8s;
            a5f.v6p(this.biW0x, "f-vhide");
            this.bGo8g = !0;
            if (k6e.gr9i(bGq8i)) D6x = window.setTimeout(function () {
                this.GP7I(null, null);
                bGq8i()
            }.g6a(this), 1e3)
        }
    }();
    b6f.bGn8f = function () {
        if (this.bGo8g) return !1;
        if (l6f.jy0x(this.Sb4f.value)) {
            this.GP7I("歌单名不能为空");
            return !1
        }
        return !0
    };
    b6f.fJ9A = function () {
        return this.Sb4f.value
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, h6b = c6e("nej.v"), a5f = c6e("nej.e"), x6r = c6e("nej.j"), n6h = c6e("nm.l"),
        y6s = c6e("nm.w"), bC7v = c6e("nej.ui"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), b6f, K6E;
    n6h.ZL7E = NEJ.C();
    b6f = n6h.ZL7E.O6I(n6h.ei8a);
    K6E = n6h.ZL7E.cl7e;
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.F6z(this.m6g, "j-flag");
        this.ZM7F = {inputer: i6c[0], tipper: i6c[1]};
        this.ij9a = {onerror: this.bGc8U.g6a(this), onitemadd: this.bGc8U.g6a(this)};
        this.ld0x = i6c[2];
        h6b.s6m(i6c[2], "click", this.Dr6l.g6a(this));
        h6b.s6m(i6c[3], "click", this.zQ5V.g6a(this));
        h6b.s6m(this.m6g, "keypress", this.bGa8S.g6a(this))
    };
    b6f.ca7T = function () {
        this.cd7W = "m-wgt-create"
    };
    b6f.bj6d = function (e6c) {
        e6c.clazz = " m-layer-w2";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "新建歌单";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bk6e(e6c);
        this.ZM7F.inputer.value = e6c.name || "";
        this.uJ3x = y6s.Zy7r.A6u(this.ZM7F);
        this.uJ3x.cvM9D();
        this.R6L = q6k.hw9n.A6u(this.ij9a);
        setTimeout(function () {
            this.ZM7F.inputer.focus()
        }.g6a(this), 0)
    };
    b6f.bA7t = function () {
        this.bF7y();
        if (this.uJ3x) {
            this.uJ3x.S6M();
            delete this.uJ3x
        }
        this.rM2x(!1);
        this.ZM7F.inputer.value = ""
    };
    b6f.rM2x = function (Rx4B) {
        this.ob1x = Rx4B;
        if (Rx4B) {
            this.ld0x.innerHTML = "<i>新建中...</i>";
            a5f.w6q(this.ld0x, "u-btn2-dis")
        } else {
            this.ld0x.innerHTML = "<i>新 建</i>";
            a5f.v6p(this.ld0x, "u-btn2-dis")
        }
    };
    b6f.Dr6l = function () {
        if (this.ob1x || !this.uJ3x.bGn8f()) return;
        var co7h = {key: "playlist_new-" + GUser.userId, data: {name: this.uJ3x.fJ9A()}, offset: 1};
        this.R6L.iY9P(co7h);
        this.rM2x(!0)
    };
    b6f.bGc8U = function (d6d) {
        var cg7Z = (d6d.result || Z6T).code;
        if (!cg7Z) {
            this.z6t("onsuccess", d6d.data)
        } else {
            this.z6t("onerror", d6d)
        }
        this.br7k()
    };
    b6f.zQ5V = function () {
        this.br7k()
    };
    b6f.bGa8S = function (d6d) {
        if (d6d.keyCode == 13) this.Dr6l()
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        H6B = c6e("nej.ut"), x6r = c6e("nej.j"), l6f = c6e("nm.x"), q6k = c6e("nm.d"), n6h = c6e("nm.l"), b6f, K6E;
    n6h.biR0x = NEJ.C();
    b6f = n6h.biR0x.O6I(n6h.ei8a);
    K6E = n6h.biR0x.cl7e;
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.F6z(this.m6g, "j-flag");
        this.ii9Z = {
            limit: 301,
            parent: i6c[1],
            cache: {klass: q6k.hw9n, lkey: "playlist_new-" + GUser.userId, onlisterror: this.biQ0x.g6a(this)},
            item: {klass: "m-wgt-subscribe-item", cutStr: l6f.Bv5A, escape: k6e.dQ8I}
        };
        this.ij9a = {onsuccess: this.bae7X.g6a(this), onerror: this.ew8o.g6a(this)};
        h6b.s6m(i6c[0], "click", this.Dr6l.g6a(this));
        h6b.s6m(i6c[1], "click", this.mq0x.g6a(this))
    };
    b6f.ca7T = function () {
        this.cd7W = "m-wgt-subscribe"
    };
    b6f.bj6d = function (e6c) {
        e6c.parent = e6c.parent || document.body;
        e6c.clazz = " m-layer-w2";
        e6c.title = "添加到歌单";
        e6c.draggable = !0;
        e6c.mask = !0;
        this.bk6e(e6c);
        this.bai7b = (e6c.tracks || []).reverse();
        this.ii9Z.item.size = this.bai7b.length;
        this.ij9a.name = e6c.name || "";
        this.bFU8M = q6k.vw3x.A6u({onaddsuccess: this.zG5L.g6a(this)});
        this.sw2x = q6k.hw9n.A6u({onlistload: this.ctX8P.g6a(this)});
        this.sw2x.bDv7o();
        k6e.bb6V(this.bai7b, function (p6j, r6l, i6c) {
            if (!k6e.lg0x(p6j)) {
                i6c[r6l] = this.bFU8M.ex8p(p6j) || p6j
            }
        }, this)
    };
    b6f.ctX8P = function () {
        if (this.dC8u) this.dC8u.S6M();
        this.dC8u = H6B.iP9G.A6u(this.ii9Z)
    };
    b6f.Dr6l = function () {
        this.br7k();
        if (this.DF6z) this.DF6z.S6M();
        this.DF6z = n6h.ZL7E.A6u(this.ij9a);
        this.DF6z.L6F()
    };
    b6f.mq0x = function () {
        var ctW8O = function (f6b) {
            while (f6b && f6b != document) {
                if (f6b.tagName.toLowerCase() == "li") {
                    return f6b
                }
                f6b = f6b.parentNode
            }
        };
        return function (d6d) {
            h6b.cm7f(d6d);
            var G6A = h6b.U6O(d6d), biP0x = ctW8O(G6A);
            if (!!biP0x && !a5f.by7r(biP0x, "dis")) {
                this.bae7X({id: a5f.u6o(biP0x, "id")})
            }
        }
    }();
    b6f.bae7X = function (d6d) {
        var D6x = d6d.id;
        if (!D6x || !this.bai7b.length) return;
        this.bFU8M.iY9P({key: "track_playlist-" + D6x, data: {tracks: this.bai7b, pid: D6x}});
        this.br7k()
    };
    b6f.zG5L = function () {
        this.z6t("onsuccess");
        n6h.X6R.L6F({tip: "收藏成功"})
    };
    b6f.ew8o = function (d6d) {
        this.br7k();
        this.z6t("onerror", d6d);
        var cI7B = "收藏失败";
        switch (d6d.code) {
            case 405:
                cI7B = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cI7B = "歌单数量超过限制";
                break;
            case 502:
                cI7B = "歌曲已经存在"
        }
        n6h.X6R.L6F({tip: cI7B, type: 2})
    };
    b6f.biQ0x = function () {
        this.br7k();
        n6h.X6R.L6F({tip: "列表下载失败，请稍后再试", type: 2})
    };
    l6f.mi0x = function (e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n6h.biR0x.L6F(e6c)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, dn8f = c6e("nej.p"), a5f = c6e("nej.e"), h6b = c6e("nej.v"),
        x6r = c6e("nej.j"), k6e = c6e("nej.u"), l6f = c6e("nm.x");
    var biO0x, nP1x, V6P = decodeURIComponent(location.href),
        jq0x = /.+(https?:\/\/.+\/proxy.html)/.test(V6P) ? RegExp.$1 : "";
    if (!!jq0x) {
        x6r.vZ4d("mail_proxy_url", jq0x)
    } else {
        jq0x = x6r.tb2x("mail_proxy_url") || "about:blank"
    }
    biO0x = a5f.Xb6V({
        src: jq0x, onload: function () {
            nP1x = true
        }
    });
    var bFJ8B = function () {
        x6r.gZ9Q("USER_TRIGGER", {value: true, expire: 1 / (24 * 60), path: "/"})
    };
    var ctd8V = function () {
        if (dn8f.dj8b.browser == "ie" && parseInt(dn8f.dj8b.version) < 9) {
            l6f.fh8Z({clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"});
            return false
        }
        return true
    };
    l6f.GN7G = function (t6n, D6x, W6Q) {
        if (!ctd8V()) return;
        bFJ8B();
        if (W6Q == "stop") {
            if (!nP1x) throw"proxy not loaded";
            bFJ8B();
            biO0x.contentWindow.location.replace(jq0x + "#" + k6e.dh8Z({
                to: "ifrmMusic",
                message: JSON.stringify({s: +(new Date), action: "stop"})
            }))
        } else {
            biO0x.contentWindow.location.replace(jq0x + "#" + k6e.dh8Z({
                to: "ifrmMusic",
                message: JSON.stringify({type: t6n, id: D6x, s: +(new Date), action: W6Q})
            }))
        }
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), x6r = c6e("nej.j"),
        k6e = c6e("nej.u"), l6f = c6e("nm.x"), n6h = c6e("nm.l"), q6k = c6e("nm.d");
    var kU0x = q6k.hM9D.A6u();
    var op1x = q6k.vw3x.A6u({onlistload: csS8K, onitemload: csI8A, onerror: ew8o});
    var DN6H = q6k.qj2x.A6u({onlistload: csv8n, onitemload: cst8l, onerror: ew8o});
    var bFE8w = {};

    function wa4e(d6d) {
        var f6b = h6b.U6O(d6d, "d:resAction"), W6Q = a5f.u6o(f6b, "resAction");
        if (f6b && (W6Q == "play" || W6Q == "addto")) {
            var t6n = parseInt(a5f.u6o(f6b, "resType"));
            bFz8r({
                action: W6Q,
                type: t6n,
                id: a5f.u6o(f6b, "resId"),
                from: a5f.u6o(f6b, "resFrom"),
                data: a5f.u6o(f6b, "resData"),
                order: a5f.u6o(f6b, "resOrder"),
                node: f6b
            });
            if (t6n != 13) bFy8q(f6b)
        }
    }

    function bFz8r(bQ7J) {
        var W6Q = bQ7J.action, t6n = bQ7J.type, D6x = bQ7J.id, dY8Q = bQ7J.from, j6d = bQ7J.data, sD2x = bQ7J.order,
            e6c = {
                limit: 1e3,
                offset: 0,
                data: {id: D6x},
                ext: {id: D6x, action: W6Q, type: t6n, from: dY8Q, data: j6d, node: bQ7J.node}
            };
        if (W6Q != "play" && W6Q != "addto" || !t6n) return;
        if (window.GRef && GRef == "mail") {
            l6f.GN7G(t6n, D6x, W6Q);
            return
        }
        switch (t6n) {
            case 13:
                e6c.key = "track_playlist-" + D6x;
                op1x.la0x(e6c);
                break;
            case 17:
                e6c.key = "program";
                e6c.id = D6x;
                DN6H.WE6y(e6c);
                if (W6Q == "play") {
                    x6r.bp7i("/api/dj/program/listen", {query: {id: D6x}})
                }
                break;
            case 18:
                e6c.key = "track";
                e6c.id = D6x;
                op1x.WE6y(e6c);
                break;
            case 19:
                e6c.key = "track_album-" + D6x;
                op1x.la0x(e6c);
                break;
            case 24:
                e6c.key = "track_day";
                op1x.la0x(e6c);
                break;
            case 2:
                e6c.key = "track_artist_top-" + D6x;
                op1x.la0x(e6c);
                break;
            case 70:
                e6c.key = "program_djradio-" + D6x + "-" + sD2x;
                e6c.data.radioId = D6x;
                e6c.data.asc = sD2x == 2;
                DN6H.la0x(e6c);
                break
        }
    }

    function bFt8l(i6c) {
        var o6i = [];
        k6e.bb6V(i6c, function (p6j) {
            if (p6j.mainSong) {
                p6j.mainSong.program = p6j;
                o6i.push(p6j.mainSong);
                p6j.localupdatetime = +(new Date);
                op1x.cam4q(p6j.mainSong);
                p6j.mainTrackId = p6j.mainSong.id;
                delete p6j.mainSong
            } else {
                var bFf7Y = op1x.ex8p(p6j.mainTrackId);
                bFf7Y && o6i.push(bFf7Y)
            }
        });
        return o6i
    }

    function baR7K(i6c, e6c) {
        var qR2x = e6c.action == "play" && e6c.type != 17 && e6c.type != 18, fM9D = e6c.action == "play";
        if (!i6c.length) return;
        if (e6c.type == 19) {
            i6c = l6f.IH8z(i6c, true, {play: true}, {source: "album", sourceid: e6c.id})
        } else {
            i6c = l6f.IH8z(i6c, true, {play: true})
        }
        k6e.bb6V(i6c, function (p6j) {
            p6j.source = l6f.bnI1x({fid: e6c.from, fdata: e6c.data, type: e6c.type, rid: e6c.id}, p6j.id)
        });
        top.player.addTo(i6c, qR2x, fM9D);
        kU0x.NC0x({rid: e6c.id, type: e6c.type, hash: l6f.Ig7Z(), play: fM9D, source: e6c.from, sourceid: e6c.data})
    }

    function csS8K(d6d) {
        var eJ8B = d6d.ext || {};
        i6c = op1x.hi9Z(d6d.key);
        baR7K(i6c, eJ8B);
        if (eJ8B.type == 13 && eJ8B.action == "play" && i6c && i6c.length > 0) {
            bFy8q(eJ8B.node);
            x6r.bp7i("/api/playlist/update/playcount", {query: {id: eJ8B.id}})
        }
    }

    function csI8A(d6d) {
        var i6c = [op1x.ex8p(d6d.id)], bg6a = i6c[0], qa2x = l6f.oU1x(bg6a), sc2x = bg6a.privilege || {};
        if (qa2x == 10) {
            l6f.tY3x(sc2x.fee || bg6a.fee, bg6a.id, "song", null, sc2x)
        } else if (qa2x == 100) {
            l6f.ic9T(null, null, null, true, bg6a)
        } else if (qa2x == 11) {
            l6f.bEP7I(bg6a.id, 18)
        } else {
            baR7K(i6c, d6d.ext)
        }
    }

    function csv8n(d6d) {
        var i6c = bFt8l(DN6H.hi9Z(d6d.key));
        baR7K(i6c, d6d.ext)
    }

    function cst8l(d6d) {
        var i6c = bFt8l([DN6H.ex8p(d6d.id)]);
        baR7K(i6c, d6d.ext)
    }

    function ew8o() {
        top.player.tipPlay("无法播放，音乐已下线")
    }

    function bFy8q(f6b) {
        var t6n = a5f.u6o(f6b, "resType"), D6x = a5f.u6o(f6b, "resId"), J6D = t6n + "-" + D6x;
        if (bFE8w[J6D]) return;
        var bFe7X = a5f.B6v("play-count"), biJ0x = a5f.F6z(f6b.parentNode, "nb"), PY4c = null;
        if (bFe7X) {
            PY4c = bFe7X
        } else {
            PY4c = !!biJ0x && !!biJ0x[0] ? biJ0x[0] : null
        }
        if (PY4c) {
            var cA7t = PY4c.innerHTML;
            if (/^\d+$/.test(cA7t)) {
                PY4c.innerText = +cA7t + 1
            }
            bFE8w[J6D] = true
        }
    }

    l6f.cqX8P = function (f6b) {
        h6b.s6m(f6b || document.body, "click", wa4e.g6a(this))
    };
    l6f.cqV8N = function (W6Q, t6n, D6x) {
        bFz8r({action: W6Q, type: t6n, id: D6x})
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), k6e = c6e("nej.u"), x6r = c6e("nej.j"),
        H6B = c6e("nej.ut"), q6k = c6e("nm.d"), b6f, K6E;
    q6k.ff8X({
        "share-all": {
            url: "/api/share/friends/resource", format: function (o6i, e6c) {
                this.cqC8u(o6i, e6c)
            }, onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns", format: function (o6i, e6c) {
                this.z6t("onshareall", e6c.result)
            }, onerror: function (o6i, e6c) {
                this.z6t("onshareall", e6c.result)
            }
        },
        "share-private": {url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror"},
        share_img_compound: {
            url: "/upload/event/img/compound", type: "POST", format: function (o6i, e6c) {
                e6c.options.picUrl = o6i.picUrl;
                this.bEH7A(e6c.options, e6c.result)
            }, onerror: function (o6i, e6c) {
                this.z6t("onshareall", e6c.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get", format: function (P6J, e6c) {
                this.pu1x("vid_info-" + e6c.data.nosKey, P6J);
                return P6J
            }
        },
        "video-submit": {
            url: "/api/cloudvideo/video/event/submit", filter: function (e6c) {
            }, format: function (o6i, e6c) {
                e6c.data = e6c.data2;
                this.cn7g("share-all", e6c)
            }, onerror: "onshareerror"
        }
    });
    q6k.biG0x = NEJ.C();
    b6f = q6k.biG0x.O6I(q6k.hn9e);
    b6f.cpH7A = function () {
        var tg3x = function (P6J, e6c) {
            e6c.times++;
            if (e6c.times > 10) {
                this.z6t("onvinfoerror", e6c.key, P6J)
            } else {
                setTimeout(eF8x.g6a(this, e6c), e6c.times * 1e3)
            }
        };
        var xw4A = function (P6J, e6c) {
            this.z6t("onvinfo", e6c.key, P6J)
        };
        var eF8x = function (e6c) {
            var V6P = e6c.url;
            x6r.bp7i(V6P + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: xw4A.en8f(this, e6c),
                onerror: tg3x.en8f(this, e6c)
            })
        };
        return function (e6c) {
            e6c.times = 0;
            eF8x.call(this, e6c)
        }
    }();
    b6f.cBE0x = function () {
        var PB3x;
        var tg3x = function (P6J, e6c) {
            if (P6J.code > 0) {
                clearInterval(this.Ej6d);
                this.z6t("onviderror", e6c.data.nosKey)
            }
        };
        var xw4A = function (J6D, P6J) {
            if (P6J.vid && P6J.covers) {
                clearInterval(this.Ej6d);
                this.z6t("onvid", J6D, P6J)
            }
        };
        var eF8x = function (e6c) {
            if (+(new Date) - PB3x > 60 * 60 * 1e3) {
                clearInterval(this.Ej6d);
                this.z6t("onviderror", e6c.data.nosKey);
                return
            }
            e6c.onload = xw4A.g6a(this, e6c.data.nosKey);
            e6c.onerror = tg3x.g6a(this);
            this.cn7g("vid-get", e6c)
        };
        return function (e6c) {
            if (!e6c || !e6c.data) return;
            PB3x = +(new Date);
            this.Ej6d = clearInterval(this.Ej6d);
            this.Ej6d = setInterval(eF8x.g6a(this, e6c), 1e4);
            eF8x.apply(this, arguments)
        }
    }();
    b6f.cps7l = function () {
        this.Ej6d = clearInterval(this.Ej6d)
    };
    b6f.cqC8u = function (o6i, np1x) {
        if (o6i.event && np1x.snsTypes) {
            if (np1x.pics) {
                var bEu7n = [];
                for (var i = 0, len = np1x.pics.length; i < len; i++) {
                    bEu7n[i] = np1x.pics[i].originId
                }
                this.cn7g("share_img_compound", {data: {picIds: bEu7n.join(",")}, options: np1x, result: o6i})
            } else {
                np1x.picUrl = np1x.picUrl;
                this.bEH7A(np1x, o6i)
            }
        } else {
            this.z6t("onshareall", o6i)
        }
        var tL3x = q6k.hM9D.A6u();
        tL3x.fu8m(np1x.isPub ? "pubevent" : "shareevent", {id: o6i.id})
    };
    b6f.bEH7A = function (np1x, o6i) {
        var co7h = {};
        co7h.eventid = o6i.event.id;
        co7h.eventtype = o6i.event.type;
        np1x.picUrl && (co7h.picUrl = np1x.picUrl);
        co7h.snsTypes = np1x.snsTypes;
        co7h.msg = np1x.data.msg || "";
        co7h.type = np1x.data.type;
        np1x.data.id && (co7h.id = np1x.data.id);
        this.cn7g("share-sns", {data: co7h, result: o6i})
    };
    b6f.cpm7f = function (e6c) {
        var j6d = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + k6e.ns1x(5)
        };
        j6d = NEJ.EX(j6d, e6c);
        if (!(j6d.id > 0)) {
            delete j6d.id;
            j6d.type = "noresource"
        }
        if (!j6d.threadId) {
            delete j6d.threadId
        }
        if (!j6d.actId) {
            delete j6d.actId
        }
        if (!j6d.pics) {
            delete j6d.pics
        } else {
            j6d.pics = JSON.stringify(j6d.pics)
        }
        this.cn7g("share-all", {
            data: j6d,
            snsTypes: e6c.snsTypes,
            picUrl: e6c.picUrl,
            pics: e6c.pics,
            isPub: e6c.isPub
        })
    };
    b6f.coX7Q = function (e6c) {
        this.cn7g("share-private", e6c)
    };
    b6f.coB7u = function (e6c) {
        this.cn7g("video-submit", e6c)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, h6b = c6e("nej.v"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        q6k = c6e("nm.d"), l6f = c6e("nm.x"), b6f, K6E;
    var cow7p = {40: !0};
    q6k.ff8X({
        "event-list": {
            url: "/api/v1/event/get", filter: function (e6c) {
                e6c.data.getcounts = true;
                e6c.data.pagesize = e6c.data.limit;
                if (e6c.data.offset == 0) {
                    e6c.data.lasttime = -1
                }
                delete e6c.data.offset
            }, format: function (P6J, e6c) {
                P6J.event = l6f.YK6E(P6J.event, function (p6j, r6l) {
                    return !cow7p[p6j.type]
                });
                this.cov7o(P6J.event);
                e6c.data.lasttime = P6J.lasttime;
                if (P6J.event.length) {
                    P6J.event.length = e6c.limit
                }
                return {list: P6J.event, total: P6J.size}
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews", format: function (P6J, e6c) {
                return {list: P6J.events, total: P6J.count}
            }
        },
        "event-pull": {
            url: "/api/event/getnews", filter: function (e6c) {
                e6c.data.pagesize = 20
            }, format: function (P6J, e6c) {
                return P6J.event
            }
        },
        "ievent-get": {type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror"},
        "ievent-new-get": {type: "GET", url: "/api/event/getnews", onload: "oneventnewload"},
        "ievent_user-list": {
            type: "GET", url: "/api/event/get/{userId}", filter: function (e6c) {
                e6c.data.time = -1;
                e6c.data.getcounts = true
            }, format: function (P6J, e6c) {
                P6J.events.length = e6c.limit;
                return {list: P6J.events, total: P6J.size}
            }
        },
        "ievent-res-get": {
            url: "/api/res/status", format: function (o6i, e6c) {
                o6i.conf = e6c.conf;
                return o6i
            }
        },
        "ievent-like": {
            url: "/api/resource/like", onload: "oneventlike", filter: function (e6c, bd6X) {
                if (e6c.like) {
                    if (e6c.comment) {
                        bd6X.url = "/api/v1/comment/like"
                    } else {
                        bd6X.url = "/api/resource/like"
                    }
                    bd6X.onload = "oneventlike";
                    bd6X.onerror = "oneventlikeerr"
                } else {
                    if (e6c.comment) {
                        bd6X.url = "/api/v1/comment/unlike"
                    } else {
                        bd6X.url = "/api/resource/unlike"
                    }
                    bd6X.onload = "oneventunlike";
                    bd6X.onerror = "oneventunlikeerr"
                }
            }, format: function (o6i, e6c) {
                o6i.eid = e6c.eid;
                o6i.origin = e6c.origin;
                o6i.ext = e6c.ext;
                return o6i
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete", format: function (o6i, e6c) {
                o6i.id = e6c.data.id;
                return o6i
            }
        },
        "event-del": {
            url: "/api/event/delete", filter: function (e6c, bd6X) {
                if (e6c.data.type == "nointer") {
                    bd6X.url = "/api/event/rcmd/reject"
                } else if (e6c.data.transcoding) {
                    bd6X.url = "/api/event/video/transcoding/delete"
                } else {
                    bd6X.url = "/api/event/delete"
                }
            }, format: function (o6i, e6c) {
                o6i.id = e6c.data.id;
                return o6i
            }
        },
        "event_activity-del": {
            url: "/api/event/delete", format: function (o6i, e6c) {
                o6i.id = e6c.data.id;
                return o6i
            }
        },
        "event_activity-list": {
            url: "/api/act/event", filter: function (e6c) {
                e6c.data.lasttime = e6c.data.lasttime || -1;
                e6c.data.pagesize = e6c.data.limit;
                e6c.data.getcounts = true;
                delete e6c.data.offset
            }, format: function (P6J, e6c) {
                e6c.data.lasttime = P6J.lasttime;
                var i6c = P6J.events;
                if (P6J.more) i6c = this.com7f(i6c, e6c.data.pagesize);
                return {list: i6c, total: P6J.size}
            }, onerror: "onlisterror"
        }
    });
    q6k.xl4p = NEJ.C();
    b6f = q6k.xl4p.O6I(q6k.hn9e);
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.biA0x = function (t6n, cU7N) {
        return t6n + "-" + cU7N
    };
    b6f.cBF0x = function (e6c) {
        this.cn7g("ievent-get", e6c)
    };
    b6f.cBG0x = function (e6c) {
        this.cn7g("ievent-new-get", e6c)
    };
    b6f.cBH0x = function (e6c) {
        this.cn7g("ievent-user-get", e6c)
    };
    b6f.cBI0x = function (t6n, cU7N) {
        return this.rF2x(this.biA0x(t6n, cU7N))
    };
    b6f.cBJ0x = function (GI7B, e6c) {
        if (!GI7B || !GI7B.length) return;
        e6c = e6c || {};
        var bv7o = {song: 2, album: 4, playlist: 1, mv: 3, program: 5};
        for (var i = 0, DL6F = [], bDz7s = [], j6d; i < GI7B.length; ++i) {
            j6d = GI7B[i];
            j6d = this.rF2x(this.biA0x(j6d.type, j6d.id));
            if (!j6d) {
                DL6F.push(GI7B[i].id);
                bDz7s.push(bv7o[GI7B[i].type] || 0)
            }
        }
        if (!DL6F.length) {
            this.z6t("oneventresload", e6c.conf);
            return
        }
        e6c.data = {ids: JSON.stringify(DL6F), types: JSON.stringify(bDz7s)};
        e6c.onload = this.cmA7t.g6a(this);
        this.cn7g("ievent-res-get", e6c)
    };
    b6f.cmA7t = function (o6i) {
        if (o6i.code != 200) {
            this.z6t("oneventreserror", o6i.code);
            return
        }
        var bv7o = {1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program"};
        for (var i = 0, i6c = o6i.results; i < i6c.length; ++i) {
            this.pu1x(this.biA0x(bv7o[i6c[i].type], i6c[i].id), i6c[i])
        }
        this.z6t("oneventresload", o6i.conf)
    };
    b6f.bDj7c = function (j6d) {
        var J6D = "event-list";
        this.bpV4Z(J6D, j6d);
        this.z6t("onitemadd", {key: J6D, action: "add", data: j6d, flag: -1})
    };
    b6f.vy3x = function (e6c) {
        this.cn7g("ievent-like", e6c)
    };
    b6f.ma0x = function (e6c) {
        this.cn7g("ievent-delete", e6c)
    };
    b6f.com7f = function (i6c, gn9e) {
        for (var i = i6c.length; i < gn9e; i++) i6c.push(null);
        return i6c
    };
    b6f.cov7o = function (i6c) {
        var o6i = [];
        if (!i6c || !i6c.length) return;
        k6e.bb6V(i6c, function (d6d) {
            d6d.biData = this.bDh7a(d6d)
        }, this)
    };
    b6f.bDh7a = function () {
        var bbq7j = {32: "comment", 33: "activity", 34: "recomment_artist"},
            clx6r = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (d6d) {
            var P6J = {
                id: d6d.id,
                sourceid: d6d.user.userId,
                alg: d6d.rcmdInfo ? d6d.rcmdInfo.alg : null,
                contentType: bbq7j[d6d.type] || (k6e.dd8V(clx6r, d6d.type) != -1 ? "user_event" : "other")
            };
            return P6J
        }
    }();
    b6f.EB6v = function (ckR6L, d6d) {
        var P6J = this.bDh7a(d6d);
        P6J.actionType = ckR6L;
        if (window.log) log("eventclick", P6J)
    };
    b6f.cBL0x = function (e6c) {
        this.cn7g("event_latest-list", e6c)
    }
})();
(function (factory) {
    window.SparkMD5 = factory()
})(function (undefined) {
    "use strict";
    var add32 = function (a, b) {
        return a + b & 4294967295
    }, hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32(a << s | a >>> 32 - s, b)
    }

    function md5cycle(x, k) {
        var a = x[0], b = x[1], c = x[2], d = x[3];
        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b = (b << 22 | b >>> 10) + c | 0;
        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b = (b << 20 | b >>> 12) + c | 0;
        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b = (b << 23 | b >>> 9) + c | 0;
        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b = (b << 21 | b >>> 11) + c | 0;
        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0
    }

    function md5blk(s) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24)
        }
        return md5blks
    }

    function md5blk_array(a) {
        var md5blks = [], i;
        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24)
        }
        return md5blks
    }

    function md51(s) {
        var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)))
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function md51_array(a) {
        var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;
        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)))
        }
        a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << (i % 4 << 3)
        }
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(state, tail);
        return state
    }

    function rhex(n) {
        var s = "", j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15]
        }
        return s
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i])
        }
        return x.join("")
    }

    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") {
        add32 = function (x, y) {
            var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return msw << 16 | lsw & 65535
        }
    }
    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = val | 0 || 0;
                if (val < 0) {
                    return Math.max(val + length, 0)
                }
                return Math.min(val, length)
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray,
                    sourceArray;
                if (to !== undefined) {
                    end = clamp(to, length)
                }
                if (begin > end) {
                    return new ArrayBuffer(0)
                }
                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);
                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);
                return target
            }
        })()
    }

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str))
        }
        return str
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i;
        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i)
        }
        return returnUInt8Array ? arr : buff
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff))
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);
        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);
        return returnUInt8Array ? result : result.buffer
    }

    function hexToBinaryString(hex) {
        var bytes = [], length = hex.length, x;
        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16))
        }
        return String.fromCharCode.apply(String, bytes)
    }

    function SparkMD5() {
        this.reset()
    }

    SparkMD5.prototype.append = function (str) {
        this.appendBinary(toUtf8(str));
        return this
    };
    SparkMD5.prototype.appendBinary = function (contents) {
        this.qI2x += contents;
        this.bm6g += contents.length;
        var length = this.qI2x.length, i;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dW8O, md5blk(this.qI2x.substring(i - 64, i)))
        }
        this.qI2x = this.qI2x.substring(i - 64);
        return this
    };
    SparkMD5.prototype.end = function (raw) {
        var buff = this.qI2x, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3)
        }
        this.od1x(tail, length);
        ret = hex(this.dW8O);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.prototype.reset = function () {
        this.qI2x = "";
        this.bm6g = 0;
        this.dW8O = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.prototype.getState = function () {
        return {buff: this.qI2x, length: this.bm6g, hash: this.dW8O}
    };
    SparkMD5.prototype.setState = function (state) {
        this.qI2x = state.buff;
        this.bm6g = state.length;
        this.dW8O = state.hash;
        return this
    };
    SparkMD5.prototype.destroy = function () {
        delete this.dW8O;
        delete this.qI2x;
        delete this.bm6g
    };
    SparkMD5.prototype.od1x = function (tail, length) {
        var i = length, tmp, lo, hi;
        tail[i >> 2] |= 128 << (i % 4 << 3);
        if (i > 55) {
            md5cycle(this.dW8O, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0
            }
        }
        tmp = this.bm6g * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;
        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this.dW8O, tail)
    };
    SparkMD5.hash = function (str, raw) {
        return SparkMD5.hashBinary(toUtf8(str), raw)
    };
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    SparkMD5.ArrayBuffer = function () {
        this.reset()
    };
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this.qI2x.buffer, arr, true), length = buff.length, i;
        this.bm6g += arr.byteLength;
        for (i = 64; i <= length; i += 64) {
            md5cycle(this.dW8O, md5blk_array(buff.subarray(i - 64, i)))
        }
        this.qI2x = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
        return this
    };
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this.qI2x, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << (i % 4 << 3)
        }
        this.od1x(tail, length);
        ret = hex(this.dW8O);
        if (raw) {
            ret = hexToBinaryString(ret)
        }
        this.reset();
        return ret
    };
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this.qI2x = new Uint8Array(0);
        this.bm6g = 0;
        this.dW8O = [1732584193, -271733879, -1732584194, 271733878];
        return this
    };
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);
        state.buff = arrayBuffer2Utf8Str(state.buff);
        return state
    };
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        state.buff = utf8Str2ArrayBuffer(state.buff, true);
        return SparkMD5.prototype.setState.call(this, state)
    };
    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    SparkMD5.ArrayBuffer.prototype.od1x = SparkMD5.prototype.od1x;
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)), ret = hex(hash);
        return raw ? hexToBinaryString(ret) : ret
    };
    return SparkMD5
});
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, a5f = c6e("nej.e"), h6b = c6e("nej.v"), x6r = c6e("nej.j"),
        eb8T = c6e("nej.g"), k6e = c6e("nej.u"), fA8s = c6e("nej.n"), H6B = c6e("nej.ut"), l6f = c6e("nm.x"),
        q6k = c6e("nm.d"), iZ9Q = c6e("nm.x.nos"), y6s = c6e("nm.w");
    var ckv6p = 1024 * 256, ckr6l = 1024 * 1024 * 2, qp2x = {TOKEN_ERROR: -100, DNS_ERROR: -101},
        bCq7j = typeof File !== "undefined" ? File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice : bn7g,
        qq2x = {MD5_DONE: .2, TOKEN_GET: .22, DNS_GET: .24, UPLOADED: 1},
        je0x = {AUDIO: "audio", IMAGE: "image", TXT: "txt", RAR: "rar", OTHER: "other", VIDEO: "video"};
    var nt1x = {};
    var tL3x = q6k.hM9D.A6u();
    iZ9Q.cBM0x = function () {
        return je0x
    };
    var cjR6L = function () {
        return k6e.ns1x(6) + +(new Date)
    };
    var GG7z = function (ia9R, e6c) {
        if (!nt1x[e6c.taskId]) {
            return
        }
        (e6c.onuploading || bn7g).call(this, ia9R)
    };
    var bij0x = function (Q6K) {
        var cjr6l = Q6K.md5, cM7F = Q6K.file, cjl6f = cjr6l + cM7F.size;
        return "nos_file_hash_" + cjl6f
    };
    var cji6c = function (Q6K) {
        var J6D = bij0x(Q6K), j6d = x6r.bGS8K(J6D, "{}");
        try {
            j6d = JSON.parse(j6d)
        } catch (e) {
            j6d = {}
        }
        return j6d
    };
    var ciW6Q = function (Q6K, e6c) {
        if (!Q6K.md5) {
            return
        }
        var J6D = bij0x(Q6K), j6d = x6r.bGS8K(J6D, "{}");
        try {
            j6d = JSON.parse(j6d)
        } catch (e) {
            j6d = {}
        }
        NEJ.X(j6d, e6c);
        x6r.vZ4d(J6D, JSON.stringify(j6d))
    };
    var ciE6y = function (Q6K) {
        var J6D = bij0x(Q6K);
        x6r.Ov3x(J6D)
    };
    var ciy6s = function (Q6K, fx8p) {
        var V6P = Q6K.urls[Math.min(Q6K.urlIndex, Q6K.urls.length - 1)], cM7F = Q6K.file, kL0x = Q6K.bucket,
            me0x = Q6K.objectKey, eB8t = Q6K.token, bN7G = Q6K.context, ol1x = {},
            Nd9U = bCq7j.call(cM7F, Q6K.beg, Q6K.end),
            bx7q = {offset: Q6K.beg, complete: Q6K.lastChunk || false, version: "1.0"};
        if (bN7G) {
            bx7q.context = bN7G
        }
        ol1x["x-nos-token"] = eB8t;
        ol1x[eb8T.yj4n] = cM7F.type;
        Q6K.reqId = x6r.bp7i(V6P + "/" + kL0x + "/" + me0x, {
            type: "json",
            method: "POST",
            headers: ol1x,
            query: bx7q,
            data: Nd9U,
            onload: fx8p.onload,
            onerror: fx8p.onerror
        })
    };
    var ciu6o = function (o6i, Q6K, e6c) {
        o6i = {
            code: 200,
            fileName: e6c.file.name,
            size: e6c.file.size,
            type: e6c.file.type,
            bucket: Q6K.bucket,
            docId: Q6K.docId,
            objectKey: Q6K.objectKey,
            url: "//nos.netease.com/" + Q6K.bucket + "/" + Q6K.objectKey
        };
        ciE6y(Q6K);
        if (!nt1x[e6c.taskId]) {
            return
        }
        delete nt1x[e6c.taskId];
        tL3x.fu8m("sysaction", {type: "nosuploadsuccess", location: location.href, result: JSON.stringify(o6i)});
        (e6c.onsuccess || bn7g).call(this, o6i)
    };
    var cis6m = function (o6i, e6c) {
        (e6c.onerror || bn7g).call(this, o6i)
    };
    var cie6Y = function (o6i, Q6K, e6c) {
        Q6K.context = o6i.context;
        Q6K.beg = o6i.offset;
        var ia9R = Q6K.beg / Q6K.file.size;
        ciW6Q(Q6K, {
            bucket: Q6K.bucket,
            objectKey: Q6K.objectKey,
            token: Q6K.token,
            context: Q6K.context,
            beg: Q6K.beg,
            updateTime: +(new Date)
        });
        ia9R = qq2x.DNS_GET + (qq2x.UPLOADED - qq2x.DNS_GET) * ia9R;
        GG7z(ia9R, e6c);
        if (Q6K.lastChunk) {
            ciu6o(o6i, Q6K, e6c)
        } else {
            TK5P(Q6K, e6c)
        }
    };
    var cid6X = function (o6i, Q6K, e6c) {
        tL3x.fu8m("sysaction", {
            type: "noschunkuploaderror",
            location: location.href,
            code: o6i.data,
            body: o6i.extData,
            ext: JSON.stringify(Q6K),
            timging: +(new Date) - Q6K.chuckUploadStartTime
        });
        if (Q6K.urlIndex < Math.max(Q6K.urls.length - 1, 5)) {
            Q6K.urlIndex++;
            TK5P(Q6K, e6c)
        } else {
            cis6m(o6i, e6c)
        }
    };
    var TK5P = function (Q6K, e6c) {
        if (!Q6K || Q6K.step == -1) {
            return
        }
        Q6K.end = Q6K.beg + ckv6p;
        if (Q6K.end >= Q6K.file.size) {
            Q6K.end = Q6K.file.size;
            Q6K.lastChunk = true
        }
        Q6K.chuckUploadStartTime = +(new Date);
        ciy6s(Q6K, {onload: cie6Y.en8f(this, Q6K, e6c), onerror: cid6X.en8f(this, Q6K, e6c)})
    };
    var cic6W = function (o6i, Q6K, e6c) {
        Q6K.beg = o6i.offset;
        var ia9R = Q6K.beg / Q6K.file.size;
        ia9R = qq2x.DNS_GET + (qq2x.UPLOADED - qq2x.DNS_GET) * ia9R;
        GG7z(ia9R, e6c);
        TK5P(Q6K, e6c)
    };
    var chZ6T = function (o6i, Q6K, e6c) {
        Q6K.beg = 0;
        delete Q6K.context;
        bif0x(Q6K, e6c)
    };
    var bAW6Q = function (MC9t, Q6K, e6c) {
        Q6K.lastChunk = false;
        Q6K.urls = MC9t;
        Q6K.urlIndex = 0;
        GG7z(qq2x.DNS_GET, e6c);
        if (Q6K.fromExist) {
            delete Q6K.fromExist;
            var V6P = Q6K.urls[Math.min(Q6K.urlIndex, Q6K.urls.length - 1)], kL0x = Q6K.bucket, me0x = Q6K.objectKey,
                eB8t = Q6K.token, bN7G = Q6K.context, ol1x = {}, bx7q = {context: bN7G, version: "1.0"};
            ol1x["x-nos-token"] = eB8t;
            Q6K.reqId = x6r.bp7i(V6P + "/" + kL0x + "/" + me0x + "?uploadContext", {
                type: "json",
                method: "GET",
                headers: ol1x,
                query: bx7q,
                onload: cic6W.en8f(this, Q6K, e6c),
                onerror: chZ6T.en8f(this, Q6K, e6c)
            })
        } else {
            Q6K.beg = 0;
            TK5P(Q6K, e6c)
        }
    };
    var chq6k = function (o6i, Q6K, e6c) {
        o6i.code = qp2x.DNS_ERROR;
        (e6c.onerror || bn7g).call(this, o6i)
    };
    var bAP6J = function (j6d, e6c) {
        var o6i = j6d.result || {}, kL0x = o6i.bucket, me0x = o6i.objectKey, eB8t = o6i.token, Q6K = nt1x[e6c.taskId];
        if (!kL0x || !me0x || !eB8t || !Q6K) {
            o6i.code = qp2x.TOKEN_ERROR;
            (e6c.onerror || bn7g).call(this, o6i);
            return
        }
        Q6K.bucket = kL0x;
        Q6K.objectKey = me0x;
        Q6K.docId = o6i.docId;
        Q6K.token = eB8t;
        GG7z(qq2x.TOKEN_GET, e6c);
        if (location.protocol == "https:") {
            bAW6Q(["//nosup-hz1.127.net"], Q6K, e6c)
        } else {
            Q6K.reqId = iZ9Q.cgY5d({
                bucket: kL0x,
                onload: bAW6Q.en8f(this, Q6K, e6c),
                onerror: chq6k.en8f(this, Q6K, e6c)
            })
        }
        Q6K.step = 1
    };
    var cgz5E = function (o6i, e6c) {
        o6i.code = qp2x.TOKEN_ERROR;
        (e6c.onerror || bn7g).call(this, o6i)
    };
    var bif0x = function (Q6K, e6c) {
        var cM7F = e6c.file, fd8V = cM7F.name || "", eJ8B = fd8V.split(".").pop();
        iZ9Q.Ua5f(NEJ.X({
            filename: fd8V,
            ext: eJ8B,
            onload: bAP6J.en8f(this, e6c),
            onerror: cgz5E.en8f(this, e6c)
        }, e6c, function (p6j) {
            return k6e.gr9i(p6j) || k6e.lg0x(p6j)
        }))
    };
    var cgt5y = function (Q6K, e6c) {
        if (!Q6K || Q6K.step == -1) {
            return
        }
        Q6K.md5 = Q6K.spark.end();
        var GC7v = cji6c(Q6K) || {}, kL0x = GC7v.bucket, me0x = GC7v.objectKey, eB8t = GC7v.token;
        if (!kL0x || !me0x || !eB8t) {
            bif0x(Q6K, e6c)
        } else {
            Q6K.context = GC7v.context;
            Q6K.beg = GC7v.beg;
            Q6K.fromExist = true;
            bAP6J({result: GC7v}, e6c)
        }
    };
    var cgs5x = function (Fo7h, Q6K, e6c) {
        if (!Q6K || Q6K.step == -1) {
            return
        }
        Q6K.beg = Q6K.end;
        var ia9R = Q6K.beg / Q6K.file.size;
        ia9R = 0 + qq2x.MD5_DONE * ia9R;
        GG7z(ia9R, e6c);
        Q6K.spark.append(Fo7h.result);
        if (Q6K.lastChunk) {
            cgt5y(Q6K, e6c)
        } else {
            bAJ6D(Q6K, e6c)
        }
    };
    var cfY5d = function (o6i, Q6K, e6c) {
        Q6K.md5 = "";
        bif0x(Q6K, e6c)
    };
    var bAJ6D = function (Q6K, e6c) {
        if (!Q6K || Q6K.step == -1) {
            return
        }
        Q6K.end = Q6K.beg + ckr6l;
        if (Q6K.end >= Q6K.file.size) {
            Q6K.end = Q6K.file.size;
            Q6K.lastChunk = true
        }
        var Fo7h = new FileReader;
        Fo7h.onload = cgs5x.g6a(this, Fo7h, Q6K, e6c);
        Fo7h.onerror = cfY5d.g6a(this, Fo7h, Q6K, e6c);
        Fo7h.readAsArrayBuffer(bCq7j.call(Q6K.file, Q6K.beg, Q6K.end))
    };
    iZ9Q.gC9t = function (e6c) {
        var cM7F = e6c.file, fd8V = cM7F.name || "", eJ8B = fd8V.split(".").pop(), Fr7k = cjR6L();
        e6c.taskId = Fr7k;
        nt1x[Fr7k] = {step: 0};
        GG7z(0, e6c);
        var Q6K = nt1x[Fr7k];
        Q6K.id = Fr7k;
        Q6K.file = cM7F;
        Q6K.beg = 0;
        Q6K.lastChunk = false;
        Q6K.spark = new SparkMD5.ArrayBuffer;
        var cfm5r = e6c.onerror || bn7g;
        e6c.onerror = function () {
            if (!nt1x[Fr7k]) {
                return
            }
            delete nt1x[Fr7k];
            cfm5r.apply(this, arguments)
        };
        tL3x.fu8m("sysaction", {type: "nosuploadstart", location: location.href});
        bAJ6D(Q6K, e6c);
        return Fr7k
    };
    iZ9Q.jI0x = function (D6x) {
        var Q6K = nt1x[D6x];
        if (Q6K) {
            if (Q6K.step == 0) {
                delete nt1x[D6x]
            } else {
                Q6K.step = -1;
                if (Q6K.reqId) {
                    x6r.jI0x(Q6K.reqId)
                }
                delete nt1x[D6x]
            }
        }
    };
    iZ9Q.Ua5f = function () {
        var yD4H = function (o6i, e6c) {
            (e6c.onload || bn7g).call(this, o6i)
        };
        var zy5D = function (o6i, e6c) {
            (e6c.onerror || bn7g).call(this, o6i)
        };
        var bAp6j = JSON.stringify({code: 200, size: "$(ObjectSize)"});
        return function (e6c) {
            var Um5r = e6c.returnBody || bAp6j;
            if (k6e.lg0x(Um5r)) {
                try {
                    JSON.stringify(Um5r)
                } catch (e) {
                    Um5r = bAp6j
                }
            }
            return x6r.bp7i("/api/nos/token/alloc", {
                method: "POST",
                type: "json",
                query: {
                    filename: e6c.filename || "",
                    ext: e6c.ext || "",
                    type: e6c.type || je0x.OTHER,
                    bucket: e6c.bucket || "",
                    local: e6c.local || false,
                    nos_product: e6c.nosProduct || 0,
                    return_body: Um5r
                },
                onload: yD4H.en8f(this, e6c),
                onerror: zy5D.en8f(this, e6c)
            })
        }
    }();
    iZ9Q.cgY5d = function () {
        var ceP5U = "//wanproxy.127.net/lbs";
        var yD4H = function (o6i, e6c) {
            if (o6i.lbs) {
            }
            var MC9t = o6i.upload;
            if (!MC9t || !MC9t.length) {
                zy5D(o6i, e6c)
            }
            (e6c.onload || bn7g).call(this, MC9t)
        };
        var zy5D = function (o6i, e6c) {
            (e6c.onerror || bn7g).call(this, o6i)
        };
        return function (e6c) {
            var kL0x = e6c.bucket;
            return x6r.bp7i(ceP5U, {
                method: "GET",
                type: "json",
                query: {version: "1.0", bucketname: kL0x},
                onload: yD4H.en8f(this, e6c),
                onerror: zy5D.en8f(this, e6c)
            })
        }
    }();
    iZ9Q.Up5u = function () {
        return typeof File !== "undefined" && typeof Blob !== "undefined" && typeof FileList !== "undefined" && (!!Blob.prototype.webkitSlice || !!Blob.prototype.mozSlice || !!Blob.prototype.slice || false)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), x6r = c6e("nej.j"),
        bZ7S = c6e("nej.ut"), bC7v = c6e("nej.ui"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), iZ9Q = c6e("nm.x.nos"),
        E6y = c6e("nm.m"), n6h = c6e("nm.l"), y6s = c6e("nm.w"), b6f, K6E;
    var gt9k = a5f.in9e('<form action="" method="post" enctype="multipart/form-data"><input name="Object" type="hidden" value=""><input name="x-nos-token" type="hidden" value=""><input name="x-nos-entity-type" type="hidden" value="json" /><input name="Content-Type" type="hidden" value="" /><input class="j-file" type="file" name="file" /></form>');
    y6s.bAi6c = NEJ.C();
    b6f = y6s.bAi6c.O6I(bC7v.ee8W);
    b6f.ca7T = function () {
        this.cd7W = gt9k
    };
    b6f.bS7L = function () {
        this.cc7V();
        this.bz7s = this.m6g;
        this.hf9W = a5f.F6z(this.m6g, "j-file")[0];
        h6b.s6m(this.hf9W, "change", this.qT2x.g6a(this))
    };
    b6f.bj6d = function (e6c) {
        e6c = e6c || {};
        this.bk6e(e6c);
        this.hf9W.accept = e6c.accept || "*";
        this.vk3x = e6c
    };
    b6f.Uy5D = function () {
        return a5f.kZ0x(this.hf9W)
    };
    b6f.qT2x = function (d6d) {
        if (this.hf9W.value == "") return;
        var kj0x = this.hf9W.value.split("\\"), fd8V = kj0x.length > 0 ? kj0x[kj0x.length - 1] : kj0x[0],
            nM1x = (this.hf9W.files || [{}])[0];
        var gd9U = {files: this.hf9W.files, filename: fd8V, size: nM1x.size, cancelUpload: false};
        this.z6t("onchange", gd9U);
        if (gd9U.cancelUpload) {
            this.hf9W.value = "";
            return
        }
        if (gd9U.stopped) {
            return
        }
        this.Rk4o()
    };
    b6f.Rk4o = function () {
        if (this.hf9W.value == "") return;
        var kj0x = this.hf9W.value.split("\\"), fd8V = kj0x.length > 0 ? kj0x[kj0x.length - 1] : kj0x[0],
            eJ8B = (fd8V.split(".") || []).pop(), nM1x = (this.hf9W.files || [{}])[0],
            FE7x = (nM1x.type || "").split("/").shift();
        if (nM1x.size > 100 * 1024 * 1024) {
            return this.mB0x("onerror", {code: -200})
        }
        this.z6t("onuploading", 0);
        this.bAb6V = iZ9Q.Ua5f(NEJ.X({
            onload: this.Px3x.en8f(this, fd8V),
            onerror: this.mB0x.g6a(this)
        }, this.vk3x, function (p6j) {
            return k6e.gr9i(p6j) || k6e.lg0x(p6j)
        }))
    };
    b6f.Px3x = function (bR7K, fd8V) {
        var o6i = bR7K.result || {}, kL0x = o6i.bucket, me0x = o6i.objectKey, eB8t = o6i.token;
        if (!kL0x || !me0x || !eB8t) {
            bR7K.code = -100;
            this.mB0x.call(this, bR7K);
            return
        }
        var nM1x = (this.hf9W.files || [{}])[0];
        var jk0x = a5f.db8T(this.bz7s);
        jk0x[0].value = me0x;
        jk0x[1].value = eB8t;
        if (nM1x.type && nM1x.type.indexOf("audio") == 0) {
            jk0x[3].value = "audio/mpeg"
        } else {
            jk0x[3].value = nM1x.type || ""
        }
        this.bz7s.action = "//nos.netease.com/" + kL0x;
        this.FJ7C = o6i;
        this.pA1x = fd8V;
        this.z6t("onuploading", .2);
        this.gC9t()
    };
    b6f.gC9t = function () {
        this.bAb6V = x6r.gC9t(this.bz7s, {
            type: "json",
            onload: this.tv3x.g6a(this),
            onerror: this.mB0x.g6a(this),
            onuploading: this.UN5S.g6a(this)
        })
    };
    b6f.jI0x = function () {
        x6r.jI0x(this.bAb6V);
        this.bz7s.reset()
    };
    b6f.tv3x = function (bR7K) {
        var eB8t = this.FJ7C, fd8V = this.pA1x, nM1x = (this.hf9W.files || [{}])[0], kT0x = {
            code: 200,
            fileName: fd8V,
            size: nM1x.size,
            bucket: eB8t.bucket,
            docId: eB8t.docId,
            objectKey: eB8t.objectKey,
            url: "//nos.netease.com/" + eB8t.bucket + "/" + eB8t.objectKey
        };
        if (!bR7K) {
            bR7K = kT0x
        }
        if (!bR7K.code || bR7K.code == 200) {
            this.z6t("onsuccess", NEJ.X(kT0x, bR7K))
        } else {
            this.z6t("onerror", bR7K)
        }
        this.bz7s.reset()
    };
    b6f.mB0x = function (bR7K) {
        this.z6t("onerror", bR7K);
        this.bz7s.reset()
    };
    b6f.UN5S = function (ia9R) {
        this.z6t("onuploading", .2 + ia9R.loaded / ia9R.total * .8)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), x6r = c6e("nej.j"),
        bZ7S = c6e("nej.ut"), bC7v = c6e("nej.ui"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), iZ9Q = c6e("nm.x.nos"),
        E6y = c6e("nm.m"), n6h = c6e("nm.l"), y6s = c6e("nm.w"), b6f, K6E;
    y6s.OS3x = NEJ.C();
    b6f = y6s.OS3x.O6I(bZ7S.cD7w);
    b6f.bj6d = function (e6c) {
        e6c = e6c || {};
        this.bk6e(e6c);
        this.UQ5V = y6s.bAi6c.A6u(NEJ.X({
            parent: e6c.parent,
            onchange: this.qT2x.g6a(this),
            onuploading: this.z6t.g6a(this, "onuploading"),
            onsuccess: this.z6t.g6a(this, "onsuccess"),
            onerror: this.z6t.g6a(this, "onerror")
        }, e6c, function (p6j) {
            return k6e.gr9i(p6j) || k6e.lg0x(p6j)
        }));
        if (e6c.multiple && iZ9Q.Up5u()) {
            a5f.ga9R(this.UQ5V.Uy5D(), "multiple", true)
        }
        this.vk3x = e6c
    };
    b6f.qT2x = function (e6c) {
        var fd8V = e6c.filename, eJ8B = (fd8V.split(".") || []).pop();
        this.bzR6L = (e6c.files || [{}])[0];
        this.z6t("onchange", e6c);
        if (iZ9Q.Up5u() && !e6c.stopped && !e6c.cancelUpload) {
            this.Rk4o(true);
            e6c.stopped = true
        }
    };
    b6f.Uy5D = function () {
        return this.UQ5V.Uy5D()
    };
    b6f.cdL5Q = function () {
        return this.bzR6L
    };
    b6f.Rk4o = function (eO8G, cM7F) {
        cM7F = cM7F || this.bzR6L;
        if (iZ9Q.Up5u()) {
            this.bzJ6D = iZ9Q.gC9t(NEJ.X({
                file: cM7F,
                local: this.vk3x.bucket && this.vk3x.bucket.length,
                onuploading: this.z6t.g6a(this, "onuploading"),
                onsuccess: this.z6t.g6a(this, "onsuccess"),
                onerror: this.z6t.g6a(this, "onerror")
            }, this.vk3x, function (p6j) {
                return k6e.gr9i(p6j) || k6e.lg0x(p6j)
            }));
            return this.bzJ6D
        } else if (!eO8G) {
            this.UQ5V.Rk4o()
        }
    };
    b6f.jI0x = function (D6x) {
        D6x = D6x || this.bzJ6D;
        if (D6x) {
            iZ9Q.jI0x(D6x)
        }
        this.UQ5V.jI0x()
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), eb8T = c6e("nej.g"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        x6r = c6e("nej.j"), fA8s = c6e("nej.n"), H6B = c6e("nej.ut"), ba6U = c6e("nej.ui"), y6s = c6e("nm.w"),
        n6h = c6e("nm.l"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), M6G = c6e("nm.x.f"), iZ9Q = c6e("nm.x.nos"), b6f, K6E,
        bhT0x = {0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片"}, bhS0x = 5 * 1024 * 1024, cBR0x = 80,
        bzc6W = /\.(bmp|jpg|jpeg|png|gif)$/i;
    y6s.byW6Q = NEJ.C();
    b6f = y6s.byW6Q.O6I(H6B.tE3x);
    b6f.brz4D = function () {
        return {x: this.yY5d.clientWidth - this.m6g.offsetWidth, y: this.yY5d.clientHeight - this.m6g.offsetHeight}
    };
    y6s.bhM0x = NEJ.C();
    b6f = y6s.bhM0x.O6I(ba6U.ee8W);
    b6f.ca7T = function () {
        this.cd7W = "m-xwgt-share-upload"
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.F6z(this.m6g, "j-flag");
        this.Vb5g = i6c.shift();
        this.Gw7p = i6c.shift();
        this.Mv9m = i6c.shift();
        this.byU6O = {
            onchange: this.byS6M.en8f(this, 0),
            onerror: this.ew8o.g6a(this),
            onsuccess: this.tw3x.g6a(this),
            multiple: true,
            parent: this.Gw7p,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.bhK0x = {
            onchange: this.byS6M.en8f(this, 1),
            onerror: this.ew8o.g6a(this),
            onsuccess: this.tw3x.g6a(this),
            multiple: true,
            accept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif"
        };
        this.ccg4k = y6s.OS3x.A6u(this.byU6O)
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.bhK0x.parent = e6c.button;
        this.IL8D && this.IL8D.S6M();
        this.IL8D = y6s.OS3x.A6u(this.bhK0x);
        this.m6g.style.display = "none";
        if (!!this.eP8H) {
            for (var i = this.eP8H.length - 1; i >= 0; i--) {
                a5f.cz7s(this.eP8H[i].element, false);
                if (this.eP8H[i].dragger) this.eP8H[i].dragger.S6M()
            }
        }
        this.eP8H = [];
        if (this.BJ5O) {
            clearTimeout(this.BJ5O)
        }
        this.Vm5r(0);
        this.Rp4t = 0;
        this.bT7M([[this.byU6O.parent, "click", this.byJ6D.g6a(this)], [this.bhK0x.parent, "click", this.byJ6D.g6a(this)]])
    };
    b6f.bA7t = function () {
        h6b.gG9x(this.sv2x, "click");
        if (!!this.eP8H) {
            for (var i = this.eP8H.length - 1; i >= 0; i--) {
                a5f.cz7s(this.eP8H[i].element, false);
                if (this.eP8H[i].dragger) this.eP8H[i].dragger.S6M()
            }
        }
        this.eP8H = [];
        if (this.BJ5O) {
            clearTimeout(this.BJ5O)
        }
        this.BJ5O = 0;
        this.IL8D && this.IL8D.S6M();
        delete this.IL8D;
        this.bF7y()
    };
    b6f.byJ6D = function (d6d) {
        if (!iZ9Q.Up5u() && this.eP8H.doing) {
            h6b.bf6Z(d6d)
        }
    };
    b6f.byS6M = function (e6c, r6l) {
        var mN1x = e6c.files, ib9S;
        e6c.stopped = true;
        if (!mN1x) {
            if (e6c.filename) {
                mN1x = [{name: e6c.filename, isIE: true}]
            }
        }
        for (var i = 0, len = mN1x.length; i < len; i++) {
            if (!bzc6W.test(mN1x[i].name)) {
                this.bhJ0x({path: mN1x[i].name, index: r6l, status: -4, fail: "这不是<br>图片"})
            } else if (mN1x[i].size > bhS0x) {
                this.bhI0x(-3);
                this.bhJ0x({path: mN1x[i].name, index: r6l, status: -3, fail: "上传<br>失败"})
            } else {
                this.bhJ0x({path: mN1x[i].name, file: mN1x[i], index: r6l, status: 0})
            }
        }
    };
    b6f.bhJ0x = function (sF2x) {
        if (this.eP8H.length >= 9) {
            this.bhI0x(-10, 3e3, this.byD6x.g6a(this));
            return
        }
        this.cbr4v(sF2x);
        this.eP8H.push(sF2x);
        if (!!this.eP8H.length) {
            this.m6g.style.display = ""
        }
        if (this.eP8H.length >= 9) {
            this.Gw7p.style.display = "none"
        } else {
            this.Gw7p.style.display = ""
        }
        this.Iw8o()
    };
    b6f.Iw8o = function () {
        var bhF0x = -1, byv6p = 0;
        for (var i = 0, l = this.eP8H.length; i < l; i++) {
            if (this.eP8H[i].status == 1) {
                return
            }
            if (this.eP8H[i].status == 0 && bhF0x < 0) {
                bhF0x = i
            }
            if (this.eP8H[i].status == 2 || this.eP8H[i].status < 0) {
                byv6p++
            }
        }
        var p6j = this.eP8H[bhF0x];
        if (p6j) {
            (p6j.index == 0 ? this.ccg4k : this.IL8D).Rk4o(false, p6j.file);
            p6j.status = 1;
            this.eP8H.doing = p6j;
            this.z6t("onstartupload", {})
        } else if (byv6p == this.eP8H.length) {
            this.z6t("onfinishupload", {})
        }
    };
    b6f.bhE0x = function () {
        return this.eP8H.doing || {}
    };
    b6f.ew8o = function (d6d) {
        var sF2x = this.bhE0x();
        sF2x.status = -4;
        sF2x.fail = "上传<br>失败";
        this.bys6m(sF2x);
        this.eP8H.doing = null;
        this.Iw8o()
    };
    b6f.tw3x = function (d6d) {
        var sF2x = this.bhE0x(), fn8f = d6d.fileName.match(bzc6W);
        sF2x.picUrl = d6d.url;
        x6r.bp7i("/upload/event/img/v1", {
            query: {imgid: d6d.docId, format: fn8f[1]},
            type: "json",
            onload: this.byq6k.g6a(this),
            onerror: this.byq6k.g6a(this)
        })
    };
    b6f.byq6k = function (d6d) {
        if (d6d && d6d.code == 200 && d6d.picInfo) {
            var sF2x = this.bhE0x();
            sF2x.status = 2;
            var bu7n = NEJ.X({}, d6d.picInfo);
            bu7n.originId = bu7n.originIdStr;
            bu7n.squareId = bu7n.squareIdStr;
            bu7n.rectangleId = bu7n.rectangleIdStr;
            bu7n.pcSquareId = bu7n.pcSquareIdStr;
            bu7n.pcRectangleId = bu7n.pcRectangleIdStr;
            bu7n.originJpgId = bu7n.originJpgIdStr || bu7n.originJpgId;
            sF2x.picInfo = bu7n;
            this.bys6m(sF2x);
            this.eP8H.doing = null;
            this.Iw8o()
        } else {
            this.ew8o(d6d)
        }
    };
    b6f.bhI0x = function (r6l, kk0x, fx8p) {
        if (this.Rp4t < r6l) {
            return
        }
        if (this.BJ5O) {
            clearTimeout(this.BJ5O);
            this.BJ5O = 0
        }
        if (kk0x) {
            this.Mv9m.innerText = bhT0x[r6l * 1];
            this.Rp4t = r6l;
            this.BJ5O = setTimeout(this.Vm5r.g6a(this, r6l, fx8p), kk0x)
        } else {
            this.Mv9m.innerText = bhT0x[r6l];
            this.Rp4t = r6l
        }
        this.Mv9m.style.display = ""
    };
    b6f.Vm5r = function (r6l, fx8p) {
        if (r6l && this.Rp4t !== r6l) {
            return
        }
        this.Rp4t = 0;
        this.Mv9m.innerText = bhT0x[0];
        this.Mv9m.style.display = "none";
        fx8p && fx8p()
    };
    b6f.cbr4v = function (cM7F) {
        var j6d = {};
        if (cM7F.fail) {
            j6d.fail = cM7F.fail
        }
        var dL8D = a5f.bX7Q("m-xwgt-share-upload-preview", j6d);
        cM7F.element = a5f.no1x(dL8D);
        h6b.s6m(a5f.F6z(cM7F.element, "del")[0], "mousedown", this.cba4e.g6a(this, cM7F), false);
        this.Vb5g.insertBefore(cM7F.element, this.Vb5g.lastElementChild);
        cM7F.dragger = y6s.byW6Q.A6u({
            view: this.Vb5g.parentNode,
            body: cM7F.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.Pq3x.g6a(this, cM7F),
            onchange: this.caZ4d.g6a(this, cM7F),
            ondragend: this.brE4I.g6a(this, cM7F)
        })
    };
    b6f.bys6m = function (cM7F) {
        if (!cM7F || !cM7F.element) {
            return false
        }
        var j6d = {};
        if (cM7F.fail) {
            j6d.fail = cM7F.fail
        } else {
            j6d.url = cM7F.picUrl
        }
        a5f.w6q(cM7F.element, "z-fail");
        cM7F.element.firstChild.outerHTML = a5f.bX7Q("m-xwgt-share-upload-preview-img", j6d)
    };
    b6f.Pq3x = function (p6j, kf0x) {
        a5f.w6q(p6j.element, "z-sel")
    };
    b6f.caZ4d = function (p6j, kf0x) {
        var cBS0x, gS9J = this.eP8H.length - 1, nd1x;
        for (var i = gS9J; i >= 0; i--) {
            a5f.v6p(this.eP8H[i].element, "z-jump");
            if (this.eP8H[i] == p6j) {
                nd1x = i
            } else {
                a5f.eT8L(this.eP8H[i].element, {left: "", top: ""})
            }
        }
        var LD9u = {x: 46 + 92 * (nd1x % 5) + kf0x.left, y: 46 + 92 * (nd1x / 5 >> 0) + kf0x.top};
        var bhC0x = LD9u.x / 92 >> 0, bhA0x = LD9u.y / 92 >> 0, wN4R = Math.max(0, Math.min(gS9J, bhA0x * 5 + bhC0x));
        if (wN4R == nd1x) {
            return
        }
        var bZY4c = wN4R < nd1x;
        for (var i = Math.min(wN4R, nd1x); i <= Math.max(wN4R, nd1x); i++) {
            if (i !== nd1x) {
                var bxS6M = i % 5;
                if (bZY4c) {
                    if (bxS6M == 4) {
                        a5f.eT8L(this.eP8H[i].element, {left: "-368px", top: "92px"})
                    } else {
                        a5f.eT8L(this.eP8H[i].element, {left: "92px", top: ""})
                    }
                } else {
                    if (bxS6M == 0) {
                        a5f.eT8L(this.eP8H[i].element, {left: "368px", top: "-92px"})
                    } else {
                        a5f.eT8L(this.eP8H[i].element, {left: "-92px", top: ""})
                    }
                }
            }
        }
    };
    b6f.brE4I = function (p6j, kf0x) {
        var cBT0x, gS9J = this.eP8H.length - 1, nd1x;
        for (var i = gS9J; i >= 0; i--) {
            a5f.eT8L(this.eP8H[i].element, {left: "", top: ""});
            if (this.eP8H[i] == p6j) {
                nd1x = i
            }
        }
        a5f.v6p(p6j.element, "z-sel");
        var LD9u = {x: 46 + 92 * (nd1x % 5) + kf0x.left, y: 46 + 92 * (nd1x / 5 >> 0) + kf0x.top};
        var bhC0x = LD9u.x / 92 >> 0, bhA0x = LD9u.y / 92 >> 0, wN4R = Math.max(0, Math.min(gS9J, bhA0x * 5 + bhC0x));
        if (wN4R == nd1x) {
            return
        }
        this.Vb5g.insertBefore(p6j.element, (this.eP8H[wN4R + (wN4R > nd1x ? 1 : 0)] || {}).element || this.Gw7p);
        this.eP8H.splice(nd1x, 1);
        this.eP8H.splice(wN4R, 0, p6j)
    };
    b6f.cba4e = function (p6j, d6d) {
        a5f.cz7s(p6j.element, false);
        if (p6j.dragger) p6j.dragger.S6M();
        delete p6j.dragger;
        var r6l = -1;
        for (var i = this.eP8H.length - 1; i >= 0; i--) {
            if (this.eP8H[i] == p6j) {
                r6l = i;
                break
            }
        }
        this.eP8H.splice(r6l, r6l >= 0 ? 1 : 0);
        delete p6j;
        if (this.eP8H.length >= 9) {
            this.Gw7p.style.display = "none"
        } else {
            this.Gw7p.style.display = ""
        }
        if (!this.eP8H.length) {
            this.m6g.style.display = "none";
            this.Vm5r(0)
        } else {
            this.byD6x()
        }
        if (this.eP8H.doing == p6j) {
            this.eP8H.doing = null
        }
        this.Iw8o()
    };
    b6f.byD6x = function () {
        var bxQ6K = false;
        for (var i = 0, len = this.eP8H.length; i < len; i++) {
            if (this.eP8H[i].status == -3) {
                bxQ6K = true
            }
        }
        if (bxQ6K) {
            this.bhI0x(-3)
        } else {
            this.Vm5r(-3)
        }
    };
    b6f.Lf8X = function () {
        var ej8b = [];
        for (var i = this.eP8H.length - 1; i >= 0; i--) {
            if (this.eP8H[i].status == 2) {
                ej8b.unshift(this.eP8H[i].picInfo)
            }
        }
        return ej8b
    };
    H6B.fE8w.A6u({element: y6s.bhM0x, event: ["onstartupload", "onfinishupload"]})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, fj8b = NEJ.R, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        ba6U = c6e("nej.ui"), N6H = c6e("nej.ut"), b6f, K6E;
    if (!!N6H.ne1x) return;
    N6H.ne1x = NEJ.C();
    b6f = N6H.ne1x.O6I(N6H.XX6R);
    K6E = N6H.ne1x.cl7e;
    b6f.bj6d = function (e6c) {
        this.bZp4t(e6c.more);
        this.VV6P = a5f.B6v(e6c.sbody);
        this.bT7M([[this.VV6P, "scroll", this.bZg4k.g6a(this)]]);
        var dl8d = e6c.delta;
        if (dl8d == null) dl8d = 30;
        this.MA9r = Math.max(0, dl8d);
        var cA7t = parseInt(e6c.count) || 0;
        this.jg0x = Math.max(0, cA7t);
        var gB9s = parseInt(e6c.number) || 0;
        if (gB9s > 1 && gB9s <= cA7t) {
            this.zB5G = gB9s
        }
        this.bk6e(e6c)
    };
    b6f.bA7t = function () {
        this.bF7y();
        delete this.Bz5E;
        delete this.VV6P;
        delete this.rT2x;
        delete this.Wc6W
    };
    b6f.zo5t = function (be6Y, bm6g) {
        var bI7B = this.yB4F + (this.jg0x - 1) * this.oC1x, gn9e = this.jg0x * this.oC1x;
        return K6E.zo5t.call(this, bI7B, be6Y, gn9e, bm6g)
    };
    b6f.bZp4t = function (Wd6X) {
        this.Bz5E = a5f.B6v(Wd6X);
        this.bT7M([[this.Bz5E, "click", this.nS1x.g6a(this)]])
    };
    b6f.bhr9i = function (G6A) {
        G6A = G6A || {};
        if (this.rT2x || !G6A) return;
        if (!G6A.scrollHeight) G6A = a5f.oQ1x();
        var be6Y = a5f.hL9C(this.iE9v), dl8d = be6Y.y + this.iE9v.offsetHeight - G6A.scrollTop - G6A.clientHeight,
            bhq9h = G6A.scrollHeight <= G6A.clientHeight;
        if (dl8d <= this.MA9r || bhq9h && !this.rT2x) {
            this.nS1x()
        }
    };
    b6f.bZg4k = function (d6d) {
        if (this.rT2x) return;
        this.bhr9i(h6b.U6O(d6d))
    };
    b6f.zb5g = function (d6d) {
        K6E.zb5g.apply(this, arguments);
        if (!d6d.stopped) {
            this.MN9E();
            var be6Y = 0;
            if (d6d.index > 1) {
                be6Y = this.yB4F + ((d6d.index - 1) * this.jg0x - 1) * this.oC1x
            }
            this.hp9g = be6Y;
            this.nS1x()
        }
    };
    b6f.bHs8k = function (e6c) {
        if (!!this.zB5G) {
            var dl8d = e6c.offset > 0 ? this.oC1x : this.yB4F, gn9e = dl8d + this.oC1x * (this.zB5G - 1);
            this.hp9g = e6c.offset + gn9e;
            e6c.data.limit = gn9e;
            e6c.limit = gn9e;
            delete this.zB5G
        }
        return e6c
    };
    b6f.bjo0x = function (e6c) {
        delete this.Wc6W;
        K6E.bjo0x.apply(this, arguments);
        this.bxv5A()
    };
    b6f.bjj0x = function (d6d) {
        if (d6d.key != this.iO9F.key) return;
        switch (d6d.action) {
            case"refresh":
            case"append":
                delete this.Wc6W;
                break
        }
        K6E.bjj0x.apply(this, arguments)
    };
    b6f.LB9s = function () {
        this.yq4u("onbeforelistload", "列表加载中...");
        a5f.Y6S(this.Bz5E, "display", "none")
    };
    b6f.bje0x = function (i6c, be6Y, gn9e) {
        var bm6g = i6c.length, bhl9c = i6c.loaded ? be6Y + gn9e >= bm6g : be6Y + gn9e > bm6g;
        this.hp9g = Math.min(this.hp9g, bm6g);
        a5f.Y6S(this.Bz5E, "display", bhl9c ? "none" : "");
        if (bhl9c) this.rT2x = !0;
        if (this.jg0x > 0) {
            var bu7n = this.zo5t(be6Y, i6c.length);
            if (this.bHf8X(bu7n.index, bu7n.total)) return !0;
            var dl8d = this.yB4F - this.oC1x, gB9s = this.jg0x * this.oC1x;
            this.rT2x = (be6Y + gn9e - dl8d) % gB9s == 0 || bhl9c;
            a5f.Y6S(this.Bz5E, "display", this.rT2x ? "none" : "");
            this.bjh0x(this.rT2x && bu7n.total > 1 ? "" : "none")
        }
    };
    b6f.bjf0x = function () {
        this.hp9g = 0;
        this.rT2x = !0;
        this.yq4u("onemptylist", "没有列表数据！")
    };
    b6f.Lv9m = function (dL8D, kf0x) {
        this.iE9v.insertAdjacentHTML(kf0x || "beforeEnd", dL8D)
    };
    b6f.Lt9k = function (gO9F) {
        this.fy8q = this.fy8q || [];
        if (k6e.eC8u(gO9F)) {
            fj8b.push.apply(this.fy8q, gO9F)
        } else {
            this.fy8q.push(gO9F)
        }
    };
    b6f.Yy6s = function (d6d) {
        a5f.mK1x(this.cp7i);
        this.Lk8c(d6d, "onafteradd");
        var eO8G = d6d.flag;
        if (d6d.stopped || !eO8G) return;
        if (this.jg0x > 0) {
            this.bjg0x();
            return
        }
        this.hp9g += 1;
        eO8G == -1 ? this.biY0x(d6d.data) : this.bGF8x(d6d.data)
    };
    b6f.YA6u = function (d6d) {
        this.Lk8c(d6d, "onafterdelete");
        if (d6d.stopped) return;
        if (this.jg0x > 0) {
            this.bjg0x();
            return
        }
        var D6x = d6d.data[this.fb8T.pkey];
        if (!!this.fy8q) {
            var p6j = a5f.bKl9c(D6x), r6l = k6e.dd8V(this.fy8q, p6j);
            if (r6l >= 0) {
                this.fy8q.splice(r6l, 1);
                this.hp9g -= 1
            }
            if (!!p6j) p6j.S6M()
        } else {
            var f6b = a5f.B6v(this.bHZ8R(D6x));
            if (!!f6b) this.hp9g -= 1;
            a5f.cz7s(f6b)
        }
        if (this.hp9g <= 0) this.nS1x()
    };
    b6f.bja0x = function (be6Y, gn9e) {
        if (be6Y != this.hp9g) return;
        if (this.VS6M()) {
            this.rT2x = !1;
            this.bxv5A()
        }
    };
    b6f.biZ0x = function (be6Y, gn9e) {
        if (be6Y != 0) return;
        var JK8C = this.R6L.hi9Z(this.iO9F.key);
        for (var i = gn9e - 1; i >= 0; i--) {
            this.biY0x(JK8C[i])
        }
    };
    b6f.bxv5A = function () {
        var G6A = this.VV6P;
        if (!G6A || this.rT2x) return;
        this.bhr9i(this.VV6P)
    };
    b6f.ge9V = function () {
        delete this.rT2x;
        K6E.ge9V.apply(this, arguments)
    };
    b6f.nS1x = function () {
        if (!!this.Wc6W) return;
        this.Wc6W = !0;
        var be6Y = this.hp9g;
        this.hp9g += be6Y == 0 ? this.yB4F : this.oC1x;
        this.bHt8l(be6Y)
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), k6e = c6e("nej.u"), h6b = c6e("nej.v"), cP7I = c6e("nej.x"),
        N6H = c6e("nej.ut"), b6f;
    if (!!N6H.FG7z) return;
    N6H.FG7z = NEJ.C();
    b6f = N6H.FG7z.O6I(N6H.cD7w);
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.iG9x = e6c.event || "click";
        this.ki0x = e6c.selected || "js-selected";
        this.nD1x = e6c.disabled || "js-disabled";
        this.bxn5s = !!e6c.inverse;
        this.bYw3x(e6c.list);
        this.RS4W(e6c.index || 0)
    };
    b6f.bA7t = function () {
        var bYq3x = function (f6b) {
            this.bhj9a(f6b, !1)
        };
        return function () {
            this.bF7y();
            k6e.bb6V(this.bO7H, bYq3x, this);
            delete this.bO7H;
            delete this.iG9x;
            delete this.cq7j;
            delete this.nD1x;
            delete this.ki0x;
            delete this.bxn5s
        }
    }();
    b6f.bYw3x = function () {
        var bjy0x = function (p6j) {
            if (!p6j) return;
            this.bO7H.push(p6j);
            var r6l = this.bO7H.length - 1, dp8h = this.bhh9Y[r6l];
            if (!dp8h) {
                dp8h = this.RS4W.g6a(this, r6l);
                this.bhh9Y[r6l] = dp8h
            }
            this.bT7M([[p6j, this.iG9x, dp8h]])
        };
        return function (i6c) {
            this.bO7H = [];
            if (!this.bhh9Y) this.bhh9Y = [];
            k6e.bb6V(i6c, bjy0x, this)
        }
    }();
    b6f.bhj9a = function (G6A, bYa3x) {
        !!bYa3x && !this.bxn5s ? a5f.w6q(G6A, this.ki0x) : a5f.v6p(G6A, this.ki0x)
    };
    b6f.RS4W = function (r6l, Ld8V, j6d) {
        var G6A = this.bO7H[r6l];
        if (Ld8V != !0 && (r6l == this.cq7j || !G6A || a5f.by7r(G6A, this.nD1x))) {
            h6b.cm7f(arguments[1]);
            return this
        }
        var d6d = {index: r6l, last: this.cq7j, list: this.la0x(), data: j6d || a5f.u6o(G6A, "value")};
        this.cq7j = r6l;
        G6A = this.bO7H[d6d.last];
        if (!!G6A) this.bhj9a(G6A, !1);
        G6A = this.bO7H[this.cq7j];
        this.bhj9a(G6A, !0);
        this.z6t("onchange", d6d);
        if (!d6d.nostop) h6b.cm7f(arguments[1]);
        return this
    };
    b6f.sQ2x = function () {
        return this.cq7j
    };
    b6f.la0x = function () {
        return this.bO7H
    };
    a5f.bXW3x = cP7I.bXW3x = function (bG7z, e6c) {
        var D6x = a5f.kZ0x(bG7z);
        if (!D6x) return null;
        if (!N6H.VO6I(D6x, N6H.FG7z)) {
            e6c = e6c || {};
            e6c.list = !e6c.clazz ? a5f.db8T(D6x) : a5f.F6z(D6x, e6c.clazz);
            delete e6c.clazz
        }
        return N6H.VO6I(D6x, N6H.FG7z, e6c || Z6T)
    };
    cP7I.isChange = !0
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, k6e = c6e("nej.u"), x6r = c6e("nej.j"), l6f = c6e("nm.x");
    var SETTING_KEY = "player-setting";
    var mU1x = {mode: 4, volume: .8, autoPlay: false, index: 0, lock: false};
    mU1x = x6r.tb2x(SETTING_KEY) || mU1x;
    l6f.bhf9W = function () {
        return mU1x
    };
    l6f.Fh7a = function (Fg7Z) {
        if (Fg7Z) {
            mU1x = Fg7Z;
            x6r.vZ4d(SETTING_KEY, Fg7Z)
        }
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), H6B = c6e("nej.ut"),
        l6f = c6e("nm.x"), q6k = c6e("nm.d"), hh9Y = c6e("nm.w.player.log");
    var kU0x = q6k.hM9D.A6u();
    var LogLevel = {ERROR: 10, INFO: 6, DEBUG: 2};
    var kH0x = function (t6n, bE7x, qa2x) {
        var cJ7C = l6f.ff8X("{0} {1} {2}", k6e.hJ9A(new Date, "yyyy-MM-dd HH:mm:ss"), t6n, bE7x);
        if (qa2x == LogLevel.ERROR) {
            kU0x.fu8m("playerror", {message: bE7x})
        }
        if (qa2x >= LogLevel.INFO) {
            kU0x.bZC4G(cJ7C)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(cJ7C)
        }
    };
    hh9Y.bY7R = function () {
        kH0x("PLAY_ERROR", l6f.ff8X.apply(null, arguments), LogLevel.ERROR)
    };
    hh9Y.pz1x = function () {
        kH0x("PLAY_INFO", l6f.ff8X.apply(null, arguments), LogLevel.INFO)
    };
    hh9Y.cBW0x = function () {
        kH0x("PLAY_DEBUG", l6f.ff8X.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), H6B = c6e("nej.ut"), k6e = c6e("nej.u"), y6s = c6e("nm.w"),
        fx8p = c6e("flash.cb");
    var dU8M = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var EQ6K, WG6A, tT3x;
    y6s.bXI3x = function (t6n, dE8w) {
        if (t6n != "flash") {
            if (!EQ6K) {
                EQ6K = a5f.cY7R("audio");
                k6e.bb6V(dU8M, function (t6n) {
                    h6b.s6m(EQ6K, t6n, onMediaCallBack)
                })
            }
            if (EQ6K && EQ6K.canPlayType && EQ6K.canPlayType("audio/mpeg")) {
                dE8w(new MediaWrap("audio"));
                return
            }
        }
        if (!WG6A) {
            a5f.pW1x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {allowscriptaccess: "always"},
                onready: function (ho9f) {
                    WG6A = ho9f;
                    k6e.bb6V(dU8M, function (t6n) {
                        fx8p[t6n] = onMediaCallBack;
                        WG6A.addCallback(t6n, "flash.cb." + t6n)
                    });
                    dE8w(new MediaWrap("flash"))
                }.g6a(this)
            })
        } else {
            dE8w(new MediaWrap("flash"))
        }
    };

    function MediaWrap(EC6w) {
        var lY0x;
        H6B.fE8w.A6u({element: this, event: dU8M.concat(["interrupt", "recover"])});
        lY0x = EC6w == "audio" ? EQ6K : WG6A;
        this.type = EC6w;
        this.destroy = function () {
        };
        this.setSrc = function (V6P) {
            if (tT3x != this) {
                var gS9J = tT3x;
                if (gS9J) {
                    gS9J.interrupt()
                }
                tT3x = this
            }
            if (EC6w == "flash") {
                lY0x.setSrc(V6P)
            } else {
                lY0x.src = V6P
            }
        };
        this.play = function () {
            if (tT3x != this) {
                var gS9J = tT3x;
                if (gS9J) {
                    gS9J.interrupt();
                    tT3x = this;
                    this.recover()
                } else {
                    tT3x = this
                }
            }
            if (EC6w == "flash") {
                lY0x.as_play()
            } else {
                lY0x.play()
            }
        };
        this.pause = function () {
            if (tT3x != this) return;
            if (EC6w == "flash") {
                lY0x.as_pause()
            } else {
                lY0x.pause()
            }
        };
        this.load = function () {
            if (tT3x != this) return;
            if (EC6w == "flash") {
                lY0x.as_load()
            } else {
                lY0x.load()
            }
        };
        this.interrupt = function () {
            onMediaCallBack({type: "interrupt"})
        };
        this.recover = function () {
            onMediaCallBack({type: "recover"})
        };
        this.getMedia = function () {
            return lY0x
        };
        var ok1x = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k6e.bb6V(ok1x, function (T6N) {
            var Oy3x = "get" + T6N, OH3x = "set" + T6N;
            if (EC6w == "flash") {
                if (!this[Oy3x]) {
                    this[Oy3x] = function () {
                        return lY0x[Oy3x]()
                    }
                }
                if (!this[OH3x]) {
                    this[OH3x] = function (value) {
                        lY0x[OH3x](value)
                    }
                }
            } else {
                var bwC5H = T6N.slice(0, 1).toLowerCase() + T6N.slice(1);
                if (!this[Oy3x]) {
                    this[Oy3x] = function () {
                        return lY0x[bwC5H]
                    }
                }
                if (!this[OH3x]) {
                    this[OH3x] = function (value) {
                        lY0x[bwC5H] = value
                    }
                }
            }
        }, this)
    }

    function onMediaCallBack(d6d) {
        if (tT3x) {
            h6b.z6t(tT3x, d6d.type, d6d)
        }
    }
})();
(function () {
    var c6e = NEJ.P, h6b = c6e("nej.v"), x6r = c6e("nej.j"), H6B = c6e("nej.ut"), dn8f = c6e("nej.p"),
        y6s = c6e("nm.w"), l6f = c6e("nm.x"), hh9Y = c6e("nm.w.player.log"), b6f;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4};
    var ErrorType = {INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10};
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3};
    var bwx5C = false;
    y6s.fB8t = NEJ.C();
    b6f = y6s.fB8t.O6I(H6B.cD7w);
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.cB7u = {};
        this.WT6N(e6c.media);
        x6r.bp7i("/api/cdns", {
            type: "json", onload: function (d6d) {
                if (d6d.code) {
                    this.pO1x = d6d.data
                }
            }.g6a(this)
        })
    };
    b6f.bA7t = function () {
        this.bF7y();
        delete this.cB7u
    };
    b6f.WV6P = function (bg6a) {
        if (!bg6a) return;
        var Al5q = this.cB7u.volume;
        if (this.dI8A) {
            this.dI8A.pause()
        }
        this.cB7u = {time: 0, id: bg6a.id, duration: bg6a.duration / 1e3, play: this.cB7u.play, stalledRetryCount: 0};
        if (Al5q != null) {
            this.cB7u.volume = Al5q
        }
        this.cB7u.loadState = LoadState.LOAD_START;
        this.bwt5y(bg6a.id);
        hh9Y.pz1x("play song id: {0}", bg6a.id)
    };
    b6f.eu8m = function () {
        if (this.cB7u.error) {
            this.cB7u.error = null;
            if (this.cB7u.error == ErrorType.INFO_GET_ERR || this.bws5x()) {
                this.bwr5w()
            } else {
                this.PW4a()
            }
        } else {
            if (this.dI8A) {
                this.dI8A.play()
            }
        }
        this.cB7u.play = true;
        this.pc1x("play")
    };
    b6f.fH8z = function () {
        if (this.dI8A) {
            this.dI8A.pause()
        }
        this.cB7u.play = false;
        this.pc1x("pause")
    };
    b6f.oB1x = function (bw7p) {
        if (this.dI8A) {
            this.dI8A.setCurrentTime(bw7p)
        }
        this.cB7u.time = bw7p;
        hh9Y.pz1x("seek to: {0}", bw7p)
    };
    b6f.bhb9S = function () {
        return this.cB7u.duration || 0
    };
    b6f.vU4Y = function () {
        return !!this.cB7u.play
    };
    b6f.lV0x = function (Ri4m) {
        this.cB7u.volume = Ri4m;
        if (this.dI8A) {
            this.dI8A.setVolume(Ri4m)
        }
    };
    b6f.bha9R = function () {
        return this.cB7u.time
    };
    b6f.WT6N = function (t6n) {
        y6s.bXI3x(t6n, function (lY0x) {
            this.dI8A = lY0x;
            hh9Y.pz1x("media loaded: {0}", lY0x.type);
            this.bT7M([[this.dI8A, "loadedmetadata", this.bWM3x.g6a(this)], [this.dI8A, "ended", this.bWK3x.g6a(this)], [this.dI8A, "waiting", this.yA4E.g6a(this)], [this.dI8A, "play", this.uf3x.g6a(this)], [this.dI8A, "pause", this.bgZ9Q.g6a(this)], [this.dI8A, "playing", this.RE4I.g6a(this)], [this.dI8A, "timeupdate", this.bWz3x.g6a(this)], [this.dI8A, "progress", this.sd2x.g6a(this)], [this.dI8A, "stalled", this.bgX9O.g6a(this)], [this.dI8A, "interrupt", this.fH8z.g6a(this)], [this.dI8A, "recover", this.bWl3x.g6a(this)], [this.dI8A, "error", this.ew8o.g6a(this)]]);
            if (this.cB7u) {
                if (this.cB7u.loadState == LoadState.LOAD_START || this.cB7u.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bgW9N();
                    if (this.cB7u.volume != null) {
                        this.dI8A.setVolume(this.cB7u.volume)
                    }
                }
            }
        }.g6a(this))
    };
    b6f.bWd3x = function (t6n) {
        this.Ke8W();
        this.dI8A.destroy();
        this.cB7u.loadState = LoadState.IN_SWITCH_MEDIA;
        this.yA4E();
        this.WT6N(t6n);
        hh9Y.pz1x("switch media")
    };
    b6f.cBZ0x = function () {
        return this.dI8A
    };
    b6f.bwt5y = function () {
        this.yA4E();
        x6r.bp7i("/api/song/enhance/player/url", {
            type: "json",
            query: {ids: JSON.stringify([this.cB7u.id]), br: DEFAULT_BR},
            onload: this.bvS5X.g6a(this),
            onerror: this.bvS5X.g6a(this)
        })
    };
    b6f.bvS5X = function (d6d) {
        if (d6d.code == 200 && d6d.data && d6d.data.length) {
            var bu7n = d6d.data[0];
            if (!bu7n.url) {
                this.cB7u.error = ErrorType.INFO_GET_ERR;
                this.pc1x("error", {code: this.cB7u.error});
                return
            }
            this.cB7u.playUrl = bu7n.url;
            this.cB7u.expireTime = (new Date).getTime() + bu7n.expi * 1e3;
            this.bgW9N()
        } else {
            this.cB7u.error = ErrorType.INFO_GET_ERR;
            this.pc1x("error", {code: this.cB7u.error});
            hh9Y.bY7R("info load error")
        }
    };
    b6f.bgW9N = function () {
        if (this.dI8A) {
            var V6P = this.cB7u.playUrl;
            if (this.cB7u.time > 0 && (this.cB7u.loadState == LoadState.IN_RE_GET_URL || this.cB7u.loadState == LoadState.IN_RE_GET_URL)) {
                V6P += "#t=" + this.cB7u.time
            }
            this.dI8A.setSrc(V6P);
            hh9Y.pz1x("load mp3: {0},loadState: {1}.", V6P, this.cB7u.loadState)
        }
    };
    b6f.bvQ5V = function () {
        if (/#t=(\d+)$/.test(this.dI8A.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b6f.PW4a = function () {
        var bw7p = parseInt(this.cB7u.time) || 0, bVA3x = this.bvQ5V();
        if (bw7p === bVA3x) {
            this.dI8A.load()
        } else {
            this.dI8A.setSrc(this.cB7u.playUrl + "#t=" + bw7p)
        }
        this.cB7u.loadState = LoadState.IN_RELOAD;
        this.yA4E();
        hh9Y.pz1x("reload from: {0}", bw7p)
    };
    b6f.bwr5w = function () {
        this.cB7u.loadState = LoadState.IN_RE_GET_URL;
        this.bwt5y()
    };
    b6f.bvO5T = function () {
        var sB2x = getHost(this.cB7u.playUrl);
        if (sB2x) {
            for (var i = 0; i < this.pO1x.length; i++) {
                var hK9B = this.pO1x[i] || [], r6l = hK9B.indexOf(sB2x);
                if (r6l >= 0 && hK9B.length > 1) {
                    return hK9B[(r6l + 1) % hK9B.length]
                }
            }
        }

        function getHost(V6P) {
            if (CDN_HOST_REG.test(V6P)) return RegExp.$1
        }
    };
    b6f.bVp3x = function () {
        this.cB7u.playUrl = this.cB7u.playUrl.replace(CDN_HOST_REG, this.bvO5T());
        this.cB7u.loadState = LoadState.IN_SWITCH_CDN;
        this.bgW9N();
        this.yA4E()
    };
    b6f.bWM3x = function () {
        if (this.cB7u.loadState == LoadState.LOAD_START) {
            this.cB7u.loadState = LoadState.LOADED_META;
            if (this.dI8A.type == "audio") {
                this.cB7u.duration = this.dI8A.getDuration()
            }
            this.pc1x("loadedmeta", {duration: this.cB7u.duration})
        } else {
            this.cB7u.loadState = LoadState.LOADED_META
        }
        if (this.cB7u.play) {
            this.dI8A.play()
        } else {
            this.dI8A.pause()
        }
        if (this.cB7u.time && parseInt(this.cB7u.time) != this.bvQ5V()) {
            this.dI8A.setCurrentTime(this.cB7u.time)
        }
        this.GS7L();
        this.RE4I();
        bwx5C = true;
        hh9Y.pz1x("loaded meta")
    };
    b6f.bWK3x = function () {
        this.cB7u.ended = true;
        this.pc1x("ended")
    };
    b6f.yA4E = function () {
        if (!this.cB7u.waiting) {
            this.cB7u.waiting = true;
            this.cB7u.waitTimestamp = +(new Date);
            this.pc1x("waiting")
        }
    };
    b6f.RE4I = function () {
        this.cB7u.waiting = false;
        this.cB7u.waitTimestamp = 0;
        this.pc1x("playing")
    };
    b6f.uf3x = function () {
        this.pc1x("play")
    };
    b6f.bgZ9Q = function () {
        this.pc1x("pause")
    };
    b6f.bWz3x = function () {
        if (this.cB7u.loadState != LoadState.LOADED_META) return;
        var bw7p = this.dI8A.getCurrentTime();
        if (this.cB7u.waiting && bw7p > this.cB7u.time) {
            this.RE4I()
        }
        this.cB7u.time = bw7p;
        this.pc1x("timeupdate", {time: this.cB7u.time, duration: this.cB7u.duration})
    };
    b6f.sd2x = function (d6d) {
        if (this.cB7u.loadState != LoadState.LOADED_META) return;
        var o6i = {};
        if (d6d.data) {
            o6i.total = d6d.data.total;
            o6i.loaded = d6d.data.loaded
        } else {
            var yO4S = this.dI8A.getBuffered(), bw7p = this.dI8A.getCurrentTime(), nP1x = 0;
            for (var i = 0; i < yO4S.length; i++) {
                if (bw7p > yO4S.start(i) && bw7p < yO4S.end(i)) {
                    nP1x = yO4S.end(i);
                    break
                }
            }
            o6i.total = this.cB7u.duration;
            o6i.loaded = Math.min(nP1x, o6i.total)
        }
        this.pc1x("progress", o6i)
    };
    b6f.GS7L = function () {
        if (this.cB7u.retry) {
            clearTimeout(this.cB7u.retry.tid);
            this.cB7u.retry = null
        }
    };
    b6f.ew8o = function () {
        var bV7O = this.dI8A.getError();
        hh9Y.bY7R("media error code: {0}, netState: {1}", bV7O.code, this.dI8A.getNetworkState());
        if (bV7O.code == MediaError.MEDIA_ERR_NETWORK || bV7O.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Fg7Z = l6f.bhf9W();
            if (!this.cB7u.retry) {
                this.cB7u.retry = {level: RetryLevel.NONE}
            } else {
                window.clearTimeout(this.cB7u.retry.tid)
            }
            if (this.cB7u.retry.level == RetryLevel.NONE) {
                if (this.bws5x()) {
                    this.cB7u.retry.level = RetryLevel.GET_URL;
                    this.bwr5w();
                    hh9Y.pz1x("Url expired, get url.")
                } else {
                    this.cB7u.retry.level = RetryLevel.RELOAD;
                    this.cB7u.retry.tid = setTimeout(this.PW4a.g6a(this), 3e3);
                    hh9Y.pz1x("Reload mp3 3s later.")
                }
            } else if (this.cB7u.retry.level == RetryLevel.GET_URL) {
                this.cB7u.retry.level = RetryLevel.RELOAD;
                this.cB7u.retry.tid = setTimeout(this.PW4a.g6a(this), 3e3);
                hh9Y.pz1x("Reload mp3 3s later.")
            } else if (this.cB7u.retry.level == RetryLevel.RELOAD) {
                this.cB7u.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bvO5T()) {
                    this.cB7u.retry.tid = setTimeout(this.bVp3x.g6a(this), 5e3);
                    hh9Y.pz1x("Switch CDN 5s later.")
                } else {
                    this.cB7u.retry.tid = setTimeout(this.PW4a.g6a(this), 5e3);
                    hh9Y.pz1x("Reload mp3 5s later.")
                }
            } else if (!bwx5C && this.dI8A.type == "audio" && !Fg7Z.useFlash && !dn8f.KX8P.mac && l6f.bnD1x().supported) {
                Fg7Z.useFlash = true;
                l6f.Fh7a(Fg7Z);
                this.bWd3x("flash")
            } else {
                this.GS7L();
                this.fH8z();
                this.cB7u.error = ErrorType.NET_ERR;
                this.pc1x("error", {code: this.cB7u.error});
                hh9Y.bY7R("error can not retry.")
            }
        } else {
            this.GS7L();
            this.fH8z();
            this.cB7u.error = ErrorType.UNKNOWN_ERR;
            this.pc1x("error", {code: this.cB7u.error});
            hh9Y.bY7R("error can not retry.")
        }
    };
    b6f.bgX9O = function () {
        var hs9j = 0, bvH5M = 5e3;
        return function () {
            this.yA4E();
            clearTimeout(hs9j);
            setTimeout(function () {
                var fe8W = +(new Date);
                if (this.cB7u.waiting && fe8W - this.cB7u.waitTimestamp >= bvH5M && this.cB7u.stalledRetryCount < MAX_STALLED_RETRY) {
                    hh9Y.pz1x("stalled too long retry.");
                    this.cB7u.stalledRetryCount++;
                    this.PW4a()
                }
            }.g6a(this), bvH5M);
            hh9Y.pz1x("stalled")
        }
    }();
    b6f.bws5x = function () {
        var fe8W = +(new Date);
        return fe8W > this.cB7u.expireTime
    };
    b6f.bWl3x = function () {
        var bw7p = parseInt(this.cB7u.time) || 0;
        this.dI8A.setSrc(this.cB7u.playUrl + "#t=" + bw7p);
        this.cB7u.loadState = LoadState.IN_RELOAD;
        this.yA4E();
        hh9Y.pz1x("recover from: {0}", bw7p)
    };
    b6f.pc1x = function (W6Q, j6d) {
        h6b.z6t(y6s.fB8t, "playaction", {action: W6Q, data: j6d || {}})
    };
    H6B.fE8w.A6u({element: y6s.fB8t, event: ["playaction"]})
})();
(function () {
    if (!(window == top)) {
        return
    }
    var c6e = NEJ.P, h6b = c6e("nej.v"), H6B = c6e("nej.ut"), y6s = c6e("nm.w"), b6f;
    y6s.CW6Q = NEJ.C();
    b6f = y6s.CW6Q.O6I(y6s.fB8t);
    K6E = y6s.CW6Q.cl7e;
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bVi3x = function (bJ7C) {
        this.WV6P(bJ7C);
        this.eu8m()
    };
    b6f.bgO9F = function () {
        this.fH8z()
    };
    b6f.wa4e = function (d6d) {
        if (d6d.action == "play") {
            this.fH8z()
        }
    };
    b6f.pc1x = function (W6Q, j6d) {
        h6b.z6t(y6s.CW6Q, "tmpplayaction", {action: W6Q, data: j6d || {}, tmp: true})
    };
    b6f.sn2x = function () {
        return this.cB7u
    };
    H6B.fE8w.A6u({element: y6s.CW6Q, event: ["tmpplayaction"]})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), fA8s = c6e("nej.n"),
        x6r = c6e("nej.j"), H6B = c6e("nej.ut"), ba6U = c6e("nej.ui"), y6s = c6e("nm.w"), n6h = c6e("nm.l"),
        ko0x = c6e("nm.c"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), b6f, K6E,
        XL6F = [{item: "m-publish-search-single", type: 1}, {
            item: "m-publish-search-artist",
            type: 100
        }, {item: "m-publish-search-album", type: 10}, {
            item: "m-publish-search-mv",
            type: 1004
        }, {item: "m-publish-search-playlist", type: 1e3}, {item: "m-publish-search-djRadio", type: 1009}];
    var bgM9D = {song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5};
    y6s.bgK9B = NEJ.C();
    b6f = y6s.bgK9B.O6I(ba6U.ee8W);
    b6f.cs7l = function (e6c) {
        this.cx7q(e6c);
        var i6c = a5f.F6z(this.m6g, "j-flag");
        this.cCa0x = i6c.shift();
        this.bUq3x = i6c.shift();
        this.GW7P = i6c.shift();
        this.bgJ9A = i6c.shift();
        this.bgI9z = [i6c.shift(), i6c.shift(), i6c.shift(), i6c.shift(), i6c.shift(), i6c.shift()];
        this.XU6O = i6c.shift();
        this.buZ5e = i6c.shift();
        this.rw2x = {list: this.bgI9z, selected: "z-curr", onchange: this.buU5Z.g6a(this)};
        h6b.s6m(this.GW7P, "input", this.XY6S.g6a(this));
        h6b.s6m(this.GW7P, "propertychange", this.XY6S.g6a(this));
        h6b.s6m(this.GW7P, "keyup", this.XY6S.g6a(this));
        h6b.s6m(this.bUq3x, "click", this.XY6S.g6a(this));
        h6b.s6m(this.XU6O, "click", this.cG7z.g6a(this));
        h6b.s6m(this.buZ5e, "click", function () {
            this.z6t("oncancel", {})
        }.g6a(this));
        this.R6L = q6k.CK6E.gh9Y();
        this.LX9O = top.nm.w.CW6Q.gh9Y();
        H6B.fE8w.A6u({element: top.nm.w.CW6Q, event: ["tmpplayaction"]});
        this.rs2x = {limit: 100, offset: 0, parent: this.XU6O, onbeforelistload: this.pY2x.g6a(this)};
        q6k.sk = "fuck" + a5f.u6o(this.bgJ9A, "xname") + "458";
        h6b.s6m(top.nm.w.CW6Q, "tmpplayaction", this.wa4e.g6a(this))
    };
    b6f.ca7T = function () {
        this.cd7W = "m-xwgt-publish-search"
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        if (!!this.zk5p) {
            this.zk5p.S6M();
            delete this.zk5p
        }
        this.rw2x.index = bgM9D[e6c.type || "song"];
        this.zk5p = H6B.FG7z.A6u(this.rw2x);
        this.GW7P.value = "";
        this.GW7P.focus();
        this.tU3x = "";
        this.cCb0x = 0;
        if (e6c.showMV == true) {
            this.bgI9z[bgM9D["mv"]].parentNode.style.display = "";
            a5f.w6q(this.bgJ9A, "srchtab-1")
        } else {
            this.bgI9z[bgM9D["mv"]].parentNode.style.display = "none";
            a5f.v6p(this.bgJ9A, "srchtab-1")
        }
        if (!!this.dC8u) {
            this.dC8u = this.dC8u.S6M()
        }
        if (e6c.hideBack) {
            a5f.w6q(this.buZ5e.parentNode, "f-hide")
        }
    };
    b6f.bA7t = function () {
        this.LX9O.bgO9F();
        this.bF7y()
    };
    b6f.XY6S = function () {
        var value = this.GW7P.value.trim();
        if (value && value.length) {
            if (value != this.tU3x) {
                this.tU3x = value;
                this.buU5Z({index: this.zk5p.sQ2x()})
            }
        } else {
            if (this.dC8u) {
                this.dC8u = this.dC8u.S6M()
            }
        }
        this.tU3x = value
    };
    b6f.cG7z = function () {
        var bTL2x = function (G6A) {
            return a5f.by7r(G6A, "sitm") || a5f.by7r(G6A, "itm") || a5f.by7r(G6A, "mv-item")
        }, bTK2x = function (G6A) {
            return a5f.by7r(G6A, "ply")
        }, bQT2x = function () {
            n6h.X6R.L6F({type: 2, tip: "因合作方要求，该资源需付费使用"})
        }, bTf2x = function () {
            n6h.X6R.L6F({type: 2, tip: "因合作方要求，该资源需下载后播放"})
        }, bgE9v = function (bg6a) {
            if (bg6a && bg6a.privilege && bg6a.privilege.toast) {
                x6r.bp7i("/api/song/toast", {
                    query: {id: bg6a.id},
                    type: "json",
                    onload: Nw0x.g6a(this),
                    onerror: Nw0x.g6a(this)
                })
            } else {
                Nx0x()
            }
        }, Nw0x = function (P6J) {
            Nx0x((P6J || Z6T).toast)
        }, Nx0x = function (bE7x) {
            n6h.X6R.L6F({type: 2, tip: bE7x || "因合作方要求，该资源暂时下架>_<"})
        };
        return function (d6d) {
            var Ct6n = h6b.U6O(d6d, bTK2x), i6c = h6b.U6O(d6d, bTL2x), eh8Z = this.LX9O.sn2x();
            if (!!i6c) {
                h6b.bf6Z(d6d);
                this.MP9G = a5f.u6o(i6c, "id");
                this.MX9O = a5f.u6o(i6c, "type");
                if (this.MX9O == 18) {
                    var bJ7C = this.R6L.ex8p(this.MP9G), qa2x = l6f.oU1x(bJ7C);
                    if (!Ct6n) {
                        if (qa2x == 10) {
                            bQT2x();
                            return
                        } else if (qa2x == 100) {
                            bgE9v(bJ7C);
                            return
                        }
                    } else {
                        if (qa2x == 10) {
                            bQT2x();
                            return
                        } else if (qa2x == 100) {
                            bgE9v(bJ7C);
                            return
                        } else if (qa2x == 11) {
                            bTf2x();
                            return
                        } else {
                            a5f.v6p(this.zz5E, "z-pause z-loading");
                            if (Ct6n == this.zz5E && eh8Z.play && !eh8Z.ended) {
                                this.LX9O.bgO9F()
                            } else {
                                this.zz5E = Ct6n;
                                this.LX9O.bVi3x(bJ7C)
                            }
                            return
                        }
                    }
                } else if (this.MX9O == 70) {
                    if (a5f.by7r(i6c, "z-noprogram")) {
                        n6h.X6R.L6F({type: 2, tip: "不能分享没有节目的电台"});
                        return
                    }
                }
                this.bTb2x()
            }
        }
    }();
    b6f.bTb2x = function () {
        var hz9q = this.R6L.ex8p(this.MP9G), sK2x = l6f.bxL6F(this.MX9O, hz9q);
        sK2x.title = sK2x.title || "";
        sK2x.author = sK2x.author || "";
        sK2x.picUrl = sK2x.picUrl || "";
        sK2x.authors = sK2x.authors || "";
        if (this.MX9O == 70) {
            this.MP9G = this.MP9G.slice(0, -4)
        }
        this.z6t("onfinish", {id: this.MP9G, type: this.MX9O, data: sK2x})
    };
    b6f.wa4e = function (d6d) {
        var j6d = d6d.data;
        if (!this.zz5E) {
            return
        }
        switch (d6d.action) {
            case"play":
                a5f.eR8J(this.zz5E, "z-pause z-play", "z-loading");
                break;
            case"pause":
            case"ended":
                a5f.v6p(this.zz5E, "z-pause z-loading");
                break;
            case"error":
                n6h.X6R.L6F({type: 2, tip: "试听遇到问题，播放失败"});
                a5f.v6p(this.zz5E, "z-pause z-loading");
                break;
            case"playing":
                a5f.eR8J(this.zz5E, "z-loading", "z-pause");
                break;
            case"waiting":
                a5f.eR8J(this.zz5E, "z-pause", "z-loading");
                break
        }
    };
    b6f.bSY2x = function (d6d) {
        if (d6d.result.code == 407) {
            this.XU6O.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.XU6O.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b6f.buU5Z = function (d6d) {
        if (!this.tU3x || d6d.index < 0 || d6d.index > 5) {
            return
        }
        this.LX9O.bgO9F();
        var bd6X = XL6F[d6d.index], e6c = NEJ.X({}, this.rs2x);
        e6c.cache = {klass: q6k.CK6E, clear: true, onerror: this.bSY2x.g6a(this)};
        e6c.cache.lkey = "search-publish-" + bd6X.type + "-" + this.tU3x;
        e6c.item = {klass: bd6X.item, getRestrictLevel: l6f.oU1x, dur2time: l6f.kX0x};
        if (!e6c.cache.data) {
            e6c.cache.data = {}
        }
        e6c.cache.data.s = this.tU3x;
        e6c.cache.data.type = bd6X.type;
        e6c.cache.data.isPub = true;
        if (bd6X.type == 1) {
            e6c.cache.data.hlpretag = '<span class="s-fc7">';
            e6c.cache.data.hlposttag = "</span>"
        }
        e6c.onemptylist = this.bSN2x.g6a(this, this.tU3x);
        if (!!this.Cf6Z) this.R6L.uk3x(this.Cf6Z);
        if (!!this.dC8u) {
            this.dC8u = this.dC8u.S6M()
        }
        this.dC8u = H6B.ne1x.A6u(e6c);
        this.Cf6Z = e6c.cache.lkey
    };
    b6f.pY2x = function (d6d) {
        d6d.value = a5f.ih9Y("m-publish-search-loading")
    };
    b6f.bSN2x = function (J6D, d6d) {
        a5f.dH8z(d6d.parent, "m-publish-emtpy-message", {key: J6D});
        d6d.stopped = true
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), dn8f = c6e("nej.p"), x6r = c6e("nej.j"),
        bZ7S = c6e("nej.ut"), bC7v = c6e("nej.ui"), y6s = c6e("nm.w"), b6f, K6E;
    var bSL2x = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    y6s.Cb5g = NEJ.C();
    b6f = y6s.Cb5g.O6I(bC7v.ee8W);
    var gt9k = a5f.et8l("m-wgt-receiverInput");
    var bSI2x = a5f.et8l("m-wgt-receiverList");
    var io9f = a5f.sp2x(bSL2x);
    var bSF2x = a5f.et8l('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b6f.cs7l = function (e6c) {
        this.bi6c = [];
        this.wf4j = e6c.receiver || null;
        this.bSC2x = e6c.unique || false;
        this.nb1x = e6c.err;
        this.bPU0x(this.bPQ0x, e6c.uid);
        this.cx7q(e6c)
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.NF0x();
        this.NH0x();
        this.YI6C();
        if (e6c.receiver) this.bgz9q(e6c.receiver.nickname, e6c.receiver.userId);
        a5f.Y6S(this.zt5y, "display", "block");
        a5f.Y6S(this.bgy9p, "cursor", "text");
        a5f.Y6S(this.zt5y, "cursor", "text")
    };
    b6f.ca7T = function () {
        var j6d = this.bOi0x();
        this.cd7W = a5f.in9e(a5f.bX7Q(gt9k, {receiver: this.wf4j, users: j6d}));
        this.lw0x = io9f
    };
    b6f.bS7L = function () {
        this.cc7V();
        var bM7F = a5f.F6z(this.m6g, "j-flag");
        var gO9F = a5f.F6z(this.m6g, "j-item");
        this.bgy9p = bM7F[0];
        this.bOe0x = bM7F[1];
        this.dV8N = bM7F[2];
        this.zt5y = bM7F[3];
        this.YQ7J = bM7F[4];
        this.bgx9o = bM7F[5];
        this.fy8q = gO9F;
        a5f.w6q(this.fy8q[0], "j-selected");
        h6b.s6m(this.dV8N, "keyup", this.bgw9n.g6a(this));
        h6b.s6m(this.dV8N, "keydown", this.NX3x.g6a(this));
        h6b.s6m(this.dV8N, "focus", this.kC0x.g6a(this));
        h6b.s6m(this.YQ7J, "click", this.cxL9C.g6a(this));
        h6b.s6m(this.bgy9p, "click", this.cxG9x.g6a(this));
        h6b.s6m(document.body, "click", this.nX1x.g6a(this));
        h6b.s6m(this.dV8N, "input", this.fC8u.g6a(this));
        h6b.s6m(this.dV8N, "blur", this.oX1x.g6a(this))
    };
    b6f.bA7t = function (e6c) {
        h6b.mx0x(document.body, "click", this.nX1x.g6a(this));
        this.bF7y();
        this.YI6C();
        this.cxv9m();
        this.nX1x()
    };
    b6f.bgw9n = function (d6d) {
        h6b.bf6Z(d6d);
        var jw0x = d6d.keyCode || d6d.which;
        var bl6f = this.dV8N.value;
        var bm6g = this.fy8q.length;
        var ri2x = a5f.F6z(this.m6g, "j-selected")[0];
        switch (jw0x) {
            case 13:
                var kz0x = a5f.ga9R(ri2x, "data-username");
                var hN9E = a5f.ga9R(ri2x, "data-userId");
                this.bgz9q(kz0x, hN9E);
                this.nX1x();
                this.dV8N.value = "";
                break;
            case 38:
                var r6l = a5f.ga9R(ri2x, "data-index") - 1 < 0 ? bm6g - 1 : a5f.ga9R(ri2x, "data-index") - 1;
                a5f.v6p(ri2x, "j-selected");
                a5f.w6q(this.fy8q[r6l], "j-selected");
                break;
            case 40:
                var r6l = parseInt(a5f.ga9R(ri2x, "data-index")) + 1 >= bm6g ? 0 : parseInt(a5f.ga9R(ri2x, "data-index")) + 1;
                a5f.v6p(ri2x, "j-selected");
                a5f.w6q(this.fy8q[r6l], "j-selected");
                break;
            default:
                this.vD3x()
        }
    };
    b6f.NX3x = function (d6d) {
        var jw0x = d6d.keyCode || d6d.which;
        var bl6f = this.dV8N.value;
        var r6l = a5f.F6z(this.m6g, "j-receiver").length - 1;
        if (jw0x === 8 && bl6f === "") this.cwG9x(r6l)
    };
    b6f.fC8u = function (d6d) {
        var bl6f = this.dV8N.value;
        if (bl6f.length > 10) {
            this.dV8N.value = bl6f.substring(0, 10);
            return
        }
        dn8f.dj8b.browser == "ie" && dn8f.dj8b.version < "7.0" ? setTimeout(this.bgt9k.g6a(this), 0) : this.bgt9k();
        this.NH0x()
    };
    b6f.kC0x = function () {
        if (this.bi6c[0]) this.vD3x(); else this.bPU0x(this.cvu9l);
        a5f.Y6S(this.zt5y, "display", "none")
    };
    b6f.oX1x = function () {
        var bm6g = a5f.F6z(this.m6g, "j-receiver").length;
        if (this.dV8N.value.trim() == "" && bm6g <= 0) a5f.Y6S(this.zt5y, "display", "block")
    };
    b6f.bgz9q = function (kz0x, hN9E) {
        var Hn7g = this.OV3x();
        if (Hn7g.length >= 10) {
            this.dG8y();
            return
        }
        var ba6U;
        for (ba6U = 0; ba6U < Hn7g.length; ba6U++) {
            if (Hn7g[ba6U] == hN9E) {
                this.nX1x();
                return
            }
        }
        if (!kz0x || !hN9E) return;
        var f6b = a5f.dr8j(a5f.in9e(a5f.bX7Q(bSF2x, {username: kz0x, userId: hN9E})));
        var bG7z = this.bOe0x.parentNode;
        if (this.bSC2x) {
            this.YI6C()
        }
        bG7z.insertBefore(f6b, this.bOe0x);
        this.dV8N.value = "";
        var bm6g = a5f.F6z(this.m6g, "j-receiver").length;
        if (bm6g > 1) a5f.Y6S(this.zt5y, "display", "none");
        this.bgt9k();
        this.NH0x()
    };
    b6f.YI6C = function () {
        var Pa3x = a5f.F6z(this.m6g, "j-receiver");
        var ba6U;
        if (Pa3x.length > 0) {
            for (ba6U = 0; ba6U < Pa3x.length; ba6U++) {
                a5f.cz7s(Pa3x[ba6U], false)
            }
        }
    };
    b6f.cxv9m = function () {
        this.dV8N.value = ""
    };
    b6f.cwG9x = function (r6l) {
        this.dG8y(!0);
        var Pa3x = a5f.F6z(this.m6g, "j-receiver");
        a5f.cz7s(Pa3x[r6l], false);
        this.NH0x()
    };
    b6f.vD3x = function () {
        var bl6f = this.dV8N.value;
        var bx7q = bl6f.trim().toLowerCase();
        var j6d;
        bx7q = bx7q.replace(/\[/g, "\\[");
        bx7q = bx7q.replace(/\]/g, "\\]");
        j6d = this.bOi0x(bx7q);
        this.cvo9f(j6d)
    };
    b6f.nX1x = function (d6d) {
        a5f.Y6S(this.YQ7J, "display", "none")
    };
    b6f.dG8y = function (gM9D) {
        if (gM9D && this.nb1x) {
            a5f.Y6S(this.nb1x, "display", "none");
            return
        }
        if (this.nb1x) a5f.Y6S(this.nb1x, "display", "block")
    };
    b6f.cxL9C = function (d6d) {
        h6b.cm7f(d6d);
        var dg8Y = d6d.target || d6d.srcElement;
        if (a5f.by7r(dg8Y, "j-flag")) return;
        var bG7z = dg8Y.nodeName.toLowerCase() == "a" ? dg8Y.parentNode : dg8Y.parentNode.parentNode;
        var kz0x = a5f.ga9R(bG7z, "data-username");
        var hN9E = a5f.ga9R(bG7z, "data-userId");
        this.bgz9q(kz0x, hN9E);
        this.nX1x();
        a5f.Y6S(this.zt5y, "display", "none")
    };
    b6f.cxG9x = function (d6d) {
        h6b.bf6Z(d6d);
        var dg8Y = d6d.target || d6d.srcElement;
        if (a5f.by7r(dg8Y.parentNode, "j-receiver")) {
            a5f.cz7s(dg8Y.parentNode, false);
            this.dG8y(!0);
            this.NH0x()
        } else this.dV8N.focus()
    };
    b6f.bgt9k = function () {
        this.bgx9o.innerHTML = this.dV8N.value;
        var cy7r = this.bgx9o.offsetWidth + 2;
        a5f.Y6S(this.dV8N, "width", cy7r + "px")
    };
    b6f.NH0x = function () {
        var Zr7k = a5f.hL9C(this.dV8N, this.m6g).y;
        var bME9v = Math.floor((Zr7k - 8) / 27);
        if (bME9v < 0) return;
        a5f.Y6S(this.bgy9p, "height", 19 + bME9v * 29 + "px")
    };
    b6f.NF0x = function () {
        var oF1x = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < oF1x.length; i++) {
            a5f.Y6S(this.bgx9o, oF1x[i], a5f.cV7O(this.dV8N, oF1x[i]))
        }
    };
    b6f.bPU0x = function (dE8w, D6x) {
        var de8W = D6x ? D6x : window.GUser.userId;
        var V6P = "/api/user/getfollows/" + de8W;
        var fP9G = x6r.bp7i(V6P, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: dE8w.g6a(this),
            onerror: function (j6d) {
                this.bi6c = []
            },
            onbeforerequest: function (j6d) {
            }
        })
    };
    b6f.bPQ0x = function (j6d) {
        this.bi6c = JSON.parse(j6d).follow || [];
        var D6x = GUser.userId;
        for (var i = 0; i < this.bi6c.length; i++) {
            if (this.bi6c[i].userId == D6x) {
                this.bi6c.splice(i, 1);
                continue
            }
            this.bi6c[i].avatarUrl = this.bi6c[i].avatarUrl + "?param=30y30"
        }
    };
    b6f.cvu9l = function (j6d) {
        if (this.bi6c[0]) return;
        this.bPQ0x(j6d);
        this.vD3x()
    };
    b6f.bOi0x = function (bx7q) {
        var bx7q = bx7q ? bx7q : "";
        this.bi6c = this.bi6c[0] ? this.bi6c : [];
        var bm6g = this.bi6c.length;
        var Pm3x = this.OV3x();
        var sr2x = [];
        var Po3x, Pr3x, bgq9h;
        if (!this.bi6c[0]) return sr2x;
        for (var ba6U = 0; ba6U < bm6g; ba6U++) {
            bgq9h = false;
            for (var x6r = 0; x6r < Pm3x.length; x6r++) {
                if (this.bi6c[ba6U].userId == Pm3x[x6r]) {
                    bgq9h = true;
                    break
                }
            }
            if (bgq9h) continue;
            Po3x = this.bi6c[ba6U].nickname.toLowerCase().search(bx7q);
            Pr3x = this.bi6c[ba6U].py ? this.bi6c[ba6U].py.toLowerCase().search(bx7q) : -1;
            if (Po3x !== -1 || Pr3x != -1) sr2x.push(this.bi6c[ba6U])
        }
        return sr2x
    };
    b6f.cvo9f = function (j6d) {
        a5f.dH8z(this.YQ7J, bSI2x, {users: j6d});
        a5f.w6q(a5f.F6z(this.m6g, "j-item")[0], "j-selected");
        this.fy8q = a5f.F6z(this.m6g, "j-item");
        a5f.Y6S(this.YQ7J, "display", "block")
    };
    b6f.OV3x = function () {
        var sr2x = a5f.F6z(this.m6g, "j-receiver") || [];
        var hN9E = [];
        for (var i = 0; i < sr2x.length; i++) {
            hN9E.push(a5f.ga9R(sr2x[i], "data-id"))
        }
        return hN9E
    };
    b6f.cCg0x = function () {
        var hN9E = this.OV3x();
        var sr2x = [];
        for (var i = 0; i < hN9E.length; i++) {
            for (var j = 0; j < this.bi6c.length; j++) {
                if (hN9E[i] == this.bi6c[j].userId) sr2x.push(this.bi6c[j])
            }
        }
        return sr2x
    };
    b6f.cuz9q = function () {
        this.YI6C()
    };
    y6s.Cb5g.L6F = function (e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n6h.ox1x.L6F({title: "登录"});
            return
        }
        e6c = e6c || {};
        if (e6c.parent === undefined) e6c.parent = document.body;
        !!this.eX8P && this.eX8P.S6M();
        this.eX8P = this.A6u(e6c)
    };
    y6s.Cb5g.br7k = function () {
        !!this.eX8P && this.eX8P.S6M()
    };
    y6s.Cb5g.Em6g = function () {
        return this.nX1x()
    };
    y6s.Cb5g.cCk0x = function () {
        return this.vD3x()
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), k6e = c6e("nej.u"), h6b = c6e("nej.v"), l6f = c6e("nm.x"), n6h = c6e("nm.l"),
        b6f, K6E;
    n6h.Ht7m = NEJ.C();
    b6f = n6h.Ht7m.O6I(n6h.boE2x);
    K6E = n6h.Ht7m.cl7e;
    b6f.bj6d = function () {
        var Ek6e;
        var ctU8M = function (C6w, J6D) {
            Ek6e = Ek6e || [];
            if (J6D != "18") Ek6e.push({key: J6D, value: C6w})
        };
        return function (e6c) {
            this.bk6e(e6c);
            if (e6c.upwards) {
                a5f.w6q(this.m6g, "m-emts-up")
            } else {
                a5f.v6p(this.m6g, "m-emts-up")
            }
            if (e6c.rightwards) {
                a5f.w6q(this.m6g, "m-emts-right")
            } else {
                a5f.v6p(this.m6g, "m-emts-right")
            }
            if (!Ek6e) {
                var bv7o = l6f.bRS2x();
                k6e.ey8q(bv7o, ctU8M)
            }
            var bm6g = Ek6e.length;
            Ek6e.splice(bm6g - 2, 0, {key: "18", value: "186"});
            this.ZJ7C = Ek6e;
            this.cth8Z = !!e6c.autoHide
        }
    }();
    b6f.ca7T = function () {
        this.cd7W = "ntp-portrait"
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.F6z(this.m6g, "j-flag");
        this.bK7D = i6c[0];
        this.ctc8U = i6c[1];
        this.csM8E = i6c[2];
        this.crr8j = i6c[3];
        h6b.s6m(this.bK7D, "click", this.yn4r.g6a(this));
        h6b.s6m(this.ctc8U, "click", this.Dp6j.g6a(this, 1));
        h6b.s6m(this.crr8j, "click", this.Dp6j.g6a(this, 2))
    };
    b6f.bgj9a = function (r6l) {
        this.ZT7M = r6l;
        var be6Y = (r6l - 1) * 50;
        var i6c = this.ZJ7C.slice(be6Y, Math.min(be6Y + 50, this.ZJ7C.length));
        this.bK7D.innerHTML = a5f.bX7Q("jst-portrait", {plist: i6c}, {purl: l6f.bAv6p});
        this.csM8E.innerText = r6l + "/" + Math.ceil(this.ZJ7C.length / 50)
    };
    b6f.Dp6j = function (r6l) {
        var cqE8w = Math.ceil(this.ZJ7C.length / 50);
        if (r6l == 1 && this.ZT7M == 1 || r6l == 2 && this.ZT7M == cqE8w) return;
        r6l == 1 ? this.bgj9a(this.ZT7M - 1) : this.bgj9a(this.ZT7M + 1)
    };
    b6f.yn4r = function (d6d) {
        var G6A = h6b.U6O(d6d, "d:text");
        if (!G6A) return;
        var d6d = {url: a5f.u6o(G6A, "url"), text: a5f.u6o(G6A, "text")};
        this.z6t("onselect", d6d);
        if (this.cth8Z && !d6d.stopped) {
            this.br7k()
        }
    };
    b6f.L6F = function () {
        K6E.L6F.call(this);
        this.bgj9a(1)
    }
})();
(function () {
    var c6e = NEJ.P, h6b = c6e("nej.v"), k6e = c6e("nej.u"), dn8f = c6e("nej.p"), bc6W = c6e("nej.h"),
        H6B = c6e("nej.ut"), jD0x = /^[#?]+/, EE6y = /#(.*?)$/, ya4e = window,
        bgg9X = !history.pushState || dn8f.KX8P.android || !history.auto;
    var ZX7Q = function (V6P, bgf9W) {
        ya4e.history[!bgf9W ? "pushState" : "replaceState"](null, document.title, V6P)
    };
    var ZZ7S = function () {
        return location.parse(ya4e.location.href)
    };
    ZX7Q = ZX7Q.er8j(function (d6d) {
        if (!bgg9X) return;
        var bh6b = d6d.args;
        d6d.stopped = !0;
        V6P = bh6b[0].replace(jD0x, "");
        !bh6b[1] ? ya4e.location.hash = V6P : ya4e.location.replace("#" + V6P)
    });
    ZZ7S = ZZ7S.er8j(function (d6d) {
        if (!bgg9X) return;
        d6d.stopped = !0;
        var dW8O = EE6y.test(ya4e.location.href) ? RegExp.$1 : "";
        d6d.value = location.parse(dW8O.replace(jD0x, ""))
    });
    location.redirect = function (V6P, bgf9W) {
        ZX7Q(V6P, bgf9W);
        return this
    };
    location.active = function () {
        var eE8w, V6P, jd0x, cQ7J, Lg8Y;
        var bge9V = function (hy9p) {
            if (!!cQ7J) {
                cQ7J = !1;
                return
            }
            var d6d = {oldValue: jd0x, newValue: ZZ7S()};
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                h6b.z6t(location, "beforeurlchange", d6d);
                if (d6d.stopped) {
                    if (!!jd0x) {
                        cQ7J = !0;
                        ZX7Q(jd0x.href, !0)
                    }
                    return
                }
            }
            V6P = ya4e.location.href;
            jd0x = d6d.newValue;
            h6b.z6t(location, "urlchange", jd0x);
            bc6W.bqm4q(jd0x.href)
        };
        var bKa9R = function () {
            if (V6P != ya4e.location.href) bge9V();
            eE8w = requestAnimationFrame(bKa9R)
        };
        return function (bN7G) {
            if (!!Lg8Y) return this;
            Lg8Y = !0;
            ya4e = bN7G || window;
            if (bgg9X && "onhashchange" in window && dn8f.mF1x.trident2) {
                h6b.s6m(ya4e, "hashchange", bge9V);
                bge9V()
            } else if (!eE8w) {
                eE8w = requestAnimationFrame(bKa9R)
            }
            return this
        }
    }();
    location.parse = function () {
        var go9f = /^https?:\/\/.*?\//i, jD0x = /[?#]/;
        return function (V6P) {
            var o6i = {href: V6P};
            V6P = (V6P || "").replace(go9f, "/").split(jD0x);
            var cA7t = 1;
            if (V6P[0] == "/" && (V6P[1] || "").indexOf("/") == 0) cA7t = 2;
            o6i.path = V6P.splice(0, cA7t).join("?");
            o6i.query = k6e.hD9u(V6P.join("&"));
            return o6i
        }
    }();
    location.same = function (V6P) {
        return ZZ7S().href == V6P
    };
    H6B.fE8w.A6u({element: location, event: ["beforeurlchange", "urlchange"]})
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), gc9T = c6e("nm.ut");
    gc9T.td3x = function (eg8Y) {
        var gF9w = {text: "", start: 0, end: 0};
        if (eg8Y.setSelectionRange) {
            gF9w.start = eg8Y.selectionStart;
            gF9w.end = eg8Y.selectionEnd;
            gF9w.text = gF9w.start != gF9w.end ? eg8Y.value.substring(gF9w.start, gF9w.end) : ""
        } else if (document.selection) {
            var i, baf7Y = document.selection.createRange(), xn4r = document.body.createTextRange();
            xn4r.moveToElementText(eg8Y);
            gF9w.text = baf7Y.text;
            gF9w.bookmark = baf7Y.getBookmark();
            for (i = 0; xn4r.compareEndPoints("StartToStart", baf7Y) < 0 && baf7Y.moveStart("character", -1) !== 0; i++) {
                if (eg8Y.value.charAt(i) == "\n") {
                    i++
                }
            }
            gF9w.start = i;
            gF9w.end = gF9w.text.length + gF9w.start
        }
        return gF9w
    };
    gc9T.bah7a = function (eg8Y, gF9w) {
        var xn4r;
        if (!gF9w) {
            gF9w = {text: "", start: 0, end: 0}
        }
        eg8Y.focus();
        if (eg8Y.setSelectionRange) {
            eg8Y.setSelectionRange(gF9w.start, gF9w.end)
        } else if (eg8Y.createTextRange) {
            xn4r = eg8Y.createTextRange();
            if (eg8Y.value.length === gF9w.start) {
                xn4r.collapse(false);
                xn4r.select()
            } else {
                xn4r.moveToBookmark(gF9w.bookmark);
                xn4r.select()
            }
        }
    };
    gc9T.Hz7s = function (eg8Y, gF9w, cJ7C) {
        var gF9w = gF9w || {text: "", start: 0, end: 0};
        var bgd9U, bJM9D, xn4r, Rd4h, bJJ9A, bJB9s, CD6x;
        this.bah7a(eg8Y, gF9w);
        if (eg8Y.setSelectionRange) {
            bgd9U = eg8Y.value;
            bJM9D = bgd9U.substring(0, gF9w.start) + cJ7C + bgd9U.substring(gF9w.end);
            bJJ9A = bJB9s = gF9w.start + cJ7C.length;
            CD6x = eg8Y.scrollTop;
            eg8Y.value = bJM9D;
            if (eg8Y.scrollTop != CD6x) {
                eg8Y.scrollTop = CD6x
            }
            eg8Y.setSelectionRange(bJJ9A, bJB9s)
        } else if (eg8Y.createTextRange) {
            Rd4h = document.selection.createRange();
            Rd4h.text = cJ7C;
            Rd4h.setEndPoint("StartToEnd", Rd4h);
            Rd4h.select()
        }
        h6b.z6t(eg8Y, "keyup")
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), dn8f = c6e("nej.p"), k6e = c6e("nej.u"),
        bZ7S = c6e("nej.ut"), y6s = c6e("nm.w"), gc9T = c6e("nm.ut"), b6f;
    y6s.bJA9r = NEJ.C();
    b6f = y6s.bJA9r.O6I(bZ7S.cD7w);
    b6f.cs7l = function (e6c) {
        this.cx7q(e6c)
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.fZ9Q = e6c.txt;
        this.Cw6q = e6c.sgtsContainer;
        this.bJy9p = e6c.sgtsList[0];
        this.bau7n = e6c.sgtsItem;
        this.oa1x = e6c.rangeData;
        this.HE7x = e6c.atIndex;
        a5f.w6q(this.bau7n[0], "selected-item");
        this.Rw4A()
    };
    b6f.bA7t = function () {
        this.bF7y();
        h6b.mx0x(document.body, "keyup", this.bIX8P.g6a(this));
        h6b.mx0x(document.body, "click", this.bIV8N.g6a(this))
    };
    b6f.Rw4A = function () {
        this.bT7M([[document.body, "keyup", this.bIX8P.g6a(this)], [document.body, "click", this.bIV8N.g6a(this)], [this.fZ9Q, "keydown", this.bIv8n.g6a(this)], [this.fZ9Q, "keypress", this.bIv8n.g6a(this)], [this.bJy9p, "click", this.bHX8P.g6a(this)], [this.bJy9p, "mouseover", this.Cr6l.g6a(this)]])
    };
    b6f.Cr6l = function (d6d) {
        var dg8Y = h6b.U6O(d6d);
        var p6j = a5f.F6z(this.Cw6q, "selected-item");
        if (a5f.by7r(dg8Y, "j-sgt")) {
            a5f.v6p(p6j[0], "selected-item");
            a5f.w6q(dg8Y, "selected-item")
        }
    };
    b6f.bIX8P = function (d6d) {
        var p6j = a5f.F6z(this.Cw6q, "selected-item");
        var bm6g = this.bau7n.length;
        var jw0x = d6d.keyCode || d6d.which;
        var r6l, j6d;
        switch (jw0x) {
            case 38:
                r6l = a5f.ga9R(p6j[0], "data-index") - 1 < 0 ? bm6g - 1 : a5f.ga9R(p6j[0], "data-index") - 1;
                a5f.v6p(p6j[0], "selected-item");
                a5f.w6q(this.bau7n[r6l], "selected-item");
                break;
            case 40:
                r6l = parseInt(a5f.ga9R(p6j[0], "data-index")) + 1 >= bm6g ? 0 : parseInt(a5f.ga9R(p6j[0], "data-index")) + 1;
                a5f.v6p(p6j[0], "selected-item");
                a5f.w6q(this.bau7n[r6l], "selected-item");
                break;
            case 13:
                this.bHX8P(d6d);
                break;
            case 27:
                this.nX1x();
                break;
            case 32:
                var bl6f = this.fZ9Q.value;
                var r6l = gc9T.td3x(this.fZ9Q);
                if (bl6f.charAt(r6l.start - 1) !== " ") return;
                this.nX1x();
                break
        }
    };
    b6f.bIv8n = function (d6d) {
        var jw0x = d6d.keyCode || d6d.which;
        if (jw0x === 13 || jw0x === 38 || jw0x === 40) {
            h6b.cm7f(d6d);
            d6d.keyCode = 0;
            d6d.which = 0;
            d6d.returnvalue = false
        }
    };
    b6f.bIV8N = function (d6d) {
        var dg8Y = d6d.target || d6d.srcElement;
        if (dg8Y === this.fZ9Q) return;
        this.nX1x()
    };
    b6f.bHX8P = function (d6d) {
        h6b.bf6Z(d6d);
        var p6j = a5f.F6z(this.Cw6q, "selected-item")[0];
        var ri2x = d6d.target || d6d.srcElement;
        var t6n = d6d.type;
        if (a5f.by7r(ri2x, "lst")) return;
        if (t6n == "click") {
            a5f.v6p(p6j, "selected-item");
            a5f.w6q(ri2x, "selected-item")
        } else ri2x = p6j;
        var j6d = ri2x.innerHTML + " ";
        this.nX1x();
        var gF9w = this.oa1x;
        gF9w.start = this.HE7x + 1;
        if (dn8f.dj8b.browser == "ie" && dn8f.dj8b.version < "9.0") {
            this.fZ9Q.value = this.fZ9Q.value.substring(0, gF9w.start) + this.fZ9Q.value.substring(gF9w.end, this.fZ9Q.value.length);
            gF9w.end = gF9w.start
        }
        gc9T.Hz7s(this.fZ9Q, gF9w, j6d);
        h6b.z6t(this.fZ9Q, "keyup")
    };
    b6f.nX1x = function (d6d) {
        if (!!this.Cw6q) a5f.Y6S(this.Cw6q, "display", "none");
        this.S6M()
    };
    b6f.vD3x = function (d6d) {
        if (!!this.Cw6q) a5f.Y6S(this.Cw6q, "display", "block")
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), x6r = c6e("nej.j"), y6s = c6e("nm.w"),
        bZ7S = c6e("nej.ut"), bC7v = c6e("nej.ui"), b6f;
    var cny7r = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var cnd7W = a5f.et8l("m-wgt-atlist");
    var io9f = a5f.sp2x(cny7r);
    y6s.bHI8A = NEJ.C();
    b6f = y6s.bHI8A.O6I(bC7v.ee8W);
    b6f.cs7l = function (e6c) {
        this.fG8y = {};
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.fG8y.txt = a5f.B6v(e6c.target);
        this.fG8y.data = e6c.data;
        this.fG8y.offset = e6c.offset;
        this.fG8y.rangeData = e6c.rangeData;
        this.fG8y.atIndex = e6c.atIndex;
        this.ckC6w(e6c);
        this.bk6e(e6c);
        this.fG8y.sgtsContainer = this.m6g;
        this.fG8y.sgtsList = a5f.F6z(this.m6g, "lst");
        this.fG8y.sgtsItem = a5f.F6z(this.m6g, "f-thide");
        this.Jf8X(e6c);
        this.cjw6q = y6s.bJA9r.A6u(this.fG8y)
    };
    b6f.bA7t = function (e6c) {
        this.bF7y();
        this.cjw6q.S6M()
    };
    b6f.ca7T = function () {
        this.lw0x = io9f
    };
    b6f.bS7L = function () {
        this.cc7V()
    };
    b6f.ckC6w = function (e6c) {
        this.m6g = a5f.dr8j(a5f.in9e(a5f.bX7Q(cnd7W, e6c.data)))
    };
    b6f.Jf8X = function (e6c) {
        var bGU8M = a5f.F6z(this.m6g, "selected-item")[0];
        if (bGU8M) a5f.v6p(bGU8M, "selected-item");
        var cP7I = e6c.offset.x + "px";
        var gU9L = e6c.offset.y + "px";
        a5f.Y6S(this.m6g, "left", cP7I);
        a5f.Y6S(this.m6g, "top", gU9L)
    }
})();
(function () {
    var c6e = NEJ.P, x6r = c6e("nej.j"), gc9T = c6e("nm.ut");
    gc9T.bGK8C = function (bl6f) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cZ7S = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var HM7F = bl6f.match(cZ7S) || [];
        for (var ba6U = 0; ba6U < HM7F.length; ba6U++) {
            HM7F[ba6U] = HM7F[ba6U].split("@")[1]
        }
        HM7F = HM7F.reverse();
        var hN9E = GUser.userId;
        var ciO6I = x6r.tb2x("mentioners" + hN9E) || [];
        var jo0x = HM7F.concat(ciO6I);
        if (jo0x.length > 10) jo0x = jo0x.slice(0, 10);
        x6r.vZ4d("mentioners" + hN9E, jo0x)
    };
    gc9T.chM6G = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hN9E = GUser.userId;
        return x6r.tb2x("mentioners" + hN9E) || []
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), dn8f = c6e("nej.p"), x6r = c6e("nej.j"),
        k6e = c6e("nej.u"), bZ7S = c6e("nej.ut"), y6s = c6e("nm.w"), gc9T = c6e("nm.ut"), b6f;
    y6s.bGt8l = NEJ.C();
    b6f = y6s.bGt8l.O6I(bZ7S.cD7w);
    b6f.cs7l = function (e6c) {
        this.cx7q(e6c);
        this.bGr8j()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.fZ9Q = e6c.txt;
        this.m6g = e6c.body;
        this.bFZ8R = e6c.before;
        this.NB0x = e6c.flag;
        this.cgJ5O = e6c.after;
        this.qk2x = [];
        if (dn8f.dj8b.browser != "ie") {
            setTimeout(function () {
                this.lA0x()
            }.g6a(this), 0)
        }
        this.Rw4A()
    };
    b6f.bA7t = function () {
        this.bF7y();
        if (this.uG3x) this.uG3x.S6M();
        delete this.uG3x
    };
    b6f.Rw4A = function () {
        this.bT7M([[this.fZ9Q, "keyup", this.bFY8Q.g6a(this, this.fZ9Q)], [this.fZ9Q, "click", this.bFY8Q.g6a(this, this.fZ9Q)], [this.fZ9Q, "focus", this.lA0x.g6a(this)]])
    };
    b6f.lA0x = function (d6d) {
        this.oa1x = gc9T.td3x(this.fZ9Q)
    };
    b6f.bGr8j = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var de8W = window.GUser.userId;
        var V6P = "/api/user/getfollows/" + de8W;
        var fP9G = x6r.bp7i(V6P, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (j6d) {
                window.GFollowers = JSON.parse(j6d).follow
            }.g6a(this),
            onerror: function (j6d) {
            },
            onbeforerequest: function (j6d) {
            }
        })
    };
    b6f.bFO8G = function (index) {
        var C6w = this.fZ9Q.value, be6Y, bfP9G, bfO9F, Sp4t;
        this.bFZ8R.innerHTML = k6e.dQ8I(C6w.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var oy1x = a5f.F6z(this.bFZ8R, "j-test");
        for (var ba6U = 0; ba6U < oy1x.length; ba6U++) {
            oy1x[ba6U].innerText = " "
        }
        this.NB0x.innerHTML = C6w.charAt(index);
        this.cgJ5O.innerHTML = k6e.dQ8I(C6w.substr(index + 1, C6w.length));
        Sp4t = parseInt(a5f.cV7O(this.fZ9Q, "lineHeight"));
        a5f.Y6S(this.m6g, "display", "block");
        bfP9G = a5f.hL9C(this.NB0x, this.m6g);
        bfO9F = a5f.hL9C(this.fZ9Q);
        a5f.Y6S(this.m6g, "display", "none");
        var cP7I = bfP9G.x + bfO9F.x;
        var gU9L = bfP9G.y + bfO9F.y + Sp4t;
        be6Y = {x: cP7I, y: gU9L};
        this.ceM5R(be6Y)
    };
    b6f.bFY8Q = function (eg8Y, d6d) {
        h6b.cm7f(d6d);
        var eg8Y = eg8Y;
        var C6w = eg8Y.value;
        var bm6g = C6w.length;
        var r6l = gc9T.td3x(eg8Y).start;
        var bEZ7S = 0;
        var jw0x = d6d.keyCode || d6d.which;
        var jo0x;
        this.oa1x = gc9T.td3x(eg8Y);
        var bEO7H = false;
        for (var i = 1; i < 20; i++) {
            jo0x = r6l - i;
            if (C6w.charAt(jo0x) === " ") break;
            if (C6w.charAt(jo0x) === "@") {
                bEO7H = true;
                this.HE7x = bEZ7S = jo0x;
                break
            }
        }
        if (bEO7H && d6d.shiftKey === false && jw0x !== 38 && jw0x !== 40) {
            if (jw0x !== 27 && jw0x !== 13) {
                this.uG3x ? this.uG3x.S6M() : null;
                this.bFO8G(bEZ7S)
            }
        } else if (jw0x !== 38 && jw0x !== 40 && d6d.keyCode !== 32) {
            this.uG3x ? this.uG3x.S6M() : null
        }
    };
    b6f.ceM5R = function (be6Y) {
        var be6Y = be6Y;
        var j6d = this.uN3x();
        var e6c = {
            parent: document.body,
            offset: be6Y,
            data: j6d,
            target: this.fZ9Q,
            rangeData: this.oa1x,
            atIndex: this.HE7x
        };
        this.uG3x ? this.uG3x.S6M() : null;
        this.uG3x = y6s.bHI8A.A6u(e6c)
    };
    b6f.uN3x = function () {
        var ceA5F = gc9T.td3x(this.fZ9Q).start;
        var ceo5t = this.HE7x + 1;
        var bEv7o = gc9T.chM6G() || [];
        var bEl7e = [];
        var bx7q = this.fZ9Q.value.substring(ceo5t, ceA5F).toLowerCase();
        bx7q = bx7q.replace(/\[/g, "\\[");
        bx7q = bx7q.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.qk2x = window.GFollowers[0] ? window.GFollowers : []
        } else this.qk2x = [];
        if (!this.qk2x[0]) this.bGr8j();
        for (var ba6U = 0; ba6U < bEv7o.length; ba6U++) {
            for (var x6r = 0; x6r < this.qk2x.length; x6r++) {
                if (this.qk2x[x6r].nickname == bEv7o[ba6U]) bEl7e.push(this.qk2x[x6r])
            }
        }
        this.qk2x = k6e.csO8G(this.qk2x, bEl7e, {union: true, begin: true});
        var cdK5P = this.qk2x.length;
        var bbr7k = [];
        var Po3x, Pr3x;
        if (!this.qk2x[0]) return {suggests: bbr7k};
        for (var i = 0; i < cdK5P; i++) {
            Po3x = this.qk2x[i].nickname.toLowerCase().search(bx7q);
            Pr3x = this.qk2x[i].py ? this.qk2x[i].py.toLowerCase().search(bx7q) : -1;
            if (Po3x !== -1 || Pr3x != -1) bbr7k.push(this.qk2x[i]);
            if (bbr7k.length === 10) break
        }
        return {suggests: bbr7k}
    };
    b6f.SK5P = function () {
        var gF9w = this.oa1x || {text: "", start: 0, end: 0};
        h6b.z6t(this.fZ9Q, "focus");
        gc9T.Hz7s(this.fZ9Q, gF9w, "@");
        this.oa1x = gc9T.td3x(this.fZ9Q);
        this.HE7x = gF9w.start;
        this.bFO8G(this.HE7x)
    };
    b6f.Em6g = function () {
        if (this.uG3x) this.uG3x.S6M()
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), h6b = c6e("nej.v"), k6e = c6e("nej.u"), x6r = c6e("nej.j"), y6s = c6e("nm.w"),
        bZ7S = c6e("nej.ut"), bC7v = c6e("nej.ui"), b6f;
    var cdH5M = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cdE5J = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gt9k = a5f.in9e(cdE5J);
    var io9f = a5f.sp2x(cdH5M);
    y6s.SO5T = NEJ.C();
    b6f = y6s.SO5T.O6I(bC7v.ee8W);
    b6f.cs7l = function (e6c) {
        this.fG8y = {};
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c);
        this.fG8y.txt = a5f.B6v(e6c.target);
        this.NF0x();
        this.SP5U = y6s.bGt8l.A6u(this.fG8y)
    };
    b6f.bA7t = function (e6c) {
        this.bF7y();
        this.SP5U.S6M()
    };
    b6f.ca7T = function () {
        this.cd7W = gt9k;
        this.lw0x = io9f
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.db8T(a5f.B6v(this.m6g));
        this.fG8y.body = this.m6g;
        this.fG8y.before = i6c[0];
        this.fG8y.flag = i6c[1];
        this.fG8y.after = i6c[2]
    };
    b6f.NF0x = function () {
        var oF1x = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < oF1x.length; i++) {
            if (oF1x[i] === "width" && a5f.cV7O(this.fG8y.txt, oF1x[i]) == "100%") {
                var cdi5n = this.fG8y.txt.offsetWidth;
                if (!cdi5n) {
                    setTimeout(function () {
                        a5f.Y6S(this.m6g, oF1x[i], this.fG8y.txt.offsetWidth + "px")
                    }.g6a(this), 300)
                } else {
                    a5f.Y6S(this.m6g, oF1x[i], this.fG8y.txt.offsetWidth + "px")
                }
                continue
            }
            a5f.Y6S(this.m6g, oF1x[i], a5f.cV7O(this.fG8y.txt, oF1x[i]))
        }
    };
    b6f.SK5P = function () {
        this.SP5U.SK5P()
    };
    b6f.Em6g = function () {
        this.SP5U.Em6g()
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, fj8b = NEJ.R, a5f = c6e("nej.e"), h6b = c6e("nej.v"),
        k6e = c6e("nej.u"), H6B = c6e("nej.ut"), ko0x = c6e("nm.c"), Q6K = {}, b6f;
    if (!!ko0x.bfK9B) return;
    ko0x.bfK9B = NEJ.C();
    b6f = ko0x.bfK9B.O6I(H6B.cD7w);
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c)
    };
    b6f.bA7t = function () {
        this.bF7y()
    };
    b6f.EX6R = function (eU8M, dE8w, bbA8s) {
        if (Q6K[eU8M]) {
            this.gK9B("register commonJST[" + eU8M + "] duplicate");
            return
        }
        if (!k6e.gr9i(dE8w)) {
            dE8w = ctl.comJST.ccZ5e(eU8M, dE8w, bbA8s)
        }
        Q6K[eU8M] = dE8w
    };
    b6f.ccQ4U = function (bbE8w) {
        if (k6e.eC8u(bbE8w)) {
            k6e.bb6V(bbE8w, function (p6j) {
                ctl.comJST.EX6R.apply(this, p6j)
            }, this)
        } else if (k6e.lg0x(bbE8w)) {
            k6e.ey8q(bbE8w, function (eG8y, J6D) {
                ctl.comJST.EX6R(J6D, eG8y)
            })
        }
    };
    b6f.ccZ5e = function (eU8M, ub3x, bbA8s) {
        ub3x = ub3x || {};
        NEJ.X(ub3x, {comJST: this.mT1x});
        if (ub3x.resetDataName && !k6e.eC8u(ub3x.resetDataName)) {
            ub3x.resetDataName = [ub3x.resetDataName]
        }
        return function () {
            var j6d = arguments[0], js0x = arguments[1];
            if (ub3x.resetDataName) {
                var jo0x = {};
                for (var i = 0, ii = ub3x.resetDataName.length; i < ii; i++) {
                    jo0x[ub3x.resetDataName[i]] = arguments[i]
                }
                j6d = jo0x;
                js0x = arguments[ii]
            }
            NEJ.X(j6d, ub3x, dP8H);
            if (bbA8s) {
                js0x = js0x || {};
                NEJ.X(js0x, bbA8s)
            }
            return a5f.bX7Q(eU8M, j6d, js0x)
        }
    };
    b6f.mT1x = function (eU8M) {
        if (!Q6K[eU8M]) {
            this.gK9B("commonJST[" + eU8M + "] is unregister");
            return ""
        } else {
            return Q6K[eU8M].apply(null, fj8b.slice.call(arguments, 1))
        }
    };
    b6f.dump = function () {
        return Q6K
    };
    b6f.gK9B = function (ccO4S) {
        if (console && console.log) {
            console.log(ccO4S)
        }
    };
    var dP8H = function (eG8y, J6D) {
        return J6D == "resetDataName"
    };
    c6e("ctl").comJST = ko0x.bfK9B.gh9Y();
    a5f.coO7H({comJST: c6e("ctl").comJST.mT1x})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, bn7g = NEJ.F, fj8b = NEJ.R, a5f = c6e("nej.e"), h6b = c6e("nej.v"),
        k6e = c6e("nej.u"), H6B = c6e("nej.ut"), ko0x = c6e("nm.c"), l6f = c6e("nm.x"), Q6K = {}, b6f;
    if (!!ko0x.bfG9x) return;
    ko0x.bfG9x = NEJ.C();
    b6f = ko0x.bfG9x.O6I(H6B.cD7w);
    b6f.cs7l = function () {
        this.cx7q();
        var e6c = {
            "com-mv-artists": function (fF8x, dS8K, Dn6h, bfF9w) {
                return a5f.bX7Q("com-mv-artists", {
                    artists: fF8x,
                    clazz: dS8K,
                    boxClazz: bfF9w,
                    mark: Dn6h || function (cF7y) {
                        return cF7y
                    },
                    escape: k6e.dQ8I,
                    comJST: ctl.comJST.mT1x
                })
            },
            "com-album-artists": function (fF8x, dS8K, Dn6h, bfF9w) {
                return a5f.bX7Q("com-album-artists", {
                    artists: fF8x,
                    clazz: dS8K,
                    boxClazz: bfF9w,
                    mark: Dn6h || function (cF7y) {
                        return cF7y
                    },
                    escape: k6e.dQ8I,
                    comJST: ctl.comJST.mT1x
                })
            },
            "com-artists-title": {resetDataName: ["artists"], escape: k6e.dQ8I},
            "com-user-type": function (df8X, dS8K, le0x, Tz5E, bDy7r) {
                return a5f.bX7Q("com-user-type", {
                    x: df8X,
                    clazz: dS8K || "",
                    clazz2: typeof bDy7r == "undefined" ? "icn" : bDy7r,
                    before: le0x || "",
                    after: Tz5E || "",
                    isEmptyObject: l6f.byI6C
                })
            }
        };
        for (var D6x in e6c) {
            ctl.comJST.EX6R(D6x, e6c[D6x])
        }
    };
    b6f.bj6d = function (e6c) {
        this.bk6e(e6c)
    };
    b6f.bA7t = function () {
        this.bF7y()
    };
    c6e("ctl").comJSTUtil = ko0x.bfG9x.gh9Y()
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, a5f = c6e("nej.e"), dn8f = c6e("nej.p"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        H6B = c6e("nej.ut"), x6r = c6e("nej.j"), y6s = c6e("nm.w"), gc9T = c6e("nm.ut"), q6k = c6e("nm.d"),
        l6f = c6e("nm.x"), n6h = c6e("nm.l"), bfE9v = [2, 3], dT8L = ["sn", "db"], b6f, K6E, cbn4r = {
            13: "playlist",
            17: "djprogram",
            18: "song",
            19: "album",
            20: "artist",
            21: "mv",
            24: "topic",
            25: "activity",
            70: "djradio",
            38: "concert",
            39: "video"
        }, bbO8G = {
            djprogram: "节目",
            album: "专辑",
            playlist: "歌单",
            song: "单曲",
            yunsong: "单曲",
            artist: "歌手",
            mv: "MV",
            topic: "音乐专栏",
            djradio: "电台",
            concert: "演出",
            video: "视频"
        }, bDl7e = {
            djprogram: " - ",
            album: " - ",
            playlist: " by ",
            song: " - ",
            yunsong: " - ",
            artist: "",
            mv: " - ",
            djradio: " by "
        }, cbe4i = {0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20}, Ee6Y = {
            pubEventWithPics: false,
            pubEventWithoutResource: false,
            pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
        };
    n6h.yN4R = NEJ.C();
    b6f = n6h.yN4R.O6I(n6h.ei8a);
    K6E = n6h.yN4R.cl7e;
    b6f.bj6d = function (e6c) {
        if (e6c.onclose === undefined) {
            e6c.onclose = this.bDf7Y.g6a(this)
        }
        this.bk6e(e6c);
        this.BK5P = e6c.isPub;
        this.jh0x = e6c.rid || -1;
        this.ez8r = e6c.type || -1;
        this.bfD9u = e6c.purl;
        this.Lh8Z = e6c.name || "";
        this.Li8a = e6c.author || "";
        this.bfB9s = e6c.authors || "";
        this.bcb8T = e6c.actId;
        this.bcc8U = e6c.actName;
        this.bCr7k = e6c.title;
        this.bce8W = {};
        this.cax4B = e6c.mesg || "";
        this.cap4t = e6c.placeholder || "说点什么吧";
        this.bfA9r = e6c.hideTip;
        this.bZS4W = e6c.videoJumpUrl;
        var i6c, fe8W = +(new Date);
        try {
            i6c = top.localCache.B6v("user") || {}
        } catch (e) {
            i6c = {}
        }
        for (var i = 0, i6c = i6c.bindings || [], eB8t; i < i6c.length; ++i) {
            eB8t = !i6c[i].tokenJsonStr ? null : JSON.parse(i6c[i].tokenJsonStr);
            if (!eB8t || eB8t.expires_in === undefined) continue;
            var bcj8b = parseInt(eB8t.expires_in), bck8c = parseInt(i6c[i].refreshTime),
                bZK4O = (bcj8b + bck8c) * 1e3 - 5 * 60 * 1e3;
            if (bZK4O > fe8W) this.bce8W[i6c[i].type] = !0
        }
        this.wf4j = y6s.Cb5g.A6u({parent: this.bcn8f, err: this.bAX6R});
        if (this.hb9S) {
            this.hb9S.S6M()
        }
        this.hb9S = y6s.SO5T.A6u({parent: document.body, target: this.ek8c});
        if (this.ez8r == 24 || this.ez8r == 21 || this.Dm6g()) {
            this.xr4v.style.display = "none"
        } else {
            this.xr4v.style.display = "";
            this.oD1x = y6s.bhM0x.A6u({
                parent: this.bfv9m,
                button: this.xr4v,
                onstartupload: this.bzQ6K.g6a(this, true),
                onfinishupload: this.bzQ6K.g6a(this, false)
            })
        }
        if (this.Dm6g()) {
            this.oR1x.innerText = "";
            a5f.w6q(this.oR1x, "info-video");
            a5f.w6q(this.bft9k, "f-hide")
        } else {
            a5f.v6p(this.bft9k, "f-hide")
        }
    };
    b6f.bA7t = function () {
        this.bF7y();
        if (this.wf4j) {
            this.wf4j.S6M();
            delete this.wf4j
        }
        if (this.hb9S) {
            this.hb9S.S6M();
            delete this.hb9S
        }
        if (this.oD1x) {
            this.oD1x.S6M();
            delete this.oD1x
        }
        if (this.mf0x) {
            this.mf0x.S6M();
            delete this.mf0x
        }
    };
    b6f.ca7T = function () {
        this.cd7W = "m-wgt-sharewin"
    };
    b6f.bS7L = function () {
        this.cc7V();
        this.bzF6z = a5f.db8T(this.m6g)[0];
        var bq7j = a5f.F6z(this.m6g, "j-flag");
        this.pV1x = bq7j.shift();
        this.bAX6R = bq7j.shift();
        this.bcn8f = bq7j.shift();
        this.ek8c = bq7j.shift();
        this.oR1x = bq7j.shift();
        this.bfr9i = bq7j.shift();
        this.bXl3x = bq7j.shift();
        this.xr4v = bq7j.shift();
        this.cp7i = bq7j.shift();
        this.bfv9m = bq7j.shift();
        this.Br5w = bq7j.shift();
        this.cCs0x = bq7j.shift();
        this.bft9k = bq7j.shift();
        this.dZ8R = bq7j.shift();
        this.bcM8E = a5f.F6z(this.bft9k, "j-t");
        this.zk5p = H6B.FG7z.A6u({list: a5f.db8T(this.pV1x), selected: "z-slt", onchange: this.bfm9d.g6a(this)});
        if (dn8f.dj8b.browser == "ie" && dn8f.dj8b.version < "8.0") {
            a5f.Y6S(this.bcn8f, "position", "relative");
            a5f.Y6S(this.bcn8f, "zIndex", "10")
        }
        h6b.s6m(window, "snsbind", this.LF9w.g6a(this));
        h6b.s6m(this.ek8c, "input", this.fC8u.g6a(this));
        h6b.s6m(this.ek8c, "keyup", this.tm3x.g6a(this));
        h6b.s6m(this.m6g, "click", this.cG7z.g6a(this));
        this.R6L = q6k.biG0x.A6u();
        this.R6L.s6m("onshareall", this.bcP8H.g6a(this, 0));
        this.R6L.s6m("onshareerror", this.ix9o.g6a(this));
        this.R6L.s6m("onshareprivate", this.bcP8H.g6a(this, 1));
        this.bcQ8I = q6k.xl4p.A6u();
        this.gK9B = q6k.hM9D.A6u();
        try {
            this.LG9x = top.api.sharePermission
        } catch (e) {
        }
        if (!this.LG9x) {
            this.LG9x = Ee6Y;
            x6r.bp7i("/api/event/user/permission", {
                type: "json", onload: function (d6d) {
                    if (d6d.code == 200) {
                        this.LG9x = NEJ.EX(Ee6Y, d6d)
                    }
                }.g6a(this)
            })
        }
    };
    b6f.bfm9d = function (d6d) {
        d6d.index == 0 ? a5f.v6p(this.bzF6z, "m-plshare") : a5f.w6q(this.bzF6z, "m-plshare");
        this.bcn8f.style.display = d6d.index == 0 ? "none" : "";
        this.bXl3x.style.display = d6d.index == 0 ? "" : "none";
        this.xr4v.style.display = d6d.index == 0 ? "" : "none";
        if (this.ez8r == 24 || this.ez8r == 21) {
            this.xr4v.style.display = "none"
        }
        this.bAX6R.style.display = "none";
        this.ek8c.value = "";
        this.bY7R();
        this.Ci6c();
        if (d6d.index == 0) {
            var cy7r = a5f.cV7O(this.ek8c, "width");
            if (cy7r == "auto" || !cy7r) {
                return
            } else {
                if (this.hb9S) {
                    this.hb9S.S6M()
                }
                this.hb9S = y6s.SO5T.A6u({parent: document.body, target: this.ek8c})
            }
            this.bfv9m.style.display = ""
        } else {
            if (this.hb9S) {
                this.hb9S.S6M();
                delete this.hb9S
            }
            this.bfv9m.style.display = "none"
        }
    };
    b6f.cG7z = function (d6d) {
        var f6b = h6b.U6O(d6d, "d:action");
        if (!f6b) return;
        if (a5f.u6o(f6b, "action") == "search") {
            h6b.cm7f(d6d)
        } else if (a5f.u6o(f6b, "default") === undefined) {
            h6b.cm7f(d6d)
        }
        switch (a5f.u6o(f6b, "action")) {
            case"txt":
                this.lA0x();
                break;
            case"search":
                if (this.Dm6g()) {
                    top.location.href = this.bZS4W
                } else if (this.BK5P && this.ez8r != 24) {
                    if (this.mf0x) {
                        this.mf0x.S6M()
                    }
                    this.mf0x = y6s.bgK9B.A6u({
                        parent: this.m6g.parentNode,
                        onfinish: this.bfl9c.g6a(this),
                        oncancel: this.bWA3x.g6a(this)
                    });
                    this.bfk9b = true;
                    this.m6g.style.display = "none";
                    this.Ga7T(this.jh0x < 0 ? "添加音乐" : "更换音乐")
                }
                break;
            case"at":
                h6b.si2x(d6d);
                !!this.gQ9H && this.gQ9H.br7k();
                this.hb9S.SK5P();
                this.fN9E();
                break;
            case"emot":
                h6b.si2x(d6d);
                !!this.hb9S && this.hb9S.Em6g();
                if (!this.gQ9H) {
                    this.gQ9H = n6h.Ht7m.A6u({parent: this.bfr9i});
                    this.gQ9H.s6m("onselect", this.yn4r.g6a(this))
                }
                this.gQ9H.L6F();
                break;
            case"upload":
                break;
            case"sns":
                h6b.bf6Z(d6d);
                var bfj9a, bx7q, t6n = a5f.u6o(f6b, "type");
                if (!this.bce8W[t6n]) {
                    bfj9a = f6b.href.split("?");
                    bx7q = k6e.hD9u(bfj9a[1]);
                    bx7q["csrf_token"] = x6r.gZ9Q("__csrf");
                    top.open(bfj9a[0] + "?" + k6e.dh8Z(bx7q));
                    return
                }
                var bv7o = {2: "sn", 3: "db", 4: "rr"};
                l6f.Bc5h(f6b, "u-slg-" + bv7o[t6n] + "-gray");
                break;
            case"close":
                !!this.gQ9H && this.gQ9H.br7k();
                this.bDf7Y();
                break;
            case"share":
                h6b.bf6Z(d6d);
                if (this.Dm6g()) {
                    if (!a5f.by7r(f6b, "u-btn2-2-dis")) {
                        this.bVK3x()
                    }
                } else if (a5f.by7r(f6b, "u-btn2-2-dis")) {
                    if (!this.LG9x.pubEventWithoutResource && this.jh0x < 0) {
                        this.bVC3x()
                    } else {
                    }
                } else if (this.jh0x < 0 && !this.ek8c.value && this.oD1x && this.oD1x.Lf8X().length == 0) {
                    n6h.X6R.L6F({type: 2, tip: "请输入内容"})
                } else {
                    this.bVa3x()
                }
                break
        }
    };
    b6f.bVC3x = function () {
        var so2x = 0, bfg9X = function () {
            if (so2x % 2) {
                a5f.v6p(this.oR1x, "z-show")
            } else {
                a5f.w6q(this.oR1x, "z-show")
            }
            so2x++;
            if (so2x > 5) {
                clearInterval(eE8w)
            }
        }, eE8w;
        return function () {
            so2x = 0;
            clearInterval(eE8w);
            eE8w = setInterval(bfg9X.g6a(this), 200)
        }
    }();
    b6f.LF9w = function (o6i) {
        o6i = o6i.result;
        this.bce8W[o6i.type] = !0;
        var r6l = k6e.dd8V(bfE9v, o6i.type), cb7U = "u-slg-" + dT8L[r6l] + "-gray";
        a5f.v6p(this.bcM8E[r6l], cb7U)
    };
    b6f.bfl9c = function (bu7n) {
        var j6d = bu7n.data;
        this.jh0x = bu7n.id;
        this.ez8r = bu7n.type;
        this.m6g.style.display = "";
        this.Ga7T(this.bCr7k);
        this.mf0x && this.mf0x.S6M();
        this.bfk9b = false;
        this.bfD9u = j6d.picUrl;
        this.Lh8Z = j6d.title || "";
        this.Li8a = j6d.author || "";
        this.bfB9s = j6d.authors || "";
        this.bUa2x();
        this.TX5c()
    };
    b6f.bWA3x = function () {
        this.mf0x && this.mf0x.S6M();
        this.m6g.style.display = "";
        this.Ga7T(this.bCr7k);
        this.bfk9b = false;
        this.TX5c()
    };
    b6f.yn4r = function (d6d) {
        var bl6f = "[" + d6d.text + "]";
        gc9T.Hz7s(this.ek8c, this.oa1x, bl6f);
        this.fN9E()
    };
    b6f.fC8u = function (d6d) {
        dn8f.dj8b.browser == "ie" && dn8f.dj8b.version < "7.0" ? setTimeout(this.fN9E.g6a(this), 0) : this.fN9E()
    };
    b6f.tm3x = function (d6d) {
        this.lA0x();
        if (d6d.keyCode == 8) this.fN9E()
    };
    b6f.fN9E = function () {
        this.lA0x();
        this.Ci6c()
    };
    b6f.Ci6c = function () {
        var bm6g = Math.ceil(k6e.fp8h(this.ek8c.value.trim()) / 2);
        this.cp7i.innerText = 140 - bm6g;
        bm6g > 140 ? a5f.eR8J(this.cp7i, "s-fc4", "s-fc6") : a5f.eR8J(this.cp7i, "s-fc6", "s-fc4")
    };
    b6f.bVa3x = function () {
        if (this.cC7v()) return;
        if (k6e.fp8h(this.ek8c.value.trim()) > 280) {
            this.bY7R("字数超过140个字符");
            return
        }
        var t6n = this.zk5p.sQ2x(), j6d;
        if (t6n == 0) {
            for (var i = 0, Ii7b = []; i < this.bcM8E.length; ++i) {
                if (!a5f.by7r(this.bcM8E[i], "u-slg-" + dT8L[i] + "-gray")) Ii7b.push(bfE9v[i])
            }
            this.cC7v(!0);
            j6d = {
                id: this.jh0x,
                msg: this.ek8c.value.trim(),
                type: this.TZ5e(this.ez8r),
                picUrl: this.bfD9u,
                snsTypes: Ii7b.join(","),
                isPub: this.BK5P
            };
            if (this.bcb8T > 0) {
                j6d.actId = this.bcb8T;
                if (this.bcc8U) {
                    j6d.msg = "#" + this.bcc8U + "#" + j6d.msg
                }
            }
            var nH1x = this.oD1x && this.oD1x.Lf8X();
            if (nH1x && nH1x.length) {
                j6d.pics = nH1x
            }
            this.R6L.cpm7f(j6d)
        } else {
            var sr2x = this.wf4j.OV3x();
            if (sr2x.length <= 0) {
                this.bY7R("请至少选择一位好友");
                return
            }
            this.R6L.coX7Q({
                data: {
                    id: this.jh0x,
                    msg: this.ek8c.value.trim(),
                    type: this.TZ5e(this.ez8r),
                    userIds: "[" + sr2x.join(",") + "]"
                }
            })
        }
    };
    b6f.bVK3x = function () {
        if (this.cC7v()) {
            return
        }
        this.gK9B.fu8m("click", {target: "share", targetid: "button", page: "sharevideo"});
        if (k6e.fp8h(this.ek8c.value.trim()) > 280) {
            this.bY7R("字数超过140个字符");
            return
        }
        this.cC7v(!0);
        var j6d = {msg: this.ek8c.value.trim() || "", type: "video"}, bTZ2x = {videoId: this.jh0x};
        if (this.bcb8T > 0) {
            j6d.actId = this.bcb8T;
            if (this.bcc8U) {
                j6d.msg = "#" + this.bcc8U + "#" + j6d.msg
            }
        }
        j6d.videoinfo = JSON.stringify(bTZ2x);
        this.R6L.coB7u({data: {videoId: this.jh0x, commit: true}, data2: j6d, snsTypes: ""})
    };
    b6f.bcP8H = function (t6n, o6i) {
        this.cC7v(!1);
        this.br7k();
        if (!this.bfA9r) {
            if (this.Dm6g()) {
                n6h.X6R.L6F({tip: "视频将在转码完成后自动发出", autoclose: true})
            } else {
                n6h.X6R.L6F({
                    tip: "分享成功" + (o6i.point > 0 ? ' 获得<em class="s-fc6">' + o6i.point + "积分</em>" : ""),
                    autoclose: true
                })
            }
        }
        h6b.z6t(n6h.yN4R, "sharesuccess", {isPrivate: t6n, rid: this.jh0x, rtype: this.ez8r, data: o6i.event});
        this.z6t("onshare")
    };
    b6f.ix9o = function (o6i) {
        this.cC7v(!1);
        var bE7x = "分享失败";
        if (o6i.code) {
            switch (o6i.code) {
                case 404:
                    bE7x = "分享的资源不存在";
                    break;
                case 407:
                    bE7x = "输入内容包含有关键字";
                    break;
                case 408:
                    bE7x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bE7x = o6i.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l6f.fh8Z({clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试"})
            }
        }
        this.bY7R(bE7x)
    };
    b6f.lA0x = function () {
        this.oa1x = gc9T.td3x(this.ek8c)
    };
    b6f.bY7R = function (bE7x) {
        this.dG8y(this.dZ8R, bE7x)
    };
    b6f.cC7v = function (cQ7J) {
        return this.dO8G(this.Br5w, cQ7J, "分享", "分享中...")
    };
    b6f.TZ5e = function (jQ0x) {
        return cbn4r[jQ0x] || ""
    };
    b6f.bTY2x = function () {
        var eg8Y, tB3x = this.TZ5e(this.ez8r);
        this.oR1x.style.display = "";
        if (this.jh0x < 0) {
            this.oR1x.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.Lh8Z) {
                this.oR1x.style.display = "none";
                return
            }
            var Ue5j = this.BK5P && this.ez8r != 24;
            eg8Y = (bbO8G[tB3x] ? bbO8G[tB3x] + "：" : "") + this.Lh8Z + (bDl7e[tB3x] || " ") + (tB3x == "mv" || tB3x == "album" ? this.bfB9s || this.Li8a : this.Li8a);
            a5f.dH8z(this.oR1x, "m-xwgt-share-infobar", {canChange: Ue5j, info: eg8Y});
            if (Ue5j) {
                a5f.v6p(this.oR1x, "z-dis")
            } else {
                a5f.w6q(this.oR1x, "z-dis")
            }
        }
        a5f.v6p(this.oR1x, "info-video")
    };
    b6f.bUa2x = function () {
        var tB3x = this.TZ5e(this.ez8r),
            eg8Y = (bbO8G[tB3x] ? bbO8G[tB3x] + "：" : "") + this.Lh8Z + (bDl7e[tB3x] || " ") + (tB3x == "mv" || tB3x == "album" ? this.bfB9s || this.Li8a : this.Li8a);
        Ue5j = this.BK5P && this.ez8r != 24;
        if (this.Dm6g()) {
        } else {
            a5f.v6p(this.oR1x, "info-video");
            a5f.dH8z(this.oR1x, "m-xwgt-share-infobar", {canChange: Ue5j, isPub: this.BK5P, info: eg8Y})
        }
    };
    b6f.bTW2x = function () {
        var Ik7d = this.ek8c.value;
        if (this.BK5P) {
            if (!!this.bfk9b) {
                return !!Ik7d && !!Ik7d.length || !!this.oD1x && this.oD1x.Lf8X().length > 0
            } else {
                return !(this.jh0x < 0) || !!Ik7d && !!Ik7d.length || !!this.oD1x && this.oD1x.Lf8X().length > 0
            }
        } else {
            return !!Ik7d && !!Ik7d.length || !!this.oD1x && this.oD1x.Lf8X().length > 0
        }
    };
    b6f.TX5c = function () {
        var bxP6J = false;
        if (!this.BK5P || this.LG9x.pubEventWithoutResource || !(this.jh0x < 0)) {
            bxP6J = true
        }
        if (bxP6J) {
            a5f.v6p(this.Br5w, "u-btn2-2-dis")
        } else {
            a5f.w6q(this.Br5w, "u-btn2-2-dis")
        }
    };
    b6f.bzQ6K = function (bfc9T) {
        if (bfc9T) {
            a5f.w6q(this.Br5w, "u-btn2-2-dis")
        } else {
            this.TX5c()
        }
    };
    b6f.bDf7Y = function (d6d) {
        if (d6d) {
            d6d.stopped = true
        }
        if (this.bTW2x()) {
            l6f.gD9u({
                title: "提示", message: "是否退出本次编辑？", btnok: "退出", action: function (W6Q) {
                    if (W6Q == "ok") {
                        this.z6t("forceclose", {});
                        this.br7k()
                    }
                }.g6a(this)
            })
        } else {
            this.z6t("forceclose", {});
            this.br7k()
        }
    };
    b6f.Ga7T = function (ec8U, dL8D) {
        this.om1x.yW5b(ec8U, dL8D)
    };
    b6f.Uj5o = function (t6n) {
        this.gK9B.fu8m("page", {type: t6n})
    };
    b6f.Dm6g = function () {
        return this.ez8r == 39
    };
    b6f.L6F = function () {
        var bTy2x = function (p6j, r6l) {
            var cb7U = "u-slg-" + dT8L[r6l] + "-gray";
            !this.bce8W[bfE9v[r6l]] ? a5f.w6q(p6j, cb7U) : a5f.v6p(p6j, cb7U)
        };
        return function () {
            K6E.L6F.call(this);
            this.m6g.style.display = "";
            this.bY7R();
            this.cC7v(!1);
            this.zk5p.RS4W(0);
            this.ek8c.focus();
            this.ek8c.value = this.cax4B || "";
            this.ek8c.placeholder = this.cap4t || "";
            if (!this.Dm6g()) {
                this.bTY2x()
            } else {
                a5f.w6q(this.oR1x, "info-video");
                a5f.dH8z(this.oR1x, "m-xwgt-share-videobar", {title: this.Lh8Z, picUrl: this.bfD9u})
            }
            this.fN9E();
            this.wf4j.cuz9q();
            k6e.bb6V(this.bcM8E, bTy2x, this);
            this.lA0x();
            if (this.BK5P) {
                this.pV1x.style.display = "none"
            } else {
                this.pV1x.style.display = ""
            }
            this.TX5c()
        }
    }();
    b6f.br7k = function (d6d) {
        K6E.br7k.call(this);
        !!this.gQ9H && this.gQ9H.br7k();
        if (this.wf4j) {
            this.wf4j.S6M();
            delete this.wf4j
        }
        if (this.hb9S) {
            this.hb9S.S6M();
            delete this.hb9S
        }
        if (this.oD1x) {
            this.oD1x.S6M();
            delete this.oD1x
        }
        if (this.bxG5L) {
            this.bxG5L = this.bxG5L.S6M()
        }
        if (this.mf0x) {
            this.mf0x.S6M();
            delete this.mf0x
        }
    };
    l6f.mr0x = function (e6c) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e6c.title === undefined) {
            e6c.title = "分享"
        }
        if (e6c.actId && e6c.type != 39) {
            var t6n = cbe4i[e6c.resourceType], ck7d = e6c.resourceJson, hz9q;
            if (k6e.fw8o(ck7d)) {
                try {
                    ck7d = JSON.parse(ck7d)
                } catch (e) {
                }
            }
            if (t6n) {
                hz9q = l6f.bxL6F(t6n, ck7d);
                e6c.name = hz9q.title;
                e6c.author = hz9q.author;
                e6c.picUrl = hz9q.picUrl;
                e6c.type = t6n;
                e6c.rid = (ck7d || []).id
            }
        }
        n6h.yN4R.L6F(e6c)
    };
    H6B.fE8w.A6u({element: n6h.yN4R, event: ["sharesuccess"]})
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, h6b = c6e("nej.v"), a5f = c6e("nej.e"), x6r = c6e("nej.j"), n6h = c6e("nm.l"),
        y6s = c6e("nm.w"), bC7v = c6e("nej.ui"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), b6f, K6E;
    n6h.Un5s = NEJ.C();
    b6f = n6h.Un5s.O6I(n6h.ei8a);
    K6E = n6h.Un5s.cl7e;
    b6f.cs7l = function () {
        this.cx7q()
    };
    b6f.bS7L = function () {
        this.cc7V();
        var i6c = a5f.F6z(this.m6g, "j-flag");
        h6b.s6m(i6c[0], "click", this.Ep6j.g6a(this))
    };
    b6f.ca7T = function () {
        this.cd7W = "m-import-ok"
    };
    b6f.bj6d = function (e6c) {
        e6c.parent = e6c.parent || document.body;
        e6c.title = "歌曲同步完成";
        this.bk6e(e6c)
    };
    b6f.bA7t = function () {
        this.bF7y()
    };
    b6f.Ep6j = function (d6d) {
        this.br7k();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    };
    b6f.zQ5V = function () {
        this.br7k()
    };
    b6f.bGa8S = function (d6d) {
        if (d6d.keyCode == 13) this.Dr6l()
    }
})();
(function () {
    var c6e = NEJ.P, Z6T = NEJ.O, h6b = c6e("nej.v"), a5f = c6e("nej.e"), x6r = c6e("nej.j"), N6H = c6e("nej.p"),
        k6e = c6e("nej.u"), n6h = c6e("nm.l"), y6s = c6e("nm.w"), bC7v = c6e("nej.ui"), q6k = c6e("nm.d"),
        l6f = c6e("nm.x"), b6f, K6E;
    n6h.bxF5K = NEJ.C();
    b6f = n6h.bxF5K.O6I(n6h.ei8a);
    b6f.ca7T = function () {
        this.cd7W = "m-programtips-layer"
    };
    b6f.bS7L = function () {
        this.cc7V();
        this.bO7H = a5f.F6z(this.m6g, "j-flag")
    };
    b6f.bj6d = function (e6c) {
        e6c.clazz = " m-layer-programtips";
        e6c.parent = e6c.parent || document.body;
        e6c.title = "付费内容提示";
        e6c.draggable = !0;
        e6c.destroyalbe = !0;
        e6c.mask = true;
        this.bk6e(e6c);
        this.gL9C = e6c.id;
        this.bTr2x = e6c.radiotype;
        this.lk0x = location.protocol + "//" + (this.bfa9R() || "music.163.com") + "/m/" + this.bTr2x + "?id=" + this.gL9C;
        this.bSW2x()
    };
    b6f.bA7t = function () {
        this.bF7y()
    };
    b6f.zQ5V = function () {
        this.br7k()
    };
    b6f.Ep6j = function (d6d) {
        this.z6t("onok", C6w);
        this.br7k()
    };
    l6f.bxD5I = function (e6c) {
        n6h.bxF5K.A6u(e6c).L6F()
    };
    b6f.bSW2x = function () {
        x6r.bp7i("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k6e.dh8Z({url: this.lk0x, size: 180}),
            onload: function (j6d) {
                if (j6d.code == 200) {
                    this.bSK2x(j6d.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }.g6a(this)
        })
    };
    b6f.bfa9R = function () {
        var SQ5V = location.host;
        if (SQ5V.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b6f.bSK2x = function (jx0x) {
        this.bO7H[0].style.backgroundImage = "url(" + jx0x + ")"
    }
})();
(function () {
    var c6e = NEJ.P, a5f = c6e("nej.e"), dn8f = c6e("nej.p"), h6b = c6e("nej.v"), k6e = c6e("nej.u"),
        H6B = c6e("nej.ut"), x6r = c6e("nej.j"), q6k = c6e("nm.d"), l6f = c6e("nm.x"), E6y = c6e("nm.m"),
        n6h = c6e("nm.l"), M6G = c6e("nm.m.f"), b6f, K6E;
    E6y.cX7Q = NEJ.C();
    b6f = E6y.cX7Q.O6I(H6B.do8g);
    b6f.bH7A = function () {
        var pF1x = !1;
        return function () {
            if (pF1x) return;
            pF1x = !0;
            this.bL7E();
            if (top == self) {
                return
            }
            this.sh2x = a5f.B6v("g_backtop");
            if (window.GRef != "mail") {
            } else {
                this.bxA5F()
            }
            H6B.fE8w.A6u({element: window, event: ["share", "playchange", "snsbind", "playstatechange"]});
            this.bT7M([[window, "scroll", this.AS5X.g6a(this)], [document, "keyup", this.bSz2x.g6a(this)], [document.body, "click", this.rI2x.g6a(this)], [document, "mouseup", this.bSy2x.g6a(this)], [this.sh2x, "click", this.Mo9f.g6a(this)], [q6k.rJ2x, "message", this.ul3x.g6a(this)]]);
            l6f.cqX8P(document.body);
            this.AS5X();
            if (this.AR5W !== false && typeof GUser !== "undefined" && GUser.userId > 0) q6k.rJ2x.gh9Y().th3x();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (dn8f.dj8b.browser == "ie" && parseInt(dn8f.dj8b.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var gI9z = top.player.getPlaying();
                    if (gI9z && gI9z.track && gI9z.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + gI9z.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) {
            }
            window.share = this.wx4B.g6a(this);
            this.kD0x = q6k.hM9D.A6u();
            window.log = this.kH0x.g6a(this);
            var rU2x = location.search;
            if (rU2x) {
                var bx7q = rU2x.substr(rU2x.indexOf("?") + 1), gb9S = k6e.hD9u(bx7q);
                if (gb9S && gb9S["_hash"]) location.hash = gb9S["_hash"]
            }
        }
    }();
    b6f.bSz2x = function (d6d) {
        var f6b = h6b.U6O(d6d);
        try {
            if (d6d.keyCode == 80 && l6f.byL6F() || ["textarea", "input"].indexOf(f6b.tagName.toLowerCase()) >= 0) return;
            h6b.z6t(top.document, "keyup", {ctrlKey: d6d.ctrlKey, keyCode: d6d.keyCode})
        } catch (e) {
        }
    };
    b6f.rI2x = function (d6d) {
        var f6b = h6b.U6O(d6d);
        if (f6b && f6b.tagName == "INPUT") return;
        var f6b = h6b.U6O(d6d, "d:pid");
        if (f6b) {
            h6b.cm7f(d6d);
            var oH1x = a5f.u6o(f6b, "pid"), AQ5V = a5f.u6o(f6b, "ptype"), W6Q = a5f.u6o(f6b, "action") || "play";
            switch (W6Q) {
                case"subscribe":
                    l6f.mi0x({tracks: [oH1x]});
                    break
            }
        }
        f6b = h6b.U6O(d6d, "d:resAction");
        if (f6b && f6b.className.indexOf("-dis") == -1) {
            var cU7N = a5f.u6o(f6b, "resId"), t6n = a5f.u6o(f6b, "resType"), beZ9Q = a5f.u6o(f6b, "resRadiotype"),
                beY9P = a5f.u6o(f6b, "resRadioid"), dY8Q = a5f.u6o(f6b, "resFrom"), j6d = a5f.u6o(f6b, "resData"),
                W6Q = a5f.u6o(f6b, "resAction"), bgE9v = a5f.u6o(f6b, "resCopyright"),
                UH5M = a5f.u6o(f6b, "resAuditstatus");
            if (W6Q != "log" && W6Q != "bilog") h6b.cm7f(d6d);
            switch (W6Q) {
                case"log":
                    j6d = (j6d || "").split("|");
                    if (!!j6d[0]) {
                        var bd6X = {id: cU7N, alg: j6d[2] || "itembased", scene: j6d[3], position: j6d[1] || 0};
                        if (!!j6d[4]) bd6X.srcid = j6d[4];
                        window.log(j6d[0], bd6X)
                    }
                    break;
                case"bilog":
                    var bkj0x = a5f.u6o(f6b, "logAction"), bkh0x = a5f.u6o(f6b, "logJson");
                    window.log(bkj0x, bkh0x);
                    break;
                case"share":
                    if (UH5M && UH5M == 1) {
                        l6f.ic9T("由于版权问题，该节目暂时无法分享。")
                    } else {
                        share(cU7N, t6n, a5f.u6o(f6b, "resPic"), a5f.u6o(f6b, "resName"), a5f.u6o(f6b, "resAuthor"), a5f.u6o(f6b, "resAuthors"))
                    }
                    break;
                case"fav":
                case"subscribe":
                    if (t6n == 18) {
                        var qa2x = a5f.u6o(f6b, "resLevel"), rr2x = a5f.u6o(f6b, "resFee");
                        if (qa2x == 10) {
                            l6f.tY3x(rr2x, cU7N, "song");
                            break
                        }
                        l6f.mi0x({tracks: [cU7N]})
                    }
                    break;
                case"download":
                    l6f.Jc8U({id: cU7N, type: t6n});
                    break;
                case"programtips":
                    if (UH5M && UH5M == 1) {
                        l6f.ic9T("由于版权问题，该节目暂时无法分享。")
                    } else {
                        l6f.bxD5I({id: beY9P, radiotype: beZ9Q})
                    }
                    break
            }
        }
        if (top == self) return;
        try {
            top.onIframeClick(d6d)
        } catch (e) {
        }
    };
    b6f.bSy2x = function (d6d) {
        try {
            h6b.z6t(top.document, "mouseup")
        } catch (e) {
        }
    };
    b6f.AS5X = function () {
        var bSh2x = function () {
            var ch7a = window.innerHeight;
            if (!k6e.vl3x(ch7a)) ch7a = (document.documentElement || document.body).clientHeight;
            return ch7a
        };
        return function (d6d) {
            if (!this.sh2x) return;
            var UJ5O = bSh2x(), fS9J = document.documentElement.scrollTop || document.body.scrollTop;
            a5f.Y6S(this.sh2x, "display", fS9J > 0 ? "" : "none");
            if (dn8f.dj8b.browser == "ie" && dn8f.dj8b.version < "7.0") {
                var gi9Z = Math.min(document.body.clientHeight, UJ5O + fS9J) - 204;
                a5f.Y6S(this.sh2x, "top", gi9Z + "px")
            }
        }
    }();
    b6f.Mo9f = function (d6d) {
        h6b.cm7f(d6d);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b6f.wx4B = function () {
        var beX9O = function (d6d) {
            h6b.z6t(window, "share", d6d)
        };
        return function (cU7N, t6n, EO6I, T6N, Mx9o, My9p) {
            l6f.mr0x({
                rid: cU7N,
                type: t6n,
                purl: EO6I,
                name: T6N,
                author: Mx9o,
                authors: My9p,
                onshare: beX9O.g6a(this)
            })
        }
    }();
    b6f.kH0x = function (W6Q, bd6X) {
        try {
            top.log(W6Q, bd6X)
        } catch (e) {
            switch (W6Q) {
                case"play":
                    this.kD0x.eu8m(bd6X);
                    break;
                case"search":
                    this.kD0x.bFk7d(bd6X);
                    break;
                default:
                    this.kD0x.fu8m(W6Q, bd6X)
            }
        }
    };
    b6f.bxA5F = function () {
        var UO5T, beW9N = false, bs7l = [45, 60];
        var bSa2x = function (bE7x) {
            if (bE7x.title != "MailBoxImport") return;
            var P6J = JSON.parse(bE7x.content || "null") || Z6T;
            if (P6J.status == 10) {
                n6h.Un5s.A6u().L6F();
                window.clearTimeout(UO5T)
            }
        };
        var tc3x = function (d6d) {
            if (d6d.code == 200) {
                if (d6d.status == 1) {
                    h6b.s6m(q6k.Ah5m, "message", bSa2x.g6a(this));
                    q6k.Ah5m.A6u().bjQ0x();
                    beW9N = true
                } else {
                    if (beW9N) {
                        if (d6d.status == 10) {
                            n6h.Un5s.A6u().L6F();
                            h6b.gG9x(q6k.Ah5m, "message");
                            window.clearTimeout(UO5T);
                            beW9N = false
                        }
                    } else {
                        window.clearTimeout(UO5T)
                    }
                }
            }
        };
        return function () {
            var rR2x = bs7l.shift() * 1e3;
            x6r.bp7i("/api/musicbox/mail/status", {type: "json", method: "get", onload: tc3x.g6a(this)});
            if (rR2x) {
                UO5T = window.setTimeout(arguments.callee, rR2x)
            }
        }
    }();
    b6f.ul3x = function (d6d) {
        try {
            top.polling(d6d)
        } catch (e) {
        }
    }
})()