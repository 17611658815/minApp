// //index.js
// //获取应用实例
// const bgMusic = wx.getBackgroundAudioManager()
// const app = getApp()

// Page({
//   data: {
//     isOpen: false,//播放开关
//     index:0,
//     Intheplay:false,//播放中
//     starttime: '00:00', //正在播放时长
//     duration: '8',   //总时长
//     src: "https://image.liidon.com/tmp_6637cbb15bbadcca07f0de5c701b5a01.mp3",
//     audioList: [
//       {
//         isOpen: false,//播放开关
//         starttime: '00:00', //正在播放时长
//         duration: '11',   //总时长
//         src: "https://image.liidon.com/5cac4f1b6f0cf.mp3",
//         isplay:false,
//       },
//       {
//         isOpen: false,//播放开关
//         starttime: '00:00', //正在播放时长
//         duration: '8',   //总时长
//         src: "https://image.liidon.com/tmp_6637cbb15bbadcca07f0de5c701b5a01.mp3",
//         isplay: false,
//       }
//     ]
//   },
//   onLoad() {
//     var that = this;
//     wx.getSystemInfo({
//       success(res) {
//         console.log(res.platform)
//         if (res.platform == 'ios') {
//           that.setData({
//             duration: that.data.duration - 2
//           })
//         }
//       }
//     })
//   },
//   // 播放
//   listenerButtonPlay: function (e) {
//     var that = this
//     console.log(e)
//     //bug ios 播放时必须加title 不然会报错导致音乐不播放
//     var index = e.currentTarget.dataset.index;

//     for (var i in that.data.audioList) {
//       console.log(i, '++',index)
//       if (i == index) {
//         that.data.audioList[i].isplay = true
//       } else {
//         that.data.audioList[i].isplay = false
//       }
//     }
//     // console.log(that.data.audioList[index],index)
//     bgMusic.title = '此时此刻'
//     bgMusic.epname = '此时此刻'
//     bgMusic.src = e.currentTarget.dataset.src;
//     bgMusic.onTimeUpdate(() => {
//       //bgMusic.duration总时长  bgMusic.currentTime当前进度
//       console.log(bgMusic.currentTime)
//       var duration = bgMusic.duration;
//       var offset = bgMusic.currentTime;
//       var currentTime = '';
//       if (bgMusic.currentTime > 0 && bgMusic.currentTime < 1) {
//         currentTime = 1;
//       } else {
//         currentTime = parseInt(bgMusic.currentTime);
//       }
//       var currentTime = parseInt(bgMusic.currentTime);
//       console.log(currentTime)
//       var min = "0" + parseInt(currentTime / 60);
//       var max = parseInt(bgMusic.duration);
//       var sec = currentTime % 60;
//       if (sec < 10) {
//         sec = "0" + sec;
//       };
//       console.log(sec)
//       var starttime = min + ':' + sec;   /*  00:00  */
//       that.setData({
//         offset: currentTime,
//         starttime: starttime,
//         max: max,
//         changePlay: true,
//         Intheplay:true,
//         index: index
//       })
//     })

//     bgMusic.play();
//     that.setData({
//       isOpen: true,
//       audioList:that.data.audioList
//     })
//     //播放结束
//     bgMusic.onEnded(() => {
//       that.data.audioList[this.data.index].isplay = false
//       that.setData({
//         starttime: '00:00',
//         isOpen: false,
//         offset: 0,
//         Intheplay: false,
//         audioList: that.data.audioList
//       })
//       console.log("音乐播放结束");
//     })
//   },
//   //暂停播放
//   listenerButtonPause(e) {
//     var that = this
//     var index = e.currentTarget.dataset.index
//     that.data.audioList[index].isplay = false
//     bgMusic.pause()
//     that.setData({
//       isOpen: false,
//       Intheplay: false,
//       audioList: that.data.audioList
//     })
//   },
//   listenerButtonStop() {
//     var that = this
//     bgMusic.stop()
//   },
//   // 进度条拖拽
//   // sliderChange(e) {
//   //   var that = this
//   //   var offset = parseInt(e.detail.value);
//   //   bgMusic.play();
//   //   bgMusic.seek(offset);
//   //   that.setData({
//   //     isOpen: true,
//   //   })
//   // },
//   // 页面卸载时停止播放
//   onUnload() {
//     var that = this
//     that.listenerButtonStop()//停止播放
//     console.log("离开")
//   },
// })




