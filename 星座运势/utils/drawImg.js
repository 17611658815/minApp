function e(e) {
    a(s, e);
}

function a(e, a) {
    for (var n in a) e[n] = a[n];
    return e;
}

function n(e, a, n, t, r) {
    e.setStrokeStyle("#5155e3"), e.save(), e.beginPath(), e.arc(t + n / 2, r + n / 2, n / 2, 0, 2 * Math.PI), 
    e.clip(), e.drawImage(a, t, r, n, n), e.restore(), e.closePath();
}

function t(e, a, n, t, r, i, d, o, g, c) {
    n || (n = 16), d || (d = 0), c || (c = 1), e.setFontSize(n);
    var f = s.size, u = 1, l = a.length, m = e.measureText(a).width, w = e.measureText("粥").width;
    o || (o = f.w), e.setFillStyle(t), e.setTextAlign(g || "left"), m > o && (u = Math.ceil(m / o), 
    l = Math.floor(o / w));
    for (var h = 0; h < c; h++) {
        var x = a.substring(h * l, (h + 1) * l);
        e.fillText(x, r, i + (n + d) * h, o);
    }
    return e.stroke(), u;
}

function r(e) {
    wx.showToast({
        title: "正在保存图片",
        icon: "loading",
        duration: 2e3
    }), wx.saveImageToPhotosAlbum({
        filePath: s.imagePath,
        success: function(e) {
            wx.showToast({
                title: "图片已经保存",
                icon: "success",
                duration: 2e3
            });
        },
        fail: function(a) {
            wx.showToast({
                title: "图片保存失败",
                icon: "none",
                duration: 2e3
            }), "saveImageToPhotosAlbum:fail auth deny" === a.errMsg && (console.log("打开设置窗口"), 
            e.setData({
                openSettingBtnHidden: !1
            }));
        }
    });
}

var s = {
    img_bg: "/image/bg1.png",
    share_bg: "/image/sharebg.png",
    qcode: "/image/erweima.jpg",
    icobg: "/image/icobg.png",
    star: "/image/star.png",
    star1: "/image/star1.png",
    dou1: "/image/dou1.png",
    dou2: "/image/dou2.png",
    line1: "/image/line1.png",
    line2: "/image/line2.png",
    dyuan: "/image/dyuan.png",
    desc: "",
    img_user: "",
    userInfo: "",
    imagePath: "",
    size: "",
    xzimg: "",
    xzname: "",
    id: 1,
    tab: [ "今日", "明日", "本周", "本月", "今年", "爱情" ],
    xz: [ "3.21~4.19", "4.20~5.20", "5.21~6.21", "6.22~7.22", "7.23~8.22", "8.23~9.22", "9.23~10.23", "10.24~11.22", "11.23~12.21", "12.22~1.19", "1.20~2.18", "2.19~3.20" ],
    currentTab: 0,
    date: []
};

