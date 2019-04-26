// canvas 全局配置
var context = null;
var context2 = null;
var context3 = null;
var context4 = null;
var isButtonDown = false;
var arrx = [];
var arry = [];
var arrz = [];
var canvasw = 0;
var canvash = 0;
var rpx
var posterHeight = 0
var posterWidth = 0
var avatarPadding = 0 //距离边界
var avatarRadiu = 0 //头像半径
var textScale = 0 //文字比例

//注册页面
Page({
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  //开始
  canvasStart: function (event) {
    console.log(event)
    isButtonDown = true;
    arrz.push(0);
    arrx.push(event.changedTouches[0].x);
    arry.push(event.changedTouches[0].y);
  },
  data: {
    canshow:true,
    canshow2: false,
    img: "../../images/img1.jpg",
    img2: "../../images/shop.jpg",
    txt:'测试',
    name:'',
    myCanvasWidth:0,
    myCanvasHeight:0,
    posterHeight:0,
    imgArray:[]
  },

  onLoad: function (options) {
    var that = this
    
   
    var myCanvasWidth = that.data.myCanvasWidth
    var myCanvasHeight = that.data.canvasHeight
    context = wx.createCanvasContext('canvas');//签字画布
    context2 = wx.createCanvasContext('canvas2');//签名页画布
    context3 = wx.createCanvasContext('canvas3');//纯图片画布
    context4 = wx.createCanvasContext('canvas4');//纯图片画布
   
    wx.getSystemInfo({
      success: function (res) {
        myCanvasWidth = res.screenWidth 
        myCanvasHeight = res.screenHeight 
        posterWidth = Math.round(res.screenWidth * 0.68) 
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
        context2.drawImage(that.data.img, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
        context2.setFontSize(textScale * 32)
        context2.fillText(that.data.txt, 50 * rpx, 50 * rpx, 300 * rpx);
        context3.drawImage(that.data.img2, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
        context4.drawImage(that.data.img2, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
        
        context2.draw();
        context3.draw(); 
        context4.draw();
      
        
      },
    })
   
    context.beginPath()
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
    context.draw();
    // 获取图片尺寸
    // wx.getImageInfo({
    //   src: that.data.img,
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       canvasimgw:res.width,
    //       canvasimgh:res.height
    //     })
    //   }
    // });
   
  },
  // 点击签字
  addname(){
     var that = this
     
    that.cleardraw()
     that.setData({
       canshow: false,
       canshow2: true,
     })
    
  },
  loadimg(){
    var that = this
    context3 = wx.createCanvasContext('canvas3');
    wx.canvasToTempFilePath({
      canvasId: 'canvas3',
      fileType: 'jpg',
      success: function (res) {
        console.log(res)
        that.data.imgArray.push(res.tempFilePath)
        that.loadimg2()
        
      }
    })     
  },
  loadimg3() {
    var that = this
    context3 = wx.createCanvasContext('canvas4');
    wx.canvasToTempFilePath({
      canvasId: 'canvas4',
      fileType: 'jpg',
      success: function (res) {
        console.log(res)
        that.data.imgArray.push(res.tempFilePath)

      }
    })
  },
loadimg2(){
  var that = this
  wx.canvasToTempFilePath({
    canvasId: 'canvas2',
    fileType: 'jpg',
    success: function (res) {
      console.log(res)
      that.loadimg3()
      that.upImgs(that.data.imgArray[0],0)
      that.data.imgArray.push(res.tempFilePath)
      console.log(that.data.imgArray)
      // context2.drawImage(that.data.img, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
      // context2.setFontSize(textScale * 32)
      // context2.fillText(that.data.txt, 50 * rpx, 50 * rpx, 300 * rpx);
      // context2.drawImage(that.data.name, posterWidth / 375 * 100, posterWidth / 375 * 870, posterWidth / 375 * 200, posterWidth / 375 * 100);
      // context2.draw();
    }
  })
},
  //签字过程
  canvasMove: function (event) {
    var that = this
    if (isButtonDown) {
      arrz.push(1);
      console.log(event)
      arrx.push(event.changedTouches[0].x);
      arry.push(event.changedTouches[0].y);
    };

    for (var i = 0; i < arrx.length; i++) {
      if (arrz[i] == 0) {
        context.moveTo(arrx[i], arry[i])
      } else {
        context.lineTo(arrx[i], arry[i])
      };

    };
    context.clearRect(0, 0, canvasw, canvash);
    context.setStrokeStyle('#000000');
    context.setLineWidth(4);
    context.setLineCap('round');
    context.setLineJoin('round');
    context.stroke();

    context.draw(false);
  },
  //确认签名
  clickMe: function () {
    var that = this
    if (arrx.length == 0) {
      wx.showModal({
        title: '提示',
        content: '签名内容不能为空！',
        showCancel: false
      });
      return false;
    };
    wx.canvasToTempFilePath({
      canvasId: 'canvas',
      fileType: 'jpg',
      success: function (res) {
        console.log(res)
        that.setData({
          name: res.tempFilePath,
          canshow: true,
          canshow2: false,
        })
       
        context2.drawImage(that.data.img, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
        context2.setFontSize(textScale * 32)
        context2.fillText(that.data.txt, 50 * rpx, 50 * rpx, 300 * rpx);
        context2.drawImage(that.data.name, posterWidth / 375 * 100, posterWidth / 375 *870, posterWidth / 375 * 200, posterWidth / 375 * 100);
        context2.draw();   
        
      }
    })
  },
  //保存画布图片本地路径
  clickMe2: function () {
    var that = this
    console.log()
    that.loadimg()
  },
  upImgs: function (imgurl, index) {
    var that = this;
    wx.uploadFile({
      url: 'https://api.mfk.com/app/api/record_app.php?type=uppic',
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header
      formData: null, // HTTP 请求中其他额外的 form data
      success: function (res) {
        var protocol = []
        var data = JSON.parse(res.data)
        console.log(data['msg']);
        protocol.push(data['msg'])
        wx.setStorage({
          key: 'protocol',
          data: data,
        })
        if (data['res'] == true) {
           index++
          console.log(index)
          if (that.data.imgArray[index] != undefined) {//存在下一张
            that.upImgs(that.data.imgArray[index], index);
          }
        } else {
          console.log(data['msg']);
        }
      }
    })
  },
  canvasEnd: function (event) {
    isButtonDown = false;
  },
  cleardraw: function () {
    //清除画布
    arrx = [];
    arry = [];
    arrz = [];
    context.draw(false);
  },

})

