//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
      content:''
  },
  onShow(){
      this.geeMsg()
  },
  geeMsg(){
      let that = this;
      wx.request({
          url: 'https://mip.39yst.com/app/api/mini_app/content.php?id=7798',
          success:function(res){
              console.log(res.data.content)
              res.data.content = res.data.content.replace(/width\s*:\s*[0-9]+px/g, 'width:100%');
              res.data.content = res.data.content.replace(/<([\/]?)(center)((:?\s*)(:?[^>]*)(:?\s*))>/g, '<$1div$3>');//替换center标签
              res.data.content = res.data.content.replace(/\<img/gi, '<img class="rich-img" ');//正则给img标签增加class
              res.data.content = res.data.content.replace(/\<p/gi, '<P class="rich-p" ');//正则给p标签增加class
            that.setData({
                content: res.data.content
            })
          }
      })
  }
    // https://mip.39yst.com/app/api/mini_app/content.php?id=7798
})
