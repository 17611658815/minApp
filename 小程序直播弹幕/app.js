//app.js
App({
    onLaunch: function(options) {
        let that = this;
        // 判断是否由分享进入小程序
        if (options.scene == 1007 || options.scene == 1008) {
            that.globalData.share = true
        } else {
            that.globalData.share = false
        };
        let menuButtonObject = wx.getMenuButtonBoundingClientRect();
        wx.getSystemInfo({
            success: (res) => {
            console.log(res)
                let statusBarHeight = res.statusBarHeight,
                    navTop = menuButtonObject.top, //胶囊按钮与顶部的距离
                    navLeft = menuButtonObject.right, //胶囊居左距离
                    barHeight = menuButtonObject.height, //胶囊居左距离
                    navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
                    that.globalData.navHeight = navHeight;
                    that.globalData.navTop = navTop;
                    that.globalData.navLeft = navLeft;
                    that.globalData.barHeight = barHeight;
                    that.globalData.windowHeight = res.windowHeight;
                    that.globalData.windowWidth = res.windowWidth;
            },
            fail(err) {
                console.log(err);
            }
        })
    },
    globalData: {
        userInfo: null,
        share: false, // 分享默认为false
        barHeight:0,  //胶囊高度
        navHeight: 0, //头部高度
        navTop:0,     //胶囊据顶部距离
        navLeft:0,    //胶囊据右边距离
        windowHeight:0, //可是高度
        windowWidth:0,  //可视宽度
    }
})