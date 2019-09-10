var t = require("data/list.js");

App({
    onLaunch: function() {
        var t = wx.getStorageSync("logs") || [];
        t.unshift(Date.now()), wx.setStorageSync("logs", t);
    },
    _get: function(t, n) {
        for (var a = t.split("&"), e = 0; e < a.length; e++) {
            var o = a[e].split("=");
            if (o[0]) return o[1];
        }
        return "";
    },
    globalData: {
        userInfo: null,
        xzwdata: t.xzwdata,
        swidth: wx.getSystemInfoSync().windowWidth,
        sheight: wx.getSystemInfoSync().windowHeight,
        api_host: "https://api.xzw.com/com/json/"
    }
});