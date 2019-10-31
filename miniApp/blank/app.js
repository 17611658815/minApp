
App({
  onLaunch(options) {
     my.getSystemInfo({
            success: (res) => {
                console.log(res)
                 if (res.model == 'iPhone10,3' || res.model == 'iPhone10,6' || res.model == 'iPhone11,8'|| res.model == 'iPhone11,2') {
                    this.globalData.isIphoneX = true
                }
            }
        })
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  globalData:{
    isIphoneX:false
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
