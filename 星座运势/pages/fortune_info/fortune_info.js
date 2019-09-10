function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp(), a = require("../../utils/util.js"), o = require("../../utils/drawImg.js");

Page({
    data: {
        list: e.globalData.xzwdata,
        hei: e.globalData.sheight,
        infodata: null,
        modalHidden: !1,
        showModalStatus: !1,
        mengshow: !1,
        bottom: "-100%",
        sharelayer: !1,
        sharebox: !1,
        sharemodal: !1,
        bot: "-100%",
        openSettingBtnHidden: !0,
        hide_qcode: 1,
        id: 1,
        name: "白羊座",
        currentTab: 0,
        tab: [ "今日", "明日", "本周", "本月", "今年", "爱情" ],
        userInfo: "",
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        show: !0,
        date: [],
        showTabs: !1
    },
    onLoad: function(t) {
        var o = this, n = o.options.id || o.data.id, s = decodeURIComponent(this.options.scene);
        if (s) {
            var i = e._get(s, "id");
            i && (n = i), o.setData({
                id: n
            });
        }
        a.getData(n, o, "xz", function() {
            var t = "https://api.xzw.com/static/image/xcx/xz_" + n + ".png";
            o.getImageInfo("xzimg", t);
            var e = "https://api.xzw.com/cp/wxcode?sid=2&hyaline=1&color=5566e4&scene=" + encodeURIComponent("id=" + n);
            o.getImageInfo("qcode", e);
        }), wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? wx.getUserInfo({
                    success: function(t) {
                        o.setData({
                            userInfo: t.userInfo
                        }), o.getImageInfo("userimg", t.userInfo.avatarUrl);
                    }
                }) : console.log("没授权");
            }
        });
    },
    swichNav: function(t) {
        var e = this, a = t.target.dataset.current;
        if (a || (a = t.detail.current + 1), e.data.currentTab === a - 1) return !1;
        e.setData({
            currentTab: a - 1,
            showTabs: !1
        });
    },
    changexz: function(t) {
        var e = this, o = t.currentTarget.dataset.index;
        if (o === e.data.id) return a.hideModal(e), !1;
        a.getData(o, e, "xz", function() {
            var t = "https://api.xzw.com/static/image/xcx/xz_" + o + ".png";
            e.getImageInfo("xzimg", t);
            var a = "https://api.xzw.com/cp/wxcode?sid=2&hyaline=1&color=5566e4&scene=" + encodeURIComponent("id=" + o);
            e.getImageInfo("qcode", a);
        }), a.hideModal(e, "showModalStatus", "mengshow", "bottom");
    },
    showModal: function() {
        var t = this;
        a.showModal(t, "modalHidden", "showModalStatus", "mengshow", "bottom");
    },
    hideModal: function() {
        var t = this;
        a.hideModal(t, "showModalStatus", "mengshow", "bottom");
    },
    showShareModal: function() {
        var t = this;
        t.setData({
            showTabs: !1
        }), a.showModal(t, "sharebox", "sharemodal", "sharelayer", "bot");
    },
    hideShareModal: function() {
        var t = this;
        a.hideModal(t, "sharemodal", "sharelayer", "bot");
    },
    getUserInfo: function(t) {
        var e = this;
        t.detail.userInfo && (wx.getUserInfo({
            success: function(a) {
                console.log(a), e.setData({
                    userInfo: t.detail.userInfo
                }), e.getImageInfo("userimg", t.detail.userInfo.avatarUrl);
            }
        }), console.log("同意"));
    },
    bindGetUserInfo: function(t) {
        var e = this;
        t.detail.userInfo ? (wx.getUserInfo({
            success: function(a) {
                console.log(a), e.setData({
                    userInfo: t.detail.userInfo
                }), e.getImageInfo("userimg", t.detail.userInfo.avatarUrl);
            }
        }), console.log("同意")) : wx.showModal({
            title: "警告",
            content: "您点击了拒绝授权，将无法保存图片，请授权之后再进入!!!",
            showCancel: !1,
            confirmText: "返回授权",
            success: function(t) {
                t.confirm && console.log("用户点击了“返回授权”");
            }
        });
    },
    share: function() {
        var t = this;
        a.hideModal(t, "sharemodal", "sharelayer", "bot"), o.setData({
            xzimg: t.data.xzimg,
            img_user: t.data.userimg,
            qcode: t.data.qcode,
            userInfo: t.data.userInfo,
            desc: t.data.infodata[t.data.currentTab],
            currentTab: t.data.currentTab,
            xzname: t.data.name,
            date: t.data.date,
            id: t.data.id
        }), t.setData({
            hide_qcode: 0
        }), o.draw(t);
    },
    closeQcode: function() {
        this.setData({
            hide_qcode: 1
        });
    },
    handleSetting: function(t) {
        var e = this;
        t.detail.authSetting["scope.writePhotosAlbum"] && (e.setData({
            openSettingBtnHidden: !0
        }), o.save_file(e));
    },
    getImageInfo: function(e, a) {
        var o = this;
        wx.getImageInfo({
            src: a,
            success: function(a) {
                var n = a.path;
                o.setData(t({}, e, n));
            },
            fail: function(t) {}
        });
    },
    inbtn: function(t) {
        console.log("in");
    },
    onShareAppMessage: function(t) {
        return "button" === t.from && console.log(t.target), {
            title: "星座运势详情",
            path: "/pages/fortune_info/fortune_info?id=" + this.data.id,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    showTabs: function() {
        var t = !this.data.showTabs;
        this.setData({
            showTabs: t
        });
    },
    hideTabs: function() {
        this.setData({
            showTabs: !1
        });
    }
});