// ========================================
// canvas 全局配置
// var util = require('../../utils/util.js');
// var context = null;
// var context2 = null;
// var context3 = null;
// var context4 = null;
// var isButtonDown = false;
// var arrx = [];
// var arry = [];
// var arrz = [];
// var canvasw = 0;
// var canvash = 0;
// var rpx
// var posterHeight = 0
// var posterWidth = 0
// var avatarPadding = 0 //距离边界
// var avatarRadiu = 0 //头像半径
// var textScale = 0 //文字比例

// //注册页面
// Page({
//   canvasIdErrorCallback: function (e) {
//     console.error(e.detail.errMsg)
//   },
//   //开始
//   canvasStart: function (event) {
//     console.log(event)
//     isButtonDown = true;
//     arrz.push(0);
//     arrx.push(event.changedTouches[0].x);
//     arry.push(event.changedTouches[0].y);
//   },
//   data: {
//     canshow: true,
//     canshow2: false,
//     img: "../../images/xy-1.jpg",
//     img2: "../../images/xy-2.jpg",
//     img3: "../../images/xy-3.jpg",
//     txt: '测试',
//     name: '',
//     myCanvasWidth: 0,
//     myCanvasHeight: 0,
//     posterHeight: 0,
//     imgArray: [],
//     signShow: true,
//     time: '',
//     name: '张三',
//     idCad: '410611199545151515',
//     phone: '17611658815',
//     position: '北京同仁医院副主任',
//     top:'0',
//     left:'0'
//   },

//   onLoad: function (options) {
//     var that = this
//     console.log(options)
//     var time = util.formatTime(new Date());
//     this.setData({
//       time: time,
//       txt:'张三',
//       name: '李四',
//       idCad: '410611199601126530',
//       phone: '17611658815',
//       position: '北京积水潭医院副主任医师'

//     });

//     var myCanvasWidth = that.data.myCanvasWidth
//     var myCanvasHeight = that.data.canvasHeight
//     context = wx.createCanvasContext('canvas');//签字画布
//     context2 = wx.createCanvasContext('canvas2');//签名页画布
//     context3 = wx.createCanvasContext('canvas3');//纯图片画布
//     context4 = wx.createCanvasContext('canvas4');//纯图片画布

//     wx.getSystemInfo({
//       success: function (res) {
//         console.log(res)
//         myCanvasWidth = res.screenWidth
//         myCanvasHeight = res.screenHeight
//         posterWidth = Math.round(res.screenWidth * 0.68)
//         posterHeight = Math.round(posterWidth * 1920 / 1080)
//         avatarPadding = Math.round(posterWidth * 20 / 375)
//         avatarRadiu = Math.round(posterWidth * 25 / 375)
//         textScale = Math.round(posterWidth / 375)
//         rpx = res.windowWidth / 375;
//         that.setData({
//           myCanvasWidth: myCanvasWidth,
//           myCanvasHeight: myCanvasHeight,
//           posterHeight: posterHeight
//         })
//         if (res.model == 'iPhone X') {
//           context2.drawImage(that.data.img, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//           context2.setFontSize(textScale * 15)
//           context2.fillText(that.data.txt, 150 * rpx,505 * rpx, 300 * rpx);
//           context2.fillText(that.data.time, 130 * rpx, 572 * rpx, 300 * rpx);
//           context3.drawImage(that.data.img2, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//           context3.setFontSize(textScale * 10)
//           context3.fillText(that.data.name, 50 * rpx, 110 * rpx, 800 * rpx);
//           context3.fillText(that.data.idCad, 50 * rpx, 140 * rpx, 300 * rpx);
//           context3.fillText(that.data.phone, 50 * rpx, 185 * rpx, 300 * rpx);
//           context3.fillText(that.data.position, 70 * rpx, 205 * rpx, 300 * rpx);
//           context4.drawImage(that.data.img3, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//           that.setData({
//             top: '490rpx',
//             left: '75rpx'
//           })
//           context2.draw();
//           context3.draw();
//           context4.draw();
         
