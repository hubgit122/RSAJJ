/**
 * Created by s on 2015/1/15 0015.
 */
this.ajst["views/sys/pop_alert_box.htm"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "";
    with (_.escape, Array.prototype.join, obj)__p += "<div id='alert_box' class=\"", animate && (__p += " animate "), __p += '" >\r\n    ', iconType && (__p += '\r\n    <div id="alert_box_top">\r\n        <div id="alert_box_img">\r\n            <div class="icon-' + (null == (__t = iconType) ? "" : __t) + "\"></div>\r\n        </div>\r\n        <p id='alert_box_tip'>" + (null == (__t = title) ? "" : __t) + "</p>\r\n    </div>\r\n    "), __p += "\r\n    ", description && (__p += '\r\n    <div id="alert_box_msg">\r\n        ' + (null == (__t = description) ? "" : __t) + "\r\n    </div>\r\n    "), __p += "\r\n    ", isPrompt && (__p += '\r\n    <div id="alert_box_inputCon">\r\n        ', isPrompt.type && (__p += '\r\n        <div id="alert_box_input_icon">\r\n            <div class="icon-' + (null == (__t = isPrompt.type) ? "" : __t) + '"></div>\r\n        </div>\r\n        '), __p += '\r\n        <div id="alert_box_inputBody" class="', isPrompt.type || (__p += "noIcon"), __p += '">\r\n            <div id="alert_box_inputTitle">' + (null == (__t = isPrompt.title) ? "" : __t) + '</div>\r\n            <input type="text" id="alert_box_input_input" placeholder="' + (null == (__t = isPrompt.fieldName) ? "" : __t) + '" />\r\n            <div id="alert_box_input_tipCon">\r\n                <div class="icon-input-tip"></div>\r\n                <div id="alert_box_input_tip"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    '), __p += "\r\n    ", bottomBar && (__p += '\r\n    <div id="alert_box_bottom" class="ui-actions is-border-boxing">\r\n        ', bottomBar.hasCheckBox && (__p += '\r\n        <div id="alert_box_remind">\r\n            ', __p += bottomBar.hasCheckBox.checked ? '\r\n            <div class="checkbox checked" check="1"></div>\r\n            ' : '\r\n            <div class="checkbox" check="0"></div>\r\n            ', __p += '\r\n            <div class="i-float-left ml10">' + (null == (__t = bottomBar.hasCheckBox.checkTip) ? "" : __t) + "</div>\r\n        </div>\r\n        "), __p += "\r\n        ", bottomBar.hasLeftBtn && (__p += "\r\n        <div class='btn " + (null == (__t = bottomBar.hasLeftBtn.cssClass) ? "" : __t) + "' id='alert_box_left_btn' tabindex=\"-1\">" + (null == (__t = bottomBar.hasLeftBtn.msg) ? "" : __t) + "</div>\r\n        "), __p += "\r\n        ", bottomBar.hasOkBtn && (__p += "\r\n        <div class='btn " + (null == (__t = bottomBar.hasOkBtn.cssClass) ? "" : __t) + "' id='alert_box_yes_btn' tabindex=\"-1\">" + (null == (__t = bottomBar.hasOkBtn.msg) ? "" : __t) + "</div>\r\n        "), __p += "\r\n        ", bottomBar.hasCancelBtn && (__p += "\r\n        <div class='btn " + (null == (__t = bottomBar.hasCancelBtn.cssClass) ? "" : __t) + "' id='alert_box_no_btn' tabindex=\"-1\">" + (null == (__t = bottomBar.hasCancelBtn.msg) ? "" : __t) + "</div>\r\n        "), __p += "\r\n    </div>\r\n    "), __p += "\r\n</div>\r\n";
    return __p
};
this.ajst["views/sys/pop_window_disabled_tip.htm"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "";
    with (_.escape, obj)__p += '<div class="pop-window-disabled">\r\n    <div>' + (null == (__t = lang.pop_window_disabled_des) ? "" : __t) + "</div>\r\n    <i></i>\r\n</div>";
    return __p
};
this.ajst["views/mod/file/select_sdcard_dialog.htm"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "";
    with (_.escape, obj)__p += '<div class="i-float-left img-' + (null == (__t = type) ? "" : __t) + '-l"></div>\r\n<div class="select-sdcard-tip">' + (null == (__t = title) ? "" : __t) + '</div>\r\n<input class="input-dropdown-tree" type="text" value="' + (null == (__t = def) ? "" : __t) + '" placeholder="' + (null == (__t = placeholder) ? "" : __t) + '"/><span class="dropdown-caret"></span>\r\n<div class="clearfix"></div>';
    return __p
};
this.ajst["views/mod/usercenter/notice_tip.htm"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "";
    with (_.escape, obj)__p += '<div class="uc_notice_tip">\r\n    <p>' + (null == (__t = lang.cancel_desktop_notification) ? "" : __t) + '</p>\r\n    <p>\r\n        <a href="http://help.airdroid.com/customer/portal/articles/1487791" target="_blank"> ' + (null == (__t = lang.How_to_set_notication) ? "" : __t) + ' >></a>\r\n    </p>\r\n    <div class="col">\r\n        <img src="' + (null == (__t = Airdroid.Service.getImgAssets("usercenter/notice_set_step1.png")) ? "" : __t) + '" />\r\n        <p>1. ' + (null == (__t = lang.notification_set_setp1) ? "" : __t) + '</p>\r\n    </div>\r\n    <div class="col right">\r\n        <img src="' + (null == (__t = Airdroid.Service.getImgAssets("usercenter/notice_set_step2.png")) ? "" : __t) + '" />\r\n        <p>2. ' + (null == (__t = lang.notification_set_setp2) ? "" : __t) + "</p>\r\n    </div>\r\n</div>";
    return __p
};
this.ajst["views/sys/server_error_tip.htm"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "";
    with (_.escape, obj)__p += '<div class="server-network-error-tip">\r\n    <div></div>\r\n    <p>' + (null == (__t = lang.server_network_error_tip.format("<a>", "</a>")) ? "" : __t) + "</p>\r\n</div>";
    return __p
};
this.ajst["views/mod/set_save_type.htm"] = function (obj) {
    obj || (obj = {});
    var __t, __p = "";
    with (_.escape, obj)__p += '<div class="quick-settingPanel">\r\n    <div class="quick-settingItem popup-menu-using-item" data-save-to="0">\r\n        <span class="icon-pc"></span>\r\n        ' + (null == (__t = common.save_to_pc) ? "" : __t) + '\r\n        <span class="quick-settingItem-check"></span>\r\n    </div>\r\n    <a class="popup-menu-seprate"></a>\r\n\r\n    <div class="quick-settingItem popup-menu-using-item" data-save-to="1">\r\n        <span class="icon-phone"></span>\r\n        ' + (null == (__t = common.save_to_phone) ? "" : __t) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <span class="quick-settingItem-check"></span>\r\n    </div>\r\n</div>';
    return __p
};
(function (e, t) {
    function i(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var o = "data-" + i.replace($, "-$1").toLowerCase();
            if (n = e.getAttribute(o), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : B.isNaN(n) ? R.test(n) ? B.parseJSON(n) : n : parseFloat(n)
                } catch (r) {
                }
                B.data(e, i, n)
            } else n = t
        }
        return n
    }

    function n(e) {
        for (var t in e)if ("toJSON" !== t)return !1;
        return !0
    }

    function o(e, i, n) {
        var o = i + "defer", r = i + "queue", a = i + "mark", s = B.data(e, o, t, !0);
        !s || "queue" !== n && B.data(e, r, t, !0) || "mark" !== n && B.data(e, a, t, !0) || setTimeout(function () {
            B.data(e, r, t, !0) || B.data(e, a, t, !0) || (B.removeData(e, o, !0), s.resolve())
        }, 0)
    }

    function r() {
        return !1
    }

    function a() {
        return !0
    }

    function s(e, i, n) {
        var o = B.extend({}, n[0]);
        o.type = e, o.originalEvent = {}, o.liveFired = t, B.event.handle.call(i, o), o.isDefaultPrevented() && n[0].preventDefault()
    }

    function l(e) {
        var t, i, n, o, r, a, s, l, c, d, u, p, f = [], h = [], m = B._data(this, "events");
        if (e.liveFired !== this && m && m.live && !e.target.disabled && (!e.button || "click" !== e.type)) {
            e.namespace && (u = RegExp("(^|\\.)" + e.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), e.liveFired = this;
            var g = m.live.slice(0);
            for (s = 0; g.length > s; s++)r = g[s], r.origType.replace(X, "") === e.type ? h.push(r.selector) : g.splice(s--, 1);
            for (o = B(e.target).closest(h, e.currentTarget), l = 0, c = o.length; c > l; l++)for (d = o[l], s = 0; g.length > s; s++)r = g[s], d.selector !== r.selector || u && !u.test(r.namespace) || d.elem.disabled || (a = d.elem, n = null, ("mouseenter" === r.preType || "mouseleave" === r.preType) && (e.type = r.preType, n = B(e.relatedTarget).closest(r.selector)[0], n && B.contains(a, n) && (n = a)), n && n === a || f.push({
                elem: a,
                handleObj: r,
                level: d.level
            }));
            for (l = 0, c = f.length; c > l && (o = f[l], !(i && o.level > i)) && (e.currentTarget = o.elem, e.data = o.handleObj.data, e.handleObj = o.handleObj, p = o.handleObj.origHandler.apply(o.elem, arguments), p !== !1 && !e.isPropagationStopped() || (i = o.level, p === !1 && (t = !1), !e.isImmediatePropagationStopped())); l++);
            return t
        }
    }

    function c(e, t) {
        return (e && "*" !== e ? e + "." : "") + t.replace(J, "`").replace(Z, "&")
    }

    function d(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function u(e, t, i) {
        if (t = t || 0, B.isFunction(t))return B.grep(e, function (e, n) {
            var o = !!t.call(e, n, e);
            return o === i
        });
        if (t.nodeType)return B.grep(e, function (e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = B.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ut.test(t))return B.filter(t, n, !i);
            t = B.filter(t, n)
        }
        return B.grep(e, function (e) {
            return B.inArray(e, t) >= 0 === i
        })
    }

    function p(e) {
        return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function f(e, t) {
        if (1 === t.nodeType && B.hasData(e)) {
            var i = B.expando, n = B.data(e), o = B.data(t, n);
            if (n = n[i]) {
                var r = n.events;
                if (o = o[i] = B.extend({}, n), r) {
                    delete o.handle, o.events = {};
                    for (var a in r)for (var s = 0, l = r[a].length; l > s; s++)B.event.add(t, a + (r[a][s].namespace ? "." : "") + r[a][s].namespace, r[a][s], r[a][s].data)
                }
            }
        }
    }

    function h(e, t) {
        var i;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), i = t.nodeName.toLowerCase(), "object" === i ? t.outerHTML = e.outerHTML : "input" !== i || "checkbox" !== e.type && "radio" !== e.type ? "option" === i ? t.selected = e.defaultSelected : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute(B.expando))
    }

    function m(e) {
        return "getElementsByTagName"in e ? e.getElementsByTagName("*") : "querySelectorAll"in e ? e.querySelectorAll("*") : []
    }

    function g(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }

    function _(e) {
        B.nodeName(e, "input") ? g(e) : "getElementsByTagName"in e && B.grep(e.getElementsByTagName("input"), g)
    }

    function v(e, t) {
        t.src ? B.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function y(e, t, i) {
        var n = "width" === t ? e.offsetWidth : e.offsetHeight, o = "width" === t ? Bt : It;
        return n > 0 ? ("border" !== i && B.each(o, function () {
            i || (n -= parseFloat(B.css(e, "padding" + this)) || 0), "margin" === i ? n += parseFloat(B.css(e, i + this)) || 0 : n -= parseFloat(B.css(e, "border" + this + "Width")) || 0
        }), n + "px") : (n = kt(e, t, t), (0 > n || null == n) && (n = e.style[t] || 0), n = parseFloat(n) || 0, i && B.each(o, function () {
            n += parseFloat(B.css(e, "padding" + this)) || 0, "padding" !== i && (n += parseFloat(B.css(e, "border" + this + "Width")) || 0), "margin" === i && (n += parseFloat(B.css(e, i + this)) || 0)
        }), n + "px")
    }

    function b(e) {
        return function (t, i) {
            if ("string" != typeof t && (i = t, t = "*"), B.isFunction(i))for (var n, o, r, a = t.toLowerCase().split(Jt), s = 0, l = a.length; l > s; s++)n = a[s], r = /^\+/.test(n), r && (n = n.substr(1) || "*"), o = e[n] = e[n] || [], o[r ? "unshift" : "push"](i)
        }
    }

    function w(e, i, n, o, r, a) {
        r = r || i.dataTypes[0], a = a || {}, a[r] = !0;
        for (var s, l = e[r], c = 0, d = l ? l.length : 0, u = e === ii; d > c && (u || !s); c++)s = l[c](i, n, o), "string" == typeof s && (!u || a[s] ? s = t : (i.dataTypes.unshift(s), s = w(e, i, n, o, s, a)));
        return !u && s || a["*"] || (s = w(e, i, n, o, "*", a)), s
    }

    function A(e, i) {
        var n, o, r = B.ajaxSettings.flatOptions || {};
        for (n in i)i[n] !== t && ((r[n] ? e : o || (o = {}))[n] = i[n]);
        o && B.extend(!0, e, o)
    }

    function C(e, t, i, n) {
        if (B.isArray(t))B.each(t, function (t, o) {
            i || Ht.test(e) ? n(e, o) : C(e + "[" + ("object" == typeof o || B.isArray(o) ? t : "") + "]", o, i, n)
        }); else if (i || null == t || "object" != typeof t)n(e, t); else for (var o in t)C(e + "[" + o + "]", t[o], i, n)
    }

    function T(e, i, n) {
        var o, r, a, s, l = e.contents, c = e.dataTypes, d = e.responseFields;
        for (r in d)r in n && (i[d[r]] = n[r]);
        for (; "*" === c[0];)c.shift(), o === t && (o = e.mimeType || i.getResponseHeader("content-type"));
        if (o)for (r in l)if (l[r] && l[r].test(o)) {
            c.unshift(r);
            break
        }
        if (c[0]in n)a = c[0]; else {
            for (r in n) {
                if (!c[0] || e.converters[r + " " + c[0]]) {
                    a = r;
                    break
                }
                s || (s = r)
            }
            a = a || s
        }
        return a ? (a !== c[0] && c.unshift(a), n[a]) : t
    }

    function S(e, i) {
        e.dataFilter && (i = e.dataFilter(i, e.dataType));
        var n, o, r, a, s, l, c, d, u = e.dataTypes, p = {}, f = u.length, h = u[0];
        for (n = 1; f > n; n++) {
            if (1 === n)for (o in e.converters)"string" == typeof o && (p[o.toLowerCase()] = e.converters[o]);
            if (a = h, h = u[n], "*" === h)h = a; else if ("*" !== a && a !== h) {
                if (s = a + " " + h, l = p[s] || p["* " + h], !l) {
                    d = t;
                    for (c in p)if (r = c.split(" "), (r[0] === a || "*" === r[0]) && (d = p[r[1] + " " + h])) {
                        c = p[c], c === !0 ? l = d : d === !0 && (l = c);
                        break
                    }
                }
                l || d || B.error("No conversion from " + s.replace(" ", " to ")), l !== !0 && (i = l ? l(i) : d(c(i)))
            }
        }
        return i
    }

    function k() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function x() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function N() {
        return setTimeout(M, 0), hi = B.now()
    }

    function M() {
        hi = t
    }

    function D(e, t) {
        var i = {};
        return B.each(vi.concat.apply([], vi.slice(0, t)), function () {
            i[this] = e
        }), i
    }

    function L(e) {
        if (!mi[e]) {
            var t = P.body, i = B("<" + e + ">").appendTo(t), n = i.css("display");
            i.remove(), ("none" === n || "" === n) && (ui || (ui = P.createElement("iframe"), ui.frameBorder = ui.width = ui.height = 0), t.appendChild(ui), pi && ui.createElement || (pi = (ui.contentWindow || ui.contentDocument).document, pi.write(("CSS1Compat" === P.compatMode ? "<!doctype html>" : "") + "<html><body>"), pi.close()), i = pi.createElement(e), pi.body.appendChild(i), n = B.css(i, "display"), t.removeChild(ui)), mi[e] = n
        }
        return mi[e]
    }

    function F(e) {
        return B.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var P = e.document, E = e.navigator, U = e.location, B = function () {
        function i() {
            if (!s.isReady) {
                try {
                    P.documentElement.doScroll("left")
                } catch (e) {
                    return setTimeout(i, 1), t
                }
                s.ready()
            }
        }

        var n, o, r, a, s = function (e, t) {
            return new s.fn.init(e, t, n)
        }, l = e.jQuery, c = e.$, d = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, u = /\S/, p = /^\s+/, f = /\s+$/, h = /\d/, m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, g = /^[\],:{}\s]*$/, _ = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, y = /(?:^|:|,)(?:\s*\[)+/g, b = /(webkit)[ \/]([\w.]+)/, w = /(opera)(?:.*version)?[ \/]([\w.]+)/, A = /(msie) ([\w.]+)/, C = /(mozilla)(?:.*? rv:([\w.]+))?/, T = /-([a-z]|[0-9])/gi, S = /^-ms-/, k = function (e, t) {
            return (t + "").toUpperCase()
        }, x = E.userAgent, N = Object.prototype.toString, M = Object.prototype.hasOwnProperty, D = Array.prototype.push, L = Array.prototype.slice, F = String.prototype.trim, U = Array.prototype.indexOf, B = {};
        return s.fn = s.prototype = {
            constructor: s, init: function (e, i, n) {
                var o, r, a, l;
                if (!e)return this;
                if (e.nodeType)return this.context = this[0] = e, this.length = 1, this;
                if ("body" === e && !i && P.body)return this.context = P, this[0] = P.body, this.selector = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : d.exec(e), !o || !o[1] && i)return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                    if (o[1])return i = i instanceof s ? i[0] : i, l = i ? i.ownerDocument || i : P, a = m.exec(e), a ? s.isPlainObject(i) ? (e = [P.createElement(a[1])], s.fn.attr.call(e, i, !0)) : e = [l.createElement(a[1])] : (a = s.buildFragment([o[1]], [l]), e = (a.cacheable ? s.clone(a.fragment) : a.fragment).childNodes), s.merge(this, e);
                    if (r = P.getElementById(o[2]), r && r.parentNode) {
                        if (r.id !== o[2])return n.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = P, this.selector = e, this
                }
                return s.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), s.makeArray(e, this))
            }, selector: "", jquery: "1.6.4", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return L.call(this, 0)
            }, get: function (e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            }, pushStack: function (e, t, i) {
                var n = this.constructor();
                return s.isArray(e) ? D.apply(n, e) : s.merge(n, e), n.prevObject = this, n.context = this.context, "find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")"), n
            }, each: function (e, t) {
                return s.each(this, e, t)
            }, ready: function (e) {
                return s.bindReady(), r.done(e), this
            }, eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(L.apply(this, arguments), "slice", L.call(arguments).join(","))
            }, map: function (e) {
                return this.pushStack(s.map(this, function (t, i) {
                    return e.call(t, i, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: D, sort: [].sort, splice: [].splice
        }, s.fn.init.prototype = s.fn, s.extend = s.fn.extend = function () {
            var e, i, n, o, r, a, l = arguments[0] || {}, c = 1, d = arguments.length, u = !1;
            for ("boolean" == typeof l && (u = l, l = arguments[1] || {}, c = 2), "object" == typeof l || s.isFunction(l) || (l = {}), d === c && (l = this, --c); d > c; c++)if (null != (e = arguments[c]))for (i in e)n = l[i], o = e[i], l !== o && (u && o && (s.isPlainObject(o) || (r = s.isArray(o))) ? (r ? (r = !1, a = n && s.isArray(n) ? n : []) : a = n && s.isPlainObject(n) ? n : {}, l[i] = s.extend(u, a, o)) : o !== t && (l[i] = o));
            return l
        }, s.extend({
            noConflict: function (t) {
                return e.$ === s && (e.$ = c), t && e.jQuery === s && (e.jQuery = l), s
            }, isReady: !1, readyWait: 1, holdReady: function (e) {
                e ? s.readyWait++ : s.ready(!0)
            }, ready: function (e) {
                if (e === !0 && !--s.readyWait || e !== !0 && !s.isReady) {
                    if (!P.body)return setTimeout(s.ready, 1);
                    if (s.isReady = !0, e !== !0 && --s.readyWait > 0)return;
                    r.resolveWith(P, [s]), s.fn.trigger && s(P).trigger("ready").unbind("ready")
                }
            }, bindReady: function () {
                if (!r) {
                    if (r = s._Deferred(), "complete" === P.readyState)return setTimeout(s.ready, 1);
                    if (P.addEventListener)P.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", s.ready, !1); else if (P.attachEvent) {
                        P.attachEvent("onreadystatechange", a), e.attachEvent("onload", s.ready);
                        var t = !1;
                        try {
                            t = null == e.frameElement
                        } catch (n) {
                        }
                        P.documentElement.doScroll && t && i()
                    }
                }
            }, isFunction: function (e) {
                return "function" === s.type(e)
            }, isArray: Array.isArray || function (e) {
                return "array" === s.type(e)
            }, isWindow: function (e) {
                return e && "object" == typeof e && "setInterval"in e
            }, isNaN: function (e) {
                return null == e || !h.test(e) || isNaN(e)
            }, type: function (e) {
                return null == e ? e + "" : B[N.call(e)] || "object"
            }, isPlainObject: function (e) {
                if (!e || "object" !== s.type(e) || e.nodeType || s.isWindow(e))return !1;
                try {
                    if (e.constructor && !M.call(e, "constructor") && !M.call(e.constructor.prototype, "isPrototypeOf"))return !1
                } catch (i) {
                    return !1
                }
                var n;
                for (n in e);
                return n === t || M.call(e, n)
            }, isEmptyObject: function (e) {
                for (var t in e)return !1;
                return !0
            }, error: function (e) {
                throw e
            }, parseJSON: function (i) {
                return "string" == typeof i && i ? (i = s.trim(i), e.JSON && e.JSON.parse ? e.JSON.parse(i) : g.test(i.replace(_, "@").replace(v, "]").replace(y, "")) ? Function("return " + i)() : (s.error("Invalid JSON: " + i), t)) : null
            }, parseXML: function (i) {
                var n, o;
                try {
                    e.DOMParser ? (o = new DOMParser, n = o.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                } catch (r) {
                    n = t
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || s.error("Invalid XML: " + i), n
            }, noop: function () {
            }, globalEval: function (t) {
                t && u.test(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            }, camelCase: function (e) {
                return e.replace(S, "ms-").replace(T, k)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            }, each: function (e, i, n) {
                var o, r = 0, a = e.length, l = a === t || s.isFunction(e);
                if (n)if (l) {
                    for (o in e)if (i.apply(e[o], n) === !1)break
                } else for (; a > r && i.apply(e[r++], n) !== !1;); else if (l) {
                    for (o in e)if (i.call(e[o], o, e[o]) === !1)break
                } else for (; a > r && i.call(e[r], r, e[r++]) !== !1;);
                return e
            }, trim: F ? function (e) {
                return null == e ? "" : F.call(e)
            } : function (e) {
                return null == e ? "" : ("" + e).replace(p, "").replace(f, "")
            }, makeArray: function (e, t) {
                var i = t || [];
                if (null != e) {
                    var n = s.type(e);
                    null == e.length || "string" === n || "function" === n || "regexp" === n || s.isWindow(e) ? D.call(i, e) : s.merge(i, e)
                }
                return i
            }, inArray: function (e, t) {
                if (!t)return -1;
                if (U)return U.call(t, e);
                for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i;
                return -1
            }, merge: function (e, i) {
                var n = e.length, o = 0;
                if ("number" == typeof i.length)for (var r = i.length; r > o; o++)e[n++] = i[o]; else for (; i[o] !== t;)e[n++] = i[o++];
                return e.length = n, e
            }, grep: function (e, t, i) {
                var n, o = [];
                i = !!i;
                for (var r = 0, a = e.length; a > r; r++)n = !!t(e[r], r), i !== n && o.push(e[r]);
                return o
            }, map: function (e, i, n) {
                var o, r, a = [], l = 0, c = e.length, d = e instanceof s || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || s.isArray(e));
                if (d)for (; c > l; l++)o = i(e[l], l, n), null != o && (a[a.length] = o); else for (r in e)o = i(e[r], r, n), null != o && (a[a.length] = o);
                return a.concat.apply([], a)
            }, guid: 1, proxy: function (e, i) {
                if ("string" == typeof i) {
                    var n = e[i];
                    i = e, e = n
                }
                if (!s.isFunction(e))return t;
                var o = L.call(arguments, 2), r = function () {
                    return e.apply(i, o.concat(L.call(arguments)))
                };
                return r.guid = e.guid = e.guid || r.guid || s.guid++, r
            }, access: function (e, i, n, o, r, a) {
                var l = e.length;
                if ("object" == typeof i) {
                    for (var c in i)s.access(e, c, i[c], o, r, n);
                    return e
                }
                if (n !== t) {
                    o = !a && o && s.isFunction(n);
                    for (var d = 0; l > d; d++)r(e[d], i, o ? n.call(e[d], d, r(e[d], i)) : n, a);
                    return e
                }
                return l ? r(e[0], i) : t
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (e) {
                e = e.toLowerCase();
                var t = b.exec(e) || w.exec(e) || A.exec(e) || 0 > e.indexOf("compatible") && C.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, sub: function () {
                function e(t, i) {
                    return new e.fn.init(t, i)
                }

                s.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (i, n) {
                    return n && n instanceof s && !(n instanceof e) && (n = e(n)), s.fn.init.call(this, i, n, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(P);
                return e
            }, browser: {}
        }), s.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            B["[object " + t + "]"] = t.toLowerCase()
        }), o = s.uaMatch(x), o.browser && (s.browser[o.browser] = !0, s.browser.version = o.version), s.browser.webkit && (s.browser.safari = !0), u.test(" ") && (p = /^[\s\xA0]+/, f = /[\s\xA0]+$/), n = s(P), P.addEventListener ? a = function () {
            P.removeEventListener("DOMContentLoaded", a, !1), s.ready()
        } : P.attachEvent && (a = function () {
            "complete" === P.readyState && (P.detachEvent("onreadystatechange", a), s.ready())
        }), s
    }(), I = "done fail isResolved isRejected promise then always pipe".split(" "), O = [].slice;
    B.extend({
        _Deferred: function () {
            var e, t, i, n = [], o = {
                done: function () {
                    if (!i) {
                        var t, r, a, s, l, c = arguments;
                        for (e && (l = e, e = 0), t = 0, r = c.length; r > t; t++)a = c[t], s = B.type(a), "array" === s ? o.done.apply(o, a) : "function" === s && n.push(a);
                        l && o.resolveWith(l[0], l[1])
                    }
                    return this
                }, resolveWith: function (o, r) {
                    if (!i && !e && !t) {
                        r = r || [], t = 1;
                        try {
                            for (; n[0];)n.shift().apply(o, r)
                        } finally {
                            e = [o, r], t = 0
                        }
                    }
                    return this
                }, resolve: function () {
                    return o.resolveWith(this, arguments), this
                }, isResolved: function () {
                    return !(!t && !e)
                }, cancel: function () {
                    return i = 1, n = [], this
                }
            };
            return o
        }, Deferred: function (e) {
            var t, i = B._Deferred(), n = B._Deferred();
            return B.extend(i, {
                then: function (e, t) {
                    return i.done(e).fail(t), this
                },
                always: function () {
                    return i.done.apply(i, arguments).fail.apply(this, arguments)
                },
                fail: n.done,
                rejectWith: n.resolveWith,
                reject: n.resolve,
                isRejected: n.isResolved,
                pipe: function (e, t) {
                    return B.Deferred(function (n) {
                        B.each({done: [e, "resolve"], fail: [t, "reject"]}, function (e, t) {
                            var o, r = t[0], a = t[1];
                            B.isFunction(r) ? i[e](function () {
                                o = r.apply(this, arguments), o && B.isFunction(o.promise) ? o.promise().then(n.resolve, n.reject) : n[a + "With"](this === i ? n : this, [o])
                            }) : i[e](n[a])
                        })
                    }).promise()
                },
                promise: function (e) {
                    if (null == e) {
                        if (t)return t;
                        t = e = {}
                    }
                    for (var n = I.length; n--;)e[I[n]] = i[I[n]];
                    return e
                }
            }), i.done(n.cancel).fail(i.cancel), delete i.cancel, e && e.call(i, i), i
        }, when: function (e) {
            function t(e) {
                return function (t) {
                    i[e] = arguments.length > 1 ? O.call(arguments, 0) : t, --r || a.resolveWith(a, O.call(i, 0))
                }
            }

            var i = arguments, n = 0, o = i.length, r = o, a = 1 >= o && e && B.isFunction(e.promise) ? e : B.Deferred();
            if (o > 1) {
                for (; o > n; n++)i[n] && B.isFunction(i[n].promise) ? i[n].promise().then(t(n), a.reject) : --r;
                r || a.resolveWith(a, i)
            } else a !== e && a.resolveWith(a, o ? [e] : []);
            return a.promise()
        }
    }), B.support = function () {
        var e, t, i, n, o, r, a, s, l, c, d, u, p, f, h, m, g = P.createElement("div"), _ = P.documentElement;
        if (g.setAttribute("className", "t"), g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", e = g.getElementsByTagName("*"), t = g.getElementsByTagName("a")[0], !e || !e.length || !t)return {};
        i = P.createElement("select"), n = i.appendChild(P.createElement("option")), o = g.getElementsByTagName("input")[0], a = {
            leadingWhitespace: 3 === g.firstChild.nodeType,
            tbody: !g.getElementsByTagName("tbody").length,
            htmlSerialize: !!g.getElementsByTagName("link").length,
            style: /top/.test(t.getAttribute("style")),
            hrefNormalized: "/a" === t.getAttribute("href"),
            opacity: /^0.55$/.test(t.style.opacity),
            cssFloat: !!t.style.cssFloat,
            checkOn: "on" === o.value,
            optSelected: n.selected,
            getSetAttribute: "t" !== g.className,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, o.checked = !0, a.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, a.optDisabled = !n.disabled;
        try {
            delete g.test
        } catch (v) {
            a.deleteExpando = !1
        }
        !g.addEventListener && g.attachEvent && g.fireEvent && (g.attachEvent("onclick", function () {
            a.noCloneEvent = !1
        }), g.cloneNode(!0).fireEvent("onclick")), o = P.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), a.radioValue = "t" === o.value, o.setAttribute("checked", "checked"), g.appendChild(o), s = P.createDocumentFragment(), s.appendChild(g.firstChild), a.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, g.innerHTML = "", g.style.width = g.style.paddingLeft = "1px", l = P.getElementsByTagName("body")[0], d = P.createElement(l ? "div" : "body"), u = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, l && B.extend(u, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (h in u)d.style[h] = u[h];
        if (d.appendChild(g), c = l || _, c.insertBefore(d, c.firstChild), a.appendChecked = o.checked, a.boxModel = 2 === g.offsetWidth, "zoom"in g.style && (g.style.display = "inline", g.style.zoom = 1, a.inlineBlockNeedsLayout = 2 === g.offsetWidth, g.style.display = "", g.innerHTML = "<div style='width:4px;'></div>", a.shrinkWrapBlocks = 2 !== g.offsetWidth), g.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", p = g.getElementsByTagName("td"), m = 0 === p[0].offsetHeight, p[0].style.display = "", p[1].style.display = "none", a.reliableHiddenOffsets = m && 0 === p[0].offsetHeight, g.innerHTML = "", P.defaultView && P.defaultView.getComputedStyle && (r = P.createElement("div"), r.style.width = "0", r.style.marginRight = "0", g.appendChild(r), a.reliableMarginRight = 0 === (parseInt((P.defaultView.getComputedStyle(r, null) || {marginRight: 0}).marginRight, 10) || 0)), d.innerHTML = "", c.removeChild(d), g.attachEvent)for (h in{
            submit: 1,
            change: 1,
            focusin: 1
        })f = "on" + h, m = f in g, m || (g.setAttribute(f, "return;"), m = "function" == typeof g[f]), a[h + "Bubbles"] = m;
        return d = s = i = n = l = r = g = o = null, a
    }(), B.boxModel = B.support.boxModel;
    var R = /^(?:\{.*\}|\[.*\])$/, $ = /([A-Z])/g;
    B.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando], !!e && !n(e)
        },
        data: function (e, i, n, o) {
            if (B.acceptData(e)) {
                var r, a, s = B.expando, l = "string" == typeof i, c = e.nodeType, d = c ? B.cache : e, u = c ? e[B.expando] : e[B.expando] && B.expando;
                if (!(!u || o && u && d[u] && !d[u][s]) || !l || n !== t)return u || (c ? e[B.expando] = u = ++B.uuid : u = B.expando), d[u] || (d[u] = {}, c || (d[u].toJSON = B.noop)), ("object" == typeof i || "function" == typeof i) && (o ? d[u][s] = B.extend(d[u][s], i) : d[u] = B.extend(d[u], i)), r = d[u], o && (r[s] || (r[s] = {}), r = r[s]), n !== t && (r[B.camelCase(i)] = n), "events" !== i || r[i] ? (l ? (a = r[i], null == a && (a = r[B.camelCase(i)])) : a = r, a) : r[s] && r[s].events
            }
        },
        removeData: function (e, t, i) {
            if (B.acceptData(e)) {
                var o, r = B.expando, a = e.nodeType, s = a ? B.cache : e, l = a ? e[B.expando] : B.expando;
                if (s[l] && !(t && (o = i ? s[l][r] : s[l], o && (o[t] || (t = B.camelCase(t)), delete o[t], !n(o))) || i && (delete s[l][r], !n(s[l])))) {
                    var c = s[l][r];
                    B.support.deleteExpando || !s.setInterval ? delete s[l] : s[l] = null, c ? (s[l] = {}, a || (s[l].toJSON = B.noop), s[l][r] = c) : a && (B.support.deleteExpando ? delete e[B.expando] : e.removeAttribute ? e.removeAttribute(B.expando) : e[B.expando] = null)
                }
            }
        },
        _data: function (e, t, i) {
            return B.data(e, t, i, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = B.noData[e.nodeName.toLowerCase()];
                if (t)return !(t === !0 || e.getAttribute("classid") !== t)
            }
            return !0
        }
    }), B.fn.extend({
        data: function (e, n) {
            var o = null;
            if (e === t) {
                if (this.length && (o = B.data(this[0]), 1 === this[0].nodeType))for (var r, a = this[0].attributes, s = 0, l = a.length; l > s; s++)r = a[s].name, 0 === r.indexOf("data-") && (r = B.camelCase(r.substring(5)), i(this[0], r, o[r]));
                return o
            }
            if ("object" == typeof e)return this.each(function () {
                B.data(this, e)
            });
            var c = e.split(".");
            return c[1] = c[1] ? "." + c[1] : "", n === t ? (o = this.triggerHandler("getData" + c[1] + "!", [c[0]]), o === t && this.length && (o = B.data(this[0], e), o = i(this[0], e, o)), o === t && c[1] ? this.data(c[0]) : o) : this.each(function () {
                var t = B(this), i = [c[0], n];
                t.triggerHandler("setData" + c[1] + "!", i), B.data(this, e, n), t.triggerHandler("changeData" + c[1] + "!", i)
            })
        }, removeData: function (e) {
            return this.each(function () {
                B.removeData(this, e)
            })
        }
    }), B.extend({
        _mark: function (e, i) {
            e && (i = (i || "fx") + "mark", B.data(e, i, (B.data(e, i, t, !0) || 0) + 1, !0))
        }, _unmark: function (e, i, n) {
            if (e !== !0 && (n = i, i = e, e = !1), i) {
                n = n || "fx";
                var r = n + "mark", a = e ? 0 : (B.data(i, r, t, !0) || 1) - 1;
                a ? B.data(i, r, a, !0) : (B.removeData(i, r, !0), o(i, n, "mark"))
            }
        }, queue: function (e, i, n) {
            if (e) {
                i = (i || "fx") + "queue";
                var o = B.data(e, i, t, !0);
                return n && (!o || B.isArray(n) ? o = B.data(e, i, B.makeArray(n), !0) : o.push(n)), o || []
            }
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = B.queue(e, t), n = i.shift();
            "inprogress" === n && (n = i.shift()), n && ("fx" === t && i.unshift("inprogress"), n.call(e, function () {
                B.dequeue(e, t)
            })), i.length || (B.removeData(e, t + "queue", !0), o(e, t, "queue"))
        }
    }), B.fn.extend({
        queue: function (e, i) {
            return "string" != typeof e && (i = e, e = "fx"), i === t ? B.queue(this[0], e) : this.each(function () {
                var t = B.queue(this, e, i);
                "fx" === e && "inprogress" !== t[0] && B.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                B.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = B.fx ? B.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function () {
                var i = this;
                setTimeout(function () {
                    B.dequeue(i, t)
                }, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, i) {
            function n() {
                --l || r.resolveWith(a, [a])
            }

            "string" != typeof e && (i = e, e = t), e = e || "fx";
            for (var o, r = B.Deferred(), a = this, s = a.length, l = 1, c = e + "defer", d = e + "queue", u = e + "mark"; s--;)(o = B.data(a[s], c, t, !0) || (B.data(a[s], d, t, !0) || B.data(a[s], u, t, !0)) && B.data(a[s], c, B._Deferred(), !0)) && (l++, o.done(n));
            return n(), r.promise()
        }
    });
    var H, j, W = /[\n\t\r]/g, q = /\s+/, V = /\r/g, G = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, Y = /^a(?:rea)?$/i, Q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    B.fn.extend({
        attr: function (e, t) {
            return B.access(this, e, t, !0, B.attr)
        }, removeAttr: function (e) {
            return this.each(function () {
                B.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return B.access(this, e, t, !0, B.prop)
        }, removeProp: function (e) {
            return e = B.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (i) {
                }
            })
        }, addClass: function (e) {
            var t, i, n, o, r, a, s;
            if (B.isFunction(e))return this.each(function (t) {
                B(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)for (t = e.split(q), i = 0, n = this.length; n > i; i++)if (o = this[i], 1 === o.nodeType)if (o.className || 1 !== t.length) {
                for (r = " " + o.className + " ", a = 0, s = t.length; s > a; a++)~r.indexOf(" " + t[a] + " ") || (r += t[a] + " ");
                o.className = B.trim(r)
            } else o.className = e;
            return this
        }, removeClass: function (e) {
            var i, n, o, r, a, s, l;
            if (B.isFunction(e))return this.each(function (t) {
                B(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)for (i = (e || "").split(q), n = 0, o = this.length; o > n; n++)if (r = this[n], 1 === r.nodeType && r.className)if (e) {
                for (a = (" " + r.className + " ").replace(W, " "), s = 0, l = i.length; l > s; s++)a = a.replace(" " + i[s] + " ", " ");
                r.className = B.trim(a)
            } else r.className = "";
            return this
        }, toggleClass: function (e, t) {
            var i = typeof e, n = "boolean" == typeof t;
            return B.isFunction(e) ? this.each(function (i) {
                B(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i)for (var o, r = 0, a = B(this), s = t, l = e.split(q); o = l[r++];)s = n ? s : !a.hasClass(o), a[s ? "addClass" : "removeClass"](o); else("undefined" === i || "boolean" === i) && (this.className && B._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(W, " ").indexOf(t) > -1)return !0;
            return !1
        }, val: function (e) {
            var i, n, o = this[0];
            if (!arguments.length)return o ? (i = B.valHooks[o.nodeName.toLowerCase()] || B.valHooks[o.type], i && "get"in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)) : t;
            var r = B.isFunction(e);
            return this.each(function (n) {
                var o, a = B(this);
                1 === this.nodeType && (o = r ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : B.isArray(o) && (o = B.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), i = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type], i && "set"in i && i.set(this, o, "value") !== t || (this.value = o))
            })
        }
    }), B.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, i = e.selectedIndex, n = [], o = e.options, r = "select-one" === e.type;
                    if (0 > i)return null;
                    for (var a = r ? i : 0, s = r ? i + 1 : o.length; s > a; a++) {
                        var l = o[a];
                        if (!(!l.selected || (B.support.optDisabled ? l.disabled : null !== l.getAttribute("disabled")) || l.parentNode.disabled && B.nodeName(l.parentNode, "optgroup"))) {
                            if (t = B(l).val(), r)return t;
                            n.push(t)
                        }
                    }
                    return r && !n.length && o.length ? B(o[i]).val() : n
                }, set: function (e, t) {
                    var i = B.makeArray(t);
                    return B(e).find("option").each(function () {
                        this.selected = B.inArray(B(this).val(), i) >= 0
                    }), i.length || (e.selectedIndex = -1), i
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attrFix: {tabindex: "tabIndex"},
        attr: function (e, i, n, o) {
            var r = e.nodeType;
            if (!e || 3 === r || 8 === r || 2 === r)return t;
            if (o && i in B.attrFn)return B(e)[i](n);
            if (!("getAttribute"in e))return B.prop(e, i, n);
            var a, s, l = 1 !== r || !B.isXMLDoc(e);
            return l && (i = B.attrFix[i] || i, s = B.attrHooks[i], s || (Q.test(i) ? s = j : H && (s = H))), n !== t ? null === n ? (B.removeAttr(e, i), t) : s && "set"in s && l && (a = s.set(e, n, i)) !== t ? a : (e.setAttribute(i, "" + n), n) : s && "get"in s && l && null !== (a = s.get(e, i)) ? a : (a = e.getAttribute(i), null === a ? t : a)
        },
        removeAttr: function (e, t) {
            var i;
            1 === e.nodeType && (t = B.attrFix[t] || t, B.attr(e, t, ""), e.removeAttribute(t), Q.test(t) && (i = B.propFix[t] || t)in e && (e[i] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (G.test(e.nodeName) && e.parentNode)B.error("type property can't be changed"); else if (!B.support.radioValue && "radio" === t && B.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }, value: {
                get: function (e, t) {
                    return H && B.nodeName(e, "button") ? H.get(e, t) : t in e ? e.value : null
                }, set: function (e, i, n) {
                    return H && B.nodeName(e, "button") ? H.set(e, i, n) : (e.value = i, t)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, i, n) {
            var o = e.nodeType;
            if (!e || 3 === o || 8 === o || 2 === o)return t;
            var r, a, s = 1 !== o || !B.isXMLDoc(e);
            return s && (i = B.propFix[i] || i, a = B.propHooks[i]), n !== t ? a && "set"in a && (r = a.set(e, n, i)) !== t ? r : e[i] = n : a && "get"in a && null !== (r = a.get(e, i)) ? r : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var i = e.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : z.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), B.attrHooks.tabIndex = B.propHooks.tabIndex, j = {
        get: function (e, i) {
            var n;
            return B.prop(e, i) === !0 || (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
        }, set: function (e, t, i) {
            var n;
            return t === !1 ? B.removeAttr(e, i) : (n = B.propFix[i] || i, n in e && (e[n] = !0), e.setAttribute(i, i.toLowerCase())), i
        }
    }, B.support.getSetAttribute || (H = B.valHooks.button = {
        get: function (e, i) {
            var n;
            return n = e.getAttributeNode(i), n && "" !== n.nodeValue ? n.nodeValue : t
        }, set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || (n = P.createAttribute(i), e.setAttributeNode(n)), n.nodeValue = t + ""
        }
    }, B.each(["width", "height"], function (e, i) {
        B.attrHooks[i] = B.extend(B.attrHooks[i], {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(i, "auto"), n) : t
            }
        })
    })), B.support.hrefNormalized || B.each(["href", "src", "width", "height"], function (e, i) {
        B.attrHooks[i] = B.extend(B.attrHooks[i], {
            get: function (e) {
                var n = e.getAttribute(i, 2);
                return null === n ? t : n
            }
        })
    }), B.support.style || (B.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        }, set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), B.support.optSelected || (B.propHooks.selected = B.extend(B.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), B.support.checkOn || B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = B.extend(B.valHooks[this], {
            set: function (e, i) {
                return B.isArray(i) ? e.checked = B.inArray(B(e).val(), i) >= 0 : t
            }
        })
    });
    var X = /\.(.*)$/, K = /^(?:textarea|input|select)$/i, J = /\./g, Z = / /g, et = /[^\w\s.|`]/g, tt = function (e) {
        return e.replace(et, "\\$&")
    };
    B.event = {
        add: function (e, i, n, o) {
            if (3 !== e.nodeType && 8 !== e.nodeType) {
                if (n === !1)n = r; else if (!n)return;
                var a, s;
                n.handler && (a = n, n = a.handler), n.guid || (n.guid = B.guid++);
                var l = B._data(e);
                if (l) {
                    var c = l.events, d = l.handle;
                    c || (l.events = c = {}), d || (l.handle = d = function (e) {
                        return B === t || e && B.event.triggered === e.type ? t : B.event.handle.apply(d.elem, arguments)
                    }), d.elem = e, i = i.split(" ");
                    for (var u, p, f = 0; u = i[f++];) {
                        s = a ? B.extend({}, a) : {
                            handler: n,
                            data: o
                        }, u.indexOf(".") > -1 ? (p = u.split("."), u = p.shift(), s.namespace = p.slice(0).sort().join(".")) : (p = [], s.namespace = ""), s.type = u, s.guid || (s.guid = n.guid);
                        var h = c[u], m = B.event.special[u] || {};
                        h || (h = c[u] = [], m.setup && m.setup.call(e, o, p, d) !== !1 || (e.addEventListener ? e.addEventListener(u, d, !1) : e.attachEvent && e.attachEvent("on" + u, d))), m.add && (m.add.call(e, s), s.handler.guid || (s.handler.guid = n.guid)), h.push(s), B.event.global[u] = !0
                    }
                    e = null
                }
            }
        },
        global: {},
        remove: function (e, i, n, o) {
            if (3 !== e.nodeType && 8 !== e.nodeType) {
                n === !1 && (n = r);
                var a, s, l, c, d, u, p, f, h, m, g = 0, _ = B.hasData(e) && B._data(e), v = _ && _.events;
                if (_ && v)if (i && i.type && (n = i.handler, i = i.type), !i || "string" == typeof i && "." === i.charAt(0)) {
                    i = i || "";
                    for (s in v)B.event.remove(e, s + i)
                } else {
                    for (i = i.split(" "); s = i[g++];)if (m = s, h = null, c = 0 > s.indexOf("."), d = [], c || (d = s.split("."), s = d.shift(), u = RegExp("(^|\\.)" + B.map(d.slice(0).sort(), tt).join("\\.(?:.*\\.)?") + "(\\.|$)")), f = v[s])if (n) {
                        for (p = B.event.special[s] || {}, l = o || 0; f.length > l && (h = f[l], n.guid !== h.guid || ((c || u.test(h.namespace)) && (null == o && f.splice(l--, 1), p.remove && p.remove.call(e, h)), null == o)); l++);
                        (0 === f.length || null != o && 1 === f.length) && (p.teardown && p.teardown.call(e, d) !== !1 || B.removeEvent(e, s, _.handle), a = null, delete v[s])
                    } else for (l = 0; f.length > l; l++)h = f[l], (c || u.test(h.namespace)) && (B.event.remove(e, m, h.handler, l), f.splice(l--, 1));
                    if (B.isEmptyObject(v)) {
                        var y = _.handle;
                        y && (y.elem = null), delete _.events, delete _.handle, B.isEmptyObject(_) && B.removeData(e, t, !0)
                    }
                }
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (i, n, o, r) {
            var a, s = i.type || i, l = [];
            if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), a = !0), s.indexOf(".") >= 0 && (l = s.split("."), s = l.shift(), l.sort()), o && !B.event.customEvent[s] || B.event.global[s]) {
                if (i = "object" == typeof i ? i[B.expando] ? i : new B.Event(s, i) : new B.Event(s), i.type = s, i.exclusive = a, i.namespace = l.join("."), i.namespace_re = RegExp("(^|\\.)" + l.join("\\.(?:.*\\.)?") + "(\\.|$)"), (r || !o) && (i.preventDefault(), i.stopPropagation()), !o)return B.each(B.cache, function () {
                    var e = B.expando, t = this[e];
                    t && t.events && t.events[s] && B.event.trigger(i, n, t.handle.elem)
                }), t;
                if (3 !== o.nodeType && 8 !== o.nodeType) {
                    i.result = t, i.target = o, n = null != n ? B.makeArray(n) : [], n.unshift(i);
                    var c = o, d = 0 > s.indexOf(":") ? "on" + s : "";
                    do {
                        var u = B._data(c, "handle");
                        i.currentTarget = c, u && u.apply(c, n), d && B.acceptData(c) && c[d] && c[d].apply(c, n) === !1 && (i.result = !1, i.preventDefault()), c = c.parentNode || c.ownerDocument || c === i.target.ownerDocument && e
                    } while (c && !i.isPropagationStopped());
                    if (!i.isDefaultPrevented()) {
                        var p, f = B.event.special[s] || {};
                        if (!(f._default && f._default.call(o.ownerDocument, i) !== !1 || "click" === s && B.nodeName(o, "a") || !B.acceptData(o))) {
                            try {
                                d && o[s] && (p = o[d], p && (o[d] = null), B.event.triggered = s, o[s]())
                            } catch (h) {
                            }
                            p && (o[d] = p), B.event.triggered = t
                        }
                    }
                    return i.result
                }
            }
        },
        handle: function (i) {
            i = B.event.fix(i || e.event);
            var n = ((B._data(this, "events") || {})[i.type] || []).slice(0), o = !i.exclusive && !i.namespace, r = Array.prototype.slice.call(arguments, 0);
            r[0] = i, i.currentTarget = this;
            for (var a = 0, s = n.length; s > a; a++) {
                var l = n[a];
                if (o || i.namespace_re.test(l.namespace)) {
                    i.handler = l.handler, i.data = l.data, i.handleObj = l;
                    var c = l.handler.apply(this, r);
                    if (c !== t && (i.result = c, c === !1 && (i.preventDefault(), i.stopPropagation())), i.isImmediatePropagationStopped())break
                }
            }
            return i.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (e) {
            if (e[B.expando])return e;
            var i = e;
            e = B.Event(i);
            for (var n, o = this.props.length; o;)n = this.props[--o], e[n] = i[n];
            if (e.target || (e.target = e.srcElement || P), 3 === e.target.nodeType && (e.target = e.target.parentNode), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), null == e.pageX && null != e.clientX) {
                var r = e.target.ownerDocument || P, a = r.documentElement, s = r.body;
                e.pageX = e.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), e.pageY = e.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
            }
            return null != e.which || null == e.charCode && null == e.keyCode || (e.which = null != e.charCode ? e.charCode : e.keyCode), !e.metaKey && e.ctrlKey && (e.metaKey = e.ctrlKey), e.which || e.button === t || (e.which = 1 & e.button ? 1 : 2 & e.button ? 3 : 4 & e.button ? 2 : 0), e
        },
        guid: 1e8,
        proxy: B.proxy,
        special: {
            ready: {setup: B.bindReady, teardown: B.noop}, live: {
                add: function (e) {
                    B.event.add(this, c(e.origType, e.selector), B.extend({}, e, {handler: l, guid: e.handler.guid}))
                }, remove: function (e) {
                    B.event.remove(this, c(e.origType, e.selector), e)
                }
            }, beforeunload: {
                setup: function (e, t, i) {
                    B.isWindow(this) && (this.onbeforeunload = i)
                }, teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        }
    }, B.removeEvent = P.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        e.detachEvent && e.detachEvent("on" + t, i)
    }, B.Event = function (e, i) {
        return this.preventDefault ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : r) : this.type = e, i && B.extend(this, i), this.timeStamp = B.now(), this[B.expando] = !0, t) : new B.Event(e, i)
    }, B.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = a;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = a;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = a, this.stopPropagation()
        }, isDefaultPrevented: r, isPropagationStopped: r, isImmediatePropagationStopped: r
    };
    var it = function (e) {
        var t = e.relatedTarget, i = !1, n = e.type;
        e.type = e.data, t !== this && (t && (i = B.contains(this, t)), i || (B.event.handle.apply(this, arguments), e.type = n))
    }, nt = function (e) {
        e.type = e.data, B.event.handle.apply(this, arguments)
    };
    if (B.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
            B.event.special[e] = {
                setup: function (i) {
                    B.event.add(this, t, i && i.selector ? nt : it, e)
                }, teardown: function (e) {
                    B.event.remove(this, t, e && e.selector ? nt : it)
                }
            }
        }), B.support.submitBubbles || (B.event.special.submit = {
            setup: function () {
                return B.nodeName(this, "form") ? !1 : (B.event.add(this, "click.specialSubmit", function (e) {
                    var t = e.target, i = B.nodeName(t, "input") || B.nodeName(t, "button") ? t.type : "";
                    "submit" !== i && "image" !== i || !B(t).closest("form").length || s("submit", this, arguments)
                }), B.event.add(this, "keypress.specialSubmit", function (e) {
                    var t = e.target, i = B.nodeName(t, "input") || B.nodeName(t, "button") ? t.type : "";
                    "text" !== i && "password" !== i || !B(t).closest("form").length || 13 !== e.keyCode || s("submit", this, arguments)
                }), t)
            }, teardown: function () {
                B.event.remove(this, ".specialSubmit")
            }
        }), !B.support.changeBubbles) {
        var ot, rt = function (e) {
            var t = B.nodeName(e, "input") ? e.type : "", i = e.value;
            return "radio" === t || "checkbox" === t ? i = e.checked : "select-multiple" === t ? i = e.selectedIndex > -1 ? B.map(e.options, function (e) {
                return e.selected
            }).join("-") : "" : B.nodeName(e, "select") && (i = e.selectedIndex), i
        }, at = function at(e) {
            var i, n, o = e.target;
            K.test(o.nodeName) && !o.readOnly && (i = B._data(o, "_change_data"), n = rt(o), ("focusout" !== e.type || "radio" !== o.type) && B._data(o, "_change_data", n), i !== t && n !== i && (null != i || n) && (e.type = "change", e.liveFired = t, B.event.trigger(e, arguments[1], o)))
        };
        B.event.special.change = {
            filters: {
                focusout: at, beforedeactivate: at, click: function (e) {
                    var t = e.target, i = B.nodeName(t, "input") ? t.type : "";
                    ("radio" === i || "checkbox" === i || B.nodeName(t, "select")) && at.call(this, e)
                }, keydown: function (e) {
                    var t = e.target, i = B.nodeName(t, "input") ? t.type : "";
                    (13 === e.keyCode && !B.nodeName(t, "textarea") || 32 === e.keyCode && ("checkbox" === i || "radio" === i) || "select-multiple" === i) && at.call(this, e)
                }, beforeactivate: function (e) {
                    var t = e.target;
                    B._data(t, "_change_data", rt(t))
                }
            }, setup: function () {
                if ("file" === this.type)return !1;
                for (var e in ot)B.event.add(this, e + ".specialChange", ot[e]);
                return K.test(this.nodeName)
            }, teardown: function () {
                return B.event.remove(this, ".specialChange"), K.test(this.nodeName)
            }
        }, ot = B.event.special.change.filters, ot.focus = ot.beforeactivate
    }
    B.support.focusinBubbles || B.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        function i(e) {
            var i = B.event.fix(e);
            i.type = t, i.originalEvent = {}, B.event.trigger(i, null, i.target), i.isDefaultPrevented() && e.preventDefault()
        }

        var n = 0;
        B.event.special[t] = {
            setup: function () {
                0 === n++ && P.addEventListener(e, i, !0)
            }, teardown: function () {
                0 === --n && P.removeEventListener(e, i, !0)
            }
        }
    }), B.each(["bind", "one"], function (e, i) {
        B.fn[i] = function (e, n, o) {
            var r;
            if ("object" == typeof e) {
                for (var a in e)this[i](a, n, e[a], o);
                return this
            }
            if ((2 === arguments.length || n === !1) && (o = n, n = t), "one" === i ? (r = function (e) {
                    return B(this).unbind(e, r), o.apply(this, arguments)
                }, r.guid = o.guid || B.guid++) : r = o, "unload" === e && "one" !== i)this.one(e, n, o); else for (var s = 0, l = this.length; l > s; s++)B.event.add(this[s], e, r, n);
            return this
        }
    }), B.fn.extend({
        unbind: function (e, t) {
            if ("object" != typeof e || e.preventDefault)for (var i = 0, n = this.length; n > i; i++)B.event.remove(this[i], e, t); else for (var o in e)this.unbind(o, e[o]);
            return this
        }, delegate: function (e, t, i, n) {
            return this.live(t, i, n, e)
        }, undelegate: function (e, t, i) {
            return 0 === arguments.length ? this.unbind("live") : this.die(t, null, i, e)
        }, trigger: function (e, t) {
            return this.each(function () {
                B.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, i) {
            return this[0] ? B.event.trigger(e, i, this[0], !0) : t
        }, toggle: function (e) {
            var t = arguments, i = e.guid || B.guid++, n = 0, o = function (i) {
                var o = (B.data(this, "lastToggle" + e.guid) || 0) % n;
                return B.data(this, "lastToggle" + e.guid, o + 1), i.preventDefault(), t[o].apply(this, arguments) || !1
            };
            for (o.guid = i; t.length > n;)t[n++].guid = i;
            return this.click(o)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var st = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    B.each(["live", "die"], function (e, i) {
        B.fn[i] = function (e, n, o, a) {
            var s, l, d, u, p = 0, f = a || this.selector, h = a ? this : B(this.context);
            if ("object" == typeof e && !e.preventDefault) {
                for (var m in e)h[i](m, n, e[m], f);
                return this
            }
            if ("die" === i && !e && a && "." === a.charAt(0))return h.unbind(a), this;
            for ((n === !1 || B.isFunction(n)) && (o = n || r, n = t), e = (e || "").split(" "); null != (s = e[p++]);)if (l = X.exec(s), d = "", l && (d = l[0], s = s.replace(X, "")), "hover" !== s)if (u = s, st[s] ? (e.push(st[s] + d), s += d) : s = (st[s] || s) + d, "live" === i)for (var g = 0, _ = h.length; _ > g; g++)B.event.add(h[g], "live." + c(s, f), {
                data: n,
                selector: f,
                handler: o,
                origType: s,
                origHandler: o,
                preType: u
            }); else h.unbind("live." + c(s, f), o); else e.push("mouseenter" + d, "mouseleave" + d);
            return this
        }
    }), B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (e, t) {
        B.fn[t] = function (e, i) {
            return null == i && (i = e, e = null), arguments.length > 0 ? this.bind(t, e, i) : this.trigger(t)
        }, B.attrFn && (B.attrFn[t] = !0)
    }), function () {
        function e(e, t, i, n, o, r) {
            for (var a = 0, s = n.length; s > a; a++) {
                var l = n[a];
                if (l) {
                    var c = !1;
                    for (l = l[e]; l;) {
                        if (l.sizcache === i) {
                            c = n[l.sizset];
                            break
                        }
                        if (1 !== l.nodeType || r || (l.sizcache = i, l.sizset = a), l.nodeName.toLowerCase() === t) {
                            c = l;
                            break
                        }
                        l = l[e]
                    }
                    n[a] = c
                }
            }
        }

        function i(e, t, i, n, o, r) {
            for (var a = 0, s = n.length; s > a; a++) {
                var l = n[a];
                if (l) {
                    var c = !1;
                    for (l = l[e]; l;) {
                        if (l.sizcache === i) {
                            c = n[l.sizset];
                            break
                        }
                        if (1 === l.nodeType)if (r || (l.sizcache = i, l.sizset = a), "string" != typeof t) {
                            if (l === t) {
                                c = !0;
                                break
                            }
                        } else if (d.filter(t, [l]).length > 0) {
                            c = l;
                            break
                        }
                        l = l[e]
                    }
                    n[a] = c
                }
            }
        }

        var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, o = 0, r = Object.prototype.toString, a = !1, s = !0, l = /\\/g, c = /\W/;
        [0, 0].sort(function () {
            return s = !1, 0
        });
        var d = function (e, t, i, o) {
            i = i || [], t = t || P;
            var a = t;
            if (1 !== t.nodeType && 9 !== t.nodeType)return [];
            if (!e || "string" != typeof e)return i;
            var s, l, c, f, h, g, _, v, b = !0, w = d.isXML(t), A = [], C = e;
            do if (n.exec(""), s = n.exec(C), s && (C = s[3], A.push(s[1]), s[2])) {
                f = s[3];
                break
            } while (s);
            if (A.length > 1 && p.exec(e))if (2 === A.length && u.relative[A[0]])l = y(A[0] + A[1], t); else for (l = u.relative[A[0]] ? [t] : d(A.shift(), t); A.length;)e = A.shift(), u.relative[e] && (e += A.shift()), l = y(e, l); else if (!o && A.length > 1 && 9 === t.nodeType && !w && u.match.ID.test(A[0]) && !u.match.ID.test(A[A.length - 1]) && (h = d.find(A.shift(), t, w), t = h.expr ? d.filter(h.expr, h.set)[0] : h.set[0]), t)for (h = o ? {
                expr: A.pop(),
                set: m(o)
            } : d.find(A.pop(), 1 !== A.length || "~" !== A[0] && "+" !== A[0] || !t.parentNode ? t : t.parentNode, w), l = h.expr ? d.filter(h.expr, h.set) : h.set, A.length > 0 ? c = m(l) : b = !1; A.length;)g = A.pop(), _ = g, u.relative[g] ? _ = A.pop() : g = "", null == _ && (_ = t), u.relative[g](c, _, w); else c = A = [];
            if (c || (c = l), c || d.error(g || e), "[object Array]" === r.call(c))if (b)if (t && 1 === t.nodeType)for (v = 0; null != c[v]; v++)c[v] && (c[v] === !0 || 1 === c[v].nodeType && d.contains(t, c[v])) && i.push(l[v]); else for (v = 0; null != c[v]; v++)c[v] && 1 === c[v].nodeType && i.push(l[v]); else i.push.apply(i, c); else m(c, i);
            return f && (d(f, a, i, o), d.uniqueSort(i)), i
        };
        d.uniqueSort = function (e) {
            if (_ && (a = s, e.sort(_), a))for (var t = 1; e.length > t; t++)e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }, d.matches = function (e, t) {
            return d(e, null, null, t)
        }, d.matchesSelector = function (e, t) {
            return d(t, null, null, [e]).length > 0
        }, d.find = function (e, i, n) {
            var o;
            if (!e)return [];
            for (var r = 0, a = u.order.length; a > r; r++) {
                var s, c = u.order[r];
                if (s = u.leftMatch[c].exec(e)) {
                    var d = s[1];
                    if (s.splice(1, 1), "\\" !== d.substr(d.length - 1) && (s[1] = (s[1] || "").replace(l, ""), o = u.find[c](s, i, n), null != o)) {
                        e = e.replace(u.match[c], "");
                        break
                    }
                }
            }
            return o || (o = i.getElementsByTagName !== t ? i.getElementsByTagName("*") : []), {set: o, expr: e}
        }, d.filter = function (e, i, n, o) {
            for (var r, a, s = e, l = [], c = i, p = i && i[0] && d.isXML(i[0]); e && i.length;) {
                for (var f in u.filter)if (null != (r = u.leftMatch[f].exec(e)) && r[2]) {
                    var h, m, g = u.filter[f], _ = r[1];
                    if (a = !1, r.splice(1, 1), "\\" === _.substr(_.length - 1))continue;
                    if (c === l && (l = []), u.preFilter[f])if (r = u.preFilter[f](r, c, n, l, o, p)) {
                        if (r === !0)continue
                    } else a = h = !0;
                    if (r)for (var v = 0; null != (m = c[v]); v++)if (m) {
                        h = g(m, r, v, c);
                        var y = o ^ !!h;
                        n && null != h ? y ? a = !0 : c[v] = !1 : y && (l.push(m), a = !0)
                    }
                    if (h !== t) {
                        if (n || (c = l), e = e.replace(u.match[f], ""), !a)return [];
                        break
                    }
                }
                if (e === s) {
                    if (null != a)break;
                    d.error(e)
                }
                s = e
            }
            return c
        }, d.error = function (e) {
            throw"Syntax error, unrecognized expression: " + e
        };
        var u = d.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var i = "string" == typeof t, n = i && !c.test(t), o = i && !n;
                    n && (t = t.toLowerCase());
                    for (var r, a = 0, s = e.length; s > a; a++)if (r = e[a]) {
                        for (; (r = r.previousSibling) && 1 !== r.nodeType;);
                        e[a] = o || r && r.nodeName.toLowerCase() === t ? r || !1 : r === t
                    }
                    o && d.filter(t, e, !0)
                }, ">": function (e, t) {
                    var i, n = "string" == typeof t, o = 0, r = e.length;
                    if (n && !c.test(t)) {
                        for (t = t.toLowerCase(); r > o; o++)if (i = e[o]) {
                            var a = i.parentNode;
                            e[o] = a.nodeName.toLowerCase() === t ? a : !1
                        }
                    } else {
                        for (; r > o; o++)i = e[o], i && (e[o] = n ? i.parentNode : i.parentNode === t);
                        n && d.filter(t, e, !0)
                    }
                }, "": function (t, n, r) {
                    var a, s = o++, l = i;
                    "string" != typeof n || c.test(n) || (n = n.toLowerCase(), a = n, l = e), l("parentNode", n, s, t, a, r)
                }, "~": function (t, n, r) {
                    var a, s = o++, l = i;
                    "string" != typeof n || c.test(n) || (n = n.toLowerCase(), a = n, l = e), l("previousSibling", n, s, t, a, r)
                }
            },
            find: {
                ID: function (e, i, n) {
                    if (i.getElementById !== t && !n) {
                        var o = i.getElementById(e[1]);
                        return o && o.parentNode ? [o] : []
                    }
                }, NAME: function (e, i) {
                    if (i.getElementsByName !== t) {
                        for (var n = [], o = i.getElementsByName(e[1]), r = 0, a = o.length; a > r; r++)o[r].getAttribute("name") === e[1] && n.push(o[r]);
                        return 0 === n.length ? null : n
                    }
                }, TAG: function (e, i) {
                    return i.getElementsByTagName !== t ? i.getElementsByTagName(e[1]) : t
                }
            },
            preFilter: {
                CLASS: function (e, t, i, n, o, r) {
                    if (e = " " + e[1].replace(l, "") + " ", r)return e;
                    for (var a, s = 0; null != (a = t[s]); s++)a && (o ^ (a.className && (" " + a.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? i || n.push(a) : i && (t[s] = !1));
                    return !1
                }, ID: function (e) {
                    return e[1].replace(l, "")
                }, TAG: function (e) {
                    return e[1].replace(l, "").toLowerCase()
                }, CHILD: function (e) {
                    if ("nth" === e[1]) {
                        e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                    } else e[2] && d.error(e[0]);
                    return e[0] = o++, e
                }, ATTR: function (e, t, i, n, o, r) {
                    var a = e[1] = e[1].replace(l, "");
                    return !r && u.attrMap[a] && (e[1] = u.attrMap[a]), e[4] = (e[4] || e[5] || "").replace(l, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                }, PSEUDO: function (e, t, i, o, r) {
                    if ("not" === e[1]) {
                        if (!((n.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                            var a = d.filter(e[3], t, i, !0 ^ r);
                            return i || o.push.apply(o, a), !1
                        }
                        e[3] = d(e[3], null, null, t)
                    } else if (u.match.POS.test(e[0]) || u.match.CHILD.test(e[0]))return !0;
                    return e
                }, POS: function (e) {
                    return e.unshift(!0), e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === !1 && "hidden" !== e.type
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    return e.checked === !0
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (e, t, i) {
                    return !!d(i[3], e).length
                }, header: function (e) {
                    return /h\d/i.test(e.nodeName)
                }, text: function (e) {
                    var t = e.getAttribute("type"), i = e.type;
                    return "input" === e.nodeName.toLowerCase() && "text" === i && (t === i || null === t)
                }, radio: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                }, checkbox: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                }, file: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "file" === e.type
                }, password: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "password" === e.type
                }, submit: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "submit" === e.type
                }, image: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "image" === e.type
                }, reset: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && "reset" === e.type
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }, focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (e, t) {
                    return 0 === t
                }, last: function (e, t, i, n) {
                    return t === n.length - 1
                }, even: function (e, t) {
                    return 0 === t % 2
                }, odd: function (e, t) {
                    return 1 === t % 2
                }, lt: function (e, t, i) {
                    return i[3] - 0 > t
                }, gt: function (e, t, i) {
                    return t > i[3] - 0
                }, nth: function (e, t, i) {
                    return i[3] - 0 === t
                }, eq: function (e, t, i) {
                    return i[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, i, n) {
                    var o = t[1], r = u.filters[o];
                    if (r)return r(e, i, t, n);
                    if ("contains" === o)return (e.textContent || e.innerText || d.getText([e]) || "").indexOf(t[3]) >= 0;
                    if ("not" === o) {
                        for (var a = t[3], s = 0, l = a.length; l > s; s++)if (a[s] === e)return !1;
                        return !0
                    }
                    d.error(o)
                }, CHILD: function (e, t) {
                    var i = t[1], n = e;
                    switch (i) {
                        case"only":
                        case"first":
                            for (; n = n.previousSibling;)if (1 === n.nodeType)return !1;
                            if ("first" === i)return !0;
                            n = e;
                        case"last":
                            for (; n = n.nextSibling;)if (1 === n.nodeType)return !1;
                            return !0;
                        case"nth":
                            var o = t[2], r = t[3];
                            if (1 === o && 0 === r)return !0;
                            var a = t[0], s = e.parentNode;
                            if (s && (s.sizcache !== a || !e.nodeIndex)) {
                                var l = 0;
                                for (n = s.firstChild; n; n = n.nextSibling)1 === n.nodeType && (n.nodeIndex = ++l);
                                s.sizcache = a
                            }
                            var c = e.nodeIndex - r;
                            return 0 === o ? 0 === c : 0 === c % o && c / o >= 0
                    }
                }, ID: function (e, t) {
                    return 1 === e.nodeType && e.getAttribute("id") === t
                }, TAG: function (e, t) {
                    return "*" === t && 1 === e.nodeType || e.nodeName.toLowerCase() === t
                }, CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                }, ATTR: function (e, t) {
                    var i = t[1], n = u.attrHandle[i] ? u.attrHandle[i](e) : null != e[i] ? e[i] : e.getAttribute(i), o = n + "", r = t[2], a = t[4];
                    return null == n ? "!=" === r : "=" === r ? o === a : "*=" === r ? o.indexOf(a) >= 0 : "~=" === r ? (" " + o + " ").indexOf(a) >= 0 : a ? "!=" === r ? o !== a : "^=" === r ? 0 === o.indexOf(a) : "$=" === r ? o.substr(o.length - a.length) === a : "|=" === r ? o === a || o.substr(0, a.length + 1) === a + "-" : !1 : o && n !== !1
                }, POS: function (e, i, n, o) {
                    var r = i[2], a = u.setFilters[r];
                    return a ? a(e, n, i, o) : t
                }
            }
        }, p = u.match.POS, f = function (e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var h in u.match)u.match[h] = RegExp(u.match[h].source + /(?![^\[]*\])(?![^\(]*\))/.source), u.leftMatch[h] = RegExp(/(^(?:.|\r|\n)*?)/.source + u.match[h].source.replace(/\\(\d+)/g, f));
        var m = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(P.documentElement.childNodes, 0)[0].nodeType
        } catch (g) {
            m = function (e, t) {
                var i = 0, n = t || [];
                if ("[object Array]" === r.call(e))Array.prototype.push.apply(n, e); else if ("number" == typeof e.length)for (var o = e.length; o > i; i++)n.push(e[i]); else for (; e[i]; i++)n.push(e[i]);
                return n
            }
        }
        var _, v;
        P.documentElement.compareDocumentPosition ? _ = function (e, t) {
            return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : (_ = function (e, t) {
            if (e === t)return a = !0, 0;
            if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
            var i, n, o = [], r = [], s = e.parentNode, l = t.parentNode, c = s;
            if (s === l)return v(e, t);
            if (!s)return -1;
            if (!l)return 1;
            for (; c;)o.unshift(c), c = c.parentNode;
            for (c = l; c;)r.unshift(c), c = c.parentNode;
            i = o.length, n = r.length;
            for (var d = 0; i > d && n > d; d++)if (o[d] !== r[d])return v(o[d], r[d]);
            return d === i ? v(e, r[d], -1) : v(o[d], t, 1)
        }, v = function (e, t, i) {
            if (e === t)return i;
            for (var n = e.nextSibling; n;) {
                if (n === t)return -1;
                n = n.nextSibling
            }
            return 1
        }), d.getText = function (e) {
            for (var t, i = "", n = 0; e[n]; n++)t = e[n], 3 === t.nodeType || 4 === t.nodeType ? i += t.nodeValue : 8 !== t.nodeType && (i += d.getText(t.childNodes));
            return i
        }, function () {
            var e = P.createElement("div"), i = "script" + (new Date).getTime(), n = P.documentElement;
            e.innerHTML = "<a name='" + i + "'/>", n.insertBefore(e, n.firstChild), P.getElementById(i) && (u.find.ID = function (e, i, n) {
                if (i.getElementById !== t && !n) {
                    var o = i.getElementById(e[1]);
                    return o ? o.id === e[1] || o.getAttributeNode !== t && o.getAttributeNode("id").nodeValue === e[1] ? [o] : t : []
                }
            }, u.filter.ID = function (e, i) {
                var n = e.getAttributeNode !== t && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === i
            }), n.removeChild(e), n = e = null
        }(), function () {
            var e = P.createElement("div");
            e.appendChild(P.createComment("")), e.getElementsByTagName("*").length > 0 && (u.find.TAG = function (e, t) {
                var i = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var n = [], o = 0; i[o]; o++)1 === i[o].nodeType && n.push(i[o]);
                    i = n
                }
                return i
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && e.firstChild.getAttribute !== t && "#" !== e.firstChild.getAttribute("href") && (u.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), P.querySelectorAll && function () {
            var e = d, t = P.createElement("div"), i = "__sizzle__";
            if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                d = function (t, n, o, r) {
                    if (n = n || P, !r && !d.isXML(n)) {
                        var a = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (a && (1 === n.nodeType || 9 === n.nodeType)) {
                            if (a[1])return m(n.getElementsByTagName(t), o);
                            if (a[2] && u.find.CLASS && n.getElementsByClassName)return m(n.getElementsByClassName(a[2]), o)
                        }
                        if (9 === n.nodeType) {
                            if ("body" === t && n.body)return m([n.body], o);
                            if (a && a[3]) {
                                var s = n.getElementById(a[3]);
                                if (!s || !s.parentNode)return m([], o);
                                if (s.id === a[3])return m([s], o)
                            }
                            try {
                                return m(n.querySelectorAll(t), o)
                            } catch (l) {
                            }
                        } else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                            var c = n, p = n.getAttribute("id"), f = p || i, h = n.parentNode, g = /^\s*[+~]/.test(t);
                            p ? f = f.replace(/'/g, "\\$&") : n.setAttribute("id", f), g && h && (n = n.parentNode);
                            try {
                                if (!g || h)return m(n.querySelectorAll("[id='" + f + "'] " + t), o)
                            } catch (_) {
                            } finally {
                                p || c.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, n, o, r)
                };
                for (var n in e)d[n] = e[n];
                t = null
            }
        }(), function () {
            var e = P.documentElement, t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var i = !t.call(P.createElement("div"), "div"), n = !1;
                try {
                    t.call(P.documentElement, "[test!='']:sizzle")
                } catch (o) {
                    n = !0
                }
                d.matchesSelector = function (e, o) {
                    if (o = o.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e))try {
                        if (n || !u.match.PSEUDO.test(o) && !/!=/.test(o)) {
                            var r = t.call(e, o);
                            if (r || !i || e.document && 11 !== e.document.nodeType)return r
                        }
                    } catch (a) {
                    }
                    return d(o, null, null, [e]).length > 0
                }
            }
        }(), function () {
            var e = P.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (u.order.splice(1, 0, "CLASS"), u.find.CLASS = function (e, i, n) {
                return i.getElementsByClassName === t || n ? t : i.getElementsByClassName(e[1])
            }, e = null))
        }(), d.contains = P.documentElement.contains ? function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : P.documentElement.compareDocumentPosition ? function (e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        } : function () {
            return !1
        }, d.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        var y = function (e, t) {
            for (var i, n = [], o = "", r = t.nodeType ? [t] : t; i = u.match.PSEUDO.exec(e);)o += i[0], e = e.replace(u.match.PSEUDO, "");
            e = u.relative[e] ? e + "*" : e;
            for (var a = 0, s = r.length; s > a; a++)d(e, r[a], n);
            return d.filter(o, n)
        };
        B.find = d, B.expr = d.selectors, B.expr[":"] = B.expr.filters, B.unique = d.uniqueSort, B.text = d.getText, B.isXMLDoc = d.isXML, B.contains = d.contains
    }();
    var lt = /Until$/, ct = /^(?:parents|prevUntil|prevAll)/, dt = /,/, ut = /^.[^:#\[\.,]*$/, pt = Array.prototype.slice, ft = B.expr.match.POS, ht = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    B.fn.extend({
        find: function (e) {
            var t, i, n = this;
            if ("string" != typeof e)return B(e).filter(function () {
                for (t = 0, i = n.length; i > t; t++)if (B.contains(n[t], this))return !0
            });
            var o, r, a, s = this.pushStack("", "find", e);
            for (t = 0, i = this.length; i > t; t++)if (o = s.length, B.find(e, this[t], s), t > 0)for (r = o; s.length > r; r++)for (a = 0; o > a; a++)if (s[a] === s[r]) {
                s.splice(r--, 1);
                break
            }
            return s
        }, has: function (e) {
            var t = B(e);
            return this.filter(function () {
                for (var e = 0, i = t.length; i > e; e++)if (B.contains(this, t[e]))return !0
            })
        }, not: function (e) {
            return this.pushStack(u(this, e, !1), "not", e)
        }, filter: function (e) {
            return this.pushStack(u(this, e, !0), "filter", e)
        }, is: function (e) {
            return !!e && ("string" == typeof e ? B.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var i, n, o = [], r = this[0];
            if (B.isArray(e)) {
                var a, s, l = {}, c = 1;
                if (r && e.length) {
                    for (i = 0, n = e.length; n > i; i++)s = e[i], l[s] || (l[s] = ft.test(s) ? B(s, t || this.context) : s);
                    for (; r && r.ownerDocument && r !== t;) {
                        for (s in l)a = l[s], (a.jquery ? a.index(r) > -1 : B(r).is(a)) && o.push({
                            selector: s,
                            elem: r,
                            level: c
                        });
                        r = r.parentNode, c++
                    }
                }
                return o
            }
            var d = ft.test(e) || "string" != typeof e ? B(e, t || this.context) : 0;
            for (i = 0, n = this.length; n > i; i++)for (r = this[i]; r;) {
                if (d ? d.index(r) > -1 : B.find.matchesSelector(r, e)) {
                    o.push(r);
                    break
                }
                if (r = r.parentNode, !r || !r.ownerDocument || r === t || 11 === r.nodeType)break
            }
            return o = o.length > 1 ? B.unique(o) : o, this.pushStack(o, "closest", e)
        }, index: function (e) {
            return e ? "string" == typeof e ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (e, t) {
            var i = "string" == typeof e ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e), n = B.merge(this.get(), i);
            return this.pushStack(d(i[0]) || d(n[0]) ? n : B.unique(n))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), B.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return B.dir(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return B.dir(e, "parentNode", i)
        }, next: function (e) {
            return B.nth(e, 2, "nextSibling")
        }, prev: function (e) {
            return B.nth(e, 2, "previousSibling")
        }, nextAll: function (e) {
            return B.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return B.dir(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return B.dir(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return B.dir(e, "previousSibling", i)
        }, siblings: function (e) {
            return B.sibling(e.parentNode.firstChild, e)
        }, children: function (e) {
            return B.sibling(e.firstChild)
        }, contents: function (e) {
            return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : B.makeArray(e.childNodes)
        }
    }, function (e, t) {
        B.fn[e] = function (i, n) {
            var o = B.map(this, t, i), r = pt.call(arguments);
            return lt.test(e) || (n = i), n && "string" == typeof n && (o = B.filter(n, o)), o = this.length > 1 && !ht[e] ? B.unique(o) : o, (this.length > 1 || dt.test(n)) && ct.test(e) && (o = o.reverse()), this.pushStack(o, e, r.join(","))
        }
    }), B.extend({
        filter: function (e, t, i) {
            return i && (e = ":not(" + e + ")"), 1 === t.length ? B.find.matchesSelector(t[0], e) ? [t[0]] : [] : B.find.matches(e, t)
        }, dir: function (e, i, n) {
            for (var o = [], r = e[i]; r && 9 !== r.nodeType && (n === t || 1 !== r.nodeType || !B(r).is(n));)1 === r.nodeType && o.push(r), r = r[i];
            return o
        }, nth: function (e, t, i) {
            t = t || 1;
            for (var n = 0; e && (1 !== e.nodeType || ++n !== t); e = e[i]);
            return e
        }, sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var mt = / jQuery\d+="(?:\d+|null)"/g, gt = /^\s+/, _t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, yt = /<tbody/i, bt = /<|&#?\w+;/, wt = /<(?:script|object|embed|option|style)/i, At = /checked\s*(?:[^=]|=\s*.checked.)/i, Ct = /\/(java|ecma)script/i, Tt = /^\s*<!(?:\[CDATA\[|\-\-)/, St = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    };
    St.optgroup = St.option, St.tbody = St.tfoot = St.colgroup = St.caption = St.thead, St.th = St.td, B.support.htmlSerialize || (St._default = [1, "div<div>", "</div>"]), B.fn.extend({
        text: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                var i = B(this);
                i.text(e.call(this, t, i.text()))
            }) : "object" != typeof e && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || P).createTextNode(e)) : B.text(this)
        }, wrapAll: function (e) {
            if (B.isFunction(e))return this.each(function (t) {
                B(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                B(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = B(this), i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            return this.each(function () {
                B(this).wrapAll(e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                B.nodeName(this, "body") || B(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = B(arguments[0]);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode)return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, B(arguments[0]).toArray()), e
            }
        }, remove: function (e, t) {
            for (var i, n = 0; null != (i = this[n]); n++)(!e || B.filter(e, [i]).length) && (t || 1 !== i.nodeType || (B.cleanData(i.getElementsByTagName("*")), B.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)for (1 === e.nodeType && B.cleanData(e.getElementsByTagName("*")); e.firstChild;)e.removeChild(e.firstChild);
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return B.clone(this, e, t)
            })
        }, html: function (e) {
            if (e === t)return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(mt, "") : null;
            if ("string" != typeof e || wt.test(e) || !B.support.leadingWhitespace && gt.test(e) || St[(vt.exec(e) || ["", ""])[1].toLowerCase()])B.isFunction(e) ? this.each(function (t) {
                var i = B(this);
                i.html(e.call(this, t, i.html()))
            }) : this.empty().append(e); else {
                e = e.replace(_t, "<$1></$2>");
                try {
                    for (var i = 0, n = this.length; n > i; i++)1 === this[i].nodeType && (B.cleanData(this[i].getElementsByTagName("*")), this[i].innerHTML = e)
                } catch (o) {
                    this.empty().append(e)
                }
            }
            return this
        }, replaceWith: function (e) {
            return this[0] && this[0].parentNode ? B.isFunction(e) ? this.each(function (t) {
                var i = B(this), n = i.html();
                i.replaceWith(e.call(this, t, n))
            }) : ("string" != typeof e && (e = B(e).detach()), this.each(function () {
                var t = this.nextSibling, i = this.parentNode;
                B(this).remove(), t ? B(t).before(e) : B(i).append(e)
            })) : this.length ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e) : this
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, i, n) {
            var o, r, a, s, l = e[0], c = [];
            if (!B.support.checkClone && 3 === arguments.length && "string" == typeof l && At.test(l))return this.each(function () {
                B(this).domManip(e, i, n, !0)
            });
            if (B.isFunction(l))return this.each(function (o) {
                var r = B(this);
                e[0] = l.call(this, o, i ? r.html() : t), r.domManip(e, i, n)
            });
            if (this[0]) {
                if (s = l && l.parentNode, o = B.support.parentNode && s && 11 === s.nodeType && s.childNodes.length === this.length ? {fragment: s} : B.buildFragment(e, this, c), a = o.fragment, r = 1 === a.childNodes.length ? a = a.firstChild : a.firstChild) {
                    i = i && B.nodeName(r, "tr");
                    for (var d = 0, u = this.length, f = u - 1; u > d; d++)n.call(i ? p(this[d], r) : this[d], o.cacheable || u > 1 && f > d ? B.clone(a, !0, !0) : a)
                }
                c.length && B.each(c, v)
            }
            return this
        }
    }), B.buildFragment = function (e, t, i) {
        var n, o, r, a;
        return t && t[0] && (a = t[0].ownerDocument || t[0]), a.createDocumentFragment || (a = P), 1 === e.length && "string" == typeof e[0] && 512 > e[0].length && a === P && "<" === e[0].charAt(0) && !wt.test(e[0]) && (B.support.checkClone || !At.test(e[0])) && (o = !0, r = B.fragments[e[0]], r && 1 !== r && (n = r)), n || (n = a.createDocumentFragment(), B.clean(e, a, n, i)), o && (B.fragments[e[0]] = r ? n : 1), {
            fragment: n,
            cacheable: o
        }
    }, B.fragments = {}, B.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        B.fn[e] = function (i) {
            var n = [], o = B(i), r = 1 === this.length && this[0].parentNode;
            if (r && 11 === r.nodeType && 1 === r.childNodes.length && 1 === o.length)return o[t](this[0]), this;
            for (var a = 0, s = o.length; s > a; a++) {
                var l = (a > 0 ? this.clone(!0) : this).get();
                B(o[a])[t](l), n = n.concat(l)
            }
            return this.pushStack(n, e, o.selector)
        }
    }), B.extend({
        clone: function (e, t, i) {
            var n, o, r, a = e.cloneNode(!0);
            if (!(B.support.noCloneEvent && B.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || B.isXMLDoc(e)))for (h(e, a), n = m(e), o = m(a), r = 0; n[r]; ++r)o[r] && h(n[r], o[r]);
            if (t && (f(e, a), i))for (n = m(e), o = m(a), r = 0; n[r]; ++r)f(n[r], o[r]);
            return n = o = null, a
        }, clean: function (e, i, n, o) {
            var r;
            i = i || P, i.createElement === t && (i = i.ownerDocument || i[0] && i[0].ownerDocument || P);
            for (var a, s, l = [], c = 0; null != (s = e[c]); c++)if ("number" == typeof s && (s += ""), s) {
                if ("string" == typeof s)if (bt.test(s)) {
                    s = s.replace(_t, "<$1></$2>");
                    var d = (vt.exec(s) || ["", ""])[1].toLowerCase(), u = St[d] || St._default, p = u[0], f = i.createElement("div");
                    for (f.innerHTML = u[1] + s + u[2]; p--;)f = f.lastChild;
                    if (!B.support.tbody) {
                        var h = yt.test(s), m = "table" !== d || h ? "<table>" !== u[1] || h ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes;
                        for (a = m.length - 1; a >= 0; --a)B.nodeName(m[a], "tbody") && !m[a].childNodes.length && m[a].parentNode.removeChild(m[a])
                    }
                    !B.support.leadingWhitespace && gt.test(s) && f.insertBefore(i.createTextNode(gt.exec(s)[0]), f.firstChild), s = f.childNodes
                } else s = i.createTextNode(s);
                var g;
                if (!B.support.appendChecked)if (s[0] && "number" == typeof(g = s.length))for (a = 0; g > a; a++)_(s[a]); else _(s);
                s.nodeType ? l.push(s) : l = B.merge(l, s)
            }
            if (n)for (r = function (e) {
                return !e.type || Ct.test(e.type)
            }, c = 0; l[c]; c++)if (!o || !B.nodeName(l[c], "script") || l[c].type && "text/javascript" !== l[c].type.toLowerCase()) {
                if (1 === l[c].nodeType) {
                    var v = B.grep(l[c].getElementsByTagName("script"), r);
                    l.splice.apply(l, [c + 1, 0].concat(v))
                }
                n.appendChild(l[c])
            } else o.push(l[c].parentNode ? l[c].parentNode.removeChild(l[c]) : l[c]);
            return l
        }, cleanData: function (e) {
            for (var t, i, n, o = B.cache, r = B.expando, a = B.event.special, s = B.support.deleteExpando, l = 0; null != (n = e[l]); l++)if ((!n.nodeName || !B.noData[n.nodeName.toLowerCase()]) && (i = n[B.expando])) {
                if (t = o[i] && o[i][r], t && t.events) {
                    for (var c in t.events)a[c] ? B.event.remove(n, c) : B.removeEvent(n, c, t.handle);
                    t.handle && (t.handle.elem = null)
                }
                s ? delete n[B.expando] : n.removeAttribute && n.removeAttribute(B.expando), delete o[i]
            }
        }
    });
    var kt, xt, Nt, Mt = /alpha\([^)]*\)/i, Dt = /opacity=([^)]*)/, Lt = /([A-Z]|^ms)/g, Ft = /^-?\d+(?:px)?$/i, Pt = /^-?\d/, Et = /^([\-+])=([\-+.\de]+)/, Ut = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Bt = ["Left", "Right"], It = ["Top", "Bottom"];
    B.fn.css = function (e, i) {
        return 2 === arguments.length && i === t ? this : B.access(this, e, i, !0, function (e, i, n) {
            return n !== t ? B.style(e, i, n) : B.css(e, i)
        })
    }, B.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = kt(e, "opacity", "opacity");
                        return "" === i ? "1" : i
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": B.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, i, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s = B.camelCase(i), l = e.style, c = B.cssHooks[s];
                if (i = B.cssProps[s] || s, n === t)return c && "get"in c && (r = c.get(e, !1, o)) !== t ? r : l[i];
                if (a = typeof n, "string" === a && (r = Et.exec(n)) && (n = +(r[1] + 1) * +r[2] + parseFloat(B.css(e, i)), a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || B.cssNumber[s] || (n += "px"), c && "set"in c && (n = c.set(e, n)) === t)))try {
                    l[i] = n
                } catch (d) {
                }
            }
        },
        css: function (e, i, n) {
            var o, r;
            return i = B.camelCase(i), r = B.cssHooks[i], i = B.cssProps[i] || i, "cssFloat" === i && (i = "float"), r && "get"in r && (o = r.get(e, !0, n)) !== t ? o : kt ? kt(e, i) : t
        },
        swap: function (e, t, i) {
            var n = {};
            for (var o in t)n[o] = e.style[o], e.style[o] = t[o];
            i.call(e);
            for (o in t)e.style[o] = n[o]
        }
    }), B.curCSS = B.css, B.each(["height", "width"], function (e, i) {
        B.cssHooks[i] = {
            get: function (e, n, o) {
                var r;
                return n ? 0 !== e.offsetWidth ? y(e, i, o) : (B.swap(e, Ut, function () {
                    r = y(e, i, o)
                }), r) : t
            }, set: function (e, i) {
                return Ft.test(i) ? (i = parseFloat(i), i >= 0 ? i + "px" : t) : i
            }
        }
    }), B.support.opacity || (B.cssHooks.opacity = {
        get: function (e, t) {
            return Dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        }, set: function (e, t) {
            var i = e.style, n = e.currentStyle, o = B.isNaN(t) ? "" : "alpha(opacity=" + 100 * t + ")", r = n && n.filter || i.filter || "";
            i.zoom = 1, t >= 1 && "" === B.trim(r.replace(Mt, "")) && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = Mt.test(r) ? r.replace(Mt, o) : r + " " + o)
        }
    }), B(function () {
        B.support.reliableMarginRight || (B.cssHooks.marginRight = {
            get: function (e, t) {
                var i;
                return B.swap(e, {display: "inline-block"}, function () {
                    i = t ? kt(e, "margin-right", "marginRight") : e.style.marginRight
                }), i
            }
        })
    }), P.defaultView && P.defaultView.getComputedStyle && (xt = function (e, i) {
        var n, o, r;
        return i = i.replace(Lt, "-$1").toLowerCase(), (o = e.ownerDocument.defaultView) ? ((r = o.getComputedStyle(e, null)) && (n = r.getPropertyValue(i), "" !== n || B.contains(e.ownerDocument.documentElement, e) || (n = B.style(e, i))), n) : t
    }), P.documentElement.currentStyle && (Nt = function (e, t) {
        var i, n = e.currentStyle && e.currentStyle[t], o = e.runtimeStyle && e.runtimeStyle[t], r = e.style;
        return !Ft.test(n) && Pt.test(n) && (i = r.left, o && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : n || 0, n = r.pixelLeft + "px", r.left = i, o && (e.runtimeStyle.left = o)), "" === n ? "auto" : n
    }), kt = xt || Nt, B.expr && B.expr.filters && (B.expr.filters.hidden = function (e) {
        var t = e.offsetWidth, i = e.offsetHeight;
        return 0 === t && 0 === i || !B.support.reliableHiddenOffsets && "none" === (e.style.display || B.css(e, "display"))
    }, B.expr.filters.visible = function (e) {
        return !B.expr.filters.hidden(e)
    });
    var Ot, Rt, $t = /%20/g, Ht = /\[\]$/, jt = /\r?\n/g, Wt = /#.*$/, qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Vt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Gt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, zt = /^(?:GET|HEAD)$/, Yt = /^\/\//, Qt = /\?/, Xt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Kt = /^(?:select|textarea)/i, Jt = /\s+/, Zt = /([?&])_=[^&]*/, ei = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, ti = B.fn.load, ii = {}, ni = {}, oi = ["*/"] + ["*"];
    try {
        Ot = U.href
    } catch (ri) {
        Ot = P.createElement("a"), Ot.href = "", Ot = Ot.href
    }
    Rt = ei.exec(Ot.toLowerCase()) || [], B.fn.extend({
        load: function (e, i, n) {
            if ("string" != typeof e && ti)return ti.apply(this, arguments);
            if (!this.length)return this;
            var o = e.indexOf(" ");
            if (o >= 0) {
                var r = e.slice(o, e.length);
                e = e.slice(0, o)
            }
            var a = "GET";
            i && (B.isFunction(i) ? (n = i, i = t) : "object" == typeof i && (i = B.param(i, B.ajaxSettings.traditional), a = "POST"));
            var s = this;
            return B.ajax({
                url: e, type: a, dataType: "html", data: i, complete: function (e, t, i) {
                    i = e.responseText, e.isResolved() && (e.done(function (e) {
                        i = e
                    }), s.html(r ? B("<div>").append(i.replace(Xt, "")).find(r) : i)), n && s.each(n, [i, t, e])
                }
            }), this
        }, serialize: function () {
            return B.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? B.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Kt.test(this.nodeName) || Vt.test(this.type))
            }).map(function (e, t) {
                var i = B(this).val();
                return null == i ? null : B.isArray(i) ? B.map(i, function (e) {
                    return {name: t.name, value: e.replace(jt, "\r\n")}
                }) : {name: t.name, value: i.replace(jt, "\r\n")}
            }).get()
        }
    }), B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        B.fn[t] = function (e) {
            return this.bind(t, e)
        }
    }), B.each(["get", "post"], function (e, i) {
        B[i] = function (e, n, o, r) {
            return B.isFunction(n) && (r = r || o, o = n, n = t), B.ajax({
                type: i,
                url: e,
                data: n,
                success: o,
                dataType: r
            })
        }
    }), B.extend({
        getScript: function (e, i) {
            return B.get(e, t, i, "script")
        },
        getJSON: function (e, t, i) {
            return B.get(e, t, i, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? A(e, B.ajaxSettings) : (t = e, e = B.ajaxSettings), A(e, t), e
        },
        ajaxSettings: {
            url: Ot,
            isLocal: Gt.test(Rt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": oi
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": B.parseJSON, "text xml": B.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: b(ii),
        ajaxTransport: b(ni),
        ajax: function (e, i) {
            function n(e, i, n, a) {
                if (2 !== b) {
                    b = 2, l && clearTimeout(l), s = t, r = a || "", A.readyState = e > 0 ? 4 : 0;
                    var c, u, v, y, w, C = i, k = n ? T(p, A, n) : t;
                    if (e >= 200 && 300 > e || 304 === e)if (p.ifModified && ((y = A.getResponseHeader("Last-Modified")) && (B.lastModified[o] = y), (w = A.getResponseHeader("Etag")) && (B.etag[o] = w)), 304 === e)C = "notmodified", c = !0; else try {
                        u = S(p, k), C = "success", c = !0
                    } catch (x) {
                        C = "parsererror", v = x
                    } else v = C, (!C || e) && (C = "error", 0 > e && (e = 0));
                    A.status = e, A.statusText = "" + (i || C), c ? m.resolveWith(f, [u, C, A]) : m.rejectWith(f, [A, C, v]), A.statusCode(_), _ = t, d && h.trigger("ajax" + (c ? "Success" : "Error"), [A, p, c ? u : v]), g.resolveWith(f, [A, C]), d && (h.trigger("ajaxComplete", [A, p]), --B.active || B.event.trigger("ajaxStop"))
                }
            }

            "object" == typeof e && (i = e, e = t), i = i || {};
            var o, r, a, s, l, c, d, u, p = B.ajaxSetup({}, i), f = p.context || p, h = f !== p && (f.nodeType || f instanceof B) ? B(f) : B.event, m = B.Deferred(), g = B._Deferred(), _ = p.statusCode || {}, v = {}, y = {}, b = 0, A = {
                readyState: 0,
                setRequestHeader: function (e, t) {
                    if (!b) {
                        var i = e.toLowerCase();
                        e = y[i] = y[i] || e, v[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return 2 === b ? r : null
                },
                getResponseHeader: function (e) {
                    var i;
                    if (2 === b) {
                        if (!a)for (a = {}; i = qt.exec(r);)a[i[1].toLowerCase()] = i[2];
                        i = a[e.toLowerCase()]
                    }
                    return i === t ? null : i
                },
                overrideMimeType: function (e) {
                    return b || (p.mimeType = e), this
                },
                abort: function (e) {
                    return e = e || "abort", s && s.abort(e), n(0, e), this
                }
            };
            if (m.promise(A), A.success = A.done, A.error = A.fail, A.complete = g.done, A.statusCode = function (e) {
                    if (e) {
                        var t;
                        if (2 > b)for (t in e)_[t] = [_[t], e[t]]; else t = e[A.status], A.then(t, t)
                    }
                    return this
                }, p.url = ((e || p.url) + "").replace(Wt, "").replace(Yt, Rt[1] + "//"), p.dataTypes = B.trim(p.dataType || "*").toLowerCase().split(Jt), null == p.crossDomain && (c = ei.exec(p.url.toLowerCase()), p.crossDomain = !(!c || c[1] == Rt[1] && c[2] == Rt[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Rt[3] || ("http:" === Rt[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = B.param(p.data, p.traditional)), w(ii, p, i, A), 2 === b)return !1;
            if (d = p.global, p.type = p.type.toUpperCase(), p.hasContent = !zt.test(p.type), d && 0 === B.active++ && B.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Qt.test(p.url) ? "&" : "?") + p.data, delete p.data), o = p.url, p.cache === !1)) {
                var C = B.now(), k = p.url.replace(Zt, "$1_=" + C);
                p.url = k + (k === p.url ? (Qt.test(p.url) ? "&" : "?") + "_=" + C : "")
            }
            (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && A.setRequestHeader("Content-Type", p.contentType), p.ifModified && (o = o || p.url, B.lastModified[o] && A.setRequestHeader("If-Modified-Since", B.lastModified[o]), B.etag[o] && A.setRequestHeader("If-None-Match", B.etag[o])), A.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + oi + "; q=0.01" : "") : p.accepts["*"]);
            for (u in p.headers)A.setRequestHeader(u, p.headers[u]);
            if (p.beforeSend && (p.beforeSend.call(f, A, p) === !1 || 2 === b))return A.abort(), !1;
            for (u in{success: 1, error: 1, complete: 1})A[u](p[u]);
            if (s = w(ni, p, i, A)) {
                A.readyState = 1, d && h.trigger("ajaxSend", [A, p]), p.async && p.timeout > 0 && (l = setTimeout(function () {
                    A.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, s.send(v, n)
                } catch (x) {
                    2 > b ? n(-1, x) : B.error(x)
                }
            } else n(-1, "No Transport");
            return A
        },
        param: function (e, i) {
            var n = [], o = function (e, t) {
                t = B.isFunction(t) ? t() : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (i === t && (i = B.ajaxSettings.traditional), B.isArray(e) || e.jquery && !B.isPlainObject(e))B.each(e, function () {
                o(this.name, this.value)
            }); else for (var r in e)C(r, e[r], i, o);
            return n.join("&").replace($t, "+")
        }
    }), B.extend({active: 0, lastModified: {}, etag: {}});
    var ai = B.now(), si = /(\=)\?(&|$)|\?\?/i;
    B.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return B.expando + "_" + ai++
        }
    }), B.ajaxPrefilter("json jsonp", function (t, i, n) {
        var o = "application/x-www-form-urlencoded" === t.contentType && "string" == typeof t.data;
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (si.test(t.url) || o && si.test(t.data))) {
            var r, a = t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s = e[a], l = t.url, c = t.data, d = "$1" + a + "$2";
            return t.jsonp !== !1 && (l = l.replace(si, d), t.url === l && (o && (c = c.replace(si, d)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + a))), t.url = l, t.data = c, e[a] = function (e) {
                r = [e]
            }, n.always(function () {
                e[a] = s, r && B.isFunction(s) && e[a](r[0])
            }), t.converters["script json"] = function () {
                return r || B.error(a + " was not called"), r[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), B.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                return B.globalEval(e), e
            }
        }
    }), B.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), B.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = P.head || P.getElementsByTagName("head")[0] || P.documentElement;
            return {
                send: function (o, r) {
                    i = P.createElement("script"), i.async = "async", e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, o) {
                        (o || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = t, o || r(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                }, abort: function () {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    var li, ci = e.ActiveXObject ? function () {
        for (var e in li)li[e](0, 1)
    } : !1, di = 0;
    B.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && k() || x()
    } : k, function (e) {
        B.extend(B.support, {ajax: !!e, cors: !!e && "withCredentials"in e})
    }(B.ajaxSettings.xhr()), B.support.ajax && B.ajaxTransport(function (i) {
        if (!i.crossDomain || B.support.cors) {
            var n;
            return {
                send: function (o, r) {
                    var a, s, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)for (s in i.xhrFields)l[s] = i.xhrFields[s];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o)l.setRequestHeader(s, o[s])
                    } catch (c) {
                    }
                    l.send(i.hasContent && i.data || null), n = function (e, o) {
                        var s, c, d, u, p;
                        try {
                            if (n && (o || 4 === l.readyState))if (n = t, a && (l.onreadystatechange = B.noop, ci && delete li[a]), o)4 !== l.readyState && l.abort(); else {
                                s = l.status, d = l.getAllResponseHeaders(), u = {}, p = l.responseXML, p && p.documentElement && (u.xml = p), u.text = l.responseText;
                                try {
                                    c = l.statusText
                                } catch (f) {
                                    c = ""
                                }
                                s || !i.isLocal || i.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
                            }
                        } catch (h) {
                            o || r(-1, h)
                        }
                        u && r(s, c, u, d)
                    }, i.async && 4 !== l.readyState ? (a = ++di, ci && (li || (li = {}, B(e).unload(ci)), li[a] = n), l.onreadystatechange = n) : n()
                }, abort: function () {
                    n && n(0, 1)
                }
            }
        }
    });
    var ui, pi, fi, hi, mi = {}, gi = /^(?:toggle|show|hide)$/, _i = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, vi = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    B.fn.extend({
        show: function (e, t, i) {
            var n, o;
            if (e || 0 === e)return this.animate(D("show", 3), e, t, i);
            for (var r = 0, a = this.length; a > r; r++)n = this[r], n.style && (o = n.style.display, B._data(n, "olddisplay") || "none" !== o || (o = n.style.display = ""), "" === o && "none" === B.css(n, "display") && B._data(n, "olddisplay", L(n.nodeName)));
            for (r = 0; a > r; r++)n = this[r], n.style && (o = n.style.display, ("" === o || "none" === o) && (n.style.display = B._data(n, "olddisplay") || ""));
            return this
        }, hide: function (e, t, i) {
            if (e || 0 === e)return this.animate(D("hide", 3), e, t, i);
            for (var n = 0, o = this.length; o > n; n++)if (this[n].style) {
                var r = B.css(this[n], "display");
                "none" === r || B._data(this[n], "olddisplay") || B._data(this[n], "olddisplay", r)
            }
            for (n = 0; o > n; n++)this[n].style && (this[n].style.display = "none");
            return this
        }, _toggle: B.fn.toggle, toggle: function (e, t, i) {
            var n = "boolean" == typeof e;
            return B.isFunction(e) && B.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || n ? this.each(function () {
                var t = n ? e : B(this).is(":hidden");
                B(this)[t ? "show" : "hide"]()
            }) : this.animate(D("toggle", 3), e, t, i), this
        }, fadeTo: function (e, t, i, n) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (e, t, i, n) {
            var o = B.speed(t, i, n);
            return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = B.extend({}, e), this[o.queue === !1 ? "each" : "queue"](function () {
                o.queue === !1 && B._mark(this);
                var t, i, n, r, a, s, l, c, d, u = B.extend({}, o), p = 1 === this.nodeType, f = p && B(this).is(":hidden");
                u.animatedProperties = {};
                for (n in e) {
                    if (t = B.camelCase(n), n !== t && (e[t] = e[n], delete e[n]), i = e[t], B.isArray(i) ? (u.animatedProperties[t] = i[1], i = e[t] = i[0]) : u.animatedProperties[t] = u.specialEasing && u.specialEasing[t] || u.easing || "swing", "hide" === i && f || "show" === i && !f)return u.complete.call(this);
                    !p || "height" !== t && "width" !== t || (u.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === B.css(this, "display") && "none" === B.css(this, "float") && (B.support.inlineBlockNeedsLayout ? (r = L(this.nodeName), "inline" === r ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                null != u.overflow && (this.style.overflow = "hidden");
                for (n in e)a = new B.fx(this, u, n), i = e[n], gi.test(i) ? a["toggle" === i ? f ? "show" : "hide" : i]() : (s = _i.exec(i), l = a.cur(), s ? (c = parseFloat(s[2]), d = s[3] || (B.cssNumber[n] ? "" : "px"), "px" !== d && (B.style(this, n, (c || 1) + d), l = (c || 1) / a.cur() * l, B.style(this, n, l + d)), s[1] && (c = ("-=" === s[1] ? -1 : 1) * c + l), a.custom(l, c, d)) : a.custom(l, i, ""));
                return !0
            }))
        }, stop: function (e, t) {
            return e && this.queue([]), this.each(function () {
                var e = B.timers, i = e.length;
                for (t || B._unmark(!0, this); i--;)e[i].elem === this && (t && e[i](!0), e.splice(i, 1))
            }), t || this.dequeue(), this
        }
    }), B.each({
        slideDown: D("show", 1),
        slideUp: D("hide", 1),
        slideToggle: D("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        B.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), B.extend({
        speed: function (e, t, i) {
            var n = e && "object" == typeof e ? B.extend({}, e) : {
                complete: i || !i && t || B.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !B.isFunction(t) && t
            };
            return n.duration = B.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in B.fx.speeds ? B.fx.speeds[n.duration] : B.fx.speeds._default, n.old = n.complete, n.complete = function (e) {
                B.isFunction(n.old) && n.old.call(this), n.queue !== !1 ? B.dequeue(this) : e !== !1 && B._unmark(this)
            }, n
        }, easing: {
            linear: function (e, t, i, n) {
                return i + n * e
            }, swing: function (e, t, i, n) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * n + i
            }
        }, timers: [], fx: function (e, t, i) {
            this.options = t, this.elem = e, this.prop = i, t.orig = t.orig || {}
        }
    }), B.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (B.fx.step[this.prop] || B.fx.step._default)(this)
        }, cur: function () {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop]))return this.elem[this.prop];
            var e, t = B.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        }, custom: function (e, t, i) {
            function n(e) {
                return o.step(e)
            }

            var o = this, r = B.fx;
            this.startTime = hi || N(), this.start = e, this.end = t, this.unit = i || this.unit || (B.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, n.elem = this.elem, n() && B.timers.push(n) && !fi && (fi = setInterval(r.tick, r.interval))
        }, show: function () {
            this.options.orig[this.prop] = B.style(this.elem, this.prop), this.options.show = !0, this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), B(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = B.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (e) {
            var t, i, n = hi || N(), o = !0, r = this.elem, a = this.options;
            if (e || n >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties)a.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    if (null == a.overflow || B.support.shrinkWrapBlocks || B.each(["", "X", "Y"], function (e, t) {
                            r.style["overflow" + t] = a.overflow[e]
                        }), a.hide && B(r).hide(), a.hide || a.show)for (var s in a.animatedProperties)B.style(r, s, a.orig[s]);
                    a.complete.call(r)
                }
                return !1
            }
            return 1 / 0 == a.duration ? this.now = n : (i = n - this.startTime, this.state = i / a.duration, this.pos = B.easing[a.animatedProperties[this.prop]](this.state, i, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, B.extend(B.fx, {
        tick: function () {
            for (var e = B.timers, t = 0; e.length > t; ++t)e[t]() || e.splice(t--, 1);
            e.length || B.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(fi), fi = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (e) {
                B.style(e.elem, "opacity", e.now)
            }, _default: function (e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = ("width" === e.prop || "height" === e.prop ? Math.max(0, e.now) : e.now) + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), B.expr && B.expr.filters && (B.expr.filters.animated = function (e) {
        return B.grep(B.timers, function (t) {
            return e === t.elem
        }).length
    });
    var yi = /^t(?:able|d|h)$/i, bi = /^(?:body|html)$/i;
    B.fn.offset = "getBoundingClientRect"in P.documentElement ? function (e) {
        var t, i = this[0];
        if (e)return this.each(function (t) {
            B.offset.setOffset(this, e, t)
        });
        if (!i || !i.ownerDocument)return null;
        if (i === i.ownerDocument.body)return B.offset.bodyOffset(i);
        try {
            t = i.getBoundingClientRect()
        } catch (n) {
        }
        var o = i.ownerDocument, r = o.documentElement;
        if (!t || !B.contains(r, i))return t ? {top: t.top, left: t.left} : {top: 0, left: 0};
        var a = o.body, s = F(o), l = r.clientTop || a.clientTop || 0, c = r.clientLeft || a.clientLeft || 0, d = s.pageYOffset || B.support.boxModel && r.scrollTop || a.scrollTop, u = s.pageXOffset || B.support.boxModel && r.scrollLeft || a.scrollLeft, p = t.top + d - l, f = t.left + u - c;
        return {top: p, left: f}
    } : function (e) {
        var t = this[0];
        if (e)return this.each(function (t) {
            B.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument)return null;
        if (t === t.ownerDocument.body)return B.offset.bodyOffset(t);
        B.offset.initialize();
        for (var i, n = t.offsetParent, o = t, r = t.ownerDocument, a = r.documentElement, s = r.body, l = r.defaultView, c = l ? l.getComputedStyle(t, null) : t.currentStyle, d = t.offsetTop, u = t.offsetLeft; (t = t.parentNode) && t !== s && t !== a && (!B.offset.supportsFixedPosition || "fixed" !== c.position);)i = l ? l.getComputedStyle(t, null) : t.currentStyle, d -= t.scrollTop, u -= t.scrollLeft, t === n && (d += t.offsetTop, u += t.offsetLeft, !B.offset.doesNotAddBorder || B.offset.doesAddBorderForTableAndCells && yi.test(t.nodeName) || (d += parseFloat(i.borderTopWidth) || 0, u += parseFloat(i.borderLeftWidth) || 0), o = n, n = t.offsetParent), B.offset.subtractsBorderForOverflowNotVisible && "visible" !== i.overflow && (d += parseFloat(i.borderTopWidth) || 0, u += parseFloat(i.borderLeftWidth) || 0), c = i;
        return ("relative" === c.position || "static" === c.position) && (d += s.offsetTop, u += s.offsetLeft), B.offset.supportsFixedPosition && "fixed" === c.position && (d += Math.max(a.scrollTop, s.scrollTop), u += Math.max(a.scrollLeft, s.scrollLeft)), {
            top: d,
            left: u
        }
    }, B.offset = {
        initialize: function () {
            var e, t, i, n = P.body, o = P.createElement("div"), r = parseFloat(B.css(n, "marginTop")) || 0, a = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            B.extend(o.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), o.innerHTML = a, n.insertBefore(o, n.firstChild), e = o.firstChild, t = e.firstChild, i = e.nextSibling.firstChild.firstChild, this.doesNotAddBorder = 5 !== t.offsetTop, this.doesAddBorderForTableAndCells = 5 === i.offsetTop, t.style.position = "fixed", t.style.top = "20px", this.supportsFixedPosition = 20 === t.offsetTop || 15 === t.offsetTop, t.style.position = t.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", this.subtractsBorderForOverflowNotVisible = -5 === t.offsetTop, this.doesNotIncludeMarginInBodyOffset = n.offsetTop !== r, n.removeChild(o), B.offset.initialize = B.noop
        }, bodyOffset: function (e) {
            var t = e.offsetTop, i = e.offsetLeft;
            return B.offset.initialize(), B.offset.doesNotIncludeMarginInBodyOffset && (t += parseFloat(B.css(e, "marginTop")) || 0, i += parseFloat(B.css(e, "marginLeft")) || 0), {
                top: t,
                left: i
            }
        }, setOffset: function (e, t, i) {
            var n = B.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var o, r, a = B(e), s = a.offset(), l = B.css(e, "top"), c = B.css(e, "left"), d = ("absolute" === n || "fixed" === n) && B.inArray("auto", [l, c]) > -1, u = {}, p = {};
            d ? (p = a.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), B.isFunction(t) && (t = t.call(e, i, s)), null != t.top && (u.top = t.top - s.top + o), null != t.left && (u.left = t.left - s.left + r), "using"in t ? t.using.call(e, u) : a.css(u)
        }
    }, B.fn.extend({
        position: function () {
            if (!this[0])return null;
            var e = this[0], t = this.offsetParent(), i = this.offset(), n = bi.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return i.top -= parseFloat(B.css(e, "marginTop")) || 0, i.left -= parseFloat(B.css(e, "marginLeft")) || 0, n.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0, n.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0, {
                top: i.top - n.top,
                left: i.left - n.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || P.body; e && !bi.test(e.nodeName) && "static" === B.css(e, "position");)e = e.offsetParent;
                return e
            })
        }
    }), B.each(["Left", "Top"], function (e, i) {
        var n = "scroll" + i;
        B.fn[n] = function (i) {
            var o, r;
            return i === t ? (o = this[0]) ? (r = F(o), r ? "pageXOffset"in r ? r[e ? "pageYOffset" : "pageXOffset"] : B.support.boxModel && r.document.documentElement[n] || r.document.body[n] : o[n]) : null : this.each(function () {
                r = F(this), r ? r.scrollTo(e ? B(r).scrollLeft() : i, e ? i : B(r).scrollTop()) : this[n] = i
            })
        }
    }), B.each(["Height", "Width"], function (e, i) {
        var n = i.toLowerCase();
        B.fn["inner" + i] = function () {
            var e = this[0];
            return e && e.style ? parseFloat(B.css(e, n, "padding")) : null
        }, B.fn["outer" + i] = function (e) {
            var t = this[0];
            return t && t.style ? parseFloat(B.css(t, n, e ? "margin" : "border")) : null
        }, B.fn[n] = function (e) {
            var o = this[0];
            if (!o)return null == e ? null : this;
            if (B.isFunction(e))return this.each(function (t) {
                var i = B(this);
                i[n](e.call(this, t, i[n]()))
            });
            if (B.isWindow(o)) {
                var r = o.document.documentElement["client" + i], a = o.document.body;
                return "CSS1Compat" === o.document.compatMode && r || a && a["client" + i] || r
            }
            if (9 === o.nodeType)return Math.max(o.documentElement["client" + i], o.body["scroll" + i], o.documentElement["scroll" + i], o.body["offset" + i], o.documentElement["offset" + i]);
            if (e === t) {
                var s = B.css(o, n), l = parseFloat(s);
                return B.isNaN(l) ? s : l
            }
            return this.css(n, "string" == typeof e ? e : e + "px")
        }
    }), e.jQuery = e.$ = B
})(window), String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^s+|s+$/g, "")
}), String.prototype.escapeHTML = function () {
    var e = document.createElement("div"), t = document.createTextNode(this);
    return e.appendChild(t), e.innerHTML
}, String.prototype.unescapeHTML = function () {
    var e = document.createElement("div");
    return e.innerHTML = this.stripTags(), e.childNodes[0].nodeValue
}, Date.now || (Date.now = function () {
    return (new Date).getTime()
}), Array.prototype.indexOf = function (e) {
    for (var t = 0; this.length > t; t++)if (this[t] == e)return t;
    return -1
}, String.prototype.format = function () {
    if (0 == arguments.length)return this;
    for (var e = this, t = 0; arguments.length > t; t++)e = e.replace(RegExp("\\{" + t + "\\}", "g"), arguments[t]);
    return e
};
var dateFormat = function () {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g, i = /[^-+\dA-Z]/g, n = function (e, t) {
        for (e += "", t = t || 2; t > e.length;)e = "0" + e;
        return e
    };
    return function (o, r, a) {
        var s = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(o) || /\d/.test(o) || (r = o, o = void 0), o = o ? new Date(o) : new Date, isNaN(o))throw SyntaxError("invalid date");
        r = (s.masks[r] || r || s.masks["default"]) + "", "UTC:" == r.slice(0, 4) && (r = r.slice(4), a = !0);
        var l = a ? "getUTC" : "get", c = o[l + "Date"](), d = o[l + "Day"](), u = o[l + "Month"](), p = o[l + "FullYear"](), f = o[l + "Hours"](), h = o[l + "Minutes"](), m = o[l + "Seconds"](), g = o[l + "Milliseconds"](), _ = a ? 0 : o.getTimezoneOffset(), v = {
            d: c,
            dd: n(c),
            ddd: s.i18n.dayNames[d],
            dddd: s.i18n.dayNames[d + 7],
            m: u + 1,
            mm: n(u + 1),
            mmm: s.i18n.monthNames[u],
            mmmm: s.i18n.monthNames[u + 12],
            yy: (p + "").slice(2),
            yyyy: p,
            h: f % 12 || 12,
            hh: n(f % 12 || 12),
            H: f,
            HH: n(f),
            M: h,
            MM: n(h),
            s: m,
            ss: n(m),
            l: n(g, 3),
            L: n(g > 99 ? Math.round(g / 10) : g),
            t: 12 > f ? "a" : "p",
            tt: 12 > f ? "am" : "pm",
            T: 12 > f ? "A" : "P",
            TT: 12 > f ? "AM" : "PM",
            Z: a ? "UTC" : ((o + "").match(t) || [""]).pop().replace(i, ""),
            o: (_ > 0 ? "-" : "+") + n(100 * Math.floor(Math.abs(_) / 60) + Math.abs(_) % 60, 4),
            S: ["th", "st", "nd", "rd"][c % 10 > 3 ? 0 : (10 != c % 100 - c % 10) * c % 10]
        };
        return r.replace(e, function (e) {
            return e in v ? v[e] : e.slice(1, e.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "mm/dd/yyyy HH:MM",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    middleDate: "mm/dd/yyyy"
}, dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Date.prototype.format = function (e, t) {
    return dateFormat(this, e, t)
};
var $log = function () {
    function e(e) {
        return e instanceof Error && (e.stack ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
    }

    function t(t) {
        var i = window.console || {}, n = i[t] || i.log || function () {
            };
        return n.apply ? function () {
            var t = [];
            for (var o in arguments)t.push(e(arguments[o]));
            return n.apply(i, t)
        } : function (e, t) {
            n(e, t)
        }
    }

    return {log: t("log"), warn: t("warn"), info: t("info"), error: t("error"), debug: t("debug")}
}();
(function () {
    $.each(["debug", "error", "info", "log", "warn", "dir", "dirxml", "table", "trace", "assert", "count", "markTimeline", "profile", "profileEnd", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd", "group", "groupCollapsed", "groupEnd", "clear"], function (e, t) {
        console[t] = console[t] || console.log
    })
})(), function (e) {
    e.fn.clickAndDblClick = function (t) {
        return this.each(function () {
            var i = e.extend({}, e.fn.clickAndDblClick.Default, t || {}), n = this;
            do_click = function (e) {
                clearTimeout(i.timer), i.timer = setTimeout(function () {
                    i.oneclick.call(n, e)
                }, 300)
            }, do_dblclick = function (e) {
                clearTimeout(i.timer), i.dblclick.call(n, e)
            }, e(this).click(do_click).dblclick(do_dblclick)
        })
    }, e.fn.clickAndDblClick.Default = {timer: null, oneclick: e.noop, dblclick: e.noop}
}(jQuery), Airdroid.Util = {
    smallWindow: !1, cacheTpls: [], init: function () {
        $.support.cors = !0, this._checkUinUploadId = 1
    }, UUID: {
        uuid4: function () {
            return this._uuid(this.randomInt(), this.randomInt(), this.randomInt(), this.randomInt(), 4)
        }, _uuid: function (e, t, i, n, o) {
            for (var r = Array(36), a = [4294967295 & e, 4294905855 & t | (o || 4) << 12, 2147483648 | 1073741823 & i, 4294967295 & n], s = 0, l = 0; 4 > s; s++)for (var c = a[s], d = 0; 8 > d; d++) {
                (8 == l || 13 == l || 18 == l || 23 == l) && (r[l++] = "-");
                var u = 15 & c >>> 28;
                c = (268435455 & c) << 4, r[l++] = this.hex.charAt(u)
            }
            return r.join("")
        }, hex: "0123456789abcdef", randomInt: function () {
            return Math.floor(4294967296 * Math.random())
        }
    }, findUrlStrAndSetAsUrl: function (e) {
        var t = this, i = /((https?:\/\/)?(www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)))/gi;
        return e = e.replace(i, function (e) {
            return t.isValidMail(e) ? e : -1 !== e.indexOf("http") ? '<a href="' + e + '" target="_blank">' + e + "</a>" : '<a href="http://' + e + '" target="_blank">' + e + "</a>"
        })
    }, hasContextMenu: function () {
        var e = !0;
        return Airdroid.Config.isLiteVersion || this.checkUserLogin() || Airdroid.Runtime.QRNoAccount || (e = !1), e
    }, getLang: function (e, t) {
        return _.isUndefined(Airdroid.UsedLang) ? !1 : _.isUndefined(e) ? Airdroid.UsedLang : _.isUndefined(t) || _.isNull(t) || "" == t ? Airdroid.UsedLang[$.trim(e)] : Airdroid.UsedLang[$.trim(e)][$.trim(t)]
    }, createCssStyle: function (e) {
        if (document.all)window.cssFix = e, document.createStyleSheet("javascript:cssFix"); else {
            var t = document.createElement("style");
            t.type = "text/css", t.innerHTML = e, document.getElementsByTagName("HEAD").item(0).appendChild(t)
        }
    }, popupWindow: function (e) {
        e = $.extend({url: "./", width: 800, height: 600}, e);
        var t = e.url;
        e.top = e.top || (window.screen.availHeight - 30 - e.height) / 2, e.left = e.left || (window.screen.availWidth - 10 - e.width) / 2, delete e.url;
        var i = [];
        $.each(e, function (e, t) {
            i.push(e + "=" + t)
        }), window.open(t, "_blank", i.join(","))
    }, addParameterToURL: function (e, t) {
        return e ? e + (e.split("?")[1] ? "&" : "?") + $.param(t) + "&v=" + Airdroid.Config.version : ""
    }, getTemplate: function (e, t, i) {
        var n = "", o = Airdroid.Config.baseUri + "views/" + e + "/" + t + ".js";
        if (Airdroid.Config.isPublish)n = window.ajst["views/" + e + "/" + t + ".htm"](i); else {
            if (i || (i = {}), this.cacheTpls[o])var r = this.cacheTpls[o]; else var r = this.cacheTpls[o] = $.ajax({
                url: "./views/" + e + "/" + t + ".htm",
                async: !1,
                cache: !0
            }).responseText;
            n = _.template(r, i)
        }
        return n
    }, reload: function () {
        window.location.reload()
    }, IEPost: function (e, t, i, n, o) {
        var r = new XDomainRequest;
        r.open("post", e), r.onload = function () {
            if (1 == (o || !1))var e = r.responseText; else var e = $.parseJSON(r.responseText);
            _.isFunction(i) && i(e)
        };
        var a = function () {
            _.isFunction(n) && n(), console.log("IE post error")
        };
        r.onerror = a, r.ontimeout = a, r.onprogress = function () {
        }, r.timeout = 1e4, r.send(t)
    }, isValidMail: function (e) {
        var t = /^(?:[a-zA-Z0-9]+[_\-\+\.]?)*[a-zA-Z0-9]+@(?:([a-zA-Z0-9]+[_\-]?)*[a-zA-Z0-9]+\.)+([a-zA-Z]{2,})+$/;
        return t.test(e)
    }, getUrlParam: function (e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = "[\\?&]" + e + "=([^&#]*)", i = RegExp(t), n = i.exec(window.location.href);
        return null == n ? "" : n[1]
    }, isQTInstalled: function () {
        var e = !1;
        if (navigator.plugins && navigator.plugins.length)for (var t = 0; navigator.plugins.length > t; t++) {
            var i = navigator.plugins[t];
            i.name.indexOf("QuickTime") > -1 && (e = !0)
        } else"undefined" != typeof execScript && (qtObj = !1, execScript('on error resume next: qtObj = IsObject(CreateObject("QuickTimeCheckObject.QuickTimeCheck.1"))', "VBScript"), e = qtObj);
        return e
    }, detectCapsLock: function (e, t, i) {
        var e = e || window.event;
        e.target || e.srcElement;
        var n = e.keyCode || e.which, o = e.shiftKey || 16 == n || !1;
        n >= 65 && 90 >= n && !o || n >= 97 && 122 >= n && o ? _.isFunction(t) && t() : _.isFunction(i) && i()
    }, HTMLDecode: function (e) {
        return 0 == e.length ? "" : (e = e.replace(/&lt;/g, "<"), e = e.replace(/&gt;/g, ">"), e = e.replace(/&nbsp;/g, " "), e = e.replace(/&#39;/g, "'"), e = e.replace(/&#34;/g, '"'), e = e.replace(/&quot;/g, '"'), e = e.replace(/&amp;/g, "&"))
    }, getFileExt: function (e) {
        return -1 !== e.indexOf(".") ? e.replace(/.*[.]/, "").toLowerCase() : ""
    }, RGB2Hex: function (e) {
        for (var t = e.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","), i = "#", n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], o = 0; 3 > o; o++) {
            for (var r = null, a = t[o], s = []; a > 16;)r = a % 16, a = a / 16 >> 0, s.push(n[r]);
            s.push(n[a]), i += s.reverse().join("")
        }
        return i
    }, bytesToSize: function (e) {
        var t = ["Bytes", "KB", "MB", "GB", "TB"];
        if (0 == e)return "0 KB";
        var i = parseInt(Math.floor(Math.log(e) / Math.log(1024))), n = i > 2 ? 2 : 1, o = (e / Math.pow(1024, i)).toFixed(n);
        return (o + "").indexOf(".0") > -1 && (o = new Number(o).toFixed(0)), o + " " + t[i]
    }, trim: function (e) {
        return $.trim(e)
    }, isReturnDataError: function (e) {
        return void 0 == e || null == e || !_.isEmpty(e.err)
    }, filterOnlyNumber: function (e) {
        return e.replace(/[^0-9]/g, "")
    }, checkPhoneNumberMatch: function (e) {
        return !/[^-+#\*\d]/g.test(e)
    }, cloneObj: function (e) {
        return JSON.parse(JSON.stringify(e))
    }, easyEncode: function (e) {
        return encode64(e)
    }, easyDecode: function (e) {
        return decode64(decodeURIComponent(e))
    }, generateLikePercent: function (e, t) {
        for (var i = 0, n = 0, o = 0; e.length > o; o++)for (var r = n; t.length > r; r++)if (e[o] == t[r]) {
            n = o + 1, i++;
            break
        }
        n = 0;
        for (var o = 0; t.length > o; o++)for (var r = n; e.length > r; r++)if (t[o] == e[r]) {
            n = o + 1, i++;
            break
        }
        return e == t && (i = 1e3), console.info(" [" + e + "]  [" + t + "] :" + i), i
    }, unescape: function (e) {
        if (void 0 == e.content)return e;
        var t = $.parseJSON(decodeURIComponent(decode64(e.content)));
        return null == t ? {err: "err"} : t
    }, urlParamsFix: function (e) {
        return e
    }, isSupportXHR: function () {
        return Airdroid.Util.browser.ie10 || Airdroid.Util.browser.ie11 || !Airdroid.Util.browser.ie
    }, checkAndroidLevel4P4: function () {
        return parseInt(Airdroid.DeviceManage.getCurrentSdkLevel()) >= 19
    }, getPartnerConfigByName: function (e) {
        return Airdroid.PartnerConfig[e] || {}
    }, isHttps: function () {
        return "https:" == window.location.protocol
    }, getPhoneSocketUrl: function (e) {
        var t = "ws://" + e.ip + ":" + e.socket_port + "/";
        return this.isHttps() && !this.browser.safari && parseInt(e.wss_port) > 0 && (t = "wss://" + e.ip + ":" + e.wss_port + "/"), t
    }, checkSupportHttps: function () {
        return Airdroid.Config.isLiteVersion ? this.browser.chrome || this.browser.safari : this.browser.chrome || this.browser.safari
    }, getHttpsUpload: function (e) {
        var t = this, i = function () {
            $.isFunction(e) && e()
        };
        $.ajax({
            url: Airdroid.DeviceManage.getCurrentDeviceObj().getHostAddress() + "/sdctl/comm/octet_upload/?d=%2Fsdcard%2Fairdroid%2Fupload&resumableChunkNumber=" + t._checkUinUploadId + "&resumableChunkSize=1048576&resumableCurrentChunkSize=1048576&resumableTotalSize=2714115&resumableType=&resumableIdentifier=2714115-camera_plusrar&fn=camera_plus.rar&resumableRelativePath=camera_plus.rar",
            type: "get",
            crossDomain: !0,
            xhrFields: {withCredentials: !1},
            success: i,
            error: i
        }), t._checkUinUploadId += 1
    }, checkChina: function () {
        return "zh-CN" === Airdroid.Runtime.locale || "CN" === Airdroid.UserManage.getAccountCounty()
    }, getMapType: function () {
        return this.getUrlParam("mapType") ? this.getUrlParam("mapType") : this.checkChina() ? "baidu" : "google"
    }, getGaCount: function (e) {
        var t = ("" + e).length;
        if (1 == t)return "" + e;
        if (t > 1) {
            var i = Math.pow(10, t - 1);
            return "" + Math.floor(e / i) * i
        }
    }, checkIpInLAN: function (e) {
        return e && (0 === e.indexOf("10.") || 0 === e.indexOf("172.") || 0 === e.indexOf("192.168"))
    }
}, Airdroid.Util.browser = {
    version: (navigator.userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/i) || [0, "0"])[1],
    chrome: /chrome/i.test(navigator.userAgent) && /webkit/i.test(navigator.userAgent) && /mozilla/i.test(navigator.userAgent.toLowerCase()),
    safari: /webkit/i.test(navigator.userAgent) && !this.chrome,
    opera: /opera/i.test(navigator.userAgent),
    firefox: /firefox/i.test(navigator.userAgent),
    mozilla: /mozilla/i.test(navigator.userAgent) && !/(compatible|webkit)/i.test(navigator.userAgent) && !this.chrome,
    ie11: /trident\/7.0/i.test(navigator.userAgent),
    ie: /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) || /trident\/7.0/i.test(navigator.userAgent),
    ie10: $.browser.msie && /msie 10\.0/i.test(navigator.userAgent),
    ie9: $.browser.msie && /msie 9\.0/i.test(navigator.userAgent),
    ie8: $.browser.msie && /msie 8\.0/i.test(navigator.userAgent),
    ie7: $.browser.msie && /msie 7\.0/i.test(navigator.userAgent),
    ie6: $.browser.msie && /msie 6\.0/i.test(navigator.userAgent),
    checkIEVersion: function (e) {
        var t;
        return t = navigator.appVersion.split(";"), t = t[1].replace(/[ ]/g, ""), this.ie && t === "MSIE" + e + ".0"
    },
    getBrowserName: function () {
        return this.chrome ? "chrome" : this.safari ? "safari" : this.opera ? "opera" : this.firefox ? "firefox" : this.ie ? "ie" : this.mozilla ? "mozilla" : "unknown browser"
    }
}, Airdroid.Util.OS = {
    Windows: /win/i.test(navigator.appVersion.toLowerCase()),
    MacOS: /mac/i.test(navigator.appVersion.toLowerCase()),
    Unix: /x11/i.test(navigator.appVersion.toLowerCase()),
    Linux: /linux/i.test(navigator.appVersion.toLowerCase()),
    ChromeOs: /cros/i.test(navigator.appVersion.toLowerCase()),
    getOSName: function () {
        return this.Windows ? "Windows" : this.MacOS ? "MacOS" : this.ChromeOs ? "ChromeOs" : this.Unix ? "UNIX" : this.Linux ? "Linux" : "Unknown OS"
    }
}, Airdroid.Util._analyticsData = {
    origin: Airdroid.Config.isLiteVersion ? "airdroid_lite" : "airdroid_web",
    browser: Airdroid.Util.browser.getBrowserName(),
    os: Airdroid.Util.OS.getOSName(),
    webVer: Airdroid.Config.webVer,
    appVer: "",
    accountId: "",
    deviceId: "",
    operate: []
}, Airdroid.Util._analyticsTimer = null, Airdroid.Util._analyticsMaxTime = 3e4, Airdroid.Util._analyticsMinTime = 3e3, Airdroid.Util.postAnalyticsData = function () {
    var e = this, t = Airdroid.DeviceManage ? Airdroid.DeviceManage.getCurrentDeviceObj() : "";
    e._analyticsData = $.extend(e._analyticsData, {
        appVer: t ? t.getVersion() : "",
        accountId: Airdroid.UserManage ? Airdroid.UserManage.getAccountId() : "",
        deviceId: t ? t.getLongId() : ""
    }), console.log("==>:" + JSON.stringify(e._analyticsData)), Airdroid.Service.analyticsData(JSON.stringify(e._analyticsData), function () {
    }), e._analyticsData.operate = []
}, Airdroid.Util.trackAnalytics = function (e) {
    var t = this, i = t._analyticsData.operate;
    i.push(e), t._analyticsTimer && clearTimeout(t._analyticsTimer), t._analyticsTimer = setTimeout(function () {
        t.postAnalyticsData()
    }, i.length > 30 ? t._analyticsMinTime : t._analyticsMaxTime)
}, Airdroid.Util.trackEvent = function (e, t, i) {
    this.trackAnalytics({sourceModel: e, model: t, action: i, time: (new Date).getTime()});
    var n = [].slice.call(arguments), o = n.pop();
    if (Airdroid.Config.serverCenterUrl.indexOf("test") > 0 || !window.ga || o !== !0)return !1;
    for (var r = ["send", "event"], a = 0, s = n.length; s > a; a++)n[a] !== void 0 && (4 == a ? r.push({nonInteraction: 1}) : r.push(n[a]));
    var l = window.ga;
    l && l.apply(null, r)
}, Airdroid.Util.enterKeyPressHander = null, Airdroid.Util._blockModal = null, Airdroid.Util.defaultAlertOption = null, Airdroid.Util._blockModalQueue = [], Airdroid.Util.DIALOGLEVEL = {
    LEVEL1: 1,
    LEVEL2: 2,
    LEVEL3: 3,
    LEVEL4: 4,
    LEVEL5: 5
}, Airdroid.Util.currentDialogLevel = Airdroid.Util.DIALOGLEVEL.LEVEL1, Airdroid.Util.nextDialogLevel = Airdroid.Util.DIALOGLEVEL.LEVEL1, Airdroid.Util.addBlockSingle = function (e) {
    var t = this;
    t.hasCurrentBlock() ? t._blockModalQueue.push(e) : e()
}, Airdroid.Util.setNextDialogLevel = function (e) {
    var t = this;
    e = parseInt(e), _.filter(Airdroid.Util.DIALOGLEVEL, function (t) {
        return t === e
    }).length > 0 && (t.nextDialogLevel = e)
}, Airdroid.Util.setCurrentDialogLevel = function (e) {
    var t = this;
    e = parseInt(e), _.filter(Airdroid.Util.DIALOGLEVEL, function (t) {
        return t === e
    }).length > 0 && (t.currentDialogLevel = e)
}, Airdroid.Util.baseAlertBox = function (e) {
    var t = this;
    t.defaultAlertOption || (t.defaultAlertOption = {
        iconType: "",
        title: "",
        description: "",
        bottomBar: {
            hasCheckBox: !1,
            hasOkBtn: {msg: t.getLang("Common", "Button_Ok"), cssClass: "btn-primary", clickHandle: ""},
            hasCancelBtn: {msg: t.getLang("Common", "Button_Cancel"), cssClass: "", clickHandle: ""},
            hasLeftBtn: !1
        },
        isPrompt: !1,
        custom: !1,
        width: "458px",
        animate: !0
    });
    var i = $.extend(!0, {}, t.defaultAlertOption, e);
    return null != this._blockModal ? t.nextDialogLevel > t.currentDialogLevel ? (t.closeCurrentBlock(), setTimeout(function () {
        Airdroid.Util.baseAlertBox(e)
    }, 100), void 0) : (t.nextDialogLevel = t.DIALOGLEVEL.LEVEL1, void 0) : (t.currentDialogLevel = t.nextDialogLevel, t.nextDialogLevel = t.DIALOGLEVEL.LEVEL1, $(this.getTemplate("sys", "pop_alert_box", i)).draggable().modal({
        overlayId: "confirm-overlay",
        containerId: "confirm-container",
        zIndex: 1500,
        onShow: function (e) {
            $(e.wrap).css("overflow", "visible"), t._blockModal = this;
            var n = $(window).height() - $("#confirm-container").height();
            n > 0 && $("#confirm-container").css("top", n / 2 + "px");
            var o = i.isPrompt, r = !0;
            if (o && o.options.maxlength && !isNaN(o.options.maxlength) && $("#alert_box_input_input").attr("maxlenght", o.options.maxlength), i.bottomBar) {
                var a = i.bottomBar;
                a.hasCheckBox && $("#alert_box_remind .checkbox", $(e.data)).click(function () {
                    var t = $(this);
                    Airdroid.Util.toggleChecked(t, function () {
                        a.hasCheckBox.checkHandle && $.isFunction(a.hasCheckBox.checkHandle) && a.hasCheckBox.checkHandle(t, e)
                    }, function () {
                        a.hasCheckBox.uncheckHandle && $.isFunction(a.hasCheckBox.uncheckHandle) && a.hasCheckBox.uncheckHandle(t, e)
                    })
                }), a.hasOkBtn && ($("#alert_box_yes_btn", $(e.data)).click(function (i) {
                    if ("disabled" != $(this).attr("disabled") && !$(this).hasClass("disabled")) {
                        if (o) {
                            var n = $("#alert_box_input_input").val(), s = function () {
                                $.isFunction(a.hasOkBtn.clickHandle) && a.hasOkBtn.clickHandle(n), t.enterKeyPressHander = null, t.closeCurrentBlock()
                            };
                            return $.isFunction(o.validateFun) ? o.validateFun(n, function (e) {
                                return e ? ($("#alert_box_input_tipCon").css("visibility", "visible"), $("#alert_box_input_tip").html(e), $("#alert_box_input_input").focus(), !1) : (s(), !0)
                            }) : s(), void 0
                        }
                        $.isFunction(a.hasOkBtn.clickHandle) && (r = a.hasOkBtn.clickHandle(e, i)), r !== !1 && (t.enterKeyPressHander = null, t.closeCurrentBlock())
                    }
                }), $("#alert_box").delegate("input", "keyup", function (e) {
                    13 == e.keyCode && $("#alert_box_yes_btn").trigger("click")
                })), a.hasCancelBtn && $("#alert_box_no_btn", $(e.data)).click(function () {
                    $.isFunction(a.hasCancelBtn.clickHandle) && a.hasCancelBtn.clickHandle(e), t.closeCurrentBlock(), t.enterKeyPressHander = null
                }), a.hasLeftBtn && $("#alert_box_left_btn", $(e.data)).click(function () {
                    $.isFunction(a.hasLeftBtn.clickHandle) && a.hasLeftBtn.clickHandle(e), t.closeCurrentBlock(), t.enterKeyPressHander = null
                })
            }
            i.width && ($(e.container).css("width", i.width), $(e.container).css("left", ($(window).width() - parseInt(i.width)) / 2 + "px")), i.title && $("#alert_box_tip").height() > 30 && $("#alert_box_tip").css("paddingTop", "0"), i.custom && $.isFunction(i.custom.showHandle) && i.custom.showHandle(e), o ? $("#alert_box_input_input").blur().focus().val(o.defaultValue) : i.bottomBar && (t.enterKeyPressHander = function () {
                $.isFunction(i.bottomBar.hasOkBtn.clickHandle) && (r = i.bottomBar.hasOkBtn.clickHandle(e)), r !== !1 && (t.enterKeyPressHander = null, t.closeCurrentBlock())
            })
        },
        onClose: function (e) {
            i.custom && $.isFunction(i.custom.closeHandle) && i.custom.closeHandle(e), t.closeCurrentBlock(), t.enterKeyPressHander = null, setTimeout(function () {
                if (t._blockModalQueue.length > 0) {
                    var e = t._blockModalQueue.shift();
                    e()
                }
            }, 500)
        }
    }), void 0)
}, Airdroid.Util.confirm = function (e, t, i, n) {
    n = n || {};
    var o = {
        iconType: n.iconType || "confirm",
        title: e,
        description: n.description || "",
        bottomBar: {
            hasOkBtn: {msg: n.okBtnMsg, cssClass: n.okBtnCss, clickHandle: t},
            hasCancelBtn: {msg: n.cancelBtnMsg, cssClass: n.cancelBtnCss, clickHandle: i},
            hasLeftBtn: n.hasLeftBtn || !1
        }
    };
    this.baseAlertBox(o)
}, Airdroid.Util.alert = function (e, t, i) {
    i = i || {};
    var n = {
        iconType: i.iconType || "alert",
        title: e,
        description: i.description || "",
        bottomBar: {
            hasCheckBox: i.hasCheckBox || !1,
            hasOkBtn: {msg: i.okBtnMsg, cssClass: i.okBtnCss, clickHandle: t},
            hasCancelBtn: !1
        }
    };
    this.baseAlertBox(n)
}, Airdroid.Util.prompt = function (e, t, i, n, o, r, a, s) {
    var l = {
        isPrompt: {
            title: t,
            type: e,
            fieldName: i,
            defaultValue: n || "",
            validateFun: a,
            options: {maxlength: s || ""}
        }, bottomBar: {hasOkBtn: {clickHandle: o}, hasCancelBtn: {clickHandle: r}}
    };
    this.baseAlertBox(l)
}, Airdroid.Util.gotItMsgTip = function (e, t, i) {
    var n = {
        iconType: "",
        description: e,
        bottomBar: {
            hasOkBtn: {clickHandle: t, msg: i || Airdroid.Util.getLang("Common", "Btn_Gotit")},
            hasCancelBtn: !1
        }
    };
    this.baseAlertBox(n)
}, Airdroid.Util.kickOutMsg = function () {
    var e = this;
    if (Airdroid.UserManage.isUserOtherLogin())return !1;
    Airdroid.UserManage.setUserOtherLogin(!0), Airdroid.Message.hideReconnectNotice(), Airdroid.Util.closeCurrentBlock();
    var t = {
        iconType: "alert",
        title: e.getLang("Login", "Msg_KickOut").format("<br>"),
        description: e.getLang("Login", "Tip_KickOut"),
        bottomBar: {
            hasOkBtn: {
                clickHandle: function () {
                    Airdroid.CenterManage.showReLogin()
                }, msg: e.getLang("Login", "Btn_LogInAgain")
            }, hasCancelBtn: {
                clickHandle: function () {
                }, msg: e.getLang("Common", "Button_Ok")
            }
        }
    };
    this.baseAlertBox(t)
}, Airdroid.Util.customAlertBoxHasBottom = function (e) {
    e.bottomBar.hasOkBtn = e.bottomBar.hasOkBtn || !1, e.bottomBar.hasCancelBtn = e.bottomBar.hasCancelBtn || !1, e.bottomBar.hasLeftBtn = e.bottomBar.hasLeftBtn || !1, e.bottomBar.hasCheckBox = e.bottomBar.hasCheckBox || !1, this.customAlertBox(e)
}, Airdroid.Util.customAlertBoxNoBottom = function (e) {
    e.bottomBar = !1, this.customAlertBox(e)
}, Airdroid.Util.customAlertBox = function (e) {
    var t = {
        iconType: "",
        description: e.description || "",
        bottomBar: !1,
        width: e.width,
        animate: e.animate,
        custom: {showHandle: e.showHandle, closeHandle: e.closeHandle}
    };
    this.baseAlertBox($.extend(!0, {}, t, e))
}, Airdroid.Util.closeCurrentBlock = function () {
    this._blockModal && (this._blockModal.close(), this._blockModal = null), this.currentDialogLevel = this.DIALOGLEVEL.LEVEL1
}, Airdroid.Util.hasCurrentBlock = function () {
    return this._blockModal ? !0 : !1
}, Airdroid.Util.showPopupWindowForbiddenTip = function (e) {
    this.customAlertBoxHasBottom({
        description: Airdroid.Util.getTemplate("sys", "pop_window_disabled_tip", {lang: Airdroid.Util.getLang("Common")}),
        width: "620px",
        bottomBar: {
            hasOkBtn: {
                msg: Airdroid.Util.getLang("Common").Button_Ok, clickHandle: function () {
                    $.isFunction(e) && e()
                }
            }
        }
    })
}, Airdroid.Util.showGoPremiumTip = function () {
    var e = Airdroid.Util.getLang("Common");
    Airdroid.Util.confirm(Airdroid.Util.getLang("Common", "Remote_Need_Premium"), function () {
        Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.Unlock)
    }, function () {
        Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.remote_feature_need_premium)
    }, {okBtnMsg: e.go_unlock, cancelBtnMsg: e.go_premium, hasLeftBtn: {msg: e.Button_Cancel}})
}, Airdroid.Util.chooseFilePathDialog = function (e) {
    var t, i = Airdroid.Util.getLang("Common");
    Airdroid.Util.customAlertBoxHasBottom({
        description: Airdroid.Util.getTemplate("mod/file", "select_sdcard_dialog", {
            lang: i,
            title: e.title,
            type: e.type,
            def: e.def,
            placeholder: e.plholder || ""
        }), bottomBar: {
            hasOkBtn: {
                clickHandle: function () {
                    var i = t.val();
                    e.callback(i)
                }
            }, hasCancelBtn: {}
        }, showHandle: function (n) {
            var o, r, a, s = $(n.data);
            i = Airdroid.Util.getLang("Common"), t = $(".input-dropdown-tree", s), r = $("#alert_box_yes_btn", s), r.attr("disabled", "disabled", s), t.bind("input", function () {
                $(this).val(o && o.absrc || "")
            });
            var l = null;
            $(".input-dropdown-tree,.dropdown-caret", s).click(function () {
                var n, c, d;
                if (c = t.outerWidth() - 13, l)l.show(), a.reinitialise(); else {
                    l = $('<div class="dropdown-filetree-panel">', s).css({
                        position: "absolute",
                        left: 103,
                        width: c,
                        height: 300,
                        zIndex: 9999
                    }).insertAfter("#alert_box_msg .input-dropdown-tree", s), d = $('<div class="dropdown-filetree"></div>', s).appendTo(l), a = d.jScrollPane({
                        animateScroll: !0,
                        mouseWheelSpeed: 108,
                        verticalDragMinHeight: 18
                    }).data("jsp"), n = new Airdroid.Module.FileTree, n.addListener(n.EventTypes.on_leaf_collapse, function () {
                        a.reinitialise()
                    }), n.addListener(n.EventTypes.on_leaf_expand, function () {
                        a.reinitialise()
                    }), n.addListener(n.EventTypes.on_leaf_click, function (e) {
                        d.find("div.checked").removeClass("checked"), d.find("ul[cat='" + n.getCurrentTreeCat() + "'] div[absrc='" + e.data.absrc + "']").addClass("checked"), o = e.data, t.val(o.absrc), 0 >= t.val().length ? r.attr("disabled", "disabled") : r.removeAttr("disabled"), console.log(o)
                    }), n.createTreeView({
                        root_path: e.root,
                        bg_blank_img: Airdroid.Service.getImgAssets("feature/bg_blank.gif"),
                        tree_root_name: e.root_name,
                        cat: e.cat,
                        fm: 1,
                        expended: !0
                    }).appendTo(d.find(".jspPane"));
                    var u = $(['<div class="dropdown-bottom">', '    <div class="btn btn-primary btn-file-tree-ok">', i.Button_Ok, "    </div>", "</div>"].join(""));
                    u.find(".btn-file-tree-ok").click(function () {
                        l.hide()
                    }), u.insertAfter(d)
                }
                $(document).unbind("mousedown").bind("mousedown", function (e) {
                    0 === $(e.target).closest(l).length && 0 === $(e.target).closest(t).length && l.hide()
                })
            })
        }
    })
}, Airdroid.Util.getCookie = function (e) {
    var t = document.cookie.indexOf(e), i = document.cookie.indexOf(";", t);
    return -1 == t ? "" : unescape(document.cookie.substring(t + e.length + 1, i > t ? i : document.cookie.length))
}, Airdroid.Util.hasCookie = function (e) {
    return -1 != document.cookie.indexOf(e)
}, Airdroid.Util.setCookie = function (e, t, i, n, o, r) {
    var a = new Date;
    a.setTime(a.getTime() + 1e3 * i), document.cookie = escape(e) + "=" + escape(t) + (a ? "; expires=" + a.toGMTString() : "") + (n ? "; path=" + n : "/") + (o ? "; domain=" + o : "") + (r ? "; secure" : "")
}, Airdroid.Util.deleteCookie = function (e, t, i) {
    Airdroid.Util.setCookie(e, "", -1e3, t, i)
}, Airdroid.Util.isCookieEnabled = function () {
    return navigator.cookieEnabled || "cookie"in document && (document.cookie.length > 0 || (document.cookie = "isCookieEnabled").indexOf.call(document.cookie, "isCookieEnabled") > -1)
}, Airdroid.Util.dateFormateYMD = function (e) {
    return moment.lang(Airdroid.Runtime.locale), moment(e).format("L")
}, Airdroid.Util.dateFormate = function (e, t, i, n) {
    t = t || "MM/DD/YYYY HH:mm", moment.lang(Airdroid.Runtime.locale);
    var o = "";
    if (i) {
        var r = (new Date).getTime() / 1e3, a = new Date(e).getTime() / 1e3, s = r - a;
        o = s > 86400 ? moment(e).format(t) : n ? moment(e).fromNow() : moment(e).calendar()
    } else o = moment(e).format(t);
    return o
}, Airdroid.Util.dateFormateFromNow = function (e, t) {
    return this.dateFormate(1e3 * e, t, !0, !0)
}, Airdroid.Util.hmsFormat = function (e) {
    var t = Math.floor(e / 3600), i = Math.floor(e % 3600 / 60), e = Math.floor(e % 3600 % 60);
    return e = 10 > e ? "0" + e : "" + e, i = 10 > i ? "0" + i : "" + i, t = 10 > t ? "0" + t : "" + t, t + ":" + i + ":" + e
}, Airdroid.Util.secondsToTime = function (e) {
    var t, e = e / 1e3, i = Math.floor(e / 3600), n = Math.floor(e % 3600 / 60), e = Math.floor(e % 3600 % 60), o = n, r = e;
    return 10 > n && (o = "0" + n), 10 > e && (r = "0" + e), t = i > 0 ? i + ":" + o + ":" + r : n > 0 ? o + ":" + r : "00:" + r
}, function (e) {
    var t = e.Notification, i = Airdroid.Util, n = Airdroid.Config.SystemSettingNames, o = i.Notifications = i.Notifications || {};
    $.extend(o, {
        PERMISSION_NOT_SUPPORT: "not support",
        PERMISSION_GRANTED: "granted",
        PERMISSION_DEFAULT: "default",
        PERMISSION_DENIED: "denied",
        PERMISSION_OPEN: "open",
        PERMISSION_CLOSE: "close",
        checkDesktopNotificationUserPermission: function () {
            if (i.checkUserLogin()) {
                var e = i.Notifications.checkDesktopPermission();
                if (e == this.PERMISSION_NOT_SUPPORT)return this.PERMISSION_NOT_SUPPORT;
                var t = Airdroid.AppManage.getSystemSetting(n.smsNotice.name);
                return t.desktop ? e == this.PERMISSION_DEFAULT ? (this.setDesktopNotification("close"), this.PERMISSION_CLOSE) : this.PERMISSION_OPEN : this.PERMISSION_CLOSE
            }
            return this.PERMISSION_NOT_SUPPORT
        },
        saveDesktopNotificationUserSetting: function (e, t, i) {
            var o = Airdroid.AppManage.getSystemSetting(n.smsNotice.name), r = Airdroid.AppManage.getSystemSetting(n.callNotice.name);
            o.desktop = e, r.desktop = e, Airdroid.AppManage.setSystemSetting([n.smsNotice.name, n.callNotice.name], [o, r], t, i)
        },
        setDesktopNotification: function (e, n, o) {
            var r = this;
            if (i.checkUserLogin())if ("open" == e)switch (this.checkDesktopPermission()) {
                default:
                case this.PERMISSION_DEFAULT:
                    t.requestPermission(function () {
                        r.setDesktopNotification("open", n, o)
                    });
                    break;
                case this.PERMISSION_DENIED:
                    i.customAlertBoxHasBottom({
                        description: Airdroid.Util.getTemplate("mod/usercenter", "notice_tip", {lang: Airdroid.Util.getLang("Common")}),
                        bottomBar: {hasOkBtn: {msg: Airdroid.Util.getLang("Common").Button_Ok}},
                        width: "710px"
                    }), $.isFunction(n) && n(!0);
                    break;
                case this.PERMISSION_GRANTED:
                    r.saveDesktopNotificationUserSetting(!0, n, o)
            } else r.saveDesktopNotificationUserSetting(!1, n, o)
        },
        checkDesktopPermission: function () {
            return t ? t.permission : this.PERMISSION_NOT_SUPPORT
        }
    })
}(window), Airdroid.Util.breakConnectType = {
    PHONE_OFFLINE: "1",
    BATTERY_OFFLINE: "2",
    LOGOUT: "3",
    FORBIDDEN: "4",
    UNBIND: "5",
    OTHER_LOGIN: "6",
    DISCONNECTION: "7"
}, Airdroid.Util.showLoadingMask = function (e, t, i) {
    new Airdroid.UI.Loading({dom: e, color: t, bg: i})
}, Airdroid.Util.removeLoadingMask = function (e) {
    e.data("ui_mask") && e.data("ui_mask").removeMask()
}, Airdroid.Util.cancelEventBubble = function (e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
}, Airdroid.Util.clearContextMenu = function () {
    $("div.context_menu").remove(), $("div.popup-menu").hide()
}, Airdroid.Util.showDelayMsg = function (e, t, i, n, o) {
    var r, a, s;
    if (n)return this.alert(t, i), !1;
    if (!e.is(":visible"))return !1;
    o = o || 2e3, n ? (s = "#F3D169", a = "red", r = 1) : (s = "#000", a = "#fff", r = .7), e.block({
        message: t,
        css: {border: "none", background: s, opacity: r, color: a, padding: "8px 16px", "border-radius": "5px"},
        overlayCSS: {backgroundColor: "none", cursor: "default", "pointer-events": "none"}
    });
    var l = e.find(".blockMsg");
    l.css({
        width: l.width() + 16,
        height: l.height(),
        margin: "auto",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }), setTimeout(function () {
        e.unblock(), _.isFunction(i) && i()
    }, o)
}, Airdroid.Util.showLoadTip = function (e) {
    new Airdroid.UI.Mask({
        dom: $("#block-desktop"),
        content: {
            message: decodeURIComponent(e) + '<br/><img src="' + Airdroid.Service.getImgAssets("connecting.gif") + '" style="margin:5px auto;border-radius: 7px;"></div>',
            css: {
                border: "none",
                width: "300px",
                height: "50px",
                backgroundColor: "none",
                padding: "0px",
                color: "white",
                "font-size": "14px"
            }
        }
    }).setMask()
}, Airdroid.Util.removeLoadTip = function () {
    this.removeLoadingMask($("#block-desktop"))
}, Airdroid.Util.readonly = function (e) {
    e.attr("readonly", "readonly")
}, Airdroid.Util.writable = function (e) {
    e.removeAttr("readonly")
}, Airdroid.Util.enableDom = function (e) {
    e && (e.removeAttr("disabled"), e.removeClass("disabled"))
}, Airdroid.Util.disableDom = function (e) {
    e && (e.attr("disabled", "disabled"), e.addClass("disabled"))
}, Airdroid.Util.disableButton = function (e) {
    this.disableDom(e), e.addClass("btn-state-disabled");
    try {
        var t = -1 != e.attr("class").indexOf("blue");
        t && e.css("color", "#5CA1E8")
    } catch (i) {
    }
}, Airdroid.Util.enableButton = function (e) {
    if (this.enableDom(e), e.removeClass("btn-state-disabled"), e.attr("class")) {
        var t = -1 != e.attr("class").indexOf("blue");
        t && e.css("color", "white")
    }
}, Airdroid.Util.showLoadingButton = function (e, t) {
    if (e.hasClass("btn-state-loading"))return !1;
    e.addClass("btn-state-loading");
    var i, n = e.val() || e.text();
    "BUTTON" === e.get(0).tagName ? (i = e.height() + parseInt(e.css("paddingTop")) + parseInt(e.css("paddingBottom")) + 2, e.data("data-style", e.attr("style")), e.height(i), e.width(e.width())) : (e.height(e.height()), e.width(e.width())), e.val(""), e.text(""), e.data("data-text", n), t && this.showLoadingMask(t, "no_loading")
}, Airdroid.Util.removeLoadingButton = function (e, t) {
    return e.hasClass("btn-state-loading") ? (e.removeClass("btn-state-loading"), "BUTTON" === e.get(0).tagName && (e.removeAttr("style"), e.data("data-style") && e.attr("style", e.data("data-style"))), e.val(e.data("data-text")), e.text(e.data("data-text")), t && this.removeLoadingMask(t), void 0) : !1
}, Airdroid.Util.download = function (e) {
    $("#downloadFrame").attr("src", e)
}, Airdroid.Util.noData = function (e, t) {
    switch (this.removeNoData(e), this.removeUploadTip(e), t) {
        case"thread":
            e.addClass("i-bg-norecord-thread");
            break;
        default:
            e.addClass("i-bg-norecord")
    }
}, Airdroid.Util.removeNoData = function (e) {
    e.removeClass("i-bg-norecord").removeClass("i-bg-norecord-thread")
}, Airdroid.Util.addUploadTip = function (e) {
    this.removeUploadTip(e), this.removeNoData(e), e.prepend('<div class="drag-tip-wraper" ><div class="drag-tip">' + this.getLang("Common", "drag_drop_or_click_to_upload") + "</div>" + "</div>")
}, Airdroid.Util.removeUploadTip = function (e) {
    e.find(".drag-tip-wraper").remove()
}, Airdroid.Util.showServerNetWorkErrorTip = function (e, t, i) {
    var n = this, o = e.find(".server-network-error-tip");
    o.length > 0 && o.show(), o = $(n.getTemplate("sys", "server_error_tip", {lang: n.getLang("Common")})), e.append(o), o.find("a").click(function () {
        $.isFunction(t) && t()
    }), _.isObject(i) && o.css(i)
}, Airdroid.Util.hideServerNetWorkErrorTip = function (e) {
    var t = e.find(".server-network-error-tip");
    t.length > 0 && t.hide()
}, Airdroid.Util.toggleChecked = function (e, t, i) {
    "1" == e.attr("check") ? (e.attr("check", "0").removeClass("checked"), _.isFunction(i) && i()) : (e.attr("check", "1").addClass("checked"), _.isFunction(t) && t())
}, Airdroid.Util.setChecked = function (e) {
    e.attr("check", "1").addClass("checked")
}, Airdroid.Util.setUnchecked = function (e) {
    e.attr("check", "0").removeClass("checked")
}, Airdroid.Util.checkAll = function (e, t, i, n) {
    "1" == e.attr("check") ? (e.attr("check", "0").removeClass("checked"), t.attr("check", "0").removeClass("checked"), _.isFunction(n) && n()) : (e.attr("check", "1").addClass("checked"), t.attr("check", "1").addClass("checked"), _.isFunction(i) && i())
}, Airdroid.Util.radioSelected = function (e, t) {
    e.find(".radio").attr("check", "0").removeClass("checked"), t.attr("check", "1").addClass("checked")
}, Airdroid.Util.refreshModuleJsUrl = function (e) {
    var t = e.js.split(",");
    _.each(t, function (e, i) {
        t[i] = e + (e.split("?")[1] ? "&" : "?") + $.param({ddddd: (new Date).getTime()})
    }), e.js = t.join(",")
}, Airdroid.Util.runPlayer = function (e) {
    var t, i, n, o, r, a, s, l, c;
    t = !this.OS.MacOS, i = this.OS.ChromeOs, n = e.format, o = /(mov|mkv|mp4|m4v|3gp|webmv)/i.test(n), s = /(flv)/i.test(n), l = /(mkv)/i.test(n), c = /(webmv)/i.test(n), a = Airdroid.Config.dependApps, r = o && t || s || l || c || i ? a.videoPlayerH5 : a.videoPlayer, Airdroid.AppManage.createAppByAppId(r, {
        id: e.id,
        name: e.name,
        thumb: e.thumb,
        url: e.url,
        format: e.format,
        download: e.fileUrl || e.download,
        oriSize: e.oriSize,
        duration: e.durationMs
    })
}, Airdroid.Util.checkChromeOSPresent = function (e) {
    var t = Airdroid.Runtime.fromOffer || !1;
    return delete Airdroid.Runtime.fromOffer, this.OS.ChromeOs && e.appId == Airdroid.Config.dependApps.loginWidget && Airdroid.DesktopManage.isDefaultDesktops() && (!this.hasCookie("show_pLogin") && !Airdroid.Runtime.canShowLoginForm || t)
}, Airdroid.Util.checkShowUpgradeGuide = function () {
    "1" != Airdroid.Config.showUpgrade || this.hasCookie("no_upgrade_guide_a3") || this.getLocalStorageItem("no_upgrade_guide_a3") || (this.setCookie("no_upgrade_guide_a3", "1", 864e5), this.setLocalStorageItem("no_upgrade_guide_a3", "1"), Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.UpgradeGuide))
}, Airdroid.Util.removeUpgradeCookie = function () {
    this.deleteCookie("no_upgrade_guide_a3"), this.removeLocalStorageItem("no_upgrade_guide_a3")
}, Airdroid.Util.removeKeepLoginCookie = function () {
    this.deleteCookie("account_kp", "/", ".airdroid.com")
}, Airdroid.Util.removeAccountInfoCookie = function () {
    this.deleteCookie("account_kp", "/", ".airdroid.com"), this.deleteCookie("account_info", "/", ".airdroid.com")
}, Airdroid.Util.getOldVersionUrl = function (e) {
    var t = Airdroid.Service.addServerParam({app_ver: e});
    return Airdroid.Util.addParameterToURL(Airdroid.Config.serverCenterUrl + Airdroid.Config.historyRedirectUrl, t)
}, Airdroid.Util.showCameraSettingPanel = function (e) {
    Airdroid.Util.showSettingPanel("camera", e)
}, Airdroid.Util.showScreenshotSettingPanel = function (e) {
    Airdroid.Util.showSettingPanel("screenshot", e)
}, Airdroid.Util.getCameraSaveToType = function () {
    return Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.cameraSaveType.name)
}, Airdroid.Util.getScreenshotSaveToType = function () {
    return Airdroid.AppManage.getSystemSetting(Airdroid.Config.SystemSettingNames.screenshotSaveType.name)
}, Airdroid.Util.showSettingPanel = function (e, t) {
    var i, n, o, r, a, s = 45, l = 36;
    if (this._settingDom = this._settingDom || {}, i = this._settingDom[e] || $(this.getTemplate("mod", "set_save_type", {common: this.getLang("Common")})), i.appendTo("body"), t.top + i.height() > $("body").height() - s && (t.top -= l + i.height()), i.css(t), this._settingDom[e])return i.show(), void 0;
    n = i.find(".quick-settingItem");
    var c = function () {
        return "camera" === e ? $(".mod-camera-opCamera span") : $(".mod-screenshot a.shot span")
    };
    n.click(function () {
        o = $(this), n.removeClass("checked"), o.addClass("checked"), r = o.attr("data-save-to"), "camera" === e ? (Airdroid.Util.trackEvent("M-Camera", "Setting saveType " + r), Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.cameraSaveType.name, r)) : "screenshot" === e && Airdroid.AppManage.setSystemSetting(Airdroid.Config.SystemSettingNames.screenshotSaveType.name, r), 0 == r ? c().attr("class", "icon-save-to-pc") : 1 == r && c().attr("class", "icon-save-to-phone"), setTimeout(function () {
            i.hide()
        }, 150)
    }), n.mouseover(function () {
        n.removeClass("popup-menu-using-item-hover"), $(this).addClass("popup-menu-using-item-hover")
    }), $(document).mousedown(function (e) {
        0 === $(e.target).closest(i).length && i.hide()
    }), a = this.getCameraSaveToType(), "camera" === e ? a = this.getCameraSaveToType() : "screenshot" === e && (a = this.getScreenshotSaveToType()), n.eq(a).addClass("checked"), this._settingDom[e] = i
}, Airdroid.Util.showModuleLoadingMask = function (e) {
    e.children().hide(), e.append('<div class="app-load app-loading-mask"></div>')
}, Airdroid.Util.removeModuleLoadingMask = function (e) {
    e.find(".app-loading-mask").remove(), e.children().show()
}, Airdroid.Util.addVerticalFadeOutEdge = function (e, t) {
    var i = "box-edgeTop", n = "box-edgeBottom", o = {
        position: "absolute",
        left: 0,
        right: 0,
        height: 0,
        boxShadow: "0 0 5px 5px " + t,
        zIndex: 1
    };
    e.find("." + i).remove(), e.find("." + n).remove();
    var r = $("<div>").addClass(i), a = $("<div>").addClass(n);
    r.css($.extend({top: 0}, o)), a.css($.extend({bottom: 0}, o)), e.prepend(r).prepend(a)
}, Airdroid.Util.preventDefaultFileDrop = function (e, t) {
    var i;
    return Airdroid.Util.browser.ie9 || Airdroid.Util.browser.ie8 ? !1 : (e instanceof jQuery ? i = e[0] : e instanceof Element || e instanceof Document ? i = e : console.error("Target must be a HTMLDocument|HTMLElement|jQuery."), i.ondragover = function () {
        return !1
    }, i.ondrop = function (e) {
        e.preventDefault(), t && t()
    }, void 0)
}, Airdroid.Util.showBodyMask = function () {
    Airdroid.Util.customAlertBoxNoBottom({
        description: "", showHandle: function () {
            $("#alert_box").css({padding: "0", border: "none"})
        }
    })
}, Airdroid.Util.removeBodyMask = function () {
    this.closeCurrentBlock()
}, Airdroid.Util.checkSupportGoPush = function () {
    return Airdroid.Config.goPush
}, Airdroid.Util.keepWidgetInScreen = function (e) {
    $(window).resize(function () {
        var t = Airdroid.DesktopManage.getDashboard();
        t && t.isVisible() || "auto" === e.css("left") && e.css("left") || e.css("left", Math.min(e.offset().left, document.documentElement.clientWidth - e.width()))
    })
}, Airdroid.Util.checkSupportMultiDesktop = function () {
    return Airdroid.Config.multiDesktop
}, Airdroid.Util.trackPageLoadTime = function (e) {
    if (Airdroid.Runtime.resourceStartTime) {
        var t = parseInt(((new Date).getTime() - Airdroid.Runtime.resourceStartTime) / 1e3);
        console.log(e + "===============" + t), this.trackEvent("pageLoadTime", e, t, !0)
    }
}, Airdroid.Util.getWwwBaseUrl = function () {
    var e = Airdroid.Config.wwwLang, t = Airdroid.Runtime.locale.toLowerCase();
    return Airdroid.Config.wwwUrl + (e.indexOf(t) > -1 ? t : "en") + "/"
}, $.extend(Airdroid.Util, {
    slideOutToLeft: function (e, t) {
        return this.slide(e, {type: "out", direction: "left", duration: t})
    }, slideInFromRight: function (e, t) {
        return this.slide(e, {type: "in", direction: "right", duration: t})
    }, slideInFromLeft: function (e, t) {
        return this.slide(e, {type: "in", direction: "left", duration: t})
    }, slideOutToRight: function (e, t) {
        return this.slide(e, {type: "out", direction: "right", duration: t})
    }, slide: function (e, t) {
        var i, n, o, r, a, s, l, c;
        return t = _.defaults(t, {
            direction: "left",
            type: "out",
            duration: 200
        }), i = $.Deferred(), n = e.parent().width(), o = e.css("margin") || 0, s = t.type, r = t.direction, a = {}, c = "left" == r || "right" == r ? "marginLeft" : "marginTop", "in" === s ? (e.show(), "left" === r || "top" === r ? (e.css(c, "-=" + n + "px"), a[c] = "+=" + n + "px") : (e.css(c, "+=" + n + "px"), a[c] = "-=" + n + "px")) : a[c] = "left" === r || "top" === r ? "-=" + n + "px" : "+=" + n + "px", l = function () {
            "out" === s && e.hide(), e.css("margin", o), i.resolve()
        }, e.animate(a, t.duration, l), i.promise()
    }
}), Airdroid.Util._goPremiumType = {
    remote_free_upload_more_10: 101,
    remote_free_upload_overage: 102,
    usercenter_free_to_premium: 103,
    usercenter_premium_renew: 104,
    remote_feature_need_premium: 105,
    feature_need_premium: 106,
    remote_free_overage: 107,
    placard: 108,
    desktop_icon: 109,
    multi_upgrade: 110,
    unlock: 111
},Airdroid.Util.checkUserLogin = function () {
    return Airdroid.UserManage.checkUserLogin()
},Airdroid.Util.showPremiumTip = function (e) {
    e = e || this._goPremiumType.desktop_icon, Airdroid.AppManage.createAppByAppId(Airdroid.Config.dependApps.Premium, {fromType: e})
},Airdroid.Util.checkDataOverage = function (e) {
    var t = !1, i = Airdroid.UserManage.getMonthDataCache();
    return Airdroid.UserManage.checkUserFree() && i && parseInt(i.used) + parseInt(e) > parseInt(i.total) && (t = !0), t
},Airdroid.Util.checkShowReconnectTip = function () {
    return Airdroid.UserManage.isUserOtherLogin() ? !1 : !(Airdroid.Util.checkUserLogin() && !Airdroid.DeviceManage.getDeviceOptById(Airdroid.DeviceManage.getCurrentDeviceId()))
},Airdroid.Util.validateLoginInput = function (e, t) {
    var i = {};
    return this.trackEvent("W-Login", "Login", "Account"), "" == e ? (i.fail = !0, i.msg = this.getLang("Common", "Enter_Email")) : "" == t ? (i.fail = !0, i.msg = this.getLang("Common", "Enter_User_Password")) : i.fail = !1, i
},Airdroid.Util.doLogin = function (e, t, i) {
    var n = this;
    i = i || {};
    var o = i.type || "account";
    e ? n.setCookie("email", e, 1209600) : "" == e && (Airdroid.Runtime.isAutoLogin = !0), Airdroid.Runtime.onLogining = !0;
    var r = i.isKeepLogin || "0", a = 0, s = 2, l = [{mail: e, pwd: t, keep: r, device_type: 4}, function (e) {
        "1" == e.code ? (Airdroid.DesktopManage.changeNavUser(), Airdroid.UserManage.setAccount(e.result), Airdroid.DeviceManage.initAllDevicesObj(), Airdroid.UserManage.getUserInfo(), $.isFunction(i.successCb) && i.successCb(o), Airdroid.Util.trackEvent("SignIn", "Success", !0)) : "-2" == e.code ? ($.isFunction(i.failCb) && i.failCb(n.getLang("Common", "PasswordIncorrect")), Airdroid.Util.trackEvent("SignIn", "Fail", "PasswordIncorrect", !0)) : (Airdroid.Util.trackEvent("SignIn", "Fail", "AuthFailed", !0), $.isFunction(i.failCb) && i.failCb(""))
    }, function () {
        s > a ? (a += 1, console.log("，"), Airdroid.Service.checkInternetLogin.apply(Airdroid.Service, l)) : $.isFunction(i.timeoutCb) && i.timeoutCb(n.getLang("Common", "Failed_To_Signin")), Airdroid.Util.trackEvent("SignIn", "Fail", "Network", !0)
    }];
    Airdroid.Service.checkInternetLogin.apply(Airdroid.Service, l)
},Airdroid.Util.authWindowClose = function (e, t) {
    var i = this;
    t = t || {};
    var n = {
        type: e, successCb: function () {
            $.isFunction(t.successCb) && t.successCb()
        }, failCb: function (e) {
            Airdroid.UserManage.account = null, i.removeLoadingMask($("body")), Airdroid.UserManage.setInfoChange(), $.isFunction(t.failCb) && t.failCb(e)
        }, timeoutCb: function (e) {
            i.alert(i.getLang("Common", "Failed_To_Signin")), i.removeLoadingMask($("body")), $.isFunction(t.timeoutCb) && t.timeoutCb(e)
        }
    };
    i.doLogin("", "", n)
},Airdroid.Util.setAutoLoginAndConnect = function (e, t) {
    Airdroid.Util.checkUserLogin() && (Airdroid.Util.setCookie("airdroid_history", e, 180, "/", ".airdroid.com"), t && Airdroid.DeviceManage.checkNeedSelectDevicePanel() && Airdroid.Util.setCookie("airdroid_history_id", t, 180, "/", ".airdroid.com"))
},Airdroid.Util.backToHistoryVersion = function (e, t, i) {
    t = t || Airdroid.DeviceManage.getCurrentDeviceId(), i = i || Airdroid.Util.getOldVersionUrl(e), Airdroid.Util.setAutoLoginAndConnect(e, t), window.location.href = i
},function () {
    var e = Airdroid.Util, t = e.Notifications = e.Notifications || {}, i = e.Notification = e.Notification || {}, n = [], o = [], r = null, a = !1, s = !0;
    $(window).blur(function () {
        s = !1
    }), $(window).focus(function () {
        s = !0
    }), $.extend(i, {
        getCleanText: function (e) {
            return $("<div>").html(e).text()
        }, createDesktopNotification: function (e, t, i, n) {
            return t = this.getCleanText(t), i = this.getCleanText(i), new Notification(t, {
                tag: n,
                icon: e.url || e,
                body: i
            })
        }, createAirNotification: function (e, t, i) {
            var n, o, r;
            return n = new Airdroid.Notification(t, {
                icon: e,
                body: i
            }), o = $(".airtip:visible"), r = o.height(), Airdroid.Notifications.css("bottom", 50 + r), n
        }, showNotification: function (i) {
            i = i || {};
            var a, l, c, d, u, p, f, h, m;
            if (c = d = i.replaceId, u = i.icon, p = i.title, f = i.content, m = i.autoClose, h = l = i.type, p || (p = f, f = null), "desktop" === l) {
                if (s)return;
                if (t.checkDesktopNotificationUserPermission() !== t.PERMISSION_OPEN)return console.debug("User desktop notification no open."), void 0;
                a = this.createDesktopNotification(u, p, f, d)
            } else"auto" !== l || s || t.checkDesktopNotificationUserPermission() !== t.PERMISSION_OPEN ? (h = "air", a = this.createAirNotification(u, p, f)) : (h = "desktop", a = this.createDesktopNotification(u, p, f, d));
            if (a.type = h, a.ondisplay = i.ondisplay, a.onclick = function () {
                    Airdroid.Message.clearLEDTitle("all"), _.isFunction(i.onclick) && i.onclick.call(this), "desktop" === h && this.close()
                }, a.onclose = function () {
                    var e = n.indexOf(a);
                    n.splice(e, 1), e = o.indexOf(a), o.splice(e, 1), _.isFunction(i.onclose) && i.onclose.call(this), setTimeout(function () {
                        var e = $(".notifications");
                        e.find(".notification-body").length > 3 ? (e.height(216), r.reinitialise()) : (e.css("height", "auto"), r && (e.find(".notification-close").prependTo(r.getContentPane()), r && r.destroy(), r = null))
                    }, 251)
                }, a.replaceId = c, a.show && a.show(), n.push(a), "air" === h) {
                var g = $(".notifications");
                g.find(".notification-body").length > 3 ? (g.height(216), r && a.$el.appendTo(g.find(".jspPane")), setTimeout(function () {
                    r ? r.reinitialise() : (r = g.jScrollPane({
                        showArrows: !0,
                        horizontalGutter: 60,
                        verticalGutter: 60
                    }).data("jsp"), g.find(".notification-close").prependTo(g)), e.addVerticalFadeOutEdge(g, "#1C1C1C"), r.scrollToBottom()
                }, 251)) : g.css("height", "auto")
            }
            return m && setTimeout(function () {
                a.isRemoved || a.close()
            }, m), a
        }, showMsgReceivedNotice: function (t) {
            t = t || {};
            var i, n, r, a;
            return i = t.from, n = t.unreadCount, r = e.getLang("SMS"), a = this.showNotification(_.defaults(t, {
                content: r.Message_ReveivedMessage.format(i, n),
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/msg_icon.png"),
                    width: 43,
                    height: 38,
                    className: "icon-sms"
                }
            })), o.push(a), a
        }, showMissedCallNotice: function (t) {
            t = t || {};
            var i, n;
            return i = t.missedCallCount, n = e.getLang("DialPad"), this.showNotification(_.defaults(t, {
                content: n.Call_Notice.format(i),
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/call_icon.png"),
                    width: 38,
                    height: 37,
                    className: "icon-noticeCall"
                }
            }))
        }, showDeviceNotificationNotice: function (e) {
            return e = e || {}, this.showNotification(_.defaults(e, {
                replaceId: _.uniqueId("device_notification_"),
                type: "auto",
                icon: {url: Airdroid.Service.getImgAssets("logo-medium.png")},
                autoClose: 7e3
            }))
        }, removeIncomingCallNotice: function () {
            t.removeNoticeByReplaceId("call")
        }, showIncomingCallNotice: function (t) {
            t = t || {};
            var i, n, o;
            return o = e.getLang("Common"), i = t.name, n = t.number, this.showNotification(_.defaults(t, {
                replaceId: "call",
                title: o.notification_call_title,
                content: o.incoming_call.format(i || n),
                icon: {
                    url: Airdroid.Service.getImgAssets("feature/call_icon.png"),
                    width: 38,
                    height: 37,
                    className: "icon-noticeCall"
                },
                onclick: function () {
                    $(window).focus()
                }
            }))
        }, showBatteryNotice: function (t) {
            t = t || {};
            var i, n, o;
            if (n = t.power, o = e.getLang("Battery"), _.isUndefined(n))throw"Power option is required.";
            return i = n >= 10 ? "#F68005" : "#f60005", this.showNotification(_.defaults(t, {
                replaceId: "battery",
                icon: {url: Airdroid.Service.getImgAssets("feature/system_warning_icon.png"), className: "icon-alert"},
                content: [o.Message_GettingLow, ' <span style="color:' + i + '; font-size: 19px;">', n, "%</span> ", o.Message_Reminding, "<br>", o.Message_ConnectCharge].join("")
            }))
        }, showBalloonTip: function (e) {
            e = e || {};
            var t = e.targetSelector;
            return $(t).airBalloonTip(_.defaults({
                onshow: function () {
                    $.isFunction(e.onshow) && e.onshow(), Airdroid.Notifications.css("bottom", 50 + $("#airtip_" + e.replaceId).height())
                }, onhide: function () {
                    $.isFunction(e.onhide) && e.onhide(), Airdroid.Notifications.css("bottom", 45)
                }
            }, e))
        }
    }), $.extend(t, {
        removeNoticeByReplaceId: function (e) {
            var t = _.filter(n, function (t) {
                return t.replaceId === e
            });
            n = _.without(n, t), _.invoke(t, "close")
        }, removeNoticeByThreadId: function (e) {
            this.removeNoticeByReplaceId(e)
        }, closeAllNotice: function (e) {
            var t = this, i = e.length;
            if (0 === i)return a = !1, void 0;
            var n = e[i - 1];
            n && ("air" === n.type ? n.close(function () {
                setTimeout(function () {
                    t.closeAllNotice(e)
                }, 100)
            }) : (n.close(), setTimeout(function () {
                t.closeAllNotice(e)
            }, 100)))
        }, removeAllNotice: function () {
            a || (a = !0, this.closeAllNotice(n))
        }, removeAllMessageNotice: function () {
            a || (a = !0, this.closeAllNotice(o))
        }
    })
}(window),Airdroid.Util.checkSupportLocalStorage = function () {
    return window.localStorage ? !0 : !1
},Airdroid.Util.getLocalStorageItem = function (e) {
    if (!this.checkSupportLocalStorage())return !1;
    try {
        return window.localStorage.getItem(e)
    } catch (t) {
        return !1
    }
},Airdroid.Util.setLocalStorageItem = function (e, t) {
    if (this.checkSupportLocalStorage())try {
        window.localStorage.setItem(e, t)
    } catch (i) {
    }
},Airdroid.Util.removeLocalStorageItem = function (e) {
    this.checkSupportLocalStorage() && window.localStorage.removeItem(e)
},Airdroid.Util.clearLocalStorage = function () {
    this.checkSupportLocalStorage() && window.localStorage.clear()
},Airdroid.Util._placardWidget = null,Airdroid.Util.openTabInPlacard = function (e) {
    "http://airdroid.com/pay/premium/" == e ? Airdroid.Util.showPremiumTip(Airdroid.Util._goPremiumType.placard) : window.open(e, "_blank")
},Airdroid.Util.showPlacard = function () {
    var e = this;
    e._placardWidget = e._placardWidget || null;
    var t = {device_id: Airdroid.DeviceManage.getCurrentDeviceDid()};
    Airdroid.Service.getAllNotices(t, function (t) {
        if ("1" == t.code) {
            e.removePlacard(), Airdroid.Runtime.placardData = t.data, Airdroid.Runtime.unreadPlacard = [];
            var i = [];
            if (_.each(t.data, function (e) {
                    "0" == e.is_read && (i.push(e), Airdroid.Runtime.unreadPlacard.push(e.id))
                }), i.length > 0)var n = setInterval(function () {
                _.isFunction(Airdroid.Widget.Placard) ? (e._placardWidget = new Airdroid.Widget.Placard, e._placardWidget.create(i), clearInterval(n)) : console.log("===no load js===")
            }, 10)
        }
    })
},Airdroid.Util.removePlacard = function () {
    var e = this;
    e._placardWidget && e._placardWidget.clear()
},Airdroid.Util.viewNotice = function (e, t) {
    var i = {aid: Airdroid.UserManage.getAccountId(), noticeId: e, msType: t || 0};
    Airdroid.Service.viewNotice(i, function (e) {
        "1" == e.code ? console.log("") : console.log("")
    })
},Airdroid.Util.initFullScreenApi = function () {
    var e = {
        supportsFullScreen: !1, isFullScreen: function () {
            return !1
        }, requestFullScreen: $.noop, cancelFullScreen: $.noop, fullScreenEventName: "", prefix: ""
    }, t = "webkit moz o ms khtml".split(" ");
    if (document.cancelFullScreen !== void 0)e.supportsFullScreen = !0; else for (var i = 0, n = t.length; n > i; i++)if (e.prefix = t[i], document[e.prefix + "CancelFullScreen"] !== void 0) {
        e.supportsFullScreen = !0;
        break
    }
    e.supportsFullScreen && (e.fullScreenEventName = e.prefix + "fullscreenchange", e.isFullScreen = function () {
        switch (this.prefix) {
            case"":
                return document.fullScreen;
            case"webkit":
                return document.webkitIsFullScreen;
            default:
                return document[this.prefix + "FullScreen"]
        }
    }, e.requestFullScreen = function (e) {
        return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
    }, e.cancelFullScreen = function () {
        return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
    }), Airdroid.Util.fullScreenApi = e
},Airdroid.Util.fullScreen = function (e, t) {
    var i, n = this;
    t = t || $.noop, i = n.fullScreenApi.fullScreenEventName;
    var o = this.browser.firefox ? document : e;
    Airdroid.TaskbarManage.hideTaskBar(), $(o).unbind(i).bind(i, function () {
        n.fullScreenApi.isFullScreen() || (Airdroid.TaskbarManage.showTaskBar(), t())
    }), n.fullScreenApi.requestFullScreen(e)
},Airdroid.Util.cancelFullScreen = function () {
    this.fullScreenApi.cancelFullScreen()
},Airdroid.Util.isFullScreen = function () {
    return this.fullScreenApi.isFullScreen()
},function (e) {
    var t = "/sdcard", i = t + "/DCIM", n = {
        SDCARD_PATH: t,
        DCIM_PATH: i,
        CAMERA_PATH: i + "/Camera",
        WALLPAPER_PATH: t + "/wallpaper",
        RINGTONE_PATH: t + "/Ringtones",
        MUSIC_PATH: t + "/Music",
        ALARM_PATH: t + "/Alarms",
        getBaseName: function (e) {
            var t = this.clean(e);
            return t.substr(t.lastIndexOf("/") + 1)
        },
        getParentPath: function (e, t) {
            var i, n;
            return t = t || "/", i = this.clean(e), n = i.substring(0, i.lastIndexOf("/")), "" === n ? t : n
        },
        getParentPathName: function (e) {
            return this.getBaseName(this.getParentPath(e))
        },
        isParentOf: function (e, t) {
            return this.getParentPath(t) === this.clean(e)
        },
        isChildOf: function (e, t) {
            return this.isParentOf(t, e)
        },
        contains: function (e, t) {
            return 0 === this.clean(t).indexOf(this.clean(e) + "/")
        },
        clean: function (e) {
            return e.replace(/\\/g, "/").replace(/(\/$|\\$)/, "").replace(/(\/\/+)/g, "/")
        }
    };
    e.Airdroid.Util.Path = n
}(this),Core = {
    _copyFunction: function (e) {
        return function () {
            e.apply(this, arguments)
        }
    }, _createFunction: function () {
        return function () {
        }
    }, extend: function () {
        var e, t, i = 1 == arguments.length ? null : arguments[0], n = 1 == arguments.length ? arguments[0] : arguments[1];
        if (2 == arguments.length && "function" != typeof i)throw Error("Base class is not a function, cannot derive.");
        if (!n)throw Error("Object definition not provided.");
        var o;
        if (n.$construct ? (o = n.$construct, delete n.$construct) : o = i ? Core._copyFunction(i) : Core._createFunction(), o.$virtual = {}, o.$super = i, i) {
            var r = Core._createFunction();
            r.prototype = i.prototype, o.prototype = new r
        }
        if (o.prototype.constructor = o, n.$abstract) {
            if (o.$abstract = {}, i && i.$abstract)for (e in i.$abstract)o.$abstract[e] = i.$abstract[e];
            if (n.$abstract instanceof Object)for (e in n.$abstract)o.$abstract[e] = !0, o.$virtual[e] = !0;
            delete n.$abstract
        }
        if (i)for (t in i.$virtual)o.$virtual[t] = i.$virtual[t];
        if (n.$virtual) {
            Core._inherit(o.prototype, n.$virtual, o.$virtual);
            for (t in n.$virtual)o.$virtual[t] = !0;
            delete n.$virtual
        }
        if (n.hasOwnProperty("toString") && (o.prototype.toString = n.toString), n.hasOwnProperty("valueOf") && (o.prototype.valueOf = n.valueOf), delete n.toString, delete n.valueOf, n.$include) {
            var a = n.$include.reverse();
            Core._processMixins(o, a), delete n.$include
        }
        var s = null;
        return n.$load && (s = n.$load, delete n.$load), n.$static && (Core._inherit(o, n.$static), delete n.$static), Core._inherit(o.prototype, n, o.$virtual), o.$abstract || this._verifyAbstractImpl(o), s && s.call(o), o
    }, get: function (e, t) {
        for (var i = 0; t.length > i; ++i)if (e = e[t[i]], !e)return null;
        return e
    }, _isVirtual: function (e, t) {
        switch (t) {
            case"toString":
            case"valueOf":
                return !0
        }
        return e[t]
    }, _inherit: function (e, t, i) {
        for (var n in t) {
            if (i && void 0 !== e[n] && !this._isVirtual(i, n))throw Error('Cannot override non-virtual property "' + n + '".');
            e[n] = t[n]
        }
    }, method: function (e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }, _processMixins: function (e, t) {
        for (var i = 0; t.length > i; ++i)for (var n in t[i])e.prototype[n] || (e.prototype[n] = t[i][n])
    }, set: function (e, t, i) {
        for (var n = null, o = 0; t.length - 1 > o; ++o)n = e, e = e[t[o]], e || (e = {}, n[t[o]] = e);
        e[t[t.length - 1]] = i
    }, _verifyAbstractImpl: function (e) {
        var t = e.$super;
        if (t && t.$abstract && t.$abstract !== !0)for (var i in t.$abstract)if (null == e.prototype[i])throw Error('Concrete class does not provide implementation of abstract method "' + i + '".')
    }
},Core.Debug = {
    consoleElement: null, useAlertDialog: !1, consoleWrite: function (e) {
        if (Core.Debug.consoleElement) {
            var t = document.createElement("div");
            t.appendChild(document.createTextNode(e)), 0 === Core.Debug.consoleElement.childNodes.length ? Core.Debug.consoleElement.appendChild(t) : Core.Debug.consoleElement.insertBefore(t, Core.Debug.consoleElement.firstChild)
        } else Core.Debug.useAlertDialog && alert("DEBUG:" + e)
    }, toString: function (e) {
        var t = "";
        for (var i in e)"function" != typeof e[i] && (t += i + ":" + e[i] + "\n");
        return t
    }
},Core.Arrays = {
    containsAll: function (e, t, i) {
        if (i && e.length < t.length)return !1;
        if (0 === t.length)return !0;
        for (var n, o, r = 0; t.length > r; ++r) {
            n = !1, o = t[r];
            for (var a = 0; e.length > a; ++a)if (o == e[a]) {
                n = !0;
                break
            }
            if (!n)return !1
        }
        return !0
    }, indexOf: function (e, t) {
        for (var i = 0; e.length > i; ++i)if (t == e[i])return i;
        return -1
    }, remove: function (e, t) {
        for (var i = 0; e.length > i; ++i)if (t == e[i])return e.splice(i, 1), void 0
    }, removeDuplicates: function (e) {
        e.sort();
        for (var t = 0, i = e.length - 1; i > 0; --i)e[i] == e[i - 1] && (e[i] = e[e.length - 1 - t], ++t);
        t > 0 && (e.length = e.length - t)
    }
},Core.Arrays.LargeMap = Core.extend({
    $static: {garbageCollectEnabled: !1},
    _removeCount: 0,
    garbageCollectionInterval: 250,
    map: null,
    $construct: function () {
        this.map = {}
    },
    _garbageCollect: function () {
        this._removeCount = 0;
        var e = {};
        for (var t in this.map)e[t] = this.map[t];
        this.map = e
    },
    remove: function (e) {
        delete this.map[e], Core.Arrays.LargeMap.garbageCollectEnabled && (++this._removeCount, this._removeCount >= this.garbageCollectionInterval && this._garbageCollect())
    },
    toString: function () {
        return Core.Debug.toString(this.map)
    }
}),Core.ListenerList = Core.extend({
    _data: null, _hdata: null, $construct: function () {
        this._data = [], this._hdata = []
    }, addListener: function (e, t, i) {
        this._data.push(e, t), i = i || "NOUSED", this._hdata.push(e, i)
    }, fireEvent: function (e) {
        if (null == e.type)throw Error("Cannot fire event, type property not set.");
        var t, i = !0, n = [];
        for (t = 0; this._data.length > t; t += 2)this._data[t] == e.type && n.push(this._data[t + 1]);
        for (t = 0; n.length > t; ++t)i = n[t](e) && i;
        return i
    }, getListenerTypes: function () {
        for (var e = [], t = 0; this._data.length > t; t += 2)e.push(this._data[t]);
        return Core.Arrays.removeDuplicates(e), e
    }, getListeners: function (e) {
        for (var t = [], i = 0; this._data.length > i; i += 2)this._data[i] == e && t.push(this._data[i + 1]);
        return t
    }, getListenerCount: function (e) {
        for (var t = 0, i = 0; this._data.length > i; i += 2)this._data[i] == e && ++t;
        return t
    }, hasListeners: function (e, t) {
        for (var i = 0; this._data.length > i; i += 2)if (t) {
            if (this._hdata[i] == e && this._hdata[i + 1] == t)return !0
        } else if (this._data[i] == e)return !0;
        return !1
    }, isEmpty: function () {
        return 0 === this._data.length
    }, removeListener: function (e, t, i) {
        for (var n = 0; this._data.length > n; n += 2)if (this._data[n] == e && t == this._data[n + 1] || this._hdata[n] == e && this._hdata[n + 1] == i)return this._data.splice(n, 2), this._hdata.splice(n, 2), void 0
    }, toString: function () {
        for (var e = "", t = 0; this._data.length > t; t += 2)t > 0 && (e += ", "), e += this._data[t] + ":" + this._data[t + 1];
        return e
    }
}),Core.ResourceBundle = Core.extend({
    $static: {
        getParentLanguageCode: function (e) {
            return -1 == e.indexOf("-") ? null : e.substring(0, e.indexOf("-"))
        }
    }, _sourceMaps: null, _generatedMaps: null, _defaultMap: null, $construct: function (e) {
        this._sourceMaps = {}, this._generatedMaps = {}, this._defaultMap = e
    }, get: function (e) {
        var t = e ? this._generatedMaps[e] : this._defaultMap;
        if (t)return t;
        t = {};
        var i, n = this._sourceMaps[e];
        if (n)for (i in n)t[i] = n[i];
        var o = Core.ResourceBundle.getParentLanguageCode(e);
        if (o && (n = this._sourceMaps[o]))for (i in n)void 0 === t[i] && (t[i] = n[i]);
        for (i in this._defaultMap)void 0 === t[i] && (t[i] = this._defaultMap[i]);
        return this._generatedMaps[e] = t, t
    }, set: function (e, t) {
        this._generatedMaps = {}, this._sourceMaps[e] = t
    }, toString: function () {
        var e = "ResourceBundle: ";
        for (var t in this._sourceMaps)e += " " + t;
        return e
    }
}),function () {
    Airdroid.Interface = Core.extend({
        $static: {
            checkImplement: function (e, t) {
                if (!t)return !0;
                var i = (new t).getMethods(), n = _.reject(i, function (t) {
                    return _.isFunction(e[t])
                });
                if (n.length > 0)throw Error('Method {"' + n.join('", "') + '"} must be implemented.');
                return !0
            }
        }
    }), Airdroid.Interface.Base = Core.extend({
        $abstract: {}, getMethods: function () {
            return this.$methods
        }
    })
}(),Airdroid.Base = Core.extend({
    _listeners: null,
    config: null,
    util: null,
    $virtual: {$implement: null},
    $construct: function () {
        this._listeners = new Core.ListenerList, this.util = Airdroid.Util, this.config = Airdroid.Config, this._construct && "function" == typeof this._construct && this._construct.apply(this, Array.prototype.slice.call(arguments, 0)), this.on = this.addListener, this.off = this.removeListener, this.trigger = this.fireEvent, Airdroid.Interface.checkImplement(this, this.$implement)
    },
    addListener: function (e, t, i, n) {
        n && this._listeners.hasListeners(e, i) || this._listeners.addListener(e, t, i)
    },
    fireEvent: function (e, t) {
        var i = {};
        i.type = e, i.data = t, this._listeners.fireEvent(i)
    },
    removeListener: function (e, t, i) {
        var n = this;
        n._listeners.removeListener(e, t, i)
    }
});
var Airdroid = Airdroid || {};
Airdroid.UsedLang = {}, Airdroid.Lang = Airdroid.Lang || {}, Airdroid.Lang = {
    Footer: {
        security: "Security",
        language: "Languages",
        forum: "Forum",
        about_us: "About us",
        privacy_policy: "Privacy policy",
        nohas_lng: "Not your language?",
        choose_title: "Choose language",
        set_lng: "Change",
        Join_translate: "Translate AirDroid to your own language!",
        local_lng: "Installed",
        online_lng: "Available",
        donate: "Donate",
        help: "Help",
        contact: "Contact"
    },
    Common: {
        account_setting: "Settings",
        label_choose: "Choose",
        PlaySound: "Ring",
        InputDefaultText_Search: "Search",
        Add: "Add",
        Label_TimeColumn: "Time",
        ToolTip_FolderName: "Folder: ",
        Button_Ok: "OK",
        AreYou: "Are you",
        Connect: "Connect",
        OldPassword: "Current password",
        FlowRemain: "Remaining: {0}",
        see_all_placard: "View all notifications",
        notification_call_title: "Incoming call",
        close_desktop_notification: "Disable desktop notifications",
        label_blog: "Blog",
        label_ftp: "FTP",
        label_month: "Month",
        premium_icon_hot: "Popular",
        connect_11: "Connection established",
        switch_device: "Switch",
        Open: "Open",
        Delete: "Delete",
        Label_SizeColumn: "Size",
        Search: "Search",
        Share_To: "Share to {0}",
        Emoji: "Emoji",
        Desktop_folder: "Folder",
        UserName: "User name",
        No: "No",
        CategoryCountSuffix_Items: "item(s)",
        isCheck: "Checking",
        Signin: "Sign In",
        Save: "Save",
        placard: "Alerts",
        label_years: "{0} Years",
        New_Email: "New email",
        Pay_t: "Payments",
        Authenticating: "Authenticating...",
        Alert_Title: "Alert",
        Pay_d: "Date",
        QCC_BTN_2: "Start over",
        remove_from_desktop_success: "Deleted successfully",
        Button_Next: "Next",
        total: "Total",
        NavBar_Setting: "Settings",
        Button_Previous: "Previous",
        no_purchase: "No payments",
        NavBar_Dashboard: "Widgets",
        remote_quota: "Remote quota",
        bonus: "Bonus",
        message_to: "To:",
        present_t5_intro_title1: "One less cable",
        device_nickname: "Device name",
        pay_success: "Succeeded",
        attach_amount_limit: "Only one attachment per message please.",
        ContactLinkExisted: "There's already a shortcut for this contact.",
        not_change: "New email is same as the current one.",
        phone_auth_failed: "Failed to connect device. [Error: 10001] Please retry.",
        present_t1_about: "What's AirDroid",
        pop_window_disabled_des: "The pop-up was blocked. Please enable the pop-up from www.airdroid.com and click OK to continue.",
        MainAccount: "Registration account ",
        find_phone_connect_fail: "Failed to connect. Your device is probably not connected to networks.",
        present_need_login: "Tip: Make sure you have signed in to this Chromebook using your Google account.",
        Btn_Gotit: "Got it",
        NavBar_NewMessage: "New message",
        Paste: "Paste",
        ToolTip_Time: "Time:",
        ToolTip_FileLocation: "Location:",
        Button_Cancel: "Cancel",
        msg_FileNameExist: "Same name exists. Please choose a new one.",
        Msg_AppConfigNotFound: "Failed to locate the configuration file.",
        TipText_Call: "Call",
        Msg_NotWifiNetWork: "AirDroid is currently using your device's mobile network. To conserve data, please try to connect your device to a Wi-Fi network.",
        Search_For: "Searching For",
        Emoticon: "Emoticon",
        Devices: "Devices",
        Contact_us: "Contact us",
        Workspace: "Workspace",
        Folder_Del_Alert_1: "Please empty the folder before deleting it.",
        Folder_Del_Alert_2: "This will delete all the content in the folder.",
        UserNameIncorrect: "The username is incorrect.",
        Yes: "Yes",
        EmailValidateMsg: "Please enter a valid email address.",
        EmailExist: "The email address is already registered.",
        ModifyProfileSuccess: "Modify settings succeeded",
        NavBar_SpeedInstall: "Speed install",
        ToolTip_PhotosCount: "Photos: ",
        ToolTip_CreateDate: "Date:",
        Message_LoadAppsConfigError: "Failed to load configuration file. Please click OK to sign in again.",
        Msg_AppsConfigNotLoaded: "Failed to load configuration file.",
        Share_Faile: "Failed",
        Account: "Account",
        About: "About",
        Register: "Create an account",
        Enter_User_Password: "Please enter password.",
        NickName: "Nick name",
        Disconnect: "Disconnect",
        OldPasswordIncorrect: "Current password incorrect.",
        UnbindSuccess: "Unbind Success",
        Email: "Email",
        Connected: "Connected as {0}",
        FileLinkExisted: "There's already a shortcut for this folder.",
        Power_Saving_Tip: "Power saving mode activated and service stopped due to long time of inactivity.",
        TwitterAuthNameError: "Your twitter account name doesn't match {0}. Please try again.",
        RequestToAuth: "Please accept the connection on your device.",
        Find_Phone: "Find Phone",
        ConnectWith: "Connect with {0}",
        Change: "Change",
        Thief_Tip1: "Never lose your phone again!",
        LostMode: "Lost mode",
        Thief: "Intruder",
        fill_require: "All fields are required.",
        Searching_for_Device: "Searching for device",
        forgot_password: "Forgot password?",
        NoDeviceTip1: "No device found with this account",
        usage_month: "Data usage",
        upgrade_title: "Go Premium",
        premium: "Premium User",
        DataFlowNotAbleToUpload_P: "Remote Connection Mode data quota not enough. You can use AirDroid in same network environment for free, or upgrade to AirDroid Premium to get more.",
        RemoteMode_FileTooLarge_F: "Size for single file cannot exceed {0} MB in Remote Connection Mode. To transfer larger files, please use AirDroid in same Wi-Fi network environment, or upgrade to AirDroid Premium (up to {1} MB for a single file).",
        How_To_Sign_Up_S1: "Scan the QR code or <a href='{0}' target='_blank'>click here</a> to install AirDroid 2.",
        ZoomIn: "Zoom in",
        new_message: "New message",
        new_message_to: "New message",
        QCC_Fail_1: "Bank account was charged but failed to activate the item?",
        QCC_Fail_3: "Bank account was not charged?",
        upgrade_title1: "Remote Connection Mode quota used up?",
        QCC_Tip_7: "The pack will be added to the current month of your Premium membership.",
        Price: "Price: ",
        Increase_Quota: "Increase Quota",
        uninstall_app_tip: "Confirm uninstallation on your phone",
        operate_fail: "Sorry, your device is not supported yet.",
        ConnFAQ: "Still cannot connect? Try more detailed guide",
        delete_account: "Delete account ",
        delete_account_msg: "You can contact us directly if you need any help: {0} support@airdroid.com{1}.",
        opt_select_a_option: "Choose an option",
        delete_failure_try_later: "Failed to delete your account. Please retry later.",
        item_3: "Item: AirDroid Premium 2 Years",
        create_success: "Create success",
        edit_success: "Saved successfully",
        click_detail_contact: "Click contact to show details",
        label_website: "Website",
        group_repeat: "The group name is already in use.",
        premium_renewals: "Renew",
        premium_extend: "Renew",
        no_thieves_found: "No intruders detected:",
        success_cancel_autopay: "You've successfully canceled your Premium subscription.",
        no_thief_tip2: "AirDroid will use the front camera to take a photo of the intruder who attempted but failed to unlock your device. Location data will also be included when available.",
        get_device_location_failure: "Failed to retrieve location data",
        add_to_desktop: "Add to desktop",
        load_again: "Click {0}here{1} to reload",
        desktop_notification: "Desktop notification",
        add_desktop_success: "Added successfully",
        connect_device_error: "Failed to connect Android device. Please check the network.",
        need_connect_device: "Error. Your Android device is disconnected. Please connect again to continue.",
        item_4: "Item: AirDroid Premium 1 Month - Starter plan",
        label_year: "Year",
        premium_icon_value: "Best value",
        add_devices: "Add device",
        unlock: "Unlock",
        wipe_premium_tip: "This will reset your device to factory default. All personal data will be wiped.",
        present_t3_success_content: "Congratulations, you're now an AirDroid Premium user.",
        present_t4_fail_content: "Redemption failed. Possible causes:",
        present_t5_intro_title2: "One less screen",
        present_t5_intro_title3: "One less worry",
        present_server_error: 'Connection failed. Please check your network and click "Retry" later.',
        present_loginBefore_btn: "Sign in to Redeem",
        email_verify: "Email not verified. Verify now",
        email_verify_tip: "Email not verified",
        set_external_sdcard_tip: "If the external SD card is not detected, please set it manually.",
        set_external_sdcard: "Add external SD card",
        delete_external_sdcard_tip: "Delete the external SD card?",
        delete_file: "Delete file",
        default_replace_user_des: "If default user configuration file is loaded, some settings like desktop icons and shortcuts will not be saved. Other features will not be impacted.",
        camera_save_to_phone_success: "Photo saved to device",
        keep_device_tip: "Choose 2 devices to keep:",
        lights_off: "Flashlight off",
        scan_qr_tip: "Scan the QR code",
        free_user_add_device_tip: "Free account can only connect 2 devices. Upgrade to Premium account to connect up to 6.",
        mark_all_read: "Mark all as read",
        delete_account_msg2: "We’re sorry to see you go.",
        Lite2Web_title1: "Get the most out of AirDroid",
        Lite2Web_desc1: "You're using Lite mode. Visit the full version at {0}.",
        contact_no_name: " (No name) ",
        UsernameUsedOnTwitter: "The user name exists on Twitter",
        RequestRefused: "Connection rejected by device.{0} You can refresh this page to try again.",
        FlowTip: "Data usage for this month",
        How_To_Sign_Up: "How to sign up?",
        no_support_camera: "The feature is not supported by your current Android version (2.2 or lower).",
        placard_read: "Mark as read",
        ZoomOut: "Zoom out",
        Update_Beta_Title: "AirDroid Updated",
        search_name_title: "Contact name search",
        notification_message_title: "New message",
        connect_2: "Waking up device...",
        tell_detail: "Help us improve AirDroid by sharing some detailed feedback (Optional)",
        Pay_t2: "Refund records are not displayed",
        operate_success: "Success ",
        edit_group_label: "Edit group",
        label_profile: "Account",
        label_address: "Address",
        sure_to_cancel: "Are you sure you want to cancel your subscription? ",
        lab_tip1: "AirDroid Lab is a playground for new features. We'll regularly release new features when they're ready for public test.",
        labT1: "Features",
        cancel_default_device: "Remove default",
        default_connect_device: "Default device",
        unlock_success_tip: "Screen lock password is removed.",
        present_t5_intro_content2: "Send & receive SMS on computer, without looking at phone screen.",
        present_start_airdroid: "Start AirDroid",
        label_reload: "Reload",
        screenshot_save_to_phone_success: "Screenshot saved to device",
        lights_on_fail: "Failed to turn on flashlight.",
        UnboundTitle: "No device found with your account. Please add a device to continue:",
        input_site_name_and_url_please: " Please enter website name and URL",
        attach_size_limit: "Maximum size: 10 MB",
        copy_file_success: "Files copied",
        attach_past_due: "File expired.",
        label_verify: "Verified",
        device_number_tip: "Number of devices connected: {0} ",
        beta_to_release_tip: "It seems that you're using a production version of AirDroid. You'll be redirected to the corresponding web app for it. You can {0}join our test community{1} to become a beta tester.",
        Lite2Web_title3: "Find phone and protect data",
        Lite2Web_desc3: "Locate your phone, and wipe all data if you cannot get it back.",
        Lite2Web_title2: "Local or remote network",
        upload_Permission_Denied: "Failed to upload. No write permission to SD card.",
        url_link_exist: "The URL name already exists. ",
        flash_player_update: "Your Flash Player version is not supported. Please upgrade it to the latest version.",
        browser_nosupport_title: "Your web browser is not supported. Please upgrade to the latest version or try one of the following browsers.",
        delete_thief_fail: "Failed to delete",
        external_sd_might_be_limited_detail: "Due to system restrictions of Android 4.4+, some operations like uploading, deleting and creating new files on the external SD card may not be supported.",
        open_desktop_sound: "Enable notification sound",
        Connecting: "Device not responding.",
        ToolTip_Next: "Next[Right Arrow]",
        notify_me_when_find: "Notify me when found",
        present_guest_error: "3. You haven't signed in to this Chromebook using a Google account. Please sign in and try again later.",
        Reinstall: "Reinstall",
        Message_Forbidden: "Connection timed out. Please try again.",
        NavBar_SpeedUpload: "Speed upload",
        ToolTip_Prev: "Prev[Left Arrow]",
        ToolTip_RotateLeft: "Rotate Left[Up Arrow]",
        ToolTip_RotateRight: "Rotate Right[Down Arrow]",
        Export: "Download",
        ZipedAndExport: "Download as ZIP",
        LoadingMore: "Older Threads",
        Label_TypeColumn: "Type",
        Label_FormatColumn: "Format",
        Label_ModifyDateColumn: "Date Modified",
        ToolTip_Size: "Size:",
        msg_SameFileName: "Name not changed",
        TipText_Forward: "Forward",
        Continue: "Continue",
        Folder_Contact: "Folder shortcut",
        File_System: "Android file system",
        Languages: "Languages",
        Move_To: "Move to",
        KeepLogin: "Stay signed in for 2 weeks",
        PasswordIncorrect: "The email and password combination is incorrect. ",
        Connecting_To_Device: "Connecting to device...",
        Failed_To_Conn_Device: "Failed to connect to device.",
        Connect_Twiiter_reg: "Connect with Twitter to Register this username",
        Change_Diff_UserName: "Use a different username",
        SignUp: "Sign Up",
        UserNameValidateMsg: 'Only use letters, numbers and "_"',
        Enter_Nickname: "Please enter nickname.",
        SelectAll: "Select all",
        Cut: "Cut",
        Play: "Play",
        Download: "Download",
        NewSms: "New Message",
        ToolTip_Duration: "Duration:",
        msg_FileHasIllegalCharacter: 'The following characters are not supported:  / : * ? " < > ,| &',
        InputDynamicText_Search: "Search for apps",
        Loading: "Loading...",
        Shared_Via_Airdroid_Facebook: "shared from AirDroid",
        Logout: "Sign out",
        Password: "Password",
        Or_You_May_QR: "Scan QR code",
        Failed_To_Signin: "Failed to sign in.",
        ModifyProfileFail: "Modify settings failed",
        NewPwdEqualOldPwd: "Password not changed, please try again.",
        RegFailded: "Failed to register.",
        NewPassword: "New password",
        NotBound: "No connected device.",
        UnboundS1: "Install AirDroid to the device you want to manage.",
        UnboundS2: "Open AirDroid and press the Account button.",
        QrNotSameWifiNoAccount: "To sign in via QR code, it's required to sign in to an account on the device, unless the device and computer are on the same Wi-Fi network.",
        UseAccountLogin: "Sign in to an account.",
        EditContact_Success: "Edit contact icon success.",
        RequireLogin: "You need to create an account to use this feature.",
        SureToExitAndCloseTab: "Do you really want to quit and close this page?",
        UserCenterTabTip3: "Connect with SNS accounts to share photos with your friends. The SNS account you signed in with can not be disconnected.",
        NotBoundDevice: "No connected device.",
        UserNameExist: "The user name is occupied.",
        UnboundS3: "Sign in to your account and refresh this page.",
        UserCenterTabTip2: "It's highly recommended to use a high-strength password to better protect your account security.",
        Flow: "Data usage",
        rotate: "Rotate",
        closing_camera: "Closing camera",
        upgrade_des: "Get the ultimate AirDroid experience.",
        Change_Email: "Change email",
        search_key_title: "Full text search",
        connect_12: "Connected to device",
        connect_14: "Network checking completed",
        LiteConnectMode_tip: "You may need to wait for a few seconds for the alert to appear on your device.",
        opt_change_email: "I want to change email",
        Pay_o: "Order",
        Pay_t3: "All prices include tax",
        select_group: "Select group",
        group_name_null: "Please input group name",
        Pay_total: "Total",
        find_my_phone_instruction: "Help",
        normal: "General",
        "default": "Set default",
        connect_stop_tip: "Connection interrupted. Please check the network and retry.",
        send_email_timer: "Resend in {0}s",
        premium_feature_list_title: "Premium Exclusives",
        select_your_device: "Choose a device",
        select_a_device: "Choose a device",
        unbind_device_fail_tip: "Failed to delete device. Please retry.",
        present_t1_content: "Samsung Chromebook 2 Only. Sponsored by Samsung and AirDroid.",
        present_t5_about: "What is AirDroid?",
        present_login_signUp: "Sign up",
        present_loginAfter_btn: "Redeem",
        use_default_appconfig: "Load default",
        lights_on: "Flashlight on",
        pay_fail: "Failed",
        pay_type_code: "Activation Code - {0}",
        save_percent: "Save {0}",
        cancel_all: "Cancel all",
        device_set_default: "Connected by default on signing in:",
        Enter_Email: "Please enter email.",
        Tip_Number: "Phone number",
        continue_use_oldversion: "Update next time",
        How_To_Sign_Up_S3: "Sign in on the web side with the same credential.",
        or: "or",
        Update_1x_Title2: "AirDroid was just updated. Please update your AirDroid to the latest version for better experience. {0} Update now {1}",
        label_homepage: "Homepage",
        upgrade_premium: "Upgrade to Premium",
        email_verify_fail: "Failed to send email. Please retry later.",
        sms_cannot_delete_tip: "Sorry, AirDroid does not support deleting SMS on Android 4.4+.",
        connect_other_device: "Connect another device",
        switch_update_tip: 'The AirDroid app on your device is not the latest one. Please update the app. Or, if you want to keep it, please click "Update next time".',
        present_t3_success_expire: "Your Premium term: {0}",
        present_t5_about_learnMore: "Learn more",
        pay_status: "Status",
        mem_tip: "{0} day(s) remaining",
        click_to_choose_path: "Select",
        ContainInvalidChar: "The nickname should not contain: {0}",
        Setting: "Settings",
        NavBar_MultipleDesktops: "Multiple desktops",
        ToolTip_SetAsWallpaper: "Set as wallpaper",
        NewFolder: "New folder",
        Install: "Install",
        Server_Stop: "Service stopped by device.",
        msg_FileNameIsNull: "A unique name is required.",
        Back: "Back",
        Share_Success: "Succeeded",
        Already_have_account: "Sign in to continue",
        ConfirmPwdValidateMsg: "Passwords do not match.",
        Rename: "Rename",
        Tip_GridView: "Grid view",
        Button_Close: "Close",
        TipText_Edit: "Edit",
        Shared_Via_Airdroid_Twitter: "shared from AirDroid",
        Call_Out: "Call",
        ConfirmPassword: "Confirm password",
        Bind: "Bind",
        Send_Message: "Send message",
        login_with: "Sign in with",
        connect_1: "Searching for device...",
        connect_3: "Checking network...",
        SNS: "SNS",
        placard_detail: "Details",
        other: "Other",
        share_services: "Sharing services",
        Clear: "Clear",
        NavBar_ShowDesktop: "Show desktop",
        Refresh: "Refresh",
        Copy: "Copy",
        ToolTip_Name: "Name:",
        ToolTip_Share: "Share",
        Import: "Upload",
        No_Search_For: "No results",
        desktop_sound: "Notification sound",
        ChangeLangTip: "Restart AirDroid to take effect",
        start_camera_error: "Failed to launch camera. Please exit camera on the device or {0} try again {1}.",
        account_type: "User type",
        free: "Free User",
        How_To_Sign_Up_Title: "How to register for an AirDroid account?",
        present_t4_fail_tip1: "1. The offer has already been redeemed on your device.",
        Drag_APK: "Drag & Drop APKs here",
        Change_Email_Address: "Change email address",
        QCC_Tip_2: "Item: Remote Connection Extra: 1GB.",
        QCC_Fail_2: "It may be a result of network delay. Please don’t worry. We’ll restore it as soon as possible.",
        QCC_Fail_4: "You can try to make the payment again. If still no luck, please contact PayPal or your bank",
        check_find_phone: "Checking if Find Phone is activated...",
        connect_6: "Found your device",
        connect_8: "Failed to wake up",
        Pay_w: "Item",
        sure_delete_group: "Are you sure you want to delete group {0}?",
        delete_from_desktop: "Delete from desktop",
        email_tip1: "AirDroid news",
        select_pay_mode: "Select your AirDroid Premium plan",
        premium_year_des: "Buy 2 years and get 1 year for free",
        select_a_device_tip: "Sorry, there're {0} devices under your account. Multiple device support is a Premium exclusive feature. You can choose to upgrade to Premium account or select 1 device and delete others.",
        bind_more_tip: "To add a new device, please go to that device and sign in to the current AirDroid account.",
        Msg_Srv_Unavailable_3: "Try Lite mode if your Android device and computer are on the same Wi-Fi network.",
        labT2: "Requirements",
        Tip_ListView: "List view",
        Shortcut_Contact: "Contact shortcut",
        UnbindFailed: "Unbind Failed",
        ProgramProcess: "Loading app resources...",
        UserCenterTabTip1: "The email address will be used to recover your password.",
        Contact_Tip: "AirDroid Internet is still under early beta test. To control our cost, there's a free monthly data usage quota of {0} for you. If you need more, please contact us. We may add options of increasing it later.",
        FindPhone_Num_Tip: "Enter a phone number that can reach you. It will be displayed on the lost device.",
        Thief_Tip3: "This feature is coming soon.",
        Need_Premium: "Get the feature for free by sharing AirDroid to your friends, or upgrade to Premium.",
        first_camera_tip: "Camera on the device will be temporarily disabled while you're using it in AirDroid.",
        How_To_Sign_Up_S2: "Register for an account from AirDroid on your device and sign in.",
        Confirm_Email: "Confirm email",
        phone_location_close: "Location access not enabled on your device and Find Phone may not be able to locate your device.",
        ScanQRCodeToInstall: "Scan QR Code to Install",
        incoming_call: "Incoming call from {0}",
        check_contact: "View contact",
        connect_4: "Using Local Connection Mode...",
        connect_13: "Failed to connect to device",
        tell_why: "Reason for leaving",
        opt_unbind_sns: "I want to disconnect SNS account",
        tip_reason_null: "Please choose your reason for leaving.",
        item_1: "Item: AirDroid Premium 1 Month",
        usepaypal: "*Pay with PayPal",
        Pay_p: "Payment type",
        Pay_t1: "Only displays purchase history from the last 24 months",
        edit_failed: "Failed to save",
        add_group: "Add group",
        contact_need_tip: "Phone and Name are required.",
        confirm_save_contact: "Save modification?",
        premium_expire_tip: "Your Premium membership will expire on: {0}.",
        payment_account_success: "Your payment for AirDroid Premium has been successfully received.",
        no_thief_tip1: "You need to turn on screen lock in your device's settings or via AirDroid Lost mode in Find Phone.",
        reconnect_expired: "Please sign in again for account security.",
        email_success_tip1: "An email was sent to your email address: {0}. Please click the verification link to verify your address.",
        click_new_contact: 'Click "New contact" to create a new contact',
        select_default_device_tip: "Connect this device by default next time",
        unbind_device_success_tip: "Device deleted.",
        unbind_device_tip: "You are trying to delete {0}. To ensure the security of your device, please enter your AirDroid password.",
        unlock_tip: "Please note that this feature will remove the screen lock password of the device. Continue?",
        present_t5_intro_content1: "Move things on and off your Android device without a USB cable.",
        present_t5_intro_content3: "Lost your phone? No worry, use AirDroid to locate or lock it remotely.",
        present_t6_retry: "Retry",
        switch_device_label: "Switch device",
        android_version_no_support_tip: "Android 2.1 and lower is not supported by AirDroid 2.0.7 and later. You can continue with the existing version.",
        add_device_title: "Add a device",
        click_to_choose_external_sdcard: "Choose external SD card path",
        server_network_error_tip: "Failed to access server, please {0}retry{1}.",
        lable_or: "or",
        drag_drop_or_click_to_upload: "Drag & Drop files or folders here to upload",
        video_fluency_tip: "Loading time and video smoothness will depend on network quality.",
        release_to_beta_tip: "It seems that you're using a beta version of AirDroid. You'll be redirected to the corresponding web app for it.",
        cancel_desktop_notification: "You can re-enable AirDroid desktop notifications in Chrome if you've disabled them before.",
        Enter_User_Name: "Please enter user name.",
        ChangePwdFail: "Failed to change password.",
        Account_Logout_Tip: "The account is signed out on the mobile app and service has stopped!",
        MonthDataFlowOverage: "Your monthly data quota for Remote Connection Mode is used up and you'll no longer be able to use some features under Remote Connection Mode.",
        Thief_Tip2: "AirDroid can take a photo of the face of the intruder who tried and failed to unlock your device.",
        change: "Switch",
        Free_User_Overage_Tip: "Your remote data quota is exhausted. Get more remote data for free by sharing AirDroid to your friends, or upgrade to Premium. There isn't data cap in local connection.",
        Premium_User_Overage_Tip: "The Remote Connection Mode data quota in your AirDroid Premium plan is exhausted. ",
        login_with2: "Sign in with {0}",
        QCC_Tip_1: "Please finish the payment in the new page.",
        "1gbExtra_add_success": "The 1GB Remote Connection Extra has been added to your account.",
        QCC_BTN_1: "I've made the payment",
        QCC_Tip_5: "Remote Connection Extra: 1 GB",
        QCC_Tip_8: "The pack expires on {0} ({1} day(s) remaining).",
        connect_10: "Connection Mode: Remote Connection Mode",
        ReConnect: "Reconnect",
        item_2: "Item: AirDroid Premium 1 Year",
        add_field: "Add field",
        go_premium: "Go Premium",
        Message_LoadUserConfigError: "Failed to load user configuration file. Please click OK to sign in again.",
        label_reconnect: "Reconnect",
        connect_device_tip: "Connecting to Android device...",
        present_t4_fail_tip2: "2. Currently only selected Samsung Chromebooks are eligible for this offer.",
        Lite2Web_desc2: " Access your Android device remotely through any network.",
        delete_thief_confrim: "Are you sure you want to delete this record?",
        PasswordValidateMsg: "Password must contain at least 8 characters, including a number and a letter.",
        Message_NetWorkError: "Network Failure.",
        Label_NameColumn: "Name",
        Checking: "Verifying",
        SureToExit: "Do you really want to sign out?",
        no_placard_tip: "No new alert",
        mem_since: "Membership",
        add_contact: "Add to contacts",
        QCC_Confirm_payment: "Confirm payment",
        QCC_Tip_3: "Please don’t close this page before the payment is completed.",
        connect_5: "Using Remote Connection Mode...",
        connect_7: "Woke up successfully",
        tip_reason_change_email: "You can {0} change your account email {1} in AirDroid.",
        new_group_label: "New group",
        cancel_autopay: "Cancel subscription",
        email_subscription: "Emails",
        email_tip2: "Promotion messages",
        premium_cancel_autopay: 'Auto renew (can be canceled later in "Account")',
        connect_device_name_tip: "Connecting to {0}, please wait...",
        add_more_devices: "Add more devices",
        present_t2_check_eligibility: "Checking eligibility, please wait...",
        present_login_signWith: "or sign in with",
        save_to_pc: "Save to computer",
        premium_expire_title: "Renew Your Premium Subscription",
        reserve_attach_confirm: "The file is available for download within 7 days and then will be permanently deleted.",
        fail_to_upload: "Failed to upload the file",
        cut_file_success: "Files cut",
        no_default_device: "choose a device",
        chromebook_question: "Any question, please send your device model to {0}support@airdroid.com{1} for assistance.",
        Input_Optional: "Optional",
        adjusted_registration_tip: "We've adjusted the registration process for better experience. Username is removed from AirDroid 2 and you can only use Email and password to sign in.",
        two_passwords_dont_match: "Email addresses don't match.",
        NoDeviceTip2: "Please connect a device to your account to continue",
        Remote_Need_Premium: "Get the feature for free by sharing AirDroid to your friends, or upgrade to Premium. There is no restriction in local connection mode.",
        Upgrade_to_Premium_User: "Upgrade to Premium User",
        google_server_unable: "Some services are not available or for other unknown reasons, Find Phone may not be able to locate your device.",
        Update_Beta_Title2: "AirDroid was just updated. Please update your AirDroid to the latest version for better experience. {0} Update now {1}",
        open_desktop_notification: "Enable desktop notifications",
        QCC_Tip_4: 'After you make the payment successfully, click "I\'ve made the payment" or close this window to finish the purchase process.',
        QCC_FailTitle: "The payment was not successful. Please check if your bank account has been charged.",
        QCC_Fail_5: "You can also email us for further assistance: pay@airdroid.com",
        upgrade_des1: "Add 1 GB Remote Connection Extra to your Premium account for only $1.99.",
        QCC_Tip_6: "Get another 1 GB remote connection quota for only $1.99.",
        install_app_tip: "Confirm installation on your phone.",
        connect_9: "Connection Mode: Locl Connection Mode",
        opt_dont_want_to_use: "I don't want to use AirDroid any more",
        opt_have_other_account: "I have another AirDroid account",
        delete_success: "Account successfully deleted.",
        sure_delete_contacts: "Delete these contacts?",
        group_name_label: "Group name",
        cancel_autopay_tip: "You'll be downgraded to free account when your current subscription expires. You can always subscribe again. ",
        geocode_device_location_failure: "Failed to parse the location data",
        lab_tip2: "All the lab features are experimental, and they may break or disappear at any time.",
        loadErrorTip: "Failed to load. Please check the network and retry.",
        sending_email: "Sending email...",
        premium_month_des: "Starter plan, 1 GB Remote Connection Mode data quota.",
        unlock_failed_tip: "Failed to remove screen lock password.",
        present_t1_theme: "AirDroid Premium 1 Year Gift",
        present_t5_about_description: "AirDroid is a free and fast Android app that helps you manage your Android phone/tablet from a web browser, all over the air.",
        default_replace_user_tip: "Failed to load your user configuration file. You can choose to load the default one or try again (Reload).",
        save_to_phone: "Save to phone/tablet",
        premium_down_des: "Your Premium membership has expired. You'll need to renew your subscription to keep all the devices with your account. Or, you can only keep up to 2 devices.",
        apk_decode_error: "There was problem parsing the package.",
        UnboundS4: "{0}Install AirDroid{1} to the device you want to manage.",
        camera_fluency_tip: "The actual frame rate can be affected by several factors including network quality, camera resolution and other specs of the Android device.",
        notification_set_setp1: "Click the 'View site information' button.",
        notification_set_setp2: 'Choose the "Always allow on this site" option in "Notifications"',
        Lite2Web_title4: "Connect all your Android devices",
        Lite2Web_desc4: "Connect all your Android devices to the same account.",
        How_to_set_notication: "How to set desktop notifications in other browsers",
        upload_network_error: "Failed to upload. Network error.",
        change_path: "Set file saving path on Android",
        attach_load_fail: "Failed to load file.",
        external_sd_might_be_limited: "External SD card access may be restricted",
        select_pay_mode_tip: "Upgrade to AirDroid Premium to enjoy all the Premium features.",
        got: "OK",
        Thief_Tip4: "Get the feature for free by sharing AirDroid to your friends, or upgrade to Premium.",
        remove_promotions: "Remove promotion",
        how_to_unlock: "How to get Bonus",
        folder_transfer: "Folder transfer (local)",
        multiple_devices: "Multiple devices",
        pay_now: "Upgrade",
        open_to_share: "Open AirDroid > Bonus on Android,  share AirDroid to your friends and enjoy bonus features for {0} days!",
        coming_soon_happy: "Coming soon! Merry Christmas and stay tuned!",
        intruders: "Catch intruders",
        share_for_free: "Share AirDroid with your friends to get bonus features for free!",
        download_for_windows: "Download AirDroid Windows",
        step3_words: "Share and enjoy Bonus!",
        windows_mac_clients: "Windows & Mac clients",
        step2_words: 'Tap "Share now".',
        premium_activation_code: "Receive AirDroid Premium gift codes for free every month. Spread fun by sharing the codes with your friends :-) ",
        unlock_now: "Get now",
        go_unlock: "Get now",
        label_user_unlock: "Bonus User",
        FlowRecover: "Quota resets in {0} day(s)",
        install_app: "Get AirDroid 3 on Google Play",
        download_for_mac: "Download AirDroid Mac",
        remote_camera: "Remote camera",
        label_premium_day: "{0} days",
        no_limit: "Unlimited",
        label_forgot: "Forgot",
        present_login_skip: "Skip",
        step1_words: 'Open AirDroid and tap "Bonus".',
        file_size: "File size (remote)",
        video_words_3: "Stay informed of allowed notifications from your Android.",
        video_words_1: "Respond to calls without looking at the phone.",
        video_words_2: "SMS on computer. Using the full keyboard, and mouse.",
        video_words_4: "All your files, travel freely between devices, without a cable.",
        video_words_5: "Fully access your phone, from a PC/Mac.",
        offline: "Offline"
    },
    Applications: {
        Message_ActionDone: "OK",
        TabName_SystemApp: "System",
        Message_Uninstalling: "Uninstalling...",
        Message_InstallingApp: "Installing [{0}]...",
        Message_SureToUninstallSelectedApp: "Uninstall the selected {0} apps?",
        Button_InstallApp: "Install app",
        Button_InstallUnknownSourceAppGuide: "User guide",
        Message_ConfirmToUninstallApp: "Are you sure to uninstall {0}?",
        Message_UploadingError: "Error while uploading {0}.",
        Message_ReinstallStartSuc: "Re-installation triggered. ",
        Suffix_InstallInQueue: "queuing",
        ZipName_AppDefaultExportName: "Apps_downloaded_by_AirDroid",
        Label_InstalledDateColumn: "Date installed",
        Message_UninstallError: "App not installed or is already uninstalled.",
        Message_UninstallApp: "Uninstalling [{0}]...",
        Message_Uploading: "Uploading...",
        Message_TapOnDevice: "Tap on device",
        Message_InstallingAppError: "An error occurred during installation.{0}Operation aborted.",
        Label_InstallTip: "Proceed on your Android to complete the installation.",
        Message_UninstallSucceed: "Uninstall success.",
        Message_LoadAppListError: "Failed to load apps list.",
        Message_SelectApp: ".apk",
        ToolTip_InstallUnknownSourceApp: 'To allow installation of non-Market apps, please enable "Unknown sources" on your Android.',
        Message_NOfAppsProhibited: "Copying of below {0} app(s) is prohibited.",
        Message_AppProhibitedTip: "Copy Protection is a publishing option by developers to prevent copying of their apps from the device.",
        TabName_Recommends: "Recommends",
        Button_UninstallApp: "Uninstall",
        TabName_UserApp: "User"
    },
    SMS: {
        Contact_Label_WorkFax: "Work Fax",
        CallogTab_Incoming: "Incoming",
        Contact_Label_Note: "Note",
        Contact_Button_Save: "Save",
        Message_MultiChatTaskItem: "Chat ({0})",
        Message_Loading: "Loading...",
        Lable_SmsTo: "To",
        Chat_TabName_Chat: "Chat",
        CallLog_Lable_DurationColumn: "Duration",
        Contact_Label_Phone: "Number",
        Contact_Label_HomePhone: "Home",
        Contact_Button_Create: "Create",
        Contact_Label_Group: "Group",
        Contact_Lable_NameColumn: "Name",
        Message_SureToDeleteThisThread: "Are you sure to delete this thread?",
        ToolTip_Call: "Call out",
        ContactSelectorDefault: "Select a custom group...",
        MIUI_SMS_Line1: 'Click Send again, then tap "Allow" on your Android device to grant AirDroid the permissions needed.',
        MIUI_SMS_Line2: "If your Android device is not notifying you, please go to your permission management app (like Superuser) to manually grant AirDroid SMS permissions.",
        TimestampTip: 'Wrong timestamp on message? Click "Settings" to correct it.',
        Message_ReadContactInfoFailed: "Error while loading contact info.",
        Message_SureToDeleteCallLog: "Are you sure to delete this call log?",
        Message_SmsSendSucceed: "Message sent.",
        CallLog_Lable_TimeOfCalls: "Time",
        Contact_Label_Search: "Search",
        Contact_Label_OtherPhone: "Other",
        Message_DeleteMessageFailure: "Failed to delete this message.",
        ToolTip_DeleteCallLog: "Delete this call log",
        ToolTip_CreateContactInfo: "Create new contact with this number",
        Message_LoadingThreadListFailure: "Failed to load SMS threads.",
        Message_NotAllThreadDeleted: "Error. Only part of the selected threads deleted.",
        Message_SendFailBecauseOfRErrId: "Failed to send message. Please check on your device if it's successfully sent.",
        Message_CreateChatWindowError: "Error while loading.",
        CallLog_Lable_NumberColumn: "Number",
        Chat_TabName_ContactInfo: "Contact info",
        Chat_TabName_CallLog: "Call Logs",
        Chat_ToolTip_EnterCtrlToSend: "[Ctrl+Enter] to Send",
        Message_SureToDeleteMessage: "Are you sure to delete this message?",
        ToolTip_RequirePermission: "Permissions are required on your device to send SMS via AirDroid.",
        Message_ContactInfoSaveFailure: "Failed to modify contact.",
        Message_CreateContactInfoFailed: "Failed to create contact.",
        Message_LoadGroupsFailure: "Failed to load groups.",
        Message_LoadCallLogsFailure: "Failed to load call logs.",
        Message_DeleteCallLogFailure: "Failed to delete this call log.",
        CallLog_Lable_TypeColumn: "Call",
        Chat_Button_Send: "Send",
        Chat_ToolTip_EnterToSend: "[Enter] to Send",
        Sms_ToolTip_Delete: "Delete",
        Contact_Label_WorkPhone: "Work",
        Message_DeleteCurrentChatFailure: "Failed to delete selected thread(s).",
        Message_CreateContactInfo: "There is no phone number with this contact. Edit?",
        Message_SureToDeleteCallLogs: "Are you sure to delete the selected call logs?",
        Message_NotAllCallLogDeleted: "Error. Only some of the selected call logs were deleted.",
        Message_LoadingGroupContactsFailure: "Failed to load group contacts",
        Message_SendFailBecauseOfARConn: "Error while communicating with device.",
        Message_SendFailBecauseOfDataErr: "Error. Failed to send message.",
        Count_Contacts: "{0} Contacts",
        CallogTab_Missed: "Missed",
        Message_LoadingSMSFailure: "Error while loading SMS threads.",
        Button_NewContact: "New contact",
        ToolTip_NamesNumbersSeparateComma: "Input names or numbers and separate them with comma.",
        ToolTip_ClickToChat: "Start SMS chat",
        Contact_Lable_NumberColumn: "Number",
        Confirm_ReSendThisSMS: "Are you sure to resend this message?",
        CallogTab_Outgoing: "Outgoing",
        CallLog_Lable_NameColumn: "Name",
        Message_ReveivedMessage: "Received {1} message(s) from {0}",
        Message_PhoneSelected: "selected",
        Message_CanNotDeleteContact: "Can't  edit contact while loading.",
        Sms_Button_SelectContact: "Contacts",
        Chat_MoreMessage: "More messages",
        Message_ContactInfoSaveSucceed: "Contact info saved.",
        Message_CreateContactInfoSucceed: "Contact created.",
        Cut_Fail: "Cut failed",
        Message_ReadSmsError: "Failed to load new message.",
        Contact_Label_MobilePhone: "Mobile",
        Contact_Label_HomeFax: "Home Fax",
        Contact_all_numbers: "All phone numbers",
        Message_SureToDeleteSelectedThread: "Are you sure to delete the selected threads?",
        Contact_Label_Name: "Name",
        Message_NotAllLoaded: "Failed to load all contacts in this group.",
        ToolTip_PleaseWait: "Please wait...",
        CallogTab_All: "All",
        Message_InputContactSenseFailure: "No matches.",
        Message_NumberAndContentNeeded: "Number and Content are required.",
        Message_ContactFormatErrorOrPositionErrorFromPasted: "Invalid format or location error.",
        Message_ConfirmToDeleteContact: "Are you sure to delete contact {0}?",
        Message_StarFieldIsNeeded: "Fields marked with an asterisk (*) are required.",
        Contact_all: "All contacts"
    },
    Video: {
        VideoCategory_Camera: "Camera",
        VideoCategory_Others: "Others",
        Btn_PlayAnyway: "Play anyway",
        Confirm_DeleteAllVideos: "Are you sure to delete all videos?",
        Tip_VideoTooLarge: "This video is larger than 100MB. We suggest that you download it before play.",
        Message_VideoPlayerError: "Player error.",
        Tip_QuickTime_Installation_1: "Please follow the browser's instructions or <a target='_blank' href='{0}'>download QuickTime here</a> to view the video.",
        Tip_FormatNotSupported: "Video format not supported. You can try download and play it using your desktop video player.",
        Message_StreamNotFound: "Stream not found.",
        Message_NoSupportThisType: "Video format not supported. ",
        CategoryCountSuffix_Items: "item(s)",
        Tip_CannnotPlay: "Failed to play video. You can try download and play it using your desktop video player.",
        Confirm_DeleteSingleVideo: "Are you sure to delete this video?",
        Message_ReadVideoListError: "Error while loading videos list.",
        Tip_QuickTime_Installation_2: "Restart your browser after the installation.",
        Message_DeleteFail: "Error while deleting videos.",
        Message_DeleteSuc: "Delete success.",
        Confirm_DeleteMultiVideos: "Are you sure to delete the selected videos?",
        Message_ReadVideoSummaryError: "Error while loading videos summary."
    },
    Browser: {
        TabName_Twitter: "Twitter",
        ToolTip_AddTab: "New Tab",
        ToolTip_Back: "Back",
        TabURL_SMSUserGuide: "http://www.airdroid.com/sms.html",
        TabName_Facebook: "Facebook",
        ToolTip_Forward: "Forward",
        TabURL_AppUserGuide: "http://www.airdroid.com/userguide.html?name=apps",
        TabName_UserGuide: "User Guide",
        TabName_TeamBlog: "Blog",
        TabName_NewTab: "New Tab",
        ToolTip_ListAllTabs: "All Tabs"
    },
    FindMyPhone: {
        Custom_Phone: "{0}'s phone",
        Button_Continue: "Continue",
        Send_Default: "Alert",
        Button_Cancel: "Cancel",
        Button_Send: "Send",
        Location_Time: "Location {0} minute(s) ago",
        location_load: "Locating device...",
        Enter_Pwd_Error: "Passcode doesn't match.",
        Wipe_Pre: "Enter AirDroid password",
        Wipe_Data: "Wiping device data...",
        Confirm_Content: "Enter AirDroid password",
        Confirm_Required: "Enter AirDroid password",
        Error_Code_Wipe_Fail: "Failed to wipe data on the device.",
        Login_Title: "Sign in again required",
        Device_Offline: "Your Android device is not accessible at this moment.",
        My_Device: "My device",
        Enter_Pwd: "Enter a passcode",
        Airdroid_Password: "AirDroid password",
        Load_Wrong_Tip2: "Click {0}here{1} to try again.",
        Low_Version_Tip: "Android version 2.1 and lower is not supported by Find Phone.",
        Location_Date: "location {0} ",
        Wipe_Title: "Wipe device",
        Wipe_Tip_Warning: "Warning: Your device will be reset to factory default! All personal data will be permanently deleted and can not be recovered!",
        Wipe_Sure_Tip: "Wipe device",
        ReEnter_Pwd: "Enter passcode again",
        Standard: "Standard",
        Satellite: "Satellite",
        Send_Tip: "Enter a message that will display with your phone number.",
        Button_Confirm: "Confirm",
        Confirm_Error: "Password is not correct",
        Error_Code_Send_Fail: "Failed to send the message.",
        Mask_Tip2: "Please enable this feature in AirDroid settings on your device and then {0}refresh{1}.",
        Wipe_Tip: "Your device will be reset to factory default!  All personal data will be permanently deleted and can not be recovered. Are you sure you want to wipe all data?",
        Send_Pre: "The device is lost. Please call me.",
        CAPS_Lock: "Caps Lock is on",
        Button_Wipe: "Wipe",
        Confirm_Title: "Alert",
        Error_Code_Lock_Fail: "Failed to lock the device.",
        Not_Find: "Failed to locate the device.",
        Hybrid: "Hybrid",
        Error_Code_Offline: "Your Android device is not accessible at this moment.",
        Phone_Tip: "Click to show operations",
        Send_loading: "Setting Lost mode...",
        Mask_Tip1: "Find Phone feature is not enabled on your device.",
        Login: "Sign in",
        Load_Wrong_Tip1: "Oops...something went wrong.",
        unlock_operation_sent: "Unlocking attempts started. The device will be unlocked once it goes online.",
        lock_operation_sent: "Locking attempts started. The device will be locked once it goes online. ",
        offline_wipe_operation_warn: "All data and configuration on this device will be permanently deleted and can not be recovered. Once wiped, AirDroid can not locate the device any more. Are you sure to wipe all data?",
        play_sound_operation_sent: "Ringing attempts started. The device will ring at maximum volume once it goes online.",
        wipe_operation_sent: "Wiping attempts started. The device will be wiped once it goes online."
    },
    Modules: {
        Ringtones: "Ringtones",
        Gift: "Gift",
        Add: "Add",
        Apps: "Apps",
        Photos: "Photos",
        SummaryDetail: "Summary",
        Lab: "Lab",
        DesktopFileList: "Folder shortcut",
        Music: "Music",
        upload: "Upload files",
        EditContact: "Edit contact",
        quickupload: "Upload files",
        Camera: "Camera",
        FrequentContacts: "Frequent",
        FindPhone: "Find Phone",
        Increase_Quota: "Increase Quota",
        ContactCut: "Crop picture",
        DesktopContact: "Contact shortcut",
        NewContact: "New contact",
        WebBrowser: "Web Browser",
        NewMessage: "New message",
        SelectContacts: "Select contacts",
        Recommends: "Recommends",
        Screenshot: "Screenshot",
        UserCenter: "Account",
        Premium: "Premium",
        FeedBack: "Feedback",
        Help: "Help",
        Video: "Videos",
        Quixey: "Quixey",
        Language: "Language",
        CallLog: "Call Logs",
        Messages: "Messages",
        Files: "Files",
        Contacts: "Contacts",
        Chat: "Chat",
        MessageSettings: "Message settings",
        Installapps: "Install apps",
        VideoPlayer: "Video Player",
        AudioPlayer: "Audio Player",
        Settings: "Settings",
        Unlock: "Bonus",
        Power: "Gift"
    },
    Music: {
        ToolTip_AlbumTracks: "Tracks:",
        Label_Artist: "Artist",
        ToolTip_AlbumName: "Album:",
        Label_Album: "Album",
        ToolTip_SortBySongs: "List view ",
        ToolTip_SortByAlbums: "Grid view",
        Message_SureToDeleteThisSong: "Are you sure to delete this song?",
        ZipName_MusicDefaultExportName: "Music_downloaded_by_AirDroid",
        Message_AlreadyNotification: "This song was already set as notification ringtone.",
        Message_SetPhoneRongtineSucceed: "New phone ringtone set.",
        MenuItem_SetAsNotification: "notification ringtone",
        Message_DeleteSongFailure: "Fail to delete.",
        Message_AlreadyPhoneRongtone: "This song was already set as phone ringtone.",
        Message_SetAlarmFailure: "Failed to set as alarm ringtone.",
        MenuItem_SetAsPhoneRingtone: "phone ringtone",
        MenuItem_SetAsAlarm: "alarm ringtone",
        Message_DeleteSongsFailure: "Failed to delete the selected songs.",
        Message_SetNotificationFailure: "Failed to set new notification ringtone.",
        Message_SetAlarmSucceed: "New alarm ringtone set.",
        ToolTip_AlbumArtist: "Artist:",
        Message_AlreadyAlarm: "This song was already set as alarm ringtone.",
        Message_SureToDeleteSelectedSongs: "Are you sure to delete the selected songs?",
        Message_SetPhoneRongtineFailure: "Failed to set new phone ringtone.",
        MenuItem_SetAs: "Set as",
        Message_SetNotificationSucceed: "New notification ringtone set."
    },
    Summary: {
        Title_SDStorage: "SD Card",
        Label_eBooks: "Books",
        Label_Photos: "Photos",
        Label_Messages: "Messages",
        Message_ReadAndroidSummaryError: "Error.",
        Button_SummaryDetail: "Detail",
        Title_exSDStorage: "External SD Card",
        Label_exSDStorage: "External SD Card (Available: {0})",
        Label_Music: "Music",
        Label_Contacts: "Contacts",
        Label_InternalStorage: "Internal Storage (Available: {0})",
        Label_SDStorage: "SD Card (Available: {0})",
        Label_Other: "Other",
        Label_Apps: "Apps",
        Coming_soon: "Coming soon",
        Label_Videos: "Videos",
        Title_InternalStorage: "Internal storage"
    },
    Hotkeys: {
        Lbl_ctrl_v: "Paste",
        Lbl_ctrl_x: "Cut",
        Lbl_ctrl_c: "Copy",
        Lbl_ctrl_a: "Select all",
        Btn_Hotkeys: "Hotkeys:",
        Lbl_HotkeysList: "Hotkeys:",
        Lbl_f2: "Rename",
        Lbl_delete: "Delete"
    },
    Filemanage: {
        System_Directory: "System",
        Message_RenameFailure: "Failed to rename {0}.",
        Message_FileHasIllegalCharacter: "A file name can't contain any of the following characters:  / : * ? \" < > ,| &",
        FileName_tooLong: "File name must be within {0} characters.",
        Message_FileNameExist: "A file with the same name already exists.",
        Message_FolderSummary: "{0} items",
        Message_FileNameIsNull: "You need to type a file name.",
        Message_FileItemMore: "More than 250 files are selected. It may take a while to load. Continue?",
        Msg_LoadFileTreeError: "Failed to load folder tree.",
        ZipName_FileDefaultExportName: "Files_downloaded_by_AirDroid",
        Message_FileExist: "A folder named {0} already exists. Please use another name.",
        Message_SureToDeleteFile: "Are you sure to delete this file?",
        Message_SureToDeleteSelectedFiles: "Are you sure to delete these {0} files?",
        Message_ListFolderFailure: "Failed to load folder {0}.",
        Message_SelectNoFiles: "No files selected.",
        Label_NewFolderName: "Folder name",
        Message_CreateFolderFailure: "Failed to create folder {0}.",
        MenuItem_Move: "Move",
        ExternalSD_Directory: "External SD",
        SDCard_Directory: "SD Card",
        CreateShortcut: "Create desktop shortcut",
        Message_CopyOrCutSucceed: "{0} files success.",
        Label_NewName: "New name",
        ToolTip_SelectedFiles: "{0} items selected",
        Msg_NOSdCard: "SD Card not found",
        SystemDirectoryWarn2: "Modifying or deleting system files may cause system error, please be cautious.",
        SystemDirectoryWarn1: "Warnings",
        Message_SameFileName: "File name remains the same.",
        Message_CopySelfError: "The destination folder is a subfolder of the source folder.",
        SystemDirectoryWarn3: "Operations on some system files may fail due to unpredictable file permissions.",
        Action_Permission_Denied: "Operation failed. No write permission to SD card."
    },
    DialPad: {
        Call_Answer: "Connected",
        Call_Out_End: "End call",
        Button_Message: "Message",
        Call_Ring_Title: "Incoming call",
        Call_Notice: "{0} missed call(s)",
        Call_Out: "Calling",
        Button_Call: "Call",
        Call_Reject: "Reject",
        Add_Contact: "Add to contacts",
        Call_Out_Tip: "Please proceed on device.",
        Call_Reject_Send: "Reject with message"
    },
    Upload: {
        Label_UploadFailure: "Failed",
        Label_UPloadCanced: "Canceled",
        Button_SelectFolder: "Select folder",
        Lable_InstallApps: "Install apps",
        Label_PhotoTypesDesc: "Select photos",
        WindowTitle_ImportMusic: "Upload music",
        FileDropTip: "Drag & Drop files or folders here to upload",
        Msg_File_TooLarge: "File size exceeds the limit of your web browser.",
        Button_ClearSucceed: "Clear uploaded",
        ToolTip_ClearSucceed: "Clear uploaded files",
        NameExistSureRename: "Folder {0} already exist. Rename as {1}?",
        RemoteMode_FileTooLarge: "Size for single file cannot exceed {0} MB in Remote Connection Mode. To transfer larger files, please use AirDroid in same Wi-Fi network environment.",
        Msg_not_avail: "Failed to upload. Not enough free space on SD card. ",
        Message_SureToStopUploadFiles: "Will stop uploading. Are you sure to close the window?",
        Label_FileTypesDesc: "Select files",
        Label_MusicTypesDesc: "Select music",
        Label_RingtoneTypesDesc: "Select ringtones",
        WindowTitle_ImportPhotos: "Upload photos",
        WindowTitle_ImportFiles: "Upload files",
        notsupportdragfolders: "Drag & Drop for folders is not supported under current browser.",
        ApkDropTip: "Drag & Drop apps here to install",
        Tip_UploadTo: "Target folder: {0}",
        DataFlowNotAbleToUpload: "Your remaining monthly data quota for Remote Connection Mode is not enough for transferring this file.",
        Label_ApkSucceedTip: "Success. Proceed on device.",
        WindowTitle_ImportRingtones: "Upload ringtones",
        Label_UPloadSucceed: "Success",
        OnlySupportChrome: "Folders upload is only supported by Chrome.",
        Message_SuportFileTypes: "Supporting {0}",
        Button_SelectFiles: "Select files",
        Label_UploadWaiting: "Waiting",
        Label_ProgressColumn: "Progress"
    },
    AirTransport: {
        Button_FromDevice: "Save",
        Clipboard: "Clipboard",
        clear: "Clear",
        Url: "URL",
        OpacityTip_OpenURLSuccess: "Opened successfully. Please check on device.",
        Message_ReadClipFromDeviceFailure: "Failed to read clipboard content from device.",
        Button_ToDevice: "Refresh",
        Drag_Files: "Drag & Drop files or folders here",
        Upload_Success: "{0} succeeded",
        Select_File: "Select file",
        App: "App",
        Input_PlaceHolder: "Clipboard",
        Message_SendClipToDeviceFailure: "Failed to send clipboard content to device.",
        File: "File",
        OpacityTip_OpenURLFail: "Failed to open on device. Please retry.",
        Message_ContentTooLong: "Error. Content too long.{0}{1} exceeded characters.",
        Message_SendToDeviceClipBoardSucceed: "Saved to device clipboard.",
        Main_Button_OpenInDevice: "Open on device",
        Proceed_Device: "Please proceed on device.",
        Upload_Faile: "{0} failed, {1} succeeded",
        Update_To: "Upload to"
    },
    Camera: {
        Tip_Photo: "Take a shot",
        underDevTip: "The feature is currently under development. Please check back again later.",
        Tip_networkspeed: "Your network is too slow currently",
        Tip_fullscreen: "Enter full screen",
        Tip_reStart: "It seems that your camera is closed. {0} Try Restart{1}",
        Tip_StopError: "Failed to close camera",
        Tip_StartError: "Failed to start camera",
        tip: "Press [F11] to enter full screen. Press [ESC] to exit.",
        Tip_stop: "Stop realtime",
        Tip_play: "Realtime"
    },
    Ringtone: {
        TabName_Alarm: "Alarm",
        Message_SureToDeleteRingtone: "Are you sure to delete this ringtone?",
        Message_SureToDeleteSelectedRingtones: "Are you sure to delete the selected ringtones?",
        Message_DeleteRingtoneFailure: "Failed to delete this ringtone.",
        TabName_Notification: "Notification",
        ZipName_RingtoneDefaultExportName: "Ringtone_downloaded_by_AirDroid",
        Button_Set: "Set",
        Message_CanNotDelete: "Can't delete system ringtones.",
        Message_RingtoneInUse: "This ringtone is in use.",
        TabName_Ringtone: "Phone"
    },
    Welcome: {
        t9: "Share the news",
        t26: "Priority support",
        t6: "Locate and lock your Android when it’s lost. Cannot get it back? Simply wipe all data remotely.",
        share_on: "Share on {0}",
        share_cnt: "Discover AirDroid 2, the best free app that lets you manage Android in web browser: {0}",
        t20: "More advanced features",
        t22: "Folder Transfer",
        t23: "Transfer file folders with AirDroid Windows & Mac. (local connection only)",
        t28: "Go Premium",
        t16: "Larger files",
        t17: "Transfer larger files by remote transfer, 1GB with Windows & Mac, and 100MB with Web.",
        t30: "Take photos of people trying to unlock your device. Find Phone mobile: f.airdroid.com.",
        t14: "Unlimited file transfer",
        t19: "See through the lens of your Android device's camera remotely.",
        t12: "Start AirDroid 2 Premium",
        t5: "One less worry",
        t18: "Remote Camera",
        t1: "One less cable",
        t11: "Your free 2-month AirDroid 2 Premium membership is activated. Enjoy the full AirDroid 2 experience :-)",
        t2: "Move things on and off your Android device without a USB cable. Even when the device is not nearby.",
        t3: "One less screen",
        t10: "You’ve upgraded to AirDroid 2 Premium",
        t25: "Connect up to 6 devices to 1 AirDroid account.",
        t4: "Send and receive SMS from your big-screen computer, without being distracted by the small-screen thing.",
        t7: "Get AirDroid 2 Premium for free!",
        t13: "Failed, please try again.",
        t8: "Share AirDroid 2 on Facebook or Twitter and get 2-month premium membership for free. Limited time offer.",
        t24: "Multiple device support",
        t27: "You’ll be sent to the front of the queue for faster support response.",
        t29: "Catch intruders",
        t15: "Transfer unlimited files by remote connection.",
        t21: "Remove promotion messages. Dial phone numbers remotely from the web and talk on the phone."
    },
    AudioPlayer: {
        Btn_Play: "Play",
        MI_LoopOn: "Repeat all",
        Btn_Pause: "Pause",
        Btn_Mute: "Mute",
        Btn_Next: "Next",
        Btn_Unmute: "Unmute",
        SupportDesc: "Failed to load the player. Please try to install Flash plugin.",
        NotSupportError: "Error",
        MI_LoopOff: "Repeat off",
        MI_RepeatOne: "Repeat current",
        TypeNotSupport: "File type not supported.",
        Btn_Prev: "Previous"
    },
    SSLTip: {
        Btn_Gotit: "Got it.",
        Btn_Donotremind: "Don't display this next time.",
        Tip_SSLCommon: "Hypertext Transfer Protocol Secure (HTTPS) provides encrypted communication and secure identification. Your browser may display a warning and you can safely ignore it. This message appears because the certificate used by AirDroid is self-signed. Example:",
        Tip_Chrome: 'Google Chrome will display a warning titled "The site\'s security certificate is not trusted!" the first time your try to sign in via secured connection option. Click “Proceed anyway” to continue.',
        Tip_FFStep1: 'Firefox will display a warning titled "This Connection is Untrusted" the first time your try to sign in via secured connection option. Click "I Understand the Risks", then "Add Exception".',
        Tip_Safari: 'Safari will display a warning titled "Safari can\'t verify the identity of the website xxxx" the first time your try to sign in via secured connection option. Click "Continue" to login.',
        Tip_FFStep2: 'Click "Confirm Security Exception" to continue. '
    },
    Login: {
        Message_NetworkError: "Failed to connect. Please check your network.",
        Msg_Srv_Unavailable: "Connection Failed. Troubleshooting guide:",
        Msg_Srv_Unavailable_2: "Unlock or wake up your Android device",
        Message_Connecting: "Connecting to Device...",
        Message_AlreadyLogin: "Your account is already signed in somewhere else.",
        Option_SSL: "Use secured connection (https)",
        Cookies_Required: "Cookies are not enabled on your browser. Please adjust this in your security preferences before continuing.",
        btn_OK: "OK",
        Btn_LogInAgain: "Sign in again",
        Label_Version: "Version: ",
        Msg_KickOut: "Your account is signed in elsewhere.{0}You will now be signed out.",
        Button_Login: "Sign in",
        Not_LanNetwork: "Failed to connect. Make sure your device is connected to a same Wi-Fi network.",
        Msg_Srv_Unavailable_1: "Check the network of your device",
        Tip_KickOut: "If this is not your operation, we recommend that you change password to protect your privacy."
    },
    BrowserTip: {
        BrowserTip2: "Support for other browsers is experimental.",
        BrowserGo: "Continue with the current browser. >>",
        BrowserTip1: "{0}We keep improving AirDroid's performance on various browsers.{1}{2}For best performance we highly recommend that you choose one of the{3}{4}recommended browsers(listed below).{5}"
    },
    Screenshot: {
        Tip_GrantRootPerm: "If your Android device is not notifying you, please go to your root permission management app (like {0}) to manually grant AirDroid root permissions.",
        RootTip_Root_A_2_2: "After your Android device is rooted, open AirDroid and try the Screenshot feature again. It’s awesome, especially the experimental ability to view everything on your android’s screen in real-time.",
        RootTip_Root_Q_3: "Why root permissions are required by AirDroid to capture screenshots?",
        Tip_fullscreen: "Enter full screen",
        RootTip_Root_Q_4: "Will the screenshot feature affect my Android system?",
        tip: "Press [F11] to enter full screen mode. Press [ESC] to exit.",
        RootTip_Root_A_1: 'Rooting is a process allowing users of mobile phones, tablet PCs, and other devices running the Android operating system to attain privileged control (known as "root access") within Android\'s subsystem. {0}Learn More{1}',
        Tip_AllowRootPerm: "If your device is already rooted, please press Allow on your Android device to grant AirDroid the permissions needed:",
        Tip_GettingRootPerm: "AirDroid is attempting to gain root permissions to view and capture screenshots.",
        Tip_screenshot: "Capture a screenshot",
        Msg_NotPerm: "Root permission required",
        Tip_NotPerm: "Seems like your device is not rooted. AirDroid requires root permissions to view and capture screenshots.",
        Tip_stop: "Stop realtime",
        Tip_networkspeed: "Seems like you are encountering a slow network connection.",
        RootTip_Root_A_3: "To capture a screenshot, AirDroid needs to access your Android's system-level interface.",
        RootTip_Root_Q_1: "What are root permissions, rooting, root access?",
        RootTip_Root_Q_2: "How to grant AirDroid the root permissions required?",
        Tip_play: "Realtime",
        RootTip_Root_A_4: "No. AirDroid only performs read operations to capture screenshots."
    },
    Desktop: {
        MenuItem_Close: "Close",
        MenuItem_Min: "Minimize",
        MenuItem_Max: "Maximize",
        LiteConnectMode: "You are now using Lite Mode. To enjoy the full AirDroid experience, please visit {0}web.airdroid.com{1}.",
        RemoteConnectMode: "Remote Connection Mode",
        MenuItem_Restore: "Restore",
        Failed_To_Save: "Failed to save",
        MenuItem_CloseAll: "Close all",
        MenuItem_Lock: "Lock",
        MenuItem_ShowDesktop: "Show desktop",
        No_Frequent_Contacts: "Empty",
        LanConnectMode: "Local Connection Mode"
    },
    Workspace: {Message_ClearAllNotice: "Clear all notifications.", LeftBar_More_MenuItem_Lock: "Lock"},
    Clipboard: {
        Message_SendClipToDeviceFailure: "Failed to send clipboard content to device.",
        Input_PlaceHolder: "Clipboard",
        Message_SendToDeviceClipBoardSucceed: "Saved to device clipboard.",
        Message_ContentTooLong: "Error. Content too long.{0}{1} exceeded characters.",
        Message_ReadClipFromDeviceFailure: "Failed to read clipboard content from device.",
        Button_ToDevice: "Refresh",
        Button_FromDevice: "Save"
    },
    About: {
        Label_Website: "<a target='_blank' tabname='AirDroid' href='http://www.airdroid.com'>http://www.airdroid.com</a>",
        Label_Help: "<a target='_blank' tabname='User Guide' href='http://www.airdroid.com/userguide.html'>http://www.airdroid.com/userguide.html</a>",
        Url_Googleplus: "http://gplus.to/AirDroid",
        Url_Facebook: "http://www.facebook.com/AirDroid",
        Url_Twitter: "http://twitter.com/AirDroidTeam",
        Url_Youtube: "http://www.youtube.com/user/AirDroidTeam",
        Url_Tumblr: "http://airdroid.tumblr.com/",
        Label_Copyright: "© 2014 Sand Studio",
        VScrollText_Main: "AirDroid is a fast, free app that lets you wirelessly manage & control your Android device from a web browser without cables.<br/><br/>Thanks to suggestions and assistance from:<br>Ramona Shelburne (US)<br>John Phillips (UK)<br>Turkdale (Turkey)<br>Peter Yang (China)<br>Anna Ringstrom (France)<br>Amy Norton (Germany)<br>Salynn Boyles (US)"
    },
    SMSTimeOffsetSetting: {
        Label_Explain: "Offset = correct timestamp - wrong timestamp",
        Select_MinSuffix: "minute(s)",
        ButtonText_Save: "Save",
        MsgBox_Saved: "Saved. Refreshing now...",
        Select_HourSuffix: "hour(s)",
        Label_Value: "Offset",
        Label_QuestionTitle: "Adjust the timestamp of incoming messages",
        MsgBox_SaveFailed: "Failed to save. Please retry."
    },
    Photo: {
        Message_SureToDeleteSelectedPhoto: "Are you sure to delete the selected photos?",
        ZipName_PhotoDefaultExportName: "Photos_downloaded_by_AirDroid",
        Message_SureToSetAsWallpaper: "Are you sure to set this picture as wallpaper?",
        Message_SureToDeleteThisPhoto: "Are you sure to delete this photo?",
        Message_DeleteThisPhotoFailure: "Failed to delete this photo.",
        Message_DeleteSelectedPhotoFailure: "Failed to delete the selected photos.",
        Message_SetWallpaperSucceed: "Set as wallpaper success.",
        Label_CameraFolder: "Camera Roll",
        Label_WallpaperFolder: "Wallpaper",
        Last_Tip: "It's the last photo. Will go to first one if you continue."
    },
    TitleWidget: {Message_ReceivedMessages: "Receive {0} new message(s)"},
    Battery: {
        Message_GettingLow: "The battery is getting low:",
        Message_Reminding: "or less remaining.",
        Message_ConnectCharge: "Please connect charger"
    },
    Transport: {
        Main_Button_OpenInDevice: "Open on device",
        OpacityTip_OpenURLFail: "Failed to open on device. Please retry.",
        OpacityTip_OpenURLSuccess: "Opened successfully. Please check on device."
    }
}, Airdroid.UsedLang = Airdroid.Lang;
