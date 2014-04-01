 /* lungo v2.2.1 - 2013/8/14
   http://lungo.tapquo.com
   Copyright (c) 2013 Tapquo S.L. - Licensed GPLv3, Commercial */
!function() {
    var a;
    window.Lungo = a = {};
    a.VERSION = "2.2.1";
    a.DEVICE = null;
    a.Config || (a.Config = {});
    a.Element || (a.Element = {});
    a.Data || (a.Data = {});
    a.Sugar || (a.Sugar = {});
    a.View || (a.View = {});
    a.Boot || (a.Boot = {});
    a.Device || (a.Device = {});
    a.ready || (a.ready = Quo().ready)
}.call(this);
!function() {
    Lungo.Attributes = {count: {selector: "*",html: '<span class="tag count">{{value}}</span>'},pull: {selector: "*",html: '<div data-control="pull" data-icon="{{value}}" data-loading>\n  <strong></strong>\n</div>'},progress: {selector: "*",html: '<div class="progress">\n  <span class="bar"><span class="value" style="width:{{value}};"></span></span>\n</div>'},label: {selector: "*",html: "<abbr>{{value}}</abbr>"},icon: {selector: "*",html: '<span class="icon {{value}}"></span>'},image: {selector: "*",html: '<img src="{{value}}" class="icon" />'},title: {selector: "header",html: '<h1 class="title centered">{{value}}</h1>'},loading: {selector: "*",html: '<div class="loading {{value}}">\n  <span class="top"></span>\n  <span class="right"></span>\n  <span class="bottom"></span>\n  <span class="left"></span>\n</div>'},back: {selector: "header",html: '<nav class="left"><a href="#" data-view-section="back"><span class="icon {{value}}"></span></a></nav>'}}
}.call(this);
!function() {
    Lungo.Cache = function(a) {
        var b, c, d, e, f;
        f = {};
        e = function(d, e) {
            if (b(d)) {
                return f[d] = a.Core.mix(c(d), e)
            } else {
                return f[d] = e
            }
        };
        c = function(a, b) {
            if (arguments.length === 1) {
                return f[a]
            } else {
                if (f[arguments[0]]) {
                    return f[arguments[0]][arguments[1]]
                } else {
                    return void 0
                }
            }
        };
        d = function(a, b) {
            if (arguments.length === 1) {
                return delete f[a]
            } else {
                return delete f[arguments[0]][arguments[1]]
            }
        };
        b = function(a) {
            if (f[a]) {
                return true
            } else {
                return false
            }
        };
        return {set: e,get: c,remove: d,exists: b}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Constants = {ELEMENT: {SECTION: "section",ARTICLE: "article",ASIDE: "aside",BODY: "body",DIV: "div",LIST: "<ul></ul>",LI: "li"},CONTROL: {MENU: "[data-control=menu]"},QUERY: {ARTICLE_ROUTER: "[data-view-article]",SECTION_ROUTER: "[data-view-section]",ARTICLE_ROUTER_TOUCH: "header [data-view-article], footer [data-view-article], nav[data-control] [data-view-article]",SECTION_ROUTER_TOUCH: "header [data-view-section], footer [data-view-section], nav[data-control] [data-view-section]",ARTICLE_ROUTER_TAP: "article [data-view-article]",SECTION_ROUTER_TAP: "article [data-view-section]",ASIDE_ROUTER: "[data-view-aside]",MENU_ROUTER: "[data-view-menu]",LIST_IN_ELEMENT: "article.list",ELEMENT_SCROLLABLE: "article.scroll",HREF_ASIDE: "section[data-aside].drag",HREF_ROUTER: "a[href][data-router]",MENU_HREF: "[data-control=menu] a[href]",CONTROL_CHECKBOX: "[data-control-checkbox]",NAVIGATION_ITEM: 'a[href][data-router="article"]',ARTICLE_REFERENCE: "[data-article]",TITLE: "header .title, footer .title",ACTIVE_LIST_ITEM: "li a.active, li.active"},CLASS: {ACTIVE: "active",ASIDE: "aside",SHOW: "show",HIDE: "hide",HIDING: "hiding",RIGHT: "right",LEFT: "left",HORIZONTAL: "horizontal",SMALL: "small",LAST: "last"},TRIGGER: {LOAD: "load",UNLOAD: "unload"},EVENT: {TRANSITION_END: ["webkitAnimationEnd", "animationend"],CHANGE: "change"},TRANSITION: {DURATION: 400,ORIGIN: "transition-origin",ATTR: "transition"},ASIDE: {NORMAL: 264},ATTRIBUTE: {ID: "id",HREF: "href",TITLE: "title",ARTICLE: "article",CLASS: "class",WIDTH: "width",HEIGHT: "height",PIXEL: "px",PERCENT: "%",ROUTER: "router",FIRST: "first",LAST: "last",EMPTY: "",CHILDREN: "children",TRANSITION: "transition",STATE: "state",DIRECTION: "direction"},BINDING: {START: "{{",END: "}}",KEY: "value",SELECTOR: "{{value}}"},DEVICE: {PHONE: "phone",TABLET: "tablet",TV: "tv"},ERROR: {DATABASE: "ERROR: Connecting to Data.Sql.",DATABASE_TRANSACTION: "ERROR: Data.Sql >> ",ROUTER: "ERROR: The target does not exists >>",LOADING_RESOURCE: "ERROR: Loading resource: "}}
}.call(this);
!function() {
    Lungo.Core = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        c = Array.prototype;
        j = function(b, c) {
            if (!a.Core.isMobile()) {
                return console[b === 1 ? "log" : b === 2 ? "warn" : "error"](c)
            }
        };
        f = function() {
            var a, b;
            a = m(arguments);
            b = a.shift();
            if (n(b) === "function") {
                return b.apply(null, a)
            }
        };
        d = function(a, b) {
            return function() {
                return b.apply(a, m(arguments))
            }
        };
        k = function() {
            var a, b, c, d, e;
            c = c || {};
            a = 0;
            d = arguments.length;
            while (a < d) {
                b = arguments[a];
                for (e in b) {
                    if (i(b, e)) {
                        c[e] = b[e]
                    }
                }
                a++
            }
            return c
        };
        i = function(a, c) {
            return b.isOwnProperty(a, c)
        };
        n = function(a) {
            return b.toType(a)
        };
        m = function(a) {
            return c.slice.call(a, 0)
        };
        h = function() {
            return b.isMobile()
        };
        e = function() {
            return b.environment()
        };
        l = function(a, b, c) {
            var d;
            d = c === "desc" ? -1 : 1;
            return a.sort(function(a, c) {
                if (a[b] < c[b]) {
                    return -d
                } else {
                    if (a[b] > c[b]) {
                        return d
                    } else {
                        return 0
                    }
                }
            })
        };
        g = function(a, b, c) {
            var d, e, f, g;
            g = null;
            e = 0;
            f = a.length;
            while (e < f) {
                d = a[e];
                if (d[b] === c) {
                    g = d;
                    break
                }
                e++
            }
            return g
        };
        return {log: j,execute: f,bind: d,mix: k,isOwnProperty: i,toType: n,toArray: m,isMobile: h,environment: e,orderByProperty: l,findByProperty: g}
    }(Lungo, Quo)
}.call(this);
!function() {
    Lungo.dom = function(a) {
        return $$(a)
    }
}.call(this);
!function() {
    Lungo.Events = function(a) {
        var b, c;
        b = " ";
        c = function(c) {
            var d, e, f, g, h;
            h = [];
            for (e in c) {
                g = e.indexOf(b);
                if (g > 0) {
                    f = e.substring(0, g);
                    d = e.substring(g + 1);
                    h.push(a.dom(document.body).delegate(d, f, c[e]))
                } else {
                    h.push(void 0)
                }
            }
            return h
        };
        return {init: c}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Fallback = function(a) {
        var b;
        b = function() {
            var b, c;
            b = a.Core.environment();
            c = b.isMobile && b.os.name === "Android" && b.os.version < "3" ? "absolute" : "fixed";
            return a.dom(document.body).data("position", c)
        };
        return {fixPositionInAndroid: b}
    }(Lungo)
}.call(this);
!function() {
    Lungo.init = function(a) {
        var b;
        Lungo.Config = a;
        if (a && a.resources) {
            Lungo.Resource.load(a.resources)
        }
        Lungo.Boot.Device.init();
        b = Lungo.DEVICE === Lungo.Constants.DEVICE.PHONE;
        Lungo.Router = b ? Lungo.RouterPhone : Lungo.RouterTablet;
        Lungo.Boot.Events.init();
        Lungo.Boot.Data.init();
        return Lungo.Boot.Layout.init()
    }
}.call(this);
!function() {
    Lungo.Notification = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y;
        v = [];
        q = null;
        y = null;
        d = 1;
        b = a.Constants.ATTRIBUTE;
        c = a.Constants.BINDING;
        h = a.Constants.TRANSITION;
        f = {BODY: "body",NOTIFICATION: ".notification",MODAL: ".notification .window",MODAL_HREF: ".notification .window a",WINDOW_CLOSABLE: ".notification [data-action=close], .notification > .error, .notification > .success",CONFIRM_BUTTONS: ".notification .confirm button, .notification .push"};
        g = {MODAL: "modal",VISIBLE: "visible",SHOW: "show",WORKING: "working",INPUT: "input"};
        e = '<div class="notification"><div class="window"></div></div>';
        n = function(b, d, e, f) {
            var g, h;
            h = void 0;
            if (b != null) {
                h = t(d, null, b)
            } else {
                g = a.Attributes.loading.html;
                h = g.replace(c.START + c.KEY + c.END, "white")
            }
            w(h, "growl");
            return r(e, f)
        };
        k = function() {
            y.removeClass("show");
            return setTimeout(function() {
                return q.removeClass("show").removeClass("html").removeClass("confirm").removeClass("notify").removeClass("growl")
            }, h.DURATION / 2)
        };
        i = function(a) {
            var b;
            v = a;
            b = t(a.title, a.description, a.icon);
            b += p(a.accept, "accept");
            b += p(a.cancel, "cancel");
            return w(b, "confirm")
        };
        o = function(a, b, c, d, e) {
            if (c == null) {
                c = "ok"
            }
            return u(a, b, c, "success", d, e)
        };
        j = function(a, b, c, d, e) {
            if (c == null) {
                c = "remove-sign"
            }
            return u(a, b, c, "error", d, e)
        };
        l = function(a, b, c, d) {
            if (b) {
                a += '<button class="anchor" data-action="close">' + b + "</button>"
            }
            w(a, "html " + c);
            return r(d)
        };
        m = function(a, b, c) {
            w(t(a, null, b), "push " + c, false);
            return r(5)
        };
        s = function() {
            a.dom(f.BODY).append(e);
            q = a.dom(f.NOTIFICATION);
            y = q.children(".window");
            return x()
        };
        w = function(a, b, c) {
            if (c == null) {
                c = true
            }
            if (c) {
                q.removeClass("push")
            } else {
                q.addClass("push")
            }
            if (!y.hasClass("show")) {
                q.addClass("show")
            } else {
                y.removeClass(g.SHOW)
            }
            return setTimeout(function() {
                y.html(a);
                return y.attr("class", "window " + b + " show")
            }, h.DURATION / 2)
        };
        r = function(a, b) {
            var c = this;
            if (a != null && a > 0) {
                return setTimeout(function() {
                    if (b) {
                        return b.call(void 0, b)
                    } else {
                        return k()
                    }
                }, a * 1e3)
            }
        };
        u = function(a, b, c, d, e, f) {
            w(t(a, b, c), d);
            return r(e, f)
        };
        t = function(a, b, c) {
            b = !b ? "&nbsp;" : b;
            a = !a ? "&nbsp;" : a;
            return '<span class="icon ' + c + '"></span><strong class="text bold">' + a + "</strong><small>" + b + "</small>"
        };
        p = function(a, b) {
            return '<button data-callback="' + b + '" class="anchor">' + a.label + "</a>"
        };
        x = function() {
            a.dom(f.CONFIRM_BUTTONS).touch(function(b) {
                var c, d;
                c = a.dom(this);
                if (v[c.data("callback")] != null) {
                    d = v[c.data("callback")].callback;
                    v = null;
                    if (d != null) {
                        d.call(void 0, d)
                    }
                }
                return k()
            });
            return a.dom(f.WINDOW_CLOSABLE).tap(k)
        };
        s();
        return {show: n,hide: k,error: j,success: o,confirm: i,html: l,push: m}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Resource = function(a, b) {
        var c, d, e, f, g, h;
        c = a.Constants.ELEMENT;
        d = a.Constants.ERROR;
        e = function(b, c) {
            var d, e, g;
            if (a.Core.toType(b) === "array") {
                d = 0;
                e = b.length;
                g = [];
                while (d < e) {
                    f(b[d]);
                    g.push(d++)
                }
                return g
            } else {
                return f(b, c)
            }
        };
        f = function(b, c) {
            var d;
            try {
                return h(g(b), c)
            } catch (e) {
                d = e;
                return a.Core.log(3, d.message)
            }
        };
        g = function(a) {
            return b.ajax({url: a,async: false,dataType: "html",error: function() {
                    return console.error(d.LOADING_RESOURCE + a)
                }})
        };
        h = function(b, d) {
            if (a.Core.toType(b) === "string") {
                d = d ? d : c.BODY;
                return a.dom(d).append(b)
            }
        };
        return {load: e}
    }(Lungo, Quo)
}.call(this);
!function() {
    !function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        g = a.document;
        h = g.documentElement;
        d = "scroll-enabled";
        c = "ontouchmove" in g;
        l = "WebkitOverflowScrolling" in h.style || !c && a.screen.width > 1200 || function() {
            var b, c, d, e;
            b = a.navigator.userAgent;
            c = b.match(/AppleWebKit\/([0-9]+)/);
            e = c && c[1];
            d = c && e >= 534;
            return b.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && d || b.match(RegExp(" Version\\/([0-9]+)")) && RegExp.$1 >= 0 && a.blackberry && d || b.indexOf(/PlayBook/) > -1 && RegExp.$1 >= 0 && d || b.match(/Fennec\/([0-9]+)/) && RegExp.$1 >= 4 || b.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && d || b.match(/NokiaBrowser\/([0-9\.]+)/) && parseFloat(RegExp.$1) === 7.3 && c && e >= 533
        }();
        f = function(a, b, c, d) {
            return c * ((a = a / d - 1) * a * a + 1) + b
        };
        j = false;
        m = void 0;
        n = function(b, c) {
            var d, e, f, g, h, i, j;
            f = 0;
            i = b.scrollLeft;
            j = b.scrollTop;
            h = {top: "+0",left: "+0",duration: 100,easing: a.overthrow.easing};
            d = void 0;
            e = void 0;
            if (c) {
                for (g in h) {
                    if (c[g] !== void 0) {
                        h[g] = c[g]
                    }
                }
            }
            if (typeof h.left === "string") {
                h.left = parseFloat(h.left);
                d = h.left + i
            } else {
                d = h.left;
                h.left = h.left - i
            }
            if (typeof h.top === "string") {
                h.top = parseFloat(h.top);
                e = h.top + j
            } else {
                e = h.top;
                h.top = h.top - j
            }
            m = setInterval(function() {
                if (f++ < h.duration) {
                    b.scrollLeft = h.easing(f, i, h.left, h.duration);
                    return b.scrollTop = h.easing(f, j, h.top, h.duration)
                } else {
                    if (d !== b.scrollLeft) {
                        b.scrollLeft = d
                    }
                    if (e !== b.scrollTop) {
                        b.scrollTop = e
                    }
                    return k()
                }
            }, 1);
            return {top: e,left: d,duration: h.duration,easing: h.easing}
        };
        e = function(a, b) {
            return !b && a.className && a.className.indexOf("scroll") > -1 && a || e(a.parentNode)
        };
        k = function() {
            return clearInterval(m)
        };
        i = function() {
            var b, i, m, o, p, q, r, s, t, u, v, w;
            if (j) {
                return
            }
            j = true;
            if (l || c) {
                h.className += " " + d
            }
            a.overthrow.forget = function() {
                h.className = h.className.replace(d, "");
                if (g.removeEventListener) {
                    g.removeEventListener("touchstart", w, false)
                }
                a.overthrow.easing = f;
                return j = false
            };
            if (l || !c) {
                return
            }
            i = void 0;
            s = [];
            q = [];
            p = void 0;
            r = void 0;
            u = function() {
                s = [];
                return p = null
            };
            t = function() {
                q = [];
                return r = null
            };
            m = function() {
                var a, b, c;
                c = (s[0] - s[s.length - 1]) * 8;
                b = (q[0] - q[q.length - 1]) * 8;
                a = Math.max(Math.abs(b), Math.abs(c)) / 8;
                c = (c > 0 ? "+" : "") + c;
                b = (b > 0 ? "+" : "") + b;
                if (!isNaN(a) && a > 0 && (Math.abs(b) > 80 || Math.abs(c) > 80)) {
                    return n(i, {left: b,top: c,duration: a})
                }
            };
            o = void 0;
            v = function(a) {
                var b, c, d;
                o = i.querySelectorAll("textarea, input");
                b = 0;
                c = o.length;
                d = [];
                while (b < c) {
                    o[b].style.pointerEvents = a;
                    d.push(b++)
                }
                return d
            };
            b = function(a, b) {
                var c, d;
                if (g.createEvent) {
                    c = (!b || b === void 0) && i.parentNode || i.touchchild || i;
                    d = void 0;
                    if (c !== i) {
                        d = g.createEvent("HTMLEvents");
                        d.initEvent("touchend", true, true);
                        i.dispatchEvent(d);
                        c.touchchild = i;
                        i = c;
                        return c.dispatchEvent(a)
                    }
                }
            };
            w = function(a) {
                var c, d, f, g, j, l, n, o, w, x, y;
                k();
                u();
                t();
                i = e(a.target);
                if (!i || i === h || a.touches.length > 1) {
                    return
                }
                v("none");
                x = a;
                l = i.scrollTop;
                j = i.scrollLeft;
                d = i.offsetHeight;
                y = i.offsetWidth;
                w = a.touches[0].pageY;
                o = a.touches[0].pageX;
                g = i.scrollHeight;
                n = i.scrollWidth;
                f = function(a) {
                    var c, e, f, h;
                    h = l + w - a.touches[0].pageY;
                    f = j + o - a.touches[0].pageX;
                    c = h >= (s.length ? s[0] : 0);
                    e = f >= (q.length ? q[0] : 0);
                    if (h > 0 && h < g - d || f > 0 && f < n - y) {
                        a.preventDefault()
                    } else {
                        b(x)
                    }
                    if (p && c !== p) {
                        u()
                    }
                    if (r && e !== r) {
                        t()
                    }
                    p = c;
                    r = e;
                    i.scrollTop = h;
                    i.scrollLeft = f;
                    s.unshift(h);
                    q.unshift(f);
                    if (s.length > 3) {
                        s.pop()
                    }
                    if (q.length > 3) {
                        return q.pop()
                    }
                };
                c = function(a) {
                    m();
                    v("auto");
                    setTimeout(function() {
                        return v("none")
                    }, 450);
                    i.removeEventListener("touchmove", f, false);
                    return i.removeEventListener("touchend", c, false)
                };
                i.addEventListener("touchmove", f, false);
                return i.addEventListener("touchend", c, false)
            };
            return g.addEventListener("touchstart", w, false)
        };
        a.overthrow = {set: i,forget: function() {
            },easing: f,toss: n,intercept: k,closest: e,support: l ? "native" : c && "polyfilled" || "none"};
        return i()
    }(this)
}.call(this);
!function() {
    Lungo.Service = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m;
        d = "lungojs_service_cache";
        c = {MINUTE: "minute",HOUR: "hour",DAY: "day"};
        f = function(a, c, d, e) {
            return b.get(a, c, d, e)
        };
        h = function(a, c, d, e) {
            return b.post(a, c, d, e)
        };
        g = function(a, c, d) {
            return b.json(a, c, d)
        };
        e = function(c, d, e, f, g) {
            var h, i;
            h = c + b.serializeParameters(d);
            if (m(h, e)) {
                i = a.Data.Storage.persistent(h);
                if (i) {
                    return f.call(f, i)
                }
            } else {
                return b.get(c, d, function(a) {
                    l(h, a);
                    return f.call(f, a)
                }, g)
            }
        };
        m = function(b, c) {
            var e, f, g;
            e = false;
            g = a.Data.Storage.persistent(d);
            if (g) {
                f = j(g[b]);
                e = k(f, c)
            }
            return e
        };
        j = function(a) {
            var b, c;
            b = (new Date).getTime();
            c = new Date(a).getTime();
            return b - c
        };
        k = function(a, b) {
            var c, d;
            d = b.split(" ");
            c = i(d[1], a);
            if (c < d[0]) {
                return true
            } else {
                return false
            }
        };
        i = function(a, b) {
            var d;
            d = b / 1e3 / 60;
            if (a.indexOf(c.HOUR) >= 0) {
                d = d / 60
            } else {
                if (a.indexOf(c.DAY) >= 0) {
                    d = d / 60 / 24
                }
            }
            return d
        };
        l = function(b, c) {
            var e;
            e = a.Data.Storage.persistent(d) || {};
            e[b] = new Date;
            a.Data.Storage.persistent(d, e);
            return a.Data.Storage.persistent(b, c)
        };
        return {get: f,post: h,json: g,cache: e,Settings: b.ajaxSettings}
    }(Lungo, Quo)
}.call(this);
!function() {
    Lungo.RouterPhone = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r;
        b = a.Constants;
        c = "#";
        k = [];
        j = false;
        h = function(d) {
            var e, f, g;
            if (j) {
                return false
            }
            e = a.Element.Cache.section;
            if (l(e, d)) {
                g = b.ELEMENT.SECTION + c + d;
                f = e ? e.siblings(g) : a.dom(g);
                if (f.length) {
                    n(f, e);
                    a.Router.step(d);
                    if (Lungo.Config.history !== false) {
                        return r()
                    }
                }
            } else if (a.Element.Cache.aside) {
                return a.Aside.hide()
            }
        };
        f = function() {
            var d, e, f;
            if (j) {
                return false
            }
            m();
            d = a.Element.Cache.section;
            f = b.ELEMENT.SECTION + c + g();
            e = d.siblings(f);
            if (e.length) {
                n(e, d, true);
                if (Lungo.Config.history !== false) {
                    r()
                }
                return q()
            }
        };
        e = function(c, d, e) {
            var f;
            if (l(a.Element.Cache.article, d)) {
                a.Router.section(c);
                f = a.Element.Cache.section.find("#" + d);
                if (f.length > 0) {
                    a.Element.Cache.article.removeClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.UNLOAD);
                    a.Element.Cache.article = f.addClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.LOAD);
                    if ((e != null ? e.data(b.ATTRIBUTE.TITLE) : void 0) != null) {
                        a.Element.Cache.section.find(b.QUERY.TITLE).text(e.data(b.ATTRIBUTE.TITLE))
                    }
                    if (Lungo.Config.history !== false) {
                        r()
                    }
                    return q()
                }
            }
        };
        d = function(c) {
            var d;
            h = a.dom(c.target);
            d = h.data(b.ATTRIBUTE.DIRECTION);
            if (h.data("original-transition")) {
                h.data(b.TRANSITION.ATTR, h.data("original-transition"));
                h.removeAttr("data-original-transition")
            }
            if (d === "out" || d === "back-out") {
                h.removeClass(b.CLASS.SHOW)
            }
            h.removeAttr("data-" + b.ATTRIBUTE.DIRECTION);
            return j = false
        };
        i = function(a) {
            if (a !== g()) {
                return k.push(a)
            }
        };
        g = function() {
            return k[k.length - 1]
        };
        n = function(b, c, d) {
            var e;
            if (d == null) {
                d = false
            }
            e = function() {
                p(b, c, d);
                return q()
            };
            if (a.Element.Cache.aside) {
                return a.Aside.hide(e)
            } else {
                return e()
            }
        };
        p = function(b, c, d) {
            a.Section.show(c, b);
            if (c != null) {
                return o(b, c, d)
            }
        };
        o = function(a, c, d) {
            var e;
            if (d == null) {
                d = false
            }
            if (c == null || !a.length) {
                return false
            }
            j = true;
            e = d ? "back-" : "";
            if (!d) {
                c.data("original-transition", c.data(b.TRANSITION.ATTR));
                c.data(b.TRANSITION.ATTR, a.data(b.TRANSITION.ATTR))
            } else {
                a.data("original-transition", a.data(b.TRANSITION.ATTR));
                a.data(b.TRANSITION.ATTR, c.data(b.TRANSITION.ATTR))
            }
            a.addClass(b.CLASS.SHOW);
            if (a.data(b.TRANSITION.ATTR)) {
                a.data(b.ATTRIBUTE.DIRECTION, "" + e + "in")
            }
            if (c.data(b.TRANSITION.ATTR)) {
                return c.data(b.ATTRIBUTE.DIRECTION, "" + e + "out")
            } else {
                return c.removeClass(b.CLASS.SHOW)
            }
        };
        l = function(a, c) {
            return (a != null ? a.attr(b.ATTRIBUTE.ID) : void 0) !== c
        };
        r = function() {
            var b, c, d;
            b = "";
            for (c = 0, d = k.length; c < d; c++) {
                h = k[c];
                b += "" + h + "/"
            }
            b += a.Element.Cache.article.attr("id");
            return setTimeout(function() {
                return window.location.hash = b
            }, 0)
        };
        q = function() {
            var c, d, e;
            c = a.Element.Cache.article.attr(b.ATTRIBUTE.ID);
            d = a.dom(b.QUERY.ARTICLE_ROUTER).removeClass(b.CLASS.ACTIVE);
            d.filter("[data-view-article=" + c + "]").addClass(b.CLASS.ACTIVE);
            e = a.Element.Cache.section.find(b.QUERY.ARTICLE_REFERENCE).addClass(b.CLASS.HIDE);
            return e.filter("[data-article*='" + c + "']").removeClass(b.CLASS.HIDE)
        };
        m = function() {
            if (k.length > 1) {
                return k.length -= 1
            }
        };
        return {section: h,back: f,article: e,history: g,step: i,animationEnd: d}
    }(Lungo)
}.call(this);
!function() {
    Lungo.RouterTablet = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C;
        b = a.Constants;
        c = "#";
        o = [];
        j = false;
        l = void 0;
        n = false;
        h = function(d) {
            var e, f, g;
            if (j) {
                return false
            }
            e = a.Element.Cache.section;
            if (r(e, d)) {
                g = b.ELEMENT.SECTION + c + d;
                f = e ? e.siblings(g) : a.dom(g);
                if (f.length) {
                    if (e && q(e) && q(f)) {
                        A(e, f)
                    } else {
                        v(f, e)
                    }
                    i(d);
                    if (Lungo.Config.history !== false) {
                        C()
                    }
                    return B()
                }
            }
        };
        f = function(d) {
            var e, f, h, i, l;
            if (d == null) {
                d = true
            }
            if (j) {
                return false
            }
            if (!u()) {
                l = a.dom(event.target).closest(b.ELEMENT.SECTION);
                if (l.length) {
                    h = 0;
                    while (g() !== l.attr("id") && h++ < 10) {
                        k(a.dom(b.ELEMENT.SECTION + c + g()), "back-out");
                        t()
                    }
                    a.Element.Cache.section = l
                }
            }
            t();
            e = a.Element.Cache.section;
            i = b.ELEMENT.SECTION + c + g();
            f = e.siblings(i);
            if (f.length) {
                if (e && q(e) && q(f)) {
                    A(e, f)
                } else {
                    v(f, e, true, d)
                }
                if (Lungo.Config.history !== false) {
                    C()
                }
                return B()
            }
        };
        e = function(c, d, e) {
            var g;
            if (!u() && c !== a.Element.Cache.section.attr("id")) {
                f(false)
            }
            g = a.dom("article#" + d);
            if (g.length > 0) {
                h = g.closest(b.ELEMENT.SECTION);
                a.Router.section(h.attr("id"));
                h = a.Element.Cache.section;
                h.children("" + b.ELEMENT.ARTICLE + "." + b.CLASS.ACTIVE).removeClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.UNLOAD);
                a.Element.Cache.article.removeClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.UNLOAD);
                a.Element.Cache.article = g.addClass(b.CLASS.ACTIVE).trigger(b.TRIGGER.LOAD);
                if ((e != null ? e.data(b.ATTRIBUTE.TITLE) : void 0) != null) {
                    h.find(b.QUERY.TITLE).text(e.data(b.ATTRIBUTE.TITLE))
                }
                if (Lungo.Config.history !== false) {
                    C()
                }
                return B(d)
            }
        };
        d = function(c) {
            var d;
            h = a.dom(c.target);
            d = h.data(b.ATTRIBUTE.DIRECTION);
            if (d) {
                if (d === "out" || d === "back-out") {
                    h.removeClass(b.CLASS.SHOW)
                }
                h.removeAttr("data-" + b.ATTRIBUTE.DIRECTION);
                if (l != null) {
                    n = true;
                    v(l, void 0);
                    l = void 0
                }
            }
            if (h.hasClass("asideHidding")) {
                h.removeClass("asideHidding").removeClass("aside")
            }
            if (h.hasClass("asideShowing")) {
                h.removeClass("asideShowing").addClass("aside")
            }
            if (h.hasClass("shadowing")) {
                h.removeClass("shadowing").addClass("shadow")
            }
            if (h.hasClass("unshadowing")) {
                h.removeClass("unshadowing").removeClass("shadow")
            }
            return j = false
        };
        i = function(a) {
            if (a !== g()) {
                return o.push(a)
            }
        };
        g = function() {
            return o[o.length - 1]
        };
        v = function(b, c, d) {
            if (d == null) {
                d = false
            }
            if (c == null) {
                a.Section.show(void 0, b);
                z(b)
            } else {
                if (d) {
                    x(c, b)
                } else {
                    y(c, b)
                }
                a.Section.show(c, b)
            }
            return n = false
        };
        q = function(a) {
            return a.data("children") == null && a.data("aside") == null
        };
        A = function(b, c) {
            a.Section.show(b, c);
            b.removeClass("show");
            return c.addClass("show")
        };
        z = function(c) {
            var d;
            if (!n || !((d = a.Element.Cache.section) != null ? d.data("aside") : void 0)) {
                c.addClass(b.CLASS.SHOW)
            } else {
                k(c, "in")
            }
            return m(void 0, c)
        };
        y = function(c, d) {
            var e, f, g;
            if (p(c, d)) {
                k(d, "in")
            } else {
                f = "section." + b.CLASS.SHOW;
                g = s(d);
                if (g) {
                    f += ":not(#" + g + ")"
                }
                e = a.dom(f);
                k(e, "back-out");
                l = d
            }
            return m(c, d)
        };
        x = function(c, d) {
            var e;
            k(c, "back-out");
            e = a.dom("section." + b.CLASS.SHOW + ":not(#" + c.attr("id") + ")");
            if (e.length === 1 && e.first().data("children") != null) {
                a.Aside.show(e.first().data("aside"))
            }
            return l = d
        };
        m = function(b, c) {
            var d, e;
            d = c.data("aside");
            e = a.Element.Cache.aside;
            if (d) {
                if (!(b != null && a.Element.Cache.aside != null)) {
                    return w(d, c)
                } else if (!e.hasClass("box")) {
                    return a.Aside.hide()
                }
            } else {
                return a.Aside.hide()
            }
        };
        w = function(b, c) {
            var d;
            d = c.data("children") ? false : true;
            return a.Aside.show(b, d)
        };
        s = function(b) {
            var c;
            c = a.dom("[data-children~=" + b.attr("id") + "]");
            if (c.length) {
                return c.attr("id")
            }
            return null
        };
        p = function(a, b) {
            var c, d;
            c = a.data("children");
            if (!c) {
                return false
            }
            d = b.attr("id");
            return c.indexOf(d) !== -1
        };
        k = function(a, c) {
            var d, e;
            e = c.indexOf("in") >= 0;
            d = false;
            if (e) {
                if (!a.hasClass(b.CLASS.SHOW)) {
                    d = true
                }
            } else {
                d = true
            }
            if (d) {
                if (e) {
                    a.addClass(b.CLASS.HIDE);
                    a.addClass(b.CLASS.SHOW);
                    return setTimeout(function() {
                        return a.data(b.ATTRIBUTE.DIRECTION, c).removeClass(b.CLASS.HIDE)
                    }, 10)
                } else {
                    a.addClass(b.CLASS.SHOW);
                    return a.data(b.ATTRIBUTE.DIRECTION, c)
                }
            }
        };
        u = function() {
            var b, c;
            if (!event || !a.Element.Cache.section) {
                return true
            }
            b = a.dom(event.target).closest("section,aside");
            if (b.length) {
                c = b.attr("id") === a.Element.Cache.section.attr("id")
            } else {
                c = true
            }
            return c
        };
        r = function(a, c) {
            return (a != null ? a.attr(b.ATTRIBUTE.ID) : void 0) !== c
        };
        C = function() {
            var b, c, d;
            b = "";
            for (c = 0, d = o.length; c < d; c++) {
                h = o[c];
                b += "" + h + "/"
            }
            b += a.Element.Cache.article.attr("id");
            return setTimeout(function() {
                return window.location.hash = b
            }, 0)
        };
        B = function(c) {
            var d, e, f, g, h;
            if (!c) {
                c = (h = a.Element.Cache.article) != null ? h.attr(b.ATTRIBUTE.ID) : void 0
            }
            a.Element.Cache.section.find(b.QUERY.ARTICLE_ROUTER).removeClass(b.CLASS.ACTIVE);
            if (a.Element.Cache.section.data("aside") != null) {
                g = a.dom("aside#" + a.Element.Cache.section.data("aside"));
                g.find(b.QUERY.ARTICLE_ROUTER).removeClass(b.CLASS.ACTIVE)
            }
            a.dom("[data-view-article=" + c + "]").addClass(b.CLASS.ACTIVE);
            f = a.Element.Cache.section.find(b.QUERY.ARTICLE_REFERENCE).addClass(b.CLASS.HIDE);
            f.filter("[data-article~='" + c + "']").removeClass(b.CLASS.HIDE);
            if (a.Element.Cache.aside) {
                e = a.Element.Cache.section.attr("id");
                d = a.Element.Cache.aside;
                d.find(b.QUERY.SECTION_ROUTER + "." + b.CLASS.ACTIVE).removeClass("active");
                return d.find("[data-view-section=" + e + "]").addClass(b.CLASS.ACTIVE)
            }
        };
        t = function() {
            if (o.length > 1) {
                return o.length -= 1
            }
        };
        return {section: h,back: f,article: e,history: g,step: i,animationEnd: d,historys: function() {
                return o
            }}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Aside = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
        c = a.Constants;
        m = void 0;
        e = "__customKFShow__";
        d = "__customKFHide__";
        b = "300ms";
        o = void 0;
        p = "";
        a.ready(function() {
            var b, c;
            b = ((c = a.Core.environment().browser.match(/mozilla|firefox/gi)) != null ? c.length : void 0) > 0;
            return p = b ? "" : "-webkit-"
        });
        i = function(d, e, f) {
            var g, h, i, j, l, m, o, q, r;
            if (e == null) {
                e = false
            }
            if (f == null) {
                f = -1
            }
            h = a.dom("#" + d);
            if (h.length) {
                if (!k(d)) {
                    if (!e) {
                        a.Element.Cache.aside = h;
                        if (a.DEVICE === c.DEVICE.PHONE) {
                            h.addClass(c.CLASS.SHOW);
                            if (f !== -1) {
                                g = n(f) + " " + b;
                                return a.Element.Cache.section.style("" + p + "animation", g)
                            } else {
                                j = h.data(c.TRANSITION.ATTR) || "left";
                                return a.Element.Cache.section.data("aside-" + j, "show")
                            }
                        } else {
                            h.addClass(c.CLASS.SHOW);
                            i = a.dom("[data-aside=" + d + "][data-children]");
                            if (i.attr("id") !== ((r = a.Element.Cache.section) != null ? r.attr("id") : void 0)) {
                                a.Element.Cache.section.addClass("shadowing");
                                m = i.data("children");
                                if(m != null)
                                {
                                    m = m.split(" ");
                                    for (o = 0, q = m.length; o < q; o++) {
                                        l = m[o];
                                        l = a.dom(c.ELEMENT.SECTION + "#" + l);
                                        if (l.length && l.hasClass(c.CLASS.SHOW)) {
                                            l.addClass("shadowing")
                                        }
                                    }
                                }     
                            }
                            return i.removeClass("aside").addClass("asideShowing")
                        }
                    } else {
                        a.Element.Cache.aside = h;
                        return h.addClass(c.CLASS.SHOW).addClass("box")
                    }
                }
            }
        };
        h = function(d, e) {
            var f, g, h;
            if (e == null) {
                e = null
            }
            if (a.Element.Cache.aside || e) {
                m = d;
                g = ((h = a.Element.Cache.aside) != null ? h.data(c.TRANSITION.ATTR) : void 0) || "left";
                if (a.DEVICE === c.DEVICE.PHONE) {
                    if (e > 0) {
                        a.Element.Cache.section.removeClass("aside").removeClass("aside-right");
                        f = n(e, true) + " " + b;
                        return a.Element.Cache.section.style("" + p + "animation", f)
                    } else {
                        a.Element.Cache.section.removeClass("aside").removeClass("aside-right");
                        return a.Element.Cache.section.data("aside-" + g, "hide")
                    }
                } else {
                    a.dom(".aside").removeClass("aside").addClass("asideHidding");
                    a.Element.Cache.aside = null;
                    if (d) {
                        d.call(d)
                    }
                    return a.dom(".shadow").removeClass("shadow").addClass("unshadowing")
                }
            } else if (d) {
                return d.call(d)
            }
        };
        j = function(b) {
            if (a.Element.Cache.aside) {
                return this.hide()
            } else {
                return this.show(b)
            }
        };
        f = function(b) {
            var e, f, g, h;
            g = a.dom(b.target);
            e = ((h = a.Element.Cache.aside) != null ? h.data(c.TRANSITION.ATTR) : void 0) || "left";
            if (g.data("aside-" + e) === "hide") {
                a.Element.Cache.aside.removeClass(c.CLASS.SHOW);
                a.Element.Cache.aside = null;
                g.removeAttr("data-aside-" + e);
                if (m) {
                    m.call(m)
                }
                m = void 0
            } else {
                if (g.style("" + p + "animation").indexOf(d) === -1) {
                    f = e.indexOf("right") === -1 ? "aside" : "aside-right";
                    g.addClass(f)
                }
                g.removeAttr("style").removeAttr("data-aside-" + e)
            }
            if (o) {
                g.removeAttr("style");
                o.parentNode.removeChild(o);
                return o = void 0
            }
        };
        g = function() {
            var b;
            if (a.DEVICE !== c.DEVICE.PHONE) {
                return false
            }
            b = 96;
            return a.dom(c.QUERY.HREF_ASIDE).each(function() {
                var d, e, f, g;
                g = false;
                e = a.dom(this);
                f = e.closest("section");
                d = a.dom("aside#" + e.data("aside"));
                f.swiping(function(a) {
                    var b, e;
                    a.originalEvent.preventDefault();
                    if (!(f.hasClass("aside") || f.hasClass("aside-right"))) {
                        b = a.currentTouch.x - a.iniTouch.x;
                        e = Math.abs(a.currentTouch.y - a.iniTouch.y);
                        g = g ? true : b > 3 * e && b < 50;
                        if (g) {
                            b = b > 256 ? 256 : b < 0 ? 0 : b;
                            d.addClass(c.CLASS.SHOW);
                            f.vendor("transform", "translateX(" + b + "px)");
                            return f.vendor("transition-duration", "0s")
                        } else {
                            return f.attr("style", "")
                        }
                    }
                });
                return f.swipe(function(a) {
                    var c, e;
                    c = a.currentTouch.x - a.iniTouch.x;
                    if (c > 256) {
                        c = 256
                    }
                    e = Math.abs(a.currentTouch.y - a.iniTouch.y);
                    f.attr("style", "");
                    if (c > b && g) {
                        i(d.attr("id"), false, c)
                    } else {
                        if (g) {
                            h(void 0, c)
                        } else {
                            h()
                        }
                    }
                    return g = false
                })
            })
        };
        k = function(b) {
            var c;
            return ((c = a.Element.Cache.aside) != null ? c.attr("id") : void 0) === b
        };
        l = function() {
            var b;
            if ((b = a.Element.Cache.aside) != null ? b.hasClass(c.CLASS.RIGHT) : void 0) {
                return "" + c.CLASS.RIGHT
            } else {
                return " "
            }
        };
        n = function(a, b) {
            var c, f;
            if (b == null) {
                b = false
            }
            c = b ? d : e;
            o = document.createElement("style");
            o.type = "text/css";
            if (!b) {
                f = "@" + p + "keyframes " + c + " {\n  0%   { " + p + "transform: translateX(" + a + "px); }\n  60%  { " + p + "transform: translateX(262px);  }\n  100% { " + p + "transform: translateX(256px);  }\n}"
            } else {
                f = "@" + p + "keyframes " + c + " {\n  0%   { " + p + "transform: translateX(" + a + "px); }\n  100% { " + p + "transform: translateX(0);      }\n}"
            }
            o.appendChild(document.createTextNode(f));
            document.getElementsByTagName("head")[0].appendChild(o);
            return c
        };
        return {show: i,hide: h,toggle: j,draggable: g,animationEnd: f}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Section = function(a) {
        var b, c, d, e;
        b = a.Constants;
        c = function(c, f) {
            var g;
            if (a.DEVICE === b.DEVICE.PHONE) {
                d(f)
            } else {
                e(c, f)
            }
            a.Element.Cache.section = f;
            g = f.find("" + b.ELEMENT.ARTICLE + "." + b.CLASS.ACTIVE);
            if (g.length === 0) {
                g = f.find(b.ELEMENT.ARTICLE).first().addClass(b.CLASS.ACTIVE)
            }
            a.Element.Cache.article = g;
            if (c) {
                c.trigger(b.TRIGGER.UNLOAD)
            }
            return f.trigger(b.TRIGGER.LOAD)
        };
        d = function(a) {
            return a.addClass(b.CLASS.SHOW)
        };
        e = function(a, b) {
            return this
        };
        return {show: c}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Article = function(a) {
        var b, c;
        b = a.Constants;
        c = function(c, d, e, f, g) {
            var h, i;
            if (f == null) {
                f = ""
            }
            if (g == null) {
                g = null
            }
            if (h = a.dom("" + b.ELEMENT.ARTICLE + "#" + c)) {
                i = "";
                if (d != null) {
                    i = '<div class="empty">\n  <span class="icon ' + d + '"></span>\n  <strong>' + e + "</strong>\n  <small>" + f + "</small>\n</div>"
                }
                h.html(i);
                if (g) {
                    return h.children().append("<button class='anchor'><abbr>" + g + "</abbr></button>")
                }
            }
        };
        return {clean: c}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Boot.Data = function(a) {
        var b, c, d, e, f;
        b = a.Constants.BINDING;
        c = function(b) {
            var c;
            c = a.dom(b || document.body);
            if (c.length > 0) {
                return e(c)
            }
        };
        e = function(b) {
            var c, d;
            d = [];
            for (c in a.Attributes) {
                if (a.Core.isOwnProperty(a.Attributes, c)) {
                    d.push(f(b, c))
                } else {
                    d.push(void 0)
                }
            }
            return d
        };
        f = function(b, c) {
            var e, f;
            e = a.Attributes[c];
            f = e.selector + "[data-" + c + "]";
            b.find(f).each(function(b, f) {
                var g;
                g = a.dom(f);
                return d(g, g.data(c), e.html)
            });
            if (b.data(c) != null) {
                return d(b, b.data(c), e.html)
            }
        };
        d = function(a, b, c) {
            return a.prepend(c.replace(/\{\{value\}\}/g, b))
        };
        return {init: c}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Boot.Device = function(a) {
        var b, c;
        b = a.Constants.DEVICE;
        c = function() {
            var c, d;
            d = a.Core.environment();
            a.DEVICE = d.screen.width < 768 ? b.PHONE : b.TABLET;
            c = a.dom(document.body);
            c.data("device", a.DEVICE);
            if (d.os) {
                c.data("os", d.os.name.toLowerCase())
            }
            if (a.DEVICE === a.Constants.DEVICE.PHONE) {
                return a.Aside.draggable()
            }
        };
        return {init: c}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Boot.Events = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n;
        c = a.Constants;
        b = a.Constants.ATTRIBUTE;
        d = a.Constants.CLASS;
        e = a.Constants.ELEMENT;
        f = a.Constants.QUERY;
        g = function() {
            var b, d, e, g, k;
            a.dom(c.QUERY.SECTION_ROUTER_TOUCH).touch(m);
            a.dom(c.QUERY.SECTION_ROUTER_TAP).tap(m);
            a.dom(c.QUERY.ARTICLE_ROUTER_TOUCH).touch(i);
            a.dom(c.QUERY.ARTICLE_ROUTER_TAP).tap(i);
            a.dom(c.QUERY.ASIDE_ROUTER).touch(j);
            a.dom(c.QUERY.MENU_ROUTER).touch(l);
            a.dom(f.MENU_HREF).touch(h);
            g = c.EVENT.TRANSITION_END;
            k = [];
            for (d = 0, e = g.length; d < e; d++) {
                b = g[d];
                a.dom("body").delegate(c.ELEMENT.SECTION, b, n);
                k.push(a.dom("body").delegate(c.ELEMENT.ASIDE, b, n))
            }
            return k
        };
        m = function(b) {
            var d, e;
            b.preventDefault();
            d = a.dom(this);
            if (d.data("async")) {
                return k(d, c.ELEMENT.SECTION)
            } else {
                e = d.data("view-section");
                if (e !== "back") {
                    return a.Router.section(e)
                } else {
                    return a.Router.back()
                }
            }
        };
        i = function(b) {
            var d;
            b.preventDefault();
            d = a.dom(this);
            if (d.data("async")) {
                return k(d, c.ELEMENT.ARTICLE)
            } else {
                return a.Router.article(a.Router.history(), d.data("view-article"), d)
            }
        };
        k = function(b, d) {
            var e, f, g, h, i, j, k;
            h = b.data("async");
            e = b.data("view-" + d);
            a.Notification.show();
            if (d === c.ELEMENT.ARTICLE) {
                g = a.Element.Cache.section.attr(c.ATTRIBUTE.ID);
                a.Resource.load(h, c.ELEMENT.SECTION + "#" + g)
            } else {
                a.Resource.load(h)
            }
            a.Boot.Data.init("#" + e);
            k = a.dom("[data-async='" + h + "']");
            for (i = 0, j = k.length; i < j; i++) {
                f = k[i];
                f.removeAttribute("data-async")
            }
            if (d === c.ELEMENT.ARTICLE) {
                a.Router.article(g, e);
                a.Aside.hide()
            } else {
                a.Router.section(e)
            }
            return a.Notification.hide()
        };
        j = function(b) {
            var d;
            b.preventDefault();
            d = a.dom(b.target).closest(c.QUERY.ASIDE_ROUTER).data("view-aside");
            return a.Aside.toggle(d)
        };
        l = function(b) {
            var c;
            b.preventDefault();
            c = a.dom(this).data("view-menu");
            return a.Element.Menu.show(c)
        };
        h = function(b) {
            var d, e;
            b.preventDefault();
            d = a.dom(this);
            e = d.parent(c.CONTROL.MENU).attr(c.ATTRIBUTE.ID);
            a.Element.Menu.hide(e);
            return a.dom("[data-view-menu=" + e + "] > .icon").attr("class", "icon " + d.data("icon"))
        };
        n = function(b) {
            var c, d, e, f;
            e = a.dom(b.target);
            d = e.data("direction");
            c = e.hasClass("asideHidding") || e.hasClass("asideShowing");
            f = e.hasClass("shadowing") || e.hasClass("unshadowing");
            if (d || c || f) {
                return a.Router.animationEnd(b)
            } else {
                return a.Aside.animationEnd(b)
            }
        };
        return {init: g}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Boot.Layout = function(a) {
        var b, c, d, e, f, g, h, i;
        b = a.Constants;
        c = "#";
        d = function() {
            var c;
            a.Fallback.fixPositionInAndroid();
            if (Lungo.Config.history && ((c = window.location.hash) != null ? c.length : void 0) >= 2) {
                h()
            } else {
                g()
            }
            f(b.QUERY.LIST_IN_ELEMENT, e);
            return f(b.QUERY.ELEMENT_SCROLLABLE, i)
        };
        h = function() {
            var b, d, e, f, g, h;
            d = window.location.hash.replace(c, "").split("/");
            f = d[d.length - 2];
            b = d[d.length - 1];
            if (d.length > 2) {
                d.length -= 2;
                for (g = 0, h = d.length; g < h; g++) {
                    e = d[g];
                    a.Router.step(e)
                }
            }
            a.Router.section(f);
            return a.Router.article(f, b)
        };
        g = function() {
            var c;
            c = a.dom(b.ELEMENT.SECTION).first();
            if (c) {
                return a.Router.section(c.attr(b.ATTRIBUTE.ID))
            }
        };
        f = function(b, c) {
            var d, e, f, g, h;
            e = a.dom(b);
            f = 0;
            g = e.length;
            h = [];
            while (f < g) {
                d = a.dom(e[f]);
                a.Core.execute(c, d);
                h.push(f++)
            }
            return h
        };
        e = function(a) {
            var c;
            if (a.children().length === 0) {
                c = a.attr(b.ATTRIBUTE.ID);
                return a.append(b.ELEMENT.LIST)
            }
        };
        i = function(a) {
            return a[0].addEventListener("touchstart", function(a) {
                var b;
                b = this.scrollTop;
                if (b <= 1) {
                    this.scrollTop = 1
                }
                if (b + this.offsetHeight >= this.scrollHeight) {
                    return this.scrollTop = this.scrollHeight - this.offsetHeight - 1
                }
            }, false)
        };
        return {init: d}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Element.Cache = {section: null,article: null,aside: null,navigation: null}
}.call(this);
!function() {
    Lungo.Element.Carousel = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n;
        h = {index: 0,speed: 300,callback: b,container: a,element: a.children[0],slide: void 0,slides: [],slides_length: 0,width: 0,start: {},isScrolling: void 0,deltaX: 0};
        e = function(a) {
            if (h.index) {
                return j(h.index - 1, h.speed)
            }
        };
        c = function(a) {
            if (h.index < h.slides_length - 1) {
                return j(h.index + 1, h.speed)
            } else {
                return j(0, h.speed)
            }
        };
        d = function() {
            return h.index
        };
        f = function() {
            return i()
        };
        i = function() {
            var a, b;
            h.slides = h.element.children;
            h.slides_length = h.slides.length;
            if (h.slides_length < 2) {
                return null
            }
            h.width = "getBoundingClientRect" in h.container ? h.container.getBoundingClientRect().width : h.container.offsetWidth;
            if (!h.width) {
                return null
            }
            h.element.style.width = h.slides.length * h.width + "px";
            b = h.slides.length;
            while (b--) {
                a = h.slides[b];
                a.style.width = h.width + "px";
                a.style.display = "table-cell";
                a.style.verticalAlign = "top"
            }
            j(h.index, 0);
            return h.container.style.visibility = "visible"
        };
        j = function(a, b) {
            var c;
            c = h.element.style;
            if (b === void 0) {
                b = h.speed
            }
            c.webkitTransitionDuration = c.MozTransitionDuration = c.msTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
            c.MozTransform = c.webkitTransform = "translate3d(" + -(a * h.width) + "px,0,0)";
            c.msTransform = c.OTransform = "translateX(" + -(a * h.width) + "px)";
            return h.index = a
        };
        g = function() {
            h.element.addEventListener("touchstart", m, false);
            h.element.addEventListener("touchmove", l, false);
            h.element.addEventListener("touchend", k, false);
            h.element.addEventListener("webkitTransitionEnd", n, false);
            h.element.addEventListener("msTransitionEnd", n, false);
            h.element.addEventListener("oTransitionEnd", n, false);
            h.element.addEventListener("transitionend", n, false);
            return window.addEventListener("resize", i, false)
        };
        m = function(a) {
            h.start = {pageX: a.touches[0].pageX,pageY: a.touches[0].pageY,time: Number(new Date)};
            h.isScrolling = void 0;
            h.deltaX = 0;
            h.element.style.MozTransitionDuration = h.element.style.webkitTransitionDuration = 0;
            return a.stopPropagation()
        };
        l = function(a) {
            var b, c;
            if (a.touches.length > 1 || a.scale && a.scale !== 1) {
                return
            }
            h.deltaX = a.touches[0].pageX - h.start.pageX;
            if (typeof h.isScrolling === "undefined") {
                h.isScrolling = !!(h.isScrolling || Math.abs(h.deltaX) < Math.abs(a.touches[0].pageY - h.start.pageY))
            }
            if (!h.isScrolling) {
                a.preventDefault();
                b = !h.index && h.deltaX > 0 || h.index === h.slides_length - 1 && h.deltaX < 0 ? Math.abs(h.deltaX) / h.width + 1 : 1;
                h.deltaX = h.deltaX / b;
                c = h.deltaX - h.index * h.width;
                h.element.style.MozTransform = h.element.style.webkitTransform = "translate3d(" + c + "px,0,0)";
                return a.stopPropagation()
            }
        };
        k = function(a) {
            var b, c;
            c = Number(new Date) - h.start.time < 250 && Math.abs(h.deltaX) > 20 || Math.abs(h.deltaX) > h.width / 2;
            b = !h.index && h.deltaX > 0 || h.index === h.slides_length - 1 && h.deltaX < 0;
            if (!h.isScrolling) {
                j(h.index + (c && !b ? h.deltaX < 0 ? 1 : -1 : 0), h.speed)
            }
            return a.stopPropagation()
        };
        n = function(a) {
            if (h.callback) {
                return h.callback.apply(h.callback, [h.index, h.slides[h.index]])
            }
        };
        i();
        g();
        return {prev: e,next: c,position: d,refresh: f}
    }
}.call(this);
!function() {
    Lungo.Element.count = function(a, b) {
        var c, d, e;
        d = Lungo.dom(a);
        if (d) {
            d.children(".tag.count").remove();
            if (b) {
                c = Lungo.Constants.BINDING.SELECTOR;
                e = Lungo.Attributes.count.html.replace(c, b);
                return d.append(e)
            }
        }
    }
}.call(this);
!function() {
    Lungo.Element.loading = function(a, b) {
        var c, d, e;
        d = Lungo.dom(a);
        if (d) {
            e = null;
            if (b) {
                c = Lungo.Constants.BINDING.SELECTOR;
                e = Lungo.Attributes.loading.html.replace(c, b)
            }
            return d.html(e)
        }
    }
}.call(this);
!function() {
    Lungo.Element.Menu = function(a) {
        var b, c, d, e;
        b = a.Constants;
        d = function(a) {
            var c;
            c = this._instance(a);
            if (c) {
                return c.addClass(b.CLASS.SHOW)
            }
        };
        c = function(a) {
            var c;
            c = this._instance(a);
            if (c) {
                return c.removeClass(b.CLASS.SHOW)
            }
        };
        e = function(a) {
            var c;
            c = this._instance(a);
            if (c) {
                if (c.hasClass(b.CLASS.SHOW)) {
                    return this.show(a)
                } else {
                    return this.hide(a)
                }
            }
        };
        return {_instance: function(a) {
                return Lungo.dom("" + b.CONTROL.MENU + "#" + a)
            },show: d,hide: c,toggle: e}
    }(Lungo)
}.call(this);
!function() {
    Lungo.Element.progress = function(a, b) {
        var c;
        c = Lungo.dom(a);
        if (c) {
            b += Lungo.Constants.ATTRIBUTE.PERCENT;
            return c.find(".value").style(Lungo.Constants.ATTRIBUTE.WIDTH, b)
        }
    }
}.call(this);
!function() {
    Lungo.Element.Pull = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        k = 68;
        i = 80;
        c = 300;
        g = 0;
        j = false;
        h = $$(a);
        f = h.siblings('div[data-control="pull"]');
        d = void 0;
        e = {onPull: "Pull down to refresh",onRelease: "Release to...",onRefresh: "Loading...",callback: void 0};
        d = Lungo.Core.mix(e, b);
        l = function() {
            q(0, true);
            setTimeout(function() {
                j = false;
                f.attr("class", "");
                return h[0].removeEventListener("touchmove", m, true)
            }, c);
            return g = 0
        };
        q = function(a, b) {
            var d;
            d = a > i ? i : a;
            if (b) {
                h.addClass("pull")
            } else {
                h.removeClass("pull")
            }
            h.style("-webkit-transform", "translate(0, " + d + "px)");
            if (b) {
                return setTimeout(function() {
                    return h.removeClass("pull")
                }, c)
            }
        };
        r = function(a) {
            j = true;
            h[0].addEventListener("touchmove", m, true);
            u(d.onRefresh);
            s(true);
            q(k, true);
            if (d.callback) {
                return d.callback.apply(this)
            }
        };
        u = function(a) {
            return f.find("strong").html(a)
        };
        s = function(a) {
            if (a) {
                return f.addClass("refresh")
            } else {
                return f.removeClass("refresh")
            }
        };
        t = function(a) {
            if (a) {
                return f.addClass("rotate")
            } else {
                return f.removeClass("rotate")
            }
        };
        m = function(a) {
            return a.preventDefault()
        };
        p = function(a) {
            q(g, false);
            s(false);
            if (g > k) {
                u(d.onRelease);
                return t(true)
            } else {
                u(d.onPull);
                return t(false)
            }
        };
        o = function(a) {
            if (g > k) {
                r()
            } else {
                l()
            }
            return this
        };
        n = function(a) {
            if ($$.isMobile()) {
                return a.touches[0].pageY
            } else {
                return a.pageY
            }
        };
        !function() {
            var a, b;
            b = false;
            a = 0;
            return h.bind("touchstart", function(c) {
                if (h[0].scrollTop <= 1) {
                    b = true;
                    a = n(c)
                }
                return true
            }).bind("touchmove", function(c) {
                var d;
                if (!j && b) {
                    d = n(c);
                    g = d - a;
                    if (g >= 0) {
                        p(c);
                        c.preventDefault()
                    }
                }
                return true
            }).bind("touchend", function() {
                if (b) {
                    o()
                }
                b = false;
                return true
            })
        }();
        return {hide: l}
    }
}.call(this);