//         } else {
//           context2.drawImage(that.data.img, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//           context2.setFontSize(textScale * 15)
//           context2.fillText(that.data.txt, 150 * rpx, 418 * rpx, 300 * rpx);
//           context2.fillText(that.data.time, 130 * rpx, 472 * rpx, 300 * rpx);
//           context3.drawImage(that.data.img2, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//           context3.setFontSize(textScale * 10)
//           context3.fillText(that.data.name, 50 * rpx, 90 * rpx, 300 * rpx);
//           context3.fillText(that.data.idCad, 50 * rpx, 120 * rpx, 300 * rpx);
//           context3.fillText(that.data.phone, 50 * rpx, 152 * rpx, 300 * rpx);
//           context3.fillText(that.data.position, 70 * rpx, 170 * rpx, 300 * rpx);
//           context4.drawImage(that.data.img3, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//           that.setData({
//             top: '410rpx',
//             left: '75rpx'
//           })
//           context2.draw();
//           context3.draw();
//           context4.draw();
//         }



//       },
//     })

//     context.beginPath()
//     context.setStrokeStyle('#000000');
//     context.setLineWidth(4);
//     context.setLineCap('round');
//     context.setLineJoin('round');
//     context.draw();
//     // 获取图片尺寸
//     // wx.getImageInfo({
//     //   src: that.data.img,
//     //   success: function (res) {
//     //     console.log(res)
//     //     that.setData({
//     //       canvasimgw:res.width,
//     //       canvasimgh:res.height
//     //     })
//     //   }
//     // });

//   },

//   // 点击签字
//   addname() {
//     var that = this

//     that.cleardraw()
//     that.setData({
//       canshow: false,
//       canshow2: true,
//     })

//   },
//   loadimg() {
//     var that = this
//     context3 = wx.createCanvasContext('canvas3');
//     wx.canvasToTempFilePath({
//       canvasId: 'canvas2',
//       fileType: 'jpg',
//       success: function (res) {
//         console.log(res)
//         that.data.imgArray.push(res.tempFilePath)
//         wx.setStorage({
//           key: 'xyMsg',
//           data: that.data.imgArray,
//         })
//         that.loadimg2()

//       }
//     })
//   },
//   loadimg3() {
//     var that = this
//     context3 = wx.createCanvasContext('canvas4');
//     wx.canvasToTempFilePath({
//       canvasId: 'canvas4',
//       fileType: 'jpg',
//       success: function (res) {
//         console.log(res)
//         that.data.imgArray.push(res.tempFilePath)

//         wx.setStorage({
//           key: 'xyMsg',
//           data: that.data.imgArray,
//         })
//         if (res) {
//           wx.navigateBack({
//             delta: 1
//           })
//         }

//       }
//     })
//   },
//   loadimg2() {
//     var that = this
//     wx.canvasToTempFilePath({
//       canvasId: 'canvas3',
//       fileType: 'jpg',
//       success: function (res) {
//         console.log(res)
//         that.loadimg3()
//         that.upImgs(that.data.imgArray[0], 0)
//         that.data.imgArray.push(res.tempFilePath)
//         wx.setStorage({
//           key: 'xyMsg',
//           data: that.data.imgArray,
//         })
//         console.log(that.data.imgArray)
//       }
//     })
//   },
//   //签字过程
//   canvasMove: function (event) {
//     var that = this
//     if (isButtonDown) {
//       arrz.push(1);
//       console.log(event)
//       arrx.push(event.changedTouches[0].x);
//       arry.push(event.changedTouches[0].y);
//     };

//     for (var i = 0; i < arrx.length; i++) {
//       if (arrz[i] == 0) {
//         context.moveTo(arrx[i], arry[i])
//       } else {
//         context.lineTo(arrx[i], arry[i])
//       };

//     };
//     context.clearRect(0, 0, canvasw, canvash);
//     context.setStrokeStyle('#000000');
//     context.setLineWidth(4);
//     context.setLineCap('round');
//     context.setLineJoin('round');
//     context.stroke();

//     context.draw(false);
//   },
//   //确认签名
//   clickMe: function () {
//     var that = this
//     if (arrx.length == 0) {
//       wx.showModal({
//         title: '提示',
//         content: '签名内容不能为空！',
//         showCancel: false
//       });
//       return false;
//     };
//     wx.canvasToTempFilePath({
//       canvasId: 'canvas',
//       fileType: 'jpg',
//       success: function (res) {
//         console.log(res)
//         that.setData({
//           name: res.tempFilePath,
//           canshow: true,
//           canshow2: false,
//           signShow: false,
//         })
//         wx.getSystemInfo({
//           success: function (res) {
//             console.log(res)
//             if (res.model == "iPhone X"){
//               context4.drawImage(that.data.img3, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//               context4.drawImage(that.data.name, posterWidth / 390 * 50, posterWidth / 390 * 350, posterWidth / 390 * 200, posterWidth / 390 * 100);
//               context4.draw();
//             }else{
//               context4.drawImage(that.data.img3, 0, 0, that.data.myCanvasWidth, that.data.myCanvasHeight);
//               context4.drawImage(that.data.name, posterWidth / 375 * 50, posterWidth / 375 * 280, posterWidth / 375 * 200, posterWidth / 375 * 100);
//               context4.draw();
//             }
//           }
//         })
       

