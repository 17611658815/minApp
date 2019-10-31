const data = require('./area.js')
Page({
  data: {
    val1: '',
    val2: '',
    val3: '',
     city: [],
    multiArray: [],
    multiIndex: [0, 0], //地址索引
    multiId: [], //地址id
     array: ['中国', '美国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国',
      },
      {
        id: 1,
        name: '中国',
      },
      {
        id: 2,
        name: '巴西',
      },
      {
        id: 3,
        name: '日本',
      },
    ],
    arrIndex: -1,
    index: 0
  },
  onLoad() { 
    console.log(data)
      
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
  // 获取地区数据
    getArea() {
    },
  delvalu1() {
    this.setData({
      val1: ''
    })
  },
  delvalu2() {
    this.setData({
      val2: ''
    })
  },
  delvalu3() {
    this.setData({
      val3: ''
    })
  },
  valChange1(e) {
    this.setData({
      val1: e.detail.value
    })
    console.log(e)
  },
  valChange2(e) {
    this.setData({
      val2: e.detail.value
    })
  },
  valChange3(e) {
    this.setData({
      val3: e.detail.value
    })
  },
  goshopAddres(){
    my.navigateTo({
      url:'/pages/shopAddres/shopAddres'
    });
  }
});
