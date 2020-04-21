var plugin = requirePlugin("QCloudAIVoice");
let manager = plugin.getRecordRecognitionManager();
let appid = 1301526617;
let secretid = 'AKID1rRoOm4obAUYOXNRDsLbileKn4D9BSxH';
let secretkey = 'KPGwNYVIsBH9qHSREbnncIkdMxObaO3U';
let openConsole = false;
plugin.setQCloudSecret(appid, secretid, secretkey, openConsole) //设置腾讯云账号信息，其中appid是数字，secret是字符串，
var options = {
    duration: 30000,
    engine_model_type:'16k_0'
};

// manager.start({ duration: 30000, engine_model_type: '16k_0' })
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text: ''
    },
    onLoad(){
        let that = this;
        manager.onStart((res) => {
            console.log('recorder start', res.msg)
        })
        manager.onStop((res) => {
            console.log('recorder stop', res.tempFilePath)
        })
        manager.onError((res) => {
            console.log('recorder error', res.errMsg)
        })
        manager.onRecognize((res) => {
            if (res.result) {
                that.setData({
                    text: res.result
                })
            } else if (res.errMsg) {
                console.log("recognize error", res.errMsg)
            }
        })
    },
    recordingStart() {
        let that = this;
        manager.start(options)
    },
    recordingStop() {
        manager.stop()
    },
})