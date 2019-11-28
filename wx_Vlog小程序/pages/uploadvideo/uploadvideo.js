Page({
    data: {

        list: ["视频", "问答", "音频", "文章"],
        currentTab: 0,
        fixTop: '',//区域离顶部的高度

    },
    //事件处理函
    onShow: function () {
        let self = this;
        wx.createSelectorQuery().select('.static-news').boundingClientRect(function (rect) {
            self.setData({
                fixTop: rect.top,
            })
        }).exec()
    },
    onPageScroll: function (e) {
        var that = this
        that.setData({
            scrollTop: e.scrollTop
        })
    },
})