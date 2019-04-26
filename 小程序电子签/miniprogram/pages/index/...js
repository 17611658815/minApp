// canvas 全局配置
var context = null;
var rpx
var posterHeight = 0
var posterWidth = 0
var avatarPadding = 0 //距离边界
var avatarRadiu = 0 //头像半径
var textScale = 0 //文字比例

//注册页面
Page({
 
  data: {
    img: "../../images/img1.jpg",
    myCanvasWidth: 0,
    myCanvasHeight: 0,
    posterHeight: 0,
  },

  onLoad: function (options) {
    var that = this
    var myCanvasWidth = that.data.myCanvasWidth   //为了让图片满铺页面
    var myCanvasHeight = that.data.canvasHeight
    context = wx.createCanvasContext('canvas');

    wx.getSystemInfo({
      success: function (res) {
        myCanvasWidth = res.screenWidth
        myCanvasHeight = res.screenHeight
        posterWidth = Math.round(res.screenWidth * 0.68)  //计算让画布图片自适应
        posterHeight = Math.round(posterWidth * 1920 / 1080)
        avatarPadding = Math.round(posterWidth * 20 / 375)
        avatarRadiu = Math.round(posterWidth * 25 / 375)
        textScale = Math.round(posterWidth / 375)
        rpx = res.windowWidth / 375;
        that.setData({
          myCanvasWidth: myCanvasWidth,
          myCanvasHeight: myCanvasHeight,
          posterHeight: posterHeight
        })
        context.drawImage(that.data.img, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight); //画布绘制图片
        context.draw();

      },
    })
  },
  clickMe: function () { //保存图片
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      fileType: 'jpg',
      success: function (res) {
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success(res) {
            console.log(res)
            wx.hideLoading();
            wx.showToast({
              title: '保存成功',
            });
            // //存入服务器
            // wx.uploadFile({
            //   url: 'a.php', //接口地址
            //   filePath: res.tempFilePath,
            //   name: 'file',
            //   formData: {                                 //HTTP 请求中其他额外的 form data 
            //     'user': 'test'
            //   },
            //   success: function (res) {
            //     console.log(res);

            //   },
            //   fail: function (res) {
            //     console.log(res);
            //   },
            //   complete: function (res) {
            //   }
            // });
          },
          fail() {
            wx.hideLoading()
          }
        })
      }
    })
  },
})

