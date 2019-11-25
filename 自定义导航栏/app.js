//app.js


App({
  /**
   * 加载页面
   * @param {*} options 
   */
  onShow: function (options) {
   
  },
  onLaunch: async function () {
    let self = this;

    //设置默认分享
    this.globalData.shareData = {
      title: "智酷方程式"
    }

    // this.getSysInfo();
  },
  globalData: {
    //默认分享文案
    shareData: {},
    qrCodeScene: false, //二维码扫码进入传参
    systeminfo: false,   //系统信息
    headerBtnPosi: false,  //头部菜单高度
  }
});