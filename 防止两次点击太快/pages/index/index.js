//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      tapTime: '',		// 防止两次点击操作间隔太快
  },
  onclick(){
      var nowTime = new Date();
      if (nowTime - this.data.tapTime < 1000) {
          console.log('阻断')
          return;
      }
      console.log('执行')
      this.setData({ tapTime: nowTime });
  }
})
