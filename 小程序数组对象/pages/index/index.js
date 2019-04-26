//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  
    obj: {
      home: ['主页'],
      shipin: ['视频'],
    },
    array:[{name:"张三"},{name:"李四"}],
    show:false,
    numArr:[1,2,3,2,3,4,5,6,3,6,1,7,6,8,9,0,1,3,1,3],
    full:false,
    scorllHeight:500,
    countArr: ['', '', '', ''],
    currentTab:0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  onLoad: function () {
    var numbers = [5, 6, 2, 3, 7];
    var max = Math.max.apply(null, numbers);//找数组最大项
    console.log(max);
    // expected output: 7
    var min = Math.min.apply(null, numbers);
    console.log(min); //最小项
     // expected output: 2

    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };

    const object2 = Object.assign({ c: 4, d: 5 }, object1);

    console.log(object2.c, object2.d);


   var arr = ['哈哈','666']
   console.log(arr.join(','))
    var index = 1
    // var arr = this.data.arr
    var obj = this.data.obj
    var array = this.data.array
    this.setData({
     "arr[0]":'张三丰',//数组某一项setdata
     "arr[1]":"李四民",
      ["array[" + index + "].age"]:'10',//json某一项setdata
      ['obj.' + arr[index]+'['+index+']']:'666'  //对象里某个数组的某一项setData
    })
    console.log([arr[index]])
  },
  addCount() {
    var that = this
    var currentTab = that.data.currentTab
    var countArr = that.data.countArr
    if (this.data.currentTab == 0) {
      this.setData({
        [`countArr[${currentTab}]`]: 3,
        currentTab:1
      })
    } else if (this.data.currentTab == 1){
      this.setData({
        [`countArr[${currentTab}]`]: 2,
        currentTab: 2
      })
    } else if (this.data.currentTab == 2) {
      this.setData({
        [`countArr[${currentTab}]`]: 4,
        currentTab: 3
      })
    } else if (this.data.currentTab == 3) {
      this.setData({
        [`countArr[${currentTab}]`]: 5,
      })
    }
    console.log(countArr)
  },
  clicks(){
    var that = this
    if (app.globalData.message == 0){
      app.globalData.message = 1
      that.setData({
        show:true
      })
      console.log(app.globalData.message)
    }
  },
  shut(){
    var that = this
    that.setData({
      show: false
    })
    console.log(app.globalData.message)
  },
  search(){
    var that = this
    var arr = that.data.array
    for (var i = 0; i < arr.length;i++){
        if(arr[i].name == '张三'){
          arr[i].scend = true
        }
    }
    that.setData({
      array: arr
    })
    console.log(that.data.array)
  },
 
 Distinct(){
   var that = this
   var arr = that.data.numArr
   var numArr = []
   for(var i = 0 ; i <arr.length;i++){
     if (numArr.indexOf(arr[i]) == -1){
       numArr.push(arr[i])
     }
   }
   that.setData({
     numArr: numArr.sort()
   })
   console.log(that.data.numArr)
 }
})
