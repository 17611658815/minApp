// components/module/module.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      msg:{
        type:String
      },
    parentFn:{
      type:Function
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },
  
  

  /**
   * 组件的方法列表
   */
  methods: {
    leftTranslate: function () {
      console.log(this.data.msg)
      this.animation = wx.createAnimation({ duration: 3000, timingFunction: 'ease', });
      var systemInfo = wx.getSystemInfoSync();
      this.animation.translateY(1220 / 750 * systemInfo.windowWidth).step()
      this.setData({ animation: this.animation.export() })
    },
    //向父组件传递参数
    search: function (e) {
      var that = this;
      this.animation = wx.createAnimation({ duration: 3000, timingFunction: 'ease', });
      this.animation.rotate(0, 0).translateX(0, 0).skew(0, 0).step({ duration: 0 })
      this.setData({
        animation: this.animation.export(),
        })
      var date = { showsaerch: true }
      this.triggerEvent('myevent', date);
    }
  }
})
