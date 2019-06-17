//index.js
//获取应用实例
var myCanvasWidth = 0
var myCanvasHeight = 0
var rpx
var posterHeight = 0
var posterWidth = 0
// var avatarPadding = 0 //距离边界
// var avatarRadiu = 0 //头像半径
var textScale = 0 //文字比例
const app = getApp()

Page({
    data: {
        imgUrl: '../../images/poster.jpg',
        avatarur:'../../images/avatar.jpg',
        codeImg:'../../images/codeImg.png',
        wxappName: "来「 老字号文化影响力 」测试你的知识等级",
        canvasWidth: '',
        canvasHeight: ''
    },

    onLoad: function() {
        var that = this;
        wx.showLoading({
            title: '加载中',
        })
        var canvas = wx.createCanvasContext('canvas1')
        wx.getSystemInfo({
            success: function(res) {
                posterWidth = Math.round(res.screenWidth * 0.68)
                posterHeight = Math.round(posterWidth * 1920 / 1080)
                myCanvasWidth = res.screenWidth; //画布宽度
                myCanvasHeight = res.screenHeight; //画布高度
                rpx = res.windowWidth / 375;
                //绘制文字
                canvas.setFontSize(16 * rpx) //字体大小
                canvas.setFillStyle('#FFFFFF') //字体颜色
                canvas.setTextAlign('center') //文字居中
                canvas.drawImage(that.data.imgUrl, 0, 0, myCanvasWidth, myCanvasHeight); //绘制北京
                canvas.fillText(that.data.wxappName, 187 * rpx, 50 * rpx)
                // 绘制头像
                var avatarurl_width = rpx * 75; //绘制的头像宽度
                var avatarurl_heigth = rpx * 75; //绘制的头像高度
                var avatarurl_x = rpx * 150; //绘制的头像在画布上的位置
                var avatarurl_y = rpx * 75; //绘制的头像在画布上的位置
                canvas.save();
                //先画个圆   前两个参数确定了圆心 （x,y） 坐标  第三个参数是圆的半径  四参数是绘图方向  默认是false，即顺时针
                canvas.arc(avatarurl_width / 2 + avatarurl_x, avatarurl_heigth / 2 + avatarurl_y, avatarurl_width / 2, 0, Math.PI * 2, false);

                canvas.clip(); //画好了圆 剪切  原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内 这也是我们要save上下文的原因

                canvas.drawImage(that.data.avatarur, avatarurl_x, avatarurl_y, avatarurl_width, avatarurl_heigth); // 将头像放到绘制好的圆中
                canvas.restore(); //恢复之前保存的绘图上下文状态 还可以继续绘制.
                //二维码绘制
                if (res.model.search('iPhone X') != -1){
                    canvas.drawImage(that.data.codeImg, rpx * 138, rpx * 510, rpx * 204 / 2, rpx * 204 / 2)
                }else{
                    canvas.drawImage(that.data.codeImg, rpx * 138, rpx * 410, rpx * 204 / 2, rpx * 204 / 2)
                }
                
                canvas.draw();
                wx.hideLoading()
            }
        })
        this.setData({
            canvasWidth: myCanvasWidth,
            canvasHeight: myCanvasHeight
        })
    },
    downloadimg(){
        wx.canvasToTempFilePath({
            canvasId: 'canvas1',
            fileType: 'jpg',
            success: function (res) {
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    //保存成功失败之后，都要隐藏画板，否则影响界面显示。
                    success: (res) => {
                        wx.showToast({
                            title: '保存成功',
                            icon: 'none',
                            duration: 1500,
                            mask: false,
                            success: function () {
                               
                            }
                        });
                    },
                    fail: (err) => {
                        wx.showToast({
                            title: '保存失败',
                            icon: 'none',
                            duration: 1500,
                            mask: false,
                            success: function () {
                              
                            }
                        });
                    }
                })
            }
        })
    }

})