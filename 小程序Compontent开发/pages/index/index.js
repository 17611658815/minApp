//index.js
//获取应用实例
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;
var currentDay = new Date().getDate();
var currentWeek = new Date().getDay();
var currentDate = currentYear + '-' + currentMonth + '-' + currentDay;

var startDate = '';
import templates from '../../common/template.js'
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    Array: [1, 3, 4, 5, 2, 12, 3, 5, 6, 2, 34, 5, 2, 1]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onTap(e) {
    console.log(e)
  },
  itemclick(event) {
    templates.onclick(event)
  },
  onLoad: function() {
    let that = this;
    let arr = []
    console.log("\u20BB8")
    let temp = 0
    startDate = currentDate
    var startFormat = this.formatDate(startDate);
   
    console.log(startFormat)
   for(var i = 0 ; i < this.data.Array.length;i++){
     for(var j = 0 ; j < this.data.Array.length -1 ; j++){
       if(this.data.Array[j] > this.data.Array[j+1]){
         temp = this.data.Array[j+1]
         this.data.Array[j+1] = this.data.Array[j]
         this.data.Array[j] = temp
       }
     }
   }
    console.log(this.data.Array)
    for(var i = 0 ; i < this.data.Array.length;i++){
      if (arr.indexOf(this.data.Array[i]) == -1){
        arr.push(this.data.Array[i])
      }
    }
    console.log(arr)
    // es5去重
    // for(var i = 0 ; i <that.data.Array.length;i++){
    //   if (arr.indexOf(that.data.Array[i]) == -1){   == -1 说明不存在此项
    //     arr.push(that.data.Array[i])
    //   }
    // }
    // es6去重
    arr = new Set(this.data.Array)
    console.log(arr)
    //冒泡排序
    // for (var i = 0; i < that.data.Array.length; i++) {
    //   for (var j = 0; j < that.data.Array.length - i; j++) {
    //     if (that.data.Array[j] > that.data.Array[j + 1]) {
    //       temp = that.data.Array[j + 1];
    //       that.data.Array[j + 1] = that.data.Array[j];
    //       that.data.Array[j] = temp;
    //     }
    //   }
    // }
    // 循环字符串
    console.log(that.data.Array)
    for (let i = 0; i < that.data.motto.length; i++) {
      console.log(that.data.motto[i]);
    }
    /*
    includes()：返回布尔值，表示是否找到了参数字符串。
    startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
    endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
    */
    console.log(that.data.motto.includes('Hello')) //检索字符串 true
    console.log(that.data.motto.startsWith('H')) //true
    console.log(that.data.motto.endsWith('d')) //true

  },
  onMyEvent(e) {
    e.detail // 自定义组件触发事件时提供的detail对象
    console.log(e.detail)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formatDate: function (date) {
    return date.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/(-)/g, '-');
  },
})


// 上传图片
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     imgs: [],//本地图片地址数组
//     picPaths:[],//网络路径
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },
//   //添加上传图片
//   chooseImageTap: function () {
//     var that = this;
//     wx.showActionSheet({
//       itemList: ['从相册中选择', '拍照'],
//       itemColor: "#00000",
//       success: function (res) {
//         if (!res.cancel) {
//           if (res.tapIndex == 0) {
//             that.chooseWxImage('album')
//           } else if (res.tapIndex == 1) {
//             that.chooseWxImage('camera')
//           }
//         }
//       }
//     })
//   },
//   chooseWxImage: function (type) {
//     var that = this;
//     var imgsPaths = that.data.imgs;
//     wx.chooseImage({
//       sizeType: ['original', 'compressed'],
//       sourceType: [type],
//       success: function (res) {

//         console.log(res.tempFilePaths[0]);
//         that.upImgs(res.tempFilePaths[0], 0)
//       }
//     }) 
//   },
//   upImgs: function (imgurl, index) {
//     var that = this;
//     wx.uploadFile({
//       url: 'https://mfkapi.39yst.com/app/api/record_app2.php?type=uppic',
//       filePath: imgurl,
//       name: 'file',
//       header: {
//         'content-type': 'multipart/form-data'
//       },
//       formData: null,
//       success: function (res) {
//         console.log(res)
//         var data = JSON.parse(res.data)
//           that.data.picPaths.push(data['msg'])
//           that.setData({
//             picPaths: that.data.picPaths
//           })
//           console.log(that.data.picPaths)
//       }
//     })
//   },
//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })