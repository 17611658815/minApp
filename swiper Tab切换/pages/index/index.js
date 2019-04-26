// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//      arr:['全部','审核中','未通过','已通过'],
//      currentTab:0,
//     winHeight:''
//   },
//   onLoad(){
//     var that = this
//     wx.getSystemInfo({
//       success: function (res) {
//         console.log(res)
//         that.setData({
//           winHeight: res.windowHeight-29 //这是减去tab导航的高度
//         });
//       }
//     });
//   },
//   //第一步先完成导航tab切换样式
//   swichNav(e){
//     var current = e.currentTarget.dataset.current
//     this.setData({
//       currentTab: current
//     })
//   },
//   bindChange(e){
//     var current = e.detail.current
//     this.setData({
//       currentTab: current
//     })
//   }
// })
var app = getApp();
var recorderManager = wx.getRecorderManager(); //录音管理

var options = {
  duration: 300000,
  sampleRate: 16000,
  numberOfChannels: 1,
  encodeBitRate: 48000,
  format: 'mp3',//这里是生成的音频文件格式
  frameSize: 50,
};
Page({

  data: {
    audioMsg:{}
  },
  onLoad(){
    var that = this
    //监听录音结束 并返回本地MP3文件
    recorderManager.onStop((res) => {
      that.setData({
        audioMsg:res
      })
      console.log(res)
    })
  },
  //开始录音
  startRecording(){
    recorderManager.start(options)
    console.log('开始')
  },
  //暂停录音
  pauseRecording() {
    recorderManager.pause();
    console.log('暂停')
  }, 
  //继续录音
  resumeRecording(){
    recorderManager.resume();
  },
  //结束录音
  stopRecording() {
    recorderManager.stop();
  }
})
