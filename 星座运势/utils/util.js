function a(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

function e(e, t, n, c) {
    e.setData(a({}, t, !1)), setTimeout(function() {
        var t;
        e.setData((t = {}, a(t, n, !1), a(t, c, "-100%"), t));
    }, 300);
}

function t(a) {
    for (var e = "", t = a.split("~"), c = [], o = [], i = [], r = 0; r < t.length; r++) {
        var l = t[r].match(/(\d*)\-(\d+)\-(\d+)/i);
        console.log("v", l), i.push(l[3]), n(l[2], o) ? c.push(parseInt(l[3]) + "日") : (o.push(l[2]), 
        e = l[1], c.push(parseInt(l[2]) + "月" + parseInt(l[3]) + "日"));
    }
    return console.log("day", i), o.length > 1 ? e + "年" : i.length > 1 && parseInt(i[1]) - parseInt(i[0]) >= 27 ? parseInt(o[0]) + "月" : c.join("-");
}

function n(a, e) {
    for (var t in e) if (e[t] == a) return !0;
    return !1;
}

var c = function(a) {
    return (a = a.toString())[1] ? a : "0" + a;
}, o = "https://api.xzw.com/com/json/";

module.exports = {
    formatTime: function(a) {
        var e = a.getFullYear(), t = a.getMonth() + 1, n = a.getDate(), o = a.getHours(), i = a.getMinutes(), r = a.getSeconds();
        return [ e, t, n ].map(c).join("/") + " " + [ o, i, r ].map(c).join(":");
    },
    showModal: function(e, t, n, c, o) {
        var i;
        e.setData((i = {}, a(i, t, !0), a(i, n, !0), a(i, c, !0), a(i, o, "0px"), i));
    },
    hideModal: e,
    setIcon: function(a, t) {
        a.setData({
            female: a.data.femalecheck,
            male: a.data.malecheck,
            femaleclickid: a.data.femalecheck,
            maleclickid: a.data.malecheck
        });
        var n = {};
        n.m = a.data.malecheck, n.f = a.data.femalecheck, wx.setStorage({
            key: t,
            data: n
        }), e(a);
    },
    cancel: function(a) {
        a.setData({
            femalecheck: a.data.female,
            malecheck: a.data.male,
            femaleclickid: a.data.female,
            maleclickid: a.data.male
        }), e(a);
    },
    scrollFun: function(e, t) {
        var n = t.currentTarget.dataset.name, c = t.detail.scrollTop, o = t.detail.scrollHeight, i = Math.round(c / (o / 14));
        i > 11 && (i = 11), i < 0 && (i = 0), e.setData(a({}, n, i));
    },
    clickIcon: function(e, t) {
        var n, c = t.currentTarget.dataset.index, o = t.currentTarget.dataset.name, i = o + "check", r = o + "clickid";
        e.setData((n = {}, a(n, i, c), a(n, r, c), n));
    },
    getData: function(a, e, n, c) {
        var i, r = e.data.list[a - 1].name, l = (e.data.id, []);
        i = "xz" === n ? o + "fortune/?id=" + a + "&ld=-1&vc=xcx&token=Mh8tGmSoW3fyH642Y+Eb3E" : o + "shengxiao.js?id=" + a + "&vc=xcx&token=Mh8tGmbZpzSxqPGmJaKeKo", 
        wx.request({
            url: i,
            success: function(n) {
                console.log(n);
                for (var o = n.data.data, i = 0; i < o.length; i++) l.push(t(o[i].vdate));
                e.setData({
                    infodata: o,
                    id: a,
                    name: r,
                    date: l
                }), "function" == typeof c && c();
            }
        });
    },
    getPairData: function(a, e) {
        var t = parseInt(a.options.m), n = parseInt(a.options.f);
        a.setData({
            male: t,
            female: n
        }), wx.request({
            url: o + ("sx" === e ? "shengxiao_" : "") + "pair.js?aid=" + (t + 1) + "&bid=" + (n + 1) + "&vc=xcx&token=" + ("sx" === e ? "Mh8tGmbZpzSxqPGmJaKeKqPbHabwo2Cow" : "Mh8tGmbe3rWx52foQ"),
            success: function(t) {
                var n = t.data.data.data;
                "sx" == e && (n = n[2].replace(/<\/p>|<p>/g, "")), a.setData({
                    infodata: n
                });
            }
        });
    },
    initdata: function(a, e) {
        var t = wx.getStorageSync(e);
        t && a.setData({
            male: t.m,
            malecheck: t.m,
            maleclickid: t.m,
            female: t.f,
            femalecheck: t.f,
            femaleclickid: t.f
        });
    },
    simple_date: t
};