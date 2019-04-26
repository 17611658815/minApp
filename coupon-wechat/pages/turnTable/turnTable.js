// pages/turnTable/turnTable.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      animationData: {},
      time:true //判定是否准许抽奖
    },

    /**
     * button点击事件
     */
    start(e) {
      let angle = Math.random() * 45 + 360+22.5
      if (this.data.time == true){
        this.rotate(angle)
        
        this.setData({
          time:false
        })
      }else{
        wx.showToast({
          title: '调皮！只能抽一次哦！',
          icon: 'none',
          duration: 1000
        })
      } 
    },
    /**
     * 旋转动画
     */
    rotate(angle){
      const animation = wx.createAnimation({
        duration: angle / 360 * 2000,
        timingFunction: 'ease',
      })
      animation.rotate(angle).step()
      this.setData({
        animationData: animation.export()
      })
       
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})