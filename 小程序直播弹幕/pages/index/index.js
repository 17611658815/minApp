Page({
    data:{
        arr:[],
        msg:''
    },
    getMessage(e){
        console.log(e)
        this.setData({
            msg: e.detail.value
        })
    },
    onReady(res) {
        this.ctx = wx.createLivePlayerContext('player')
    },
    statechange(e) {
        console.log('live-player code:', e.detail.code)
    },
    error(e) {
        console.error('live-player error:', e.detail.errMsg)
    },
    bindPlay() {
        let that = this;
        let arr = that.data.arr;
        arr.push({
            val: that.data.msg,
            id: 1
        })
        that.setData({
            arr
        })
    },
    bindPause() {
        this.ctx.pause({
            success: res => {
                console.log('pause success')
            },
            fail: res => {
                console.log('pause fail')
            }
        })
    },
    bindStop() {
        this.ctx.stop({
            success: res => {
                console.log('stop success')
            },
            fail: res => {
                console.log('stop fail')
            }
        })
    },
    bindResume() {
        this.ctx.resume({
            success: res => {
                console.log('resume success')
            },
            fail: res => {
                console.log('resume fail')
            }
        })
    },
    bindMute() {
        this.ctx.mute({
            success: res => {
                console.log('mute success')
            },
            fail: res => {
                console.log('mute fail')
            }
        })
    }
})