//       }
//     })
//   },
//   //保存画布图片本地路径
//   clickMe2: function () {
//     var that = this
//     console.log()
//     that.loadimg()

//   },
//   upImgs: function (imgurl, index) {
//     var that = this;
//     wx.uploadFile({
//       url: 'https://api.mfk.com/app/api/record_app.php?type=uppic',
//       filePath: imgurl,
//       name: 'file',
//       header: {
//         'content-type': 'multipart/form-data'
//       }, // 设置请求的 header
//       formData: null, // HTTP 请求中其他额外的 form data
//       success: function (res) {
//         var protocol = []
//         var data = JSON.parse(res.data)
//         console.log(data['msg']);
//         protocol.push(data['msg'])
//         wx.setStorage({
//           key: 'protocol',
//           data: data,
//         })
//         if (data['res'] == true) {
//           index++
//           console.log(index)
//           if (that.data.imgArray[index] != undefined) {//存在下一张
//             that.upImgs(that.data.imgArray[index], index);
//           }
//         } else {
//           console.log(data['msg']);
//         }
//       }
//     })
//   },
//   canvasEnd: function (event) {
//     isButtonDown = false;
//   },
//   cleardraw: function () {
//     //清除画布
//     arrx = [];
//     arry = [];
//     arrz = [];
//     context.draw(false);
//   },

// })

var app = getApp();
var util = require('../../utils/util.js');
var recorderManager = wx.getRecorderManager(); //录音管理
var options = {
  duration: 300000,
  sampleRate: 16000,
  numberOfChannels: 1,
  encodeBitRate: 48000,
  format: 'mp3',
  frameSize: 50,
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0, //录音时长
    isPause: true, //控制暂停继续
    minute: "00", //分
    second: "00", //秒
    src: '', //试听路径
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    recorderManager.onStop((res) => {
      console.log(res)
    })
  },
  //开始录音
  startRecording() {
    var that = this
      //录音开始
      // that.listenerButtonStop()
      recorderManager.start(options)
      var num = that.data.num;
      var timeOrder = that.data.timeOrder
      var createTime = new Date().getTime();
      var createDate = util.formatTime(new Date);
      that.setData({
        createDate: createDate,
        createTime: createTime,
        minute: "00", //分
        second: "00", //秒
      });
      // 记录录音时长
      that.data.timer = setInterval(function () {
        num++;
        if (num > 29) {
          that.setData({
            num: num,
          });
        } else {
          that.setData({
            num: num,
          });
        }
        var time = num;
        var second = time % 60;
        console.log(num, that.data.timer)
        var minute = "0" + parseInt(time / 60);
        if (second < 10) {
          second = "0" + second;
        }
        that.setData({
          second: second,
          minute: minute,
        })
        console.log(num, time)
        if (time >= 180) { //限制时长
          console.log('三分钟')
          that.stopRecording();
          clearInterval(that.data.timer)
        }
      }, 1000);
  },
  //暂停录音
  pauseRecording() {
    console.log('暂停录音')
    var that = this
    recorderManager.pause();
    clearInterval(that.data.timer);
    console.log(that.data.timer)
  },
  //继续录音
  resumeRecording() {
    console.log("继续录音", 1);
    var that = this;
    var num = that.data.num;
    recorderManager.resume();
    // 记录录音时长
    that.data.timer = setInterval(function () {
      num++; //
      console.log(num, that.data.timer)
      var time = num;
      var second = time % 60;
      var minute = "0" + parseInt(time / 60);
      if (second < 10) {
        second = "0" + second;
      }
      that.setData({
        second: second,
        minute: minute,
        num: num,
      })
      if (time >= 180) {
        that.stopRecording();
        clearInterval(that.data.timer)
      }
    }, 1000);
  },
  //完成
  stopRecording() {
    console.log("停止录音...");
    var that = this;
    clearInterval(that.data.timer)
    that.setData({
      num: 0,
    });
    recorderManager.stop();
  },
  onUnload: function () {
    
  },

  
})