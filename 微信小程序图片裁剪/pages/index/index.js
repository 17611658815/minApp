Page({
    data: {
        src: '',
        width: 300, //宽度
        height: 300, //高度
    },
    onLoad: function(options) {
        //获取到image-cropper对象
        this.cropper = this.selectComponent("#image-cropper");
        //开始裁剪
        this.setData({
            src: "https://api.liidon.com/doc/images/bak.jpg",
        });
        // wx.showLoading({
        //     title: '加载中'
        // })
    },
    cropperload(e) {
        console.log("cropper初始化完成");
    },
    loadimage(e) {
        console.log("图片加载完成", e.detail);
        wx.hideLoading();
        //重置图片角度、缩放、位置
        this.cropper.imgReset();
    },
    getImg(e) {
        this.cropper.getImg(function(e) {
            console.log(e)
            if (e.url) {
                // wx.redirectTo({
                //     url: '../gift-homepage/gift-homepage?member_id=' + wx.getStorageSync('member_id') + '&bak=' + e.url
                // })
            }
        })
    },

    clickcut(e) {
        console.log(e.detail, '完成');
        //点击裁剪框阅览图片
        wx.previewImage({
            current: e.detail.url, // 当前显示图片的http链接
            urls: [e.detail.url] // 需要预览的图片http链接列表
        })
    },
})