module.exports = {
    setData: e,
    draw: function(a) {
        var i = wx.createCanvasContext("myCanvas"), d = (s.img_bg, s.img_user, s.userInfo, 
        s.xzimg, s.xzname, s.size), o = d.w, g = d.h, c = d.s;
        console.log(d.s);
        i.drawImage(s.share_bg, 0, 0, o, g), i.save(), n(i, s.img_user, 160 * c, o / 2 - 80 * c, 40 * c), 
        t(i, s.userInfo.nickName, 40 * c, "#f4f3fd", o / 2, 250 * c, 0, 0, "center"), t(i, s.xzname + "（" + s.xz[s.id - 1] + "）", 30 * c, "#f4f3fd", o / 2, 300 * c, 0, 0, "center");
        var f = s.desc.desc.replace(/。/g, ""), u = f.length, l = 60 * u * c, m = o / 2 - l / 2 - 53 * c, w = o / 2 + l / 2 + 18 * c;
        u <= 10 ? (t(i, f, 60 * c, "#fff", o / 2, 410 * c, 0, 0, "center"), i.drawImage(s.dou1, m, 360 * c, 35 * c, 25 * c), 
        i.drawImage(s.dou2, w, 360 * c, 35 * c, 25 * c)) : (t(i, f.substring(0, 10), 60 * c, "#fff", o / 2, 410 * c, 0, 0, "center"), 
        t(i, f.substring(10, u), 60 * c, "#fff", o / 2, 500 * c, 0, 0, "center")), t(i, s.date[s.currentTab] + "运势", 30 * c, "#fff", o / 2, u > 10 ? 580 * c : 490 * c, 0, 0, "center");
        var h = 30 * (s.date[s.currentTab].length + 2) * c, x = o / 2 - h / 2 - 105 * c, v = o / 2 + h / 2 - 15 * c;
        i.drawImage(s.line1, x, u > 10 ? 556 * c : 466 * c, 120 * c, 30 * c), i.drawImage(s.line2, v, u > 10 ? 556 * c : 466 * c, 120 * c, 30 * c);
        for (var b = s.desc.index[0], I = 1; I <= 5; I++) I <= b.s ? i.drawImage(s.star1, 80 * c + 84 * I * c, u > 10 ? 630 * c : 540 * c, 66 * c, 66 * c) : i.drawImage(s.star, 80 * c + 84 * I * c, u > 10 ? 630 * c : 540 * c, 66 * c, 66 * c);
        0 != s.currentTab && 1 != s.currentTab || (i.drawImage(s.dyuan, 120 * c, 650 * c, 100 * c, 100 * c), 
        i.drawImage(s.dyuan, 320 * c, 650 * c, 100 * c, 100 * c), i.drawImage(s.dyuan, 520 * c, 650 * c, 100 * c, 100 * c), 
        t(i, "幸运数字", 28 * c, "#d1d2f9", 115 * c, 800 * c), t(i, "幸运颜色", 28 * c, "#d1d2f9", 318 * c, 800 * c), 
        t(i, "速配星座", 28 * c, "#d1d2f9", 520 * c, 800 * c), t(i, s.desc.index[7].v, 40 * c, "#fff", 169 * c, 715 * c, 0, 0, "center"), 
        t(i, s.desc.index[6].v.substring(0, 1), 40 * c, "#fff", 369 * c, 715 * c, 0, 0, "center"), 
        t(i, s.desc.index[8].v.substring(0, 2), 36 * c, "#fff", 570 * c, 715 * c, 0, 0, "center")), 
        2 == s.currentTab && (i.drawImage(s.dyuan, 120 * c, 650 * c, 100 * c, 100 * c), 
        i.drawImage(s.dyuan, 320 * c, 650 * c, 100 * c, 100 * c), i.drawImage(s.dyuan, 520 * c, 650 * c, 100 * c, 100 * c), 
        t(i, "幸运颜色", 28 * c, "#d1d2f9", 115 * c, 800 * c), t(i, "幸运星座", 28 * c, "#d1d2f9", 318 * c, 800 * c), 
        t(i, "提防星座", 28 * c, "#d1d2f9", 520 * c, 800 * c), t(i, s.desc.index[5].v.substring(0, 1), 40 * c, "#fff", 165 * c, 715 * c, 0, 0, "center"), 
        t(i, s.desc.index[6].v.substring(0, 2), 36 * c, "#fff", 368 * c, 715 * c, 0, 0, "center"), 
        t(i, s.desc.index[7].v.substring(0, 2), 36 * c, "#fff", 570 * c, 715 * c, 0, 0, "center")), 
        0 == s.currentTab || 1 == s.currentTab || 2 == s.currentTab ? t(i, s.desc.content[0].v, 30 * c, "#fff", 40 * c, 880 * c, 32 * c, o - 80 * c, null, 4) : t(i, s.desc.content[0].v, 30 * c, "#fff", 40 * c, u > 10 ? 780 * c : 700 * c, 32 * c, o - 80 * c, null, 6), 
        i.drawImage(s.qcode, o / 2 - 100 * c, g - 290 * c, 200 * c, 200 * c), t(i, "长按查看你的运势", 28 * c, "#7c80e1", o / 2, g - 40 * c, 0, 0, "center"), 
        i.draw(), setTimeout(function() {
            wx.canvasToTempFilePath({
                x: 0,
                y: 0,
                width: o,
                height: g,
                destWidth: 8 * o,
                destHeight: 8 * g,
                canvasId: "myCanvas",
                success: function(n) {
                    e({
                        imagePath: n.tempFilePath
                    }), r(a);
                },
                fail: function(e) {
                    console.log("错误", e);
                }
            });
        }, 200);
    },
    downImg: function(e, a) {
        if (e) {
            var n = wx.getStorageSync(a);
            return n ? console.log("预加载已缓存", a, e) : wx.downloadFile({
                url: e,
                success: function(n) {
                    console.log("预加载完成", a, e), wx.setStorage({
                        key: a,
                        data: n.tempFilePath
                    });
                }
            }), n;
        }
    },
    save_file: r
}, function() {
    var e = {};
    try {
        var a = .7 * wx.getSystemInfoSync().windowWidth, n = a / 750, t = a, r = a * (1400 / 750);
        e.w = t, e.h = r, e.s = n;
    } catch (e) {
        console.log("获取设备信息失败" + e);
    }
    s.size = e;
}();